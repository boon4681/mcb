// Generated from e:\_Project\nodejs\mcb\src\mcb.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mcbListener from './mcbListener.js';
import mcbVisitor from './mcbVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001d\u0084\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003",
    "%\n\u0003\f\u0003\u000e\u0003(\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004/\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000bJ\n\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\fQ\n\f\u0003\r\u0003\r\u0003\r\u0007",
    "\rV\n\r\f\r\u000e\rY\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005",
    "\u000ej\n\u000e\u0005\u000el\n\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0005\u0010w\n\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0007\u0010\u007f\n\u0010\f\u0010\u000e\u0010",
    "\u0082\u000b\u0010\u0003\u0010\u0002\u0003\u001e\u0011\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e\u0002\u0005",
    "\u0003\u0002\u0011\u0012\u0003\u0002\u0013\u0015\u0003\u0002\u0016\u0017",
    "\u0002\u0083\u0002 \u0003\u0002\u0002\u0002\u0004&\u0003\u0002\u0002",
    "\u0002\u0006.\u0003\u0002\u0002\u0002\b0\u0003\u0002\u0002\u0002\n6",
    "\u0003\u0002\u0002\u0002\f;\u0003\u0002\u0002\u0002\u000e=\u0003\u0002",
    "\u0002\u0002\u0010?\u0003\u0002\u0002\u0002\u0012C\u0003\u0002\u0002",
    "\u0002\u0014I\u0003\u0002\u0002\u0002\u0016P\u0003\u0002\u0002\u0002",
    "\u0018R\u0003\u0002\u0002\u0002\u001ak\u0003\u0002\u0002\u0002\u001c",
    "m\u0003\u0002\u0002\u0002\u001ev\u0003\u0002\u0002\u0002 !\u0005\u0004",
    "\u0003\u0002!\"\u0007\u0002\u0002\u0003\"\u0003\u0003\u0002\u0002\u0002",
    "#%\u0005\u0006\u0004\u0002$#\u0003\u0002\u0002\u0002%(\u0003\u0002\u0002",
    "\u0002&$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'\u0005",
    "\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002)/\u0005\u001a\u000e",
    "\u0002*/\u0005\b\u0005\u0002+/\u0007\u001a\u0002\u0002,/\u0005\u0018",
    "\r\u0002-/\u0005\u0010\t\u0002.)\u0003\u0002\u0002\u0002.*\u0003\u0002",
    "\u0002\u0002.+\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002.-\u0003",
    "\u0002\u0002\u0002/\u0007\u0003\u0002\u0002\u000201\u0007\u0003\u0002",
    "\u000212\u0005\n\u0006\u000223\u0007\u0004\u0002\u000234\u0005\u0006",
    "\u0004\u000245\u0007\u0005\u0002\u00025\t\u0003\u0002\u0002\u000267",
    "\u0007\u0006\u0002\u000278\u0005\u0016\f\u000289\u0005\f\u0007\u0002",
    "9:\u0007\u001c\u0002\u0002:\u000b\u0003\u0002\u0002\u0002;<\u0007\u0007",
    "\u0002\u0002<\r\u0003\u0002\u0002\u0002=>\u0007\b\u0002\u0002>\u000f",
    "\u0003\u0002\u0002\u0002?@\u0007\t\u0002\u0002@A\u0005\u0012\n\u0002",
    "AB\u0005\u0016\f\u0002B\u0011\u0003\u0002\u0002\u0002CD\u0007\n\u0002",
    "\u0002D\u0013\u0003\u0002\u0002\u0002EF\u0007\u001b\u0002\u0002FG\u0007",
    "\u000b\u0002\u0002GJ\u0007\u001b\u0002\u0002HJ\u0007\u001b\u0002\u0002",
    "IE\u0003\u0002\u0002\u0002IH\u0003\u0002\u0002\u0002J\u0015\u0003\u0002",
    "\u0002\u0002KL\u0005\u0014\u000b\u0002LM\u0005\u0014\u000b\u0002MN\u0005",
    "\u0014\u000b\u0002NQ\u0003\u0002\u0002\u0002OQ\u0007\f\u0002\u0002P",
    "K\u0003\u0002\u0002\u0002PO\u0003\u0002\u0002\u0002Q\u0017\u0003\u0002",
    "\u0002\u0002RS\u0007\u001c\u0002\u0002SW\u0007\r\u0002\u0002TV\u0005",
    "\u001e\u0010\u0002UT\u0003\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002",
    "WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002X\u0019\u0003\u0002",
    "\u0002\u0002YW\u0003\u0002\u0002\u0002Z[\u0007\u000e\u0002\u0002[l\u0005",
    "\u001c\u000f\u0002\\]\u0007\u000e\u0002\u0002]^\u0005\u001c\u000f\u0002",
    "^_\u0007\u001c\u0002\u0002_`\u0007\u001c\u0002\u0002`a\u0007\u000f\u0002",
    "\u0002ab\u0007\u001c\u0002\u0002bl\u0003\u0002\u0002\u0002cd\u0007\u000e",
    "\u0002\u0002de\u0005\u001c\u000f\u0002ef\u0007\u001c\u0002\u0002fg\u0007",
    "\u0010\u0002\u0002gi\u0007\u001c\u0002\u0002hj\u0007\u001c\u0002\u0002",
    "ih\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jl\u0003\u0002\u0002",
    "\u0002kZ\u0003\u0002\u0002\u0002k\\\u0003\u0002\u0002\u0002kc\u0003",
    "\u0002\u0002\u0002l\u001b\u0003\u0002\u0002\u0002mn\t\u0002\u0002\u0002",
    "n\u001d\u0003\u0002\u0002\u0002op\b\u0010\u0001\u0002pw\u0007\u001b",
    "\u0002\u0002qw\u0007\u001c\u0002\u0002rs\u0007\u0018\u0002\u0002st\u0005",
    "\u001e\u0010\u0002tu\u0007\u0019\u0002\u0002uw\u0003\u0002\u0002\u0002",
    "vo\u0003\u0002\u0002\u0002vq\u0003\u0002\u0002\u0002vr\u0003\u0002\u0002",
    "\u0002w\u0080\u0003\u0002\u0002\u0002xy\f\u0007\u0002\u0002yz\t\u0003",
    "\u0002\u0002z\u007f\u0005\u001e\u0010\b{|\f\u0006\u0002\u0002|}\t\u0004",
    "\u0002\u0002}\u007f\u0005\u001e\u0010\u0007~x\u0003\u0002\u0002\u0002",
    "~{\u0003\u0002\u0002\u0002\u007f\u0082\u0003\u0002\u0002\u0002\u0080",
    "~\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002\u0081",
    "\u001f\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002\f",
    "&.IPWikv~\u0080"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mcbParser extends antlr4.Parser {

    static grammarFileName = "mcb.g4";
    static literalNames = [ null, "'if'", "'then'", "'endif'", "'block'", 
                            "'=='", "'>='", "'@'", "'position'", "'.'", 
                            "'here'", "'='", "'#'", "'at'", "'as'", "'dict'", 
                            "'score'", "'*'", "'/'", "'%'", "'+'", "'-'", 
                            "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "NEWLINE", "INT", "CHAR", "WS" ];
    static ruleNames = [ "chunk", "block", "stat", "statmentIF", "exestat", 
                         "expEqual", "expGreaterThanEqual", "annotation", 
                         "annPosition", "number", "position", "equat", "def", 
                         "defNamespace", "expr" ];

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
    	case 14:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	chunk() {
	    let localctx = new ChunkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, mcbParser.RULE_chunk);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.block();
	        this.state = 31;
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, mcbParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.T__0) | (1 << mcbParser.T__6) | (1 << mcbParser.T__11) | (1 << mcbParser.NEWLINE) | (1 << mcbParser.CHAR))) !== 0)) {
	            this.state = 33;
	            this.stat();
	            this.state = 38;
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



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, mcbParser.RULE_stat);
	    try {
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.T__11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.def();
	            break;
	        case mcbParser.T__0:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.statmentIF();
	            break;
	        case mcbParser.NEWLINE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 41;
	            this.match(mcbParser.NEWLINE);
	            break;
	        case mcbParser.CHAR:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 42;
	            this.equat();
	            break;
	        case mcbParser.T__6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 43;
	            this.annotation();
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



	statmentIF() {
	    let localctx = new StatmentIFContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, mcbParser.RULE_statmentIF);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(mcbParser.T__0);
	        this.state = 47;
	        this.exestat();
	        this.state = 48;
	        this.match(mcbParser.T__1);
	        this.state = 49;
	        this.stat();
	        this.state = 50;
	        this.match(mcbParser.T__2);
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



	exestat() {
	    let localctx = new ExestatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, mcbParser.RULE_exestat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(mcbParser.T__3);
	        this.state = 53;
	        this.position();
	        this.state = 54;
	        this.expEqual();
	        this.state = 55;
	        this.match(mcbParser.CHAR);
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



	expEqual() {
	    let localctx = new ExpEqualContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, mcbParser.RULE_expEqual);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(mcbParser.T__4);
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



	expGreaterThanEqual() {
	    let localctx = new ExpGreaterThanEqualContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, mcbParser.RULE_expGreaterThanEqual);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(mcbParser.T__5);
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



	annotation() {
	    let localctx = new AnnotationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, mcbParser.RULE_annotation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(mcbParser.T__6);
	        this.state = 62;
	        this.annPosition();
	        this.state = 63;
	        this.position();
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



	annPosition() {
	    let localctx = new AnnPositionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, mcbParser.RULE_annPosition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(mcbParser.T__7);
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, mcbParser.RULE_number);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 67;
	            this.match(mcbParser.INT);
	            this.state = 68;
	            this.match(mcbParser.T__8);
	            this.state = 69;
	            this.match(mcbParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.match(mcbParser.INT);
	            break;

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



	position() {
	    let localctx = new PositionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, mcbParser.RULE_position);
	    try {
	        this.state = 78;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.INT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 73;
	            this.number();
	            this.state = 74;
	            this.number();
	            this.state = 75;
	            this.number();
	            break;
	        case mcbParser.T__9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.match(mcbParser.T__9);
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



	equat() {
	    let localctx = new EquatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, mcbParser.RULE_equat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(mcbParser.CHAR);
	        this.state = 81;
	        this.match(mcbParser.T__10);
	        this.state = 85;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 82;
	                this.expr(0); 
	            }
	            this.state = 87;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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



	def() {
	    let localctx = new DefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, mcbParser.RULE_def);
	    try {
	        this.state = 105;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.match(mcbParser.T__11);
	            this.state = 89;
	            this.defNamespace();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.match(mcbParser.T__11);
	            this.state = 91;
	            this.defNamespace();
	            this.state = 92;
	            this.match(mcbParser.CHAR);
	            this.state = 93;
	            this.match(mcbParser.CHAR);
	            this.state = 94;
	            this.match(mcbParser.T__12);
	            this.state = 95;
	            this.match(mcbParser.CHAR);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 97;
	            this.match(mcbParser.T__11);
	            this.state = 98;
	            this.defNamespace();
	            this.state = 99;
	            this.match(mcbParser.CHAR);
	            this.state = 100;
	            this.match(mcbParser.T__13);
	            this.state = 101;
	            this.match(mcbParser.CHAR);
	            this.state = 103;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            if(la_===1) {
	                this.state = 102;
	                this.match(mcbParser.CHAR);

	            }
	            break;

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



	defNamespace() {
	    let localctx = new DefNamespaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, mcbParser.RULE_defNamespace);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        _la = this._input.LA(1);
	        if(!(_la===mcbParser.T__14 || _la===mcbParser.T__15)) {
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, mcbParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.INT:
	            this.state = 110;
	            this.match(mcbParser.INT);
	            break;
	        case mcbParser.CHAR:
	            this.state = 111;
	            this.match(mcbParser.CHAR);
	            break;
	        case mcbParser.T__21:
	            this.state = 112;
	            this.match(mcbParser.T__21);
	            this.state = 113;
	            this.expr(0);
	            this.state = 114;
	            this.match(mcbParser.T__22);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 126;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 124;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expr);
	                    this.state = 118;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 119;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.T__16) | (1 << mcbParser.T__17) | (1 << mcbParser.T__18))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 120;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expr);
	                    this.state = 121;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 122;
	                    _la = this._input.LA(1);
	                    if(!(_la===mcbParser.T__19 || _la===mcbParser.T__20)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 123;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 128;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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


}

mcbParser.EOF = antlr4.Token.EOF;
mcbParser.T__0 = 1;
mcbParser.T__1 = 2;
mcbParser.T__2 = 3;
mcbParser.T__3 = 4;
mcbParser.T__4 = 5;
mcbParser.T__5 = 6;
mcbParser.T__6 = 7;
mcbParser.T__7 = 8;
mcbParser.T__8 = 9;
mcbParser.T__9 = 10;
mcbParser.T__10 = 11;
mcbParser.T__11 = 12;
mcbParser.T__12 = 13;
mcbParser.T__13 = 14;
mcbParser.T__14 = 15;
mcbParser.T__15 = 16;
mcbParser.T__16 = 17;
mcbParser.T__17 = 18;
mcbParser.T__18 = 19;
mcbParser.T__19 = 20;
mcbParser.T__20 = 21;
mcbParser.T__21 = 22;
mcbParser.T__22 = 23;
mcbParser.NEWLINE = 24;
mcbParser.INT = 25;
mcbParser.CHAR = 26;
mcbParser.WS = 27;

mcbParser.RULE_chunk = 0;
mcbParser.RULE_block = 1;
mcbParser.RULE_stat = 2;
mcbParser.RULE_statmentIF = 3;
mcbParser.RULE_exestat = 4;
mcbParser.RULE_expEqual = 5;
mcbParser.RULE_expGreaterThanEqual = 6;
mcbParser.RULE_annotation = 7;
mcbParser.RULE_annPosition = 8;
mcbParser.RULE_number = 9;
mcbParser.RULE_position = 10;
mcbParser.RULE_equat = 11;
mcbParser.RULE_def = 12;
mcbParser.RULE_defNamespace = 13;
mcbParser.RULE_expr = 14;

class ChunkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_chunk;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	EOF() {
	    return this.getToken(mcbParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterChunk(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitChunk(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitChunk(this);
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

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_stat;
    }

	def() {
	    return this.getTypedRuleContext(DefContext,0);
	};

	statmentIF() {
	    return this.getTypedRuleContext(StatmentIFContext,0);
	};

	NEWLINE() {
	    return this.getToken(mcbParser.NEWLINE, 0);
	};

	equat() {
	    return this.getTypedRuleContext(EquatContext,0);
	};

	annotation() {
	    return this.getTypedRuleContext(AnnotationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatmentIFContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_statmentIF;
    }

	exestat() {
	    return this.getTypedRuleContext(ExestatContext,0);
	};

	stat() {
	    return this.getTypedRuleContext(StatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterStatmentIF(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitStatmentIF(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitStatmentIF(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExestatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_exestat;
    }

	position() {
	    return this.getTypedRuleContext(PositionContext,0);
	};

	expEqual() {
	    return this.getTypedRuleContext(ExpEqualContext,0);
	};

	CHAR() {
	    return this.getToken(mcbParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterExestat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitExestat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitExestat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpEqualContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_expEqual;
    }


	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterExpEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitExpEqual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitExpEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpGreaterThanEqualContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_expGreaterThanEqual;
    }


	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterExpGreaterThanEqual(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitExpGreaterThanEqual(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitExpGreaterThanEqual(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AnnotationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_annotation;
    }

	annPosition() {
	    return this.getTypedRuleContext(AnnPositionContext,0);
	};

	position() {
	    return this.getTypedRuleContext(PositionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterAnnotation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitAnnotation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitAnnotation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AnnPositionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_annPosition;
    }


	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterAnnPosition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitAnnPosition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitAnnPosition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_number;
    }

	INT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.INT);
	    } else {
	        return this.getToken(mcbParser.INT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PositionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_position;
    }

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterPosition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitPosition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitPosition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EquatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_equat;
    }

	CHAR() {
	    return this.getToken(mcbParser.CHAR, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterEquat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitEquat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitEquat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_def;
    }

	defNamespace() {
	    return this.getTypedRuleContext(DefNamespaceContext,0);
	};

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.CHAR);
	    } else {
	        return this.getToken(mcbParser.CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitDef(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DefNamespaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_defNamespace;
    }


	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterDefNamespace(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitDefNamespace(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitDefNamespace(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_expr;
    }

	INT() {
	    return this.getToken(mcbParser.INT, 0);
	};

	CHAR() {
	    return this.getToken(mcbParser.CHAR, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




mcbParser.ChunkContext = ChunkContext; 
mcbParser.BlockContext = BlockContext; 
mcbParser.StatContext = StatContext; 
mcbParser.StatmentIFContext = StatmentIFContext; 
mcbParser.ExestatContext = ExestatContext; 
mcbParser.ExpEqualContext = ExpEqualContext; 
mcbParser.ExpGreaterThanEqualContext = ExpGreaterThanEqualContext; 
mcbParser.AnnotationContext = AnnotationContext; 
mcbParser.AnnPositionContext = AnnPositionContext; 
mcbParser.NumberContext = NumberContext; 
mcbParser.PositionContext = PositionContext; 
mcbParser.EquatContext = EquatContext; 
mcbParser.DefContext = DefContext; 
mcbParser.DefNamespaceContext = DefNamespaceContext; 
mcbParser.ExprContext = ExprContext; 
