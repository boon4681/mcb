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
	public static readonly ENTITY = 2;
	public static readonly MultiLineComment = 3;
	public static readonly Comment = 4;
	public static readonly WS = 5;
	public static readonly NL = 6;
	public static readonly DOT = 7;
	public static readonly COMMA = 8;
	public static readonly LPAREN = 9;
	public static readonly RPAREN = 10;
	public static readonly LSQUARE = 11;
	public static readonly RSQUARE = 12;
	public static readonly LCURL = 13;
	public static readonly RCURL = 14;
	public static readonly HASH = 15;
	public static readonly RANGE = 16;
	public static readonly MULT = 17;
	public static readonly MOD = 18;
	public static readonly DIV = 19;
	public static readonly ADD = 20;
	public static readonly SUB = 21;
	public static readonly COLON = 22;
	public static readonly SEMICOLON = 23;
	public static readonly NOT_WS = 24;
	public static readonly NOT_NO_WS = 25;
	public static readonly TYPE = 26;
	public static readonly CONJ = 27;
	public static readonly DISJ = 28;
	public static readonly ASSIGNMENT = 29;
	public static readonly MULT_ASSIGNMENT = 30;
	public static readonly MOD_ASSIGNMENT = 31;
	public static readonly DIVINE_ASSIGNMENT = 32;
	public static readonly ADD_ASSIGNMENT = 33;
	public static readonly SUB_ASSIGNMENT = 34;
	public static readonly LANGLE = 35;
	public static readonly RANGLE = 36;
	public static readonly LE = 37;
	public static readonly GE = 38;
	public static readonly MC_NOT_EQ = 39;
	public static readonly AT_S_WS = 40;
	public static readonly AT_B_WS = 41;
	public static readonly POS = 42;
	public static readonly POS_P_WS = 43;
	public static readonly POS_S_WS = 44;
	public static readonly ANC = 45;
	public static readonly ANC_P_WS = 46;
	public static readonly ANC_S_WS = 47;
	public static readonly FUN = 48;
	public static readonly IF = 49;
	public static readonly LET = 50;
	public static readonly TICK = 51;
	public static readonly LOAD = 52;
	public static readonly WITH = 53;
	public static readonly K_MATCHES = 54;
	public static readonly K_DATA = 55;
	public static readonly K_ENTITY = 56;
	public static readonly K_BLOCK = 57;
	public static readonly K_STORAGE = 58;
	public static readonly K_PREDICATE = 59;
	public static readonly K_SCORE = 60;
	public static readonly ELSE = 61;
	public static readonly WHILE = 62;
	public static readonly REPEAT = 63;
	public static readonly UNTIL = 64;
	public static readonly FOR = 65;
	public static readonly IN = 66;
	public static readonly RealLiteral = 67;
	public static readonly FloatNS = 68;
	public static readonly FloatLiteral = 69;
	public static readonly DoubleLiteral = 70;
	public static readonly IntegerLiteral = 71;
	public static readonly Identifier = 72;
	public static readonly QUOTE_OPEN = 73;
	public static readonly UNICODE_CLASS_LL = 74;
	public static readonly UNICODE_CLASS_LM = 75;
	public static readonly UNICODE_CLASS_LO = 76;
	public static readonly UNICODE_CLASS_LT = 77;
	public static readonly UNICODE_CLASS_LU = 78;
	public static readonly UNICODE_CLASS_ND = 79;
	public static readonly UNICODE_CLASS_NL = 80;
	public static readonly QUOTE_CLOSE = 81;
	public static readonly StrText = 82;
	public static readonly StrEscapedChar = 83;
	public static readonly StrExpression = 84;
	public static readonly CommandStr = 85;
	public static readonly ENTITY_SUFFIX = 86;
	public static readonly I_Comment = 87;
	public static readonly I_WS = 88;
	public static readonly I_NL = 89;
	public static readonly ErrorCharacter = 90;
	public static readonly RULE_mcb = 0;
	public static readonly RULE_topPriorityObject = 1;
	public static readonly RULE_load = 2;
	public static readonly RULE_statements = 3;
	public static readonly RULE_statement = 4;
	public static readonly RULE_commands = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_variableDeclaration = 7;
	public static readonly RULE_scoreboardDeclaration = 8;
	public static readonly RULE_functionCalling = 9;
	public static readonly RULE_functionDeclaration = 10;
	public static readonly RULE_functionInputParameters = 11;
	public static readonly RULE_functionParameters = 12;
	public static readonly RULE_inputparameter = 13;
	public static readonly RULE_parameter = 14;
	public static readonly RULE_block = 15;
	public static readonly RULE_functionModifiers = 16;
	public static readonly RULE_functionModifier = 17;
	public static readonly RULE_ifStatement = 18;
	public static readonly RULE_unstrippedIfStatement = 19;
	public static readonly RULE_controlstructBody = 20;
	public static readonly RULE_elseStatement = 21;
	public static readonly RULE_loopStatement = 22;
	public static readonly RULE_loopWith = 23;
	public static readonly RULE_forStatement = 24;
	public static readonly RULE_whileDo = 25;
	public static readonly RULE_repeatUntil = 26;
	public static readonly RULE_disconjuction = 27;
	public static readonly RULE_conjuction = 28;
	public static readonly RULE_comparison = 29;
	public static readonly RULE_asComparison = 30;
	public static readonly RULE_scoreNscoreExpression = 31;
	public static readonly RULE_scoreNrangeExpression = 32;
	public static readonly RULE_range = 33;
	public static readonly RULE_entityNBTExpression = 34;
	public static readonly RULE_blockExpression = 35;
	public static readonly RULE_comparator = 36;
	public static readonly RULE_blockTag = 37;
	public static readonly RULE_locateStatement = 38;
	public static readonly RULE_position = 39;
	public static readonly RULE_posPrefix = 40;
	public static readonly RULE_posSuffix = 41;
	public static readonly RULE_anchor = 42;
	public static readonly RULE_ancPrefix = 43;
	public static readonly RULE_ancSuffix = 44;
	public static readonly RULE_locateLiteral = 45;
	public static readonly RULE_assignment = 46;
	public static readonly RULE_expression = 47;
	public static readonly RULE_asExpression = 48;
	public static readonly RULE_parentAssignableExpression = 49;
	public static readonly RULE_additiveExpression = 50;
	public static readonly RULE_multiplicativeExpression = 51;
	public static readonly RULE_scoreboardIdentifier = 52;
	public static readonly RULE_scoreboardLiteral = 53;
	public static readonly RULE_scoreboardUnaryPrefix = 54;
	public static readonly RULE_scoreboardTarget = 55;
	public static readonly RULE_literalConstant = 56;
	public static readonly RULE_assignmentOperator = 57;
	public static readonly RULE_additiveOperator = 58;
	public static readonly RULE_multiplicativeOperator = 59;
	public static readonly RULE_nbt = 60;
	public static readonly RULE_nbtEquality = 61;
	public static readonly RULE_asNBT = 62;
	public static readonly RULE_nbtSet = 63;
	public static readonly RULE_nbtArray = 64;
	public static readonly RULE_stringLiteral = 65;
	public static readonly RULE_strExpr = 66;
	public static readonly RULE_stringContent = 67;
	public static readonly RULE_entity = 68;
	public static readonly RULE_nl = 69;
	public static readonly RULE_nls = 70;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"mcb", "topPriorityObject", "load", "statements", "statement", "commands", 
		"declaration", "variableDeclaration", "scoreboardDeclaration", "functionCalling", 
		"functionDeclaration", "functionInputParameters", "functionParameters", 
		"inputparameter", "parameter", "block", "functionModifiers", "functionModifier", 
		"ifStatement", "unstrippedIfStatement", "controlstructBody", "elseStatement", 
		"loopStatement", "loopWith", "forStatement", "whileDo", "repeatUntil", 
		"disconjuction", "conjuction", "comparison", "asComparison", "scoreNscoreExpression", 
		"scoreNrangeExpression", "range", "entityNBTExpression", "blockExpression", 
		"comparator", "blockTag", "locateStatement", "position", "posPrefix", 
		"posSuffix", "anchor", "ancPrefix", "ancSuffix", "locateLiteral", "assignment", 
		"expression", "asExpression", "parentAssignableExpression", "additiveExpression", 
		"multiplicativeExpression", "scoreboardIdentifier", "scoreboardLiteral", 
		"scoreboardUnaryPrefix", "scoreboardTarget", "literalConstant", "assignmentOperator", 
		"additiveOperator", "multiplicativeOperator", "nbt", "nbtEquality", "asNBT", 
		"nbtSet", "nbtArray", "stringLiteral", "strExpr", "stringContent", "entity", 
		"nl", "nls",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'.'", "','", "'('", "')'", "'['", "']'", "'{'", "'}'", "'#'", undefined, 
		"'*'", "'%'", "'/'", "'+'", "'-'", "':'", "';'", undefined, "'!'", undefined, 
		"'and'", "'or'", "'='", "'*='", "'%='", "'/='", "'+='", "'-='", "'<'", 
		"'>'", "'<='", "'>='", "'=!'", undefined, undefined, "'~'", undefined, 
		undefined, "'^'", undefined, undefined, "'fun'", "'if'", "'let'", "'tick'", 
		"'load'", "'with'", "'matches'", "'data'", "'entity'", "'block'", "'storage'", 
		"'predicate'", "'score'", "'else'", "'while'", "'repeat'", "'until'", 
		"'for'", "'in'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'${'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "COMMANDS", "ENTITY", "MultiLineComment", "Comment", "WS", 
		"NL", "DOT", "COMMA", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURL", 
		"RCURL", "HASH", "RANGE", "MULT", "MOD", "DIV", "ADD", "SUB", "COLON", 
		"SEMICOLON", "NOT_WS", "NOT_NO_WS", "TYPE", "CONJ", "DISJ", "ASSIGNMENT", 
		"MULT_ASSIGNMENT", "MOD_ASSIGNMENT", "DIVINE_ASSIGNMENT", "ADD_ASSIGNMENT", 
		"SUB_ASSIGNMENT", "LANGLE", "RANGLE", "LE", "GE", "MC_NOT_EQ", "AT_S_WS", 
		"AT_B_WS", "POS", "POS_P_WS", "POS_S_WS", "ANC", "ANC_P_WS", "ANC_S_WS", 
		"FUN", "IF", "LET", "TICK", "LOAD", "WITH", "K_MATCHES", "K_DATA", "K_ENTITY", 
		"K_BLOCK", "K_STORAGE", "K_PREDICATE", "K_SCORE", "ELSE", "WHILE", "REPEAT", 
		"UNTIL", "FOR", "IN", "RealLiteral", "FloatNS", "FloatLiteral", "DoubleLiteral", 
		"IntegerLiteral", "Identifier", "QUOTE_OPEN", "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", 
		"UNICODE_CLASS_LO", "UNICODE_CLASS_LT", "UNICODE_CLASS_LU", "UNICODE_CLASS_ND", 
		"UNICODE_CLASS_NL", "QUOTE_CLOSE", "StrText", "StrEscapedChar", "StrExpression", 
		"CommandStr", "ENTITY_SUFFIX", "I_Comment", "I_WS", "I_NL", "ErrorCharacter",
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
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 142;
				this.match(mcbParser.NL);
				}
				}
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.COMMANDS || ((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (mcbParser.FUN - 48)) | (1 << (mcbParser.IF - 48)) | (1 << (mcbParser.LET - 48)) | (1 << (mcbParser.TICK - 48)) | (1 << (mcbParser.LOAD - 48)) | (1 << (mcbParser.WHILE - 48)) | (1 << (mcbParser.REPEAT - 48)) | (1 << (mcbParser.FOR - 48)) | (1 << (mcbParser.Identifier - 48)))) !== 0)) {
				{
				{
				this.state = 148;
				this.topPriorityObject();
				}
				}
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 154;
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.FUN:
			case mcbParser.TICK:
			case mcbParser.LOAD:
				{
				this.state = 156;
				this.declaration();
				}
				break;
			case mcbParser.COMMANDS:
			case mcbParser.IF:
			case mcbParser.LET:
			case mcbParser.WHILE:
			case mcbParser.REPEAT:
			case mcbParser.FOR:
			case mcbParser.Identifier:
				{
				this.state = 157;
				this.load();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 160;
				this.nl();
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
	public load(): LoadContext {
		let _localctx: LoadContext = new LoadContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, mcbParser.RULE_load);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
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
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.COMMANDS || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (mcbParser.IF - 49)) | (1 << (mcbParser.LET - 49)) | (1 << (mcbParser.WHILE - 49)) | (1 << (mcbParser.REPEAT - 49)) | (1 << (mcbParser.FOR - 49)) | (1 << (mcbParser.Identifier - 49)))) !== 0)) {
				{
				this.state = 165;
				this.statement();
				this.state = 171;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 166;
						this.nls();
						this.state = 167;
						this.statement();
						}
						}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				}
			}

			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 176;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 179;
				this.assignment();
				}
				break;

			case 2:
				{
				this.state = 180;
				this.loopStatement();
				}
				break;

			case 3:
				{
				this.state = 181;
				this.ifStatement();
				}
				break;

			case 4:
				{
				this.state = 182;
				this.commands();
				}
				break;

			case 5:
				{
				this.state = 183;
				this.scoreboardDeclaration();
				}
				break;

			case 6:
				{
				this.state = 190;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 184;
					this.functionCalling();
					}
					break;

				case 2:
					{
					this.state = 186;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 185;
							this.functionCalling();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 188;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					break;
				}
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
	public commands(): CommandsContext {
		let _localctx: CommandsContext = new CommandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, mcbParser.RULE_commands);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(mcbParser.COMMANDS);
			this.state = 195;
			this.match(mcbParser.CommandStr);
			this.state = 197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 196;
				this.functionCalling();
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
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, mcbParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
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
			this.state = 201;
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
			this.state = 203;
			this.match(mcbParser.LET);
			this.state = 204;
			this.match(mcbParser.Identifier);
			this.state = 205;
			this.match(mcbParser.COLON);
			this.state = 206;
			this.match(mcbParser.K_SCORE);
			this.state = 207;
			this.match(mcbParser.Identifier);
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 208;
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
	public functionCalling(): FunctionCallingContext {
		let _localctx: FunctionCallingContext = new FunctionCallingContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, mcbParser.RULE_functionCalling);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			this.match(mcbParser.Identifier);
			this.state = 212;
			this.functionInputParameters();
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
		this.enterRule(_localctx, 20, mcbParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.TICK || _la === mcbParser.LOAD) {
				{
				this.state = 214;
				this.functionModifiers();
				}
			}

			this.state = 217;
			this.match(mcbParser.FUN);
			this.state = 218;
			this.match(mcbParser.Identifier);
			this.state = 219;
			this.functionParameters();
			this.state = 220;
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
	public functionInputParameters(): FunctionInputParametersContext {
		let _localctx: FunctionInputParametersContext = new FunctionInputParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, mcbParser.RULE_functionInputParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.match(mcbParser.LPAREN);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & ((1 << (mcbParser.RealLiteral - 67)) | (1 << (mcbParser.IntegerLiteral - 67)) | (1 << (mcbParser.Identifier - 67)) | (1 << (mcbParser.QUOTE_OPEN - 67)))) !== 0)) {
				{
				this.state = 223;
				this.inputparameter();
				this.state = 228;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 224;
						this.match(mcbParser.COMMA);
						this.state = 225;
						this.inputparameter();
						}
						}
					}
					this.state = 230;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
				}
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === mcbParser.COMMA) {
					{
					this.state = 231;
					this.match(mcbParser.COMMA);
					}
				}

				}
			}

			this.state = 236;
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
	public functionParameters(): FunctionParametersContext {
		let _localctx: FunctionParametersContext = new FunctionParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, mcbParser.RULE_functionParameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(mcbParser.LPAREN);
			this.state = 250;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.Identifier) {
				{
				this.state = 239;
				this.parameter();
				this.state = 244;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 240;
						this.match(mcbParser.COMMA);
						this.state = 241;
						this.parameter();
						}
						}
					}
					this.state = 246;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === mcbParser.COMMA) {
					{
					this.state = 247;
					this.match(mcbParser.COMMA);
					}
				}

				}
			}

			this.state = 252;
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
	public inputparameter(): InputparameterContext {
		let _localctx: InputparameterContext = new InputparameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, mcbParser.RULE_inputparameter);
		try {
			this.state = 256;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.RealLiteral:
			case mcbParser.IntegerLiteral:
			case mcbParser.QUOTE_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 254;
				this.literalConstant();
				}
				break;
			case mcbParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 255;
				this.scoreboardIdentifier();
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, mcbParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.match(mcbParser.Identifier);
			this.state = 259;
			this.match(mcbParser.COLON);
			this.state = 260;
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
		this.enterRule(_localctx, 30, mcbParser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(mcbParser.LCURL);
			this.state = 266;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 263;
					this.match(mcbParser.NL);
					}
					}
				}
				this.state = 268;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
			}
			this.state = 269;
			this.statements();
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 270;
				this.match(mcbParser.NL);
				}
				}
				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 276;
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
	public functionModifiers(): FunctionModifiersContext {
		let _localctx: FunctionModifiersContext = new FunctionModifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, mcbParser.RULE_functionModifiers);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 278;
				this.functionModifier();
				}
				}
				this.state = 281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === mcbParser.TICK || _la === mcbParser.LOAD);
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
	public functionModifier(): FunctionModifierContext {
		let _localctx: FunctionModifierContext = new FunctionModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, mcbParser.RULE_functionModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			_la = this._input.LA(1);
			if (!(_la === mcbParser.TICK || _la === mcbParser.LOAD)) {
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
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, mcbParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.unstrippedIfStatement();
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
	public unstrippedIfStatement(): UnstrippedIfStatementContext {
		let _localctx: UnstrippedIfStatementContext = new UnstrippedIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, mcbParser.RULE_unstrippedIfStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.match(mcbParser.IF);
			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 288;
				this.match(mcbParser.NL);
				}
				}
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 294;
			this.match(mcbParser.LPAREN);
			this.state = 295;
			this.disconjuction();
			this.state = 296;
			this.match(mcbParser.RPAREN);
			this.state = 300;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 297;
				this.match(mcbParser.NL);
				}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 303;
			this.block();
			this.state = 305;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 304;
				this.elseStatement();
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
	public controlstructBody(): ControlstructBodyContext {
		let _localctx: ControlstructBodyContext = new ControlstructBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, mcbParser.RULE_controlstructBody);
		try {
			this.state = 309;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				this.unstrippedIfStatement();
				}
				break;
			case mcbParser.LCURL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 308;
				this.block();
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
	public elseStatement(): ElseStatementContext {
		let _localctx: ElseStatementContext = new ElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, mcbParser.RULE_elseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 311;
				this.match(mcbParser.NL);
				}
				}
				this.state = 316;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 317;
			this.match(mcbParser.ELSE);
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 318;
				this.match(mcbParser.NL);
				}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 324;
			this.controlstructBody();
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
		this.enterRule(_localctx, 44, mcbParser.RULE_loopStatement);
		try {
			this.state = 329;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.WHILE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 326;
				this.whileDo();
				}
				break;
			case mcbParser.REPEAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 327;
				this.repeatUntil();
				}
				break;
			case mcbParser.FOR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 328;
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
	public loopWith(): LoopWithContext {
		let _localctx: LoopWithContext = new LoopWithContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, mcbParser.RULE_loopWith);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.commands();
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
		this.enterRule(_localctx, 48, mcbParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(mcbParser.FOR);
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 334;
				this.match(mcbParser.NL);
				}
				}
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 340;
			this.match(mcbParser.LPAREN);
			this.state = 341;
			this.scoreboardIdentifier();
			this.state = 342;
			this.match(mcbParser.IN);
			this.state = 343;
			this.range();
			this.state = 344;
			this.match(mcbParser.SEMICOLON);
			this.state = 345;
			this.scoreboardLiteral();
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.SEMICOLON) {
				{
				this.state = 346;
				this.match(mcbParser.SEMICOLON);
				this.state = 347;
				this.loopWith();
				}
			}

			this.state = 350;
			this.match(mcbParser.RPAREN);
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 351;
				this.match(mcbParser.NL);
				}
				}
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 357;
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
		this.enterRule(_localctx, 50, mcbParser.RULE_whileDo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			this.match(mcbParser.WHILE);
			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 360;
				this.match(mcbParser.NL);
				}
				}
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 366;
			this.match(mcbParser.LPAREN);
			this.state = 367;
			this.disconjuction();
			this.state = 368;
			this.match(mcbParser.RPAREN);
			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 369;
				this.match(mcbParser.NL);
				}
				}
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 375;
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
		this.enterRule(_localctx, 52, mcbParser.RULE_repeatUntil);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 377;
			this.match(mcbParser.REPEAT);
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 378;
				this.match(mcbParser.NL);
				}
				}
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 384;
			this.block();
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 385;
				this.match(mcbParser.NL);
				}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 391;
			this.match(mcbParser.UNTIL);
			this.state = 392;
			this.match(mcbParser.LPAREN);
			this.state = 393;
			this.disconjuction();
			this.state = 394;
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
	public disconjuction(): DisconjuctionContext {
		let _localctx: DisconjuctionContext = new DisconjuctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, mcbParser.RULE_disconjuction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 396;
			this.conjuction();
			this.state = 400;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 397;
				this.match(mcbParser.NL);
				}
				}
				this.state = 402;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.DISJ) {
				{
				{
				this.state = 403;
				this.match(mcbParser.DISJ);
				this.state = 407;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mcbParser.NL) {
					{
					{
					this.state = 404;
					this.match(mcbParser.NL);
					}
					}
					this.state = 409;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 410;
				this.conjuction();
				}
				}
				this.state = 415;
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
		this.enterRule(_localctx, 56, mcbParser.RULE_conjuction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.comparison();
			this.state = 420;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 417;
					this.match(mcbParser.NL);
					}
					}
				}
				this.state = 422;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			}
			this.state = 433;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.CONJ) {
				{
				{
				this.state = 423;
				this.match(mcbParser.CONJ);
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mcbParser.NL) {
					{
					{
					this.state = 424;
					this.match(mcbParser.NL);
					}
					}
					this.state = 429;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 430;
				this.comparison();
				}
				}
				this.state = 435;
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
		this.enterRule(_localctx, 58, mcbParser.RULE_comparison);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.NOT_NO_WS) {
				{
				this.state = 436;
				this.match(mcbParser.NOT_NO_WS);
				}
			}

			this.state = 439;
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
		this.enterRule(_localctx, 60, mcbParser.RULE_asComparison);
		try {
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 441;
				this.scoreNscoreExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 442;
				this.scoreNrangeExpression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 443;
				this.entityNBTExpression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 444;
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
		this.enterRule(_localctx, 62, mcbParser.RULE_scoreNscoreExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.expression();
			this.state = 448;
			this.comparator();
			this.state = 449;
			this.expression();
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
		this.enterRule(_localctx, 64, mcbParser.RULE_scoreNrangeExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 451;
			this.expression();
			this.state = 452;
			this.match(mcbParser.K_MATCHES);
			this.state = 453;
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
		this.enterRule(_localctx, 66, mcbParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
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
		this.enterRule(_localctx, 68, mcbParser.RULE_entityNBTExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.entity();
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.LSQUARE) {
				{
				this.state = 458;
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
		this.enterRule(_localctx, 70, mcbParser.RULE_blockExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this.match(mcbParser.K_BLOCK);
			this.state = 462;
			this.locateStatement();
			this.state = 463;
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
		this.enterRule(_localctx, 72, mcbParser.RULE_comparator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 465;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (mcbParser.ASSIGNMENT - 29)) | (1 << (mcbParser.LANGLE - 29)) | (1 << (mcbParser.RANGLE - 29)) | (1 << (mcbParser.LE - 29)) | (1 << (mcbParser.GE - 29)))) !== 0))) {
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
		this.enterRule(_localctx, 74, mcbParser.RULE_blockTag);
		try {
			this.state = 471;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 467;
				this.match(mcbParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 468;
				this.match(mcbParser.Identifier);
				this.state = 469;
				this.match(mcbParser.COLON);
				this.state = 470;
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
		this.enterRule(_localctx, 76, mcbParser.RULE_locateStatement);
		try {
			this.state = 475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 473;
				this.position();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 474;
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
		this.enterRule(_localctx, 78, mcbParser.RULE_position);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.posPrefix();
			this.state = 478;
			this.posPrefix();
			this.state = 479;
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
		this.enterRule(_localctx, 80, mcbParser.RULE_posPrefix);
		try {
			this.state = 485;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 481;
				this.match(mcbParser.POS_P_WS);
				this.state = 482;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 483;
				this.match(mcbParser.POS_P_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 484;
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
		this.enterRule(_localctx, 82, mcbParser.RULE_posSuffix);
		try {
			this.state = 491;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 487;
				this.match(mcbParser.POS_S_WS);
				this.state = 488;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 489;
				this.match(mcbParser.POS_S_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 490;
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
		this.enterRule(_localctx, 84, mcbParser.RULE_anchor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this.ancPrefix();
			this.state = 494;
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
		this.enterRule(_localctx, 86, mcbParser.RULE_ancPrefix);
		try {
			this.state = 500;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 496;
				this.match(mcbParser.ANC_P_WS);
				this.state = 497;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.match(mcbParser.ANC_P_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 499;
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
		this.enterRule(_localctx, 88, mcbParser.RULE_ancSuffix);
		try {
			this.state = 506;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 502;
				this.match(mcbParser.ANC_S_WS);
				this.state = 503;
				this.locateLiteral();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 504;
				this.match(mcbParser.ANC_S_WS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 505;
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
		this.enterRule(_localctx, 90, mcbParser.RULE_locateLiteral);
		try {
			this.state = 512;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 508;
				this.match(mcbParser.FloatNS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 509;
				this.match(mcbParser.SUB);
				this.state = 510;
				this.match(mcbParser.FloatNS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 511;
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
		this.enterRule(_localctx, 92, mcbParser.RULE_assignment);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			this.scoreboardIdentifier();
			this.state = 515;
			this.assignmentOperator();
			this.state = 519;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 516;
					this.expression();
					}
					}
				}
				this.state = 521;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
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
		this.enterRule(_localctx, 94, mcbParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
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
		this.enterRule(_localctx, 96, mcbParser.RULE_asExpression);
		try {
			this.state = 527;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.SUB:
			case mcbParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 524;
				this.scoreboardLiteral();
				}
				break;
			case mcbParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 525;
				this.scoreboardIdentifier();
				}
				break;
			case mcbParser.LPAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 526;
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
		this.enterRule(_localctx, 98, mcbParser.RULE_parentAssignableExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.match(mcbParser.LPAREN);
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 530;
				this.match(mcbParser.NL);
				}
				}
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 536;
			this.expression();
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 537;
				this.match(mcbParser.NL);
				}
				}
				this.state = 542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 543;
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
		this.enterRule(_localctx, 100, mcbParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this.multiplicativeExpression();
			this.state = 551;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 546;
					this.additiveOperator();
					this.state = 547;
					this.multiplicativeExpression();
					}
					}
				}
				this.state = 553;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
		this.enterRule(_localctx, 102, mcbParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 554;
			this.asExpression();
			this.state = 560;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << mcbParser.MULT) | (1 << mcbParser.MOD) | (1 << mcbParser.DIV))) !== 0)) {
				{
				{
				this.state = 555;
				this.multiplicativeOperator();
				this.state = 556;
				this.asExpression();
				}
				}
				this.state = 562;
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
		this.enterRule(_localctx, 104, mcbParser.RULE_scoreboardIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 563;
			this.match(mcbParser.Identifier);
			this.state = 564;
			this.match(mcbParser.LSQUARE);
			this.state = 567;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.Identifier:
				{
				this.state = 565;
				this.match(mcbParser.Identifier);
				}
				break;
			case mcbParser.ENTITY:
				{
				this.state = 566;
				this.scoreboardTarget();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 569;
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
		this.enterRule(_localctx, 106, mcbParser.RULE_scoreboardLiteral);
		try {
			this.state = 573;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 571;
				this.match(mcbParser.IntegerLiteral);
				}
				break;
			case mcbParser.SUB:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 572;
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
		this.enterRule(_localctx, 108, mcbParser.RULE_scoreboardUnaryPrefix);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.match(mcbParser.SUB);
			this.state = 576;
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
		this.enterRule(_localctx, 110, mcbParser.RULE_scoreboardTarget);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.entity();
			this.state = 580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.LSQUARE) {
				{
				this.state = 579;
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
		this.enterRule(_localctx, 112, mcbParser.RULE_literalConstant);
		try {
			this.state = 585;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.RealLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 582;
				this.match(mcbParser.RealLiteral);
				}
				break;
			case mcbParser.IntegerLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 583;
				this.match(mcbParser.IntegerLiteral);
				}
				break;
			case mcbParser.QUOTE_OPEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 584;
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
		this.enterRule(_localctx, 114, mcbParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 587;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (mcbParser.ASSIGNMENT - 29)) | (1 << (mcbParser.MULT_ASSIGNMENT - 29)) | (1 << (mcbParser.MOD_ASSIGNMENT - 29)) | (1 << (mcbParser.DIVINE_ASSIGNMENT - 29)) | (1 << (mcbParser.ADD_ASSIGNMENT - 29)) | (1 << (mcbParser.SUB_ASSIGNMENT - 29)))) !== 0))) {
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
		this.enterRule(_localctx, 116, mcbParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
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
		this.enterRule(_localctx, 118, mcbParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
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
		this.enterRule(_localctx, 120, mcbParser.RULE_nbt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 593;
			this.match(mcbParser.LSQUARE);
			this.state = 594;
			this.nbtEquality();
			this.state = 599;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.COMMA) {
				{
				{
				this.state = 595;
				this.match(mcbParser.COMMA);
				this.state = 596;
				this.nbtEquality();
				}
				}
				this.state = 601;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 602;
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
		this.enterRule(_localctx, 122, mcbParser.RULE_nbtEquality);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.match(mcbParser.Identifier);
			this.state = 605;
			this.match(mcbParser.ASSIGNMENT);
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === mcbParser.NOT_NO_WS) {
				{
				this.state = 606;
				this.match(mcbParser.NOT_NO_WS);
				}
			}

			this.state = 609;
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
		this.enterRule(_localctx, 124, mcbParser.RULE_asNBT);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 615;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.RealLiteral:
			case mcbParser.IntegerLiteral:
			case mcbParser.QUOTE_OPEN:
				{
				this.state = 611;
				this.literalConstant();
				}
				break;
			case mcbParser.LSQUARE:
				{
				this.state = 612;
				this.nbtArray();
				}
				break;
			case mcbParser.Identifier:
				{
				this.state = 613;
				this.match(mcbParser.Identifier);
				}
				break;
			case mcbParser.LCURL:
				{
				this.state = 614;
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
		this.enterRule(_localctx, 126, mcbParser.RULE_nbtSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.match(mcbParser.LCURL);
			this.state = 618;
			this.match(mcbParser.Identifier);
			this.state = 619;
			this.match(mcbParser.ASSIGNMENT);
			this.state = 620;
			this.literalConstant();
			this.state = 621;
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
		this.enterRule(_localctx, 128, mcbParser.RULE_nbtArray);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 623;
			this.match(mcbParser.LSQUARE);
			this.state = 624;
			this.literalConstant();
			this.state = 629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.COMMA) {
				{
				{
				this.state = 625;
				this.match(mcbParser.COMMA);
				this.state = 626;
				this.literalConstant();
				}
				}
				this.state = 631;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 632;
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
		this.enterRule(_localctx, 130, mcbParser.RULE_stringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.match(mcbParser.QUOTE_OPEN);
			this.state = 639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (mcbParser.StrText - 82)) | (1 << (mcbParser.StrEscapedChar - 82)) | (1 << (mcbParser.StrExpression - 82)))) !== 0)) {
				{
				this.state = 637;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case mcbParser.StrText:
				case mcbParser.StrEscapedChar:
					{
					this.state = 635;
					this.stringContent();
					}
					break;
				case mcbParser.StrExpression:
					{
					this.state = 636;
					this.strExpr();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 642;
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
	public strExpr(): StrExprContext {
		let _localctx: StrExprContext = new StrExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, mcbParser.RULE_strExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this.match(mcbParser.StrExpression);
			this.state = 648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 645;
				this.match(mcbParser.NL);
				}
				}
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 651;
			this.scoreboardIdentifier();
			this.state = 655;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === mcbParser.NL) {
				{
				{
				this.state = 652;
				this.match(mcbParser.NL);
				}
				}
				this.state = 657;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 658;
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
	public stringContent(): StringContentContext {
		let _localctx: StringContentContext = new StringContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, mcbParser.RULE_stringContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			_la = this._input.LA(1);
			if (!(_la === mcbParser.StrText || _la === mcbParser.StrEscapedChar)) {
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
	public entity(): EntityContext {
		let _localctx: EntityContext = new EntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, mcbParser.RULE_entity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this.match(mcbParser.ENTITY);
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
		this.enterRule(_localctx, 138, mcbParser.RULE_nl);
		let _la: number;
		try {
			this.state = 672;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.NL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 664;
				this.match(mcbParser.NL);
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === mcbParser.NL) {
					{
					{
					this.state = 665;
					this.match(mcbParser.NL);
					}
					}
					this.state = 670;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case mcbParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 671;
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
		this.enterRule(_localctx, 140, mcbParser.RULE_nls);
		try {
			let _alt: number;
			this.state = 680;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case mcbParser.NL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 675;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 674;
						this.match(mcbParser.NL);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 677;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 73, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case mcbParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 679;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\\\u02AD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x03\x02\x07\x02\x92\n\x02\f\x02\x0E\x02\x95\v\x02" +
		"\x03\x02\x07\x02\x98\n\x02\f\x02\x0E\x02\x9B\v\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x05\x03\xA1\n\x03\x03\x03\x05\x03\xA4\n\x03\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05\xAC\n\x05\f\x05\x0E\x05\xAF\v" +
		"\x05\x05\x05\xB1\n\x05\x03\x05\x05\x05\xB4\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\xBD\n\x06\r\x06\x0E\x06\xBE\x05" +
		"\x06\xC1\n\x06\x05\x06\xC3\n\x06\x03\x07\x03\x07\x03\x07\x05\x07\xC8\n" +
		"\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
		"\xD4\n\n\x03\v\x03\v\x03\v\x03\f\x05\f\xDA\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r\xE5\n\r\f\r\x0E\r\xE8\v\r\x03\r\x05" +
		"\r\xEB\n\r\x05\r\xED\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07" +
		"\x0E\xF5\n\x0E\f\x0E\x0E\x0E\xF8\v\x0E\x03\x0E\x05\x0E\xFB\n\x0E\x05\x0E" +
		"\xFD\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05\x0F\u0103\n\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x07\x11\u010B\n\x11\f\x11\x0E" +
		"\x11\u010E\v\x11\x03\x11\x03\x11\x07\x11\u0112\n\x11\f\x11\x0E\x11\u0115" +
		"\v\x11\x03\x11\x03\x11\x03\x12\x06\x12\u011A\n\x12\r\x12\x0E\x12\u011B" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x07\x15\u0124\n\x15\f" +
		"\x15\x0E\x15\u0127\v\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u012D" +
		"\n\x15\f\x15\x0E\x15\u0130\v\x15\x03\x15\x03\x15\x05\x15\u0134\n\x15\x03" +
		"\x16\x03\x16\x05\x16\u0138\n\x16\x03\x17\x07\x17\u013B\n\x17\f\x17\x0E" +
		"\x17\u013E\v\x17\x03\x17\x03\x17\x07\x17\u0142\n\x17\f\x17\x0E\x17\u0145" +
		"\v\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x05\x18\u014C\n\x18\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x07\x1A\u0152\n\x1A\f\x1A\x0E\x1A\u0155\v" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05" +
		"\x1A\u015F\n\x1A\x03\x1A\x03\x1A\x07\x1A\u0163\n\x1A\f\x1A\x0E\x1A\u0166" +
		"\v\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x07\x1B\u016C\n\x1B\f\x1B\x0E\x1B" +
		"\u016F\v\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0175\n\x1B\f\x1B" +
		"\x0E\x1B\u0178\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x07\x1C\u017E\n\x1C" +
		"\f\x1C\x0E\x1C\u0181\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0185\n\x1C\f\x1C\x0E" +
		"\x1C\u0188\v\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x07\x1D\u0191\n\x1D\f\x1D\x0E\x1D\u0194\v\x1D\x03\x1D\x03\x1D\x07\x1D" +
		"\u0198\n\x1D\f\x1D\x0E\x1D\u019B\v\x1D\x03\x1D\x07\x1D\u019E\n\x1D\f\x1D" +
		"\x0E\x1D\u01A1\v\x1D\x03\x1E\x03\x1E\x07\x1E\u01A5\n\x1E\f\x1E\x0E\x1E" +
		"\u01A8\v\x1E\x03\x1E\x03\x1E\x07\x1E\u01AC\n\x1E\f\x1E\x0E\x1E\u01AF\v" +
		"\x1E\x03\x1E\x07\x1E\u01B2\n\x1E\f\x1E\x0E\x1E\u01B5\v\x1E\x03\x1F\x05" +
		"\x1F\u01B8\n\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x05 \u01C0\n \x03" +
		"!\x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x03$\x03$\x05$\u01CE" +
		"\n$\x03%\x03%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x05\'\u01DA" +
		"\n\'\x03(\x03(\x05(\u01DE\n(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x05" +
		"*\u01E8\n*\x03+\x03+\x03+\x03+\x05+\u01EE\n+\x03,\x03,\x03,\x03-\x03-" +
		"\x03-\x03-\x05-\u01F7\n-\x03.\x03.\x03.\x03.\x05.\u01FD\n.\x03/\x03/\x03" +
		"/\x03/\x05/\u0203\n/\x030\x030\x030\x070\u0208\n0\f0\x0E0\u020B\v0\x03" +
		"1\x031\x032\x032\x032\x052\u0212\n2\x033\x033\x073\u0216\n3\f3\x0E3\u0219" +
		"\v3\x033\x033\x073\u021D\n3\f3\x0E3\u0220\v3\x033\x033\x034\x034\x034" +
		"\x034\x074\u0228\n4\f4\x0E4\u022B\v4\x035\x035\x035\x035\x075\u0231\n" +
		"5\f5\x0E5\u0234\v5\x036\x036\x036\x036\x056\u023A\n6\x036\x036\x037\x03" +
		"7\x057\u0240\n7\x038\x038\x038\x039\x039\x059\u0247\n9\x03:\x03:\x03:" +
		"\x05:\u024C\n:\x03;\x03;\x03<\x03<\x03=\x03=\x03>\x03>\x03>\x03>\x07>" +
		"\u0258\n>\f>\x0E>\u025B\v>\x03>\x03>\x03?\x03?\x03?\x05?\u0262\n?\x03" +
		"?\x03?\x03@\x03@\x03@\x03@\x05@\u026A\n@\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03B\x03B\x03B\x03B\x07B\u0276\nB\fB\x0EB\u0279\vB\x03B\x03B\x03C\x03" +
		"C\x03C\x07C\u0280\nC\fC\x0EC\u0283\vC\x03C\x03C\x03D\x03D\x07D\u0289\n" +
		"D\fD\x0ED\u028C\vD\x03D\x03D\x07D\u0290\nD\fD\x0ED\u0293\vD\x03D\x03D" +
		"\x03E\x03E\x03F\x03F\x03G\x03G\x07G\u029D\nG\fG\x0EG\u02A0\vG\x03G\x05" +
		"G\u02A3\nG\x03H\x06H\u02A6\nH\rH\x0EH\u02A7\x03H\x05H\u02AB\nH\x03H\x02" +
		"\x02\x02I\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x02\b\x03\x0256\x04\x02\x1F\x1F%(\x03\x02\x1F$\x03\x02\x16\x17" +
		"\x03\x02\x13\x15\x03\x02TU\x02\u02C0\x02\x93\x03\x02\x02\x02\x04\xA0\x03" +
		"\x02\x02\x02\x06\xA5\x03\x02\x02\x02\b\xB0\x03\x02\x02\x02\n\xC2\x03\x02" +
		"\x02\x02\f\xC4\x03\x02\x02\x02\x0E\xC9\x03\x02\x02\x02\x10\xCB\x03\x02" +
		"\x02\x02\x12\xCD\x03\x02\x02\x02\x14\xD5\x03\x02\x02\x02\x16\xD9\x03\x02" +
		"\x02\x02\x18\xE0\x03\x02\x02\x02\x1A\xF0\x03\x02\x02\x02\x1C\u0102\x03" +
		"\x02\x02\x02\x1E\u0104\x03\x02\x02\x02 \u0108\x03\x02\x02\x02\"\u0119" +
		"\x03\x02\x02\x02$\u011D\x03\x02\x02\x02&\u011F\x03\x02\x02\x02(\u0121" +
		"\x03\x02\x02\x02*\u0137\x03\x02\x02\x02,\u013C\x03\x02\x02\x02.\u014B" +
		"\x03\x02\x02\x020\u014D\x03\x02\x02\x022\u014F\x03\x02\x02\x024\u0169" +
		"\x03\x02\x02\x026\u017B\x03\x02\x02\x028\u018E\x03\x02\x02\x02:\u01A2" +
		"\x03\x02\x02\x02<\u01B7\x03\x02\x02\x02>\u01BF\x03\x02\x02\x02@\u01C1" +
		"\x03\x02\x02\x02B\u01C5\x03\x02\x02\x02D\u01C9\x03\x02\x02\x02F\u01CB" +
		"\x03\x02\x02\x02H\u01CF\x03\x02\x02\x02J\u01D3\x03\x02\x02\x02L\u01D9" +
		"\x03\x02\x02\x02N\u01DD\x03\x02\x02\x02P\u01DF\x03\x02\x02\x02R\u01E7" +
		"\x03\x02\x02\x02T\u01ED\x03\x02\x02\x02V\u01EF\x03\x02\x02\x02X\u01F6" +
		"\x03\x02\x02\x02Z\u01FC\x03\x02\x02\x02\\\u0202\x03\x02\x02\x02^\u0204" +
		"\x03\x02\x02\x02`\u020C\x03\x02\x02\x02b\u0211\x03\x02\x02\x02d\u0213" +
		"\x03\x02\x02\x02f\u0223\x03\x02\x02\x02h\u022C\x03\x02\x02\x02j\u0235" +
		"\x03\x02\x02\x02l\u023F\x03\x02\x02\x02n\u0241\x03\x02\x02\x02p\u0244" +
		"\x03\x02\x02\x02r\u024B\x03\x02\x02\x02t\u024D\x03\x02\x02\x02v\u024F" +
		"\x03\x02\x02\x02x\u0251\x03\x02\x02\x02z\u0253\x03\x02\x02\x02|\u025E" +
		"\x03\x02\x02\x02~\u0269\x03\x02\x02\x02\x80\u026B\x03\x02\x02\x02\x82" +
		"\u0271\x03\x02\x02\x02\x84\u027C\x03\x02\x02\x02\x86\u0286\x03\x02\x02" +
		"\x02\x88\u0296\x03\x02\x02\x02\x8A\u0298\x03\x02\x02\x02\x8C\u02A2\x03" +
		"\x02\x02\x02\x8E\u02AA\x03\x02\x02\x02\x90\x92\x07\b\x02\x02\x91\x90\x03" +
		"\x02\x02\x02\x92\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03" +
		"\x02\x02\x02\x94\x99\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96\x98\x05" +
		"\x04\x03\x02\x97\x96\x03\x02\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03" +
		"\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x03\x02\x02\x02\x9B\x99\x03" +
		"\x02\x02\x02\x9C\x9D\x07\x02\x02\x03\x9D\x03\x03\x02\x02\x02\x9E\xA1\x05" +
		"\x0E\b\x02\x9F\xA1\x05\x06\x04\x02\xA0\x9E\x03\x02\x02\x02\xA0\x9F\x03" +
		"\x02\x02\x02\xA1\xA3\x03\x02\x02\x02\xA2\xA4\x05\x8CG\x02\xA3\xA2\x03" +
		"\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\x05\x03\x02\x02\x02\xA5\xA6\x05" +
		"\n\x06\x02\xA6\x07\x03\x02\x02\x02\xA7\xAD\x05\n\x06\x02\xA8\xA9\x05\x8E" +
		"H\x02\xA9\xAA\x05\n\x06\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA8\x03\x02\x02" +
		"\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02" +
		"\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xA7\x03\x02\x02" +
		"\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03\x02\x02\x02\xB2\xB4\x05\x8EH" +
		"\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\t\x03\x02\x02" +
		"\x02\xB5\xC3\x05^0\x02\xB6\xC3\x05.\x18\x02\xB7\xC3\x05&\x14\x02\xB8\xC3" +
		"\x05\f\x07\x02\xB9\xC3\x05\x12\n\x02\xBA\xC1\x05\x14\v\x02\xBB\xBD\x05" +
		"\x14\v\x02\xBC\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBC\x03" +
		"\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02\x02\x02\xC0\xBA\x03" +
		"\x02\x02\x02\xC0\xBC\x03\x02\x02\x02\xC1\xC3\x03\x02\x02\x02\xC2\xB5\x03" +
		"\x02\x02\x02\xC2\xB6\x03\x02\x02\x02\xC2\xB7\x03\x02\x02\x02\xC2\xB8\x03" +
		"\x02\x02\x02\xC2\xB9\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC3\v\x03" +
		"\x02\x02\x02\xC4\xC5\x07\x03\x02\x02\xC5\xC7\x07W\x02\x02\xC6\xC8\x05" +
		"\x14\v\x02\xC7\xC6\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\r\x03\x02" +
		"\x02\x02\xC9\xCA\x05\x16\f\x02\xCA\x0F\x03\x02\x02\x02\xCB\xCC\x05\x12" +
		"\n\x02\xCC\x11\x03\x02\x02\x02\xCD\xCE\x074\x02\x02\xCE\xCF\x07J\x02\x02" +
		"\xCF\xD0\x07\x18\x02\x02\xD0\xD1\x07>\x02\x02\xD1\xD3\x07J\x02\x02\xD2" +
		"\xD4\x07J\x02\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4" +
		"\x13\x03\x02\x02\x02\xD5\xD6\x07J\x02\x02\xD6\xD7\x05\x18\r\x02\xD7\x15" +
		"\x03\x02\x02\x02\xD8\xDA\x05\"\x12\x02\xD9\xD8\x03\x02\x02\x02\xD9\xDA" +
		"\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDC\x072\x02\x02\xDC\xDD" +
		"\x07J\x02\x02\xDD\xDE\x05\x1A\x0E\x02\xDE\xDF\x05 \x11\x02\xDF\x17\x03" +
		"\x02\x02\x02\xE0\xEC\x07\v\x02\x02\xE1\xE6\x05\x1C\x0F\x02\xE2\xE3\x07" +
		"\n\x02\x02\xE3\xE5\x05\x1C\x0F\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE8\x03" +
		"\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xEA\x03" +
		"\x02\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEB\x07\n\x02\x02\xEA\xE9\x03" +
		"\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xE1\x03" +
		"\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x07" +
		"\f\x02\x02\xEF\x19\x03\x02\x02\x02\xF0\xFC\x07\v\x02\x02\xF1\xF6\x05\x1E" +
		"\x10\x02\xF2\xF3\x07\n\x02\x02\xF3\xF5\x05\x1E\x10\x02\xF4\xF2\x03\x02" +
		"\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF6\xF7\x03\x02" +
		"\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFB\x07\n" +
		"\x02\x02\xFA\xF9\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFD\x03\x02" +
		"\x02\x02\xFC\xF1\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02" +
		"\x02\x02\xFE\xFF\x07\f\x02\x02\xFF\x1B\x03\x02\x02\x02\u0100\u0103\x05" +
		"r:\x02\u0101\u0103\x05j6\x02\u0102\u0100\x03\x02\x02\x02\u0102\u0101\x03" +
		"\x02\x02\x02\u0103\x1D\x03\x02\x02\x02\u0104\u0105\x07J\x02\x02\u0105" +
		"\u0106\x07\x18\x02\x02\u0106\u0107\x07\x1C\x02\x02\u0107\x1F\x03\x02\x02" +
		"\x02\u0108\u010C\x07\x0F\x02\x02\u0109\u010B\x07\b\x02\x02\u010A\u0109" +
		"\x03\x02\x02\x02\u010B\u010E\x03\x02\x02\x02\u010C\u010A\x03\x02\x02\x02" +
		"\u010C\u010D\x03\x02\x02\x02\u010D\u010F\x03\x02\x02\x02\u010E\u010C\x03" +
		"\x02\x02\x02\u010F\u0113\x05\b\x05\x02\u0110\u0112\x07\b\x02\x02\u0111" +
		"\u0110\x03\x02\x02\x02\u0112\u0115\x03\x02\x02\x02\u0113\u0111\x03\x02" +
		"\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0116\x03\x02\x02\x02\u0115" +
		"\u0113\x03\x02\x02\x02\u0116\u0117\x07\x10\x02\x02\u0117!\x03\x02\x02" +
		"\x02\u0118\u011A\x05$\x13\x02\u0119\u0118\x03\x02\x02\x02\u011A\u011B" +
		"\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011C\x03\x02\x02\x02" +
		"\u011C#\x03\x02\x02\x02\u011D\u011E\t\x02\x02\x02\u011E%\x03\x02\x02\x02" +
		"\u011F\u0120\x05(\x15\x02\u0120\'\x03\x02\x02\x02\u0121\u0125\x073\x02" +
		"\x02\u0122\u0124\x07\b\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124\u0127" +
		"\x03\x02\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02" +
		"\u0126\u0128\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0128\u0129\x07" +
		"\v\x02\x02\u0129\u012A\x058\x1D\x02\u012A\u012E\x07\f\x02\x02\u012B\u012D" +
		"\x07\b\x02\x02\u012C\u012B\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02" +
		"\u012E\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0131\x03" +
		"\x02\x02\x02\u0130\u012E\x03\x02\x02\x02\u0131\u0133\x05 \x11\x02\u0132" +
		"\u0134\x05,\x17\x02\u0133\u0132\x03\x02\x02\x02\u0133\u0134\x03\x02\x02" +
		"\x02\u0134)\x03\x02\x02\x02\u0135\u0138\x05(\x15\x02\u0136\u0138\x05 " +
		"\x11\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0136\x03\x02\x02\x02\u0138" +
		"+\x03\x02\x02\x02\u0139\u013B\x07\b\x02\x02\u013A\u0139\x03\x02\x02\x02" +
		"\u013B\u013E\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013C\u013D\x03" +
		"\x02\x02\x02\u013D\u013F\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013F" +
		"\u0143\x07?\x02\x02\u0140\u0142\x07\b\x02\x02\u0141\u0140\x03\x02\x02" +
		"\x02\u0142\u0145\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144" +
		"\x03\x02\x02\x02\u0144\u0146\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02" +
		"\u0146\u0147\x05*\x16\x02\u0147-\x03\x02\x02\x02\u0148\u014C\x054\x1B" +
		"\x02\u0149\u014C\x056\x1C\x02\u014A\u014C\x052\x1A\x02\u014B\u0148\x03" +
		"\x02\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B\u014A\x03\x02\x02\x02\u014C" +
		"/\x03\x02\x02\x02\u014D\u014E\x05\f\x07\x02\u014E1\x03\x02\x02\x02\u014F" +
		"\u0153\x07C\x02\x02\u0150\u0152\x07\b\x02\x02\u0151\u0150\x03\x02\x02" +
		"\x02\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154" +
		"\x03\x02\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02" +
		"\u0156\u0157\x07\v\x02\x02\u0157\u0158\x05j6\x02\u0158\u0159\x07D\x02" +
		"\x02\u0159\u015A\x05D#\x02\u015A\u015B\x07\x19\x02\x02\u015B\u015E\x05" +
		"l7\x02\u015C\u015D\x07\x19\x02\x02\u015D\u015F\x050\x19\x02\u015E\u015C" +
		"\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02" +
		"\u0160\u0164\x07\f\x02\x02\u0161\u0163\x07\b\x02\x02\u0162\u0161\x03\x02" +
		"\x02\x02\u0163\u0166\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0164" +
		"\u0165\x03\x02\x02\x02\u0165\u0167\x03\x02\x02\x02\u0166\u0164\x03\x02" +
		"\x02\x02\u0167\u0168\x05 \x11\x02\u01683\x03\x02\x02\x02\u0169\u016D\x07" +
		"@\x02\x02\u016A\u016C\x07\b\x02\x02\u016B\u016A\x03\x02\x02\x02\u016C" +
		"\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02" +
		"\x02\x02\u016E\u0170\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170" +
		"\u0171\x07\v\x02\x02\u0171\u0172\x058\x1D\x02\u0172\u0176\x07\f\x02\x02" +
		"\u0173\u0175\x07\b\x02\x02\u0174\u0173\x03\x02\x02\x02\u0175\u0178\x03" +
		"\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177" +
		"\u0179\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\u0179\u017A\x05 \x11" +
		"\x02\u017A5\x03\x02\x02\x02\u017B\u017F\x07A\x02\x02\u017C\u017E\x07\b" +
		"\x02\x02\u017D\u017C\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F" +
		"\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0182\x03\x02" +
		"\x02\x02\u0181\u017F\x03\x02\x02\x02\u0182\u0186\x05 \x11\x02\u0183\u0185" +
		"\x07\b\x02\x02\u0184\u0183\x03\x02\x02\x02\u0185\u0188\x03\x02\x02\x02" +
		"\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x03" +
		"\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018A\x07B\x02\x02\u018A" +
		"\u018B\x07\v\x02\x02\u018B\u018C\x058\x1D\x02\u018C\u018D\x07\f\x02\x02" +
		"\u018D7\x03\x02\x02\x02\u018E\u0192\x05:\x1E\x02\u018F\u0191\x07\b\x02" +
		"\x02\u0190\u018F\x03\x02\x02\x02\u0191\u0194\x03\x02\x02\x02\u0192\u0190" +
		"\x03\x02\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u019F\x03\x02\x02\x02" +
		"\u0194\u0192\x03\x02\x02\x02\u0195\u0199\x07\x1E\x02\x02\u0196\u0198\x07" +
		"\b\x02\x02\u0197\u0196\x03\x02\x02\x02\u0198\u019B\x03\x02\x02\x02\u0199" +
		"\u0197\x03\x02\x02\x02\u0199\u019A\x03\x02\x02\x02\u019A\u019C\x03\x02" +
		"\x02\x02\u019B\u0199\x03\x02\x02\x02\u019C\u019E\x05:\x1E\x02\u019D\u0195" +
		"\x03\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02" +
		"\u019F\u01A0\x03\x02\x02\x02\u01A09\x03\x02\x02\x02\u01A1\u019F\x03\x02" +
		"\x02\x02\u01A2\u01A6\x05<\x1F\x02\u01A3\u01A5\x07\b\x02\x02\u01A4\u01A3" +
		"\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02" +
		"\u01A6\u01A7\x03\x02\x02\x02\u01A7\u01B3\x03\x02\x02\x02\u01A8\u01A6\x03" +
		"\x02\x02\x02\u01A9\u01AD\x07\x1D\x02\x02\u01AA\u01AC\x07\b\x02\x02\u01AB" +
		"\u01AA\x03\x02\x02\x02\u01AC\u01AF\x03\x02\x02\x02\u01AD\u01AB\x03\x02" +
		"\x02\x02\u01AD\u01AE\x03\x02\x02\x02\u01AE\u01B0\x03\x02\x02\x02\u01AF" +
		"\u01AD\x03\x02\x02\x02\u01B0\u01B2\x05<\x1F\x02\u01B1\u01A9\x03\x02\x02" +
		"\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B4" +
		"\x03\x02\x02\x02\u01B4;\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02\u01B6" +
		"\u01B8\x07\x1B\x02\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7\u01B8\x03\x02" +
		"\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BA\x05> \x02\u01BA=\x03" +
		"\x02\x02\x02\u01BB\u01C0\x05@!\x02\u01BC\u01C0\x05B\"\x02\u01BD\u01C0" +
		"\x05F$\x02\u01BE\u01C0\x05H%\x02\u01BF\u01BB\x03\x02\x02\x02\u01BF\u01BC" +
		"\x03\x02\x02\x02\u01BF\u01BD\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02\x02" +
		"\u01C0?\x03\x02\x02\x02\u01C1\u01C2\x05`1\x02\u01C2\u01C3\x05J&\x02\u01C3" +
		"\u01C4\x05`1\x02\u01C4A\x03\x02\x02\x02\u01C5\u01C6\x05`1\x02\u01C6\u01C7" +
		"\x078\x02\x02\u01C7\u01C8\x05D#\x02\u01C8C\x03\x02\x02\x02\u01C9\u01CA" +
		"\x07\x12\x02\x02\u01CAE\x03\x02\x02\x02\u01CB\u01CD\x05\x8AF\x02\u01CC" +
		"\u01CE\x05z>\x02\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02" +
		"\u01CEG\x03\x02\x02\x02\u01CF\u01D0\x07;\x02\x02\u01D0\u01D1\x05N(\x02" +
		"\u01D1\u01D2\x05L\'\x02\u01D2I\x03\x02\x02\x02\u01D3\u01D4\t\x03\x02\x02" +
		"\u01D4K\x03\x02\x02\x02\u01D5\u01DA\x07J\x02\x02\u01D6\u01D7\x07J\x02" +
		"\x02\u01D7\u01D8\x07\x18\x02\x02\u01D8\u01DA\x07J\x02\x02\u01D9\u01D5" +
		"\x03\x02\x02\x02\u01D9\u01D6\x03\x02\x02\x02\u01DAM\x03\x02\x02\x02\u01DB" +
		"\u01DE\x05P)\x02\u01DC\u01DE\x05V,\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD" +
		"\u01DC\x03\x02\x02\x02\u01DEO\x03\x02\x02\x02\u01DF\u01E0\x05R*\x02\u01E0" +
		"\u01E1\x05R*\x02\u01E1\u01E2\x05R*\x02\u01E2Q\x03\x02\x02\x02\u01E3\u01E4" +
		"\x07-\x02\x02\u01E4\u01E8\x05\\/\x02\u01E5\u01E8\x07-\x02\x02\u01E6\u01E8" +
		"\x05\\/\x02\u01E7\u01E3\x03\x02\x02\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7" +
		"\u01E6\x03\x02\x02\x02\u01E8S\x03\x02\x02\x02\u01E9\u01EA\x07.\x02\x02" +
		"\u01EA\u01EE\x05\\/\x02\u01EB\u01EE\x07.\x02\x02\u01EC\u01EE\x05\\/\x02" +
		"\u01ED\u01E9\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02\u01ED\u01EC\x03" +
		"\x02\x02\x02\u01EEU\x03\x02\x02\x02\u01EF\u01F0\x05X-\x02\u01F0\u01F1" +
		"\x05Z.\x02\u01F1W\x03\x02\x02\x02\u01F2\u01F3\x070\x02\x02\u01F3\u01F7" +
		"\x05\\/\x02\u01F4\u01F7\x070\x02\x02\u01F5\u01F7\x05\\/\x02\u01F6\u01F2" +
		"\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F5\x03\x02\x02\x02" +
		"\u01F7Y\x03\x02\x02\x02\u01F8\u01F9\x071\x02\x02\u01F9\u01FD\x05\\/\x02" +
		"\u01FA\u01FD\x071\x02\x02\u01FB\u01FD\x05\\/\x02\u01FC\u01F8\x03\x02\x02" +
		"\x02\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FD[\x03" +
		"\x02\x02\x02\u01FE\u0203\x07F\x02\x02\u01FF\u0200\x07\x17\x02\x02\u0200" +
		"\u0203\x07F\x02\x02\u0201\u0203\x05l7\x02\u0202\u01FE\x03\x02\x02\x02" +
		"\u0202\u01FF\x03\x02\x02\x02\u0202\u0201\x03\x02\x02\x02\u0203]\x03\x02" +
		"\x02\x02\u0204\u0205\x05j6\x02\u0205\u0209\x05t;\x02\u0206\u0208\x05`" +
		"1\x02\u0207\u0206\x03\x02\x02\x02\u0208\u020B\x03\x02\x02\x02\u0209\u0207" +
		"\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A_\x03\x02\x02\x02\u020B" +
		"\u0209\x03\x02\x02\x02\u020C\u020D\x05f4\x02\u020Da\x03\x02\x02\x02\u020E" +
		"\u0212\x05l7\x02\u020F\u0212\x05j6\x02\u0210\u0212\x05d3\x02\u0211\u020E" +
		"\x03\x02\x02\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0210\x03\x02\x02\x02" +
		"\u0212c\x03\x02\x02\x02\u0213\u0217\x07\v\x02\x02\u0214\u0216\x07\b\x02" +
		"\x02\u0215\u0214\x03\x02\x02\x02\u0216\u0219\x03\x02\x02\x02\u0217\u0215" +
		"\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u021A\x03\x02\x02\x02" +
		"\u0219\u0217\x03\x02\x02\x02\u021A\u021E\x05`1\x02\u021B\u021D\x07\b\x02" +
		"\x02\u021C\u021B\x03\x02\x02\x02\u021D\u0220\x03\x02\x02\x02\u021E\u021C" +
		"\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0221\x03\x02\x02\x02" +
		"\u0220\u021E\x03\x02\x02\x02\u0221\u0222\x07\f\x02\x02\u0222e\x03\x02" +
		"\x02\x02\u0223\u0229\x05h5\x02\u0224\u0225\x05v<\x02\u0225\u0226\x05h" +
		"5\x02\u0226\u0228\x03\x02\x02\x02\u0227\u0224\x03\x02\x02\x02\u0228\u022B" +
		"\x03\x02\x02\x02\u0229\u0227\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02" +
		"\u022Ag\x03\x02\x02\x02\u022B\u0229\x03\x02\x02\x02\u022C\u0232\x05b2" +
		"\x02\u022D\u022E\x05x=";
	private static readonly _serializedATNSegment1: string =
		"\x02\u022E\u022F\x05b2\x02\u022F\u0231\x03\x02\x02\x02\u0230\u022D\x03" +
		"\x02\x02\x02\u0231\u0234\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0232" +
		"\u0233\x03\x02\x02\x02\u0233i\x03\x02\x02\x02\u0234\u0232\x03\x02\x02" +
		"\x02\u0235\u0236\x07J\x02\x02\u0236\u0239\x07\r\x02\x02\u0237\u023A\x07" +
		"J\x02\x02\u0238\u023A\x05p9\x02\u0239\u0237\x03\x02\x02\x02\u0239\u0238" +
		"\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B\u023C\x07\x0E\x02\x02" +
		"\u023Ck\x03\x02\x02\x02\u023D\u0240\x07I\x02\x02\u023E\u0240\x05n8\x02" +
		"\u023F\u023D\x03\x02\x02\x02\u023F\u023E\x03\x02\x02\x02\u0240m\x03\x02" +
		"\x02\x02\u0241\u0242\x07\x17\x02\x02\u0242\u0243\x07I\x02\x02\u0243o\x03" +
		"\x02\x02\x02\u0244\u0246\x05\x8AF\x02\u0245\u0247\x05z>\x02\u0246\u0245" +
		"\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247q\x03\x02\x02\x02\u0248" +
		"\u024C\x07E\x02\x02\u0249\u024C\x07I\x02\x02\u024A\u024C\x05\x84C\x02" +
		"\u024B\u0248\x03\x02\x02\x02\u024B\u0249\x03\x02\x02\x02\u024B\u024A\x03" +
		"\x02\x02\x02\u024Cs\x03\x02\x02\x02\u024D\u024E\t\x04\x02\x02\u024Eu\x03" +
		"\x02\x02\x02\u024F\u0250\t\x05\x02\x02\u0250w\x03\x02\x02\x02\u0251\u0252" +
		"\t\x06\x02\x02\u0252y\x03\x02\x02\x02\u0253\u0254\x07\r\x02\x02\u0254" +
		"\u0259\x05|?\x02\u0255\u0256\x07\n\x02\x02\u0256\u0258\x05|?\x02\u0257" +
		"\u0255\x03\x02\x02\x02\u0258\u025B\x03\x02\x02\x02\u0259\u0257\x03\x02" +
		"\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025C\x03\x02\x02\x02\u025B" +
		"\u0259\x03\x02\x02\x02\u025C\u025D\x07\x0E\x02\x02\u025D{\x03\x02\x02" +
		"\x02\u025E\u025F\x07J\x02\x02\u025F\u0261\x07\x1F\x02\x02\u0260\u0262" +
		"\x07\x1B\x02\x02\u0261\u0260\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02" +
		"\u0262\u0263\x03\x02\x02\x02\u0263\u0264\x05~@\x02\u0264}\x03\x02\x02" +
		"\x02\u0265\u026A\x05r:\x02\u0266\u026A\x05\x82B\x02\u0267\u026A\x07J\x02" +
		"\x02\u0268\u026A\x05\x80A\x02\u0269\u0265\x03\x02\x02\x02\u0269\u0266" +
		"\x03\x02\x02\x02\u0269\u0267\x03\x02\x02\x02\u0269\u0268\x03\x02\x02\x02" +
		"\u026A\x7F\x03\x02\x02\x02\u026B\u026C\x07\x0F\x02\x02\u026C\u026D\x07" +
		"J\x02\x02\u026D\u026E\x07\x1F\x02\x02\u026E\u026F\x05r:\x02\u026F\u0270" +
		"\x07\x10\x02\x02\u0270\x81\x03\x02\x02\x02\u0271\u0272\x07\r\x02\x02\u0272" +
		"\u0277\x05r:\x02\u0273\u0274\x07\n\x02\x02\u0274\u0276\x05r:\x02\u0275" +
		"\u0273\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02\u0277\u0275\x03\x02" +
		"\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027A\x03\x02\x02\x02\u0279" +
		"\u0277\x03\x02\x02\x02\u027A\u027B\x07\x0E\x02\x02\u027B\x83\x03\x02\x02" +
		"\x02\u027C\u0281\x07K\x02\x02\u027D\u0280\x05\x88E\x02\u027E\u0280\x05" +
		"\x86D\x02\u027F\u027D\x03\x02\x02\x02\u027F\u027E\x03\x02\x02\x02\u0280" +
		"\u0283\x03\x02\x02\x02\u0281\u027F\x03\x02\x02\x02\u0281\u0282\x03\x02" +
		"\x02\x02\u0282\u0284\x03\x02\x02\x02\u0283\u0281\x03\x02\x02\x02\u0284" +
		"\u0285\x07S\x02\x02\u0285\x85\x03\x02\x02\x02\u0286\u028A\x07V\x02\x02" +
		"\u0287\u0289\x07\b\x02\x02\u0288\u0287\x03\x02\x02\x02\u0289\u028C\x03" +
		"\x02\x02\x02\u028A\u0288\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B" +
		"\u028D\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028D\u0291\x05j6\x02" +
		"\u028E\u0290\x07\b\x02\x02\u028F\u028E\x03\x02\x02\x02\u0290\u0293\x03" +
		"\x02\x02\x02\u0291\u028F\x03\x02\x02\x02\u0291\u0292\x03\x02\x02\x02\u0292" +
		"\u0294\x03\x02\x02\x02\u0293\u0291\x03\x02\x02\x02\u0294\u0295\x07\x10" +
		"\x02\x02\u0295\x87\x03\x02\x02\x02\u0296\u0297\t\x07\x02\x02\u0297\x89" +
		"\x03\x02\x02\x02\u0298\u0299\x07\x04\x02\x02\u0299\x8B\x03\x02\x02\x02" +
		"\u029A\u029E\x07\b\x02\x02\u029B\u029D\x07\b\x02\x02\u029C\u029B\x03\x02" +
		"\x02\x02\u029D\u02A0\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02\u029E" +
		"\u029F\x03\x02\x02\x02\u029F\u02A3\x03\x02\x02\x02\u02A0\u029E\x03\x02" +
		"\x02\x02\u02A1\u02A3\x07\x02\x02\x03\u02A2\u029A\x03\x02\x02\x02\u02A2" +
		"\u02A1\x03\x02\x02\x02\u02A3\x8D\x03\x02\x02\x02\u02A4\u02A6\x07\b\x02" +
		"\x02\u02A5\u02A4\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7\u02A5" +
		"\x03\x02\x02\x02\u02A7\u02A8\x03\x02\x02\x02\u02A8\u02AB\x03\x02\x02\x02" +
		"\u02A9\u02AB\x07\x02\x02\x03\u02AA\u02A5\x03\x02\x02\x02\u02AA\u02A9\x03" +
		"\x02\x02\x02\u02AB\x8F\x03\x02\x02\x02M\x93\x99\xA0\xA3\xAD\xB0\xB3\xBE" +
		"\xC0\xC2\xC7\xD3\xD9\xE6\xEA\xEC\xF6\xFA\xFC\u0102\u010C\u0113\u011B\u0125" +
		"\u012E\u0133\u0137\u013C\u0143\u014B\u0153\u015E\u0164\u016D\u0176\u017F" +
		"\u0186\u0192\u0199\u019F\u01A6\u01AD\u01B3\u01B7\u01BF\u01CD\u01D9\u01DD" +
		"\u01E7\u01ED\u01F6\u01FC\u0202\u0209\u0211\u0217\u021E\u0229\u0232\u0239" +
		"\u023F\u0246\u024B\u0259\u0261\u0269\u0277\u027F\u0281\u028A\u0291\u029E" +
		"\u02A2\u02A7\u02AA";
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
	public load(): LoadContext | undefined {
		return this.tryGetRuleContext(0, LoadContext);
	}
	public nl(): NlContext | undefined {
		return this.tryGetRuleContext(0, NlContext);
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
	public functionCalling(): FunctionCallingContext[];
	public functionCalling(i: number): FunctionCallingContext;
	public functionCalling(i?: number): FunctionCallingContext | FunctionCallingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionCallingContext);
		} else {
			return this.getRuleContext(i, FunctionCallingContext);
		}
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
	public functionCalling(): FunctionCallingContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallingContext);
	}
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


export class FunctionCallingContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(mcbParser.Identifier, 0); }
	public functionInputParameters(): FunctionInputParametersContext {
		return this.getRuleContext(0, FunctionInputParametersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_functionCalling; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterFunctionCalling) {
			listener.enterFunctionCalling(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitFunctionCalling) {
			listener.exitFunctionCalling(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitFunctionCalling) {
			return visitor.visitFunctionCalling(this);
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
	public functionModifiers(): FunctionModifiersContext | undefined {
		return this.tryGetRuleContext(0, FunctionModifiersContext);
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


export class FunctionInputParametersContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(mcbParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(mcbParser.RPAREN, 0); }
	public inputparameter(): InputparameterContext[];
	public inputparameter(i: number): InputparameterContext;
	public inputparameter(i?: number): InputparameterContext | InputparameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InputparameterContext);
		} else {
			return this.getRuleContext(i, InputparameterContext);
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
	public get ruleIndex(): number { return mcbParser.RULE_functionInputParameters; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterFunctionInputParameters) {
			listener.enterFunctionInputParameters(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitFunctionInputParameters) {
			listener.exitFunctionInputParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitFunctionInputParameters) {
			return visitor.visitFunctionInputParameters(this);
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


export class InputparameterContext extends ParserRuleContext {
	public literalConstant(): LiteralConstantContext | undefined {
		return this.tryGetRuleContext(0, LiteralConstantContext);
	}
	public scoreboardIdentifier(): ScoreboardIdentifierContext | undefined {
		return this.tryGetRuleContext(0, ScoreboardIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_inputparameter; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterInputparameter) {
			listener.enterInputparameter(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitInputparameter) {
			listener.exitInputparameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitInputparameter) {
			return visitor.visitInputparameter(this);
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
	public LCURL(): TerminalNode { return this.getToken(mcbParser.LCURL, 0); }
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public RCURL(): TerminalNode { return this.getToken(mcbParser.RCURL, 0); }
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


export class FunctionModifiersContext extends ParserRuleContext {
	public functionModifier(): FunctionModifierContext[];
	public functionModifier(i: number): FunctionModifierContext;
	public functionModifier(i?: number): FunctionModifierContext | FunctionModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionModifierContext);
		} else {
			return this.getRuleContext(i, FunctionModifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_functionModifiers; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterFunctionModifiers) {
			listener.enterFunctionModifiers(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitFunctionModifiers) {
			listener.exitFunctionModifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitFunctionModifiers) {
			return visitor.visitFunctionModifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionModifierContext extends ParserRuleContext {
	public TICK(): TerminalNode | undefined { return this.tryGetToken(mcbParser.TICK, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(mcbParser.LOAD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_functionModifier; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterFunctionModifier) {
			listener.enterFunctionModifier(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitFunctionModifier) {
			listener.exitFunctionModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitFunctionModifier) {
			return visitor.visitFunctionModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public unstrippedIfStatement(): UnstrippedIfStatementContext {
		return this.getRuleContext(0, UnstrippedIfStatementContext);
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


export class UnstrippedIfStatementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(mcbParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(mcbParser.LPAREN, 0); }
	public disconjuction(): DisconjuctionContext {
		return this.getRuleContext(0, DisconjuctionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(mcbParser.RPAREN, 0); }
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
	public elseStatement(): ElseStatementContext | undefined {
		return this.tryGetRuleContext(0, ElseStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_unstrippedIfStatement; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterUnstrippedIfStatement) {
			listener.enterUnstrippedIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitUnstrippedIfStatement) {
			listener.exitUnstrippedIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitUnstrippedIfStatement) {
			return visitor.visitUnstrippedIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlstructBodyContext extends ParserRuleContext {
	public unstrippedIfStatement(): UnstrippedIfStatementContext | undefined {
		return this.tryGetRuleContext(0, UnstrippedIfStatementContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_controlstructBody; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterControlstructBody) {
			listener.enterControlstructBody(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitControlstructBody) {
			listener.exitControlstructBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitControlstructBody) {
			return visitor.visitControlstructBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStatementContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(mcbParser.ELSE, 0); }
	public controlstructBody(): ControlstructBodyContext {
		return this.getRuleContext(0, ControlstructBodyContext);
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
	public get ruleIndex(): number { return mcbParser.RULE_elseStatement; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterElseStatement) {
			listener.enterElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitElseStatement) {
			listener.exitElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitElseStatement) {
			return visitor.visitElseStatement(this);
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


export class LoopWithContext extends ParserRuleContext {
	public commands(): CommandsContext {
		return this.getRuleContext(0, CommandsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_loopWith; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterLoopWith) {
			listener.enterLoopWith(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitLoopWith) {
			listener.exitLoopWith(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitLoopWith) {
			return visitor.visitLoopWith(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(mcbParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(mcbParser.LPAREN, 0); }
	public scoreboardIdentifier(): ScoreboardIdentifierContext {
		return this.getRuleContext(0, ScoreboardIdentifierContext);
	}
	public IN(): TerminalNode { return this.getToken(mcbParser.IN, 0); }
	public range(): RangeContext {
		return this.getRuleContext(0, RangeContext);
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(mcbParser.SEMICOLON);
		} else {
			return this.getToken(mcbParser.SEMICOLON, i);
		}
	}
	public scoreboardLiteral(): ScoreboardLiteralContext {
		return this.getRuleContext(0, ScoreboardLiteralContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(mcbParser.RPAREN, 0); }
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
	public loopWith(): LoopWithContext | undefined {
		return this.tryGetRuleContext(0, LoopWithContext);
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
	public LPAREN(): TerminalNode { return this.getToken(mcbParser.LPAREN, 0); }
	public disconjuction(): DisconjuctionContext {
		return this.getRuleContext(0, DisconjuctionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(mcbParser.RPAREN, 0); }
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
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public UNTIL(): TerminalNode { return this.getToken(mcbParser.UNTIL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(mcbParser.LPAREN, 0); }
	public disconjuction(): DisconjuctionContext {
		return this.getRuleContext(0, DisconjuctionContext);
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public stringContent(): StringContentContext[];
	public stringContent(i: number): StringContentContext;
	public stringContent(i?: number): StringContentContext | StringContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContentContext);
		} else {
			return this.getRuleContext(i, StringContentContext);
		}
	}
	public strExpr(): StrExprContext[];
	public strExpr(i: number): StrExprContext;
	public strExpr(i?: number): StrExprContext | StrExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StrExprContext);
		} else {
			return this.getRuleContext(i, StrExprContext);
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


export class StrExprContext extends ParserRuleContext {
	public StrExpression(): TerminalNode { return this.getToken(mcbParser.StrExpression, 0); }
	public scoreboardIdentifier(): ScoreboardIdentifierContext {
		return this.getRuleContext(0, ScoreboardIdentifierContext);
	}
	public RCURL(): TerminalNode { return this.getToken(mcbParser.RCURL, 0); }
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
	public get ruleIndex(): number { return mcbParser.RULE_strExpr; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterStrExpr) {
			listener.enterStrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitStrExpr) {
			listener.exitStrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitStrExpr) {
			return visitor.visitStrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContentContext extends ParserRuleContext {
	public StrText(): TerminalNode | undefined { return this.tryGetToken(mcbParser.StrText, 0); }
	public StrEscapedChar(): TerminalNode | undefined { return this.tryGetToken(mcbParser.StrEscapedChar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return mcbParser.RULE_stringContent; }
	// @Override
	public enterRule(listener: mcbParserListener): void {
		if (listener.enterStringContent) {
			listener.enterStringContent(this);
		}
	}
	// @Override
	public exitRule(listener: mcbParserListener): void {
		if (listener.exitStringContent) {
			listener.exitStringContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: mcbParserVisitor<Result>): Result {
		if (visitor.visitStringContent) {
			return visitor.visitStringContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityContext extends ParserRuleContext {
	public ENTITY(): TerminalNode { return this.getToken(mcbParser.ENTITY, 0); }
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


