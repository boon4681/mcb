// Generated from ./src/mcb.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mcbListener from './mcbListener.js';
import mcbVisitor from './mcbVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001az\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0007\u0003!\n\u0003\f\u0003\u000e\u0003$\u000b\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004*\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0005\nC\n\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0005\u000bJ\n\u000b\u0003\f\u0003\f\u0003",
    "\f\u0007\fO\n\f\f\f\u000e\fR\u000b\f\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\rb\n\r\u0005\rd\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000em\n\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0007\u000eu\n\u000e\f\u000e\u000e\u000ex\u000b\u000e\u0003\u000e\u0002",
    "\u0003\u001a\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u0002\u0004\u0003\u0002\u0010\u0012\u0003\u0002\u0013\u0014",
    "\u0002z\u0002\u001c\u0003\u0002\u0002\u0002\u0004\"\u0003\u0002\u0002",
    "\u0002\u0006)\u0003\u0002\u0002\u0002\b+\u0003\u0002\u0002\u0002\n1",
    "\u0003\u0002\u0002\u0002\f6\u0003\u0002\u0002\u0002\u000e8\u0003\u0002",
    "\u0002\u0002\u0010:\u0003\u0002\u0002\u0002\u0012B\u0003\u0002\u0002",
    "\u0002\u0014I\u0003\u0002\u0002\u0002\u0016K\u0003\u0002\u0002\u0002",
    "\u0018c\u0003\u0002\u0002\u0002\u001al\u0003\u0002\u0002\u0002\u001c",
    "\u001d\u0005\u0004\u0003\u0002\u001d\u001e\u0007\u0002\u0002\u0003\u001e",
    "\u0003\u0003\u0002\u0002\u0002\u001f!\u0005\u0006\u0004\u0002 \u001f",
    "\u0003\u0002\u0002\u0002!$\u0003\u0002\u0002\u0002\" \u0003\u0002\u0002",
    "\u0002\"#\u0003\u0002\u0002\u0002#\u0005\u0003\u0002\u0002\u0002$\"",
    "\u0003\u0002\u0002\u0002%*\u0005\u0018\r\u0002&*\u0007\u0017\u0002\u0002",
    "\'*\u0005\u0016\f\u0002(*\u0005\b\u0005\u0002)%\u0003\u0002\u0002\u0002",
    ")&\u0003\u0002\u0002\u0002)\'\u0003\u0002\u0002\u0002)(\u0003\u0002",
    "\u0002\u0002*\u0007\u0003\u0002\u0002\u0002+,\u0007\u0003\u0002\u0002",
    ",-\u0005\n\u0006\u0002-.\u0007\u0004\u0002\u0002./\u0005\u0006\u0004",
    "\u0002/0\u0007\u0005\u0002\u00020\t\u0003\u0002\u0002\u000212\u0007",
    "\u0006\u0002\u000223\u0005\u0014\u000b\u000234\u0005\f\u0007\u00024",
    "5\u0007\u0019\u0002\u00025\u000b\u0003\u0002\u0002\u000267\u0007\u0007",
    "\u0002\u00027\r\u0003\u0002\u0002\u000289\u0007\b\u0002\u00029\u000f",
    "\u0003\u0002\u0002\u0002:;\u0007\t\u0002\u0002;<\u0007\u0019\u0002\u0002",
    "<=\u0005\u0014\u000b\u0002=\u0011\u0003\u0002\u0002\u0002>?\u0007\u0018",
    "\u0002\u0002?@\u0007\n\u0002\u0002@C\u0007\u0018\u0002\u0002AC\u0007",
    "\u0018\u0002\u0002B>\u0003\u0002\u0002\u0002BA\u0003\u0002\u0002\u0002",
    "C\u0013\u0003\u0002\u0002\u0002DE\u0005\u0012\n\u0002EF\u0005\u0012",
    "\n\u0002FG\u0005\u0012\n\u0002GJ\u0003\u0002\u0002\u0002HJ\u0007\u000b",
    "\u0002\u0002ID\u0003\u0002\u0002\u0002IH\u0003\u0002\u0002\u0002J\u0015",
    "\u0003\u0002\u0002\u0002KL\u0007\u0019\u0002\u0002LP\u0007\f\u0002\u0002",
    "MO\u0005\u001a\u000e\u0002NM\u0003\u0002\u0002\u0002OR\u0003\u0002\u0002",
    "\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002Q\u0017\u0003",
    "\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002ST\u0007\r\u0002\u0002T",
    "d\u0007\u0019\u0002\u0002UV\u0007\r\u0002\u0002VW\u0007\u0019\u0002",
    "\u0002WX\u0007\u0019\u0002\u0002XY\u0007\u0019\u0002\u0002YZ\u0007\u000e",
    "\u0002\u0002Zd\u0007\u0019\u0002\u0002[\\\u0007\r\u0002\u0002\\]\u0007",
    "\u0019\u0002\u0002]^\u0007\u0019\u0002\u0002^_\u0007\u000f\u0002\u0002",
    "_a\u0007\u0019\u0002\u0002`b\u0007\u0019\u0002\u0002a`\u0003\u0002\u0002",
    "\u0002ab\u0003\u0002\u0002\u0002bd\u0003\u0002\u0002\u0002cS\u0003\u0002",
    "\u0002\u0002cU\u0003\u0002\u0002\u0002c[\u0003\u0002\u0002\u0002d\u0019",
    "\u0003\u0002\u0002\u0002ef\b\u000e\u0001\u0002fm\u0007\u0018\u0002\u0002",
    "gm\u0007\u0019\u0002\u0002hi\u0007\u0015\u0002\u0002ij\u0005\u001a\u000e",
    "\u0002jk\u0007\u0016\u0002\u0002km\u0003\u0002\u0002\u0002le\u0003\u0002",
    "\u0002\u0002lg\u0003\u0002\u0002\u0002lh\u0003\u0002\u0002\u0002mv\u0003",
    "\u0002\u0002\u0002no\f\u0007\u0002\u0002op\t\u0002\u0002\u0002pu\u0005",
    "\u001a\u000e\bqr\f\u0006\u0002\u0002rs\t\u0003\u0002\u0002su\u0005\u001a",
    "\u000e\u0007tn\u0003\u0002\u0002\u0002tq\u0003\u0002\u0002\u0002ux\u0003",
    "\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002",
    "w\u001b\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002\f\")BIPac",
    "ltv"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mcbParser extends antlr4.Parser {

    static grammarFileName = "mcb.g4";
    static literalNames = [ null, "'if'", "'then'", "'endif'", "'block'", 
                            "'=='", "'>='", "'@'", "'.'", "'here'", "'='", 
                            "'#'", "'at'", "'as'", "'*'", "'/'", "'%'", 
                            "'+'", "'-'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "NEWLINE", "INT", 
                             "CHAR", "WS" ];
    static ruleNames = [ "chunk", "block", "stat", "statmentIF", "exestat", 
                         "expEqual", "expGreaterThanEqual", "annotation", 
                         "number", "position", "equat", "def", "expr" ];

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
    	case 12:
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
	        this.state = 26;
	        this.block();
	        this.state = 27;
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
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.T__0) | (1 << mcbParser.T__10) | (1 << mcbParser.NEWLINE) | (1 << mcbParser.CHAR))) !== 0)) {
	            this.state = 29;
	            this.stat();
	            this.state = 34;
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
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.T__10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.def();
	            break;
	        case mcbParser.NEWLINE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.match(mcbParser.NEWLINE);
	            break;
	        case mcbParser.CHAR:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
	            this.equat();
	            break;
	        case mcbParser.T__0:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 38;
	            this.statmentIF();
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
	        this.state = 41;
	        this.match(mcbParser.T__0);
	        this.state = 42;
	        this.exestat();
	        this.state = 43;
	        this.match(mcbParser.T__1);
	        this.state = 44;
	        this.stat();
	        this.state = 45;
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
	        this.state = 47;
	        this.match(mcbParser.T__3);
	        this.state = 48;
	        this.position();
	        this.state = 49;
	        this.expEqual();
	        this.state = 50;
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
	        this.state = 52;
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
	        this.state = 54;
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
	        this.state = 56;
	        this.match(mcbParser.T__6);
	        this.state = 57;
	        this.match(mcbParser.CHAR);
	        this.state = 58;
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, mcbParser.RULE_number);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 60;
	            this.match(mcbParser.INT);
	            this.state = 61;
	            this.match(mcbParser.T__7);
	            this.state = 62;
	            this.match(mcbParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
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
	    this.enterRule(localctx, 18, mcbParser.RULE_position);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.INT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.number();
	            this.state = 67;
	            this.number();
	            this.state = 68;
	            this.number();
	            break;
	        case mcbParser.T__8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
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



	equat() {
	    let localctx = new EquatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, mcbParser.RULE_equat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(mcbParser.CHAR);
	        this.state = 74;
	        this.match(mcbParser.T__9);
	        this.state = 78;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 75;
	                this.expr(0); 
	            }
	            this.state = 80;
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
	    this.enterRule(localctx, 22, mcbParser.RULE_def);
	    try {
	        this.state = 97;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 81;
	            this.match(mcbParser.T__10);
	            this.state = 82;
	            this.match(mcbParser.CHAR);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.match(mcbParser.T__10);
	            this.state = 84;
	            this.match(mcbParser.CHAR);
	            this.state = 85;
	            this.match(mcbParser.CHAR);
	            this.state = 86;
	            this.match(mcbParser.CHAR);
	            this.state = 87;
	            this.match(mcbParser.T__11);
	            this.state = 88;
	            this.match(mcbParser.CHAR);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 89;
	            this.match(mcbParser.T__10);
	            this.state = 90;
	            this.match(mcbParser.CHAR);
	            this.state = 91;
	            this.match(mcbParser.CHAR);
	            this.state = 92;
	            this.match(mcbParser.T__12);
	            this.state = 93;
	            this.match(mcbParser.CHAR);
	            this.state = 95;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            if(la_===1) {
	                this.state = 94;
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, mcbParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.INT:
	            this.state = 100;
	            this.match(mcbParser.INT);
	            break;
	        case mcbParser.CHAR:
	            this.state = 101;
	            this.match(mcbParser.CHAR);
	            break;
	        case mcbParser.T__18:
	            this.state = 102;
	            this.match(mcbParser.T__18);
	            this.state = 103;
	            this.expr(0);
	            this.state = 104;
	            this.match(mcbParser.T__19);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 116;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 114;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expr);
	                    this.state = 108;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 109;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.T__13) | (1 << mcbParser.T__14) | (1 << mcbParser.T__15))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 110;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expr);
	                    this.state = 111;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 112;
	                    _la = this._input.LA(1);
	                    if(!(_la===mcbParser.T__16 || _la===mcbParser.T__17)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 113;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 118;
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
mcbParser.NEWLINE = 21;
mcbParser.INT = 22;
mcbParser.CHAR = 23;
mcbParser.WS = 24;

mcbParser.RULE_chunk = 0;
mcbParser.RULE_block = 1;
mcbParser.RULE_stat = 2;
mcbParser.RULE_statmentIF = 3;
mcbParser.RULE_exestat = 4;
mcbParser.RULE_expEqual = 5;
mcbParser.RULE_expGreaterThanEqual = 6;
mcbParser.RULE_annotation = 7;
mcbParser.RULE_number = 8;
mcbParser.RULE_position = 9;
mcbParser.RULE_equat = 10;
mcbParser.RULE_def = 11;
mcbParser.RULE_expr = 12;

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

	NEWLINE() {
	    return this.getToken(mcbParser.NEWLINE, 0);
	};

	equat() {
	    return this.getTypedRuleContext(EquatContext,0);
	};

	statmentIF() {
	    return this.getTypedRuleContext(StatmentIFContext,0);
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

	CHAR() {
	    return this.getToken(mcbParser.CHAR, 0);
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
mcbParser.NumberContext = NumberContext; 
mcbParser.PositionContext = PositionContext; 
mcbParser.EquatContext = EquatContext; 
mcbParser.DefContext = DefContext; 
mcbParser.ExprContext = ExprContext; 
