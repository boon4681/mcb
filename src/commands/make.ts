import chalk from "chalk";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import prompt from "prompts";
import { log } from "../utils/log";
import { Command } from "./base";


export class make extends Command {
    command: string = "mk, make";
    aliases: { [key: string]: string } = {
        'cp': 'compiler-options',
        'cpl': 'compiler-options',
        'comp': 'compiler-options',
        'compil': 'compiler-options',
        'compiler': 'compiler-options',
        'compiler-options': 'compiler-options'
    }
    help_list = (args: any) => {
        return [
            {
                cmd: `mcb ${args} cp`,
                msg: 'generate compiler-options',
                key: 'compiler-options'
            }
        ]
    };
    cmdhelp = () => [
        {
            cmd: `mcb mk,make <option>`,
            msg: `helper tools make easily uses`
        }
    ]
    options_mapper = (option: string) => {
        if (option in this.aliases) {
            return this.aliases[option]
        }
        if (option) {
            log.error(`Unrecognized options "${option}"`)
            console.log()
            process.exit(1)
        }
    }
    async exec(args: any) {
        super.exec(args)
        const mcbpack_path = this.join('mcbpack.json')
        if (!existsSync(mcbpack_path)) {
            log.error('Please initialized project before run this commands')
            console.log()
            process.exit(1)
        }
        Object.keys(args).filter(a => a != '_').map(a => this.options_mapper(a))
        const options = this.options_mapper(args?._[1])
        const ans = options ? { options } : await prompt(
            [
                {
                    'type': 'select',
                    'name': 'options',
                    'message': 'make cmd options:',
                    'choices': [
                        { 'title': 'compiler options', 'value': 'compiler-options' },
                        { 'title': `${chalk.red('static folder')} (comming soon)`, 'disabled': true }
                    ]
                }
            ],
            {
                onCancel: () => {
                    console.log(chalk.red('×') + ' Operation cancelled')
                    process.exit(1)
                }
            }
        )
        let mcbpack = JSON.parse(readFileSync(mcbpack_path, 'utf-8'))
        switch (ans.options) {
            case 'compiler-options':
                const compiler = await prompt(
                    [
                        {
                            'type': 'text',
                            'name': 'name',
                            'message': 'Options Name:',
                            'initial': 'test',
                        },
                        {
                            'type': (_, { name }) => !mcbpack.compiler[name] ? null : 'toggle',
                            'name': 'overwrite',
                            'message': 'This options name is already exist.\nDo you want to overwrite this option?:',
                            'active': 'yes',
                            'inactive': 'no'
                        }
                    ],
                    {
                        onCancel: () => {
                            console.log(chalk.red('×') + ' Operation cancelled')
                            process.exit(1)
                        }
                    }
                )

                if (compiler.overwrite == false) {
                    console.log(chalk.red('×') + ' Operation cancelled')
                    console.log()
                    process.exit(0)
                }

                const ans_compiler = await prompt(
                    [
                        {
                            'type': 'text',
                            'name': 'root',
                            'message': 'Root path:',
                            'initial': './src'
                        },
                        {
                            'type': 'text',
                            'name': 'output',
                            'message': 'Output path:',
                            'initial': './dist'
                        }
                    ],
                    {
                        onCancel: () => {
                            console.log(chalk.red('×') + ' Operation cancelled')
                            process.exit(1)
                        }
                    })
                if (!mcbpack.compiler) {
                    mcbpack.compiler = {}
                }
                mcbpack.compiler[compiler.name] = ans_compiler
                writeFileSync(mcbpack_path, JSON.stringify(mcbpack, null, 4))
                break
            default:
                log.error(`Unrecognized "${ans.options}" option`)
                console.log()
                process.exit(1)
        }
    }
}