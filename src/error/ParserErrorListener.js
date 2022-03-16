import antlr4 from 'antlr4';

import chalk from 'chalk'

class ParserErrorListener extends antlr4.error.ErrorListener {

    syntaxError(recognizer, symbol, line, column, message, payload) {
        const _line = line > 0 ? line - 1 : line
        const _column = column > 0 ? column: column
        const arrow_buff = new Array(_column).fill(" ").join("")
        console.log(
            `${chalk.red("error")}`,
            chalk.yellow(`${payload?.constructor?.name || "SyntaxError"}`),
            `${symbol.source[1].name}.mcb`
        )
        console.log(`line ${line}, column ${column}.`)
        console.log(chalk.red(symbol.source[1].strdata.split(/\n|\r[\n]?/)[_line]))
        console.log(arrow_buff + chalk.red(`└── ${message.replace(/<EOF>,|<EOF>/g, "")}`))
        process.exit(1)
    }
}

export default ParserErrorListener