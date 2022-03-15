// Generated from e:\_Project\nodejs\mcb\src\mcbParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mcbParserListener from './mcbParserListener.js';
import mcbParserVisitor from './mcbParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00037B\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0007\u0002",
    "\u000e\n\u0002\f\u0002\u000e\u0002\u0011\u000b\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0007\u0003\u0017\n\u0003\f\u0003\u000e",
    "\u0003\u001a\u000b\u0003\u0005\u0003\u001c\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0007\u0004#\n\u0004\f\u0004",
    "\u000e\u0004&\u000b\u0004\u0003\u0004\u0003\u0004\u0007\u0004*\n\u0004",
    "\f\u0004\u000e\u0004-\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0007\u00053\n\u0005\f\u0005\u000e\u00056\u000b\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u0005;\n\u0005\f\u0005\u000e\u0005",
    ">\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0002\u0007",
    "\u0002\u0004\u0006\b\n\u0002\u0002\u0002C\u0002\u000f\u0003\u0002\u0002",
    "\u0002\u0004\u0014\u0003\u0002\u0002\u0002\u0006 \u0003\u0002\u0002",
    "\u0002\b0\u0003\u0002\u0002\u0002\n?\u0003\u0002\u0002\u0002\f\u000e",
    "\u0007\u0005\u0002\u0002\r\f\u0003\u0002\u0002\u0002\u000e\u0011\u0003",
    "\u0002\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002\u000f\u0010\u0003",
    "\u0002\u0002\u0002\u0010\u0012\u0003\u0002\u0002\u0002\u0011\u000f\u0003",
    "\u0002\u0002\u0002\u0012\u0013\u0007\u0002\u0002\u0003\u0013\u0003\u0003",
    "\u0002\u0002\u0002\u0014\u001b\u0007\u001e\u0002\u0002\u0015\u0017\u0007",
    "\u0005\u0002\u0002\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u001a\u0003",
    "\u0002\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0019\u0003",
    "\u0002\u0002\u0002\u0019\u001c\u0003\u0002\u0002\u0002\u001a\u0018\u0003",
    "\u0002\u0002\u0002\u001b\u0018\u0003\u0002\u0002\u0002\u001b\u001c\u0003",
    "\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u001e\u0007",
    ")\u0002\u0002\u001e\u001f\u0005\u0006\u0004\u0002\u001f\u0005\u0003",
    "\u0002\u0002\u0002 $\u0007\u0014\u0002\u0002!#\u0007\u0005\u0002\u0002",
    "\"!\u0003\u0002\u0002\u0002#&\u0003\u0002\u0002\u0002$\"\u0003\u0002",
    "\u0002\u0002$%\u0003\u0002\u0002\u0002%\'\u0003\u0002\u0002\u0002&$",
    "\u0003\u0002\u0002\u0002\'+\u0005\n\u0006\u0002(*\u0007\u0005\u0002",
    "\u0002)(\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002\u0002+)\u0003\u0002",
    "\u0002\u0002+,\u0003\u0002\u0002\u0002,.\u0003\u0002\u0002\u0002-+\u0003",
    "\u0002\u0002\u0002./\u0007\u001f\u0002\u0002/\u0007\u0003\u0002\u0002",
    "\u000204\u0007#\u0002\u000213\u0007\u0005\u0002\u000221\u0003\u0002",
    "\u0002\u000236\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000245\u0003",
    "\u0002\u0002\u000257\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u0002",
    "78\u0007\b\u0002\u00028<\u0007\t\u0002\u00029;\u0007\u0005\u0002\u0002",
    ":9\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002",
    "\u0002<=\u0003\u0002\u0002\u0002=\t\u0003\u0002\u0002\u0002><\u0003",
    "\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@\u000b\u0003\u0002\u0002",
    "\u0002\t\u000f\u0018\u001b$+4<"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mcbParser extends antlr4.Parser {

    static grammarFileName = "mcbParser.g4";
    static literalNames = [ null, null, null, null, "'.'", "','", "'('", 
                            "')'", "'['", "']'", "'{'", "'}'", "'..'", "'*'", 
                            "'%'", "'/'", "'+'", "'-'", "':'", "'='", "'<'", 
                            "'>'", "'<='", "'>='", "'@'", null, null, null, 
                            "'fun'", "'end'", "'if'", "'unless'", "'else'", 
                            "'while'", "'do'" ];
    static symbolicNames = [ null, "Comment", "WS", "NL", "DOT", "COMMA", 
                             "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURL", 
                             "RCURL", "RANGE", "MULT", "MOD", "DIVINE", 
                             "ADD", "SUB", "COLON", "ASSIGN", "LANGLE", 
                             "RANGLE", "LE", "GE", "AT_N_WS", "AT_P_WS", 
                             "AT_S_WS", "AT_B_WS", "FUN", "END", "IF", "UNLESS", 
                             "ELSE", "WHILE", "DO", "RealLiteral", "FloatLiteral", 
                             "DoubleLiteral", "IntegerLiteral", "Identifier", 
                             "QUOTE_OPEN", "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", 
                             "UNICODE_CLASS_LO", "UNICODE_CLASS_LT", "UNICODE_CLASS_LU", 
                             "UNICODE_CLASS_ND", "UNICODE_CLASS_NL", "QUOTE_CLOSE", 
                             "LineStrText", "Inside_Comment", "Inside_WS", 
                             "Inside_NL", "ErrorCharacter" ];
    static ruleNames = [ "script", "functionDeclare", "block", "whileDo", 
                         "statements" ];

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



	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, mcbParser.RULE_script);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 10;
	            this.match(mcbParser.NL);
	            this.state = 15;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 16;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(mcbParser.FUN);
	        this.state = 25;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 22;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===mcbParser.NL) {
	                this.state = 19;
	                this.match(mcbParser.NL);
	                this.state = 24;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	        }
	        this.state = 27;
	        this.match(mcbParser.Identifier);
	        this.state = 28;
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, mcbParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(mcbParser.COLON);
	        this.state = 34;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 31;
	                this.match(mcbParser.NL); 
	            }
	            this.state = 36;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	        this.state = 37;
	        this.statements();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 38;
	            this.match(mcbParser.NL);
	            this.state = 43;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 44;
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



	whileDo() {
	    let localctx = new WhileDoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, mcbParser.RULE_whileDo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(mcbParser.WHILE);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 47;
	            this.match(mcbParser.NL);
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 53;
	        this.match(mcbParser.LPAREN);
	        this.state = 54;
	        this.match(mcbParser.RPAREN);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 55;
	            this.match(mcbParser.NL);
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, mcbParser.RULE_statements);
	    try {
	        this.enterOuterAlt(localctx, 1);

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
mcbParser.DIVINE = 15;
mcbParser.ADD = 16;
mcbParser.SUB = 17;
mcbParser.COLON = 18;
mcbParser.ASSIGN = 19;
mcbParser.LANGLE = 20;
mcbParser.RANGLE = 21;
mcbParser.LE = 22;
mcbParser.GE = 23;
mcbParser.AT_N_WS = 24;
mcbParser.AT_P_WS = 25;
mcbParser.AT_S_WS = 26;
mcbParser.AT_B_WS = 27;
mcbParser.FUN = 28;
mcbParser.END = 29;
mcbParser.IF = 30;
mcbParser.UNLESS = 31;
mcbParser.ELSE = 32;
mcbParser.WHILE = 33;
mcbParser.DO = 34;
mcbParser.RealLiteral = 35;
mcbParser.FloatLiteral = 36;
mcbParser.DoubleLiteral = 37;
mcbParser.IntegerLiteral = 38;
mcbParser.Identifier = 39;
mcbParser.QUOTE_OPEN = 40;
mcbParser.UNICODE_CLASS_LL = 41;
mcbParser.UNICODE_CLASS_LM = 42;
mcbParser.UNICODE_CLASS_LO = 43;
mcbParser.UNICODE_CLASS_LT = 44;
mcbParser.UNICODE_CLASS_LU = 45;
mcbParser.UNICODE_CLASS_ND = 46;
mcbParser.UNICODE_CLASS_NL = 47;
mcbParser.QUOTE_CLOSE = 48;
mcbParser.LineStrText = 49;
mcbParser.Inside_Comment = 50;
mcbParser.Inside_WS = 51;
mcbParser.Inside_NL = 52;
mcbParser.ErrorCharacter = 53;

mcbParser.RULE_script = 0;
mcbParser.RULE_functionDeclare = 1;
mcbParser.RULE_block = 2;
mcbParser.RULE_whileDo = 3;
mcbParser.RULE_statements = 4;

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




mcbParser.ScriptContext = ScriptContext; 
mcbParser.FunctionDeclareContext = FunctionDeclareContext; 
mcbParser.BlockContext = BlockContext; 
mcbParser.WhileDoContext = WhileDoContext; 
mcbParser.StatementsContext = StatementsContext; 
