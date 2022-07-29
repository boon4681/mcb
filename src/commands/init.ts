import chalk from "chalk";
import { existsSync, mkdirSync, rm, rmdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import prompt from "prompts";
import { log } from "../utils/log";
import { Command } from "./base";


export class init extends Command {
    command: string = "init";
    help_list = (a: string) => [
        {
            cmd: `mcb ${a}`,
            msg: `initialize mcb project`
        },
    ];
    cmdhelp = () => [
        {
            cmd: `mcb init`,
            msg: `initialize mcb project`
        }
    ]
    async exec(args: any) {
        super.exec(args)
        let target = this.workspace
        const ans = await prompt(
            [
                {
                    'type': 'text',
                    'name': 'name',
                    'message': 'Project name:',
                    'initial': 'mcb-project',
                    'onState': ({ value }) => {
                        target = path.normalize(value)
                    }
                },
                {
                    type: () =>
                        !existsSync(target) ? null : 'confirm',
                    name: 'overwrite',
                    message: () =>
                        (target === '.' ? 'Current directory' : `Target directory "${target}"`) + ` is not empty.\n Remove existing files and continue?`
                },
                {
                    'type': 'text',
                    'name': 'mcVersion',
                    'message': 'Minecraft version:',
                    'initial': '1.18.2'
                },
                {
                    'type':'text',
                    'name':'author',
                    'message':'author:'
                },
                {
                    'type':'text',
                    'name':'descriptions',
                    'message':'descriptions:'
                }
            ],
            {
                onCancel: () => {
                    console.log(chalk.red('×') + ' Operation cancelled')
                    process.exit(1)
                }
            }
        )
        const workspace = this.join(ans.name)
        if (ans.overwrite!=undefined) {
            if (ans.overwrite == true) rmSync(workspace, { recursive: true })
            else{
                console.log()
                log.error('Cannot create project without overwrite file')
                return process.exit(1)
            }
        }
        mkdirSync(workspace,{recursive:true})
        delete ans.overwrite
        writeFileSync(path.join(workspace,'mcbpack.json'), JSON.stringify({
            ...ans,compiler:{}
        }, null, 4))
    }
}