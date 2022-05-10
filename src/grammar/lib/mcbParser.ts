// Generated from E:\_Project\nodejs\mcb\src\grammar\mcbParser.g4 by ANTLR 4.9.0-SNAPSHOT


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
	public static readonly MULT = 15;
	public static readonly MOD = 16;
	public static readonly DIV = 17;
	public static readonly ADD = 18;
	public static readonly SUB = 19;
	public static readonly COLON = 20;
	public static readonly NOT_WS = 21;
	public static readonly NOT_NO_WS = 22;
	public static readonly TYPE = 23;
	public static readonly CONJ = 24;
	public static readonly DISJ = 25;
	public static readonly ASSIGNMENT = 26;
	public static readonly MULT_ASSIGNMENT = 27;
	public static readonly MOD_ASSIGNMENT = 28;
	public static readonly DIVINE_ASSIGNMENT = 29;
	public static readonly ADD_ASSIGNMENT = 30;
	public static readonly SUB_ASSIGNMENT = 31;
	public static readonly LANGLE = 32;
	public static readonly RANGLE = 33;
	public static readonly LE = 34;
	public static readonly GE = 35;
	public static readonly MC_NOT_EQ = 36;
	public static readonly AT_N_WS = 37;
	public static readonly AT_P_WS = 38;
	public static readonly AT_S_WS = 39;
	public static readonly AT_B_WS = 40;
	public static readonly ENTITY_SUFFIX = 41;
	public static readonly POS = 42;
	public static readonly POS_P_WS = 43;
	public static readonly POS_S_WS = 44;
	public static readonly ANC = 45;
	public static readonly ANC_P_WS = 46;
	public static readonly ANC_S_WS = 47;
	public static readonly FUN = 48;
	public static readonly END = 49;
	public static readonly IF = 50;
	public static readonly LET = 51;
	public static readonly K_MATCHES = 52;
	public static readonly K_DATA = 53;
	public static readonly K_ENTITY = 54;
	public static readonly K_BLOCK = 55;
	public static readonly K_STORAGE = 56;
	public static readonly K_PREDICATE = 57;
	public static readonly K_SCORE = 58;
	public static readonly ELSE = 59;
	public static readonly WHILE = 60;
	public static readonly REPEAT = 61;
	public static readonly UNTIL = 62;
	public static readonly FOR = 63;
	public static readonly IN = 64;
	public static readonly RealLiteral = 65;
	public static readonly FloatNS = 66;
	public static readonly FloatLiteral = 67;
	public static readonly DoubleLiteral = 68;
	public static readonly IntegerLiteral = 69;
	public static readonly Identifier = 70;
	public static readonly QUOTE_OPEN = 71;
	public static readonly UNICODE_CLASS_LL = 72;
	public static readonly UNICODE_CLASS_LM = 73;
	public static readonly UNICODE_CLASS_LO = 74;
	public static readonly UNICODE_CLASS_LT = 75;
	public static readonly UNICODE_CLASS_LU = 76;
	public static readonly UNICODE_CLASS_ND = 77;
	public static readonly UNICODE_CLASS_NL = 78;
	public static readonly QUOTE_CLOSE = 79;
	public static readonly LineStrText = 80;
	public static readonly COMMANDS_END = 81;
	public static readonly CommandStr = 82;
	public static readonly I_Comment = 83;
	public static readonly I_WS = 84;
	public static readonly I_NL = 85;
	public static readonly ErrorCharacter = 86;
	public static readonly RULE_mcb = 0;
	public static readonly RULE_topPriorityObject = 1;
	public static readonly RULE_load = 2;
	public static readonly RULE_statements = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_commands = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_variableDeclaration = 7;
	public static readonly RULE_scoreboardDeclaration = 8;
	public static readonly RULE_functionDeclaration = 9;
	public static readonly RULE_functionParameters = 10;
	public static readonly RULE_parameter = 11;
	public static readonly RULE_block = 12;
	public static readonly RULE_ifStatement = 13;
	public static readonly RULE_loopStatement = 14;
	public static readonly RULE_forStatement = 15;
	public static readonly RULE_whileDo = 16;
	public static readonly RULE_repeatUntil = 17;
	public static readonly RULE_repeatUntilBlock = 18;
	public static readonly RULE_disconjuction = 19;
	public static readonly RULE_conjuction = 20;
	public static readonly RULE_comparison = 21;
	public static readonly RULE_asComparison = 22;
	public static readonly RULE_scoreNscoreExpression = 23;
	public static readonly RULE_scoreNrangeExpression = 24;
	public static readonly RULE_range = 25;
	public static readonly RULE_entityNBTExpression = 26;
	public static readonly RULE_blockExpression = 27;
	public static readonly RULE_comparator = 28;
	public static readonly RULE_blockTag = 29;
	public static readonly RULE_locateStatement = 30;
	public static readonly RULE_position = 31;
	public static readonly RULE_posPrefix = 32;
	public static readonly RULE_posSuffix = 33;
	public static readonly RULE_anchor = 34;
	public static readonly RULE_ancPrefix = 35;
	public static readonly RULE_ancSuffix = 36;
	public static readonly RULE_locateLiteral = 37;
	public static readonly RULE_assignment = 38;
	public static readonly RULE_expression = 39;
	public static readonly RULE_asExpression = 40;
	public static readonly RULE_parentAssignableExpression = 41;
	public static readonly RULE_additiveExpression = 42;
	public static readonly RULE_multiplicativeExpression = 43;
	public static readonly RULE_scoreboardIdentifier = 44;
	public static readonly RULE_scoreboardLiteral = 45;
	public static readonly RULE_scoreboardUnaryPrefix = 46;
	public static readonly RULE_scoreboardTarget = 47;
	public static readonly RULE_literalConstant = 48;
	public static readonly RULE_assignmentOperator = 49;
	public static readonly RULE_additiveOperator = 50;
	public static readonly RULE_multiplicativeOperator = 51;
	public static readonly RULE_nbt = 52;
	public static readonly RULE_nbtEquality = 53;
	public static readonly RULE_asNBT = 54;
	public static readonly RULE_nbtSet = 55;
	public static readonly RULE_nbtArray = 56;
	public static readonly RULE_stringLiteral = 57;
	public static readonly RULE_entity = 58;
	public static readonly RULE_nl = 59;
	public static readonly RULE_nls = 60;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"mcb", "topPriorityObject", "load", "statements", "statement", "commands", 
		"declaration", "variableDeclaration", "scoreboardDeclaration", "functionDeclaration", 
		"functionParameters", "parameter", "block", "ifStatement", "loopStatement", 
		"forStatement", "whileDo", "repeatUntil", "repeatUntilBlock", "disconjuction", 
		"conjuction", "comparison", "asComparison", "scoreNscoreExpression", "scoreNrangeExpression", 
		"range", "entityNBTExpression", "blockExpression", "comparator", "blockTag", 
		"locateStatement", "position", "posPrefix", "posSuffix", "anchor", "ancPrefix", 
		"ancSuffix", "locateLiteral", "assignment", "expression", "asExpression", 
		"parentAssignableExpression", "additiveExpression", "multiplicativeExpression", 
		"scoreboardIdentifier", "scoreboardLiteral", "scoreboardUnaryPrefix", 
		"scoreboardTarget", "literalConstant", "assignmentOperator", "additiveOperator", 
		"multiplicativeOperator", "nbt", "nbtEquality", "asNBT", "nbtSet", "nbtArray", 
		"stringLiteral", "entity", "nl", "nls",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'.'", "','", "'('", 
		"')'", "'['", "']'", "'{'", "'}'", "'#'", undefined, "'*'", "'%'", "'/'", 
		"'+'", "'-'", "':'", undefined, "'!'", undefined, "'and'", "'or'", "'='", 
		"'*='", "'%='", "'/='", "'+='", "'-='", "'<'", "'>'", "'<='", "'>='", 
		"'=!'", "'@'", undefined, undefined, undefined, undefined, "'~'", undefined, 
		undefined, "'^'", undefined, undefined, "'fun'", "'end'", "'if'", "'let'", 
		"'matches'", "'data'", "'entity'", "'block'", "'storage'", "'predicate'", 
		"'score'", "'else'", "'while'", "'repeat'", "'until'", "'for'", "'in'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMANDS", "Comment", "WS", "NL", "DOT", "COMMA", "LPAREN", 
		"RPAREN", "LSQUARE", "RSQUARE", "LCURL", "RCURL", "HASH", "RANGE", "MULT", 
		"MOD", "DIV", "ADD", "SUB", "COLON", "NOT_WS", "NOT_NO_WS", "TYPE", "CONJ", 
		"DISJ", "ASSIGNMENT", "MULT_ASSIGNMENT", "MOD_ASSIGNMENT", "DIVINE_ASSIGNMENT", 
		"ADD_ASSIGNMENT", "SUB_ASSIGNMENT", "LANGLE", "RANGLE", "LE", "GE", "MC_NOT_EQ", 
		"AT_N_WS", "AT_P_WS", "AT_S_WS", "AT_B_WS", "ENTITY_SUFFIX", "POS", "POS_P_WS", 
		"POS_S_WS", "ANC", "ANC_P_WS", "ANC_S_WS", "FUN", "END", "IF", "LET", 
		"K_MATCHES", "K_DATA", "K_ENTITY", "K_BLOCK", "K_STORAGE", "K_PREDICATE", 
		"K_SCORE", "ELSE", "WHILE", "REPEAT", "UNTIL", "FOR", "IN", "RealLiteral", 
		"FloatNS", "FloatLiteral", "DoubleLiteral", "IntegerLiteral", "Identifier", 
		"QUOTE_OPEN", "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", "UNICODE_CLASS_LO", 
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
			this.state = 125;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 122;
				this.match(mcbParser.NL);
				}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.COMMANDS || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (mcbParser.FUN - 48)) | (1 << (mcbParser.IF - 48)) | (1 << (mcbParser.LET - 48)) | (1 << (mcbParser.WHILE - 48)) | (1 << (mcbParser.REPEAT - 48)) | (1 << (mcbParser.FOR - 48)) | (1 << (mcbParser.Identifier - 48)))) !== 0)) {
				{
				{
				this.state = 128;
				this.topPriorityObject();
				}
				}
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 134;
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
			this.state = 144;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 136;
				this.declaration();
				this.state = 138;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 137;
					this.nl();
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 140;
				this.load();
				this.state = 142;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 141;
					this.nl();
					}
					break;
				}
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
	public load(): LoadContext {
		let _localctx: LoadContext = new LoadContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mcbParser.RULE_load);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 146;
			this.statement();
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
		this.enterRule(_localctx, 6, mcbParser.RULE_statements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.COMMANDS || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (mcbParser.FUN - 48)) | (1 << (mcbParser.IF - 48)) | (1 << (mcbParser.LET - 48)) | (1 << (mcbParser.WHILE - 48)) | (1 << (mcbParser.REPEAT - 48)) | (1 << (mcbParser.FOR - 48)) | (1 << (mcbParser.Identifier - 48)))) !== 0)) {
				{
				this.state = 148;
				this.statement();
				this.state = 154;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 149;
						this.nls();
						this.state = 150;
						this.statement();
						}
						}
					}
					this.state = 156;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
				}
				}
			}

			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 159;
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
		this.enterRule(_localctx, 8, mcbParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.FUN:
				{
				this.state = 162;
				this.declaration();
				}
				break;
			case mcbParser.Identifier:
				{
				this.state = 163;
				this.assignment();
				}
				break;
			case mcbParser.WHILE:
			case mcbParser.REPEAT:
			case mcbParser.FOR:
				{
				this.state = 164;
				this.loopStatement();
				}
				break;
			case mcbParser.IF:
				{
				this.state = 165;
				this.ifStatement();
				}
				break;
			case mcbParser.COMMANDS:
				{
				this.state = 166;
				this.commands();
				}
				break;
			case mcbParser.LET:
				{
				this.state = 167;
				this.scoreboardDeclaration();
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
		this.enterRule(_localctx, 10, mcbParser.RULE_commands);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(mcbParser.COMMANDS);
			this.state = 171;
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
		this.enterRule(_localctx, 12, mcbParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
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
		this.enterRule(_localctx, 14, mcbParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
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
		this.enterRule(_localctx, 16, mcbParser.RULE_scoreboardDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this.match(mcbParser.LET);
			this.state = 178;
			this.match(mcbParser.Identifier);
			this.state = 179;
			this.match(mcbParser.COLON);
			this.state = 180;
			this.match(mcbParser.K_SCORE);
			this.state = 181;
			this.match(mcbParser.Identifier);
			this.state = 183;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 182;
				this.match(mcbParser.Identifier);
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
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, mcbParser.RULE_functionDeclaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(mcbParser.FUN);
			this.state = 186;
			this.match(mcbParser.Identifier);
			this.state = 187;
			this.functionParameters();
			this.state = 188;
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
	public functionParameters(): FunctionParametersContext {
		let _localctx: FunctionParametersContext = new FunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, mcbParser.RULE_functionParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.match(mcbParser.LPAREN);
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.Identifier) {
				{
				this.state = 191;
				this.parameter();
				this.state = 196;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 192;
						this.match(mcbParser.COMMA);
						this.state = 193;
						this.parameter();
						}
						}
					}
					this.state = 198;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === mcbParser.COMMA) {
					{
					this.state = 199;
					this.match(mcbParser.COMMA);
					}
				}

				}
			}

			this.state = 204;
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, mcbParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(mcbParser.Identifier);
			this.state = 207;
			this.match(mcbParser.COLON);
			this.state = 208;
			this.match(mcbParser.TYPE);
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
		this.enterRule(_localctx, 24, mcbParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(mcbParser.COLON);
			this.state = 214;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 211;
					this.match(mcbParser.NL);
					}
					}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 217;
			this.statements();
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 218;
				this.match(mcbParser.NL);
				}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 224;
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
		this.enterRule(_localctx, 26, mcbParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(mcbParser.IF);
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 227;
				this.match(mcbParser.NL);
				}
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 233;
			this.disconjuction();
			this.state = 237;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 234;
				this.match(mcbParser.NL);
				}
				}
				this.state = 239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 240;
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
		this.enterRule(_localctx, 28, mcbParser.RULE_loopStatement);
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 242;
				this.whileDo();
				}
				break;
			case mcbParser.REPEAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 243;
				this.repeatUntil();
				}
				break;
			case mcbParser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 244;
				this.forStatement();
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, mcbParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(mcbParser.FOR);
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
			this.scoreboardIdentifier();
			this.state = 255;
			this.match(mcbParser.IN);
			this.state = 256;
			this.range();
			this.state = 257;
			this.match(mcbParser.COMMA);
			this.state = 258;
			this.scoreboardLiteral();
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 259;
				this.match(mcbParser.NL);
				}
				}
				this.state = 264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 265;
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
	public whileDo(): WhileDoContext {
		let _localctx: WhileDoContext = new WhileDoContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, mcbParser.RULE_whileDo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 267;
			this.match(mcbParser.WHILE);
			this.state = 271;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 268;
				this.match(mcbParser.NL);
				}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 274;
			this.disconjuction();
			this.state = 278;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 275;
				this.match(mcbParser.NL);
				}
				}
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 281;
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
		this.enterRule(_localctx, 34, mcbParser.RULE_repeatUntil);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(mcbParser.REPEAT);
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
			this.repeatUntilBlock();
			this.state = 291;
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
		this.enterRule(_localctx, 36, mcbParser.RULE_repeatUntilBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 293;
			this.match(mcbParser.COLON);
			this.state = 297;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 294;
					this.match(mcbParser.NL);
					}
					}
				}
				this.state = 299;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			}
			this.state = 300;
			this.statements();
			this.state = 304;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 301;
				this.match(mcbParser.NL);
				}
				}
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 307;
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
		this.enterRule(_localctx, 38, mcbParser.RULE_disconjuction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.conjuction();
			this.state = 313;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 310;
					this.match(mcbParser.NL);
					}
					}
				}
				this.state = 315;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.DISJ) {
				{
				{
				this.state = 316;
				this.match(mcbParser.DISJ);
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mcbParser.NL) {
					{
					{
					this.state = 317;
					this.match(mcbParser.NL);
					}
					}
					this.state = 322;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 323;
				this.conjuction();
				}
				}
				this.state = 328;
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
		this.enterRule(_localctx, 40, mcbParser.RULE_conjuction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this.comparison();
			this.state = 333;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 330;
					this.match(mcbParser.NL);
					}
					}
				}
				this.state = 335;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			this.state = 346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.CONJ) {
				{
				{
				this.state = 336;
				this.match(mcbParser.CONJ);
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mcbParser.NL) {
					{
					{
					this.state = 337;
					this.match(mcbParser.NL);
					}
					}
					this.state = 342;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 343;
				this.comparison();
				}
				}
				this.state = 348;
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
		this.enterRule(_localctx, 42, mcbParser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.NOT_NO_WS) {
				{
				this.state = 349;
				this.match(mcbParser.NOT_NO_WS);
				}
			}

			this.state = 352;
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
		this.enterRule(_localctx, 44, mcbParser.RULE_asComparison);
		try {
			this.state = 358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 354;
				this.scoreNscoreExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 355;
				this.scoreNrangeExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 356;
				this.entityNBTExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 357;
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
		this.enterRule(_localctx, 46, mcbParser.RULE_scoreNscoreExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.scoreboardIdentifier();
			this.state = 361;
			this.comparator();
			this.state = 362;
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
		this.enterRule(_localctx, 48, mcbParser.RULE_scoreNrangeExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 364;
			this.scoreboardIdentifier();
			this.state = 365;
			this.match(mcbParser.K_MATCHES);
			this.state = 366;
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
		this.enterRule(_localctx, 50, mcbParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this.match(mcbParser.RANGE);
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
		this.enterRule(_localctx, 52, mcbParser.RULE_entityNBTExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			this.match(mcbParser.K_ENTITY);
			this.state = 371;
			this.entity();
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.LSQUARE) {
				{
				this.state = 372;
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
		this.enterRule(_localctx, 54, mcbParser.RULE_blockExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			this.match(mcbParser.K_BLOCK);
			this.state = 376;
			this.locateStatement();
			this.state = 377;
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
		this.enterRule(_localctx, 56, mcbParser.RULE_comparator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			_la = this._input.LA(1);
			if (!(((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & ((1 << (mcbParser.ASSIGNMENT - 26)) | (1 << (mcbParser.LANGLE - 26)) | (1 << (mcbParser.RANGLE - 26)) | (1 << (mcbParser.LE - 26)) | (1 << (mcbParser.GE - 26)))) !== 0))) {
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
		this.enterRule(_localctx, 58, mcbParser.RULE_blockTag);
		try {
			this.state = 385;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 381;
				this.match(mcbParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 382;
				this.match(mcbParser.Identifier);
				this.state = 383;
				this.match(mcbParser.COLON);
				this.state = 384;
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
		this.enterRule(_localctx, 60, mcbParser.RULE_locateStatement);
		try {
			this.state = 389;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 387;
				this.position();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 388;
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
		this.enterRule(_localctx, 62, mcbParser.RULE_position);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 391;
			this.posPrefix();
			this.state = 392;
			this.posPrefix();
			this.state = 393;
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
		this.enterRule(_localctx, 64, mcbParser.RULE_posPrefix);
		try {
			this.state = 399;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 395;
				this.match(mcbParser.POS_P_WS);
				this.state = 396;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 397;
				this.match(mcbParser.POS_P_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 398;
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
		this.enterRule(_localctx, 66, mcbParser.RULE_posSuffix);
		try {
			this.state = 405;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 401;
				this.match(mcbParser.POS_S_WS);
				this.state = 402;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 403;
				this.match(mcbParser.POS_S_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 404;
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
		this.enterRule(_localctx, 68, mcbParser.RULE_anchor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 407;
			this.ancPrefix();
			this.state = 408;
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
		this.enterRule(_localctx, 70, mcbParser.RULE_ancPrefix);
		try {
			this.state = 414;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 410;
				this.match(mcbParser.ANC_P_WS);
				this.state = 411;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 412;
				this.match(mcbParser.ANC_P_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 413;
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
		this.enterRule(_localctx, 72, mcbParser.RULE_ancSuffix);
		try {
			this.state = 420;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 416;
				this.match(mcbParser.ANC_S_WS);
				this.state = 417;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 418;
				this.match(mcbParser.ANC_S_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 419;
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
		this.enterRule(_localctx, 74, mcbParser.RULE_locateLiteral);
		try {
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 422;
				this.match(mcbParser.FloatNS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 423;
				this.match(mcbParser.SUB);
				this.state = 424;
				this.match(mcbParser.FloatNS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 425;
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
		this.enterRule(_localctx, 76, mcbParser.RULE_assignment);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.scoreboardIdentifier();
			this.state = 429;
			this.assignmentOperator();
			this.state = 433;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 430;
					this.expression();
					}
					}
				}
				this.state = 435;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
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
		this.enterRule(_localctx, 78, mcbParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
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
		this.enterRule(_localctx, 80, mcbParser.RULE_asExpression);
		try {
			this.state = 441;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.SUB:
			case mcbParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 438;
				this.scoreboardLiteral();
				}
				break;
			case mcbParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 439;
				this.scoreboardIdentifier();
				}
				break;
			case mcbParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 440;
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
		this.enterRule(_localctx, 82, mcbParser.RULE_parentAssignableExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 443;
			this.match(mcbParser.LPAREN);
			this.state = 447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 444;
				this.match(mcbParser.NL);
				}
				}
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 450;
			this.expression();
			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 451;
				this.match(mcbParser.NL);
				}
				}
				this.state = 456;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 457;
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
		this.enterRule(_localctx, 84, mcbParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this.multiplicativeExpression();
			this.state = 465;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 460;
					this.additiveOperator();
					this.state = 461;
					this.multiplicativeExpression();
					}
					}
				}
				this.state = 467;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 45, this._ctx);
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
		this.enterRule(_localctx, 86, mcbParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 468;
			this.asExpression();
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mcbParser.MULT) | (1 << mcbParser.MOD) | (1 << mcbParser.DIV))) !== 0)) {
				{
				{
				this.state = 469;
				this.multiplicativeOperator();
				this.state = 470;
				this.asExpression();
				}
				}
				this.state = 476;
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
		this.enterRule(_localctx, 88, mcbParser.RULE_scoreboardIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(mcbParser.Identifier);
			this.state = 478;
			this.match(mcbParser.LSQUARE);
			this.state = 481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.Identifier:
				{
				this.state = 479;
				this.match(mcbParser.Identifier);
				}
				break;
			case mcbParser.AT_N_WS:
			case mcbParser.AT_P_WS:
				{
				this.state = 480;
				this.scoreboardTarget();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 483;
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
		this.enterRule(_localctx, 90, mcbParser.RULE_scoreboardLiteral);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 485;
				this.match(mcbParser.IntegerLiteral);
				}
				break;
			case mcbParser.SUB:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 486;
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
		this.enterRule(_localctx, 92, mcbParser.RULE_scoreboardUnaryPrefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(mcbParser.SUB);
			this.state = 490;
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
		this.enterRule(_localctx, 94, mcbParser.RULE_scoreboardTarget);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.entity();
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.LSQUARE) {
				{
				this.state = 493;
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
		this.enterRule(_localctx, 96, mcbParser.RULE_literalConstant);
		try {
			this.state = 499;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.RealLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 496;
				this.match(mcbParser.RealLiteral);
				}
				break;
			case mcbParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 497;
				this.match(mcbParser.IntegerLiteral);
				}
				break;
			case mcbParser.QUOTE_OPEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 498;
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
		this.enterRule(_localctx, 98, mcbParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mcbParser.ASSIGNMENT) | (1 << mcbParser.MULT_ASSIGNMENT) | (1 << mcbParser.MOD_ASSIGNMENT) | (1 << mcbParser.DIVINE_ASSIGNMENT) | (1 << mcbParser.ADD_ASSIGNMENT) | (1 << mcbParser.SUB_ASSIGNMENT))) !== 0))) {
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
		this.enterRule(_localctx, 100, mcbParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 503;
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
		this.enterRule(_localctx, 102, mcbParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
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
		this.enterRule(_localctx, 104, mcbParser.RULE_nbt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this.match(mcbParser.LSQUARE);
			this.state = 508;
			this.nbtEquality();
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.COMMA) {
				{
				{
				this.state = 509;
				this.match(mcbParser.COMMA);
				this.state = 510;
				this.nbtEquality();
				}
				}
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 516;
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
		this.enterRule(_localctx, 106, mcbParser.RULE_nbtEquality);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.match(mcbParser.Identifier);
			this.state = 519;
			this.match(mcbParser.ASSIGNMENT);
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.NOT_NO_WS) {
				{
				this.state = 520;
				this.match(mcbParser.NOT_NO_WS);
				}
			}

			this.state = 523;
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
		this.enterRule(_localctx, 108, mcbParser.RULE_asNBT);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.RealLiteral:
			case mcbParser.IntegerLiteral:
			case mcbParser.QUOTE_OPEN:
				{
				this.state = 525;
				this.literalConstant();
				}
				break;
			case mcbParser.LSQUARE:
				{
				this.state = 526;
				this.nbtArray();
				}
				break;
			case mcbParser.Identifier:
				{
				this.state = 527;
				this.match(mcbParser.Identifier);
				}
				break;
			case mcbParser.LCURL:
				{
				this.state = 528;
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
		this.enterRule(_localctx, 110, mcbParser.RULE_nbtSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.match(mcbParser.LCURL);
			this.state = 532;
			this.match(mcbParser.Identifier);
			this.state = 533;
			this.match(mcbParser.ASSIGNMENT);
			this.state = 534;
			this.literalConstant();
			this.state = 535;
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
		this.enterRule(_localctx, 112, mcbParser.RULE_nbtArray);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(mcbParser.LSQUARE);
			this.state = 538;
			this.literalConstant();
			this.state = 543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.COMMA) {
				{
				{
				this.state = 539;
				this.match(mcbParser.COMMA);
				this.state = 540;
				this.literalConstant();
				}
				}
				this.state = 545;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 546;
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
		this.enterRule(_localctx, 114, mcbParser.RULE_stringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 548;
			this.match(mcbParser.QUOTE_OPEN);
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.LineStrText) {
				{
				{
				this.state = 549;
				this.match(mcbParser.LineStrText);
				}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 555;
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
		this.enterRule(_localctx, 116, mcbParser.RULE_entity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
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
			this.state = 558;
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
		this.enterRule(_localctx, 118, mcbParser.RULE_nl);
		let _la: number;
		try {
			this.state = 568;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.NL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 560;
				this.match(mcbParser.NL);
				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mcbParser.NL) {
					{
					{
					this.state = 561;
					this.match(mcbParser.NL);
					}
					}
					this.state = 566;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case mcbParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 567;
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
		this.enterRule(_localctx, 120, mcbParser.RULE_nls);
		try {
			let _alt: number;
			this.state = 576;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.NL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 571;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 570;
						this.match(mcbParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 573;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case mcbParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 575;
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

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03X\u0245\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x03\x02\x07\x02~\n\x02\f\x02\x0E\x02\x81\v\x02\x03\x02\x07" +
		"\x02\x84\n\x02\f\x02\x0E\x02\x87\v\x02\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x05\x03\x8D\n\x03\x03\x03\x03\x03\x05\x03\x91\n\x03\x05\x03\x93\n\x03" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\x9B\n\x05\f\x05" +
		"\x0E\x05\x9E\v\x05\x05\x05\xA0\n\x05\x03\x05\x05\x05\xA3\n\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xAB\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\xBA\n\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f" +
		"\x07\f\xC5\n\f\f\f\x0E\f\xC8\v\f\x03\f\x05\f\xCB\n\f\x05\f\xCD\n\f\x03" +
		"\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x07\x0E\xD7\n\x0E\f\x0E" +
		"\x0E\x0E\xDA\v\x0E\x03\x0E\x03\x0E\x07\x0E\xDE\n\x0E\f\x0E\x0E\x0E\xE1" +
		"\v\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x07\x0F\xE7\n\x0F\f\x0F\x0E\x0F" +
		"\xEA\v\x0F\x03\x0F\x03\x0F\x07\x0F\xEE\n\x0F\f\x0F\x0E\x0F\xF1\v\x0F\x03" +
		"\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xF8\n\x10\x03\x11\x03\x11" +
		"\x07\x11\xFC\n\x11\f\x11\x0E\x11\xFF\v\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\u0107\n\x11\f\x11\x0E\x11\u010A\v\x11\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x07\x12\u0110\n\x12\f\x12\x0E\x12\u0113\v" +
		"\x12\x03\x12\x03\x12\x07\x12\u0117\n\x12\f\x12\x0E\x12\u011A\v\x12\x03" +
		"\x12\x03\x12\x03\x13\x03\x13\x07\x13\u0120\n\x13\f\x13\x0E\x13\u0123\v" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x07\x14\u012A\n\x14\f\x14" +
		"\x0E\x14\u012D\v\x14\x03\x14\x03\x14\x07\x14\u0131\n\x14\f\x14\x0E\x14" +
		"\u0134\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15\u013A\n\x15\f\x15" +
		"\x0E\x15\u013D\v\x15\x03\x15\x03\x15\x07\x15\u0141\n\x15\f\x15\x0E\x15" +
		"\u0144\v\x15\x03\x15\x07\x15\u0147\n\x15\f\x15\x0E\x15\u014A\v\x15\x03" +
		"\x16\x03\x16\x07\x16\u014E\n\x16\f\x16\x0E\x16\u0151\v\x16\x03\x16\x03" +
		"\x16\x07\x16\u0155\n\x16\f\x16\x0E\x16\u0158\v\x16\x03\x16\x07\x16\u015B" +
		"\n\x16\f\x16\x0E\x16\u015E\v\x16\x03\x17\x05\x17\u0161\n\x17\x03\x17\x03" +
		"\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0169\n\x18\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u0178\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0184\n\x1F\x03 " +
		"\x03 \x05 \u0188\n \x03!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x05\"" +
		"\u0192\n\"\x03#\x03#\x03#\x03#\x05#\u0198\n#\x03$\x03$\x03$\x03%\x03%" +
		"\x03%\x03%\x05%\u01A1\n%\x03&\x03&\x03&\x03&\x05&\u01A7\n&\x03\'\x03\'" +
		"\x03\'\x03\'\x05\'\u01AD\n\'\x03(\x03(\x03(\x07(\u01B2\n(\f(\x0E(\u01B5" +
		"\v(\x03)\x03)\x03*\x03*\x03*\x05*\u01BC\n*\x03+\x03+\x07+\u01C0\n+\f+" +
		"\x0E+\u01C3\v+\x03+\x03+\x07+\u01C7\n+\f+\x0E+\u01CA\v+\x03+\x03+\x03" +
		",\x03,\x03,\x03,\x07,\u01D2\n,\f,\x0E,\u01D5\v,\x03-\x03-\x03-\x03-\x07" +
		"-\u01DB\n-\f-\x0E-\u01DE\v-\x03.\x03.\x03.\x03.\x05.\u01E4\n.\x03.\x03" +
		".\x03/\x03/\x05/\u01EA\n/\x030\x030\x030\x031\x031\x051\u01F1\n1\x032" +
		"\x032\x032\x052\u01F6\n2\x033\x033\x034\x034\x035\x035\x036\x036\x036" +
		"\x036\x076\u0202\n6\f6\x0E6\u0205\v6\x036\x036\x037\x037\x037\x057\u020C" +
		"\n7\x037\x037\x038\x038\x038\x038\x058\u0214\n8\x039\x039\x039\x039\x03" +
		"9\x039\x03:\x03:\x03:\x03:\x07:\u0220\n:\f:\x0E:\u0223\v:\x03:\x03:\x03" +
		";\x03;\x07;\u0229\n;\f;\x0E;\u022C\v;\x03;\x03;\x03<\x03<\x03<\x03=\x03" +
		"=\x07=\u0235\n=\f=\x0E=\u0238\v=\x03=\x05=\u023B\n=\x03>\x06>\u023E\n" +
		">\r>\x0E>\u023F\x03>\x05>\u0243\n>\x03>\x02\x02\x02?\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
		"2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
		"N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
		"j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02\x02\x07\x04\x02\x1C\x1C" +
		"\"%\x03\x02\x1C!\x03\x02\x14\x15\x03\x02\x11\x13\x03\x02\'(\x02\u0253" +
		"\x02\x7F\x03\x02\x02\x02\x04\x92\x03\x02\x02\x02\x06\x94\x03\x02\x02\x02" +
		"\b\x9F\x03\x02\x02\x02\n\xAA\x03\x02\x02\x02\f\xAC\x03\x02\x02\x02\x0E" +
		"\xAF\x03\x02\x02\x02\x10\xB1\x03\x02\x02\x02\x12\xB3\x03\x02\x02\x02\x14" +
		"\xBB\x03\x02\x02\x02\x16\xC0\x03\x02\x02\x02\x18\xD0\x03\x02\x02\x02\x1A" +
		"\xD4\x03\x02\x02\x02\x1C\xE4\x03\x02\x02\x02\x1E\xF7\x03\x02\x02\x02 " +
		"\xF9\x03\x02\x02\x02\"\u010D\x03\x02\x02\x02$\u011D\x03\x02\x02\x02&\u0127" +
		"\x03\x02\x02\x02(\u0137\x03\x02\x02\x02*\u014B\x03\x02\x02\x02,\u0160" +
		"\x03\x02\x02\x02.\u0168\x03\x02\x02\x020\u016A\x03\x02\x02\x022\u016E" +
		"\x03\x02\x02\x024\u0172\x03\x02\x02\x026\u0174\x03\x02\x02\x028\u0179" +
		"\x03\x02\x02\x02:\u017D\x03\x02\x02\x02<\u0183\x03\x02\x02\x02>\u0187" +
		"\x03\x02\x02\x02@\u0189\x03\x02\x02\x02B\u0191\x03\x02\x02\x02D\u0197" +
		"\x03\x02\x02\x02F\u0199\x03\x02\x02\x02H\u01A0\x03\x02\x02\x02J\u01A6" +
		"\x03\x02\x02\x02L\u01AC\x03\x02\x02\x02N\u01AE\x03\x02\x02\x02P\u01B6" +
		"\x03\x02\x02\x02R\u01BB\x03\x02\x02\x02T\u01BD\x03\x02\x02\x02V\u01CD" +
		"\x03\x02\x02\x02X\u01D6\x03\x02\x02\x02Z\u01DF\x03\x02\x02\x02\\\u01E9" +
		"\x03\x02\x02\x02^\u01EB\x03\x02\x02\x02`\u01EE\x03\x02\x02\x02b\u01F5" +
		"\x03\x02\x02\x02d\u01F7\x03\x02\x02\x02f\u01F9\x03\x02\x02\x02h\u01FB" +
		"\x03\x02\x02\x02j\u01FD\x03\x02\x02\x02l\u0208\x03\x02\x02\x02n\u0213" +
		"\x03\x02\x02\x02p\u0215\x03\x02\x02\x02r\u021B\x03\x02\x02\x02t\u0226" +
		"\x03\x02\x02\x02v\u022F\x03\x02\x02\x02x\u023A\x03\x02\x02\x02z\u0242" +
		"\x03\x02\x02\x02|~\x07\x06\x02\x02}|\x03\x02\x02\x02~\x81\x03\x02\x02" +
		"\x02\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x85\x03\x02\x02" +
		"\x02\x81\x7F\x03\x02\x02\x02\x82\x84\x05\x04\x03\x02\x83\x82\x03\x02\x02" +
		"\x02\x84\x87\x03\x02\x02\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02" +
		"\x02\x86\x88\x03\x02\x02\x02\x87\x85\x03\x02\x02\x02\x88\x89\x07\x02\x02" +
		"\x03\x89\x03\x03\x02\x02\x02\x8A\x8C\x05\x0E\b\x02\x8B\x8D\x05x=\x02\x8C" +
		"\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x93\x03\x02\x02\x02\x8E" +
		"\x90\x05\x06\x04\x02\x8F\x91\x05x=\x02\x90\x8F\x03\x02\x02\x02\x90\x91" +
		"\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x8A\x03\x02\x02\x02\x92\x8E" +
		"\x03\x02\x02\x02\x93\x05\x03\x02\x02\x02\x94\x95\x05\n\x06\x02\x95\x07" +
		"\x03\x02\x02\x02\x96\x9C\x05\n\x06\x02\x97\x98\x05z>\x02\x98\x99\x05\n" +
		"\x06\x02\x99\x9B\x03\x02\x02\x02\x9A\x97\x03\x02\x02\x02\x9B\x9E\x03\x02" +
		"\x02\x02\x9C\x9A\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\xA0\x03\x02" +
		"\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\x96\x03\x02\x02\x02\x9F\xA0\x03\x02" +
		"\x02\x02\xA0\xA2\x03\x02\x02\x02\xA1\xA3\x05z>\x02\xA2\xA1\x03\x02\x02" +
		"\x02\xA2\xA3\x03\x02\x02\x02\xA3\t\x03\x02\x02\x02\xA4\xAB\x05\x0E\b\x02" +
		"\xA5\xAB\x05N(\x02\xA6\xAB\x05\x1E\x10\x02\xA7\xAB\x05\x1C\x0F\x02\xA8" +
		"\xAB\x05\f\x07\x02\xA9\xAB\x05\x12\n\x02\xAA\xA4\x03\x02\x02\x02\xAA\xA5" +
		"\x03\x02\x02\x02\xAA\xA6\x03\x02\x02\x02\xAA\xA7\x03\x02\x02\x02\xAA\xA8" +
		"\x03\x02\x02\x02\xAA\xA9\x03\x02\x02\x02\xAB\v\x03\x02\x02\x02\xAC\xAD" +
		"\x07\x03\x02\x02\xAD\xAE\x07T\x02\x02\xAE\r\x03\x02\x02\x02\xAF\xB0\x05" +
		"\x14\v\x02\xB0\x0F\x03\x02\x02\x02\xB1\xB2\x05\x12\n\x02\xB2\x11\x03\x02" +
		"\x02\x02\xB3\xB4\x075\x02\x02\xB4\xB5\x07H\x02\x02\xB5\xB6\x07\x16\x02" +
		"\x02\xB6\xB7\x07<\x02\x02\xB7\xB9\x07H\x02\x02\xB8\xBA\x07H\x02\x02\xB9" +
		"\xB8\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\x13\x03\x02\x02\x02\xBB" +
		"\xBC\x072\x02\x02\xBC\xBD\x07H\x02\x02\xBD\xBE\x05\x16\f\x02\xBE\xBF\x05" +
		"\x1A\x0E\x02\xBF\x15\x03\x02\x02\x02\xC0\xCC\x07\t\x02\x02\xC1\xC6\x05" +
		"\x18\r\x02\xC2\xC3\x07\b\x02\x02\xC3\xC5\x05\x18\r\x02\xC4\xC2\x03\x02" +
		"\x02\x02\xC5\xC8\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02" +
		"\x02\x02\xC7\xCA\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC9\xCB\x07\b" +
		"\x02\x02\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x03\x02" +
		"\x02\x02\xCC\xC1\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02" +
		"\x02\x02\xCE\xCF\x07\n\x02\x02\xCF\x17\x03\x02\x02\x02\xD0\xD1\x07H\x02" +
		"\x02\xD1\xD2\x07\x16\x02\x02\xD2\xD3\x07\x19\x02\x02\xD3\x19\x03\x02\x02" +
		"\x02\xD4\xD8\x07\x16\x02\x02\xD5\xD7\x07\x06\x02\x02\xD6\xD5\x03\x02\x02" +
		"\x02\xD7\xDA\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02" +
		"\x02\xD9\xDB\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDF\x05\b\x05" +
		"\x02\xDC\xDE\x07\x06\x02\x02\xDD\xDC\x03\x02\x02\x02\xDE\xE1\x03\x02\x02" +
		"\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2\x03\x02\x02" +
		"\x02\xE1\xDF\x03\x02\x02\x02\xE2\xE3\x073\x02\x02\xE3\x1B\x03\x02\x02" +
		"\x02\xE4\xE8\x074\x02\x02\xE5\xE7\x07\x06\x02\x02\xE6\xE5\x03\x02\x02" +
		"\x02\xE7\xEA\x03\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE8\xE9\x03\x02\x02" +
		"\x02\xE9\xEB\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB\xEF\x05(\x15" +
		"\x02\xEC\xEE\x07\x06\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\xF1\x03\x02\x02" +
		"\x02\xEF\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF2\x03\x02\x02" +
		"\x02\xF1\xEF\x03\x02\x02\x02\xF2\xF3\x05\x1A\x0E\x02\xF3\x1D\x03\x02\x02" +
		"\x02\xF4\xF8\x05\"\x12\x02\xF5\xF8\x05$\x13\x02\xF6\xF8\x05 \x11\x02\xF7" +
		"\xF4\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF6\x03\x02\x02\x02\xF8" +
		"\x1F\x03\x02\x02\x02\xF9\xFD\x07A\x02\x02\xFA\xFC\x07\x06\x02\x02\xFB" +
		"\xFA\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD" +
		"\xFE\x03\x02\x02\x02\xFE\u0100\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02" +
		"\u0100\u0101\x05Z.\x02\u0101\u0102\x07B\x02\x02\u0102\u0103\x054\x1B\x02" +
		"\u0103\u0104\x07\b\x02\x02\u0104\u0108\x05\\/\x02\u0105\u0107\x07\x06" +
		"\x02\x02\u0106\u0105\x03\x02\x02\x02\u0107\u010A\x03\x02\x02\x02\u0108" +
		"\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010B\x03\x02" +
		"\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B\u010C\x05\x1A\x0E\x02\u010C" +
		"!\x03\x02\x02\x02\u010D\u0111\x07>\x02\x02\u010E\u0110\x07\x06\x02\x02" +
		"\u010F\u010E\x03\x02\x02\x02\u0110\u0113\x03\x02\x02\x02\u0111\u010F\x03" +
		"\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x03\x02\x02\x02\u0113" +
		"\u0111\x03\x02\x02\x02\u0114\u0118\x05(\x15\x02\u0115\u0117\x07\x06\x02" +
		"\x02\u0116\u0115\x03\x02\x02\x02\u0117\u011A\x03\x02\x02\x02\u0118\u0116" +
		"\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011B\x03\x02\x02\x02" +
		"\u011A\u0118\x03\x02\x02\x02\u011B\u011C\x05\x1A\x0E\x02\u011C#\x03\x02" +
		"\x02\x02\u011D\u0121\x07?\x02\x02\u011E\u0120\x07\x06\x02\x02\u011F\u011E" +
		"\x03\x02\x02\x02\u0120\u0123\x03\x02\x02\x02\u0121\u011F\x03\x02\x02\x02" +
		"\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123\u0121\x03" +
		"\x02\x02\x02\u0124\u0125\x05&\x14\x02\u0125\u0126\x05(\x15\x02\u0126%" +
		"\x03\x02\x02\x02\u0127\u012B\x07\x16\x02\x02\u0128\u012A\x07\x06\x02\x02" +
		"\u0129\u0128\x03\x02\x02\x02\u012A\u012D\x03\x02\x02\x02\u012B\u0129\x03" +
		"\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012E\x03\x02\x02\x02\u012D" +
		"\u012B\x03\x02\x02\x02\u012E\u0132\x05\b\x05\x02\u012F\u0131\x07\x06\x02" +
		"\x02\u0130\u012F\x03\x02\x02\x02\u0131\u0134\x03\x02\x02\x02\u0132\u0130" +
		"\x03\x02\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0135\x03\x02\x02\x02" +
		"\u0134\u0132\x03\x02\x02\x02\u0135\u0136\x07@\x02\x02\u0136\'\x03\x02" +
		"\x02\x02\u0137\u013B\x05*\x16\x02\u0138\u013A\x07\x06\x02\x02\u0139\u0138" +
		"\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02" +
		"\u013B\u013C\x03\x02\x02\x02\u013C\u0148\x03\x02\x02\x02\u013D\u013B\x03" +
		"\x02\x02\x02\u013E\u0142\x07\x1B\x02\x02\u013F\u0141\x07\x06\x02\x02\u0140" +
		"\u013F\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02" +
		"\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0145\x03\x02\x02\x02\u0144" +
		"\u0142\x03\x02\x02\x02\u0145\u0147\x05*\x16\x02\u0146\u013E\x03\x02\x02" +
		"\x02\u0147\u014A\x03\x02\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149" +
		"\x03\x02\x02\x02\u0149)\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014B" +
		"\u014F\x05,\x17\x02\u014C\u014E\x07\x06\x02\x02\u014D\u014C\x03\x02\x02" +
		"\x02\u014E\u0151\x03\x02\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150" +
		"\x03\x02\x02\x02\u0150\u015C\x03\x02\x02\x02\u0151\u014F\x03\x02\x02\x02" +
		"\u0152\u0156\x07\x1A\x02\x02\u0153\u0155\x07\x06\x02\x02\u0154\u0153\x03" +
		"\x02\x02\x02\u0155\u0158\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156" +
		"\u0157\x03\x02\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158\u0156\x03\x02" +
		"\x02\x02\u0159\u015B\x05,\x17\x02\u015A\u0152\x03\x02\x02\x02\u015B\u015E" +
		"\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02" +
		"\u015D+\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F\u0161\x07\x18" +
		"\x02\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161" +
		"\u0162\x03\x02\x02\x02\u0162\u0163\x05.\x18\x02\u0163-\x03\x02\x02\x02" +
		"\u0164\u0169\x050\x19\x02\u0165\u0169\x052\x1A\x02\u0166\u0169\x056\x1C" +
		"\x02\u0167\u0169\x058\x1D\x02\u0168\u0164\x03\x02\x02\x02\u0168\u0165" +
		"\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0167\x03\x02\x02\x02" +
		"\u0169/\x03\x02\x02\x02\u016A\u016B\x05Z.\x02\u016B\u016C\x05:\x1E\x02" +
		"\u016C\u016D\x05Z.\x02\u016D1\x03\x02\x02\x02\u016E\u016F\x05Z.\x02\u016F" +
		"\u0170\x076\x02\x02\u0170\u0171\x054\x1B\x02\u01713\x03\x02\x02\x02\u0172" +
		"\u0173\x07\x10\x02\x02\u01735\x03\x02\x02\x02\u0174\u0175\x078\x02\x02" +
		"\u0175\u0177\x05v<\x02\u0176\u0178\x05j6\x02\u0177\u0176\x03\x02\x02\x02" +
		"\u0177\u0178\x03\x02\x02\x02\u01787\x03\x02\x02\x02\u0179\u017A\x079\x02" +
		"\x02\u017A\u017B\x05> \x02\u017B\u017C\x05<\x1F\x02\u017C9\x03\x02\x02" +
		"\x02\u017D\u017E\t\x02\x02\x02\u017E;\x03\x02\x02\x02\u017F\u0184\x07" +
		"H\x02\x02\u0180\u0181\x07H\x02\x02\u0181\u0182\x07\x16\x02\x02\u0182\u0184" +
		"\x07H\x02\x02\u0183\u017F\x03\x02\x02\x02\u0183\u0180\x03\x02\x02\x02" +
		"\u0184=\x03\x02\x02\x02\u0185\u0188\x05@!\x02\u0186\u0188\x05F$\x02\u0187" +
		"\u0185\x03\x02\x02\x02\u0187\u0186\x03\x02\x02\x02\u0188?\x03\x02\x02" +
		"\x02\u0189\u018A\x05B\"\x02\u018A\u018B\x05B\"\x02\u018B\u018C\x05B\"" +
		"\x02\u018CA\x03\x02\x02\x02\u018D\u018E\x07-\x02\x02\u018E\u0192\x05L" +
		"\'\x02\u018F\u0192\x07-\x02\x02\u0190\u0192\x05L\'\x02\u0191\u018D\x03" +
		"\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0190\x03\x02\x02\x02\u0192" +
		"C\x03\x02\x02\x02\u0193\u0194\x07.\x02\x02\u0194\u0198\x05L\'\x02\u0195" +
		"\u0198\x07.\x02\x02\u0196\u0198\x05L\'\x02\u0197\u0193\x03\x02\x02\x02" +
		"\u0197\u0195\x03\x02\x02\x02\u0197\u0196\x03\x02\x02\x02\u0198E\x03\x02" +
		"\x02\x02\u0199\u019A\x05H%\x02\u019A\u019B\x05J&\x02\u019BG\x03\x02\x02" +
		"\x02\u019C\u019D\x070\x02\x02\u019D\u01A1\x05L\'\x02\u019E\u01A1\x070" +
		"\x02\x02\u019F\u01A1\x05L\'\x02\u01A0\u019C\x03\x02\x02\x02\u01A0\u019E" +
		"\x03\x02\x02\x02\u01A0\u019F\x03\x02\x02\x02\u01A1I\x03\x02\x02\x02\u01A2" +
		"\u01A3\x071\x02\x02\u01A3\u01A7\x05L\'\x02\u01A4\u01A7\x071\x02\x02\u01A5" +
		"\u01A7\x05L\'\x02\u01A6\u01A2\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02" +
		"\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7K\x03\x02\x02\x02\u01A8\u01AD\x07" +
		"D\x02\x02\u01A9\u01AA\x07\x15\x02\x02\u01AA\u01AD\x07D\x02\x02\u01AB\u01AD" +
		"\x05\\/\x02\u01AC\u01A8\x03\x02\x02\x02\u01AC\u01A9\x03\x02\x02\x02\u01AC" +
		"\u01AB\x03\x02\x02\x02\u01ADM\x03\x02\x02\x02\u01AE\u01AF\x05Z.\x02\u01AF" +
		"\u01B3\x05d3\x02\u01B0\u01B2\x05P)\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2" +
		"\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B4\x03\x02" +
		"\x02\x02\u01B4O\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6\u01B7" +
		"\x05V,\x02\u01B7Q\x03\x02\x02\x02\u01B8\u01BC\x05\\/\x02\u01B9\u01BC\x05" +
		"Z.\x02\u01BA\u01BC\x05T+\x02\u01BB\u01B8\x03\x02\x02\x02\u01BB\u01B9\x03" +
		"\x02\x02\x02\u01BB\u01BA\x03\x02\x02\x02\u01BCS\x03\x02\x02\x02\u01BD" +
		"\u01C1\x07\t\x02\x02\u01BE\u01C0\x07\x06\x02\x02\u01BF\u01BE\x03\x02\x02" +
		"\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03\x02\x02\x02\u01C1\u01C2" +
		"\x03\x02\x02\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02" +
		"\u01C4\u01C8\x05P)\x02\u01C5\u01C7\x07\x06\x02\x02\u01C6\u01C5\x03\x02" +
		"\x02\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C8" +
		"\u01C9\x03\x02\x02\x02\u01C9\u01CB\x03\x02\x02\x02\u01CA\u01C8\x03\x02" +
		"\x02\x02\u01CB\u01CC\x07\n\x02\x02\u01CCU\x03\x02\x02\x02\u01CD\u01D3" +
		"\x05X-\x02\u01CE\u01CF\x05f4\x02\u01CF\u01D0\x05X-\x02\u01D0\u01D2\x03" +
		"\x02\x02\x02\u01D1\u01CE\x03\x02\x02\x02\u01D2\u01D5\x03\x02\x02\x02\u01D3" +
		"\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4W\x03\x02\x02" +
		"\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01DC\x05R*\x02\u01D7\u01D8\x05" +
		"h5\x02\u01D8\u01D9\x05R*\x02\u01D9\u01DB\x03\x02\x02\x02\u01DA\u01D7\x03" +
		"\x02\x02\x02\u01DB\u01DE\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02\u01DC" +
		"\u01DD\x03\x02\x02\x02\u01DDY\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02" +
		"\x02\u01DF\u01E0\x07H\x02\x02\u01E0\u01E3\x07\v\x02\x02\u01E1\u01E4\x07" +
		"H\x02\x02\u01E2\u01E4\x05`1\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E2" +
		"\x03\x02\x02\x02\u01E4\u01E5\x03\x02\x02\x02\u01E5\u01E6\x07\f\x02\x02" +
		"\u01E6[\x03\x02\x02\x02\u01E7\u01EA\x07G\x02\x02\u01E8\u01EA\x05^0\x02" +
		"\u01E9\u01E7\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA]\x03\x02" +
		"\x02\x02\u01EB\u01EC\x07\x15\x02\x02\u01EC\u01ED\x07G\x02\x02\u01ED_\x03" +
		"\x02\x02\x02\u01EE\u01F0\x05v<\x02\u01EF\u01F1\x05j6\x02\u01F0\u01EF\x03" +
		"\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1a\x03\x02\x02\x02\u01F2" +
		"\u01F6\x07C\x02\x02\u01F3\u01F6\x07G\x02\x02\u01F4\u01F6\x05t;\x02\u01F5" +
		"\u01F2\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F4\x03\x02" +
		"\x02\x02\u01F6c\x03\x02\x02\x02\u01F7\u01F8\t\x03\x02\x02\u01F8e\x03\x02" +
		"\x02\x02\u01F9\u01FA\t\x04\x02\x02\u01FAg\x03\x02\x02\x02\u01FB\u01FC" +
		"\t\x05\x02\x02\u01FCi\x03\x02\x02\x02\u01FD\u01FE\x07\v\x02\x02\u01FE" +
		"\u0203\x05l7\x02\u01FF\u0200\x07\b\x02\x02\u0200\u0202\x05l7\x02\u0201" +
		"\u01FF\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02" +
		"\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0206\x03\x02\x02\x02\u0205" +
		"\u0203\x03\x02\x02\x02\u0206\u0207\x07\f\x02\x02\u0207k\x03\x02\x02\x02" +
		"\u0208\u0209\x07H\x02\x02\u0209\u020B\x07\x1C\x02\x02\u020A\u020C\x07" +
		"\x18\x02\x02\u020B\u020A\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C" +
		"\u020D\x03\x02\x02\x02\u020D\u020E\x05n8\x02\u020Em\x03\x02\x02\x02\u020F" +
		"\u0214\x05b2\x02\u0210\u0214\x05r:\x02\u0211\u0214\x07H\x02\x02\u0212" +
		"\u0214\x05p9\x02\u0213\u020F\x03\x02\x02\x02\u0213\u0210\x03\x02\x02\x02" +
		"\u0213\u0211\x03\x02\x02\x02\u0213\u0212\x03\x02\x02\x02\u0214o\x03\x02" +
		"\x02\x02\u0215\u0216\x07\r\x02\x02\u0216\u0217\x07H\x02\x02\u0217\u0218" +
		"\x07\x1C\x02\x02\u0218\u0219\x05b2\x02\u0219\u021A\x07\x0E\x02\x02\u021A" +
		"q\x03\x02\x02\x02\u021B\u021C\x07\v\x02\x02\u021C\u0221\x05b2\x02\u021D" +
		"\u021E\x07\b\x02\x02\u021E\u0220\x05b2\x02\u021F\u021D\x03\x02\x02\x02" +
		"\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02\x02\x02\u0221\u0222\x03" +
		"\x02\x02\x02\u0222\u0224\x03\x02\x02\x02\u0223\u0221\x03\x02\x02\x02\u0224" +
		"\u0225\x07\f\x02\x02\u0225s\x03\x02\x02\x02\u0226\u022A\x07I\x02\x02\u0227" +
		"\u0229\x07R\x02\x02\u0228\u0227\x03\x02\x02\x02\u0229\u022C\x03\x02\x02" +
		"\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02\u022B\u022D" +
		"\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02\u022D\u022E\x07Q\x02\x02" +
		"\u022Eu\x03\x02\x02\x02\u022F\u0230\t\x06\x02\x02\u0230\u0231\x07+\x02" +
		"\x02\u0231w\x03\x02\x02\x02\u0232\u0236\x07\x06\x02\x02\u0233\u0235\x07" +
		"\x06\x02\x02\u0234\u0233\x03\x02\x02\x02\u0235\u0238\x03\x02\x02\x02\u0236" +
		"\u0234\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237\u023B\x03\x02" +
		"\x02\x02\u0238\u0236\x03\x02\x02\x02\u0239\u023B\x07\x02\x02\x03\u023A" +
		"\u0232\x03\x02\x02\x02\u023A\u0239\x03\x02\x02\x02\u023By\x03\x02\x02" +
		"\x02\u023C\u023E\x07\x06\x02\x02\u023D\u023C\x03\x02\x02\x02\u023E\u023F" +
		"\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02" +
		"\u0240\u0243\x03\x02\x02\x02\u0241\u0243\x07\x02\x02\x03\u0242\u023D\x03" +
		"\x02\x02\x02\u0242\u0241\x03\x02\x02\x02\u0243{\x03\x02\x02\x02>\x7F\x85" +
		"\x8C\x90\x92\x9C\x9F\xA2\xAA\xB9\xC6\xCA\xCC\xD8\xDF\xE8\xEF\xF7\xFD\u0108" +
		"\u0111\u0118\u0121\u012B\u0132\u013B\u0142\u0148";
	private static readonly _serializedATNSegment1: string =
		"\u014F\u0156\u015C\u0160\u0168\u0177\u0183\u0187\u0191\u0197\u01A0\u01A6" +
		"\u01AC\u01B3\u01BB\u01C1\u01C8\u01D3\u01DC\u01E3\u01E9\u01F0\u01F5\u0203" +
		"\u020B\u0213\u0221\u022A\u0236\u023A\u023F\u0242";
	public static readonly _serializedATN: string = Utils.join(
		[
			mcbParser._serializedATNSegment0,
			mcbParser._serializedATNSegment1,
		],
		"",
	);
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
	public load(): LoadContext | undefined {
		return this.tryGetRuleContext(0, LoadContext);
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


export class LoadContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_load; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterLoad) {
			listener.enterLoad(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitLoad) {
			listener.exitLoad(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitLoad) {
			return visitor.visitLoad(this);
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
	public scoreboardDeclaration(): ScoreboardDeclarationContext | undefined {
		return this.tryGetRuleContext(0, ScoreboardDeclarationContext);
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
	public LET(): TerminalNode { return this.getToken(mcbParser.LET, 0); }
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
	public functionParameters(): FunctionParametersContext {
		return this.getRuleContext(0, FunctionParametersContext);
	}
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


export class FunctionParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(mcbParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(mcbParser.RPAREN, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
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
	public get ruleIndex(): number { return mcbParser.RULE_functionParameters; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterFunctionParameters) {
			listener.enterFunctionParameters(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitFunctionParameters) {
			listener.exitFunctionParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitFunctionParameters) {
			return visitor.visitFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(mcbParser.Identifier, 0); }
	public COLON(): TerminalNode { return this.getToken(mcbParser.COLON, 0); }
	public TYPE(): TerminalNode { return this.getToken(mcbParser.TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_parameter; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
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
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
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


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(mcbParser.FOR, 0); }
	public scoreboardIdentifier(): ScoreboardIdentifierContext {
		return this.getRuleContext(0, ScoreboardIdentifierContext);
	}
	public IN(): TerminalNode { return this.getToken(mcbParser.IN, 0); }
	public range(): RangeContext {
		return this.getRuleContext(0, RangeContext);
	}
	public COMMA(): TerminalNode { return this.getToken(mcbParser.COMMA, 0); }
	public scoreboardLiteral(): ScoreboardLiteralContext {
		return this.getRuleContext(0, ScoreboardLiteralContext);
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
	public get ruleIndex(): number { return mcbParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
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
	public RANGE(): TerminalNode { return this.getToken(mcbParser.RANGE, 0); }
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


