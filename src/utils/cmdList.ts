import { log } from './log'
import { build, Command, init, make, help } from '../commands'

const aliases: { [key: string]: string } = {
    init: 'init',
    mk: 'make',
    make: 'make',
    '.': '.',
    'build': '.',
    'help': 'help'
}

const cmdList: { [key: string]: Command } = {
    init: new init(),
    make: new make(),
    '.': new build(),
    help: new help()
}

const mapper = (cmd: string) => {
    if (cmd in aliases) {
        return cmdList[aliases[cmd]]
    }
    if (cmd != undefined) {
        log.error(`Unknown Command ${JSON.stringify(cmd)}`)
        console.log()
        process.exit(1)
    }
}

cmdList.help.exec = (a) => {
    a.help = true
    cmdList.help.help_list = () => Object.keys(cmdList).filter(a => a != 'help').map(e => {
        a._[0] = e
        return cmdList[e].cmdhelp(a)
    }).flat(1)
    a._[0] = "help"
    cmdList.help.help(a)
}

export {
    aliases,
    cmdList,
    mapper
}