import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { AdditiveExpressionContext, AdditiveOperatorContext, AsExpressionContext, AssignmentOperatorContext, DeclarationContext, FunctionDeclarationContext, McbContext, mcbParserVisitor, MultiplicativeExpressionContext, MultiplicativeOperatorContext, ParentAssignableExpressionContext, ScoreboardIdentifierContext, ScoreboardLiteralContext, TopPriorityObjectContext } from '../grammar'
import { genericErrorHandling } from '../errors/genericErrorHandling'
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import * as SCBuilder from './SCBuilder'


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

    private SCIDRegistry: Record<string, { id: number }> = {}
    private FUNCRegistry: Set<string> = new Set()
    private error: genericErrorHandling
    constructor(error: genericErrorHandling) {
        super()
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
        if (aggregate && !nextResult)
            return aggregate
        if (!aggregate && nextResult)
            return nextResult
        return [aggregate,nextResult].flat(1)
    }


    visitDeclaration(ctx: DeclarationContext) {
        const p = this.visitChildren(ctx)
        return p
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext) {
        const name = ctx.getChild(1).text
        if (!this.FUNCRegistry.has(name)) {
            this.FUNCRegistry.add(name)
        } else this.error.critical(ctx, "Function overloading is not allow in mcb")
        const value = super.visitChildren(ctx)
        return returnBuilder('function',
            [{
                name,
                value
            }]
        )
    }

    visitAdditiveExpression(ctx: AdditiveExpressionContext){
        const p = this.visitChildren(ctx)
        console.log(p)
    }

    visitMultiplicativeExpression(ctx: MultiplicativeExpressionContext){
        const p = this.visitChildren(ctx)
        if(p.length >= 3){
            return "group"
        }
        return p
    }

    visitScoreboardIdentifier(ctx: ScoreboardIdentifierContext) {
        return returnBuilder(
            'scoreboardIdentifier',
            {
                'object': ctx.getChild(0).text,
                'target': ctx.getChild(2).text
            }
        )
    }

    visitScoreboardLiteral(ctx: ScoreboardLiteralContext) {
        return returnBuilder(
            'scoreboardLiteral',
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

    visitAsExpression(ctx: AsExpressionContext) {
        return this.visitChildren(ctx)
    }

    visitParentAssignableExpression(ctx: ParentAssignableExpressionContext) {
        return this.visitChildren(ctx.getChild(1) as RuleNode)
    }

}

export default Visitor