import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { AdditiveExpressionContext, UnstrippedIfStatementContext, AdditiveOperatorContext, AsComparisonContext, AsExpressionContext, AssignmentContext, AssignmentOperatorContext, BlockExpressionContext, BlockTagContext, CommandsContext, ComparatorContext, ComparisonContext, ConjuctionContext, DeclarationContext, DisconjuctionContext, ElseStatementContext, EntityNBTExpressionContext, ExpressionContext, ForStatementContext, FunctionCallingContext, FunctionDeclarationContext, FunctionModifierContext, FunctionModifiersContext, IfStatementContext, InputparameterContext, LiteralConstantContext, LoadContext, LocateStatementContext, LoopStatementContext, LoopWithContext, McbContext, mcbParserVisitor, MultiplicativeExpressionContext, MultiplicativeOperatorContext, ParentAssignableExpressionContext, RangeContext, RepeatUntilContext, ScoreboardDeclarationContext, ScoreboardIdentifierContext, ScoreboardLiteralContext, ScoreNrangeExpressionContext, ScoreNscoreExpressionContext, StrExprContext, StringContentContext, StringLiteralContext, TopPriorityObjectContext, WhileDoContext, MixAnnotationContext, MixLangContext, MixBlockContext, mcbParser } from '../grammar'
import { genericErrorHandling } from '../errors/genericErrorHandling'
import { ParserRuleContext } from 'antlr4ts';
import SCBuilder from './scoreboardBuilder';
import chalk from 'chalk';
import { log } from '../utils/log';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

// Dear developer who working this project do not change any code in this project if you don't know how it work. 😎
// type returnValue = {
//     type: string,
//     value: any,
//     statements?: string[]
// }
type returnValue = any; // just for now

function returnBuilder(type: string, value: any, statements?: string[]): returnValue {
    return {
        type,
        value,
        statements: statements ? statements : []
    }
}

class Visitor extends AbstractParseTreeVisitor<returnValue> implements mcbParserVisitor<returnValue> {
    SCIDRegistry: Record<string, { id: number }> = {}
    ELSEIDRegistry: Record<string, { id: number }> = {}
    DISJIDRegistry: Record<string, { id: number }> = {}
    IFIDRegistry: Record<string, { id: number }> = {}
    LoopIDRegistry: Record<string, { id: number }> = {}
    FUNCRegistry: Set<string> = new Set()
    IFs: { [key: string]: { [key: string]: { path: string, value: string[] } } } = {}
    Loops: { [key: string]: { [key: string]: { path: string, value: string[] } } } = {}
    isDisconjuctionEnable = false

    private CurrentSC = ""
    private CurrentFN = ""
    private AutoName = "mcb"
    private buildInFunction: { [key: string]: (...a: any) => any } = {
        'print': (ctx: any) => {
            const p: any[] = this.visitChildren(ctx)
            const stack: string[] = []
            for (const i of p) {
                const sub_stack: string[] = []
                switch (i.type) {
                    case 'string':
                    case 'literalNumber':
                        for (const n of i.value) {
                            switch (n.type) {
                                case 'stringcontent':
                                    sub_stack.push(
                                        `{"text":"${n.value.replace(/\r/g, '').replace(/\n/g, '\\n')}"}`
                                    )
                                    break
                                case 'ScoreboardIdentifier':
                                    sub_stack.push(
                                        `{"score":{"objective":"${n.value.objective}","name":${JSON.stringify(n.value.target)}}}`
                                    )
                                    break
                            }
                        }
                        break
                    case 'ScoreboardIdentifier':
                        sub_stack.push(
                            `{"score":{"objective":"${i.value.objective}","name":${JSON.stringify(i.value.target)}}`
                        )
                        break
                }
                stack.push(sub_stack.join(','))
            }
            if (stack.length == 0) stack.push(`{"text":""}`)
            const result = stack.join(`,{"text":" "},`)
            return `tellraw @a [${result}]`
        }
    }

    constructor(
        private namespace: string,
        private folder: string,
        private filename: string,
        private SCBuilder: SCBuilder,
        private error: genericErrorHandling
    ) {
        super()
    }

    protected defaultResult() {
        return null
    }

    protected aggregateResult(aggregate: returnValue, nextResult: returnValue) {
        if (!aggregate && !nextResult)
            return []
        if (aggregate && !nextResult)
            return aggregate
        if (!aggregate && nextResult)
            return nextResult
        return [aggregate, nextResult].flat(1)
    }

    visitDeclaration(ctx: DeclarationContext) {
        const p = this.visitChildren(ctx)
        return p
    }

    visitMcb(ctx: McbContext) {
        const p = this.visitChildren(ctx);
        const Functions = p.filter((a: any) => a.type === 'function' || a.type.startsWith('modded')).map((a: any) => ({ name: a.value.name, value: a.statements }))
        const ModdedLoadFunction = p.filter((a: any) => a.type === 'moddedload_function').map((a: any) => `function ${this.namespace}:${this.folder}/${a.value.name}`)
        const ModdedTickFunction = p.filter((a: any) => a.type === 'moddedtick_function').map((a: any) => `function ${this.namespace}:${this.folder}/${a.value.name}`)
        p.filter((a: any) => a.type === 'moddedstacked_function').forEach((a: any) => {
            for (const i of a.value.stack) {
                if (i === 'load') ModdedLoadFunction.push(`function ${this.namespace}:${this.folder}/${a.value.name}`)
                if (i === 'tick') ModdedTickFunction.push(`function ${this.namespace}:${this.folder}/${a.value.name}`)
            }
        });
        const RunOnload: string[] = []
        if (this.isDisconjuctionEnable) {
            RunOnload.push(`scoreboard objectives add ${this.SCBuilder.disj.prefix} dummy`)
        }
        RunOnload.push(`scoreboard objectives add ${this.SCBuilder.if.prefix} dummy`)
        RunOnload.push(...p.filter((a: any) => a.type === 'load').map((a: any) => a.value))
        RunOnload.push(...ModdedLoadFunction)
        const RunOnTick = ModdedTickFunction
        return {
            FUNCRegistry: Array.from(this.FUNCRegistry),
            Loops: this.Loops,
            IFs: this.IFs,
            Functions,
            Load: RunOnload,
            Tick: RunOnTick
        }
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext) {
        let nameIndex = 1
        if (ctx.childCount == 5) nameIndex = 2
        const name = ctx.getChild(nameIndex).text
        if (name in this.buildInFunction) this.error.critical(ctx, "Function overloading is not allow in mcb")
        if (name.replace(/[a-z0-9\/._-]+/g, '')) this.error.critical(ctx, "Function can be named with only this [a-z0-9/._-] characters set")
        if (this.CurrentFN) this.error.critical(ctx, "Function stacking is not allow in mcb")
        if (!this.FUNCRegistry.has(name)) {
            this.FUNCRegistry.add(name)
            this.CurrentFN = name
        } else this.error.critical(ctx, "Function overloading is not allow in mcb")
        const value = super.visitChildren(ctx)
        this.CurrentFN = ''
        if (value[0].type === 'modifier') {
            return returnBuilder('moddedstacked_function', {
                name,
                stack: [value[0].value].flat(1)
            }, value.slice(1))
        }
        return returnBuilder('function', { name }, value)
    }

    visitFunctionCalling(ctx: FunctionCallingContext) {
        const name = ctx.getChild(0).text
        if (name in this.buildInFunction) {
            const fn = this.buildInFunction[name]
            return fn(ctx.getChild(1))
        }
        if (!this.FUNCRegistry.has(name)) {
            this.error.critical(ctx, "Function is not declared")
        }
        const path = `${this.namespace}:${this.folder}/${name}`
        return `function ${path}`
    }

    visitInputparameter(ctx: InputparameterContext) {
        const p = this.visitChildren(ctx)
        return p
    }

    visitFunctionModifiers(ctx: FunctionModifiersContext) {
        const p: any[] = this.visitChildren(ctx)
        return returnBuilder(
            'modifier',
            p
        )
    }

    visitFunctionModifier(ctx: FunctionModifierContext) {
        return ctx.text
    };

    visitLoad(ctx: LoadContext) {
        const p = this.visitChildren(ctx)
        return returnBuilder(
            'load', p.value ? p.value : p[0]
        )
    }

    visitScoreboardDeclaration(ctx: ScoreboardDeclarationContext) {
        const name = ctx.getChild(1).text
        const type = ctx.getChild(3).text
        if (type === "score") {
            const criteria = ctx.getChild(4).text
            if (!this.SCIDRegistry[name]) {
                this.SCIDRegistry[name] = {
                    id: 0
                }
            }
            if (ctx.childCount == 6) {
                const displayName = ctx.getChild(5).text
                return returnBuilder(
                    'ScoreboardDeclaration',
                    `scoreboard objectives add ${name} ${criteria} ${displayName}`
                )
            }
            return returnBuilder(
                'ScoreboardDeclaration',
                `scoreboard objectives add ${name} ${criteria}`
            )
        }
        this.error.critical(ctx, "Variable type not found.")
    }

    visitAssignment(ctx: AssignmentContext) {
        const assignee = this.visit(ctx.getChild(0))
        if (assignee.type === "ScoreboardIdentifier") {
            this.CurrentSC = assignee.value.objective
        } else this.error.critical(ctx, "Scoreboard Identifier not Found.")
        const AssignmentOperator = this.visit(ctx.getChild(1))
        const p = this.visit(ctx.getChild(2))
        const statements = p.statements || []
        switch (p.type) {
            case "ScoreboardLiteral":
                if (AssignmentOperator === "=") {
                    statements.push(
                        this.SCBuilder.SCSet(
                            assignee.value.target,
                            this.CurrentSC,
                            p.value
                        )
                    )
                } else {
                    statements.push(
                        this.SCBuilder.SCSet(
                            this.SCBuilder.temp.name("0"),
                            this.CurrentSC,
                            p.value
                        ),
                        this.SCBuilder.SCOperationSet(
                            assignee.value.target,
                            this.CurrentSC,
                            AssignmentOperator,
                            this.SCBuilder.temp.name("0"),
                            this.CurrentSC
                        )
                    )
                }
                break
            case "Expression":
            case "ScoreboardIdentifier":
                statements.push(
                    this.SCBuilder.SCOperationSet(
                        assignee.value.target,
                        this.CurrentSC,
                        AssignmentOperator,
                        p.value.target,
                        this.CurrentSC
                    )
                )
                break
            default:
                this.error.critical(ctx, 'Unavailable assignment operator')
        }
        return statements
    }

    assignmentExpression = (ctx: ParserRuleContext) => {
        const p = this.visitChildren(ctx)
        const CurrentSC = this.CurrentSC
        if (p.length >= 3) {
            let value = p.slice()
            for (let i = 0; i < p.length; i += 3) {
                if (!(value[0].type === 'Expression')) {
                    this.SCIDRegistry[CurrentSC].id++
                }
                const CurrentID = this.SCIDRegistry[CurrentSC].id.toString()
                const statements = this.SCBuilder.SCmerge(
                    CurrentSC, CurrentID, value[0], value[2], value[1], ctx
                )
                value = value.slice(3)
                value.unshift(
                    returnBuilder(
                        'Expression',
                        {
                            'objective': CurrentSC,
                            'target': this.SCBuilder.name.name(CurrentID),
                        }, statements
                    )
                )
            }
            return value[0]
        }
        return p
    }

    visitAdditiveExpression(ctx: AdditiveExpressionContext) {
        return this.assignmentExpression(ctx)
    }

    visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext) {
        return this.assignmentExpression(ctx)
    }

    visitScoreboardIdentifier(ctx: ScoreboardIdentifierContext) {
        if (!this.SCIDRegistry[ctx.getChild(0).text]) {
            this.error.critical(ctx, `Scoreboard '${ctx.getChild(0).text}' Objective is not Declare`)
        }
        return returnBuilder(
            'ScoreboardIdentifier',
            {
                'objective': ctx.getChild(0).text,
                'target': ctx.getChild(2).text
            }
        )
    }

    visitScoreboardLiteral(ctx: ScoreboardLiteralContext) {
        return returnBuilder(
            'ScoreboardLiteral',
            ctx.text
        )
    }

    visitAssignmentOperator(ctx: AssignmentOperatorContext) {
        return ctx.text
    }

    visitMultiplicativeOperator(ctx: MultiplicativeOperatorContext) {
        return ctx.text
    }

    visitAdditiveOperator(ctx: AdditiveOperatorContext) {
        return ctx.text
    }

    visitParentAssignableExpression(ctx: ParentAssignableExpressionContext) {
        return this.visit(ctx.getChild(1))
    }

    visitCommands(ctx: CommandsContext) {
        const p = this.visitChildren(ctx)
        if (ctx.getChild(0).text == 'execute' && p.length != 0) {
            return ctx.getChild(0).text + ctx.getChild(1).text + p[0]
        }
        return ctx.text
    }

    visitRepeatUntil(ctx: RepeatUntilContext) {
        const p: any[] = this.visitChildren(ctx)
        const last = p[p.length - 1]
        if (!this.LoopIDRegistry[this.CurrentFN]) {
            this.LoopIDRegistry[this.CurrentFN] = {
                id: 0
            }
            this.Loops[this.CurrentFN] = {}
        } else this.LoopIDRegistry[this.CurrentFN].id++

        // Named and Path
        const name = `${this.AutoName}.${this.folder}.${this.CurrentFN}.loop.${this.LoopIDRegistry[this.CurrentFN].id}`
        const path = `${this.namespace}:${this.folder}/loops/${name}`

        const callFN = (last.type == 'disconjuction') ?
            `execute if score ${last.value.target} ${last.value.objective} matches 1 run function ${path}` :
            last.value + ` function ${path}`
        const cached = p.slice()[p.length - 1] || returnBuilder(
            last.type,
            last.value,
            []
        )
        p.pop()
        cached.statements.push(callFN)
        this.Loops[this.CurrentFN][name] = {
            path,
            value: p.concat(cached.statements)
        }
        return cached.statements
    }

    visitWhileDo(ctx: WhileDoContext) {
        const p: any[] = this.visitChildren(ctx)
        if (!this.LoopIDRegistry[this.CurrentFN]) {
            this.LoopIDRegistry[this.CurrentFN] = {
                id: 0
            }
            this.Loops[this.CurrentFN] = {}
        } else this.LoopIDRegistry[this.CurrentFN].id++
        // Named and Path
        const name = `${this.AutoName}.${this.filename}.${this.CurrentFN}.loop.${this.LoopIDRegistry[this.CurrentFN].id}`
        const path = `${this.namespace}:${this.folder}/loops/${name}`
        const callFN = (p[0].type == 'disconjuction') ?
            `execute if score ${p[0].value.target} ${p[0].value.objective} matches 1 run function ${path}` :
            p[0].value + ` function ${path}`
        const cached = p.slice()[0] || returnBuilder(
            p[0].type,
            p[0].value,
            []
        )
        p.shift()
        cached.statements.push(callFN)
        this.Loops[this.CurrentFN][name] = {
            path,
            value: p.concat(cached.statements)
        }
        return cached.statements
    }

    visitForStatement(ctx: ForStatementContext) {
        const p: any[] = this.visitChildren(ctx)
        if (!this.LoopIDRegistry[this.CurrentFN]) {
            this.LoopIDRegistry[this.CurrentFN] = {
                id: 0
            }
            this.Loops[this.CurrentFN] = {}
        } else this.LoopIDRegistry[this.CurrentFN].id++
        // console.log(p)
        // Named and Path
        const name = `${this.AutoName}.${this.filename}.${this.CurrentFN}.loop.${this.LoopIDRegistry[this.CurrentFN].id}`
        const path = `${this.namespace}:${this.folder}/loops/${name}`
        const scOp = p[2].value.startsWith('-') ? 'remove' : 'add'
        const scSet = `scoreboard players set ${p[0].value.target} ${p[0].value.objective} ${p[2].value}`
        const scVC = `scoreboard players ${scOp} ${p[0].value.target} ${p[0].value.objective} ${p[2].value.replace('-', '')}`
        const loopwith = p[3] && p[3].type === 'loopwith'
        const exec = `execute if score ${p[0].value.target} ${p[0].value.objective} matches ${p[1].value.text}${loopwith ? p[3].value : ''} run function ${path}`
        const _p = p.slice(3)
        if (loopwith) _p.shift()
        _p.push(scVC, exec)
        this.Loops[this.CurrentFN][name] = {
            path,
            value: _p
        }
        return [scSet, exec]
    }

    visitLoopWith(ctx: LoopWithContext) {
        return returnBuilder('loopwith', ctx.text.replace(/^execute/, ''))
    }

    visitIfStatement(ctx: IfStatementContext) {
        const p = [this.visitChildren(ctx)].flat(1)
        // log.hi(p)(chalk.bgYellow.black)(" IfStatement ")
        if (p[0].type == 'elseStatement') {
            return [`scoreboard players set ${p[0].value.target} ${this.SCBuilder.if.prefix} 1`].concat(p[0].statements)
        }
        return p
    }

    visitUnstrippedIfStatement(ctx: UnstrippedIfStatementContext) {
        const p = this.visitChildren(ctx)
        if (!this.IFIDRegistry[this.CurrentFN]) {
            this.IFIDRegistry[this.CurrentFN] = {
                id: 0
            }
            this.IFs[this.CurrentFN] = {}
        } else this.IFIDRegistry[this.CurrentFN].id++
        // log.hi(p)(chalk.bgCyan.black)(" UnstrippedIfStatement ")
        // Named and Path
        const name = `${this.AutoName}.${this.filename}.${this.CurrentFN}.ifs.${this.IFIDRegistry[this.CurrentFN].id}`
        const path = `${this.namespace}:${this.folder}/ifs/${name}`
        const last = p.length - 1
        const last_cached = p.slice()[last] || returnBuilder(
            p[last].type,
            p[last].value,
            []
        )
        const callFN = (p[0].type == 'disconjuction') ?
            (last_cached.type == 'elseStatement') ?
                `execute if score ${last_cached.value.target} ${this.SCBuilder.if.prefix} matches 1 if score ${p[0].value.target} ${p[0].value.objective} matches 1 run function ${path}` :
                `execute if score ${p[0].value.target} ${p[0].value.objective} matches 1 run function ${path}` :
            (last_cached.type == 'elseStatement') ?
                p[0].value.replace('execute', `execute if score ${last_cached.value.target} ${this.SCBuilder.if.prefix} matches 1`) + ` function ${path}` :
                p[0].value + ` function ${path}`
        const cached = p.slice()[0] || returnBuilder(
            p[0].type,
            p[0].value,
            []
        )
        p.shift()
        cached.statements.push(callFN)
        if (last_cached.type == 'elseStatement') {
            // log.succeed("HI")
            p.pop()
            this.IFs[this.CurrentFN][name] = {
                path,
                value: [`scoreboard players set ${last_cached.value.target} ${this.SCBuilder.if.prefix} 0`].concat(p)
            }
            return returnBuilder(
                'elseStatement',
                last_cached.value,
                cached.statements.concat(last_cached.statements)
            )
        }
        this.IFs[this.CurrentFN][name] = {
            path,
            value: p
        }
        return cached.statements
    }

    visitElseStatement(ctx: ElseStatementContext) {
        const p = this.visitChildren(ctx)
        if (!this.ELSEIDRegistry[this.CurrentFN]) {
            this.ELSEIDRegistry[this.CurrentFN] = {
                id: 0
            }
        }
        if (p[0].type != 'elseStatement') {
            this.ELSEIDRegistry[this.CurrentFN].id++
        }
        const target = (p[0].type == 'elseStatement') ?
            p[0].value.target :
            this.SCBuilder.if.name(this.ELSEIDRegistry[this.CurrentFN].id.toString())
        // log.hi(p)(chalk.bgRed.white)("ElseStatement")
        if (p[0].type != 'elseStatement') {
            if (!this.IFIDRegistry[this.CurrentFN]) {
                this.IFIDRegistry[this.CurrentFN] = {
                    id: 0
                }
                this.IFs[this.CurrentFN] = {}
            } else this.IFIDRegistry[this.CurrentFN].id++
            // Named and Path
            const name = `${this.AutoName}.${this.filename}.${this.CurrentFN}.ifs.${this.IFIDRegistry[this.CurrentFN].id}`
            const path = `${this.namespace}:${this.folder}/ifs/${name}`
            this.IFs[this.CurrentFN][name] = {
                path,
                value: p
            }
            return returnBuilder(
                'elseStatement',
                {
                    target
                },
                [
                    `execute if score ${target} ${this.SCBuilder.if.prefix} matches 1 run function ${path}`
                ]
            )
        }
        return returnBuilder(
            'elseStatement',
            {
                target
            },
            p[0].statements
        )
    }

    visitDisconjuction(ctx: DisconjuctionContext) {
        if (!this.DISJIDRegistry[this.CurrentFN]) {
            this.DISJIDRegistry[this.CurrentFN] = {
                id: 0
            }
        } else this.DISJIDRegistry[this.CurrentFN].id++
        const p = this.visitChildren(ctx)
        const ID = this.DISJIDRegistry[this.CurrentFN].id.toString()
        if (ctx.childCount == 1) {
            return returnBuilder(
                'conjuction',
                `execute ${p.value} run`,
                p.statements
            )
        }
        this.isDisconjuctionEnable = true
        return returnBuilder(
            'disconjuction',
            {
                'objective': this.SCBuilder.disj.prefix,
                'target': this.SCBuilder.disj.name(ID)
            },
            (p.map((a: any) => a.statements).flat(1).filter((a: any) => a) || [])
                // MAYBE CAUSING BUGS
                // NOTE : MAYBE THIS LINE WILL BREAK THE PROCESS
                .concat(`scoreboard players set ${this.SCBuilder.disj.name(ID)} ${this.SCBuilder.disj.prefix} 0`)
                .concat(
                    p.map((a: any) => {
                        return `execute ${a.value} run scoreboard players set ${this.SCBuilder.disj.name(ID)} ${this.SCBuilder.disj.prefix} 1`
                    })
                )
        )
    }

    visitConjuction(ctx: ConjuctionContext) {
        const p = [this.visitChildren(ctx)].flat(1)
        return returnBuilder(
            'conjuction',
            p.map((a: any) => (a) ? (a.type === 'comparison') ? a.value : this.error.critical(ctx, "Unexpected value in conjuction") : null).filter((a: any) => a).join(" "),
            p.filter((a: any) => a.statements).map((a: any) => a.statements).flat(1)
        )
    }

    visitComparison(ctx: ComparisonContext) {
        const p = this.visitChildren(ctx)
        if (ctx.childCount == 2) {
            return returnBuilder(
                'comparison',
                `unless ${p[0].value}`,
                p[0].statements
            )
        }
        return returnBuilder(
            'comparison',
            `if ${p.value}`,
            p.statements
        )
    }

    visitAsComparison(ctx: AsComparisonContext) {
        return this.visitChildren(ctx)
    }

    visitBlockExpression(ctx: BlockExpressionContext) {
        const p = this.visitChildren(ctx)
        p.unshift("block")
        return returnBuilder(
            'comparison',
            p.join("")
        )
    }

    visitLocateStatement(ctx: LocateStatementContext) {
        return ctx.text + " "
    }

    visitBlockTag(ctx: BlockTagContext) {
        return ctx.text
    }

    visitEntityNBTExpression(ctx: EntityNBTExpressionContext) {
        return returnBuilder(
            'comparison',
            ctx.text
        )
    }

    visitLiteralConstant(ctx: LiteralConstantContext) {
        const p: any[] = [this.visitChildren(ctx)].flat(1)
        if (p[0]) {
            return p
        } else {
            return returnBuilder(
                'literalNumber',
                ctx.text
            )
        }
    }

    visitStringLiteral(ctx: StringLiteralContext) {
        const p: any[] = this.visitChildren(ctx)
        // const p = ctx.children
        // p?.shift()
        // p?.pop()
        return returnBuilder(
            'string',
            p
        )
    }

    visitStringContent(ctx: StringContentContext) {
        return returnBuilder(
            'stringcontent',
            ctx.text
        )
    };

    visitScoreNscoreExpression(ctx: ScoreNscoreExpressionContext) {
        const p = this.visitChildren(ctx)
        let m = p.slice()
        if (m[0].type === 'ScoreboardLiteral') {
            p[0] = returnBuilder(
                'ScoreboardIdentifier',
                // KNOWN BUGS
                // NOTE: THIS LINE WILL BREAK THE PROCESS
                // WHEN SOME DATAPACK IS NOT SYNC WITH THIS DATAPACK
                {
                    'objective': this.CurrentSC,
                    'target': this.SCBuilder.temp.name("0")
                },
                [this.SCBuilder.SCSet(this.SCBuilder.temp.name("0"), this.CurrentSC, p[0].value)]
            )
        }
        if (m[2].type === 'ScoreboardLiteral') {
            p[2] = returnBuilder(
                'ScoreboardIdentifier',
                // KNOWN BUGS
                // NOTE: THIS LINE WILL BREAK THE PROCESS
                // WHEN SOME DATAPACK IS NOT SYNC WITH THIS DATAPACK
                {
                    'objective': this.CurrentSC,
                    'target': this.SCBuilder.temp.name("1")
                },
                [this.SCBuilder.SCSet(this.SCBuilder.temp.name("1"), this.CurrentSC, p[2].value)]
            )
        }
        return returnBuilder(
            'comparison',
            `score ${p[0].value.target} ${p[0].value.objective} ${p[1]} ${p[2].value.target} ${p[2].value.objective}`,
            (p[0].statements || []).concat(p[2].statements)
        )
    }

    visitScoreNrangeExpression(ctx: ScoreNrangeExpressionContext) {
        const p = this.visitChildren(ctx)
        return returnBuilder(
            'comparison',
            `score ${p[0].value.target} ${p[0].value.objective} matches ${p[1].value.text}`,
            p[0].statements
        )
    }

    visitComparator(ctx: ComparatorContext) {
        return ctx.text
    }

    visitRange(ctx: RangeContext) {
        const range = ctx.text.split("..").map(a => Number(a) || 0)
        return returnBuilder('range', {
            range: {
                min: range[0],
                max: range[1]
            },
            text: ctx.text
        })
    }

    visitMixAnnotation(ctx: MixAnnotationContext) {
        const p = this.visitChildren(ctx)
        const line = ctx._start.line
        const col = ctx._start.charPositionInLine
        log.info(chalk.blackBright(`    └ @mix section in ${this.folder}/${this.filename}.mcb:${line}:${col}`))
        let lang!: string
        switch (p[0]) {
            case 'js':
            case 'javascript':
                lang = 'node'
                break
        }
        if(lang){
            const k = spawnSync(lang, [path.join(__dirname, '../../../mix/worker.js')], {
                'env': {
                    code:p[1]
                },
                'encoding':"utf-8"
            })
            if(k.stderr){
                log.error(chalk.red(`    └ @mix error at ${line}:${col}`))
                console.log(chalk.red(k.stderr))
            }
            try {
                const data = JSON.parse(k.stdout)
                console.log(data.console.join("\n"))
                return data.emit.join('\n')
            } catch (error) {
                log.error(chalk.red(`    └ @mix error at ${line}:${col}\n cannot parser data\n${k.stdout}`))
                console.log()
            }
        }
    }
    visitMixLang(ctx: MixLangContext) {
        return ctx.getChild(1).text
    }
    visitMixBlock(ctx: MixBlockContext) {
        return ctx.text.slice(1, -1)
    }
}

export default Visitor