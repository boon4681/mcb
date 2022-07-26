import chalk from "chalk";
import { Glob } from "glob";
import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import prompt from "prompts";
import { MCB } from "../mcb";
import { loadmcbpack } from "../mcb/mcbpack";
import { load_commands } from "../minecraft/meta";
import { makeNotExistDir } from "../utils/file";
import { log } from "../utils/log";
import { Command } from "./base";


export class build extends Command {
    async exec(...args: any) {
        const mcbpack = await loadmcbpack(this.workspace)
        const compiler_options = mcbpack.config.compiler
        const build_options = Object.keys(compiler_options).map(name => {
            return {
                'title': name,
                'value': name
            }
        })
        const ans = await prompt(
            [
                {
                    'type': 'autocomplete',
                    'name': 'options',
                    'message': 'Choose building options:',
                    'choices': build_options
                },
                {
                    'type': 'toggle',
                    'name': 'debug',
                    'message': 'Do you want to see debug log:',
                    'active': 'yes',
                    'inactive': 'no',
                    'initial': false
                }
            ],
            {
                onCancel: () => {
                    console.log(chalk.red('×') + ' Operation cancelled')
                    process.exit(1)
                }
            }
        )
        const mcbconfig = await loadmcbpack(this.workspace)
        const config = mcbconfig.config
        const options = config.compiler[ans.options]
        const mcb = new MCB(
            config.name,
            config.mcVersion,
            options.output,
            ans.debug
        )
        await mcb.load_resource()
        await new Promise((resolve) => setTimeout(resolve, 250))
        if (existsSync(options.output)) rmSync(path.join(options.output, '/'), { recursive: true })
        const mc_outDir = path.join(options.output, `data/minecraft`)
        const mcTag_function = path.join(mc_outDir, `tags/functions`);
        log.info('Compiled');
        await new Promise((resolve) => setTimeout(resolve, 500));
        [options.root].flat(1).forEach(async r => {
            new Glob('**/*.mcb', {
                root: path.relative(this.workspace, r)
            }, async (er, files) => {
                if (!er) {
                    for (const file of files) {
                        const dir = path.relative(r, path.relative(this.workspace, path.join(file, '..')))
                        await mcb.compile(r, dir, file)
                    }
                }
            })
        })
        makeNotExistDir(mcTag_function)
        writeFileSync(path.join(options.output, 'pack.mcmeta'), JSON.stringify(
            {
                "pack": {
                    "pack_format": Number(config.mcVersion[config.mcVersion.length - 1]),
                    "description": config.description
                }
            }, null, 4))
        writeFileSync(path.join(mcTag_function, 'load.json'), JSON.stringify({
            values: [
                `${config.name}:load`
            ]
        }, null, 4))
        writeFileSync(path.join(mcTag_function, 'tick.json'), JSON.stringify({
            values: [
                `${config.name}:tick`
            ]
        }, null, 4))
    }
}