import { ANTLRInputStream, ParserRuleContext } from "antlr4ts";
import chalk from 'chalk'

export class genericErrorHandling {
    private source: ANTLRInputStream

    constructor(source: ANTLRInputStream) {
        this.source = source
    }

    critical(context: ParserRuleContext, message: string) {
        const line = context.start.line
        const column = context.start.charPositionInLine
        const space = new Array(column).fill(" ").join("")
        const source = this.source.toString()
        const lineIndex = context.start.startIndex - column
        const Line1nd = source.substring(lineIndex)
        const NL1nd = Line1nd.search(/\n|\r[\n]?/) + lineIndex
        console.log(
            chalk.bgRed.rgb(255,255,255)(" ERROR "),
            chalk.red("CriticalError"),
            `${chalk.cyan(this.source.name || "")}:${chalk.yellow(line)}:${chalk.yellow(column + 2)}\n` + 
            chalk.red(source.substring(lineIndex,NL1nd)) + "\n" +
            space + chalk.red(`└── ${message.replace(/<EOF>,|<EOF>/g, "")}`)
        )
        process.exit(1)
    }
}
