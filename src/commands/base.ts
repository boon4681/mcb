import chalk from "chalk"
import path from "node:path"
import { mark } from './../utils/mark'

export abstract class Command {
    workspace = process.cwd()
    command = ""
    aliases: { [key: string]: string } = {}
    help_list: (args: any) => { cmd: string, msg: string, tag?: string, key?: string }[] = (a) => {
        return []
    }
    cmdhelp: (args: any) => { cmd: string, msg: string, tag?: string, key?: string }[] = (a) => {
        return []
    }
    private space(size: number) {
        return new Array(size).fill(" ").join("")
    }
    help(args: any) {
        if (args.help) {
            console.log(`mcb ${this.command}\n`)
            console.log(`Usage:`)
            mark()
            const m = this.help_list(args._[0])
            const sizes = m.map(a => a.cmd.length).sort((a, b) => a - b)
            const max = sizes[sizes.length - 1]
            m.forEach(a => {
                const v = Object.keys(this.aliases).filter(e => this.aliases[e] == a.key)
                console.log(
                    chalk.cyan(a.cmd) +
                    this.space(max + 3 - a.cmd.length) +
                    ((a.tag == "soon") ? chalk.yellow.strikethrough(a.msg) + chalk.yellow(" comming soon") : a.msg),
                    ...(v.length > 0) ? ["\n" + this.space(max + 3) + "aliases:", v] : ['']
                )
            })
            console.log()
            process.exit(0)
        }
    }
    join = (...args: string[]) => path.join(this.workspace, ...args)
    exec(args: any) {
        this.help(args)
    }
}