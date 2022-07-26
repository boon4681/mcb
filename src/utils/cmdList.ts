import { log } from './log'
import { build, Command, init, make } from '../commands'

const aliases: { [key: string]: string } = {
    init: 'init',
    mk: 'make',
    make: 'make',
    '.':'.',
    'build':'.'
}

const cmdList: { [key: string]: Command } = {
    init: new init(),
    make: new make(),
    '.': new build()
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

export {
    aliases,
    cmdList,
    mapper
}