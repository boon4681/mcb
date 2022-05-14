import chalk from 'chalk';
import { readFileSync } from 'fs';
import * as yup from 'yup'
//@ts-expect-error
import parse from 'json-parse-even-better-errors'

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

export const load = async (path: string) => {
    const json_str = readFileSync(path, 'utf-8')
    try {
        parse(json_str)
        const config: mcbpack_struct = JSON.parse(json_str) as mcbpack_struct
        const errors = (await mcbpack_schema.validate(config, { 'abortEarly': false }).catch(a => a)).inner || []
        const errors_record: Record<string, string> = {};
        errors.forEach((a: any) => {
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
                console.log(
                    chalk.bgRed.rgb(255, 255, 255)(" ERROR "),
                    chalk.red(
                        "mcbpack.json\n",
                        '  └──', error_msg
                    ),
                )
            }
            process.exit(1)
        }
    } catch (error:any) {
        const lines = json_str.slice(0,error.position).split('\n')
        const line = lines.length > 0 ? lines.length - 1 : 0
        const column = lines.reverse()[0].length
        console.log(
            chalk.bgRed.rgb(255,255,255)(" ERROR "),
            chalk.red("CriticalError"),
            `${chalk.cyan(path)}:${line}:${column}\n` + 
            chalk.red('  └──',error.message)
        )
    }
}