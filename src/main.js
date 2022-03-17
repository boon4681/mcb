import antlr4 from 'antlr4';
import mcbLexer from './.antlr/mcbLexer.js';
import mcbParser from './.antlr/mcbParser.js';
import mcbListener from './.antlr/mcbParserListener.js';
import mcbVisitor from './.antlr/mcbParserVisitor.js';
import * as SCBuidler from './utils/ScoreboardBuilder.js'
import Debug from './utils/debug.js'
import * as tempError from './error/genericErrorHandling.js'
import ParserErrorListener from './error/ParserErrorListener.js';
import boonid from './utils/boonid.js';

const input = `
// fun main:
//     x[@s[scores={x=5}]] = 10
//     x[y] = -15
//     x[x] = x[x]-30*50
//     x[sub] = x[input]*(180 - x[input])
//     x[sine] = 4*x[sub]/(40500-x[sub])
// end

fun test:
    if block ~ ~4 ~ #log and !block ~ ~ ~4 #log:
        x[x] = 5
        if block ~ ~4 ~ #log and !block ~ ~ ~4 #log:
            x[x] = 5
        end
    end
    if block ~5 ~ ~ #wool and !entity @s or x[x] matches 1.. and x[x] >= y[x]:
    end
end

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

fun test_repeat:
    repeat:
        x[i] -= 1
    until x[i] matches ..3 or x[y]>= x[x]
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
debug.showingSection = ["loop", 'if']
// mcb.<function name>.if_id
const auto_gen_name = 'mcb'
class Visitor extends mcbVisitor {
    SCIDReg = {}
    DISJIDReg = {}
    currentSC = ""
    currentFN = ""

    Functions = {}
    IFs = {}
    WhileDos = {}
    RepeatUntils = {}

    child(c, i, t) {
        if (i !== undefined)
            return t ? c.children[i].getText() : c.children[i]
        return c.getText()
    }

    SCinit(p, a, b, c) {
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
                tempError.critical("unspected value", c)
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
                tempError.critical("unspected value", c)
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
                tempError.critical("unspected value", c)
            }
        }
        else {
            tempError.critical("unspected value", c)
        }
        return value
    }

    visitFunctionDeclare(c) {
        const name = this.child(c, 1, 1)
        this.currentFN = name
        tempError.critical_check(!this.Functions[name], c)(() => {
            this.Functions[name] = {
                name: name,
                statements: this.visitChildren(c).flat(Infinity).filter(a => a != null)
            }
        }, "Function overloading is not allow in mcb")
        console.log(this.Functions[name])
    }

    visitAssignment(c) {
        const assignee = debug.checkVisit(c, this.visit(this.child(c, 0)), 'score')
        tempError.critical_check(assignee.type === "scoreboardIdentify", c)(() => {
            this.currentSC = assignee.value.objective
            if (!this.SCIDReg[this.currentSC])
                this.SCIDReg[this.currentSC] = {
                    regID: 0
                }
        }, "scoreboardIdentify not found.")
        const AssignmentOperator = this.visit(this.child(c, 1))
        const statements = this.visit(this.child(c, 2))[0]
        let value = statements.statements || []
        if (statements.type === "scoreboardLiteral" && AssignmentOperator === '=') {
            value.push(
                SCBuidler.scoreSet(
                    assignee.value.target,
                    this.currentSC,
                    statements.value
                )
            )
        }
        else if (statements.type === "scoreboardLiteral") {
            value.push(
                SCBuidler.scoreSet(
                    SCBuidler.temp,
                    this.currentSC,
                    statements.value
                ),
                SCBuidler.scoreOperationSet(
                    assignee.value.target,
                    this.currentSC,
                    AssignmentOperator,
                    SCBuidler.temp,
                    this.currentSC
                )
            )
        }
        else if (statements.type === "scoreboardIdentify") {
            value.push(
                SCBuidler.scoreOperationSet(
                    assignee.value.target,
                    this.currentSC,
                    AssignmentOperator,
                    statements.value.target,
                    this.currentSC
                )
            )
        } else if (statements.type === "Expression") {
            value.push(
                SCBuidler.scoreOperationSet(
                    assignee.value.target,
                    this.currentSC,
                    AssignmentOperator,
                    statements.value.target,
                    this.currentSC
                )
            )
        } else {
            tempError.critical('Unavailable assignment operator', c, this.child(c, 0, 1).length)
        }
        return value
    }

    visitAdditiveExpression(c) {
        const p = debug.checkVisit(c, this.visitChildren(c), 'score')
        if (p.length >= 3) {
            let data = p.slice()
            for (let i = 0; i < p.length; i += 3) {
                const statements = this.SCinit(data, 0, 2, c)
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
        const p = debug.checkVisit(c, this.visitChildren(c), 'score')
        if (p.length >= 3) {
            let data = p.slice()
            for (let i = 0; i < p.length; i += 3) {
                const statements = this.SCinit(data, 0, 2, c)
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
        return debug.checkVisit(c, this.child(c), 'score')
    }

    visitMultiplicativeOperator(c) {
        return debug.checkVisit(c, this.child(c), 'score')
    }

    visitAdditiveOperator(c) {
        return debug.checkVisit(c, this.child(c), 'score')
    }

    visitAsExpression(c) {
        return debug.checkVisit(c, this.visitChildren(c), 'score')[0]
    }

    visitParentAssignableExpression(c) {
        return debug.checkVisit(c, this.visitChildren(this.child(c, 1)), 'score')[0]
    }

    visitRepeatUntil(c) {
        let p = debug.checkVisit(c, this.visitChildren(c), 'loop')
        if (!this.WhileDos[this.currentFN]) {
            this.WhileDos[this.currentFN] = {
                regID: 0
            }
        } else {
            this.WhileDos[this.currentFN].regID++
        }
        if (p[2].type === 'conjuction') {
            const name = `${auto_gen_name}.${this.currentFN}.if.${this.WhileDos[this.currentFN].regID}`
            p[2].value += ` function ${name}`
            this.WhileDos[this.currentFN][name] = {
                name,
                statements: p[1].flat(Infinity).filter(a => a)
            }
            return p[2].value
        } else if (p[2].type === 'disconjuction') {
            const name = `${auto_gen_name}.${this.currentFN}.if.${this.WhileDos[this.currentFN].regID}`
            this.WhileDos[this.currentFN][name] = {
                name,
                statements: p[1].flat(Infinity).filter(a => a)
            }
            p[2].statements.push(`execute if score ${p[2].value.target} ${p[2].value.objective} matches 1 function ${name}`)
            return p[2].statements
        } else {
            tempError.critical(`ScoreboardException unexpected juction types \n${JSON.stringify(p[2])}`,c)
        }
    }

    visitWhileDo(c) {
        let p = debug.checkVisit(c, this.visitChildren(c), 'loop')
        if (!this.WhileDos[this.currentFN]) {
            this.WhileDos[this.currentFN] = {
                regID: 0
            }
        } else {
            this.WhileDos[this.currentFN].regID++
        }
        if (p[1].type === 'conjuction') {
            const name = `${auto_gen_name}.${this.currentFN}.if.${this.WhileDos[this.currentFN].regID}`
            p[1].value += ` function ${name}`
            this.WhileDos[this.currentFN][name] = {
                name,
                statements: p[2].flat(Infinity).filter(a => a)
            }
            return p[1].value
        } else if (p[1].type === 'disconjuction') {
            const name = `${auto_gen_name}.${this.currentFN}.if.${this.WhileDos[this.currentFN].regID}`
            this.WhileDos[this.currentFN][name] = {
                name,
                statements: p[2].flat(Infinity).filter(a => a)
            }
            p[1].statements.push(`execute if score ${p[1].value.target} ${p[1].value.objective} matches 1 function ${name}`)
            return p[1].statements
        } else {
            tempError.critical(`ScoreboardException unexpected juction types \n${JSON.stringify(p[1])}`,c)
        }
    }

    visitIfStatement(c) {
        let p = debug.checkVisit(c, this.visitChildren(c), 'if')
        if (!this.IFs[this.currentFN]) {
            this.IFs[this.currentFN] = {
                regID: 0
            }
        } else {
            this.IFs[this.currentFN].regID++
        }
        if (p[1].type === 'conjuction') {
            const name = `${auto_gen_name}.${this.currentFN}.if.${this.IFs[this.currentFN].regID}`
            p[1].value += ` function ${name}`
            this.IFs[this.currentFN][name] = {
                name,
                statements: p[2].flat(Infinity).filter(a => a)
            }
            return p[1].value
        } else if (p[1].type === 'disconjuction') {
            const name = `${auto_gen_name}.${this.currentFN}.if.${this.IFs[this.currentFN].regID}`
            this.IFs[this.currentFN][name] = {
                name,
                statements: p[2].flat(Infinity).filter(a => a)
            }
            p[1].statements.push(`execute if score ${p[1].value.target} ${p[1].value.objective} matches 1 function ${name}`)
            console.log(this.IFs[this.currentFN][name])
            return p[1].statements
        } else {
            tempError.critical(`ScoreboardException unexpected juction types \n${JSON.stringify(p[1])}`,c)
        }
    }

    visitDisconjuction(c) {
        if (!this.DISJIDReg[this.currentFN])
            this.DISJIDReg[this.currentFN] = {
                regID: 0
            }
        else {
            this.DISJIDReg[this.currentFN].regID++
        }
        let p = debug.checkVisit(c, this.visitChildren(c), 'if').filter(a => a)
        if (p.length == 1) {
            p[0].value = `execute ${p[0].value} run`
            return {
                'type': 'conjuction',
                'value': p[0].value
            }
        }
        return {
            'type': 'disconjuction',
            'value': {
                'objective': SCBuidler.disj_name,
                'target': SCBuidler.disj_target_name + this.DISJIDReg[this.currentFN].regID
            },
            'statements': p.filter(a => a).map(a => {
                return `execute ${a.value} run scoreboard players ${SCBuidler.disj_target_name}${this.DISJIDReg[this.currentFN].regID} ${SCBuidler.disj_name} 1`
            })
        }
    }

    visitConjuction(c) {
        const p = debug.checkVisit(c, this.visitChildren(c), 'if')
        return {
            'type': 'conjuction',
            'value': p.map(a => (a) ? (a.type === "comparison") ? a.value : tempError.critical("unexpected value", c) : null).filter(a => a).join(" ")
        }
    }

    visitComparison(c) {
        const p = debug.checkVisit(c, this.visitChildren(c), 'if')
        if (p.length == 2) {
            return {
                'type': 'comparison',
                'value': `unless ${p[1].value}`
            }
        }
        return {
            'type': 'comparison',
            'value': `if ${p[0].value}`
        }
    }

    visitAsComparison(c) {
        return debug.checkVisit(c, this.visitChildren(c), 'if')[0]
    }

    visitBlockExpression(c) {
        let p = debug.checkVisit(c, this.visitChildren(c), 'if')
        p[0] = "block"
        return {
            'type': 'comparison',
            'value': p.join("")
        }
    }

    visitLocateStatement(c) {
        return this.child(c) + " "
    }

    visitBlockTag(c) {
        return this.child(c)
    }

    visitEntityNBTExpression(c) {
        return {
            'type': 'comparison',
            'value': debug.checkVisit(c, this.child(c), 'if')
        }
    }

    visitScoreNscoreExpression(c) {
        const p = debug.checkVisit(c, this.visitChildren(c), 'if')
        return {
            'type': 'comparison',
            'value': `score ${p[0].value.target} ${p[0].value.objective} ${p[1]} ${p[2].value.target} ${p[2].value.objective}`
        }
    }

    visitScoreNrangeExpression(c) {
        const p = debug.checkVisit(c, this.visitChildren(c), 'if')
        return {
            'type': 'comparison',
            'value': `score ${p[0].value.target} ${p[0].value.objective} matches ${p[2]}`
        }
    }

    visitComparator(c) {
        return debug.checkVisit(c, this.child(c))
    }

    visitRange(c) {
        return debug.checkVisit(c, this.child(c), 'if').replace(' ', '')
    }
}
//console.log((tree.accept(new Visitor)));
// console.log(JSON.stringify((tree.accept(new Visitor)).flat(Infinity).join('\n')))
console.log("END", (tree.accept(new Visitor)).flat(Infinity).filter(a => a != null).join('\n'))
