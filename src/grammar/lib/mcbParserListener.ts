// Generated from E:\_Project\nodejs\mcb\src\grammar\mcbParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { McbContext } from "./mcbParser";
import { TopPriorityObjectContext } from "./mcbParser";
import { LoadContext } from "./mcbParser";
import { StatementsContext } from "./mcbParser";
import { StatementContext } from "./mcbParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `mcbParser`.
 */
export interface mcbParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `mcbParser.mcb`.
	 * @param ctx the parse tree
	 */
	enterMcb?: (ctx: McbContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.mcb`.
	 * @param ctx the parse tree
	 */
	exitMcb?: (ctx: McbContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.topPriorityObject`.
	 * @param ctx the parse tree
	 */
	enterTopPriorityObject?: (ctx: TopPriorityObjectContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.topPriorityObject`.
	 * @param ctx the parse tree
	 */
	exitTopPriorityObject?: (ctx: TopPriorityObjectContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.load`.
	 * @param ctx the parse tree
	 */
	enterLoad?: (ctx: LoadContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.load`.
	 * @param ctx the parse tree
	 */
	exitLoad?: (ctx: LoadContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.commands`.
	 * @param ctx the parse tree
	 */
	enterCommands?: (ctx: CommandsContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.commands`.
	 * @param ctx the parse tree
	 */
	exitCommands?: (ctx: CommandsContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.scoreboardDeclaration`.
	 * @param ctx the parse tree
	 */
	enterScoreboardDeclaration?: (ctx: ScoreboardDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.scoreboardDeclaration`.
	 * @param ctx the parse tree
	 */
	exitScoreboardDeclaration?: (ctx: ScoreboardDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.functionCalling`.
	 * @param ctx the parse tree
	 */
	enterFunctionCalling?: (ctx: FunctionCallingContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.functionCalling`.
	 * @param ctx the parse tree
	 */
	exitFunctionCalling?: (ctx: FunctionCallingContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.functionInputParameters`.
	 * @param ctx the parse tree
	 */
	enterFunctionInputParameters?: (ctx: FunctionInputParametersContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.functionInputParameters`.
	 * @param ctx the parse tree
	 */
	exitFunctionInputParameters?: (ctx: FunctionInputParametersContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameters?: (ctx: FunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameters?: (ctx: FunctionParametersContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.inputparameter`.
	 * @param ctx the parse tree
	 */
	enterInputparameter?: (ctx: InputparameterContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.inputparameter`.
	 * @param ctx the parse tree
	 */
	exitInputparameter?: (ctx: InputparameterContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.functionModifiers`.
	 * @param ctx the parse tree
	 */
	enterFunctionModifiers?: (ctx: FunctionModifiersContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.functionModifiers`.
	 * @param ctx the parse tree
	 */
	exitFunctionModifiers?: (ctx: FunctionModifiersContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.functionModifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionModifier?: (ctx: FunctionModifierContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.functionModifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionModifier?: (ctx: FunctionModifierContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.unstrippedIfStatement`.
	 * @param ctx the parse tree
	 */
	enterUnstrippedIfStatement?: (ctx: UnstrippedIfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.unstrippedIfStatement`.
	 * @param ctx the parse tree
	 */
	exitUnstrippedIfStatement?: (ctx: UnstrippedIfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.controlstructBody`.
	 * @param ctx the parse tree
	 */
	enterControlstructBody?: (ctx: ControlstructBodyContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.controlstructBody`.
	 * @param ctx the parse tree
	 */
	exitControlstructBody?: (ctx: ControlstructBodyContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.loopWith`.
	 * @param ctx the parse tree
	 */
	enterLoopWith?: (ctx: LoopWithContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.loopWith`.
	 * @param ctx the parse tree
	 */
	exitLoopWith?: (ctx: LoopWithContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.whileDo`.
	 * @param ctx the parse tree
	 */
	enterWhileDo?: (ctx: WhileDoContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.whileDo`.
	 * @param ctx the parse tree
	 */
	exitWhileDo?: (ctx: WhileDoContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.repeatUntil`.
	 * @param ctx the parse tree
	 */
	enterRepeatUntil?: (ctx: RepeatUntilContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.repeatUntil`.
	 * @param ctx the parse tree
	 */
	exitRepeatUntil?: (ctx: RepeatUntilContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.disconjuction`.
	 * @param ctx the parse tree
	 */
	enterDisconjuction?: (ctx: DisconjuctionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.disconjuction`.
	 * @param ctx the parse tree
	 */
	exitDisconjuction?: (ctx: DisconjuctionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.conjuction`.
	 * @param ctx the parse tree
	 */
	enterConjuction?: (ctx: ConjuctionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.conjuction`.
	 * @param ctx the parse tree
	 */
	exitConjuction?: (ctx: ConjuctionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.asComparison`.
	 * @param ctx the parse tree
	 */
	enterAsComparison?: (ctx: AsComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.asComparison`.
	 * @param ctx the parse tree
	 */
	exitAsComparison?: (ctx: AsComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.scoreNscoreExpression`.
	 * @param ctx the parse tree
	 */
	enterScoreNscoreExpression?: (ctx: ScoreNscoreExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.scoreNscoreExpression`.
	 * @param ctx the parse tree
	 */
	exitScoreNscoreExpression?: (ctx: ScoreNscoreExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.scoreNrangeExpression`.
	 * @param ctx the parse tree
	 */
	enterScoreNrangeExpression?: (ctx: ScoreNrangeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.scoreNrangeExpression`.
	 * @param ctx the parse tree
	 */
	exitScoreNrangeExpression?: (ctx: ScoreNrangeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.range`.
	 * @param ctx the parse tree
	 */
	enterRange?: (ctx: RangeContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.range`.
	 * @param ctx the parse tree
	 */
	exitRange?: (ctx: RangeContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.entityNBTExpression`.
	 * @param ctx the parse tree
	 */
	enterEntityNBTExpression?: (ctx: EntityNBTExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.entityNBTExpression`.
	 * @param ctx the parse tree
	 */
	exitEntityNBTExpression?: (ctx: EntityNBTExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.blockExpression`.
	 * @param ctx the parse tree
	 */
	enterBlockExpression?: (ctx: BlockExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.blockExpression`.
	 * @param ctx the parse tree
	 */
	exitBlockExpression?: (ctx: BlockExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.comparator`.
	 * @param ctx the parse tree
	 */
	enterComparator?: (ctx: ComparatorContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.comparator`.
	 * @param ctx the parse tree
	 */
	exitComparator?: (ctx: ComparatorContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.blockTag`.
	 * @param ctx the parse tree
	 */
	enterBlockTag?: (ctx: BlockTagContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.blockTag`.
	 * @param ctx the parse tree
	 */
	exitBlockTag?: (ctx: BlockTagContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.locateStatement`.
	 * @param ctx the parse tree
	 */
	enterLocateStatement?: (ctx: LocateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.locateStatement`.
	 * @param ctx the parse tree
	 */
	exitLocateStatement?: (ctx: LocateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.position`.
	 * @param ctx the parse tree
	 */
	enterPosition?: (ctx: PositionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.position`.
	 * @param ctx the parse tree
	 */
	exitPosition?: (ctx: PositionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.posPrefix`.
	 * @param ctx the parse tree
	 */
	enterPosPrefix?: (ctx: PosPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.posPrefix`.
	 * @param ctx the parse tree
	 */
	exitPosPrefix?: (ctx: PosPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.posSuffix`.
	 * @param ctx the parse tree
	 */
	enterPosSuffix?: (ctx: PosSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.posSuffix`.
	 * @param ctx the parse tree
	 */
	exitPosSuffix?: (ctx: PosSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.anchor`.
	 * @param ctx the parse tree
	 */
	enterAnchor?: (ctx: AnchorContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.anchor`.
	 * @param ctx the parse tree
	 */
	exitAnchor?: (ctx: AnchorContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.ancPrefix`.
	 * @param ctx the parse tree
	 */
	enterAncPrefix?: (ctx: AncPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.ancPrefix`.
	 * @param ctx the parse tree
	 */
	exitAncPrefix?: (ctx: AncPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.ancSuffix`.
	 * @param ctx the parse tree
	 */
	enterAncSuffix?: (ctx: AncSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.ancSuffix`.
	 * @param ctx the parse tree
	 */
	exitAncSuffix?: (ctx: AncSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.locateLiteral`.
	 * @param ctx the parse tree
	 */
	enterLocateLiteral?: (ctx: LocateLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.locateLiteral`.
	 * @param ctx the parse tree
	 */
	exitLocateLiteral?: (ctx: LocateLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.asExpression`.
	 * @param ctx the parse tree
	 */
	enterAsExpression?: (ctx: AsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.asExpression`.
	 * @param ctx the parse tree
	 */
	exitAsExpression?: (ctx: AsExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.parentAssignableExpression`.
	 * @param ctx the parse tree
	 */
	enterParentAssignableExpression?: (ctx: ParentAssignableExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.parentAssignableExpression`.
	 * @param ctx the parse tree
	 */
	exitParentAssignableExpression?: (ctx: ParentAssignableExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.scoreboardIdentifier`.
	 * @param ctx the parse tree
	 */
	enterScoreboardIdentifier?: (ctx: ScoreboardIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.scoreboardIdentifier`.
	 * @param ctx the parse tree
	 */
	exitScoreboardIdentifier?: (ctx: ScoreboardIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.scoreboardLiteral`.
	 * @param ctx the parse tree
	 */
	enterScoreboardLiteral?: (ctx: ScoreboardLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.scoreboardLiteral`.
	 * @param ctx the parse tree
	 */
	exitScoreboardLiteral?: (ctx: ScoreboardLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.scoreboardUnaryPrefix`.
	 * @param ctx the parse tree
	 */
	enterScoreboardUnaryPrefix?: (ctx: ScoreboardUnaryPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.scoreboardUnaryPrefix`.
	 * @param ctx the parse tree
	 */
	exitScoreboardUnaryPrefix?: (ctx: ScoreboardUnaryPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.scoreboardTarget`.
	 * @param ctx the parse tree
	 */
	enterScoreboardTarget?: (ctx: ScoreboardTargetContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.scoreboardTarget`.
	 * @param ctx the parse tree
	 */
	exitScoreboardTarget?: (ctx: ScoreboardTargetContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.literalConstant`.
	 * @param ctx the parse tree
	 */
	enterLiteralConstant?: (ctx: LiteralConstantContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.literalConstant`.
	 * @param ctx the parse tree
	 */
	exitLiteralConstant?: (ctx: LiteralConstantContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.additiveOperator`.
	 * @param ctx the parse tree
	 */
	enterAdditiveOperator?: (ctx: AdditiveOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.additiveOperator`.
	 * @param ctx the parse tree
	 */
	exitAdditiveOperator?: (ctx: AdditiveOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.nbt`.
	 * @param ctx the parse tree
	 */
	enterNbt?: (ctx: NbtContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.nbt`.
	 * @param ctx the parse tree
	 */
	exitNbt?: (ctx: NbtContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.nbtEquality`.
	 * @param ctx the parse tree
	 */
	enterNbtEquality?: (ctx: NbtEqualityContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.nbtEquality`.
	 * @param ctx the parse tree
	 */
	exitNbtEquality?: (ctx: NbtEqualityContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.asNBT`.
	 * @param ctx the parse tree
	 */
	enterAsNBT?: (ctx: AsNBTContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.asNBT`.
	 * @param ctx the parse tree
	 */
	exitAsNBT?: (ctx: AsNBTContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.nbtSet`.
	 * @param ctx the parse tree
	 */
	enterNbtSet?: (ctx: NbtSetContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.nbtSet`.
	 * @param ctx the parse tree
	 */
	exitNbtSet?: (ctx: NbtSetContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.nbtArray`.
	 * @param ctx the parse tree
	 */
	enterNbtArray?: (ctx: NbtArrayContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.nbtArray`.
	 * @param ctx the parse tree
	 */
	exitNbtArray?: (ctx: NbtArrayContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.strExpr`.
	 * @param ctx the parse tree
	 */
	enterStrExpr?: (ctx: StrExprContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.strExpr`.
	 * @param ctx the parse tree
	 */
	exitStrExpr?: (ctx: StrExprContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.stringContent`.
	 * @param ctx the parse tree
	 */
	enterStringContent?: (ctx: StringContentContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.stringContent`.
	 * @param ctx the parse tree
	 */
	exitStringContent?: (ctx: StringContentContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.entity`.
	 * @param ctx the parse tree
	 */
	enterEntity?: (ctx: EntityContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.entity`.
	 * @param ctx the parse tree
	 */
	exitEntity?: (ctx: EntityContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.nl`.
	 * @param ctx the parse tree
	 */
	enterNl?: (ctx: NlContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.nl`.
	 * @param ctx the parse tree
	 */
	exitNl?: (ctx: NlContext) => void;

	/**
	 * Enter a parse tree produced by `mcbParser.nls`.
	 * @param ctx the parse tree
	 */
	enterNls?: (ctx: NlsContext) => void;
	/**
	 * Exit a parse tree produced by `mcbParser.nls`.
	 * @param ctx the parse tree
	 */
	exitNls?: (ctx: NlsContext) => void;
}

