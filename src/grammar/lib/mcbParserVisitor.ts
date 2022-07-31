// Generated from E:\_Project\nodejs\mcb\src\grammar\mcbParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { McbContext } from "./mcbParser";
import { TopPriorityObjectContext } from "./mcbParser";
import { LoadContext } from "./mcbParser";
import { StatementsContext } from "./mcbParser";
import { StatementContext } from "./mcbParser";
import { MixAnnotationContext } from "./mcbParser";
import { MixLangContext } from "./mcbParser";
import { MixBlockContext } from "./mcbParser";
import { CommandsContext } from "./mcbParser";
import { DeclarationContext } from "./mcbParser";
import { VariableDeclarationContext } from "./mcbParser";
import { ScoreboardDeclarationContext } from "./mcbParser";
import { FunctionCallingContext } from "./mcbParser";
import { FunctionDeclarationContext } from "./mcbParser";
import { FunctionInputParametersContext } from "./mcbParser";
import { FunctionParametersContext } from "./mcbParser";
import { InputparameterContext } from "./mcbParser";
import { ParameterContext } from "./mcbParser";
import { BlockContext } from "./mcbParser";
import { FunctionModifiersContext } from "./mcbParser";
import { FunctionModifierContext } from "./mcbParser";
import { IfStatementContext } from "./mcbParser";
import { UnstrippedIfStatementContext } from "./mcbParser";
import { ControlstructBodyContext } from "./mcbParser";
import { ElseStatementContext } from "./mcbParser";
import { LoopStatementContext } from "./mcbParser";
import { LoopWithContext } from "./mcbParser";
import { ForStatementContext } from "./mcbParser";
import { WhileDoContext } from "./mcbParser";
import { RepeatUntilContext } from "./mcbParser";
import { DisconjuctionContext } from "./mcbParser";
import { ConjuctionContext } from "./mcbParser";
import { ComparisonContext } from "./mcbParser";
import { AsComparisonContext } from "./mcbParser";
import { ScoreNscoreExpressionContext } from "./mcbParser";
import { ScoreNrangeExpressionContext } from "./mcbParser";
import { RangeContext } from "./mcbParser";
import { EntityNBTExpressionContext } from "./mcbParser";
import { BlockExpressionContext } from "./mcbParser";
import { ComparatorContext } from "./mcbParser";
import { BlockTagContext } from "./mcbParser";
import { LocateStatementContext } from "./mcbParser";
import { PositionContext } from "./mcbParser";
import { PosPrefixContext } from "./mcbParser";
import { PosSuffixContext } from "./mcbParser";
import { AnchorContext } from "./mcbParser";
import { AncPrefixContext } from "./mcbParser";
import { AncSuffixContext } from "./mcbParser";
import { LocateLiteralContext } from "./mcbParser";
import { AssignmentContext } from "./mcbParser";
import { ExpressionContext } from "./mcbParser";
import { AsExpressionContext } from "./mcbParser";
import { ParentAssignableExpressionContext } from "./mcbParser";
import { AdditiveExpressionContext } from "./mcbParser";
import { MultiplicativeExpressionContext } from "./mcbParser";
import { ScoreboardIdentifierContext } from "./mcbParser";
import { ScoreboardLiteralContext } from "./mcbParser";
import { ScoreboardUnaryPrefixContext } from "./mcbParser";
import { ScoreboardTargetContext } from "./mcbParser";
import { LiteralConstantContext } from "./mcbParser";
import { AssignmentOperatorContext } from "./mcbParser";
import { AdditiveOperatorContext } from "./mcbParser";
import { MultiplicativeOperatorContext } from "./mcbParser";
import { NbtContext } from "./mcbParser";
import { NbtEqualityContext } from "./mcbParser";
import { AsNBTContext } from "./mcbParser";
import { NbtSetContext } from "./mcbParser";
import { NbtArrayContext } from "./mcbParser";
import { StringLiteralContext } from "./mcbParser";
import { StrExprContext } from "./mcbParser";
import { StringContentContext } from "./mcbParser";
import { EntityContext } from "./mcbParser";
import { NlContext } from "./mcbParser";
import { NlsContext } from "./mcbParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `mcbParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface mcbParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `mcbParser.mcb`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMcb?: (ctx: McbContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.topPriorityObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopPriorityObject?: (ctx: TopPriorityObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.load`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoad?: (ctx: LoadContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.mixAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixAnnotation?: (ctx: MixAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.mixLang`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixLang?: (ctx: MixLangContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.mixBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixBlock?: (ctx: MixBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.commands`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommands?: (ctx: CommandsContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.scoreboardDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScoreboardDeclaration?: (ctx: ScoreboardDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.functionCalling`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCalling?: (ctx: FunctionCallingContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.functionInputParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionInputParameters?: (ctx: FunctionInputParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.functionParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParameters?: (ctx: FunctionParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.inputparameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputparameter?: (ctx: InputparameterContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.functionModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionModifiers?: (ctx: FunctionModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.functionModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionModifier?: (ctx: FunctionModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.unstrippedIfStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnstrippedIfStatement?: (ctx: UnstrippedIfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.controlstructBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlstructBody?: (ctx: ControlstructBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.elseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseStatement?: (ctx: ElseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.loopWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopWith?: (ctx: LoopWithContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.whileDo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileDo?: (ctx: WhileDoContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.repeatUntil`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatUntil?: (ctx: RepeatUntilContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.disconjuction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisconjuction?: (ctx: DisconjuctionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.conjuction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjuction?: (ctx: ConjuctionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.asComparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsComparison?: (ctx: AsComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.scoreNscoreExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScoreNscoreExpression?: (ctx: ScoreNscoreExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.scoreNrangeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScoreNrangeExpression?: (ctx: ScoreNrangeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.range`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange?: (ctx: RangeContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.entityNBTExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntityNBTExpression?: (ctx: EntityNBTExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.blockExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockExpression?: (ctx: BlockExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.comparator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparator?: (ctx: ComparatorContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.blockTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockTag?: (ctx: BlockTagContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.locateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocateStatement?: (ctx: LocateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.position`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosition?: (ctx: PositionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.posPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosPrefix?: (ctx: PosPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.posSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPosSuffix?: (ctx: PosSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.anchor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnchor?: (ctx: AnchorContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.ancPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAncPrefix?: (ctx: AncPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.ancSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAncSuffix?: (ctx: AncSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.locateLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocateLiteral?: (ctx: LocateLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.asExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsExpression?: (ctx: AsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.parentAssignableExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParentAssignableExpression?: (ctx: ParentAssignableExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.scoreboardIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScoreboardIdentifier?: (ctx: ScoreboardIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.scoreboardLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScoreboardLiteral?: (ctx: ScoreboardLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.scoreboardUnaryPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScoreboardUnaryPrefix?: (ctx: ScoreboardUnaryPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.scoreboardTarget`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScoreboardTarget?: (ctx: ScoreboardTargetContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.literalConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralConstant?: (ctx: LiteralConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.additiveOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveOperator?: (ctx: AdditiveOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.nbt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbt?: (ctx: NbtContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.nbtEquality`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtEquality?: (ctx: NbtEqualityContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.asNBT`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsNBT?: (ctx: AsNBTContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.nbtSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtSet?: (ctx: NbtSetContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.nbtArray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNbtArray?: (ctx: NbtArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.strExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrExpr?: (ctx: StrExprContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.stringContent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringContent?: (ctx: StringContentContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.entity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity?: (ctx: EntityContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.nl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNl?: (ctx: NlContext) => Result;

	/**
	 * Visit a parse tree produced by `mcbParser.nls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNls?: (ctx: NlsContext) => Result;
}

