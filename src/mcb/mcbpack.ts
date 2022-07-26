import { readFileSync } from 'fs';
import * as yup from 'yup'
//@ts-expect-error
import parse from 'json-parse-even-better-errors'
import * as errors from '../errors/errors'
import * as Path from 'node:path'

interface compiler_struct {
    "root": string | string[],
    "output": string
}

export interface mcbpack_struct {
    name: string,
    mcVersion: string,
    author: string,
    description: string,
    compiler: { [key: string]: compiler_struct; }
}


const mcbpack_schema = yup.object().shape({
    name: yup.string().test({
        name: 'lowercase',
        test: (value, { createError }) => {
            return !!value && value.toLowerCase() === value ? true : createError({
                message: `Field name:"${value}" is not lowercase.\n  You can change it to "${value?.toLocaleLowerCase()}" to prevent this error`
            })
        }
    }).required(),
    author: yup.string(),
    description: yup.string(),
    mcVersion: yup.string().required(),
    compiler: yup.array().transform((_, a) => Object.values(a)).of(yup.object({
        root: yup.lazy(val => (Array.isArray(val) ? yup.array().of(yup.string()).required() : yup.string().required())),
        output: yup.string().required()
    }))
})

export const loadmcbpack = async (path: string): Promise<{ config: mcbpack_struct, root: string }> => {
    const json_str = readFileSync(Path.join(path, 'mcbpack.json'), 'utf-8')
    try {
        parse(json_str)
        const config: mcbpack_struct = JSON.parse(json_str) as mcbpack_struct
        const errs = (await mcbpack_schema.validate(config, { 'abortEarly': false }).catch(a => a)).inner || []
        const errors_record: Record<string, string> = {};
        errs.forEach((a: any) => {
            if (!errors_record[a.path]) {
                errors_record[a.path] = a.message
            }
        })
        if (Object.keys(errors_record).length == 0) {
            config.description = config.description ? config.description : ''
            return {
                config: config,
                root: path
            }
        } else {
            for (const err in errors_record) {
                const is_compiler = err.match(/^compiler(\[([0-9]+)\])/i)
                const error_msg = is_compiler ? errors_record[err].replace(is_compiler[1], `.${Object.keys(config.compiler)[Number(is_compiler[2])]}`) : errors_record[err]
                errors.critical({
                    path: Path.join(path, 'mcbpack.json'),
                    preSpace: 2,
                    message: error_msg
                })
            }
        }
    } catch (error: any) {
        const get = error.message.match(/JSON at position ([0-9]+) while/i)
        const position = get ? Number(get[1]) : error.position - 1
        const lines = json_str.slice(0, position).split('\n')
        const line = lines.length > 0 ? lines.length - 1 : 0
        const column = lines[line - 1].length
        errors.critical({
            name: 'JSONSyntaxError',
            path: Path.join(path, 'mcbpack.json'),
            position: { line, column },
            preSpace: 2,
            message: error.message
        })
    }
    process.exit(1)
}