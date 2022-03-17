
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

const critical = (message,c,m) => {
    const column = c.start.column
    const line = c.start.line
    const ctx = c.start
    const arrow_buff = new Array(column).fill(" ").join("")
    const source = ctx.source[1]
    const line_start = ctx.start - column + (m||0)
    const line_end = source.strdata.substr(line_start).search(/\n|\r[\n]?/)
    log.ERR(
        chalk.yellow(`CriticalError`),
        `${source.name}.mcb`
    )
    console.log(`line ${line}, column ${column}.`)
    console.log(chalk.red(source.strdata.substr(line_start,line_end)))
    console.log(arrow_buff + chalk.red(`└── ${message.replace(/<EOF>,|<EOF>/g, "")}`))
    process.exit(1)
}


export {
    critical_check,
    critical
}