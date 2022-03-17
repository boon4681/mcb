import antlr4 from 'antlr4';

import chalk from 'chalk'

import * as log from '../utils/log.js'

class ParserErrorListener extends antlr4.error.ErrorListener {

    syntaxError(recognizer, symbol, line, column, message, payload) {
        const arrow_buff = new Array(column).fill(" ").join("")
        const source = symbol.source[1]
        const startline = symbol.start - column
        const endline = source.strdata.substr(startline).search(/\n|\r[\n]?/)
        log.ERR(
            chalk.yellow(`${payload?.constructor?.name || "SyntaxError"}`),
            `${source.name}.mcb`
        )
        console.log(`line ${line}, column ${column}.`)
        console.log(chalk.red(source.strdata.substr(startline,endline)))
        console.log(arrow_buff + chalk.red(`└── ${message.replace(/<EOF>,|<EOF>/g, "")}`))
        process.exit(1)
    }
}

export default ParserErrorListener