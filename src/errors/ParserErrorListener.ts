
import { ParserRuleContext, ANTLRErrorListener } from 'antlr4ts'
import { ANTLRInputStream } from 'antlr4ts/ANTLRInputStream'
import chalk from 'chalk'
import { genericErrorHandling } from './genericErrorHandling'

export default class ParserErrorListener implements ANTLRErrorListener<ParserRuleContext>{
    private source: ANTLRInputStream

    constructor(source: ANTLRInputStream) {
        this.source = source
    }

    syntaxError(recognizer: any, offendingSymbol: any, line: any, charPositionInLine: any, msg: any, payload: any): void {
        const column = charPositionInLine
        const space = new Array(column).fill(" ").join("")
        const source = this.source.toString()
        const lineIndex = offendingSymbol.start - column
        const Line1nd = source.substring(lineIndex)
        const NL1nd = Line1nd.search(/\n|\r[\n]?/) + lineIndex
        msg = msg.startsWith('no viable alternative') ? 'no viable alternative' : msg
        console.log(
            chalk.bgRed.rgb(255,255,255)(" ERROR "),
            chalk.red(`${payload?.constructor?.name || "SyntaxError"}`),
            `${chalk.cyan(this.source.name || "")}:${chalk.yellow(line)}:${chalk.yellow(column + 2)}\n` + 
            chalk.red(source.substring(lineIndex,NL1nd)) + "\n" +
            space + chalk.red(`└── ${msg.replace(/<EOF>,|<EOF>/g, "")}`)
        )
        process.exit(1)
    }
}