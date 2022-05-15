import { readFileSync } from 'fs';
import * as yup from 'yup'
//@ts-expect-error
import parse from 'json-parse-even-better-errors'
import * as errors from '../errors/errors'

interface compiler_struct {
    "root": string | string[],
    "output": string
}

export interface mcbpack_struct {
    name: string,
    version: string,
    compiler: { [key: string]: compiler_struct; }
}


const mcbpack_schema = yup.object().shape({
    name: yup.string().required(),
    version: yup.string().required(),
    compiler: yup.array().transform((_, a) => Object.values(a)).of(yup.object({
        root: yup.lazy(val => (Array.isArray(val) ? yup.array().of(yup.string()).required() : yup.string().required())),
        output: yup.string().required()
    }))
})

export const loadMCBpack = async (path: string): Promise<mcbpack_struct> => {
    const json_str = readFileSync(path, 'utf-8')
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
            return config
        } else {
            for (const err in errors_record) {
                const is_compiler = err.match(/^compiler(\[([0-9]+)\])/i)
                const error_msg = is_compiler ? errors_record[err].replace(is_compiler[1], `.${Object.keys(config.compiler)[Number(is_compiler[2])]}`) : errors_record[err]
                errors.critical({
                    path,
                    message: error_msg
                })
            }
        }
    } catch (error: any) {
        const get = error.message.match(/JSON at position ([0-9]+) while/i)
        const position = get ? Number(get[1]) : error.position -1
        const lines = json_str.slice(0, position).split('\n')
        const line = lines.length > 0 ? lines.length - 1 : 0
        const column = lines[line - 1].length
        errors.critical({
            name: 'JSONSyntaxError',
            path,
            position: { line, column },
            preSpace: 2,
            message: error.message
        })
    }
    process.exit(1)
}