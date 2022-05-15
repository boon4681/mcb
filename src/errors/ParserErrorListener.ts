
import { ParserRuleContext, ANTLRErrorListener } from 'antlr4ts'
import { ANTLRInputStream } from 'antlr4ts/ANTLRInputStream'
import * as errors from './errors'

export default class ParserErrorListener implements ANTLRErrorListener<ParserRuleContext>{
    private source: ANTLRInputStream

    constructor(source: ANTLRInputStream) {
        this.source = source
    }

    syntaxError(recognizer: any, offendingSymbol: any, line: any, charPositionInLine: any, msg: any, payload: any): void {
        const column = charPositionInLine
        const source = this.source.toString()
        const lineIndex = offendingSymbol.start - column
        const Line1nd = source.substring(lineIndex)
        const NL1nd = Line1nd.search(/\n|\r[\n]?/) + lineIndex
        msg = msg.startsWith('no viable alternative') ? 'no viable alternative' : msg
        errors.critical({
            name: payload?.constructor?.name || "SyntaxError",
            path: this.source.name,
            source: source.substring(lineIndex, NL1nd),
            position: { line, column: column + 2 },
            preSpace: column,
            message: msg.replace(/<EOF>,|<EOF>/g, "")
        })
        process.exit(1)
    }
}