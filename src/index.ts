import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { mcbLexer, mcbParser } from './grammar'
import Visitor from './mcb/Visitor'
import { genericErrorHandling } from './errors/genericErrorHandling'
import ParserErrorListener from './errors/ParserErrorListener'

const input = `
fun main:
    // x[@s[scores={x=5}]] = 10
    // x[y] = -15
    x[x] = x[x]-30*50
    x[sub] = x[input]*(180 - x[input])
    x[sine] = 4*x[sub]/(40500-x[sub])
end

// fun test:
//     if block ~ ~4 ~ #log and !block ~ ~ ~4 #log:
//         x[x] = 5
//         if block ~ ~4 ~ #log and !block ~ ~ ~4 #log:
//             tp @e[tag=heleguin_part,tag=move.update] @s
//             tp @e[tag=heleguin_part,tag=move.update] ~ ~-0.25 ~
//             tag @e[tag=heleguin_part,tag=move.update] remove move.update
//         end
//     end
//     if block ~5 ~ ~ #wool and !entity @s or x[x] matches 1.. and x[x] >= y[x]:
//     end
// end

// fun test_if:
//     if x[i] matches ..5 or x[y]>= x[x]:
//         x[x] = 5
//     end
// end

// fun test_while:
//     while x[i] matches ..5 and x[y]>= x[x]:
//         x[i]+=1
//     end
// end
// fun test_repeat:
//     repeat:
//         x[i] -= 1
//     until x[i] matches ..3 or x[y]>= x[x]
// end

`

const inputStream = new ANTLRInputStream(input);
const error = new genericErrorHandling(inputStream);
const parserErrorListener = new ParserErrorListener(inputStream)
const lexer = new mcbLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new mcbParser(tokenStream);
parser.removeErrorListeners()
parser.addErrorListener(parserErrorListener)
const tree = parser.mcb();
const visitor = new Visitor(error)
tree.accept(visitor)