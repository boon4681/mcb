
import { ParserRuleContext, ANTLRErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ts'
import { ANTLRInputStream } from 'antlr4ts/ANTLRInputStream'
import { mcbParser } from '../grammar'
import * as errors from './errors'

export default class ParserErrorListener implements ANTLRErrorListener<Token>{
    private source: ANTLRInputStream

    constructor(source: ANTLRInputStream) {
        this.source = source
    }
    
    syntaxError(rec: Recognizer<Token, any>, offendingSymbol: Token | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined){
        if(!offendingSymbol) return;
        const recognizer:mcbParser = rec as mcbParser
        const column = charPositionInLine
        const source = this.source.toString()
        const lineIndex = offendingSymbol.startIndex as unknown as number - column
        const Line1nd = source.substring(lineIndex)
        const NL1nd = Line1nd.search(/\n|\r[\n]?/) + lineIndex
        msg = msg.startsWith('no viable alternative') ? 'no viable alternative' : msg

        // console.log(
        //     offendingSymbol,
        //     recognizer.getExpectedTokens(),
        //     recognizer.ruleNames[recognizer.atn.states[recognizer.state].getTransitions()[0].target.ruleIndex],
        // )
        errors.critical({
            name: e?.constructor?.name || "SyntaxError",
            path: this.source.name,
            source: source.substring(lineIndex, NL1nd),
            position: { line, column: column + 2 },
            preSpace: column,
            message: msg.replace(/<EOF>,|<EOF>/g, "")
        })
        process.exit(1)
    }
    // syntaxError(recognizer: any, offendingSymbol: any, line: any, charPositionInLine: any, msg: any, payload: any): void {
    //     const column = charPositionInLine
    //     const source = this.source.toString()
    //     const lineIndex = offendingSymbol.start - column
    //     const Line1nd = source.substring(lineIndex)
    //     const NL1nd = Line1nd.search(/\n|\r[\n]?/) + lineIndex
    //     msg = msg.startsWith('no viable alternative') ? 'no viable alternative' : msg
    //     console.log(
    //         offendingSymbol.getTokenNames()
    //     )
    //     errors.critical({
    //         name: payload?.constructor?.name || "SyntaxError",
    //         path: this.source.name,
    //         source: source.substring(lineIndex, NL1nd),
    //         position: { line, column: column + 2 },
    //         preSpace: column,
    //         message: msg.replace(/<EOF>,|<EOF>/g, "")
    //     })
    //     process.exit(1)
    // }
}