// Generated from e:\_Project\nodejs\mcb\src\mcb.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mcbListener from './mcbListener.js';
import mcbVisitor from './mcbVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003 \u009d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003+\n\u0003\f\u0003\u000e",
    "\u0003.\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u00045\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000bQ\n\u000b\u0003\f\u0003\f",
    "\u0003\f\u0007\fV\n\f\f\f\u000e\fY\u000b\f\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\ri\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\rr\n\r\u0005\rt\n\r\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u0080\n\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u0088\n\u000f",
    "\f\u000f\u000e\u000f\u008b\u000b\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0005\u0010\u0091\n\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0002\u0003\u001c\u0014\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e ",
    "\"$\u0002\u0005\u0004\u0002\u000e\u000e\u0010\u0010\u0003\u0002\u0013",
    "\u0015\u0003\u0002\u0016\u0017\u0002\u009c\u0002&\u0003\u0002\u0002",
    "\u0002\u0004,\u0003\u0002\u0002\u0002\u00064\u0003\u0002\u0002\u0002",
    "\b6\u0003\u0002\u0002\u0002\n<\u0003\u0002\u0002\u0002\fA\u0003\u0002",
    "\u0002\u0002\u000eC\u0003\u0002\u0002\u0002\u0010E\u0003\u0002\u0002",
    "\u0002\u0012I\u0003\u0002\u0002\u0002\u0014P\u0003\u0002\u0002\u0002",
    "\u0016R\u0003\u0002\u0002\u0002\u0018s\u0003\u0002\u0002\u0002\u001a",
    "u\u0003\u0002\u0002\u0002\u001c\u007f\u0003\u0002\u0002\u0002\u001e",
    "\u0090\u0003\u0002\u0002\u0002 \u0092\u0003\u0002\u0002\u0002\"\u0095",
    "\u0003\u0002\u0002\u0002$\u0097\u0003\u0002\u0002\u0002&\'\u0005\u0004",
    "\u0003\u0002\'(\u0007\u0002\u0002\u0003(\u0003\u0003\u0002\u0002\u0002",
    ")+\u0005\u0006\u0004\u0002*)\u0003\u0002\u0002\u0002+.\u0003\u0002\u0002",
    "\u0002,*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002-\u0005\u0003",
    "\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002/5\u0005\u0018\r\u00020",
    "5\u0005\b\u0005\u000215\u0007\u001d\u0002\u000225\u0005\u0016\f\u0002",
    "35\u0005\u0010\t\u00024/\u0003\u0002\u0002\u000240\u0003\u0002\u0002",
    "\u000241\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000243\u0003\u0002",
    "\u0002\u00025\u0007\u0003\u0002\u0002\u000267\u0007\u0003\u0002\u0002",
    "78\u0005\n\u0006\u000289\u0007\u0004\u0002\u00029:\u0005\u0006\u0004",
    "\u0002:;\u0007\u0005\u0002\u0002;\t\u0003\u0002\u0002\u0002<=\u0007",
    "\u0006\u0002\u0002=>\u0005\u0014\u000b\u0002>?\u0005\f\u0007\u0002?",
    "@\u0007\u001f\u0002\u0002@\u000b\u0003\u0002\u0002\u0002AB\u0007\u0007",
    "\u0002\u0002B\r\u0003\u0002\u0002\u0002CD\u0007\b\u0002\u0002D\u000f",
    "\u0003\u0002\u0002\u0002EF\u0007\t\u0002\u0002FG\u0005\u0012\n\u0002",
    "GH\u0005\u0014\u000b\u0002H\u0011\u0003\u0002\u0002\u0002IJ\u0007\n",
    "\u0002\u0002J\u0013\u0003\u0002\u0002\u0002KL\u0005\u001e\u0010\u0002",
    "LM\u0005\u001e\u0010\u0002MN\u0005\u001e\u0010\u0002NQ\u0003\u0002\u0002",
    "\u0002OQ\u0007\u000b\u0002\u0002PK\u0003\u0002\u0002\u0002PO\u0003\u0002",
    "\u0002\u0002Q\u0015\u0003\u0002\u0002\u0002RS\u0005$\u0013\u0002SW\u0007",
    "\f\u0002\u0002TV\u0005\u001c\u000f\u0002UT\u0003\u0002\u0002\u0002V",
    "Y\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002",
    "\u0002X\u0017\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002Z[\u0007",
    "\r\u0002\u0002[t\u0005\u001a\u000e\u0002\\]\u0007\r\u0002\u0002]^\u0007",
    "\u000e\u0002\u0002^_\u0007\u001f\u0002\u0002_`\u0007\u001f\u0002\u0002",
    "`a\u0007\u000f\u0002\u0002at\u0007\u001f\u0002\u0002bc\u0007\r\u0002",
    "\u0002cd\u0007\u0010\u0002\u0002de\u0007\u001f\u0002\u0002ef\u0007\u0011",
    "\u0002\u0002fh\u0007\u001f\u0002\u0002gi\u0007\u001f\u0002\u0002hg\u0003",
    "\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002it\u0003\u0002\u0002\u0002",
    "jk\u0007\r\u0002\u0002kl\u0007\u0010\u0002\u0002lm\u0007\u0012\u0002",
    "\u0002mn\u0007\u001f\u0002\u0002no\u0007\u0011\u0002\u0002oq\u0007\u001f",
    "\u0002\u0002pr\u0007\u001f\u0002\u0002qp\u0003\u0002\u0002\u0002qr\u0003",
    "\u0002\u0002\u0002rt\u0003\u0002\u0002\u0002sZ\u0003\u0002\u0002\u0002",
    "s\\\u0003\u0002\u0002\u0002sb\u0003\u0002\u0002\u0002sj\u0003\u0002",
    "\u0002\u0002t\u0019\u0003\u0002\u0002\u0002uv\t\u0002\u0002\u0002v\u001b",
    "\u0003\u0002\u0002\u0002wx\b\u000f\u0001\u0002x\u0080\u0005 \u0011\u0002",
    "y\u0080\u0005\"\u0012\u0002z\u0080\u0005$\u0013\u0002{|\u0007\u0018",
    "\u0002\u0002|}\u0005\u001c\u000f\u0002}~\u0007\u0019\u0002\u0002~\u0080",
    "\u0003\u0002\u0002\u0002\u007fw\u0003\u0002\u0002\u0002\u007fy\u0003",
    "\u0002\u0002\u0002\u007fz\u0003\u0002\u0002\u0002\u007f{\u0003\u0002",
    "\u0002\u0002\u0080\u0089\u0003\u0002\u0002\u0002\u0081\u0082\f\b\u0002",
    "\u0002\u0082\u0083\t\u0003\u0002\u0002\u0083\u0088\u0005\u001c\u000f",
    "\t\u0084\u0085\f\u0007\u0002\u0002\u0085\u0086\t\u0004\u0002\u0002\u0086",
    "\u0088\u0005\u001c\u000f\b\u0087\u0081\u0003\u0002\u0002\u0002\u0087",
    "\u0084\u0003\u0002\u0002\u0002\u0088\u008b\u0003\u0002\u0002\u0002\u0089",
    "\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a",
    "\u001d\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002\u008c",
    "\u008d\u0007\u001e\u0002\u0002\u008d\u008e\u0007\u001a\u0002\u0002\u008e",
    "\u0091\u0007\u001e\u0002\u0002\u008f\u0091\u0007\u001e\u0002\u0002\u0090",
    "\u008c\u0003\u0002\u0002\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091",
    "\u001f\u0003\u0002\u0002\u0002\u0092\u0093\u0007\u0017\u0002\u0002\u0093",
    "\u0094\u0005\"\u0012\u0002\u0094!\u0003\u0002\u0002\u0002\u0095\u0096",
    "\u0007\u001e\u0002\u0002\u0096#\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0007\u001f\u0002\u0002\u0098\u0099\u0007\u001b\u0002\u0002\u0099\u009a",
    "\u0007\u001f\u0002\u0002\u009a\u009b\u0007\u001c\u0002\u0002\u009b%",
    "\u0003\u0002\u0002\u0002\r,4PWhqs\u007f\u0087\u0089\u0090"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mcbParser extends antlr4.Parser {

    static grammarFileName = "mcb.g4";
    static literalNames = [ null, "'if'", "'then'", "'endif'", "'block'", 
                            "'=='", "'>='", "'@'", "'position'", "'here'", 
                            "'='", "'#'", "'dict'", "'at'", "'score'", "'as'", 
                            "'float'", "'*'", "'/'", "'%'", "'+'", "'-'", 
                            "'('", "')'", "'.'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "NEWLINE", "INT", "CHAR", 
                             "WS" ];
    static ruleNames = [ "chunk", "block", "stat", "statmentIF", "exestat", 
                         "expEqual", "expGreaterThanEqual", "annotation", 
                         "annPosition", "position", "equation", "def", "defNamespace", 
                         "expr", "number", "minusNumberInt", "numberInt", 
                         "exprVariable" ];

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
    	case 13:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	chunk() {
	    let localctx = new ChunkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, mcbParser.RULE_chunk);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.block();
	        this.state = 37;
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
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.T__0) | (1 << mcbParser.T__6) | (1 << mcbParser.T__10) | (1 << mcbParser.NEWLINE) | (1 << mcbParser.CHAR))) !== 0)) {
	            this.state = 39;
	            this.stat();
	            this.state = 44;
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
	        this.state = 50;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.T__10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 45;
	            this.def();
	            break;
	        case mcbParser.T__0:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46;
	            this.statmentIF();
	            break;
	        case mcbParser.NEWLINE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 47;
	            this.match(mcbParser.NEWLINE);
	            break;
	        case mcbParser.CHAR:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 48;
	            this.equation();
	            break;
	        case mcbParser.T__6:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 49;
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
	        this.state = 52;
	        this.match(mcbParser.T__0);
	        this.state = 53;
	        this.exestat();
	        this.state = 54;
	        this.match(mcbParser.T__1);
	        this.state = 55;
	        this.stat();
	        this.state = 56;
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
	        this.state = 58;
	        this.match(mcbParser.T__3);
	        this.state = 59;
	        this.position();
	        this.state = 60;
	        this.expEqual();
	        this.state = 61;
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
	        this.state = 63;
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
	        this.state = 65;
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
	        this.state = 67;
	        this.match(mcbParser.T__6);
	        this.state = 68;
	        this.annPosition();
	        this.state = 69;
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
	        this.state = 71;
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



	position() {
	    let localctx = new PositionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, mcbParser.RULE_position);
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
	        case mcbParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 77;
	            this.match(mcbParser.T__8);
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



	equation() {
	    let localctx = new EquationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, mcbParser.RULE_equation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.exprVariable();
	        this.state = 81;
	        this.match(mcbParser.T__9);
	        this.state = 85;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 82;
	                this.expr(0); 
	            }
	            this.state = 87;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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
	    this.enterRule(localctx, 22, mcbParser.RULE_def);
	    try {
	        this.state = 113;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.match(mcbParser.T__10);
	            this.state = 89;
	            this.defNamespace();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.match(mcbParser.T__10);
	            this.state = 91;
	            this.match(mcbParser.T__11);
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
	            this.state = 96;
	            this.match(mcbParser.T__10);
	            this.state = 97;
	            this.match(mcbParser.T__13);
	            this.state = 98;
	            this.match(mcbParser.CHAR);
	            this.state = 99;
	            this.match(mcbParser.T__14);
	            this.state = 100;
	            this.match(mcbParser.CHAR);
	            this.state = 102;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 101;
	                this.match(mcbParser.CHAR);

	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 104;
	            this.match(mcbParser.T__10);
	            this.state = 105;
	            this.match(mcbParser.T__13);
	            this.state = 106;
	            this.match(mcbParser.T__15);
	            this.state = 107;
	            this.match(mcbParser.CHAR);
	            this.state = 108;
	            this.match(mcbParser.T__14);
	            this.state = 109;
	            this.match(mcbParser.CHAR);
	            this.state = 111;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            if(la_===1) {
	                this.state = 110;
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
	    this.enterRule(localctx, 24, mcbParser.RULE_defNamespace);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        _la = this._input.LA(1);
	        if(!(_la===mcbParser.T__11 || _la===mcbParser.T__13)) {
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
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, mcbParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.T__20:
	            this.state = 118;
	            this.minusNumberInt();
	            break;
	        case mcbParser.INT:
	            this.state = 119;
	            this.numberInt();
	            break;
	        case mcbParser.CHAR:
	            this.state = 120;
	            this.exprVariable();
	            break;
	        case mcbParser.T__21:
	            this.state = 121;
	            this.match(mcbParser.T__21);
	            this.state = 122;
	            this.expr(0);
	            this.state = 123;
	            this.match(mcbParser.T__22);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 135;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 133;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expr);
	                    this.state = 127;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 128;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.T__16) | (1 << mcbParser.T__17) | (1 << mcbParser.T__18))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 129;
	                    this.expr(7);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expr);
	                    this.state = 130;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 131;
	                    _la = this._input.LA(1);
	                    if(!(_la===mcbParser.T__19 || _la===mcbParser.T__20)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 132;
	                    this.expr(6);
	                    break;

	                } 
	            }
	            this.state = 137;
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, mcbParser.RULE_number);
	    try {
	        this.state = 142;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.match(mcbParser.INT);
	            this.state = 139;
	            this.match(mcbParser.T__23);
	            this.state = 140;
	            this.match(mcbParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 141;
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



	minusNumberInt() {
	    let localctx = new MinusNumberIntContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, mcbParser.RULE_minusNumberInt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(mcbParser.T__20);
	        this.state = 145;
	        this.numberInt();
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



	numberInt() {
	    let localctx = new NumberIntContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, mcbParser.RULE_numberInt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(mcbParser.INT);
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



	exprVariable() {
	    let localctx = new ExprVariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, mcbParser.RULE_exprVariable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(mcbParser.CHAR);
	        this.state = 150;
	        this.match(mcbParser.T__24);
	        this.state = 151;
	        this.match(mcbParser.CHAR);
	        this.state = 152;
	        this.match(mcbParser.T__25);
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
mcbParser.T__23 = 24;
mcbParser.T__24 = 25;
mcbParser.T__25 = 26;
mcbParser.NEWLINE = 27;
mcbParser.INT = 28;
mcbParser.CHAR = 29;
mcbParser.WS = 30;

mcbParser.RULE_chunk = 0;
mcbParser.RULE_block = 1;
mcbParser.RULE_stat = 2;
mcbParser.RULE_statmentIF = 3;
mcbParser.RULE_exestat = 4;
mcbParser.RULE_expEqual = 5;
mcbParser.RULE_expGreaterThanEqual = 6;
mcbParser.RULE_annotation = 7;
mcbParser.RULE_annPosition = 8;
mcbParser.RULE_position = 9;
mcbParser.RULE_equation = 10;
mcbParser.RULE_def = 11;
mcbParser.RULE_defNamespace = 12;
mcbParser.RULE_expr = 13;
mcbParser.RULE_number = 14;
mcbParser.RULE_minusNumberInt = 15;
mcbParser.RULE_numberInt = 16;
mcbParser.RULE_exprVariable = 17;

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

	equation() {
	    return this.getTypedRuleContext(EquationContext,0);
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



class EquationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_equation;
    }

	exprVariable() {
	    return this.getTypedRuleContext(ExprVariableContext,0);
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
	        listener.enterEquation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitEquation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitEquation(this);
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

	minusNumberInt() {
	    return this.getTypedRuleContext(MinusNumberIntContext,0);
	};

	numberInt() {
	    return this.getTypedRuleContext(NumberIntContext,0);
	};

	exprVariable() {
	    return this.getTypedRuleContext(ExprVariableContext,0);
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



class MinusNumberIntContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_minusNumberInt;
    }

	numberInt() {
	    return this.getTypedRuleContext(NumberIntContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterMinusNumberInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitMinusNumberInt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitMinusNumberInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumberIntContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_numberInt;
    }

	INT() {
	    return this.getToken(mcbParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterNumberInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitNumberInt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitNumberInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprVariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_exprVariable;
    }

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
	        listener.enterExprVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitExprVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitExprVariable(this);
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
mcbParser.PositionContext = PositionContext; 
mcbParser.EquationContext = EquationContext; 
mcbParser.DefContext = DefContext; 
mcbParser.DefNamespaceContext = DefNamespaceContext; 
mcbParser.ExprContext = ExprContext; 
mcbParser.NumberContext = NumberContext; 
mcbParser.MinusNumberIntContext = MinusNumberIntContext; 
mcbParser.NumberIntContext = NumberIntContext; 
mcbParser.ExprVariableContext = ExprVariableContext; 
