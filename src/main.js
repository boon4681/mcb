import antlr4 from 'antlr4';
import mcbLexer from './.antlr/mcbLexer.js';
import mcbParser from './.antlr/mcbParser.js';
import mcbListener from './.antlr/mcbParserListener.js';
import mcbVisitor from './.antlr/mcbParserVisitor.js';
import * as SCBuidler from './utils/ScoreboardBuilder.js'
import * as debug from './utils/debug.js'

const input = `
fun main:
    x[@s[scores={x=5}]] = 10
    x[y] = -15
    x[x] = x[x]+30*50
    x[sub] = x[input]*(180 - x[input])
    x[sine] = 4*x[sub]/(40500-x[sub])
end
`

const chars = new antlr4.InputStream(input);
const lexer = new mcbLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new mcbParser(tokens);
parser.buildParseTrees = true;
const tree = parser.script()
const name = 'mcb.sb.'
const temp = 'mcb.temp'
class Visitor extends mcbVisitor {
    
    child(c,i,t){
        if(i!==undefined)
        return t ? c.children[i].getText() : c.children[i]
        return c.getText()
    }

    visitScoreboardIdentifier(c){
        return {
            'type':'scoreboardIdentifier',
            'value':{
                'objective' : this.child(c,0,true),
                'target': this.child(c,2,true)
            }
        }
    }
    visitScoreboardLiteral(c){
        return {
            'type':'scoreboardLiteral',
            'value': this.child(c,0,true)
        }
    }
    visitAsExpression(c){
        return debug.checkVisit(c,this.visitChildren(c))[0]
    }
    visitParentAssignableExpression(c){
        return debug.checkVisit(c,this.visitChildren(this.child(c,1)))[0]
    }
    visitAdditiveExpression(c){
        return debug.checkVisit(c,this.visitChildren(c))
    }
    visitMultiplicativeExpression(c){
        const p = debug.checkVisit(c,this.visitChildren(c))
        if(p.length==3){
            throw Error
        }
        return p
    }
    visitMultiplicativeOperator(c){
        return debug.checkVisit(c,this.child(c))
    }
}
//console.log((tree.accept(new Visitor)));
// console.log(JSON.stringify((tree.accept(new Visitor)).flat(Infinity).join('\n')))
console.log("END",(tree.accept(new Visitor)).flat(Infinity).filter(a=>a!=null).join('\n'))
