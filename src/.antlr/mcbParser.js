// Generated from e:\_Project\nodejs\mcb\src\mcb.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mcbListener from './mcbListener.js';
import mcbVisitor from './mcbVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\"\u00aa\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003",
    "-\n\u0003\f\u0003\u000e\u00030\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u00046\n\u0004\f\u0004\u000e\u00049\u000b\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005B\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006K\n\u0006",
    "\f\u0006\u000e\u0006N\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0005\fg\n\f\u0003\r\u0003\r\u0003\r\u0007",
    "\rl\n\r\f\r\u000e\ro\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u007f",
    "\n\u000e\u0005\u000e\u0081\n\u000e\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u008d\n\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u0095\n\u0010",
    "\f\u0010\u000e\u0010\u0098\u000b\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0005\u0011\u009e\n\u0011\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0002\u0004\n\u001e\u0015\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$&\u0002\u0005\u0004\u0002\u0011\u0011\u0013\u0013\u0003\u0002\u0015",
    "\u0017\u0003\u0002\u0018\u0019\u0002\u00a8\u0002(\u0003\u0002\u0002",
    "\u0002\u0004.\u0003\u0002\u0002\u0002\u00061\u0003\u0002\u0002\u0002",
    "\bA\u0003\u0002\u0002\u0002\nC\u0003\u0002\u0002\u0002\fO\u0003\u0002",
    "\u0002\u0002\u000eR\u0003\u0002\u0002\u0002\u0010X\u0003\u0002\u0002",
    "\u0002\u0012]\u0003\u0002\u0002\u0002\u0014_\u0003\u0002\u0002\u0002",
    "\u0016f\u0003\u0002\u0002\u0002\u0018h\u0003\u0002\u0002\u0002\u001a",
    "\u0080\u0003\u0002\u0002\u0002\u001c\u0082\u0003\u0002\u0002\u0002\u001e",
    "\u008c\u0003\u0002\u0002\u0002 \u009d\u0003\u0002\u0002\u0002\"\u009f",
    "\u0003\u0002\u0002\u0002$\u00a2\u0003\u0002\u0002\u0002&\u00a4\u0003",
    "\u0002\u0002\u0002()\u0005\u0004\u0003\u0002)*\u0007\u0002\u0002\u0003",
    "*\u0003\u0003\u0002\u0002\u0002+-\u0005\u0006\u0004\u0002,+\u0003\u0002",
    "\u0002\u0002-0\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003",
    "\u0002\u0002\u0002/\u0005\u0003\u0002\u0002\u00020.\u0003\u0002\u0002",
    "\u000212\u0007\u0003\u0002\u000223\u0007!\u0002\u000237\u0007\u0004",
    "\u0002\u000246\u0005\b\u0005\u000254\u0003\u0002\u0002\u000269\u0003",
    "\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u0002",
    "8:\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:;\u0007\u0005\u0002",
    "\u0002;\u0007\u0003\u0002\u0002\u0002<B\u0005\u001a\u000e\u0002=B\u0005",
    "\u000e\b\u0002>B\u0007\u001f\u0002\u0002?B\u0005\u0018\r\u0002@B\u0005",
    "\n\u0006\u0002A<\u0003\u0002\u0002\u0002A=\u0003\u0002\u0002\u0002A",
    ">\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002A@\u0003\u0002\u0002",
    "\u0002B\t\u0003\u0002\u0002\u0002CD\b\u0006\u0001\u0002DE\u0007\u0006",
    "\u0002\u0002EF\u0005\f\u0007\u0002FL\u0003\u0002\u0002\u0002GH\f\u0003",
    "\u0002\u0002HI\u0007\u0006\u0002\u0002IK\u0005\f\u0007\u0002JG\u0003",
    "\u0002\u0002\u0002KN\u0003\u0002\u0002\u0002LJ\u0003\u0002\u0002\u0002",
    "LM\u0003\u0002\u0002\u0002M\u000b\u0003\u0002\u0002\u0002NL\u0003\u0002",
    "\u0002\u0002OP\u0007\u0007\u0002\u0002PQ\u0005\u0016\f\u0002Q\r\u0003",
    "\u0002\u0002\u0002RS\u0007\b\u0002\u0002ST\u0005\u0010\t\u0002TU\u0007",
    "\t\u0002\u0002UV\u0005\b\u0005\u0002VW\u0007\n\u0002\u0002W\u000f\u0003",
    "\u0002\u0002\u0002XY\u0007\u000b\u0002\u0002YZ\u0005\u0016\f\u0002Z",
    "[\u0005\u0012\n\u0002[\\\u0007!\u0002\u0002\\\u0011\u0003\u0002\u0002",
    "\u0002]^\u0007\f\u0002\u0002^\u0013\u0003\u0002\u0002\u0002_`\u0007",
    "\r\u0002\u0002`\u0015\u0003\u0002\u0002\u0002ab\u0005 \u0011\u0002b",
    "c\u0005 \u0011\u0002cd\u0005 \u0011\u0002dg\u0003\u0002\u0002\u0002",
    "eg\u0007\u000e\u0002\u0002fa\u0003\u0002\u0002\u0002fe\u0003\u0002\u0002",
    "\u0002g\u0017\u0003\u0002\u0002\u0002hi\u0005&\u0014\u0002im\u0007\u000f",
    "\u0002\u0002jl\u0005\u001e\u0010\u0002kj\u0003\u0002\u0002\u0002lo\u0003",
    "\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002",
    "n\u0019\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002pq\u0007\u0010",
    "\u0002\u0002q\u0081\u0005\u001c\u000f\u0002rs\u0007\u0010\u0002\u0002",
    "st\u0007\u0011\u0002\u0002tu\u0007!\u0002\u0002uv\u0007!\u0002\u0002",
    "vw\u0007\u0012\u0002\u0002w\u0081\u0007!\u0002\u0002xy\u0007\u0010\u0002",
    "\u0002yz\u0007\u0013\u0002\u0002z{\u0007!\u0002\u0002{|\u0007\u0014",
    "\u0002\u0002|~\u0007!\u0002\u0002}\u007f\u0007!\u0002\u0002~}\u0003",
    "\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0081\u0003",
    "\u0002\u0002\u0002\u0080p\u0003\u0002\u0002\u0002\u0080r\u0003\u0002",
    "\u0002\u0002\u0080x\u0003\u0002\u0002\u0002\u0081\u001b\u0003\u0002",
    "\u0002\u0002\u0082\u0083\t\u0002\u0002\u0002\u0083\u001d\u0003\u0002",
    "\u0002\u0002\u0084\u0085\b\u0010\u0001\u0002\u0085\u008d\u0005\"\u0012",
    "\u0002\u0086\u008d\u0005$\u0013\u0002\u0087\u008d\u0005&\u0014\u0002",
    "\u0088\u0089\u0007\u001a\u0002\u0002\u0089\u008a\u0005\u001e\u0010\u0002",
    "\u008a\u008b\u0007\u001b\u0002\u0002\u008b\u008d\u0003\u0002\u0002\u0002",
    "\u008c\u0084\u0003\u0002\u0002\u0002\u008c\u0086\u0003\u0002\u0002\u0002",
    "\u008c\u0087\u0003\u0002\u0002\u0002\u008c\u0088\u0003\u0002\u0002\u0002",
    "\u008d\u0096\u0003\u0002\u0002\u0002\u008e\u008f\f\b\u0002\u0002\u008f",
    "\u0090\t\u0003\u0002\u0002\u0090\u0095\u0005\u001e\u0010\t\u0091\u0092",
    "\f\u0007\u0002\u0002\u0092\u0093\t\u0004\u0002\u0002\u0093\u0095\u0005",
    "\u001e\u0010\b\u0094\u008e\u0003\u0002\u0002\u0002\u0094\u0091\u0003",
    "\u0002\u0002\u0002\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0094\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u001f\u0003",
    "\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0099\u009a\u0007",
    " \u0002\u0002\u009a\u009b\u0007\u001c\u0002\u0002\u009b\u009e\u0007",
    " \u0002\u0002\u009c\u009e\u0007 \u0002\u0002\u009d\u0099\u0003\u0002",
    "\u0002\u0002\u009d\u009c\u0003\u0002\u0002\u0002\u009e!\u0003\u0002",
    "\u0002\u0002\u009f\u00a0\u0007\u0019\u0002\u0002\u00a0\u00a1\u0005$",
    "\u0013\u0002\u00a1#\u0003\u0002\u0002\u0002\u00a2\u00a3\u0007 \u0002",
    "\u0002\u00a3%\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007!\u0002\u0002",
    "\u00a5\u00a6\u0007\u001d\u0002\u0002\u00a6\u00a7\u0007!\u0002\u0002",
    "\u00a7\u00a8\u0007\u001e\u0002\u0002\u00a8\'\u0003\u0002\u0002\u0002",
    "\u000e.7ALfm~\u0080\u008c\u0094\u0096\u009d"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mcbParser extends antlr4.Parser {

    static grammarFileName = "mcb.g4";
    static literalNames = [ null, "'fun'", "':'", "'end'", "'@'", "'position'", 
                            "'if'", "'then'", "'endif'", "'block'", "'=='", 
                            "'>='", "'here'", "'='", "'#'", "'dict'", "'at'", 
                            "'score'", "'as'", "'*'", "'/'", "'%'", "'+'", 
                            "'-'", "'('", "')'", "'.'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "NEWLINE", "INT", 
                             "CHAR", "WS" ];
    static ruleNames = [ "chunk", "block", "func", "stat", "annotation", 
                         "annTarget", "statementIF", "exestat", "expEqual", 
                         "expGreaterThanEqual", "position", "equation", 
                         "def", "defNamespace", "expr", "number", "minusNumberInt", 
                         "numberInt", "exprVariable" ];

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
    	case 4:
    	    		return this.annotation_sempred(localctx, predIndex);
    	case 14:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    annotation_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
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
	        this.state = 38;
	        this.block();
	        this.state = 39;
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
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.T__0) {
	            this.state = 41;
	            this.func();
	            this.state = 46;
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



	func() {
	    let localctx = new FuncContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, mcbParser.RULE_func);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(mcbParser.T__0);
	        this.state = 48;
	        this.match(mcbParser.CHAR);
	        this.state = 49;
	        this.match(mcbParser.T__1);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.T__3) | (1 << mcbParser.T__5) | (1 << mcbParser.T__13) | (1 << mcbParser.NEWLINE) | (1 << mcbParser.CHAR))) !== 0)) {
	            this.state = 50;
	            this.stat();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
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



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, mcbParser.RULE_stat);
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.T__13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.def();
	            break;
	        case mcbParser.T__5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
	            this.statementIF();
	            break;
	        case mcbParser.NEWLINE:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.match(mcbParser.NEWLINE);
	            break;
	        case mcbParser.CHAR:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 61;
	            this.equation();
	            break;
	        case mcbParser.T__3:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 62;
	            this.annotation(0);
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


	annotation(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AnnotationContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, mcbParser.RULE_annotation, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(mcbParser.T__3);
	        this.state = 67;
	        this.annTarget();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new AnnotationContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_annotation);
	                this.state = 69;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 70;
	                this.match(mcbParser.T__3);
	                this.state = 71;
	                this.annTarget(); 
	            }
	            this.state = 76;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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



	annTarget() {
	    let localctx = new AnnTargetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, mcbParser.RULE_annTarget);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.match(mcbParser.T__4);
	        this.state = 78;
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



	statementIF() {
	    let localctx = new StatementIFContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, mcbParser.RULE_statementIF);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(mcbParser.T__5);
	        this.state = 81;
	        this.exestat();
	        this.state = 82;
	        this.match(mcbParser.T__6);
	        this.state = 83;
	        this.stat();
	        this.state = 84;
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



	exestat() {
	    let localctx = new ExestatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, mcbParser.RULE_exestat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(mcbParser.T__8);
	        this.state = 87;
	        this.position();
	        this.state = 88;
	        this.expEqual();
	        this.state = 89;
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
	    this.enterRule(localctx, 16, mcbParser.RULE_expEqual);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(mcbParser.T__9);
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
	    this.enterRule(localctx, 18, mcbParser.RULE_expGreaterThanEqual);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(mcbParser.T__10);
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
	        this.state = 100;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.INT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.number();
	            this.state = 96;
	            this.number();
	            this.state = 97;
	            this.number();
	            break;
	        case mcbParser.T__11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 99;
	            this.match(mcbParser.T__11);
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
	    this.enterRule(localctx, 22, mcbParser.RULE_equation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.exprVariable();
	        this.state = 103;
	        this.match(mcbParser.T__12);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 104;
	                this.expr(0); 
	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.match(mcbParser.T__13);
	            this.state = 111;
	            this.defNamespace();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.match(mcbParser.T__13);
	            this.state = 113;
	            this.match(mcbParser.T__14);
	            this.state = 114;
	            this.match(mcbParser.CHAR);
	            this.state = 115;
	            this.match(mcbParser.CHAR);
	            this.state = 116;
	            this.match(mcbParser.T__15);
	            this.state = 117;
	            this.match(mcbParser.CHAR);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 118;
	            this.match(mcbParser.T__13);
	            this.state = 119;
	            this.match(mcbParser.T__16);
	            this.state = 120;
	            this.match(mcbParser.CHAR);
	            this.state = 121;
	            this.match(mcbParser.T__17);
	            this.state = 122;
	            this.match(mcbParser.CHAR);
	            this.state = 124;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 123;
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
	        this.state = 128;
	        _la = this._input.LA(1);
	        if(!(_la===mcbParser.T__14 || _la===mcbParser.T__16)) {
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
	        this.state = 138;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.T__22:
	            this.state = 131;
	            this.minusNumberInt();
	            break;
	        case mcbParser.INT:
	            this.state = 132;
	            this.numberInt();
	            break;
	        case mcbParser.CHAR:
	            this.state = 133;
	            this.exprVariable();
	            break;
	        case mcbParser.T__23:
	            this.state = 134;
	            this.match(mcbParser.T__23);
	            this.state = 135;
	            this.expr(0);
	            this.state = 136;
	            this.match(mcbParser.T__24);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 148;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 146;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expr);
	                    this.state = 140;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 141;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.T__18) | (1 << mcbParser.T__19) | (1 << mcbParser.T__20))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 142;
	                    this.expr(7);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expr);
	                    this.state = 143;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 144;
	                    _la = this._input.LA(1);
	                    if(!(_la===mcbParser.T__21 || _la===mcbParser.T__22)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 145;
	                    this.expr(6);
	                    break;

	                } 
	            }
	            this.state = 150;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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
	    this.enterRule(localctx, 30, mcbParser.RULE_number);
	    try {
	        this.state = 155;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.match(mcbParser.INT);
	            this.state = 152;
	            this.match(mcbParser.T__25);
	            this.state = 153;
	            this.match(mcbParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
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
	    this.enterRule(localctx, 32, mcbParser.RULE_minusNumberInt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(mcbParser.T__22);
	        this.state = 158;
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
	    this.enterRule(localctx, 34, mcbParser.RULE_numberInt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
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
	    this.enterRule(localctx, 36, mcbParser.RULE_exprVariable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(mcbParser.CHAR);
	        this.state = 163;
	        this.match(mcbParser.T__26);
	        this.state = 164;
	        this.match(mcbParser.CHAR);
	        this.state = 165;
	        this.match(mcbParser.T__27);
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
mcbParser.T__26 = 27;
mcbParser.T__27 = 28;
mcbParser.NEWLINE = 29;
mcbParser.INT = 30;
mcbParser.CHAR = 31;
mcbParser.WS = 32;

mcbParser.RULE_chunk = 0;
mcbParser.RULE_block = 1;
mcbParser.RULE_func = 2;
mcbParser.RULE_stat = 3;
mcbParser.RULE_annotation = 4;
mcbParser.RULE_annTarget = 5;
mcbParser.RULE_statementIF = 6;
mcbParser.RULE_exestat = 7;
mcbParser.RULE_expEqual = 8;
mcbParser.RULE_expGreaterThanEqual = 9;
mcbParser.RULE_position = 10;
mcbParser.RULE_equation = 11;
mcbParser.RULE_def = 12;
mcbParser.RULE_defNamespace = 13;
mcbParser.RULE_expr = 14;
mcbParser.RULE_number = 15;
mcbParser.RULE_minusNumberInt = 16;
mcbParser.RULE_numberInt = 17;
mcbParser.RULE_exprVariable = 18;

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

	func = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncContext);
	    } else {
	        return this.getTypedRuleContext(FuncContext,i);
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



class FuncContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_func;
    }

	CHAR() {
	    return this.getToken(mcbParser.CHAR, 0);
	};

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
	        listener.enterFunc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitFunc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitFunc(this);
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

	statementIF() {
	    return this.getTypedRuleContext(StatementIFContext,0);
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

	annTarget() {
	    return this.getTypedRuleContext(AnnTargetContext,0);
	};

	annotation() {
	    return this.getTypedRuleContext(AnnotationContext,0);
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



class AnnTargetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_annTarget;
    }

	position() {
	    return this.getTypedRuleContext(PositionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterAnnTarget(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitAnnTarget(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitAnnTarget(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementIFContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_statementIF;
    }

	exestat() {
	    return this.getTypedRuleContext(ExestatContext,0);
	};

	stat() {
	    return this.getTypedRuleContext(StatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.enterStatementIF(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitStatementIF(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitStatementIF(this);
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
mcbParser.FuncContext = FuncContext; 
mcbParser.StatContext = StatContext; 
mcbParser.AnnotationContext = AnnotationContext; 
mcbParser.AnnTargetContext = AnnTargetContext; 
mcbParser.StatementIFContext = StatementIFContext; 
mcbParser.ExestatContext = ExestatContext; 
mcbParser.ExpEqualContext = ExpEqualContext; 
mcbParser.ExpGreaterThanEqualContext = ExpGreaterThanEqualContext; 
mcbParser.PositionContext = PositionContext; 
mcbParser.EquationContext = EquationContext; 
mcbParser.DefContext = DefContext; 
mcbParser.DefNamespaceContext = DefNamespaceContext; 
mcbParser.ExprContext = ExprContext; 
mcbParser.NumberContext = NumberContext; 
mcbParser.MinusNumberIntContext = MinusNumberIntContext; 
mcbParser.NumberIntContext = NumberIntContext; 
mcbParser.ExprVariableContext = ExprVariableContext; 
