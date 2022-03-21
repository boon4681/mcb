// Generated from ./src/grammar/mcbParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { mcbParserListener } from "./mcbParserListener";
import { mcbParserVisitor } from "./mcbParserVisitor";


export class mcbParser extends Parser {
	public static readonly COMMANDS = 1;
	public static readonly Comment = 2;
	public static readonly WS = 3;
	public static readonly NL = 4;
	public static readonly DOT = 5;
	public static readonly COMMA = 6;
	public static readonly LPAREN = 7;
	public static readonly RPAREN = 8;
	public static readonly LSQUARE = 9;
	public static readonly RSQUARE = 10;
	public static readonly LCURL = 11;
	public static readonly RCURL = 12;
	public static readonly HASH = 13;
	public static readonly RANGE = 14;
	public static readonly RANGE_P_WS = 15;
	public static readonly RANGE_S_WS = 16;
	public static readonly RANGE_B_WS = 17;
	public static readonly MULT = 18;
	public static readonly MOD = 19;
	public static readonly DIV = 20;
	public static readonly ADD = 21;
	public static readonly SUB = 22;
	public static readonly COLON = 23;
	public static readonly NOT_WS = 24;
	public static readonly NOT_NO_WS = 25;
	public static readonly CONJ = 26;
	public static readonly DISJ = 27;
	public static readonly ASSIGNMENT = 28;
	public static readonly MULT_ASSIGNMENT = 29;
	public static readonly MOD_ASSIGNMENT = 30;
	public static readonly DIVINE_ASSIGNMENT = 31;
	public static readonly ADD_ASSIGNMENT = 32;
	public static readonly SUB_ASSIGNMENT = 33;
	public static readonly LANGLE = 34;
	public static readonly RANGLE = 35;
	public static readonly LE = 36;
	public static readonly GE = 37;
	public static readonly MC_NOT_EQ = 38;
	public static readonly AT_N_WS = 39;
	public static readonly AT_P_WS = 40;
	public static readonly AT_S_WS = 41;
	public static readonly AT_B_WS = 42;
	public static readonly ENTITY_SUFFIX = 43;
	public static readonly POS = 44;
	public static readonly POS_P_WS = 45;
	public static readonly POS_S_WS = 46;
	public static readonly ANC = 47;
	public static readonly ANC_P_WS = 48;
	public static readonly ANC_S_WS = 49;
	public static readonly FUN = 50;
	public static readonly END = 51;
	public static readonly IF = 52;
	public static readonly K_MATCHES = 53;
	public static readonly K_DATA = 54;
	public static readonly K_ENTITY = 55;
	public static readonly K_BLOCK = 56;
	public static readonly K_STORAGE = 57;
	public static readonly K_PREDICATE = 58;
	public static readonly K_SCORE = 59;
	public static readonly ELSE = 60;
	public static readonly WHILE = 61;
	public static readonly REPEAT = 62;
	public static readonly UNTIL = 63;
	public static readonly RealLiteral = 64;
	public static readonly FloatNS = 65;
	public static readonly FloatLiteral = 66;
	public static readonly DoubleLiteral = 67;
	public static readonly IntegerLiteral = 68;
	public static readonly Identifier = 69;
	public static readonly QUOTE_OPEN = 70;
	public static readonly UNICODE_CLASS_LL = 71;
	public static readonly UNICODE_CLASS_LM = 72;
	public static readonly UNICODE_CLASS_LO = 73;
	public static readonly UNICODE_CLASS_LT = 74;
	public static readonly UNICODE_CLASS_LU = 75;
	public static readonly UNICODE_CLASS_ND = 76;
	public static readonly UNICODE_CLASS_NL = 77;
	public static readonly QUOTE_CLOSE = 78;
	public static readonly LineStrText = 79;
	public static readonly COMMANDS_END = 80;
	public static readonly CommandStr = 81;
	public static readonly I_Comment = 82;
	public static readonly I_WS = 83;
	public static readonly I_NL = 84;
	public static readonly ErrorCharacter = 85;
	public static readonly RULE_mcb = 0;
	public static readonly RULE_topPriorityObject = 1;
	public static readonly RULE_statements = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_commands = 4;
	public static readonly RULE_declaration = 5;
	public static readonly RULE_variableDeclaration = 6;
	public static readonly RULE_scoreboardDeclaration = 7;
	public static readonly RULE_functionDeclaration = 8;
	public static readonly RULE_block = 9;
	public static readonly RULE_ifStatement = 10;
	public static readonly RULE_loopStatement = 11;
	public static readonly RULE_whileDo = 12;
	public static readonly RULE_repeatUntil = 13;
	public static readonly RULE_repeatUntilBlock = 14;
	public static readonly RULE_disconjuction = 15;
	public static readonly RULE_conjuction = 16;
	public static readonly RULE_comparison = 17;
	public static readonly RULE_asComparison = 18;
	public static readonly RULE_scoreNscoreExpression = 19;
	public static readonly RULE_scoreNrangeExpression = 20;
	public static readonly RULE_range = 21;
	public static readonly RULE_entityNBTExpression = 22;
	public static readonly RULE_blockExpression = 23;
	public static readonly RULE_comparator = 24;
	public static readonly RULE_blockTag = 25;
	public static readonly RULE_locateStatement = 26;
	public static readonly RULE_position = 27;
	public static readonly RULE_posPrefix = 28;
	public static readonly RULE_posSuffix = 29;
	public static readonly RULE_anchor = 30;
	public static readonly RULE_ancPrefix = 31;
	public static readonly RULE_ancSuffix = 32;
	public static readonly RULE_locateLiteral = 33;
	public static readonly RULE_assignment = 34;
	public static readonly RULE_expression = 35;
	public static readonly RULE_asExpression = 36;
	public static readonly RULE_parentAssignableExpression = 37;
	public static readonly RULE_additiveExpression = 38;
	public static readonly RULE_multiplicativeExpression = 39;
	public static readonly RULE_scoreboardIdentifier = 40;
	public static readonly RULE_scoreboardLiteral = 41;
	public static readonly RULE_scoreboardUnaryPrefix = 42;
	public static readonly RULE_scoreboardTarget = 43;
	public static readonly RULE_literalConstant = 44;
	public static readonly RULE_assignmentOperator = 45;
	public static readonly RULE_additiveOperator = 46;
	public static readonly RULE_multiplicativeOperator = 47;
	public static readonly RULE_nbt = 48;
	public static readonly RULE_nbtEquality = 49;
	public static readonly RULE_asNBT = 50;
	public static readonly RULE_nbtSet = 51;
	public static readonly RULE_nbtArray = 52;
	public static readonly RULE_stringLiteral = 53;
	public static readonly RULE_entity = 54;
	public static readonly RULE_nl = 55;
	public static readonly RULE_nls = 56;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"mcb", "topPriorityObject", "statements", "statement", "commands", "declaration", 
		"variableDeclaration", "scoreboardDeclaration", "functionDeclaration", 
		"block", "ifStatement", "loopStatement", "whileDo", "repeatUntil", "repeatUntilBlock", 
		"disconjuction", "conjuction", "comparison", "asComparison", "scoreNscoreExpression", 
		"scoreNrangeExpression", "range", "entityNBTExpression", "blockExpression", 
		"comparator", "blockTag", "locateStatement", "position", "posPrefix", 
		"posSuffix", "anchor", "ancPrefix", "ancSuffix", "locateLiteral", "assignment", 
		"expression", "asExpression", "parentAssignableExpression", "additiveExpression", 
		"multiplicativeExpression", "scoreboardIdentifier", "scoreboardLiteral", 
		"scoreboardUnaryPrefix", "scoreboardTarget", "literalConstant", "assignmentOperator", 
		"additiveOperator", "multiplicativeOperator", "nbt", "nbtEquality", "asNBT", 
		"nbtSet", "nbtArray", "stringLiteral", "entity", "nl", "nls",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'.'", "','", "'('", 
		"')'", "'['", "']'", "'{'", "'}'", "'#'", "'..'", undefined, undefined, 
		undefined, "'*'", "'%'", "'/'", "'+'", "'-'", "':'", undefined, "'!'", 
		"'and'", "'or'", "'='", "'*='", "'%='", "'/='", "'+='", "'-='", "'<'", 
		"'>'", "'<='", "'>='", "'=!'", "'@'", undefined, undefined, undefined, 
		undefined, "'~'", undefined, undefined, "'^'", undefined, undefined, "'fun'", 
		"'end'", "'if'", "'matches'", "'data'", "'entity'", "'block'", "'storage'", 
		"'predicate'", "'score'", "'else'", "'while'", "'repeat'", "'until'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMANDS", "Comment", "WS", "NL", "DOT", "COMMA", "LPAREN", 
		"RPAREN", "LSQUARE", "RSQUARE", "LCURL", "RCURL", "HASH", "RANGE", "RANGE_P_WS", 
		"RANGE_S_WS", "RANGE_B_WS", "MULT", "MOD", "DIV", "ADD", "SUB", "COLON", 
		"NOT_WS", "NOT_NO_WS", "CONJ", "DISJ", "ASSIGNMENT", "MULT_ASSIGNMENT", 
		"MOD_ASSIGNMENT", "DIVINE_ASSIGNMENT", "ADD_ASSIGNMENT", "SUB_ASSIGNMENT", 
		"LANGLE", "RANGLE", "LE", "GE", "MC_NOT_EQ", "AT_N_WS", "AT_P_WS", "AT_S_WS", 
		"AT_B_WS", "ENTITY_SUFFIX", "POS", "POS_P_WS", "POS_S_WS", "ANC", "ANC_P_WS", 
		"ANC_S_WS", "FUN", "END", "IF", "K_MATCHES", "K_DATA", "K_ENTITY", "K_BLOCK", 
		"K_STORAGE", "K_PREDICATE", "K_SCORE", "ELSE", "WHILE", "REPEAT", "UNTIL", 
		"RealLiteral", "FloatNS", "FloatLiteral", "DoubleLiteral", "IntegerLiteral", 
		"Identifier", "QUOTE_OPEN", "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", "UNICODE_CLASS_LO", 
		"UNICODE_CLASS_LT", "UNICODE_CLASS_LU", "UNICODE_CLASS_ND", "UNICODE_CLASS_NL", 
		"QUOTE_CLOSE", "LineStrText", "COMMANDS_END", "CommandStr", "I_Comment", 
		"I_WS", "I_NL", "ErrorCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(mcbParser._LITERAL_NAMES, mcbParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return mcbParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "mcbParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return mcbParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return mcbParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(mcbParser._ATN, this);
	}
	// @RuleVersion(0)
	public mcb(): McbContext {
		let _localctx: McbContext = new McbContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, mcbParser.RULE_mcb);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 114;
				this.match(mcbParser.NL);
				}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.HASH || _la === mcbParser.FUN) {
				{
				{
				this.state = 120;
				this.topPriorityObject();
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
			this.match(mcbParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public topPriorityObject(): TopPriorityObjectContext {
		let _localctx: TopPriorityObjectContext = new TopPriorityObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, mcbParser.RULE_topPriorityObject);
		try {
			this.state = 136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.FUN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 128;
				this.declaration();
				this.state = 130;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 129;
					this.nl();
					}
					break;
				}
				}
				break;
			case mcbParser.HASH:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 132;
				this.scoreboardDeclaration();
				this.state = 134;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 133;
					this.nl();
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mcbParser.RULE_statements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.COMMANDS || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (mcbParser.FUN - 50)) | (1 << (mcbParser.IF - 50)) | (1 << (mcbParser.WHILE - 50)) | (1 << (mcbParser.REPEAT - 50)) | (1 << (mcbParser.Identifier - 50)))) !== 0)) {
				{
				this.state = 138;
				this.statement();
				this.state = 144;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 139;
						this.nls();
						this.state = 140;
						this.statement();
						}
						}
					}
					this.state = 146;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				}
			}

			this.state = 150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 149;
				this.nls();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, mcbParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.FUN:
				{
				this.state = 152;
				this.declaration();
				}
				break;
			case mcbParser.Identifier:
				{
				this.state = 153;
				this.assignment();
				}
				break;
			case mcbParser.WHILE:
			case mcbParser.REPEAT:
				{
				this.state = 154;
				this.loopStatement();
				}
				break;
			case mcbParser.IF:
				{
				this.state = 155;
				this.ifStatement();
				}
				break;
			case mcbParser.COMMANDS:
				{
				this.state = 156;
				this.commands();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commands(): CommandsContext {
		let _localctx: CommandsContext = new CommandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, mcbParser.RULE_commands);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(mcbParser.COMMANDS);
			this.state = 160;
			this.match(mcbParser.CommandStr);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, mcbParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.functionDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, mcbParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.scoreboardDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scoreboardDeclaration(): ScoreboardDeclarationContext {
		let _localctx: ScoreboardDeclarationContext = new ScoreboardDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, mcbParser.RULE_scoreboardDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(mcbParser.HASH);
			this.state = 167;
			this.match(mcbParser.Identifier);
			this.state = 168;
			this.match(mcbParser.COLON);
			this.state = 169;
			this.match(mcbParser.K_SCORE);
			this.state = 170;
			this.match(mcbParser.Identifier);
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.Identifier) {
				{
				this.state = 171;
				this.match(mcbParser.Identifier);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, mcbParser.RULE_functionDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(mcbParser.FUN);
			this.state = 175;
			this.match(mcbParser.Identifier);
			this.state = 176;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, mcbParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(mcbParser.COLON);
			this.state = 182;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 179;
					this.match(mcbParser.NL);
					}
					}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 185;
			this.statements();
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 186;
				this.match(mcbParser.NL);
				}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 192;
			this.match(mcbParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, mcbParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(mcbParser.IF);
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 195;
				this.match(mcbParser.NL);
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 201;
			this.disconjuction();
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 202;
				this.match(mcbParser.NL);
				}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 208;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let _localctx: LoopStatementContext = new LoopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, mcbParser.RULE_loopStatement);
		try {
			this.state = 212;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				this.whileDo();
				}
				break;
			case mcbParser.REPEAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 211;
				this.repeatUntil();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileDo(): WhileDoContext {
		let _localctx: WhileDoContext = new WhileDoContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, mcbParser.RULE_whileDo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.match(mcbParser.WHILE);
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 215;
				this.match(mcbParser.NL);
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 221;
			this.disconjuction();
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 222;
				this.match(mcbParser.NL);
				}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 228;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatUntil(): RepeatUntilContext {
		let _localctx: RepeatUntilContext = new RepeatUntilContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, mcbParser.RULE_repeatUntil);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(mcbParser.REPEAT);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 231;
				this.match(mcbParser.NL);
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
			this.repeatUntilBlock();
			this.state = 238;
			this.disconjuction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatUntilBlock(): RepeatUntilBlockContext {
		let _localctx: RepeatUntilBlockContext = new RepeatUntilBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, mcbParser.RULE_repeatUntilBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			this.match(mcbParser.COLON);
			this.state = 244;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 241;
					this.match(mcbParser.NL);
					}
					}
				}
				this.state = 246;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			this.state = 247;
			this.statements();
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 248;
				this.match(mcbParser.NL);
				}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 254;
			this.match(mcbParser.UNTIL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public disconjuction(): DisconjuctionContext {
		let _localctx: DisconjuctionContext = new DisconjuctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, mcbParser.RULE_disconjuction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			this.conjuction();
			this.state = 260;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 257;
					this.match(mcbParser.NL);
					}
					}
				}
				this.state = 262;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.DISJ) {
				{
				{
				this.state = 263;
				this.match(mcbParser.DISJ);
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mcbParser.NL) {
					{
					{
					this.state = 264;
					this.match(mcbParser.NL);
					}
					}
					this.state = 269;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 270;
				this.conjuction();
				}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conjuction(): ConjuctionContext {
		let _localctx: ConjuctionContext = new ConjuctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, mcbParser.RULE_conjuction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 276;
			this.comparison();
			this.state = 280;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 277;
					this.match(mcbParser.NL);
					}
					}
				}
				this.state = 282;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 293;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.CONJ) {
				{
				{
				this.state = 283;
				this.match(mcbParser.CONJ);
				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mcbParser.NL) {
					{
					{
					this.state = 284;
					this.match(mcbParser.NL);
					}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 290;
				this.comparison();
				}
				}
				this.state = 295;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparison(): ComparisonContext {
		let _localctx: ComparisonContext = new ComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, mcbParser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.NOT_NO_WS) {
				{
				this.state = 296;
				this.match(mcbParser.NOT_NO_WS);
				}
			}

			this.state = 299;
			this.asComparison();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asComparison(): AsComparisonContext {
		let _localctx: AsComparisonContext = new AsComparisonContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, mcbParser.RULE_asComparison);
		try {
			this.state = 305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 301;
				this.scoreNscoreExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 302;
				this.scoreNrangeExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 303;
				this.entityNBTExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 304;
				this.blockExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scoreNscoreExpression(): ScoreNscoreExpressionContext {
		let _localctx: ScoreNscoreExpressionContext = new ScoreNscoreExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, mcbParser.RULE_scoreNscoreExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.scoreboardIdentifier();
			this.state = 308;
			this.comparator();
			this.state = 309;
			this.scoreboardIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scoreNrangeExpression(): ScoreNrangeExpressionContext {
		let _localctx: ScoreNrangeExpressionContext = new ScoreNrangeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, mcbParser.RULE_scoreNrangeExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.scoreboardIdentifier();
			this.state = 312;
			this.match(mcbParser.K_MATCHES);
			this.state = 313;
			this.range();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public range(): RangeContext {
		let _localctx: RangeContext = new RangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, mcbParser.RULE_range);
		let _la: number;
		try {
			this.state = 326;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 315;
				this.scoreboardLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 316;
				this.scoreboardLiteral();
				this.state = 317;
				this.match(mcbParser.RANGE_S_WS);
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === mcbParser.SUB || _la === mcbParser.IntegerLiteral) {
					{
					this.state = 318;
					this.scoreboardLiteral();
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === mcbParser.SUB || _la === mcbParser.IntegerLiteral) {
					{
					this.state = 321;
					this.scoreboardLiteral();
					}
				}

				this.state = 324;
				this.match(mcbParser.RANGE_P_WS);
				this.state = 325;
				this.scoreboardLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entityNBTExpression(): EntityNBTExpressionContext {
		let _localctx: EntityNBTExpressionContext = new EntityNBTExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, mcbParser.RULE_entityNBTExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(mcbParser.K_ENTITY);
			this.state = 329;
			this.entity();
			this.state = 331;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.LSQUARE) {
				{
				this.state = 330;
				this.nbt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockExpression(): BlockExpressionContext {
		let _localctx: BlockExpressionContext = new BlockExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, mcbParser.RULE_blockExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(mcbParser.K_BLOCK);
			this.state = 334;
			this.locateStatement();
			this.state = 335;
			this.blockTag();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparator(): ComparatorContext {
		let _localctx: ComparatorContext = new ComparatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, mcbParser.RULE_comparator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			_la = this._input.LA(1);
			if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (mcbParser.ASSIGNMENT - 28)) | (1 << (mcbParser.LANGLE - 28)) | (1 << (mcbParser.RANGLE - 28)) | (1 << (mcbParser.LE - 28)) | (1 << (mcbParser.GE - 28)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockTag(): BlockTagContext {
		let _localctx: BlockTagContext = new BlockTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, mcbParser.RULE_blockTag);
		try {
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 339;
				this.match(mcbParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 340;
				this.match(mcbParser.Identifier);
				this.state = 341;
				this.match(mcbParser.COLON);
				this.state = 342;
				this.match(mcbParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public locateStatement(): LocateStatementContext {
		let _localctx: LocateStatementContext = new LocateStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, mcbParser.RULE_locateStatement);
		try {
			this.state = 347;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 345;
				this.position();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 346;
				this.anchor();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public position(): PositionContext {
		let _localctx: PositionContext = new PositionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, mcbParser.RULE_position);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.posPrefix();
			this.state = 350;
			this.posPrefix();
			this.state = 351;
			this.posPrefix();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public posPrefix(): PosPrefixContext {
		let _localctx: PosPrefixContext = new PosPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, mcbParser.RULE_posPrefix);
		try {
			this.state = 357;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 353;
				this.match(mcbParser.POS_P_WS);
				this.state = 354;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 355;
				this.match(mcbParser.POS_P_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 356;
				this.locateLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public posSuffix(): PosSuffixContext {
		let _localctx: PosSuffixContext = new PosSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, mcbParser.RULE_posSuffix);
		try {
			this.state = 363;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this.match(mcbParser.POS_S_WS);
				this.state = 360;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 361;
				this.match(mcbParser.POS_S_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 362;
				this.locateLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anchor(): AnchorContext {
		let _localctx: AnchorContext = new AnchorContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, mcbParser.RULE_anchor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 365;
			this.ancPrefix();
			this.state = 366;
			this.ancSuffix();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ancPrefix(): AncPrefixContext {
		let _localctx: AncPrefixContext = new AncPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, mcbParser.RULE_ancPrefix);
		try {
			this.state = 372;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 368;
				this.match(mcbParser.ANC_P_WS);
				this.state = 369;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 370;
				this.match(mcbParser.ANC_P_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 371;
				this.locateLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ancSuffix(): AncSuffixContext {
		let _localctx: AncSuffixContext = new AncSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, mcbParser.RULE_ancSuffix);
		try {
			this.state = 378;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 374;
				this.match(mcbParser.ANC_S_WS);
				this.state = 375;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 376;
				this.match(mcbParser.ANC_S_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 377;
				this.locateLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public locateLiteral(): LocateLiteralContext {
		let _localctx: LocateLiteralContext = new LocateLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, mcbParser.RULE_locateLiteral);
		try {
			this.state = 384;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 380;
				this.match(mcbParser.FloatNS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 381;
				this.match(mcbParser.SUB);
				this.state = 382;
				this.match(mcbParser.FloatNS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 383;
				this.scoreboardLiteral();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, mcbParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.scoreboardIdentifier();
			this.state = 387;
			this.assignmentOperator();
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.LPAREN || _la === mcbParser.SUB || _la === mcbParser.IntegerLiteral || _la === mcbParser.Identifier) {
				{
				{
				this.state = 388;
				this.expression();
				}
				}
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, mcbParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this.additiveExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asExpression(): AsExpressionContext {
		let _localctx: AsExpressionContext = new AsExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, mcbParser.RULE_asExpression);
		try {
			this.state = 399;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.SUB:
			case mcbParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 396;
				this.scoreboardLiteral();
				}
				break;
			case mcbParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 397;
				this.scoreboardIdentifier();
				}
				break;
			case mcbParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 398;
				this.parentAssignableExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parentAssignableExpression(): ParentAssignableExpressionContext {
		let _localctx: ParentAssignableExpressionContext = new ParentAssignableExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, mcbParser.RULE_parentAssignableExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(mcbParser.LPAREN);
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 402;
				this.match(mcbParser.NL);
				}
				}
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 408;
			this.expression();
			this.state = 412;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 409;
				this.match(mcbParser.NL);
				}
				}
				this.state = 414;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 415;
			this.match(mcbParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let _localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, mcbParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.multiplicativeExpression();
			this.state = 423;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 418;
					this.additiveOperator();
					this.state = 419;
					this.multiplicativeExpression();
					}
					}
				}
				this.state = 425;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let _localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, mcbParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.asExpression();
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mcbParser.MULT) | (1 << mcbParser.MOD) | (1 << mcbParser.DIV))) !== 0)) {
				{
				{
				this.state = 427;
				this.multiplicativeOperator();
				this.state = 428;
				this.asExpression();
				}
				}
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scoreboardIdentifier(): ScoreboardIdentifierContext {
		let _localctx: ScoreboardIdentifierContext = new ScoreboardIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, mcbParser.RULE_scoreboardIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(mcbParser.Identifier);
			this.state = 436;
			this.match(mcbParser.LSQUARE);
			this.state = 439;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.Identifier:
				{
				this.state = 437;
				this.match(mcbParser.Identifier);
				}
				break;
			case mcbParser.AT_N_WS:
			case mcbParser.AT_P_WS:
				{
				this.state = 438;
				this.scoreboardTarget();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 441;
			this.match(mcbParser.RSQUARE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scoreboardLiteral(): ScoreboardLiteralContext {
		let _localctx: ScoreboardLiteralContext = new ScoreboardLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, mcbParser.RULE_scoreboardLiteral);
		try {
			this.state = 445;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 443;
				this.match(mcbParser.IntegerLiteral);
				}
				break;
			case mcbParser.SUB:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 444;
				this.scoreboardUnaryPrefix();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scoreboardUnaryPrefix(): ScoreboardUnaryPrefixContext {
		let _localctx: ScoreboardUnaryPrefixContext = new ScoreboardUnaryPrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, mcbParser.RULE_scoreboardUnaryPrefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.match(mcbParser.SUB);
			this.state = 448;
			this.match(mcbParser.IntegerLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scoreboardTarget(): ScoreboardTargetContext {
		let _localctx: ScoreboardTargetContext = new ScoreboardTargetContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, mcbParser.RULE_scoreboardTarget);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.entity();
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.LSQUARE) {
				{
				this.state = 451;
				this.nbt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literalConstant(): LiteralConstantContext {
		let _localctx: LiteralConstantContext = new LiteralConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, mcbParser.RULE_literalConstant);
		try {
			this.state = 457;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.RealLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 454;
				this.match(mcbParser.RealLiteral);
				}
				break;
			case mcbParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 455;
				this.match(mcbParser.IntegerLiteral);
				}
				break;
			case mcbParser.QUOTE_OPEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 456;
				this.stringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, mcbParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			_la = this._input.LA(1);
			if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (mcbParser.ASSIGNMENT - 28)) | (1 << (mcbParser.MULT_ASSIGNMENT - 28)) | (1 << (mcbParser.MOD_ASSIGNMENT - 28)) | (1 << (mcbParser.DIVINE_ASSIGNMENT - 28)) | (1 << (mcbParser.ADD_ASSIGNMENT - 28)) | (1 << (mcbParser.SUB_ASSIGNMENT - 28)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additiveOperator(): AdditiveOperatorContext {
		let _localctx: AdditiveOperatorContext = new AdditiveOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, mcbParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			_la = this._input.LA(1);
			if (!(_la === mcbParser.ADD || _la === mcbParser.SUB)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicativeOperator(): MultiplicativeOperatorContext {
		let _localctx: MultiplicativeOperatorContext = new MultiplicativeOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, mcbParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 463;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mcbParser.MULT) | (1 << mcbParser.MOD) | (1 << mcbParser.DIV))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbt(): NbtContext {
		let _localctx: NbtContext = new NbtContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, mcbParser.RULE_nbt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			this.match(mcbParser.LSQUARE);
			this.state = 466;
			this.nbtEquality();
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.COMMA) {
				{
				{
				this.state = 467;
				this.match(mcbParser.COMMA);
				this.state = 468;
				this.nbtEquality();
				}
				}
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 474;
			this.match(mcbParser.RSQUARE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtEquality(): NbtEqualityContext {
		let _localctx: NbtEqualityContext = new NbtEqualityContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, mcbParser.RULE_nbtEquality);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 476;
			this.match(mcbParser.Identifier);
			this.state = 477;
			this.match(mcbParser.ASSIGNMENT);
			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.NOT_NO_WS) {
				{
				this.state = 478;
				this.match(mcbParser.NOT_NO_WS);
				}
			}

			this.state = 481;
			this.asNBT();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asNBT(): AsNBTContext {
		let _localctx: AsNBTContext = new AsNBTContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, mcbParser.RULE_asNBT);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.RealLiteral:
			case mcbParser.IntegerLiteral:
			case mcbParser.QUOTE_OPEN:
				{
				this.state = 483;
				this.literalConstant();
				}
				break;
			case mcbParser.LSQUARE:
				{
				this.state = 484;
				this.nbtArray();
				}
				break;
			case mcbParser.Identifier:
				{
				this.state = 485;
				this.match(mcbParser.Identifier);
				}
				break;
			case mcbParser.LCURL:
				{
				this.state = 486;
				this.nbtSet();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtSet(): NbtSetContext {
		let _localctx: NbtSetContext = new NbtSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, mcbParser.RULE_nbtSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(mcbParser.LCURL);
			this.state = 490;
			this.match(mcbParser.Identifier);
			this.state = 491;
			this.match(mcbParser.ASSIGNMENT);
			this.state = 492;
			this.literalConstant();
			this.state = 493;
			this.match(mcbParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nbtArray(): NbtArrayContext {
		let _localctx: NbtArrayContext = new NbtArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, mcbParser.RULE_nbtArray);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.match(mcbParser.LSQUARE);
			this.state = 496;
			this.literalConstant();
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.COMMA) {
				{
				{
				this.state = 497;
				this.match(mcbParser.COMMA);
				this.state = 498;
				this.literalConstant();
				}
				}
				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 504;
			this.match(mcbParser.RSQUARE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, mcbParser.RULE_stringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.match(mcbParser.QUOTE_OPEN);
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.LineStrText) {
				{
				{
				this.state = 507;
				this.match(mcbParser.LineStrText);
				}
				}
				this.state = 512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 513;
			this.match(mcbParser.QUOTE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entity(): EntityContext {
		let _localctx: EntityContext = new EntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, mcbParser.RULE_entity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			_la = this._input.LA(1);
			if (!(_la === mcbParser.AT_N_WS || _la === mcbParser.AT_P_WS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 516;
			this.match(mcbParser.ENTITY_SUFFIX);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nl(): NlContext {
		let _localctx: NlContext = new NlContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, mcbParser.RULE_nl);
		let _la: number;
		try {
			this.state = 526;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.NL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 518;
				this.match(mcbParser.NL);
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mcbParser.NL) {
					{
					{
					this.state = 519;
					this.match(mcbParser.NL);
					}
					}
					this.state = 524;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case mcbParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 525;
				this.match(mcbParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nls(): NlsContext {
		let _localctx: NlsContext = new NlsContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, mcbParser.RULE_nls);
		try {
			let _alt: number;
			this.state = 534;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.NL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 529;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 528;
						this.match(mcbParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 531;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case mcbParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 533;
				this.match(mcbParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03W\u021B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x03\x02\x07\x02v\n" +
		"\x02\f\x02\x0E\x02y\v\x02\x03\x02\x07\x02|\n\x02\f\x02\x0E\x02\x7F\v\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\x85\n\x03\x03\x03\x03\x03\x05" +
		"\x03\x89\n\x03\x05\x03\x8B\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04" +
		"\x91\n\x04\f\x04\x0E\x04\x94\v\x04\x05\x04\x96\n\x04\x03\x04\x05\x04\x99" +
		"\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xA0\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\xAF\n\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x07\v\xB7\n" +
		"\v\f\v\x0E\v\xBA\v\v\x03\v\x03\v\x07\v\xBE\n\v\f\v\x0E\v\xC1\v\v\x03\v" +
		"\x03\v\x03\f\x03\f\x07\f\xC7\n\f\f\f\x0E\f\xCA\v\f\x03\f\x03\f\x07\f\xCE" +
		"\n\f\f\f\x0E\f\xD1\v\f\x03\f\x03\f\x03\r\x03\r\x05\r\xD7\n\r\x03\x0E\x03" +
		"\x0E\x07\x0E\xDB\n\x0E\f\x0E\x0E\x0E\xDE\v\x0E\x03\x0E\x03\x0E\x07\x0E" +
		"\xE2\n\x0E\f\x0E\x0E\x0E\xE5\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x07" +
		"\x0F\xEB\n\x0F\f\x0F\x0E\x0F\xEE\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x07\x10\xF5\n\x10\f\x10\x0E\x10\xF8\v\x10\x03\x10\x03\x10\x07" +
		"\x10\xFC\n\x10\f\x10\x0E\x10\xFF\v\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x07\x11\u0105\n\x11\f\x11\x0E\x11\u0108\v\x11\x03\x11\x03\x11\x07\x11" +
		"\u010C\n\x11\f\x11\x0E\x11\u010F\v\x11\x03\x11\x07\x11\u0112\n\x11\f\x11" +
		"\x0E\x11\u0115\v\x11\x03\x12\x03\x12\x07\x12\u0119\n\x12\f\x12\x0E\x12" +
		"\u011C\v\x12\x03\x12\x03\x12\x07\x12\u0120\n\x12\f\x12\x0E\x12\u0123\v" +
		"\x12\x03\x12\x07\x12\u0126\n\x12\f\x12\x0E\x12\u0129\v\x12\x03\x13\x05" +
		"\x13\u012C\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\u0134\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\u0142\n\x17\x03\x17\x05\x17" +
		"\u0145\n\x17\x03\x17\x03\x17\x05\x17\u0149\n\x17\x03\x18\x03\x18\x03\x18" +
		"\x05\x18\u014E\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u015A\n\x1B\x03\x1C\x03\x1C\x05\x1C" +
		"\u015E\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x05\x1E\u0168\n\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u016E" +
		"\n\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03!\x05!\u0177\n!\x03\"\x03\"\x03" +
		"\"\x03\"\x05\"\u017D\n\"\x03#\x03#\x03#\x03#\x05#\u0183\n#\x03$\x03$\x03" +
		"$\x07$\u0188\n$\f$\x0E$\u018B\v$\x03%\x03%\x03&\x03&\x03&\x05&\u0192\n" +
		"&\x03\'\x03\'\x07\'\u0196\n\'\f\'\x0E\'\u0199\v\'\x03\'\x03\'\x07\'\u019D" +
		"\n\'\f\'\x0E\'\u01A0\v\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x07(\u01A8\n" +
		"(\f(\x0E(\u01AB\v(\x03)\x03)\x03)\x03)\x07)\u01B1\n)\f)\x0E)\u01B4\v)" +
		"\x03*\x03*\x03*\x03*\x05*\u01BA\n*\x03*\x03*\x03+\x03+\x05+\u01C0\n+\x03" +
		",\x03,\x03,\x03-\x03-\x05-\u01C7\n-\x03.\x03.\x03.\x05.\u01CC\n.\x03/" +
		"\x03/\x030\x030\x031\x031\x032\x032\x032\x032\x072\u01D8\n2\f2\x0E2\u01DB" +
		"\v2\x032\x032\x033\x033\x033\x053\u01E2\n3\x033\x033\x034\x034\x034\x03" +
		"4\x054\u01EA\n4\x035\x035\x035\x035\x035\x035\x036\x036\x036\x036\x07" +
		"6\u01F6\n6\f6\x0E6\u01F9\v6\x036\x036\x037\x037\x077\u01FF\n7\f7\x0E7" +
		"\u0202\v7\x037\x037\x038\x038\x038\x039\x039\x079\u020B\n9\f9\x0E9\u020E" +
		"\v9\x039\x059\u0211\n9\x03:\x06:\u0214\n:\r:\x0E:\u0215\x03:\x05:\u0219" +
		"\n:\x03:\x02\x02\x02;\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02" +
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02" +
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02\x02" +
		"\x07\x04\x02\x1E\x1E$\'\x03\x02\x1E#\x03\x02\x17\x18\x03\x02\x14\x16\x03" +
		"\x02)*\x02\u022A\x02w\x03\x02\x02\x02\x04\x8A\x03\x02\x02\x02\x06\x95" +
		"\x03\x02\x02\x02\b\x9F\x03\x02\x02\x02\n\xA1\x03\x02\x02\x02\f\xA4\x03" +
		"\x02\x02\x02\x0E\xA6\x03\x02\x02\x02\x10\xA8\x03\x02\x02\x02\x12\xB0\x03" +
		"\x02\x02\x02\x14\xB4\x03\x02\x02\x02\x16\xC4\x03\x02\x02\x02\x18\xD6\x03" +
		"\x02\x02\x02\x1A\xD8\x03\x02\x02\x02\x1C\xE8\x03\x02\x02\x02\x1E\xF2\x03" +
		"\x02\x02\x02 \u0102\x03\x02\x02\x02\"\u0116\x03\x02\x02\x02$\u012B\x03" +
		"\x02\x02\x02&\u0133\x03\x02\x02\x02(\u0135\x03\x02\x02\x02*\u0139\x03" +
		"\x02\x02\x02,\u0148\x03\x02\x02\x02.\u014A\x03\x02\x02\x020\u014F\x03" +
		"\x02\x02\x022\u0153\x03\x02\x02\x024\u0159\x03\x02\x02\x026\u015D\x03" +
		"\x02\x02\x028\u015F\x03\x02\x02\x02:\u0167\x03\x02\x02\x02<\u016D\x03" +
		"\x02\x02\x02>\u016F\x03\x02\x02\x02@\u0176\x03\x02\x02\x02B\u017C\x03" +
		"\x02\x02\x02D\u0182\x03\x02\x02\x02F\u0184\x03\x02\x02\x02H\u018C\x03" +
		"\x02\x02\x02J\u0191\x03\x02\x02\x02L\u0193\x03\x02\x02\x02N\u01A3\x03" +
		"\x02\x02\x02P\u01AC\x03\x02\x02\x02R\u01B5\x03\x02\x02\x02T\u01BF\x03" +
		"\x02\x02\x02V\u01C1\x03\x02\x02\x02X\u01C4\x03\x02\x02\x02Z\u01CB\x03" +
		"\x02\x02\x02\\\u01CD\x03\x02\x02\x02^\u01CF\x03\x02\x02\x02`\u01D1\x03" +
		"\x02\x02\x02b\u01D3\x03\x02\x02\x02d\u01DE\x03\x02\x02\x02f\u01E9\x03" +
		"\x02\x02\x02h\u01EB\x03\x02\x02\x02j\u01F1\x03\x02\x02\x02l\u01FC\x03" +
		"\x02\x02\x02n\u0205\x03\x02\x02\x02p\u0210\x03\x02\x02\x02r\u0218\x03" +
		"\x02\x02\x02tv\x07\x06\x02\x02ut\x03\x02\x02\x02vy\x03\x02\x02\x02wu\x03" +
		"\x02\x02\x02wx\x03\x02\x02\x02x}\x03\x02\x02\x02yw\x03\x02\x02\x02z|\x05" +
		"\x04\x03\x02{z\x03\x02\x02\x02|\x7F\x03\x02\x02\x02}{\x03\x02\x02\x02" +
		"}~\x03\x02\x02\x02~\x80\x03\x02\x02\x02\x7F}\x03\x02\x02\x02\x80\x81\x07" +
		"\x02\x02\x03\x81\x03\x03\x02\x02\x02\x82\x84\x05\f\x07\x02\x83\x85\x05" +
		"p9\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x8B\x03\x02" +
		"\x02\x02\x86\x88\x05\x10\t\x02\x87\x89\x05p9\x02\x88\x87\x03\x02\x02\x02" +
		"\x88\x89\x03\x02\x02\x02\x89\x8B\x03\x02\x02\x02\x8A\x82\x03\x02\x02\x02" +
		"\x8A\x86\x03\x02\x02\x02\x8B\x05\x03\x02\x02\x02\x8C\x92\x05\b\x05\x02" +
		"\x8D\x8E\x05r:\x02\x8E\x8F\x05\b\x05\x02\x8F\x91\x03\x02\x02\x02\x90\x8D" +
		"\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93" +
		"\x03\x02\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x8C" +
		"\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x98\x03\x02\x02\x02\x97\x99" +
		"\x05r:\x02\x98\x97\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x07\x03" +
		"\x02\x02\x02\x9A\xA0\x05\f\x07\x02\x9B\xA0\x05F$\x02\x9C\xA0\x05\x18\r" +
		"\x02\x9D\xA0\x05\x16\f\x02\x9E\xA0\x05\n\x06\x02\x9F\x9A\x03\x02\x02\x02" +
		"\x9F\x9B\x03\x02\x02\x02\x9F\x9C\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02" +
		"\x9F\x9E\x03\x02\x02\x02\xA0\t\x03\x02\x02\x02\xA1\xA2\x07\x03\x02\x02" +
		"\xA2\xA3\x07S\x02\x02\xA3\v\x03\x02\x02\x02\xA4\xA5\x05\x12\n\x02\xA5" +
		"\r\x03\x02\x02\x02\xA6\xA7\x05\x10\t\x02\xA7\x0F\x03\x02\x02\x02\xA8\xA9" +
		"\x07\x0F\x02\x02\xA9\xAA\x07G\x02\x02\xAA\xAB\x07\x19\x02\x02\xAB\xAC" +
		"\x07=\x02\x02\xAC\xAE\x07G\x02\x02\xAD\xAF\x07G\x02\x02\xAE\xAD\x03\x02" +
		"\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\x11\x03\x02\x02\x02\xB0\xB1\x074" +
		"\x02\x02\xB1\xB2\x07G\x02\x02\xB2\xB3\x05\x14\v\x02\xB3\x13\x03\x02\x02" +
		"\x02\xB4\xB8\x07\x19\x02\x02\xB5\xB7\x07\x06\x02\x02\xB6\xB5\x03\x02\x02" +
		"\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02" +
		"\x02\xB9\xBB\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBF\x05\x06\x04" +
		"\x02\xBC\xBE\x07\x06\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\xC1\x03\x02\x02" +
		"\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC2\x03\x02\x02" +
		"\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC3\x075\x02\x02\xC3\x15\x03\x02\x02" +
		"\x02\xC4\xC8\x076\x02\x02\xC5\xC7\x07\x06\x02\x02\xC6\xC5\x03\x02\x02" +
		"\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02" +
		"\x02\xC9\xCB\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCF\x05 \x11" +
		"\x02\xCC\xCE\x07\x06\x02\x02\xCD\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02" +
		"\x02\xCF\xCD\x03\x02\x02\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x03\x02\x02" +
		"\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD3\x05\x14\v\x02\xD3\x17\x03\x02\x02" +
		"\x02\xD4\xD7\x05\x1A\x0E\x02\xD5\xD7\x05\x1C\x0F\x02\xD6\xD4\x03\x02\x02" +
		"\x02\xD6\xD5\x03\x02\x02\x02\xD7\x19\x03\x02\x02\x02\xD8\xDC\x07?\x02" +
		"\x02\xD9\xDB\x07\x06\x02\x02\xDA\xD9\x03\x02\x02\x02\xDB\xDE\x03\x02\x02" +
		"\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDF\x03\x02\x02" +
		"\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE3\x05 \x11\x02\xE0\xE2\x07\x06\x02" +
		"\x02\xE1\xE0\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02" +
		"\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6\x03\x02\x02\x02\xE5\xE3\x03\x02\x02" +
		"\x02\xE6\xE7\x05\x14\v\x02\xE7\x1B\x03\x02\x02\x02\xE8\xEC\x07@\x02\x02" +
		"\xE9\xEB\x07\x06\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02" +
		"\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02" +
		"\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x05\x1E\x10\x02\xF0\xF1\x05 \x11\x02" +
		"\xF1\x1D\x03\x02\x02\x02\xF2\xF6\x07\x19\x02\x02\xF3\xF5\x07\x06\x02\x02" +
		"\xF4\xF3\x03\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02" +
		"\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02" +
		"\xF9\xFD\x05\x06\x04\x02\xFA\xFC\x07\x06\x02\x02\xFB\xFA\x03\x02\x02\x02" +
		"\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02" +
		"\xFE\u0100\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0101\x07A\x02" +
		"\x02\u0101\x1F\x03\x02\x02\x02\u0102\u0106\x05\"\x12\x02\u0103\u0105\x07" +
		"\x06\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02\u0106" +
		"\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0113\x03\x02" +
		"\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109\u010D\x07\x1D\x02\x02\u010A" +
		"\u010C\x07\x06\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\u010F\x03\x02" +
		"\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"\u0110\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0112\x05\"\x12" +
		"\x02\u0111\u0109\x03\x02\x02\x02\u0112\u0115\x03\x02\x02\x02\u0113\u0111" +
		"\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114!\x03\x02\x02\x02\u0115" +
		"\u0113\x03\x02\x02\x02\u0116\u011A\x05$\x13\x02\u0117\u0119\x07\x06\x02" +
		"\x02\u0118\u0117\x03\x02\x02\x02\u0119\u011C\x03\x02\x02\x02\u011A\u0118" +
		"\x03\x02\x02\x02\u011A\u011B\x03\x02\x02\x02\u011B\u0127\x03\x02\x02\x02" +
		"\u011C\u011A\x03\x02\x02\x02\u011D\u0121\x07\x1C\x02\x02\u011E\u0120\x07" +
		"\x06\x02\x02\u011F\u011E\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121" +
		"\u011F\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x03\x02" +
		"\x02\x02\u0123\u0121\x03\x02\x02\x02\u0124\u0126\x05$\x13\x02\u0125\u011D" +
		"\x03\x02\x02\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02" +
		"\u0127\u0128\x03\x02\x02\x02\u0128#\x03\x02\x02\x02\u0129\u0127\x03\x02" +
		"\x02\x02\u012A\u012C\x07\x1B\x02\x02\u012B\u012A\x03\x02\x02\x02\u012B" +
		"\u012C\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x05&\x14" +
		"\x02\u012E%\x03\x02\x02\x02\u012F\u0134\x05(\x15\x02\u0130\u0134\x05*" +
		"\x16\x02\u0131\u0134\x05.\x18\x02\u0132\u0134\x050\x19\x02\u0133\u012F" +
		"\x03\x02\x02\x02\u0133\u0130\x03\x02\x02\x02\u0133\u0131\x03\x02\x02\x02" +
		"\u0133\u0132\x03\x02\x02\x02\u0134\'\x03\x02\x02\x02\u0135\u0136\x05R" +
		"*\x02\u0136\u0137\x052\x1A\x02\u0137\u0138\x05R*\x02\u0138)\x03\x02\x02" +
		"\x02\u0139\u013A\x05R*\x02\u013A\u013B\x077\x02\x02\u013B\u013C\x05,\x17" +
		"\x02\u013C+\x03\x02\x02\x02\u013D\u0149\x05T+\x02\u013E\u013F\x05T+\x02" +
		"\u013F\u0141\x07\x12\x02\x02\u0140\u0142\x05T+\x02\u0141\u0140\x03\x02" +
		"\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u0149\x03\x02\x02\x02\u0143" +
		"\u0145\x05T+\x02\u0144\u0143\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02" +
		"\u0145\u0146\x03\x02\x02\x02\u0146\u0147\x07\x11\x02\x02\u0147\u0149\x05" +
		"T+\x02\u0148\u013D\x03\x02\x02\x02\u0148\u013E\x03\x02\x02\x02\u0148\u0144" +
		"\x03\x02\x02\x02\u0149-\x03\x02\x02\x02\u014A\u014B\x079\x02\x02\u014B" +
		"\u014D\x05n8\x02\u014C\u014E\x05b2\x02\u014D\u014C\x03\x02\x02\x02\u014D" +
		"\u014E\x03\x02\x02\x02\u014E/\x03\x02\x02\x02\u014F\u0150\x07:\x02\x02" +
		"\u0150\u0151\x056\x1C\x02\u0151\u0152\x054\x1B\x02\u01521\x03\x02\x02" +
		"\x02\u0153\u0154\t\x02\x02\x02\u01543\x03\x02\x02\x02\u0155\u015A\x07" +
		"G\x02\x02\u0156\u0157\x07G\x02\x02\u0157\u0158\x07\x19\x02\x02\u0158\u015A" +
		"\x07G\x02\x02\u0159\u0155\x03\x02\x02\x02\u0159\u0156\x03\x02\x02\x02" +
		"\u015A5\x03\x02\x02\x02\u015B\u015E\x058\x1D\x02\u015C\u015E\x05> \x02" +
		"\u015D\u015B\x03\x02\x02\x02\u015D\u015C\x03\x02\x02\x02\u015E7\x03\x02" +
		"\x02\x02\u015F\u0160\x05:\x1E\x02\u0160\u0161\x05:\x1E\x02\u0161\u0162" +
		"\x05:\x1E\x02\u01629\x03\x02\x02\x02\u0163\u0164\x07/\x02\x02\u0164\u0168" +
		"\x05D#\x02\u0165\u0168\x07/\x02\x02\u0166\u0168\x05D#\x02\u0167\u0163" +
		"\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0166\x03\x02\x02\x02" +
		"\u0168;\x03\x02\x02\x02\u0169\u016A\x070\x02\x02\u016A\u016E\x05D#\x02" +
		"\u016B\u016E\x070\x02\x02\u016C\u016E\x05D#\x02\u016D\u0169\x03\x02\x02" +
		"\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016C\x03\x02\x02\x02\u016E=\x03" +
		"\x02\x02\x02\u016F\u0170\x05@!\x02\u0170\u0171\x05B\"\x02\u0171?\x03\x02" +
		"\x02\x02\u0172\u0173\x072\x02\x02\u0173\u0177\x05D#\x02\u0174\u0177\x07" +
		"2\x02\x02\u0175\u0177\x05D#\x02\u0176\u0172\x03\x02\x02\x02\u0176\u0174" +
		"\x03\x02\x02\x02\u0176\u0175\x03\x02\x02\x02\u0177A\x03\x02\x02\x02\u0178" +
		"\u0179\x073\x02\x02\u0179\u017D\x05D#\x02\u017A\u017D\x073\x02\x02\u017B" +
		"\u017D\x05D#\x02\u017C\u0178\x03\x02\x02\x02\u017C\u017A\x03\x02\x02\x02" +
		"\u017C\u017B\x03\x02\x02\x02\u017DC\x03\x02\x02\x02\u017E\u0183\x07C\x02" +
		"\x02\u017F\u0180\x07\x18\x02\x02\u0180\u0183\x07C\x02\x02\u0181\u0183" +
		"\x05T+\x02\u0182\u017E\x03\x02\x02\x02\u0182\u017F\x03\x02\x02\x02\u0182" +
		"\u0181\x03\x02\x02\x02\u0183E\x03\x02\x02\x02\u0184\u0185\x05R*\x02\u0185" +
		"\u0189\x05\\/\x02\u0186\u0188\x05H%\x02\u0187\u0186\x03\x02\x02\x02\u0188" +
		"\u018B\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02" +
		"\x02\x02\u018AG\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018C\u018D" +
		"\x05N(\x02\u018DI\x03\x02\x02\x02\u018E\u0192\x05T+\x02\u018F\u0192\x05" +
		"R*\x02\u0190\u0192\x05L\'\x02\u0191\u018E\x03\x02\x02\x02\u0191\u018F" +
		"\x03\x02\x02\x02\u0191\u0190\x03\x02\x02\x02\u0192K\x03\x02\x02\x02\u0193" +
		"\u0197\x07\t\x02\x02\u0194\u0196\x07\x06\x02\x02\u0195\u0194\x03\x02\x02" +
		"\x02\u0196\u0199\x03\x02\x02\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198" +
		"\x03\x02\x02\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0197\x03\x02\x02\x02" +
		"\u019A\u019E\x05H%\x02\u019B\u019D\x07\x06\x02\x02\u019C\u019B\x03\x02" +
		"\x02\x02\u019D\u01A0\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019E" +
		"\u019F\x03\x02\x02\x02\u019F\u01A1\x03\x02\x02\x02\u01A0\u019E\x03\x02" +
		"\x02\x02\u01A1\u01A2\x07\n\x02\x02\u01A2M\x03\x02\x02\x02\u01A3\u01A9" +
		"\x05P)\x02\u01A4\u01A5\x05^0\x02\u01A5\u01A6\x05P)\x02\u01A6\u01A8\x03" +
		"\x02\x02\x02\u01A7\u01A4\x03\x02\x02\x02\u01A8\u01AB\x03\x02\x02\x02\u01A9" +
		"\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02\u01AAO\x03\x02\x02" +
		"\x02\u01AB\u01A9\x03\x02\x02\x02\u01AC\u01B2\x05J&\x02\u01AD\u01AE\x05" +
		"`1\x02\u01AE\u01AF\x05J&\x02\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01AD\x03" +
		"\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02\x02\x02\u01B2" +
		"\u01B3\x03\x02\x02\x02\u01B3Q\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02" +
		"\x02\u01B5\u01B6\x07G\x02\x02\u01B6\u01B9\x07\v\x02\x02\u01B7\u01BA\x07" +
		"G\x02\x02\u01B8\u01BA\x05X-\x02\u01B9\u01B7\x03\x02\x02\x02\u01B9\u01B8" +
		"\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BC\x07\f\x02\x02" +
		"\u01BCS\x03\x02\x02\x02\u01BD\u01C0\x07F\x02\x02\u01BE\u01C0\x05V,\x02" +
		"\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0U\x03\x02" +
		"\x02\x02\u01C1\u01C2\x07\x18\x02\x02\u01C2\u01C3\x07F\x02\x02\u01C3W\x03" +
		"\x02\x02\x02\u01C4\u01C6\x05n8\x02\u01C5\u01C7\x05b2\x02\u01C6\u01C5\x03" +
		"\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7Y\x03\x02\x02\x02\u01C8" +
		"\u01CC\x07B\x02\x02\u01C9\u01CC\x07F\x02\x02\u01CA\u01CC\x05l7\x02\u01CB" +
		"\u01C8\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CA\x03\x02" +
		"\x02\x02\u01CC[\x03\x02\x02\x02\u01CD\u01CE\t\x03\x02\x02\u01CE]\x03\x02" +
		"\x02\x02\u01CF\u01D0\t\x04\x02\x02\u01D0_\x03\x02\x02\x02\u01D1\u01D2" +
		"\t\x05\x02\x02\u01D2a\x03\x02\x02\x02\u01D3\u01D4\x07\v\x02\x02\u01D4" +
		"\u01D9\x05d3\x02\u01D5\u01D6\x07\b\x02\x02\u01D6\u01D8\x05d3\x02\u01D7" +
		"\u01D5\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9\u01D7\x03\x02" +
		"\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DC\x03\x02\x02\x02\u01DB" +
		"\u01D9\x03\x02\x02\x02\u01DC\u01DD\x07\f\x02\x02\u01DDc\x03\x02\x02\x02" +
		"\u01DE\u01DF\x07G\x02\x02\u01DF\u01E1\x07\x1E\x02\x02\u01E0\u01E2\x07" +
		"\x1B\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2" +
		"\u01E3\x03\x02\x02\x02\u01E3\u01E4\x05f4\x02\u01E4e\x03\x02\x02\x02\u01E5" +
		"\u01EA\x05Z.\x02\u01E6\u01EA\x05j6\x02\u01E7\u01EA\x07G\x02\x02\u01E8" +
		"\u01EA\x05h5\x02\u01E9\u01E5\x03\x02\x02\x02\u01E9\u01E6\x03\x02\x02\x02" +
		"\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EAg\x03\x02" +
		"\x02\x02\u01EB\u01EC\x07\r\x02\x02\u01EC\u01ED\x07G\x02\x02\u01ED\u01EE" +
		"\x07\x1E\x02\x02\u01EE\u01EF\x05Z.\x02\u01EF\u01F0\x07\x0E\x02\x02\u01F0" +
		"i\x03\x02\x02\x02\u01F1\u01F2\x07\v\x02\x02\u01F2\u01F7\x05Z.\x02\u01F3" +
		"\u01F4\x07\b\x02\x02\u01F4\u01F6\x05Z.\x02\u01F5\u01F3\x03\x02\x02\x02" +
		"\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03" +
		"\x02\x02\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01FA" +
		"\u01FB\x07\f\x02\x02\u01FBk\x03\x02\x02\x02\u01FC\u0200\x07H\x02\x02\u01FD" +
		"\u01FF\x07Q\x02\x02\u01FE\u01FD\x03\x02\x02\x02\u01FF\u0202\x03\x02\x02" +
		"\x02\u0200\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0203" +
		"\x03\x02\x02\x02\u0202\u0200\x03\x02\x02\x02\u0203\u0204\x07P\x02\x02" +
		"\u0204m\x03\x02\x02\x02\u0205\u0206\t\x06\x02\x02\u0206\u0207\x07-\x02" +
		"\x02\u0207o\x03\x02\x02\x02\u0208\u020C\x07\x06\x02\x02\u0209\u020B\x07" +
		"\x06\x02\x02\u020A\u0209\x03\x02\x02\x02\u020B\u020E\x03\x02\x02\x02\u020C" +
		"\u020A\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u0211\x03\x02" +
		"\x02\x02\u020E\u020C\x03\x02\x02\x02\u020F\u0211\x07\x02\x02\x03\u0210" +
		"\u0208\x03\x02\x02\x02\u0210\u020F\x03\x02\x02\x02\u0211q\x03\x02\x02" +
		"\x02\u0212\u0214\x07\x06\x02\x02\u0213\u0212\x03\x02\x02\x02\u0214\u0215" +
		"\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02" +
		"\u0216\u0219\x03\x02\x02\x02\u0217\u0219\x07\x02\x02\x03\u0218\u0213\x03" +
		"\x02\x02\x02\u0218\u0217\x03\x02\x02\x02\u0219s\x03\x02\x02\x02<w}\x84" +
		"\x88\x8A\x92\x95\x98\x9F\xAE\xB8\xBF\xC8\xCF\xD6\xDC\xE3\xEC\xF6\xFD\u0106" +
		"\u010D\u0113\u011A\u0121\u0127\u012B\u0133\u0141\u0144\u0148\u014D\u0159" +
		"\u015D\u0167\u016D\u0176\u017C\u0182\u0189\u0191\u0197\u019E\u01A9\u01B2" +
		"\u01B9\u01BF\u01C6\u01CB\u01D9\u01E1\u01E9\u01F7\u0200\u020C\u0210\u0215" +
		"\u0218";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!mcbParser.__ATN) {
			mcbParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(mcbParser._serializedATN));
		}

		return mcbParser.__ATN;
	}

}

export class McbContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(mcbParser.EOF, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.NL);
		} else {
			return this.getToken(mcbParser.NL, i);
		}
	}
	public topPriorityObject(): TopPriorityObjectContext[];
	public topPriorityObject(i: number): TopPriorityObjectContext;
	public topPriorityObject(i?: number): TopPriorityObjectContext | TopPriorityObjectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TopPriorityObjectContext);
		} else {
			return this.getRuleContext(i, TopPriorityObjectContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_mcb; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterMcb) {
			listener.enterMcb(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitMcb) {
			listener.exitMcb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitMcb) {
			return visitor.visitMcb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TopPriorityObjectContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public nl(): NlContext | undefined {
		return this.tryGetRuleContext(0, NlContext);
	}
	public scoreboardDeclaration(): ScoreboardDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ScoreboardDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_topPriorityObject; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterTopPriorityObject) {
			listener.enterTopPriorityObject(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitTopPriorityObject) {
			listener.exitTopPriorityObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitTopPriorityObject) {
			return visitor.visitTopPriorityObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public nls(): NlsContext[];
	public nls(i: number): NlsContext;
	public nls(i?: number): NlsContext | NlsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NlsContext);
		} else {
			return this.getRuleContext(i, NlsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_statements; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public loopStatement(): LoopStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public commands(): CommandsContext | undefined {
		return this.tryGetRuleContext(0, CommandsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_statement; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandsContext extends ParserRuleContext {
	public COMMANDS(): TerminalNode { return this.getToken(mcbParser.COMMANDS, 0); }
	public CommandStr(): TerminalNode { return this.getToken(mcbParser.CommandStr, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_commands; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterCommands) {
			listener.enterCommands(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitCommands) {
			listener.exitCommands(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitCommands) {
			return visitor.visitCommands(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getRuleContext(0, FunctionDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_declaration; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public scoreboardDeclaration(): ScoreboardDeclarationContext {
		return this.getRuleContext(0, ScoreboardDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScoreboardDeclarationContext extends ParserRuleContext {
	public HASH(): TerminalNode { return this.getToken(mcbParser.HASH, 0); }
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.Identifier);
		} else {
			return this.getToken(mcbParser.Identifier, i);
		}
	}
	public COLON(): TerminalNode { return this.getToken(mcbParser.COLON, 0); }
	public K_SCORE(): TerminalNode { return this.getToken(mcbParser.K_SCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_scoreboardDeclaration; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterScoreboardDeclaration) {
			listener.enterScoreboardDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitScoreboardDeclaration) {
			listener.exitScoreboardDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitScoreboardDeclaration) {
			return visitor.visitScoreboardDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public FUN(): TerminalNode { return this.getToken(mcbParser.FUN, 0); }
	public Identifier(): TerminalNode { return this.getToken(mcbParser.Identifier, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(mcbParser.COLON, 0); }
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public END(): TerminalNode { return this.getToken(mcbParser.END, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.NL);
		} else {
			return this.getToken(mcbParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_block; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(mcbParser.IF, 0); }
	public disconjuction(): DisconjuctionContext {
		return this.getRuleContext(0, DisconjuctionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.NL);
		} else {
			return this.getToken(mcbParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopStatementContext extends ParserRuleContext {
	public whileDo(): WhileDoContext | undefined {
		return this.tryGetRuleContext(0, WhileDoContext);
	}
	public repeatUntil(): RepeatUntilContext | undefined {
		return this.tryGetRuleContext(0, RepeatUntilContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_loopStatement; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterLoopStatement) {
			listener.enterLoopStatement(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitLoopStatement) {
			listener.exitLoopStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitLoopStatement) {
			return visitor.visitLoopStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileDoContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(mcbParser.WHILE, 0); }
	public disconjuction(): DisconjuctionContext {
		return this.getRuleContext(0, DisconjuctionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.NL);
		} else {
			return this.getToken(mcbParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_whileDo; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterWhileDo) {
			listener.enterWhileDo(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitWhileDo) {
			listener.exitWhileDo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitWhileDo) {
			return visitor.visitWhileDo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatUntilContext extends ParserRuleContext {
	public REPEAT(): TerminalNode { return this.getToken(mcbParser.REPEAT, 0); }
	public repeatUntilBlock(): RepeatUntilBlockContext {
		return this.getRuleContext(0, RepeatUntilBlockContext);
	}
	public disconjuction(): DisconjuctionContext {
		return this.getRuleContext(0, DisconjuctionContext);
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.NL);
		} else {
			return this.getToken(mcbParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_repeatUntil; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterRepeatUntil) {
			listener.enterRepeatUntil(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitRepeatUntil) {
			listener.exitRepeatUntil(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitRepeatUntil) {
			return visitor.visitRepeatUntil(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatUntilBlockContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(mcbParser.COLON, 0); }
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public UNTIL(): TerminalNode { return this.getToken(mcbParser.UNTIL, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.NL);
		} else {
			return this.getToken(mcbParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_repeatUntilBlock; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterRepeatUntilBlock) {
			listener.enterRepeatUntilBlock(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitRepeatUntilBlock) {
			listener.exitRepeatUntilBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitRepeatUntilBlock) {
			return visitor.visitRepeatUntilBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DisconjuctionContext extends ParserRuleContext {
	public conjuction(): ConjuctionContext[];
	public conjuction(i: number): ConjuctionContext;
	public conjuction(i?: number): ConjuctionContext | ConjuctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConjuctionContext);
		} else {
			return this.getRuleContext(i, ConjuctionContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.NL);
		} else {
			return this.getToken(mcbParser.NL, i);
		}
	}
	public DISJ(): TerminalNode[];
	public DISJ(i: number): TerminalNode;
	public DISJ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.DISJ);
		} else {
			return this.getToken(mcbParser.DISJ, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_disconjuction; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterDisconjuction) {
			listener.enterDisconjuction(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitDisconjuction) {
			listener.exitDisconjuction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitDisconjuction) {
			return visitor.visitDisconjuction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConjuctionContext extends ParserRuleContext {
	public comparison(): ComparisonContext[];
	public comparison(i: number): ComparisonContext;
	public comparison(i?: number): ComparisonContext | ComparisonContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComparisonContext);
		} else {
			return this.getRuleContext(i, ComparisonContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.NL);
		} else {
			return this.getToken(mcbParser.NL, i);
		}
	}
	public CONJ(): TerminalNode[];
	public CONJ(i: number): TerminalNode;
	public CONJ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.CONJ);
		} else {
			return this.getToken(mcbParser.CONJ, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_conjuction; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterConjuction) {
			listener.enterConjuction(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitConjuction) {
			listener.exitConjuction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitConjuction) {
			return visitor.visitConjuction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonContext extends ParserRuleContext {
	public asComparison(): AsComparisonContext {
		return this.getRuleContext(0, AsComparisonContext);
	}
	public NOT_NO_WS(): TerminalNode | undefined { return this.tryGetToken(mcbParser.NOT_NO_WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_comparison; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsComparisonContext extends ParserRuleContext {
	public scoreNscoreExpression(): ScoreNscoreExpressionContext | undefined {
		return this.tryGetRuleContext(0, ScoreNscoreExpressionContext);
	}
	public scoreNrangeExpression(): ScoreNrangeExpressionContext | undefined {
		return this.tryGetRuleContext(0, ScoreNrangeExpressionContext);
	}
	public entityNBTExpression(): EntityNBTExpressionContext | undefined {
		return this.tryGetRuleContext(0, EntityNBTExpressionContext);
	}
	public blockExpression(): BlockExpressionContext | undefined {
		return this.tryGetRuleContext(0, BlockExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_asComparison; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterAsComparison) {
			listener.enterAsComparison(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitAsComparison) {
			listener.exitAsComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitAsComparison) {
			return visitor.visitAsComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScoreNscoreExpressionContext extends ParserRuleContext {
	public scoreboardIdentifier(): ScoreboardIdentifierContext[];
	public scoreboardIdentifier(i: number): ScoreboardIdentifierContext;
	public scoreboardIdentifier(i?: number): ScoreboardIdentifierContext | ScoreboardIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScoreboardIdentifierContext);
		} else {
			return this.getRuleContext(i, ScoreboardIdentifierContext);
		}
	}
	public comparator(): ComparatorContext {
		return this.getRuleContext(0, ComparatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_scoreNscoreExpression; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterScoreNscoreExpression) {
			listener.enterScoreNscoreExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitScoreNscoreExpression) {
			listener.exitScoreNscoreExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitScoreNscoreExpression) {
			return visitor.visitScoreNscoreExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScoreNrangeExpressionContext extends ParserRuleContext {
	public scoreboardIdentifier(): ScoreboardIdentifierContext {
		return this.getRuleContext(0, ScoreboardIdentifierContext);
	}
	public K_MATCHES(): TerminalNode { return this.getToken(mcbParser.K_MATCHES, 0); }
	public range(): RangeContext {
		return this.getRuleContext(0, RangeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_scoreNrangeExpression; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterScoreNrangeExpression) {
			listener.enterScoreNrangeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitScoreNrangeExpression) {
			listener.exitScoreNrangeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitScoreNrangeExpression) {
			return visitor.visitScoreNrangeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangeContext extends ParserRuleContext {
	public scoreboardLiteral(): ScoreboardLiteralContext[];
	public scoreboardLiteral(i: number): ScoreboardLiteralContext;
	public scoreboardLiteral(i?: number): ScoreboardLiteralContext | ScoreboardLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScoreboardLiteralContext);
		} else {
			return this.getRuleContext(i, ScoreboardLiteralContext);
		}
	}
	public RANGE_S_WS(): TerminalNode | undefined { return this.tryGetToken(mcbParser.RANGE_S_WS, 0); }
	public RANGE_P_WS(): TerminalNode | undefined { return this.tryGetToken(mcbParser.RANGE_P_WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_range; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterRange) {
			listener.enterRange(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitRange) {
			listener.exitRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitRange) {
			return visitor.visitRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityNBTExpressionContext extends ParserRuleContext {
	public K_ENTITY(): TerminalNode { return this.getToken(mcbParser.K_ENTITY, 0); }
	public entity(): EntityContext {
		return this.getRuleContext(0, EntityContext);
	}
	public nbt(): NbtContext | undefined {
		return this.tryGetRuleContext(0, NbtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_entityNBTExpression; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterEntityNBTExpression) {
			listener.enterEntityNBTExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitEntityNBTExpression) {
			listener.exitEntityNBTExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitEntityNBTExpression) {
			return visitor.visitEntityNBTExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockExpressionContext extends ParserRuleContext {
	public K_BLOCK(): TerminalNode { return this.getToken(mcbParser.K_BLOCK, 0); }
	public locateStatement(): LocateStatementContext {
		return this.getRuleContext(0, LocateStatementContext);
	}
	public blockTag(): BlockTagContext {
		return this.getRuleContext(0, BlockTagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_blockExpression; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterBlockExpression) {
			listener.enterBlockExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitBlockExpression) {
			listener.exitBlockExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitBlockExpression) {
			return visitor.visitBlockExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparatorContext extends ParserRuleContext {
	public LANGLE(): TerminalNode | undefined { return this.tryGetToken(mcbParser.LANGLE, 0); }
	public RANGLE(): TerminalNode | undefined { return this.tryGetToken(mcbParser.RANGLE, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(mcbParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(mcbParser.GE, 0); }
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(mcbParser.ASSIGNMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_comparator; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterComparator) {
			listener.enterComparator(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitComparator) {
			listener.exitComparator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitComparator) {
			return visitor.visitComparator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockTagContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.Identifier);
		} else {
			return this.getToken(mcbParser.Identifier, i);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(mcbParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_blockTag; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterBlockTag) {
			listener.enterBlockTag(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitBlockTag) {
			listener.exitBlockTag(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitBlockTag) {
			return visitor.visitBlockTag(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocateStatementContext extends ParserRuleContext {
	public position(): PositionContext | undefined {
		return this.tryGetRuleContext(0, PositionContext);
	}
	public anchor(): AnchorContext | undefined {
		return this.tryGetRuleContext(0, AnchorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_locateStatement; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterLocateStatement) {
			listener.enterLocateStatement(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitLocateStatement) {
			listener.exitLocateStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitLocateStatement) {
			return visitor.visitLocateStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PositionContext extends ParserRuleContext {
	public posPrefix(): PosPrefixContext[];
	public posPrefix(i: number): PosPrefixContext;
	public posPrefix(i?: number): PosPrefixContext | PosPrefixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PosPrefixContext);
		} else {
			return this.getRuleContext(i, PosPrefixContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_position; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterPosition) {
			listener.enterPosition(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitPosition) {
			listener.exitPosition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitPosition) {
			return visitor.visitPosition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PosPrefixContext extends ParserRuleContext {
	public POS_P_WS(): TerminalNode | undefined { return this.tryGetToken(mcbParser.POS_P_WS, 0); }
	public locateLiteral(): LocateLiteralContext | undefined {
		return this.tryGetRuleContext(0, LocateLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_posPrefix; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterPosPrefix) {
			listener.enterPosPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitPosPrefix) {
			listener.exitPosPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitPosPrefix) {
			return visitor.visitPosPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PosSuffixContext extends ParserRuleContext {
	public POS_S_WS(): TerminalNode | undefined { return this.tryGetToken(mcbParser.POS_S_WS, 0); }
	public locateLiteral(): LocateLiteralContext | undefined {
		return this.tryGetRuleContext(0, LocateLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_posSuffix; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterPosSuffix) {
			listener.enterPosSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitPosSuffix) {
			listener.exitPosSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitPosSuffix) {
			return visitor.visitPosSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnchorContext extends ParserRuleContext {
	public ancPrefix(): AncPrefixContext {
		return this.getRuleContext(0, AncPrefixContext);
	}
	public ancSuffix(): AncSuffixContext {
		return this.getRuleContext(0, AncSuffixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_anchor; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterAnchor) {
			listener.enterAnchor(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitAnchor) {
			listener.exitAnchor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitAnchor) {
			return visitor.visitAnchor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AncPrefixContext extends ParserRuleContext {
	public ANC_P_WS(): TerminalNode | undefined { return this.tryGetToken(mcbParser.ANC_P_WS, 0); }
	public locateLiteral(): LocateLiteralContext | undefined {
		return this.tryGetRuleContext(0, LocateLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_ancPrefix; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterAncPrefix) {
			listener.enterAncPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitAncPrefix) {
			listener.exitAncPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitAncPrefix) {
			return visitor.visitAncPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AncSuffixContext extends ParserRuleContext {
	public ANC_S_WS(): TerminalNode | undefined { return this.tryGetToken(mcbParser.ANC_S_WS, 0); }
	public locateLiteral(): LocateLiteralContext | undefined {
		return this.tryGetRuleContext(0, LocateLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_ancSuffix; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterAncSuffix) {
			listener.enterAncSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitAncSuffix) {
			listener.exitAncSuffix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitAncSuffix) {
			return visitor.visitAncSuffix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocateLiteralContext extends ParserRuleContext {
	public FloatNS(): TerminalNode | undefined { return this.tryGetToken(mcbParser.FloatNS, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(mcbParser.SUB, 0); }
	public scoreboardLiteral(): ScoreboardLiteralContext | undefined {
		return this.tryGetRuleContext(0, ScoreboardLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_locateLiteral; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterLocateLiteral) {
			listener.enterLocateLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitLocateLiteral) {
			listener.exitLocateLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitLocateLiteral) {
			return visitor.visitLocateLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public scoreboardIdentifier(): ScoreboardIdentifierContext {
		return this.getRuleContext(0, ScoreboardIdentifierContext);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_assignment; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public additiveExpression(): AdditiveExpressionContext {
		return this.getRuleContext(0, AdditiveExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_expression; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsExpressionContext extends ParserRuleContext {
	public scoreboardLiteral(): ScoreboardLiteralContext | undefined {
		return this.tryGetRuleContext(0, ScoreboardLiteralContext);
	}
	public scoreboardIdentifier(): ScoreboardIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ScoreboardIdentifierContext);
	}
	public parentAssignableExpression(): ParentAssignableExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParentAssignableExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_asExpression; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterAsExpression) {
			listener.enterAsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitAsExpression) {
			listener.exitAsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitAsExpression) {
			return visitor.visitAsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParentAssignableExpressionContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(mcbParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(mcbParser.RPAREN, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.NL);
		} else {
			return this.getToken(mcbParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_parentAssignableExpression; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterParentAssignableExpression) {
			listener.enterParentAssignableExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitParentAssignableExpression) {
			listener.exitParentAssignableExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitParentAssignableExpression) {
			return visitor.visitParentAssignableExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	public multiplicativeExpression(): MultiplicativeExpressionContext[];
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext;
	public multiplicativeExpression(i?: number): MultiplicativeExpressionContext | MultiplicativeExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeExpressionContext);
		} else {
			return this.getRuleContext(i, MultiplicativeExpressionContext);
		}
	}
	public additiveOperator(): AdditiveOperatorContext[];
	public additiveOperator(i: number): AdditiveOperatorContext;
	public additiveOperator(i?: number): AdditiveOperatorContext | AdditiveOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveOperatorContext);
		} else {
			return this.getRuleContext(i, AdditiveOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_additiveExpression; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	public asExpression(): AsExpressionContext[];
	public asExpression(i: number): AsExpressionContext;
	public asExpression(i?: number): AsExpressionContext | AsExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AsExpressionContext);
		} else {
			return this.getRuleContext(i, AsExpressionContext);
		}
	}
	public multiplicativeOperator(): MultiplicativeOperatorContext[];
	public multiplicativeOperator(i: number): MultiplicativeOperatorContext;
	public multiplicativeOperator(i?: number): MultiplicativeOperatorContext | MultiplicativeOperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeOperatorContext);
		} else {
			return this.getRuleContext(i, MultiplicativeOperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_multiplicativeExpression; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScoreboardIdentifierContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.Identifier);
		} else {
			return this.getToken(mcbParser.Identifier, i);
		}
	}
	public LSQUARE(): TerminalNode { return this.getToken(mcbParser.LSQUARE, 0); }
	public RSQUARE(): TerminalNode { return this.getToken(mcbParser.RSQUARE, 0); }
	public scoreboardTarget(): ScoreboardTargetContext | undefined {
		return this.tryGetRuleContext(0, ScoreboardTargetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_scoreboardIdentifier; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterScoreboardIdentifier) {
			listener.enterScoreboardIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitScoreboardIdentifier) {
			listener.exitScoreboardIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitScoreboardIdentifier) {
			return visitor.visitScoreboardIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScoreboardLiteralContext extends ParserRuleContext {
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(mcbParser.IntegerLiteral, 0); }
	public scoreboardUnaryPrefix(): ScoreboardUnaryPrefixContext | undefined {
		return this.tryGetRuleContext(0, ScoreboardUnaryPrefixContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_scoreboardLiteral; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterScoreboardLiteral) {
			listener.enterScoreboardLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitScoreboardLiteral) {
			listener.exitScoreboardLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitScoreboardLiteral) {
			return visitor.visitScoreboardLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScoreboardUnaryPrefixContext extends ParserRuleContext {
	public SUB(): TerminalNode { return this.getToken(mcbParser.SUB, 0); }
	public IntegerLiteral(): TerminalNode { return this.getToken(mcbParser.IntegerLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_scoreboardUnaryPrefix; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterScoreboardUnaryPrefix) {
			listener.enterScoreboardUnaryPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitScoreboardUnaryPrefix) {
			listener.exitScoreboardUnaryPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitScoreboardUnaryPrefix) {
			return visitor.visitScoreboardUnaryPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScoreboardTargetContext extends ParserRuleContext {
	public entity(): EntityContext {
		return this.getRuleContext(0, EntityContext);
	}
	public nbt(): NbtContext | undefined {
		return this.tryGetRuleContext(0, NbtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_scoreboardTarget; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterScoreboardTarget) {
			listener.enterScoreboardTarget(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitScoreboardTarget) {
			listener.exitScoreboardTarget(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitScoreboardTarget) {
			return visitor.visitScoreboardTarget(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralConstantContext extends ParserRuleContext {
	public RealLiteral(): TerminalNode | undefined { return this.tryGetToken(mcbParser.RealLiteral, 0); }
	public IntegerLiteral(): TerminalNode | undefined { return this.tryGetToken(mcbParser.IntegerLiteral, 0); }
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_literalConstant; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterLiteralConstant) {
			listener.enterLiteralConstant(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitLiteralConstant) {
			listener.exitLiteralConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitLiteralConstant) {
			return visitor.visitLiteralConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(mcbParser.ASSIGNMENT, 0); }
	public MULT_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(mcbParser.MULT_ASSIGNMENT, 0); }
	public MOD_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(mcbParser.MOD_ASSIGNMENT, 0); }
	public DIVINE_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(mcbParser.DIVINE_ASSIGNMENT, 0); }
	public ADD_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(mcbParser.ADD_ASSIGNMENT, 0); }
	public SUB_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(mcbParser.SUB_ASSIGNMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveOperatorContext extends ParserRuleContext {
	public ADD(): TerminalNode | undefined { return this.tryGetToken(mcbParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(mcbParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_additiveOperator; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterAdditiveOperator) {
			listener.enterAdditiveOperator(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitAdditiveOperator) {
			listener.exitAdditiveOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitAdditiveOperator) {
			return visitor.visitAdditiveOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeOperatorContext extends ParserRuleContext {
	public MULT(): TerminalNode | undefined { return this.tryGetToken(mcbParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(mcbParser.DIV, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(mcbParser.MOD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_multiplicativeOperator; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterMultiplicativeOperator) {
			listener.enterMultiplicativeOperator(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitMultiplicativeOperator) {
			listener.exitMultiplicativeOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeOperator) {
			return visitor.visitMultiplicativeOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtContext extends ParserRuleContext {
	public LSQUARE(): TerminalNode { return this.getToken(mcbParser.LSQUARE, 0); }
	public nbtEquality(): NbtEqualityContext[];
	public nbtEquality(i: number): NbtEqualityContext;
	public nbtEquality(i?: number): NbtEqualityContext | NbtEqualityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NbtEqualityContext);
		} else {
			return this.getRuleContext(i, NbtEqualityContext);
		}
	}
	public RSQUARE(): TerminalNode { return this.getToken(mcbParser.RSQUARE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.COMMA);
		} else {
			return this.getToken(mcbParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_nbt; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterNbt) {
			listener.enterNbt(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitNbt) {
			listener.exitNbt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitNbt) {
			return visitor.visitNbt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtEqualityContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(mcbParser.Identifier, 0); }
	public ASSIGNMENT(): TerminalNode { return this.getToken(mcbParser.ASSIGNMENT, 0); }
	public asNBT(): AsNBTContext {
		return this.getRuleContext(0, AsNBTContext);
	}
	public NOT_NO_WS(): TerminalNode | undefined { return this.tryGetToken(mcbParser.NOT_NO_WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_nbtEquality; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterNbtEquality) {
			listener.enterNbtEquality(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitNbtEquality) {
			listener.exitNbtEquality(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitNbtEquality) {
			return visitor.visitNbtEquality(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsNBTContext extends ParserRuleContext {
	public literalConstant(): LiteralConstantContext | undefined {
		return this.tryGetRuleContext(0, LiteralConstantContext);
	}
	public nbtArray(): NbtArrayContext | undefined {
		return this.tryGetRuleContext(0, NbtArrayContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(mcbParser.Identifier, 0); }
	public nbtSet(): NbtSetContext | undefined {
		return this.tryGetRuleContext(0, NbtSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_asNBT; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterAsNBT) {
			listener.enterAsNBT(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitAsNBT) {
			listener.exitAsNBT(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitAsNBT) {
			return visitor.visitAsNBT(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtSetContext extends ParserRuleContext {
	public LCURL(): TerminalNode { return this.getToken(mcbParser.LCURL, 0); }
	public Identifier(): TerminalNode { return this.getToken(mcbParser.Identifier, 0); }
	public ASSIGNMENT(): TerminalNode { return this.getToken(mcbParser.ASSIGNMENT, 0); }
	public literalConstant(): LiteralConstantContext {
		return this.getRuleContext(0, LiteralConstantContext);
	}
	public RCURL(): TerminalNode { return this.getToken(mcbParser.RCURL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_nbtSet; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterNbtSet) {
			listener.enterNbtSet(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitNbtSet) {
			listener.exitNbtSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitNbtSet) {
			return visitor.visitNbtSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NbtArrayContext extends ParserRuleContext {
	public LSQUARE(): TerminalNode { return this.getToken(mcbParser.LSQUARE, 0); }
	public literalConstant(): LiteralConstantContext[];
	public literalConstant(i: number): LiteralConstantContext;
	public literalConstant(i?: number): LiteralConstantContext | LiteralConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralConstantContext);
		} else {
			return this.getRuleContext(i, LiteralConstantContext);
		}
	}
	public RSQUARE(): TerminalNode { return this.getToken(mcbParser.RSQUARE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.COMMA);
		} else {
			return this.getToken(mcbParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_nbtArray; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterNbtArray) {
			listener.enterNbtArray(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitNbtArray) {
			listener.exitNbtArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitNbtArray) {
			return visitor.visitNbtArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public QUOTE_OPEN(): TerminalNode { return this.getToken(mcbParser.QUOTE_OPEN, 0); }
	public QUOTE_CLOSE(): TerminalNode { return this.getToken(mcbParser.QUOTE_CLOSE, 0); }
	public LineStrText(): TerminalNode[];
	public LineStrText(i: number): TerminalNode;
	public LineStrText(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.LineStrText);
		} else {
			return this.getToken(mcbParser.LineStrText, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityContext extends ParserRuleContext {
	public ENTITY_SUFFIX(): TerminalNode { return this.getToken(mcbParser.ENTITY_SUFFIX, 0); }
	public AT_N_WS(): TerminalNode | undefined { return this.tryGetToken(mcbParser.AT_N_WS, 0); }
	public AT_P_WS(): TerminalNode | undefined { return this.tryGetToken(mcbParser.AT_P_WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_entity; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterEntity) {
			listener.enterEntity(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitEntity) {
			listener.exitEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitEntity) {
			return visitor.visitEntity(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NlContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.NL);
		} else {
			return this.getToken(mcbParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(mcbParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_nl; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterNl) {
			listener.enterNl(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitNl) {
			listener.exitNl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitNl) {
			return visitor.visitNl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NlsContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.NL);
		} else {
			return this.getToken(mcbParser.NL, i);
		}
	}
	public EOF(): TerminalNode | undefined { return this.tryGetToken(mcbParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_nls; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterNls) {
			listener.enterNls(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitNls) {
			listener.exitNls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitNls) {
			return visitor.visitNls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


