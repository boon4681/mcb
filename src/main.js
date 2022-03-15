import antlr4 from 'antlr4';
import mcbLexer from './.antlr/mcbLexer.js';
import mcbParser from './.antlr/mcbParser.js';
import mcbListener from './.antlr/mcbParserListener.js';
import mcbVisitor from './.antlr/mcbParserVisitor.js';

const input = `
fun main:
    x[@s[scores={x=5}]] = 30
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
    
    child(c,i){
        return c.children[i].getText()
    }

    visitScoreboardIdentifier(c){
        // console.log(c.children[2].getText())
        return {
            'type':'scoreboardIdentifier',
            'value':{
                'objective' : this.child(c,0),
                'target': this.child(c,2)
            }
        }
    }
    visitScoreboardLiteral(c){
        return {
            'type':'scoreboardLiteral',
            'value': c.getText(c,0)
        }
    }
    visitAsExpression(c){
        console.log(this.visitChildren(c))
    }
    visitParentAssignableExpression(c){
        // console.log(c.getText())
    }
}

//console.log((tree.accept(new Visitor)));
// console.log(JSON.stringify((tree.accept(new Visitor)).flat(Infinity).join('\n')))
console.log((tree.accept(new Visitor)).flat(Infinity).filter(a=>a!=null).join('\n'))
