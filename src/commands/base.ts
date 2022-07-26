import path from "node:path"


export abstract class Command {
    workspace = process.cwd()
    join = (...args: string[]) => path.join(this.workspace, ...args)
    exec(...args: any) { }
}