import antlr4 from 'antlr4';
import mcbLexer from './.antlr/mcbLexer.js';
import mcbParser from './.antlr/mcbParser.js';
import mcbListener from './.antlr/mcbParserListener.js';
import mcbVisitor from './.antlr/mcbParserVisitor.js';
import * as SCBuidler from './utils/ScoreboardBuilder.js'
import * as debug from './utils/debug.js'
import * as tempError from './error/genericErrorHandling.js'
import ParserErrorListener from './error/ParserErrorListener.js';

const input = `
fun main:
    x[@s[scores={x=5}]] = 10
    x[y] = -15
    x[x] = x[x]+30*50
    x[sub] = x[input]*(180 - x[input])
    x[sine] = 4*x[sub]/(40500-x[sub])
end

fun main:
end
`

const chars = new antlr4.InputStream(input);
chars.name = "HELLO"
const lexer = new mcbLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new mcbParser(tokens);
parser.removeErrorListeners()
parser.addErrorListener(new ParserErrorListener())
parser.buildParseTrees = true;
const tree = parser.mcb()
class Visitor extends mcbVisitor {
    SCIDReg = {}
    currentSC = ""

    Functions = {}

    child(c, i, t) {
        if (i !== undefined)
            return t ? c.children[i].getText() : c.children[i]
        return c.getText()
    }

    visitFunctionDeclare(c){
        const name = this.child(c,1,1)
        tempError.critical(!this.Functions[name])(()=>{
            this.Functions[name] = {
                name:name,
                statements: this.visitChildren(c).flat(Infinity).filter(a=>a!=null)
            }
        },"intersected function name")
    }

    visitAssignment(c) {
        const assignee = debug.checkVisit(c, this.visit(this.child(c, 0)))
        tempError.critical(assignee.type === "scoreboardIdentify")(() => {
            this.currentSC = assignee.value.objective
            this.SCIDReg[this.currentSC] = {
                regID: 0
            }
        }, "scoreboardIdentify not found.")
        const left = debug.checkVisit(c, this.visit(c.children))

        return ""
    }

    visitMultiplicativeExpression(c) {
        const p = debug.checkVisit(c, this.visitChildren(c))
        if (p.length == 3) {
            const init = (i) => {
                if(p[i].type==="scoreboardLiteral"){
                    
                    console.log(SCBuidler.scoreSet(
                        SCBuidler.temp,
                        this.currentSC,
                        p[0].value
                    ),
                    SCBuidler.scoreOperationSet(
                        `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`,
                        this.currentSC,
                        p[1],
                        SCBuidler.temp,
                        this.currentSC
                    ))
                }
            }
            init(0)
            throw Error
        }
        return p
    }

    visitScoreboardIdentifier(c) {
        return {
            'type': 'scoreboardIdentify',
            'value': {
                'objective': this.child(c, 0, 1),
                'target': this.child(c, 2, 1)
            }
        }
    }

    visitScoreboardLiteral(c) {
        return {
            'type': 'scoreboardLiteral',
            'value': this.child(c, 0, 1)
        }
    }

    visitAssignmentiveOperator(c) {
        return debug.checkVisit(c, this.child(c))
    }

    visitMultiplicativeOperator(c) {
        return debug.checkVisit(c, this.child(c))
    }

    visitAdditiveOperator(c) {
        return debug.checkVisit(c, this.child(c))
    }

    visitAsExpression(c) {
        return debug.checkVisit(c, this.visitChildren(c))[0]
    }

    visitParentAssignableExpression(c) {
        return debug.checkVisit(c, this.visitChildren(this.child(c, 1)))[0]
    }

    visitAdditiveExpression(c) {
        return debug.checkVisit(c, this.visitChildren(c))
    }
}
//console.log((tree.accept(new Visitor)));
// console.log(JSON.stringify((tree.accept(new Visitor)).flat(Infinity).join('\n')))
console.log("END", (tree.accept(new Visitor)).flat(Infinity).filter(a => a != null).join('\n'))
