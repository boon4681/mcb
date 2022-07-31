import chalk from "chalk";
import { Glob, GlobSync } from "glob";
import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import ora from "ora";
import prompt from "prompts";
import { MCB } from "../mcb";
import { loadmcbpack } from "../mcb/mcbpack";
import { load_commands } from "../minecraft/meta";
import { makeNotExistDir } from "../utils/file";
import { log } from "../utils/log";
import { Command } from "./base";

export class build extends Command {
    command: string = "., build";
    help_list = (a: string) => [
        {
            cmd: `mcb ${a}`,
            msg: `build mcbpack to minecraft datapack`
        },
        {
            cmd:`mcb ${a} -w`,
            msg: `Watch input files`,
            tag: 'soon'
        }
    ];
    cmdhelp = () => [
        {
            cmd: `mcb build,.`,
            msg: `build mcbpack to minecraft datapack`
        }
    ]
    async exec(args: any) {
        super.exec(args)
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
        const version = await mcb.load_resource()
        await new Promise((resolve) => setTimeout(resolve, 250))
        if (existsSync(options.output)) rmSync(path.join(options.output, '/'), { recursive: true })
        const mc_outDir = path.join(options.output, `data/minecraft`)
        const mcTag_function = path.join(mc_outDir, `tags/functions`);
        log.warn("You cannot canceling the process.")
        log.info('Compiling ...');
        await new Promise((resolve) => setTimeout(resolve, 500));
        for (const r of [options.root].flat(1)) {
            const root = path.join(this.workspace, r)
            if (!existsSync(root)) {
                log.error(chalk.red('This path is not exist.', '\n->', JSON.stringify(root)))
                process.exit(1)
            }
            const glob = (await new GlobSync('**/*.mcb', {
                root: root
            }))
            for (const file of glob.found) {
                const dir = path.join(this.workspace, path.join(file, '..'))
                await mcb.compile(r, path.relative(root, dir), file)
            }
        }
        makeNotExistDir(mcTag_function)
        writeFileSync(path.join(options.output, 'pack.mcmeta'), JSON.stringify(
            {
                "pack": {
                    "pack_format": version.data_pack_version,
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
        log.succeed("Compile success.")
        console.log()
    }
}