import antlr4 from 'antlr4';
import mcbLexer from './.antlr/mcbLexer.js';
import mcbParser from './.antlr/mcbParser.js';
import mcbListener from './.antlr/mcbListener.js';
import mcbVisitor from './.antlr/mcbVisitor.js';

const input = `
fun main:
    #score x as dummy
    x[@s] = 30
    x[sub] = x[input]*(180-x[input])
    x[sine] = 4*x[sub]/(40500-x[sub])
end
fun test:

end
`

const chars = new antlr4.InputStream(input);
const lexer = new mcbLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new mcbParser(tokens);
parser.buildParseTrees = true;
const tree = parser.chunk()
const name = 'mcb.sb.'
const temp = 'mcb.temp'
class Visitor extends mcbVisitor {
    
}

//console.log((tree.accept(new Visitor)));
// console.log(JSON.stringify((tree.accept(new Visitor)).flat(Infinity).join('\n')))
console.log((tree.accept(new Visitor)).flat(Infinity).filter(a=>a!=null).join('\n'))
