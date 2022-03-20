import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { AdditiveExpressionContext, AdditiveOperatorContext, AsComparisonContext, AsExpressionContext, AssignmentContext, AssignmentOperatorContext, BlockExpressionContext, BlockTagContext, CommandsContext, ComparatorContext, ComparisonContext, ConjuctionContext, DeclarationContext, DisconjuctionContext, EntityNBTExpressionContext, ExpressionContext, FunctionDeclarationContext, IfStatementContext, LocateStatementContext, LoopStatementContext, McbContext, mcbParserVisitor, MultiplicativeExpressionContext, MultiplicativeOperatorContext, ParentAssignableExpressionContext, RangeContext, RepeatUntilContext, ScoreboardIdentifierContext, ScoreboardLiteralContext, ScoreNrangeExpressionContext, ScoreNscoreExpressionContext, TopPriorityObjectContext, WhileDoContext } from '../grammar'
import { genericErrorHandling } from '../errors/genericErrorHandling'
import { RuleNode } from 'antlr4ts/tree/RuleNode';
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
    private FUNCRegistry: Set<string> = new Set()
    private IFs: Record<string, Record<string, string[]>> = {}
    private Loops: Record<string, Record<string, string[]>> = {}
    private error: genericErrorHandling
    private SCBuilder: SCBuilder
    private CurrentSC = ""
    private CurrentFN = ""
    private AutoName = "mcb"

    constructor(SCBuilder: SCBuilder, error: genericErrorHandling) {
        super()
        this.SCBuilder = SCBuilder
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

    visitFunctionDeclaration(ctx: FunctionDeclarationContext) {
        const name = ctx.getChild(1).text
        if (!this.FUNCRegistry.has(name)) {
            this.FUNCRegistry.add(name)
            this.CurrentFN = name
        } else this.error.critical(ctx, "Function overloading is not allow in mcb")
        const value = super.visitChildren(ctx)
        return returnBuilder('function',
            [{
                name,
                value
            }]
        )
    }

    visitAssignment(ctx: AssignmentContext) {
        const assignee = this.visit(ctx.getChild(0))
        if (assignee.type === "ScoreboardIdentifier") {
            this.CurrentSC = assignee.value.objective
            if (!this.SCIDRegistry[this.CurrentSC]) {
                this.SCIDRegistry[this.CurrentSC] = {
                    id: 0
                }
            }
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

    visitRepeatUntil(ctx: RepeatUntilContext){
        const p = this.visitChildren(ctx)
        console.log(p)
        const index = p[p.length - 1]
        if (!this.LoopIDRegistry[this.CurrentFN]) {
            this.LoopIDRegistry[this.CurrentFN] = {
                id: 0
            }
            this.Loops[this.CurrentFN] = {}
        } else this.LoopIDRegistry[this.CurrentFN].id++
        const name = `${this.AutoName}.${this.CurrentFN}.if.${this.LoopIDRegistry[this.CurrentFN].id}`
        if (index.type === 'conjuction') {
            const callFN = index.value + ` function ${name}`
            p.pop()
            this.Loops[this.CurrentFN][name] = p
            return callFN
        } else if (index.type === 'disconjuction') {
            const callFN = `execute if score ${index.value.target} ${index.value.objective} matches 1 run function ${name}`
            p.pop()
            index.statements.push(callFN)
            p.concat(index.statements)
            this.Loops[this.CurrentFN][name] = p
            return `function ${name}`
        } else {
            this.error.critical(ctx,`ScoreboardException unexpected conjuction types`)
        }
    }

    visitWhileDo(ctx: WhileDoContext){
        const p = this.visitChildren(ctx)
        if (!this.LoopIDRegistry[this.CurrentFN]) {
            this.LoopIDRegistry[this.CurrentFN] = {
                id: 0
            }
            this.Loops[this.CurrentFN] = {}
        } else this.LoopIDRegistry[this.CurrentFN].id++
        const name = `${this.AutoName}.${this.CurrentFN}.if.${this.LoopIDRegistry[this.CurrentFN].id}`
        if (p[0].type === 'conjuction') {
            const callFN = p[0].value + ` function ${name}`
            p.shift()
            this.Loops[this.CurrentFN][name] = p
            return callFN
        } else if (p[0].type === 'disconjuction') {
            const callFN = `execute if score ${p[0].value.target} ${p[0].value.objective} matches 1 run function ${name}`
            const cached = p.slice()[0]
            p.shift()
            cached.statements.push(callFN)
            this.Loops[this.CurrentFN][name] = p
            return cached.statements
        } else {
            this.error.critical(ctx,`ScoreboardException unexpected conjuction types`)
        }
    }

    visitIfStatement(ctx: IfStatementContext) {
        const p = this.visitChildren(ctx)
        if (!this.IFIDRegistry[this.CurrentFN]) {
            this.IFIDRegistry[this.CurrentFN] = {
                id: 0
            }
            this.IFs[this.CurrentFN] = {}
        } else this.IFIDRegistry[this.CurrentFN].id++
        const name = `${this.AutoName}.${this.CurrentFN}.if.${this.IFIDRegistry[this.CurrentFN].id}`
        if (p[0].type === 'conjuction') {
            const callFN = p[0].value + ` function ${name}`
            p.shift()
            this.IFs[this.CurrentFN][name] = p
            return callFN
        } else if (p[0].type === 'disconjuction') {
            const callFN = `execute if score ${p[0].value.target} ${p[0].value.objective} matches 1 run function ${name}`
            const cached = p.slice()[0]
            p.shift()
            cached.statements.push(callFN)
            this.IFs[this.CurrentFN][name] = p
            return cached.statements
        } else {
            this.error.critical(ctx,`ScoreboardException unexpected conjuction types`)
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
                `execute ${p.value} run`
            )
        }
        return returnBuilder(
            'disconjuction',
            {
                'objective': this.SCBuilder.disj_name(),
                'target': this.SCBuilder.disj(ID)
            },
            p.map((a: any) => {
                return `execute ${a.value} run scoreboard players ${this.SCBuilder.disj(ID)} ${this.SCBuilder.disj_name()} 1`
            })
        )
    }

    visitConjuction(ctx: ConjuctionContext) {
        const p = [this.visitChildren(ctx)].flat(1)
        return returnBuilder(
            'conjuction',
            p.map((a: any) => (a) ? (a.type === 'comparison') ? a.value : this.error.critical(ctx, "Unexpected value in conjuction") : null).filter((a: any) => a).join(" ")
        )
    }

    visitComparison(ctx: ComparisonContext) {
        const p = this.visitChildren(ctx)
        if (ctx.childCount == 2) {
            return returnBuilder(
                'comparison',
                `unless ${p[0].value}`
            )
        }
        return returnBuilder(
            'comparison',
            `if ${p.value}`
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
            `score ${p[0].value.target} ${p[0].value.objective} ${p[1]} ${p[2].value.target} ${p[2].value.objective}`
        )
    }

    visitScoreNrangeExpression(ctx: ScoreNrangeExpressionContext) {
        const p = this.visitChildren(ctx)
        return returnBuilder(
            'comparison',
            `score ${p[0].value.target} ${p[0].value.objective} matches ${p[1]}`
        )
    }

    visitComparator(ctx: ComparatorContext) {
        return ctx.text
    }

    visitRange(ctx: RangeContext) {
        return ctx.text.replace(" ", '')
    }

}

export default Visitor