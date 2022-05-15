import { ANTLRInputStream, ParserRuleContext } from "antlr4ts";
import * as errors from './errors'

export class genericErrorHandling {
    private source: ANTLRInputStream

    constructor(source: ANTLRInputStream) {
        this.source = source
    }

    critical(context: ParserRuleContext, message: string) {
        const line = context.start.line
        const column = context.start.charPositionInLine
        const source = this.source.toString()
        const lineIndex = context.start.startIndex - column
        const Line1nd = source.substring(lineIndex)
        const NL1nd = Line1nd.search(/\n|\r[\n]?/) + lineIndex
        errors.critical({
            path: this.source.name || "",
            position: { line, column: column + 2 },
            source: source.substring(lineIndex, NL1nd),
            preSpace: column,
            message: message.replace(/<EOF>,|<EOF>/g, "")
        })
        process.exit(1)
    }
}
