import { CommonTokenStream, Parser } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { mcbParserListener } from './lib/mcbParserListener'

export class DebugLogger implements mcbParserListener{
    constructor(private symbolTable:CommonTokenStream,private parser:Parser){}
    depth = 0
    log = ''
    visitTerminal?: ((node: TerminalNode) => void) | undefined = (node) => {
        this.log += new Array(this.depth).fill('').join('|') + `[${node.symbol.line}:${node.symbol.charPositionInLine}] ${JSON.stringify(node.text)} -> ` + this.parser.vocabulary.getSymbolicName(node.symbol.type) + '\n';
    };
}