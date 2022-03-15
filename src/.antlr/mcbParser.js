// Generated from ./src/mcbParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mcbParserListener from './mcbParserListener.js';
import mcbParserVisitor from './mcbParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003A\u0099\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0007\u0002\u001e\n\u0002",
    "\f\u0002\u000e\u0002!\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0007\u0003\'\n\u0003\f\u0003\u000e\u0003*\u000b\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u00042\n\u0004\f\u0004\u000e\u00045\u000b\u0004\u0005\u00047",
    "\n\u0004\u0003\u0004\u0005\u0004:\n\u0004\u0003\u0005\u0003\u0005\u0005",
    "\u0005>\n\u0005\u0003\u0006\u0003\u0006\u0007\u0006B\n\u0006\f\u0006",
    "\u000e\u0006E\u000b\u0006\u0003\u0006\u0003\u0006\u0007\u0006I\n\u0006",
    "\f\u0006\u000e\u0006L\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0005\u0007R\n\u0007\u0003\b\u0003\b\u0007\bV\n\b\f\b\u000e",
    "\bY\u000b\b\u0003\b\u0003\b\u0003\b\u0007\b^\n\b\f\b\u000e\ba\u000b",
    "\b\u0003\b\u0003\b\u0003\t\u0003\t\u0007\tg\n\t\f\t\u000e\tj\u000b\t",
    "\u0003\t\u0003\t\u0003\t\u0007\to\n\t\f\t\u000e\tr\u000b\t\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u0081\n",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u008b\n\u000b\f\u000b\u000e",
    "\u000b\u008e\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003(\u0003\u0014\u000f",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002",
    "\u0004\u0003\u0002\u0012\u0013\u0003\u0002\u000f\u0011\u0002\u009c\u0002",
    "\u001f\u0003\u0002\u0002\u0002\u0004$\u0003\u0002\u0002\u0002\u0006",
    "6\u0003\u0002\u0002\u0002\b=\u0003\u0002\u0002\u0002\n?\u0003\u0002",
    "\u0002\u0002\fQ\u0003\u0002\u0002\u0002\u000eS\u0003\u0002\u0002\u0002",
    "\u0010d\u0003\u0002\u0002\u0002\u0012u\u0003\u0002\u0002\u0002\u0014",
    "\u0080\u0003\u0002\u0002\u0002\u0016\u008f\u0003\u0002\u0002\u0002\u0018",
    "\u0094\u0003\u0002\u0002\u0002\u001a\u0096\u0003\u0002\u0002\u0002\u001c",
    "\u001e\u0007\u0005\u0002\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e",
    "!\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f",
    " \u0003\u0002\u0002\u0002 \"\u0003\u0002\u0002\u0002!\u001f\u0003\u0002",
    "\u0002\u0002\"#\u0007\u0002\u0002\u0003#\u0003\u0003\u0002\u0002\u0002",
    "$(\u0007#\u0002\u0002%\'\u0007\u0005\u0002\u0002&%\u0003\u0002\u0002",
    "\u0002\'*\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002(&\u0003",
    "\u0002\u0002\u0002)+\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002",
    "+,\u0007.\u0002\u0002,-\u0005\n\u0006\u0002-\u0005\u0003\u0002\u0002",
    "\u0002.3\u0005\b\u0005\u0002/0\u0007\u0002\u0002\u000302\u0005\b\u0005",
    "\u00021/\u0003\u0002\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002",
    "\u0002\u000234\u0003\u0002\u0002\u000247\u0003\u0002\u0002\u000253\u0003",
    "\u0002\u0002\u00026.\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u0002",
    "79\u0003\u0002\u0002\u00028:\u0007\u0002\u0002\u000398\u0003\u0002\u0002",
    "\u00029:\u0003\u0002\u0002\u0002:\u0007\u0003\u0002\u0002\u0002;>\u0005",
    "\u0012\n\u0002<>\u0005\f\u0007\u0002=;\u0003\u0002\u0002\u0002=<\u0003",
    "\u0002\u0002\u0002>\t\u0003\u0002\u0002\u0002?C\u0007\u0014\u0002\u0002",
    "@B\u0007\u0005\u0002\u0002A@\u0003\u0002\u0002\u0002BE\u0003\u0002\u0002",
    "\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DF\u0003\u0002",
    "\u0002\u0002EC\u0003\u0002\u0002\u0002FJ\u0005\u0006\u0004\u0002GI\u0007",
    "\u0005\u0002\u0002HG\u0003\u0002\u0002\u0002IL\u0003\u0002\u0002\u0002",
    "JH\u0003\u0002\u0002\u0002JK\u0003\u0002\u0002\u0002KM\u0003\u0002\u0002",
    "\u0002LJ\u0003\u0002\u0002\u0002MN\u0007$\u0002\u0002N\u000b\u0003\u0002",
    "\u0002\u0002OR\u0005\u000e\b\u0002PR\u0005\u0010\t\u0002QO\u0003\u0002",
    "\u0002\u0002QP\u0003\u0002\u0002\u0002R\r\u0003\u0002\u0002\u0002SW",
    "\u0007(\u0002\u0002TV\u0007\u0005\u0002\u0002UT\u0003\u0002\u0002\u0002",
    "VY\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002",
    "\u0002XZ\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002Z[\u0007\b",
    "\u0002\u0002[_\u0007\t\u0002\u0002\\^\u0007\u0005\u0002\u0002]\\\u0003",
    "\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002",
    "_`\u0003\u0002\u0002\u0002`b\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002",
    "\u0002bc\u0005\n\u0006\u0002c\u000f\u0003\u0002\u0002\u0002dh\u0007",
    ")\u0002\u0002eg\u0007\u0005\u0002\u0002fe\u0003\u0002\u0002\u0002gj",
    "\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002",
    "\u0002ik\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002kl\u0007\b",
    "\u0002\u0002lp\u0007\t\u0002\u0002mo\u0007\u0005\u0002\u0002nm\u0003",
    "\u0002\u0002\u0002or\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002",
    "pq\u0003\u0002\u0002\u0002qs\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002",
    "\u0002st\u0005\n\u0006\u0002t\u0011\u0003\u0002\u0002\u0002uv\u0005",
    "\u0016\f\u0002vw\u0007\u0015\u0002\u0002wx\u0005\u0014\u000b\u0002x",
    "\u0013\u0003\u0002\u0002\u0002yz\b\u000b\u0001\u0002z\u0081\u0005\u0016",
    "\f\u0002{\u0081\u0007-\u0002\u0002|}\u0007\b\u0002\u0002}~\u0005\u0014",
    "\u000b\u0002~\u007f\u0007\t\u0002\u0002\u007f\u0081\u0003\u0002\u0002",
    "\u0002\u0080y\u0003\u0002\u0002\u0002\u0080{\u0003\u0002\u0002\u0002",
    "\u0080|\u0003\u0002\u0002\u0002\u0081\u008c\u0003\u0002\u0002\u0002",
    "\u0082\u0083\f\u0007\u0002\u0002\u0083\u0084\u0005\u001a\u000e\u0002",
    "\u0084\u0085\u0005\u0014\u000b\b\u0085\u008b\u0003\u0002\u0002\u0002",
    "\u0086\u0087\f\u0006\u0002\u0002\u0087\u0088\u0005\u0018\r\u0002\u0088",
    "\u0089\u0005\u0014\u000b\u0007\u0089\u008b\u0003\u0002\u0002\u0002\u008a",
    "\u0082\u0003\u0002\u0002\u0002\u008a\u0086\u0003\u0002\u0002\u0002\u008b",
    "\u008e\u0003\u0002\u0002\u0002\u008c\u008a\u0003\u0002\u0002\u0002\u008c",
    "\u008d\u0003\u0002\u0002\u0002\u008d\u0015\u0003\u0002\u0002\u0002\u008e",
    "\u008c\u0003\u0002\u0002\u0002\u008f\u0090\u0007.\u0002\u0002\u0090",
    "\u0091\u0007\n\u0002\u0002\u0091\u0092\u0007.\u0002\u0002\u0092\u0093",
    "\u0007\u000b\u0002\u0002\u0093\u0017\u0003\u0002\u0002\u0002\u0094\u0095",
    "\t\u0002\u0002\u0002\u0095\u0019\u0003\u0002\u0002\u0002\u0096\u0097",
    "\t\u0003\u0002\u0002\u0097\u001b\u0003\u0002\u0002\u0002\u0012\u001f",
    "(369=CJQW_hp\u0080\u008a\u008c"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mcbParser extends antlr4.Parser {

    static grammarFileName = "mcbParser.g4";
    static literalNames = [ null, null, null, null, "'.'", "','", "'('", 
                            "')'", "'['", "']'", "'{'", "'}'", "'..'", null, 
                            null, null, null, null, "':'", "'='", "'*='", 
                            "'%='", "'/='", "'+='", "'-='", "'<'", "'>'", 
                            "'<='", "'>='", "'@'", null, null, null, "'fun'", 
                            "'end'", "'if'", "'unless'", "'else'", "'while'", 
                            "'do'" ];
    static symbolicNames = [ null, "Comment", "WS", "NL", "DOT", "COMMA", 
                             "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURL", 
                             "RCURL", "RANGE", "MULT", "MOD", "DIV", "ADD", 
                             "SUB", "COLON", "ASSIGNMENT", "MULT_ASSIGNMENT", 
                             "MOD_ASSIGNMENT", "DIVINE_ASSIGNMENT", "ADD_ASSIGNMENT", 
                             "SUB_ASSIGNMENT", "LANGLE", "RANGLE", "LE", 
                             "GE", "AT_N_WS", "AT_P_WS", "AT_S_WS", "AT_B_WS", 
                             "FUN", "END", "IF", "UNLESS", "ELSE", "WHILE", 
                             "DO", "RealLiteral", "FloatLiteral", "DoubleLiteral", 
                             "IntegerLiteral", "Identifier", "QUOTE_OPEN", 
                             "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", "UNICODE_CLASS_LO", 
                             "UNICODE_CLASS_LT", "UNICODE_CLASS_LU", "UNICODE_CLASS_ND", 
                             "UNICODE_CLASS_NL", "QUOTE_CLOSE", "LineStrText", 
                             "Inside_MULT_ASSIGNMENT", "Inside_MOD_ASSIGNMENT", 
                             "Inside_DIVINE_ASSIGNMENT", "Inside_ADD_ASSIGNMENT", 
                             "Inside_SUB_ASSIGNMENT", "Inside_Comment", 
                             "Inside_WS", "Inside_NL", "ErrorCharacter" ];
    static ruleNames = [ "script", "functionDeclare", "statements", "statement", 
                         "block", "loopStatement", "whileDo", "doWhile", 
                         "assignment", "expression", "scoreboardIdentifier", 
                         "additiveOperator", "multiplicativeOperator" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = mcbParser.ruleNames;
        this.literalNames = mcbParser.literalNames;
        this.symbolicNames = mcbParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, mcbParser.RULE_script);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 26;
	            this.match(mcbParser.NL);
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 32;
	        this.match(mcbParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclare() {
	    let localctx = new FunctionDeclareContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, mcbParser.RULE_functionDeclare);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(mcbParser.FUN);
	        this.state = 38;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 35;
	                this.match(mcbParser.NL); 
	            }
	            this.state = 40;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 41;
	        this.match(mcbParser.Identifier);
	        this.state = 42;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, mcbParser.RULE_statements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (mcbParser.WHILE - 38)) | (1 << (mcbParser.DO - 38)) | (1 << (mcbParser.Identifier - 38)))) !== 0)) {
	            this.state = 44;
	            this.statement();
	            this.state = 49;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 45;
	                    this.match(mcbParser.EOF);
	                    this.state = 46;
	                    this.statement(); 
	                }
	                this.state = 51;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	            }

	        }

	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mcbParser.EOF) {
	            this.state = 54;
	            this.match(mcbParser.EOF);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, mcbParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.Identifier:
	            this.state = 57;
	            this.assignment();
	            break;
	        case mcbParser.WHILE:
	        case mcbParser.DO:
	            this.state = 58;
	            this.loopStatement();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, mcbParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(mcbParser.COLON);
	        this.state = 65;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 62;
	                this.match(mcbParser.NL); 
	            }
	            this.state = 67;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	        this.state = 68;
	        this.statements();
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 69;
	            this.match(mcbParser.NL);
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 75;
	        this.match(mcbParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loopStatement() {
	    let localctx = new LoopStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, mcbParser.RULE_loopStatement);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.WHILE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 77;
	            this.whileDo();
	            break;
	        case mcbParser.DO:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 78;
	            this.doWhile();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileDo() {
	    let localctx = new WhileDoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, mcbParser.RULE_whileDo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(mcbParser.WHILE);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 82;
	            this.match(mcbParser.NL);
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 88;
	        this.match(mcbParser.LPAREN);
	        this.state = 89;
	        this.match(mcbParser.RPAREN);
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 90;
	            this.match(mcbParser.NL);
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 96;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doWhile() {
	    let localctx = new DoWhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, mcbParser.RULE_doWhile);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.match(mcbParser.DO);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 99;
	            this.match(mcbParser.NL);
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 105;
	        this.match(mcbParser.LPAREN);
	        this.state = 106;
	        this.match(mcbParser.RPAREN);
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 107;
	            this.match(mcbParser.NL);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 113;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, mcbParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.scoreboardIdentifier();
	        this.state = 116;
	        this.match(mcbParser.ASSIGNMENT);
	        this.state = 117;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, mcbParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.Identifier:
	            this.state = 120;
	            this.scoreboardIdentifier();
	            break;
	        case mcbParser.IntegerLiteral:
	            this.state = 121;
	            this.match(mcbParser.IntegerLiteral);
	            break;
	        case mcbParser.LPAREN:
	            this.state = 122;
	            this.match(mcbParser.LPAREN);
	            this.state = 123;
	            this.expression(0);
	            this.state = 124;
	            this.match(mcbParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 138;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 136;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expression);
	                    this.state = 128;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 129;
	                    this.multiplicativeOperator();
	                    this.state = 130;
	                    this.expression(6);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expression);
	                    this.state = 132;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 133;
	                    this.additiveOperator();
	                    this.state = 134;
	                    this.expression(5);
	                    break;

	                } 
	            }
	            this.state = 140;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	scoreboardIdentifier() {
	    let localctx = new ScoreboardIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, mcbParser.RULE_scoreboardIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(mcbParser.Identifier);
	        this.state = 142;
	        this.match(mcbParser.LSQUARE);
	        this.state = 143;
	        this.match(mcbParser.Identifier);
	        this.state = 144;
	        this.match(mcbParser.RSQUARE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additiveOperator() {
	    let localctx = new AdditiveOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, mcbParser.RULE_additiveOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        _la = this._input.LA(1);
	        if(!(_la===mcbParser.ADD || _la===mcbParser.SUB)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicativeOperator() {
	    let localctx = new MultiplicativeOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, mcbParser.RULE_multiplicativeOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.MULT) | (1 << mcbParser.MOD) | (1 << mcbParser.DIV))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

mcbParser.EOF = antlr4.Token.EOF;
mcbParser.Comment = 1;
mcbParser.WS = 2;
mcbParser.NL = 3;
mcbParser.DOT = 4;
mcbParser.COMMA = 5;
mcbParser.LPAREN = 6;
mcbParser.RPAREN = 7;
mcbParser.LSQUARE = 8;
mcbParser.RSQUARE = 9;
mcbParser.LCURL = 10;
mcbParser.RCURL = 11;
mcbParser.RANGE = 12;
mcbParser.MULT = 13;
mcbParser.MOD = 14;
mcbParser.DIV = 15;
mcbParser.ADD = 16;
mcbParser.SUB = 17;
mcbParser.COLON = 18;
mcbParser.ASSIGNMENT = 19;
mcbParser.MULT_ASSIGNMENT = 20;
mcbParser.MOD_ASSIGNMENT = 21;
mcbParser.DIVINE_ASSIGNMENT = 22;
mcbParser.ADD_ASSIGNMENT = 23;
mcbParser.SUB_ASSIGNMENT = 24;
mcbParser.LANGLE = 25;
mcbParser.RANGLE = 26;
mcbParser.LE = 27;
mcbParser.GE = 28;
mcbParser.AT_N_WS = 29;
mcbParser.AT_P_WS = 30;
mcbParser.AT_S_WS = 31;
mcbParser.AT_B_WS = 32;
mcbParser.FUN = 33;
mcbParser.END = 34;
mcbParser.IF = 35;
mcbParser.UNLESS = 36;
mcbParser.ELSE = 37;
mcbParser.WHILE = 38;
mcbParser.DO = 39;
mcbParser.RealLiteral = 40;
mcbParser.FloatLiteral = 41;
mcbParser.DoubleLiteral = 42;
mcbParser.IntegerLiteral = 43;
mcbParser.Identifier = 44;
mcbParser.QUOTE_OPEN = 45;
mcbParser.UNICODE_CLASS_LL = 46;
mcbParser.UNICODE_CLASS_LM = 47;
mcbParser.UNICODE_CLASS_LO = 48;
mcbParser.UNICODE_CLASS_LT = 49;
mcbParser.UNICODE_CLASS_LU = 50;
mcbParser.UNICODE_CLASS_ND = 51;
mcbParser.UNICODE_CLASS_NL = 52;
mcbParser.QUOTE_CLOSE = 53;
mcbParser.LineStrText = 54;
mcbParser.Inside_MULT_ASSIGNMENT = 55;
mcbParser.Inside_MOD_ASSIGNMENT = 56;
mcbParser.Inside_DIVINE_ASSIGNMENT = 57;
mcbParser.Inside_ADD_ASSIGNMENT = 58;
mcbParser.Inside_SUB_ASSIGNMENT = 59;
mcbParser.Inside_Comment = 60;
mcbParser.Inside_WS = 61;
mcbParser.Inside_NL = 62;
mcbParser.ErrorCharacter = 63;

mcbParser.RULE_script = 0;
mcbParser.RULE_functionDeclare = 1;
mcbParser.RULE_statements = 2;
mcbParser.RULE_statement = 3;
mcbParser.RULE_block = 4;
mcbParser.RULE_loopStatement = 5;
mcbParser.RULE_whileDo = 6;
mcbParser.RULE_doWhile = 7;
mcbParser.RULE_assignment = 8;
mcbParser.RULE_expression = 9;
mcbParser.RULE_scoreboardIdentifier = 10;
mcbParser.RULE_additiveOperator = 11;
mcbParser.RULE_multiplicativeOperator = 12;

class ScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_script;
    }

	EOF() {
	    return this.getToken(mcbParser.EOF, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.NL);
	    } else {
	        return this.getToken(mcbParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitScript(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitScript(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclareContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_functionDeclare;
    }

	FUN() {
	    return this.getToken(mcbParser.FUN, 0);
	};

	Identifier() {
	    return this.getToken(mcbParser.Identifier, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.NL);
	    } else {
	        return this.getToken(mcbParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterFunctionDeclare(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitFunctionDeclare(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitFunctionDeclare(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_statements;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	EOF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.EOF);
	    } else {
	        return this.getToken(mcbParser.EOF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitStatements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitStatements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_statement;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	loopStatement() {
	    return this.getTypedRuleContext(LoopStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_block;
    }

	COLON() {
	    return this.getToken(mcbParser.COLON, 0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	END() {
	    return this.getToken(mcbParser.END, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.NL);
	    } else {
	        return this.getToken(mcbParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LoopStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_loopStatement;
    }

	whileDo() {
	    return this.getTypedRuleContext(WhileDoContext,0);
	};

	doWhile() {
	    return this.getTypedRuleContext(DoWhileContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterLoopStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitLoopStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitLoopStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileDoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_whileDo;
    }

	WHILE() {
	    return this.getToken(mcbParser.WHILE, 0);
	};

	LPAREN() {
	    return this.getToken(mcbParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(mcbParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.NL);
	    } else {
	        return this.getToken(mcbParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterWhileDo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitWhileDo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitWhileDo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DoWhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_doWhile;
    }

	DO() {
	    return this.getToken(mcbParser.DO, 0);
	};

	LPAREN() {
	    return this.getToken(mcbParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(mcbParser.RPAREN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.NL);
	    } else {
	        return this.getToken(mcbParser.NL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterDoWhile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitDoWhile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitDoWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_assignment;
    }

	scoreboardIdentifier() {
	    return this.getTypedRuleContext(ScoreboardIdentifierContext,0);
	};

	ASSIGNMENT() {
	    return this.getToken(mcbParser.ASSIGNMENT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_expression;
    }

	scoreboardIdentifier() {
	    return this.getTypedRuleContext(ScoreboardIdentifierContext,0);
	};

	IntegerLiteral() {
	    return this.getToken(mcbParser.IntegerLiteral, 0);
	};

	LPAREN() {
	    return this.getToken(mcbParser.LPAREN, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(mcbParser.RPAREN, 0);
	};

	multiplicativeOperator() {
	    return this.getTypedRuleContext(MultiplicativeOperatorContext,0);
	};

	additiveOperator() {
	    return this.getTypedRuleContext(AdditiveOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScoreboardIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_scoreboardIdentifier;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.Identifier);
	    } else {
	        return this.getToken(mcbParser.Identifier, i);
	    }
	};


	LSQUARE() {
	    return this.getToken(mcbParser.LSQUARE, 0);
	};

	RSQUARE() {
	    return this.getToken(mcbParser.RSQUARE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterScoreboardIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitScoreboardIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitScoreboardIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditiveOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_additiveOperator;
    }

	ADD() {
	    return this.getToken(mcbParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(mcbParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterAdditiveOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitAdditiveOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitAdditiveOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplicativeOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_multiplicativeOperator;
    }

	MULT() {
	    return this.getToken(mcbParser.MULT, 0);
	};

	DIV() {
	    return this.getToken(mcbParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(mcbParser.MOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterMultiplicativeOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitMultiplicativeOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitMultiplicativeOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




mcbParser.ScriptContext = ScriptContext; 
mcbParser.FunctionDeclareContext = FunctionDeclareContext; 
mcbParser.StatementsContext = StatementsContext; 
mcbParser.StatementContext = StatementContext; 
mcbParser.BlockContext = BlockContext; 
mcbParser.LoopStatementContext = LoopStatementContext; 
mcbParser.WhileDoContext = WhileDoContext; 
mcbParser.DoWhileContext = DoWhileContext; 
mcbParser.AssignmentContext = AssignmentContext; 
mcbParser.ExpressionContext = ExpressionContext; 
mcbParser.ScoreboardIdentifierContext = ScoreboardIdentifierContext; 
mcbParser.AdditiveOperatorContext = AdditiveOperatorContext; 
mcbParser.MultiplicativeOperatorContext = MultiplicativeOperatorContext; 
