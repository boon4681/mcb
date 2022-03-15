// Generated from e:\_Project\nodejs\mcb\src\mcb.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mcbListener from './mcbListener.js';
import mcbVisitor from './mcbVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u001e\u00e3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0007\u0003\'\n\u0003\f\u0003\u000e\u0003*\u000b\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u00040\n\u0004\f\u0004",
    "\u000e\u00043\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005:\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\bn\n\b\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\t\u009a\n\t\u0003\n\u0003\n\u0003\n\u0007\n",
    "\u009f\n\n\f\n\u000e\n\u00a2\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u00b2\n\u000b\u0005\u000b\u00b4\n\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00c0\n\r",
    "\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00c8\n\r\f",
    "\r\u000e\r\u00cb\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00d7\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0002\u0003\u0018\u0012\u0002\u0004\u0006\b\n\f\u000e",
    "\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \u0002\u0005\u0004",
    "\u0002\f\f\u000e\u000e\u0003\u0002\u0010\u0012\u0003\u0002\u0013\u0014",
    "\u0002\u00f1\u0002\"\u0003\u0002\u0002\u0002\u0004(\u0003\u0002\u0002",
    "\u0002\u0006+\u0003\u0002\u0002\u0002\b9\u0003\u0002\u0002\u0002\n;",
    "\u0003\u0002\u0002\u0002\f=\u0003\u0002\u0002\u0002\u000em\u0003\u0002",
    "\u0002\u0002\u0010\u0099\u0003\u0002\u0002\u0002\u0012\u009b\u0003\u0002",
    "\u0002\u0002\u0014\u00b3\u0003\u0002\u0002\u0002\u0016\u00b5\u0003\u0002",
    "\u0002\u0002\u0018\u00bf\u0003\u0002\u0002\u0002\u001a\u00d6\u0003\u0002",
    "\u0002\u0002\u001c\u00d8\u0003\u0002\u0002\u0002\u001e\u00db\u0003\u0002",
    "\u0002\u0002 \u00dd\u0003\u0002\u0002\u0002\"#\u0005\u0004\u0003\u0002",
    "#$\u0007\u0002\u0002\u0003$\u0003\u0003\u0002\u0002\u0002%\'\u0005\u0006",
    "\u0004\u0002&%\u0003\u0002\u0002\u0002\'*\u0003\u0002\u0002\u0002(&",
    "\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)\u0005\u0003\u0002",
    "\u0002\u0002*(\u0003\u0002\u0002\u0002+,\u0007\u0003\u0002\u0002,-\u0007",
    "\u001c\u0002\u0002-1\u0007\u0004\u0002\u0002.0\u0005\b\u0005\u0002/",
    ".\u0003\u0002\u0002\u000203\u0003\u0002\u0002\u00021/\u0003\u0002\u0002",
    "\u000212\u0003\u0002\u0002\u000224\u0003\u0002\u0002\u000231\u0003\u0002",
    "\u0002\u000245\u0007\u0005\u0002\u00025\u0007\u0003\u0002\u0002\u0002",
    "6:\u0005\u0014\u000b\u00027:\u0007\u001a\u0002\u00028:\u0005\u0012\n",
    "\u000296\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u000298\u0003\u0002",
    "\u0002\u0002:\t\u0003\u0002\u0002\u0002;<\u0007\u0006\u0002\u0002<\u000b",
    "\u0003\u0002\u0002\u0002=>\u0007\u0007\u0002\u0002>\r\u0003\u0002\u0002",
    "\u0002?@\u0005\u001a\u000e\u0002@A\u0005\u001a\u000e\u0002AB\u0005\u001a",
    "\u000e\u0002Bn\u0003\u0002\u0002\u0002CD\u0007\b\u0002\u0002DE\u0007",
    "\b\u0002\u0002En\u0007\b\u0002\u0002FG\u0007\b\u0002\u0002GH\u0005\u001a",
    "\u000e\u0002HI\u0007\b\u0002\u0002IJ\u0007\b\u0002\u0002Jn\u0003\u0002",
    "\u0002\u0002KL\u0007\b\u0002\u0002LM\u0007\b\u0002\u0002MN\u0005\u001a",
    "\u000e\u0002NO\u0007\b\u0002\u0002On\u0003\u0002\u0002\u0002PQ\u0007",
    "\b\u0002\u0002QR\u0007\b\u0002\u0002RS\u0007\b\u0002\u0002Sn\u0005\u001a",
    "\u000e\u0002TU\u0007\b\u0002\u0002UV\u0005\u001a\u000e\u0002VW\u0007",
    "\b\u0002\u0002WX\u0005\u001a\u000e\u0002XY\u0007\b\u0002\u0002Yn\u0003",
    "\u0002\u0002\u0002Z[\u0007\b\u0002\u0002[\\\u0007\b\u0002\u0002\\]\u0005",
    "\u001a\u000e\u0002]^\u0007\b\u0002\u0002^_\u0005\u001a\u000e\u0002_",
    "n\u0003\u0002\u0002\u0002`a\u0007\b\u0002\u0002ab\u0005\u001a\u000e",
    "\u0002bc\u0007\b\u0002\u0002cd\u0007\b\u0002\u0002de\u0005\u001a\u000e",
    "\u0002en\u0003\u0002\u0002\u0002fg\u0007\b\u0002\u0002gh\u0005\u001a",
    "\u000e\u0002hi\u0007\b\u0002\u0002ij\u0005\u001a\u000e\u0002jk\u0007",
    "\b\u0002\u0002kl\u0005\u001a\u000e\u0002ln\u0003\u0002\u0002\u0002m",
    "?\u0003\u0002\u0002\u0002mC\u0003\u0002\u0002\u0002mF\u0003\u0002\u0002",
    "\u0002mK\u0003\u0002\u0002\u0002mP\u0003\u0002\u0002\u0002mT\u0003\u0002",
    "\u0002\u0002mZ\u0003\u0002\u0002\u0002m`\u0003\u0002\u0002\u0002mf\u0003",
    "\u0002\u0002\u0002n\u000f\u0003\u0002\u0002\u0002op\u0007\t\u0002\u0002",
    "pq\u0007\t\u0002\u0002q\u009a\u0007\t\u0002\u0002rs\u0007\t\u0002\u0002",
    "st\u0005\u001a\u000e\u0002tu\u0007\t\u0002\u0002uv\u0007\t\u0002\u0002",
    "v\u009a\u0003\u0002\u0002\u0002wx\u0007\t\u0002\u0002xy\u0007\t\u0002",
    "\u0002yz\u0005\u001a\u000e\u0002z{\u0007\t\u0002\u0002{\u009a\u0003",
    "\u0002\u0002\u0002|}\u0007\t\u0002\u0002}~\u0007\t\u0002\u0002~\u007f",
    "\u0007\t\u0002\u0002\u007f\u009a\u0005\u001a\u000e\u0002\u0080\u0081",
    "\u0007\t\u0002\u0002\u0081\u0082\u0005\u001a\u000e\u0002\u0082\u0083",
    "\u0007\t\u0002\u0002\u0083\u0084\u0005\u001a\u000e\u0002\u0084\u0085",
    "\u0007\t\u0002\u0002\u0085\u009a\u0003\u0002\u0002\u0002\u0086\u0087",
    "\u0007\t\u0002\u0002\u0087\u0088\u0007\t\u0002\u0002\u0088\u0089\u0005",
    "\u001a\u000e\u0002\u0089\u008a\u0007\t\u0002\u0002\u008a\u008b\u0005",
    "\u001a\u000e\u0002\u008b\u009a\u0003\u0002\u0002\u0002\u008c\u008d\u0007",
    "\t\u0002\u0002\u008d\u008e\u0005\u001a\u000e\u0002\u008e\u008f\u0007",
    "\t\u0002\u0002\u008f\u0090\u0007\t\u0002\u0002\u0090\u0091\u0005\u001a",
    "\u000e\u0002\u0091\u009a\u0003\u0002\u0002\u0002\u0092\u0093\u0007\t",
    "\u0002\u0002\u0093\u0094\u0005\u001a\u000e\u0002\u0094\u0095\u0007\t",
    "\u0002\u0002\u0095\u0096\u0005\u001a\u000e\u0002\u0096\u0097\u0007\t",
    "\u0002\u0002\u0097\u0098\u0005\u001a\u000e\u0002\u0098\u009a\u0003\u0002",
    "\u0002\u0002\u0099o\u0003\u0002\u0002\u0002\u0099r\u0003\u0002\u0002",
    "\u0002\u0099w\u0003\u0002\u0002\u0002\u0099|\u0003\u0002\u0002\u0002",
    "\u0099\u0080\u0003\u0002\u0002\u0002\u0099\u0086\u0003\u0002\u0002\u0002",
    "\u0099\u008c\u0003\u0002\u0002\u0002\u0099\u0092\u0003\u0002\u0002\u0002",
    "\u009a\u0011\u0003\u0002\u0002\u0002\u009b\u009c\u0005 \u0011\u0002",
    "\u009c\u00a0\u0007\n\u0002\u0002\u009d\u009f\u0005\u0018\r\u0002\u009e",
    "\u009d\u0003\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0",
    "\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1",
    "\u0013\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0007\u000b\u0002\u0002\u00a4\u00b4\u0005\u0016\f\u0002\u00a5",
    "\u00a6\u0007\u000b\u0002\u0002\u00a6\u00a7\u0007\f\u0002\u0002\u00a7",
    "\u00a8\u0007\u001c\u0002\u0002\u00a8\u00a9\u0007\u001c\u0002\u0002\u00a9",
    "\u00aa\u0007\r\u0002\u0002\u00aa\u00b4\u0007\u001c\u0002\u0002\u00ab",
    "\u00ac\u0007\u000b\u0002\u0002\u00ac\u00ad\u0007\u000e\u0002\u0002\u00ad",
    "\u00ae\u0007\u001c\u0002\u0002\u00ae\u00af\u0007\u000f\u0002\u0002\u00af",
    "\u00b1\u0007\u001c\u0002\u0002\u00b0\u00b2\u0007\u001c\u0002\u0002\u00b1",
    "\u00b0\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002\u00b2",
    "\u00b4\u0003\u0002\u0002\u0002\u00b3\u00a3\u0003\u0002\u0002\u0002\u00b3",
    "\u00a5\u0003\u0002\u0002\u0002\u00b3\u00ab\u0003\u0002\u0002\u0002\u00b4",
    "\u0015\u0003\u0002\u0002\u0002\u00b5\u00b6\t\u0002\u0002\u0002\u00b6",
    "\u0017\u0003\u0002\u0002\u0002\u00b7\u00b8\b\r\u0001\u0002\u00b8\u00c0",
    "\u0005\u001c\u000f\u0002\u00b9\u00c0\u0005\u001e\u0010\u0002\u00ba\u00c0",
    "\u0005 \u0011\u0002\u00bb\u00bc\u0007\u0015\u0002\u0002\u00bc\u00bd",
    "\u0005\u0018\r\u0002\u00bd\u00be\u0007\u0016\u0002\u0002\u00be\u00c0",
    "\u0003\u0002\u0002\u0002\u00bf\u00b7\u0003\u0002\u0002\u0002\u00bf\u00b9",
    "\u0003\u0002\u0002\u0002\u00bf\u00ba\u0003\u0002\u0002\u0002\u00bf\u00bb",
    "\u0003\u0002\u0002\u0002\u00c0\u00c9\u0003\u0002\u0002\u0002\u00c1\u00c2",
    "\f\b\u0002\u0002\u00c2\u00c3\t\u0003\u0002\u0002\u00c3\u00c8\u0005\u0018",
    "\r\t\u00c4\u00c5\f\u0007\u0002\u0002\u00c5\u00c6\t\u0004\u0002\u0002",
    "\u00c6\u00c8\u0005\u0018\r\b\u00c7\u00c1\u0003\u0002\u0002\u0002\u00c7",
    "\u00c4\u0003\u0002\u0002\u0002\u00c8\u00cb\u0003\u0002\u0002\u0002\u00c9",
    "\u00c7\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca",
    "\u0019\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cc",
    "\u00d7\u0007\u001b\u0002\u0002\u00cd\u00ce\u0007\u001b\u0002\u0002\u00ce",
    "\u00cf\u0007\u0017\u0002\u0002\u00cf\u00d7\u0007\u001b\u0002\u0002\u00d0",
    "\u00d1\u0007\u0014\u0002\u0002\u00d1\u00d7\u0007\u001b\u0002\u0002\u00d2",
    "\u00d3\u0007\u0014\u0002\u0002\u00d3\u00d4\u0007\u001b\u0002\u0002\u00d4",
    "\u00d5\u0007\u0017\u0002\u0002\u00d5\u00d7\u0007\u001b\u0002\u0002\u00d6",
    "\u00cc\u0003\u0002\u0002\u0002\u00d6\u00cd\u0003\u0002\u0002\u0002\u00d6",
    "\u00d0\u0003\u0002\u0002\u0002\u00d6\u00d2\u0003\u0002\u0002\u0002\u00d7",
    "\u001b\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007\u0014\u0002\u0002\u00d9",
    "\u00da\u0005\u001e\u0010\u0002\u00da\u001d\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\u0007\u001b\u0002\u0002\u00dc\u001f\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0007\u001c\u0002\u0002\u00de\u00df\u0007\u0018\u0002\u0002\u00df",
    "\u00e0\u0007\u001c\u0002\u0002\u00e0\u00e1\u0007\u0019\u0002\u0002\u00e1",
    "!\u0003\u0002\u0002\u0002\u000e(19m\u0099\u00a0\u00b1\u00b3\u00bf\u00c7",
    "\u00c9\u00d6"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mcbParser extends antlr4.Parser {

    static grammarFileName = "mcb.g4";
    static literalNames = [ null, "'fun'", "':'", "'end'", "'=='", "'>='", 
                            "'~'", "'^'", "'='", "'#'", "'dict'", "'at'", 
                            "'score'", "'as'", "'*'", "'/'", "'%'", "'+'", 
                            "'-'", "'('", "')'", "'.'", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "NEWLINE", "INT", "CHAR", "WS", "LineComment" ];
    static ruleNames = [ "chunk", "block", "func", "stat", "expEqual", "expGreaterThanEqual", 
                         "position", "anchor", "equation", "def", "defNamespace", 
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
    	case 11:
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
	        this.state = 32;
	        this.block();
	        this.state = 33;
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
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.T__0) {
	            this.state = 35;
	            this.func();
	            this.state = 40;
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
	        this.state = 41;
	        this.match(mcbParser.T__0);
	        this.state = 42;
	        this.match(mcbParser.CHAR);
	        this.state = 43;
	        this.match(mcbParser.T__1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.T__8) | (1 << mcbParser.NEWLINE) | (1 << mcbParser.CHAR))) !== 0)) {
	            this.state = 44;
	            this.stat();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
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



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, mcbParser.RULE_stat);
	    try {
	        this.state = 55;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.T__8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.def();
	            break;
	        case mcbParser.NEWLINE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.match(mcbParser.NEWLINE);
	            break;
	        case mcbParser.CHAR:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.equation();
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



	expEqual() {
	    let localctx = new ExpEqualContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, mcbParser.RULE_expEqual);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(mcbParser.T__3);
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
	    this.enterRule(localctx, 10, mcbParser.RULE_expGreaterThanEqual);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
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



	position() {
	    let localctx = new PositionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, mcbParser.RULE_position);
	    try {
	        this.state = 107;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61;
	            this.number();
	            this.state = 62;
	            this.number();
	            this.state = 63;
	            this.number();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.match(mcbParser.T__5);
	            this.state = 66;
	            this.match(mcbParser.T__5);
	            this.state = 67;
	            this.match(mcbParser.T__5);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.match(mcbParser.T__5);
	            this.state = 69;
	            this.number();
	            this.state = 70;
	            this.match(mcbParser.T__5);
	            this.state = 71;
	            this.match(mcbParser.T__5);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 73;
	            this.match(mcbParser.T__5);
	            this.state = 74;
	            this.match(mcbParser.T__5);
	            this.state = 75;
	            this.number();
	            this.state = 76;
	            this.match(mcbParser.T__5);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 78;
	            this.match(mcbParser.T__5);
	            this.state = 79;
	            this.match(mcbParser.T__5);
	            this.state = 80;
	            this.match(mcbParser.T__5);
	            this.state = 81;
	            this.number();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 82;
	            this.match(mcbParser.T__5);
	            this.state = 83;
	            this.number();
	            this.state = 84;
	            this.match(mcbParser.T__5);
	            this.state = 85;
	            this.number();
	            this.state = 86;
	            this.match(mcbParser.T__5);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 88;
	            this.match(mcbParser.T__5);
	            this.state = 89;
	            this.match(mcbParser.T__5);
	            this.state = 90;
	            this.number();
	            this.state = 91;
	            this.match(mcbParser.T__5);
	            this.state = 92;
	            this.number();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 94;
	            this.match(mcbParser.T__5);
	            this.state = 95;
	            this.number();
	            this.state = 96;
	            this.match(mcbParser.T__5);
	            this.state = 97;
	            this.match(mcbParser.T__5);
	            this.state = 98;
	            this.number();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 100;
	            this.match(mcbParser.T__5);
	            this.state = 101;
	            this.number();
	            this.state = 102;
	            this.match(mcbParser.T__5);
	            this.state = 103;
	            this.number();
	            this.state = 104;
	            this.match(mcbParser.T__5);
	            this.state = 105;
	            this.number();
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



	anchor() {
	    let localctx = new AnchorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, mcbParser.RULE_anchor);
	    try {
	        this.state = 151;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 109;
	            this.match(mcbParser.T__6);
	            this.state = 110;
	            this.match(mcbParser.T__6);
	            this.state = 111;
	            this.match(mcbParser.T__6);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.match(mcbParser.T__6);
	            this.state = 113;
	            this.number();
	            this.state = 114;
	            this.match(mcbParser.T__6);
	            this.state = 115;
	            this.match(mcbParser.T__6);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 117;
	            this.match(mcbParser.T__6);
	            this.state = 118;
	            this.match(mcbParser.T__6);
	            this.state = 119;
	            this.number();
	            this.state = 120;
	            this.match(mcbParser.T__6);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 122;
	            this.match(mcbParser.T__6);
	            this.state = 123;
	            this.match(mcbParser.T__6);
	            this.state = 124;
	            this.match(mcbParser.T__6);
	            this.state = 125;
	            this.number();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 126;
	            this.match(mcbParser.T__6);
	            this.state = 127;
	            this.number();
	            this.state = 128;
	            this.match(mcbParser.T__6);
	            this.state = 129;
	            this.number();
	            this.state = 130;
	            this.match(mcbParser.T__6);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 132;
	            this.match(mcbParser.T__6);
	            this.state = 133;
	            this.match(mcbParser.T__6);
	            this.state = 134;
	            this.number();
	            this.state = 135;
	            this.match(mcbParser.T__6);
	            this.state = 136;
	            this.number();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 138;
	            this.match(mcbParser.T__6);
	            this.state = 139;
	            this.number();
	            this.state = 140;
	            this.match(mcbParser.T__6);
	            this.state = 141;
	            this.match(mcbParser.T__6);
	            this.state = 142;
	            this.number();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 144;
	            this.match(mcbParser.T__6);
	            this.state = 145;
	            this.number();
	            this.state = 146;
	            this.match(mcbParser.T__6);
	            this.state = 147;
	            this.number();
	            this.state = 148;
	            this.match(mcbParser.T__6);
	            this.state = 149;
	            this.number();
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



	equation() {
	    let localctx = new EquationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, mcbParser.RULE_equation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.exprVariable();
	        this.state = 154;
	        this.match(mcbParser.T__7);
	        this.state = 158;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 155;
	                this.expr(0); 
	            }
	            this.state = 160;
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
	    this.enterRule(localctx, 18, mcbParser.RULE_def);
	    try {
	        this.state = 177;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 161;
	            this.match(mcbParser.T__8);
	            this.state = 162;
	            this.defNamespace();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.match(mcbParser.T__8);
	            this.state = 164;
	            this.match(mcbParser.T__9);
	            this.state = 165;
	            this.match(mcbParser.CHAR);
	            this.state = 166;
	            this.match(mcbParser.CHAR);
	            this.state = 167;
	            this.match(mcbParser.T__10);
	            this.state = 168;
	            this.match(mcbParser.CHAR);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 169;
	            this.match(mcbParser.T__8);
	            this.state = 170;
	            this.match(mcbParser.T__11);
	            this.state = 171;
	            this.match(mcbParser.CHAR);
	            this.state = 172;
	            this.match(mcbParser.T__12);
	            this.state = 173;
	            this.match(mcbParser.CHAR);
	            this.state = 175;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            if(la_===1) {
	                this.state = 174;
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
	    this.enterRule(localctx, 20, mcbParser.RULE_defNamespace);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        _la = this._input.LA(1);
	        if(!(_la===mcbParser.T__9 || _la===mcbParser.T__11)) {
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
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, mcbParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.T__17:
	            this.state = 182;
	            this.minusNumberInt();
	            break;
	        case mcbParser.INT:
	            this.state = 183;
	            this.numberInt();
	            break;
	        case mcbParser.CHAR:
	            this.state = 184;
	            this.exprVariable();
	            break;
	        case mcbParser.T__18:
	            this.state = 185;
	            this.match(mcbParser.T__18);
	            this.state = 186;
	            this.expr(0);
	            this.state = 187;
	            this.match(mcbParser.T__19);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 199;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 197;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expr);
	                    this.state = 191;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 192;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.T__13) | (1 << mcbParser.T__14) | (1 << mcbParser.T__15))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 193;
	                    this.expr(7);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expr);
	                    this.state = 194;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 195;
	                    _la = this._input.LA(1);
	                    if(!(_la===mcbParser.T__16 || _la===mcbParser.T__17)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 196;
	                    this.expr(6);
	                    break;

	                } 
	            }
	            this.state = 201;
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
	    this.enterRule(localctx, 24, mcbParser.RULE_number);
	    try {
	        this.state = 212;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.match(mcbParser.INT);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 203;
	            this.match(mcbParser.INT);
	            this.state = 204;
	            this.match(mcbParser.T__20);
	            this.state = 205;
	            this.match(mcbParser.INT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 206;
	            this.match(mcbParser.T__17);
	            this.state = 207;
	            this.match(mcbParser.INT);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 208;
	            this.match(mcbParser.T__17);
	            this.state = 209;
	            this.match(mcbParser.INT);
	            this.state = 210;
	            this.match(mcbParser.T__20);
	            this.state = 211;
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
	    this.enterRule(localctx, 26, mcbParser.RULE_minusNumberInt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(mcbParser.T__17);
	        this.state = 215;
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
	    this.enterRule(localctx, 28, mcbParser.RULE_numberInt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
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
	    this.enterRule(localctx, 30, mcbParser.RULE_exprVariable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.match(mcbParser.CHAR);
	        this.state = 220;
	        this.match(mcbParser.T__21);
	        this.state = 221;
	        this.match(mcbParser.CHAR);
	        this.state = 222;
	        this.match(mcbParser.T__22);
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
mcbParser.NEWLINE = 24;
mcbParser.INT = 25;
mcbParser.CHAR = 26;
mcbParser.WS = 27;
mcbParser.LineComment = 28;

mcbParser.RULE_chunk = 0;
mcbParser.RULE_block = 1;
mcbParser.RULE_func = 2;
mcbParser.RULE_stat = 3;
mcbParser.RULE_expEqual = 4;
mcbParser.RULE_expGreaterThanEqual = 5;
mcbParser.RULE_position = 6;
mcbParser.RULE_anchor = 7;
mcbParser.RULE_equation = 8;
mcbParser.RULE_def = 9;
mcbParser.RULE_defNamespace = 10;
mcbParser.RULE_expr = 11;
mcbParser.RULE_number = 12;
mcbParser.RULE_minusNumberInt = 13;
mcbParser.RULE_numberInt = 14;
mcbParser.RULE_exprVariable = 15;

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

	NEWLINE() {
	    return this.getToken(mcbParser.NEWLINE, 0);
	};

	equation() {
	    return this.getTypedRuleContext(EquationContext,0);
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



class AnchorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_anchor;
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
	        listener.enterAnchor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbListener ) {
	        listener.exitAnchor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbVisitor ) {
	        return visitor.visitAnchor(this);
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
mcbParser.ExpEqualContext = ExpEqualContext; 
mcbParser.ExpGreaterThanEqualContext = ExpGreaterThanEqualContext; 
mcbParser.PositionContext = PositionContext; 
mcbParser.AnchorContext = AnchorContext; 
mcbParser.EquationContext = EquationContext; 
mcbParser.DefContext = DefContext; 
mcbParser.DefNamespaceContext = DefNamespaceContext; 
mcbParser.ExprContext = ExprContext; 
mcbParser.NumberContext = NumberContext; 
mcbParser.MinusNumberIntContext = MinusNumberIntContext; 
mcbParser.NumberIntContext = NumberIntContext; 
mcbParser.ExprVariableContext = ExprVariableContext; 
