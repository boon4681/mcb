import antlr4 from 'antlr4';
import mcbLexer from './.antlr/mcbLexer.js';
import mcbParser from './.antlr/mcbParser.js';
import mcbListener from './.antlr/mcbParserListener.js';
import mcbVisitor from './.antlr/mcbParserVisitor.js';
import * as SCBuidler from './utils/ScoreboardBuilder.js'
import Debug from './utils/debug.js'
import * as tempError from './error/genericErrorHandling.js'
import ParserErrorListener from './error/ParserErrorListener.js';

const input = `
fun main:
    x[@s[scores={x=5}]] = 10
    x[y] = -15
    x[x] = x[x]-30*50
    x[sub] = x[input]*(180 - x[input])
    x[sine] = 4*x[sub]/(40500-x[sub])
end

fun test:
    if block ~5 ~ ~ #wool and entity @s or x[x] matches 1..:
    end
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
const debug = new Debug()
debug.showingSection = ["if"]
class Visitor extends mcbVisitor {
    SCIDReg = {}
    currentSC = ""

    Functions = {}

    child(c, i, t) {
        if (i !== undefined)
            return t ? c.children[i].getText() : c.children[i]
        return c.getText()
    }

    SCinit(p, a, b) {
        let value = []
        if (!(p[a].type === "Expression" || p[b] === "Expression")) {
            this.SCIDReg[this.currentSC].regID++
        }
        if (p[a].type === "scoreboardLiteral") {
            value.push(
                SCBuidler.scoreSet(
                    SCBuidler.temp,
                    this.currentSC,
                    p[a].value
                ),
                SCBuidler.scoreOperationSet(
                    `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`,
                    this.currentSC,
                    `=`,
                    SCBuidler.temp,
                    this.currentSC
                )
            )
            if (p[b].type === "scoreboardLiteral") {
                value.push(
                    SCBuidler.scoreSet(
                        SCBuidler.temp,
                        this.currentSC,
                        p[b].value
                    ),
                    SCBuidler.scoreOperationSet(
                        `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`,
                        this.currentSC,
                        `${p[a + 1]}=`,
                        SCBuidler.temp,
                        this.currentSC
                    )
                )
            }
            else if (p[b].type === "scoreboardIdentify") {
                value.push(
                    SCBuidler.scoreOperationSet(
                        `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`,
                        this.currentSC,
                        `${p[a + 1]}=`,
                        p[b].value.target,
                        p[b].value.objective
                    )
                )
            }
            else if (p[b].type === "Expression") {
                value = [...p[b].statements, ...value]
                value.push(
                    SCBuidler.scoreOperationSet(
                        `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`,
                        this.currentSC,
                        `${p[a + 1]}=`,
                        p[b].value.target,
                        p[b].value.objective
                    )
                )
            }
            else {
                tempError.critical(false)(null, "unspected value")
            }
        } else if (p[a].type === "scoreboardIdentify") {
            value.push(
                SCBuidler.scoreOperationSet(
                    `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`,
                    this.currentSC,
                    `=`,
                    p[a].value.target,
                    p[a].value.objective
                )
            )
            if (p[b].type === "scoreboardLiteral") {
                value.push(
                    SCBuidler.scoreSet(
                        SCBuidler.temp,
                        this.currentSC,
                        p[b].value
                    ),
                    SCBuidler.scoreOperationSet(
                        `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`,
                        this.currentSC,
                        `${p[a + 1]}=`,
                        SCBuidler.temp,
                        this.currentSC
                    )
                )
            }
            else if (p[b].type === "scoreboardIdentify") {
                value.push(
                    SCBuidler.scoreOperationSet(
                        `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`,
                        this.currentSC,
                        `${p[a + 1]}=`,
                        p[b].value.target,
                        p[b].value.objective
                    )
                )
            }
            else if (p[b].type === "Expression") {
                value = [...p[b].statements, ...value]
                value.push(
                    SCBuidler.scoreOperationSet(
                        `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`,
                        this.currentSC,
                        `${p[a + 1]}=`,
                        p[b].value.target,
                        p[b].value.objective
                    )
                )
            }
            else {
                tempError.critical(false)(null, "unspected value")
            }
        }
        else if (p[a].type === "Expression") {
            value = [...p[a].statements, ...value]
            if (p[b].type === "scoreboardLiteral") {
                value.push(
                    SCBuidler.scoreSet(
                        SCBuidler.temp,
                        this.currentSC,
                        p[b].value
                    ),
                    SCBuidler.scoreOperationSet(
                        `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`,
                        this.currentSC,
                        `${p[a + 1]}=`,
                        SCBuidler.temp,
                        this.currentSC
                    )
                )
            }
            else if (p[b].type === "scoreboardIdentify") {
                value.push(
                    SCBuidler.scoreOperationSet(
                        `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`,
                        this.currentSC,
                        `${p[a + 1]}=`,
                        p[b].value.target,
                        p[b].value.objective
                    )
                )
            }
            else if (p[b].type === "Expression") {
                value = [...value, ...p[b].statements]
                value.push(
                    SCBuidler.scoreOperationSet(
                        p[a].value.target,
                        p[a].value.objective,
                        `${p[a + 1]}=`,
                        p[b].value.target,
                        p[b].value.objective
                    )
                )
            }
            else {
                tempError.critical(false)(null, "unspected value")
            }
        }
        else {
            tempError.critical(false)(null, "unspected value")
        }
        return value
    }

    visitFunctionDeclare(c) {
        const name = this.child(c, 1, 1)
        tempError.critical(!this.Functions[name])(() => {
            this.Functions[name] = {
                name: name,
                statements: this.visitChildren(c).flat(Infinity).filter(a => a != null)
            }
        }, "intersected function name")
        console.log(this.Functions[name])
    }

    visitAssignment(c) {
        const assignee = debug.checkVisit(c, this.visit(this.child(c, 0)),'score')
        tempError.critical(assignee.type === "scoreboardIdentify")(() => {
            this.currentSC = assignee.value.objective
            if (!this.SCIDReg[this.currentSC])
                this.SCIDReg[this.currentSC] = {
                    regID: 0
                }
        }, "scoreboardIdentify not found.")
        const AssignmentOperation = this.visit(this.child(c, 1))
        const statements = this.visit(this.child(c, 2))[0]
        let value = statements.statements || []
        if (statements.type === "scoreboardLiteral") {
            value.push(
                SCBuidler.scoreSet(
                    assignee.value.target,
                    this.currentSC,
                    statements.value
                )
            )
        }else if (statements.type === "scoreboardIdentify"){
            value.push(
                SCBuidler.scoreOperationSet(
                    assignee.value.target,
                    this.currentSC,
                    AssignmentOperation,
                    statements.value.target,
                    this.currentSC
                )
            )
        }else if (statements.type === "Expression"){
            value.push(
                SCBuidler.scoreOperationSet(
                    assignee.value.target,
                    this.currentSC,
                    AssignmentOperation,
                    statements.value.target,
                    this.currentSC
                )
            )
        }
        return value
    }

    visitAdditiveExpression(c) {
        const p = debug.checkVisit(c, this.visitChildren(c),'score')
        if (p.length >= 3) {
            let data = p.slice()
            for (let i = 0; i < p.length; i += 3) {
                const statements = this.SCinit(data, 0, 2)
                data = data.slice(3, data.length)
                data.unshift(
                    {
                        'type': 'Expression',
                        'value': {
                            "objective": this.currentSC,
                            "target": `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`
                        },
                        'statements': statements
                    }
                )
            }
            return data[0]
        }
        return p[0]
    }

    visitMultiplicativeExpression(c) {
        const p = debug.checkVisit(c, this.visitChildren(c),'score')
        if (p.length >= 3) {
            let data = p.slice()
            for (let i = 0; i < p.length; i += 3) {
                const statements = this.SCinit(data, 0, 2)
                data = data.slice(3, data.length)
                data.unshift(
                    {
                        'type': 'Expression',
                        'value': {
                            "objective": this.currentSC,
                            "target": `${SCBuidler.name}${this.SCIDReg[this.currentSC].regID}`
                        },
                        'statements': statements
                    }
                )
            }
            return data[0]
        }
        return p[0]
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

    visitAssignmentOperator(c) {
        return debug.checkVisit(c, this.child(c),'score')
    }

    visitMultiplicativeOperator(c) {
        return debug.checkVisit(c, this.child(c),'score')
    }

    visitAdditiveOperator(c) {
        return debug.checkVisit(c, this.child(c),'score')
    }

    visitAsExpression(c) {
        return debug.checkVisit(c, this.visitChildren(c),'score')[0]
    }

    visitParentAssignableExpression(c) {
        return debug.checkVisit(c, this.visitChildren(this.child(c, 1)),'score')[0]
    }

    visitScoreNrangeExpression(c){
        const p = debug.checkVisit(c,this.visitChildren(c),'if')
        console.log(`${p[0].value.target} ${p[0].value.objective} matches ${p[2]}`)
    }

    visitComparator(c){
        return debug.checkVisit(c,this.child(c))
    }

    visitRange(c){
        return debug.checkVisit(c,this.child(c),'if')
    }
}
//console.log((tree.accept(new Visitor)));
// console.log(JSON.stringify((tree.accept(new Visitor)).flat(Infinity).join('\n')))
console.log("END", (tree.accept(new Visitor)).flat(Infinity).filter(a => a != null).join('\n'))
