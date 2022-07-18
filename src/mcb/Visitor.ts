import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { AdditiveExpressionContext, AdditiveOperatorContext, AsComparisonContext, AsExpressionContext, AssignmentContext, AssignmentOperatorContext, BlockExpressionContext, BlockTagContext, CommandsContext, ComparatorContext, ComparisonContext, ConjuctionContext, DeclarationContext, DisconjuctionContext, EntityNBTExpressionContext, ExpressionContext, ForStatementContext, FunctionDeclarationContext, FunctionModifierContext, FunctionModifiersContext, IfStatementContext, LoadContext, LocateStatementContext, LoopStatementContext, LoopWithContext, McbContext, mcbParserVisitor, MultiplicativeExpressionContext, MultiplicativeOperatorContext, ParentAssignableExpressionContext, RangeContext, RepeatUntilContext, ScoreboardDeclarationContext, ScoreboardIdentifierContext, ScoreboardLiteralContext, ScoreNrangeExpressionContext, ScoreNscoreExpressionContext, TopPriorityObjectContext, WhileDoContext } from '../grammar'
import { genericErrorHandling } from '../errors/genericErrorHandling'
import { ParserRuleContext } from 'antlr4ts';
import SCBuilder from './SCBuilder';


// type returnValue = {
//     type: string,
//     value: any,
//     statements?: string[]
// }
type returnValue = any;

function returnBuilder(type: string, value: any, statements?: string[]): returnValue {
    return {
        type,
        value,
        statements
    }
}

class Visitor extends AbstractParseTreeVisitor<returnValue> implements mcbParserVisitor<returnValue> {

    SCIDRegistry: Record<string, { id: number }> = {}
    DISJIDRegistry: Record<string, { id: number }> = {}
    IFIDRegistry: Record<string, { id: number }> = {}
    LoopIDRegistry: Record<string, { id: number }> = {}
    FUNCRegistry: Set<string> = new Set()
    IFs: { [key: string]: { [key: string]: { path: string, value: string[] } } } = {}
    Loops: { [key: string]: { [key: string]: { path: string, value: string[] } } } = {}
    private error: genericErrorHandling
    private SCBuilder: SCBuilder
    private CurrentSC = ""
    private CurrentFN = ""
    private AutoName = "mcb"
    private namespace: string
    private folder: string

    constructor(namespace: string, folder: string, SCBuilder: SCBuilder, error: genericErrorHandling) {
        super()
        this.namespace = namespace
        this.SCBuilder = SCBuilder
        this.folder = folder
        this.error = error;
    }

    protected defaultResult() {
        return null
    }

    protected aggregateResult(aggregate: returnValue, nextResult: returnValue) {
        // if (aggregate.statements && nextResult.statements)
        //     return returnBuilder(
        //         aggregate.type,
        //         aggregate.value.concat(nextResult.value),
        //         aggregate.statements.concat(nextResult.statements)
        //     )
        // if (aggregate.statements) {
        //     return returnBuilder(
        //         aggregate.type,
        //         aggregate.value.concat(nextResult.value),
        //         aggregate.statements
        //     )
        // }
        // if (nextResult.statements) {
        //     return returnBuilder(
        //         aggregate.type,
        //         aggregate.value.concat(nextResult.value),
        //         nextResult.statements
        //     )
        // }
        // if (aggregate.type === "empty" && nextResult.type !== "empty")
        //     return returnBuilder(
        //         nextResult.type,
        //         aggregate.value.concat(nextResult.value)
        //     )
        // if (aggregate.type !== "empty" && nextResult.type == "empty")
        //     return returnBuilder(
        //         aggregate.type,
        //         aggregate.value.concat(nextResult.value)
        //     )
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
        const Functions = p.filter((a: any) => a.type === 'function' || a.type.startsWith('modded')).map((a: any) => a.value)
        const ModdedLoadFunction = p.filter((a: any) => a.type === 'moddedload_function').map((a: any) => `function ${this.namespace}:${this.folder}/${a.value.name}`)
        const ModdedTickFunction = p.filter((a: any) => a.type === 'moddedtick_function').map((a: any) => `function ${this.namespace}:${this.folder}/${a.value.name}`)
        const RunOnload = p.filter((a: any) => a.type === 'load').map((a: any) => a.value)
        const RunOnTick = ModdedTickFunction
        RunOnload.push(...ModdedLoadFunction)
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
        if (this.CurrentFN) this.error.critical(ctx, "Function stacking is not allow in mcb")
        if (!this.FUNCRegistry.has(name)) {
            this.FUNCRegistry.add(name)
            this.CurrentFN = name
        } else this.error.critical(ctx, "Function overloading is not allow in mcb")
        const value = super.visitChildren(ctx)
        this.CurrentFN = ''
        if (value[0].type === 'modifier') {
            if (value[0].value === 'load') {
                return returnBuilder('moddedload_function', {
                    name,
                    value: value.slice(1)
                })
            } else if (value[0].value === 'tick') {
                return returnBuilder('moddedtick_function', {
                    name,
                    value: value.slice(1)
                })
            }
        }
        return returnBuilder('function',
            {
                name,
                value
            }
        )
    }

    visitFunctionModifiers(ctx: FunctionModifiersContext) {
        const p: any[] = this.visitChildren(ctx)
        return returnBuilder(
            'modifier',
            p
        )
    };

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
                            this.SCBuilder.temp("0"),
                            this.CurrentSC,
                            p.value
                        ),
                        this.SCBuilder.SCOperationSet(
                            assignee.value.target,
                            this.CurrentSC,
                            AssignmentOperator,
                            this.SCBuilder.temp("0"),
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
                            'target': this.SCBuilder.name(CurrentID),
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
        return ctx.text
    }

    visitRepeatUntil(ctx: RepeatUntilContext) {
        const p: any[] = this.visitChildren(ctx)
        const index = p[p.length - 1]
        if (!this.LoopIDRegistry[this.CurrentFN]) {
            this.LoopIDRegistry[this.CurrentFN] = {
                id: 0
            }
            this.Loops[this.CurrentFN] = {}
        } else this.LoopIDRegistry[this.CurrentFN].id++

        // Named and Path
        const name = `${this.AutoName}.${this.folder}.${this.CurrentFN}.loop.${this.LoopIDRegistry[this.CurrentFN].id}`
        const path = `${this.namespace}:${this.folder}/loops/${name}`

        if (index.type === 'conjuction') {
            const callFN = index.value + ` function ${path}`
            p.pop()
            p.push(callFN)
            this.Loops[this.CurrentFN][name] = {
                path,
                value: p
            }
            return callFN
        } else if (index.type === 'disconjuction') {
            const callFN = `execute if score ${index.value.target} ${index.value.objective} matches 1 run function ${path}`
            p.pop()
            index.statements.push(callFN)
            p.concat(index.statements)
            this.Loops[this.CurrentFN][name] = {
                path,
                value: p
            }
            return `function ${path}`
        } else {
            this.error.critical(ctx, `ScoreboardException unexpected conjuction types`)
        }
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
        const name = `${this.AutoName}.${this.folder}.${this.CurrentFN}.loop.${this.LoopIDRegistry[this.CurrentFN].id}`
        const path = `${this.namespace}:${this.folder}/loops/${name}`
        console.log(this.CurrentFN)
        console.log(name)

        if (p[0].type === 'conjuction') {
            const callFN = p[0].value + ` function ${path}`
            p.shift()
            p.push(callFN)
            this.Loops[this.CurrentFN][name] = {
                path,
                value: p
            }
            // console.log(p)
            return callFN
        } else if (p[0].type === 'disconjuction') {
            const callFN = `execute if score ${p[0].value.target} ${p[0].value.objective} matches 1 run function ${path}`
            const cached = p.slice()[0]
            p.shift()
            cached.statements.push(callFN)
            this.Loops[this.CurrentFN][name] = {
                path,
                value: p
            }
            return cached.statements
        } else {
            this.error.critical(ctx, `ScoreboardException unexpected conjuction types`)
        }
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
        const name = `${this.AutoName}.${this.folder}.${this.CurrentFN}.loop.${this.LoopIDRegistry[this.CurrentFN].id}`
        const path = `${this.namespace}:${this.folder}/loops/${name}`
        const scOp = p[2].value.startsWith('-') ? 'remove' : 'add'
        const scSet = `scoreboard players set ${p[0].value.target} ${p[0].value.objective} ${p[2].value}`
        const scVC = `scoreboard players ${scOp} ${p[0].value.target} ${p[0].value.objective} ${p[2].value.replace('-', '')}`
        const loopwith = p[3].type === 'loopwith'
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
    };

    visitIfStatement(ctx: IfStatementContext) {
        const p = this.visitChildren(ctx)
        if (!this.IFIDRegistry[this.CurrentFN]) {
            this.IFIDRegistry[this.CurrentFN] = {
                id: 0
            }
            this.IFs[this.CurrentFN] = {}
        } else this.IFIDRegistry[this.CurrentFN].id++
        // Named and Path
        const name = `${this.AutoName}.${this.folder}.${this.CurrentFN}.ifs.${this.IFIDRegistry[this.CurrentFN].id}`
        const path = `${this.namespace}:${this.folder}/ifs/${name}`
        if (p[0].type === 'conjuction') {
            const callFN = p[0].value + ` function ${path}`
            const cached = p.slice()[0]
            p.shift()
            cached.statements.push(callFN)
            this.IFs[this.CurrentFN][name] = {
                path,
                value: p
            }
            return cached.statements
        } else if (p[0].type === 'disconjuction') {
            const callFN = `execute if score ${p[0].value.target} ${p[0].value.objective} matches 1 run function ${path}`
            const cached = p.slice()[0]
            p.shift()
            cached.statements.push(callFN)
            this.IFs[this.CurrentFN][name] = {
                path,
                value: p
            }
            return cached.statements
        } else {
            this.error.critical(ctx, `ScoreboardException unexpected conjuction types`)
        }
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
        return returnBuilder(
            'disconjuction',
            {
                'objective': this.SCBuilder.disj_name(),
                'target': this.SCBuilder.disj(ID)
            },
            p.map((a: any) => {
                return `execute ${a.value} run scoreboard players set ${this.SCBuilder.disj(ID)} ${this.SCBuilder.disj_name()} 1`
            })
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

    visitScoreNscoreExpression(ctx: ScoreNscoreExpressionContext) {
        const p = this.visitChildren(ctx)
        return returnBuilder(
            'comparison',
            `score ${p[0].value.target} ${p[0].value.objective} ${p[1]} ${p[2].value.target} ${p[2].value.objective}`,
            p[0].statements?.concat(p[2].statements)
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

}

export default Visitor