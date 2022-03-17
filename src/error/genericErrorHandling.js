
import * as log from '../utils/log.js'

import chalk from 'chalk'

const critical_check = (expression,c) => {
    return function(callback,message){
        if(expression){
            callback()
        }else{
            critical(message,c)
        }
    }
}

const critical = (message,c) => {
    const column = c.start.column
    const line = c.start.line
    const ctx = c.start
    const arrow_buff = new Array(column).fill(" ").join("")
    const source = ctx.source[1]
    const startline = ctx.start - column
    const endline = source.strdata.substr(startline).search(/\n|\r[\n]?/)
    log.ERR(
        chalk.yellow(`CriticalError`),
        `${source.name}.mcb`
    )
    console.log(`line ${line}, column ${column}.`)
    console.log(chalk.red(source.strdata.substr(startline,endline)))
    console.log(arrow_buff + chalk.red(`└── ${message.replace(/<EOF>,|<EOF>/g, "")}`))
    process.exit(1)
}


export {
    critical_check,
    critical
}