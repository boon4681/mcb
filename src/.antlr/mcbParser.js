// Generated from e:\_Project\nodejs\mcb\src\mcbParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mcbParserListener from './mcbParserListener.js';
import mcbParserVisitor from './mcbParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003=\u00c7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0003\u0002\u0007\u0002$\n\u0002\f\u0002\u000e",
    "\u0002\'\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    ",\n\u0002\f\u0002\u000e\u0002/\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u00037\n\u0003\f\u0003",
    "\u000e\u0003:\u000b\u0003\u0005\u0003<\n\u0003\u0003\u0003\u0005\u0003",
    "?\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004D\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0007\u0007N\n\u0007\f\u0007\u000e\u0007Q\u000b\u0007",
    "\u0003\u0007\u0003\u0007\u0007\u0007U\n\u0007\f\u0007\u000e\u0007X\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0005\b^\n\b\u0003\t",
    "\u0003\t\u0007\tb\n\t\f\t\u000e\te\u000b\t\u0003\t\u0003\t\u0003\t\u0007",
    "\tj\n\t\f\t\u000e\tm\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0007\n",
    "s\n\n\f\n\u000e\nv\u000b\n\u0003\n\u0003\n\u0003\n\u0007\n{\n\n\f\n",
    "\u000e\n~\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0007\u000b\u0085\n\u000b\f\u000b\u000e\u000b\u0088\u000b\u000b\u0003",
    "\f\u0003\f\u0003\f\u0007\f\u008d\n\f\f\f\u000e\f\u0090\u000b\f\u0003",
    "\f\u0003\f\u0007\f\u0094\n\f\f\f\u000e\f\u0097\u000b\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0005\f\u009d\n\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u00a7\n\f\f\f\u000e\f\u00aa",
    "\u000b\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0007\u0010\u00b7\n",
    "\u0010\f\u0010\u000e\u0010\u00ba\u000b\u0010\u0003\u0010\u0005\u0010",
    "\u00bd\n\u0010\u0003\u0011\u0006\u0011\u00c0\n\u0011\r\u0011\u000e\u0011",
    "\u00c1\u0003\u0011\u0005\u0011\u00c5\n\u0011\u0003\u0011\u0002\u0003",
    "\u0016\u0012\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \u0002\u0005\u0004\u0002##//\u0003\u0002\u0012\u0013",
    "\u0003\u0002\u000f\u0011\u0002\u00cf\u0002%\u0003\u0002\u0002\u0002",
    "\u0004;\u0003\u0002\u0002\u0002\u0006C\u0003\u0002\u0002\u0002\bE\u0003",
    "\u0002\u0002\u0002\nG\u0003\u0002\u0002\u0002\fK\u0003\u0002\u0002\u0002",
    "\u000e]\u0003\u0002\u0002\u0002\u0010_\u0003\u0002\u0002\u0002\u0012",
    "p\u0003\u0002\u0002\u0002\u0014\u0081\u0003\u0002\u0002\u0002\u0016",
    "\u009c\u0003\u0002\u0002\u0002\u0018\u00ab\u0003\u0002\u0002\u0002\u001a",
    "\u00b0\u0003\u0002\u0002\u0002\u001c\u00b2\u0003\u0002\u0002\u0002\u001e",
    "\u00bc\u0003\u0002\u0002\u0002 \u00c4\u0003\u0002\u0002\u0002\"$\u0007",
    "\u0005\u0002\u0002#\"\u0003\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002",
    "%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&-\u0003\u0002\u0002",
    "\u0002\'%\u0003\u0002\u0002\u0002()\u0005\u0006\u0004\u0002)*\u0005",
    "\u001e\u0010\u0002*,\u0003\u0002\u0002\u0002+(\u0003\u0002\u0002\u0002",
    ",/\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002",
    "\u0002.0\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u000201\u0007\u0002",
    "\u0002\u00031\u0003\u0003\u0002\u0002\u000228\u0005\u0006\u0004\u0002",
    "34\u0005 \u0011\u000245\u0005\u0006\u0004\u000257\u0003\u0002\u0002",
    "\u000263\u0003\u0002\u0002\u00027:\u0003\u0002\u0002\u000286\u0003\u0002",
    "\u0002\u000289\u0003\u0002\u0002\u00029<\u0003\u0002\u0002\u0002:8\u0003",
    "\u0002\u0002\u0002;2\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002",
    "<>\u0003\u0002\u0002\u0002=?\u0005 \u0011\u0002>=\u0003\u0002\u0002",
    "\u0002>?\u0003\u0002\u0002\u0002?\u0005\u0003\u0002\u0002\u0002@D\u0005",
    "\b\u0005\u0002AD\u0005\u0014\u000b\u0002BD\u0005\u000e\b\u0002C@\u0003",
    "\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002CB\u0003\u0002\u0002\u0002",
    "D\u0007\u0003\u0002\u0002\u0002EF\u0005\n\u0006\u0002F\t\u0003\u0002",
    "\u0002\u0002GH\u0007$\u0002\u0002HI\u0007/\u0002\u0002IJ\u0005\f\u0007",
    "\u0002J\u000b\u0003\u0002\u0002\u0002KO\u0007\u0014\u0002\u0002LN\u0007",
    "\u0005\u0002\u0002ML\u0003\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002",
    "OM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PR\u0003\u0002\u0002",
    "\u0002QO\u0003\u0002\u0002\u0002RV\u0005\u0004\u0003\u0002SU\u0007\u0005",
    "\u0002\u0002TS\u0003\u0002\u0002\u0002UX\u0003\u0002\u0002\u0002VT\u0003",
    "\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WY\u0003\u0002\u0002\u0002",
    "XV\u0003\u0002\u0002\u0002YZ\u0007%\u0002\u0002Z\r\u0003\u0002\u0002",
    "\u0002[^\u0005\u0010\t\u0002\\^\u0005\u0012\n\u0002][\u0003\u0002\u0002",
    "\u0002]\\\u0003\u0002\u0002\u0002^\u000f\u0003\u0002\u0002\u0002_c\u0007",
    ")\u0002\u0002`b\u0007\u0005\u0002\u0002a`\u0003\u0002\u0002\u0002be",
    "\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002",
    "\u0002df\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002fg\u0007\b",
    "\u0002\u0002gk\u0007\t\u0002\u0002hj\u0007\u0005\u0002\u0002ih\u0003",
    "\u0002\u0002\u0002jm\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002",
    "kl\u0003\u0002\u0002\u0002ln\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002",
    "\u0002no\u0005\f\u0007\u0002o\u0011\u0003\u0002\u0002\u0002pt\u0007",
    "*\u0002\u0002qs\u0007\u0005\u0002\u0002rq\u0003\u0002\u0002\u0002sv",
    "\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002",
    "\u0002uw\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002\u0002wx\u0007\b",
    "\u0002\u0002x|\u0007\t\u0002\u0002y{\u0007\u0005\u0002\u0002zy\u0003",
    "\u0002\u0002\u0002{~\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002",
    "|}\u0003\u0002\u0002\u0002}\u007f\u0003\u0002\u0002\u0002~|\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0005\f\u0007\u0002\u0080\u0013\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0005\u0018\r\u0002\u0082\u0086\u0007\u0015",
    "\u0002\u0002\u0083\u0085\u0005\u0016\f\u0002\u0084\u0083\u0003\u0002",
    "\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0015\u0003\u0002",
    "\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089\u008a\b\f\u0001",
    "\u0002\u008a\u008e\u0007\b\u0002\u0002\u008b\u008d\u0007\u0005\u0002",
    "\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u0090\u0003\u0002\u0002",
    "\u0002\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002",
    "\u0002\u008f\u0091\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002",
    "\u0002\u0091\u0095\u0005\u0016\f\u0002\u0092\u0094\u0007\u0005\u0002",
    "\u0002\u0093\u0092\u0003\u0002\u0002\u0002\u0094\u0097\u0003\u0002\u0002",
    "\u0002\u0095\u0093\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002",
    "\u0002\u0096\u0098\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002\u0002",
    "\u0002\u0098\u0099\u0007\t\u0002\u0002\u0099\u009d\u0003\u0002\u0002",
    "\u0002\u009a\u009d\u0007.\u0002\u0002\u009b\u009d\u0005\u0018\r\u0002",
    "\u009c\u0089\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002",
    "\u009c\u009b\u0003\u0002\u0002\u0002\u009d\u00a8\u0003\u0002\u0002\u0002",
    "\u009e\u009f\f\u0006\u0002\u0002\u009f\u00a0\u0005\u001c\u000f\u0002",
    "\u00a0\u00a1\u0005\u0016\f\u0007\u00a1\u00a7\u0003\u0002\u0002\u0002",
    "\u00a2\u00a3\f\u0005\u0002\u0002\u00a3\u00a4\u0005\u001a\u000e\u0002",
    "\u00a4\u00a5\u0005\u0016\f\u0006\u00a5\u00a7\u0003\u0002\u0002\u0002",
    "\u00a6\u009e\u0003\u0002\u0002\u0002\u00a6\u00a2\u0003\u0002\u0002\u0002",
    "\u00a7\u00aa\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9\u0017\u0003\u0002\u0002\u0002",
    "\u00aa\u00a8\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007/\u0002\u0002",
    "\u00ac\u00ad\u0007\n\u0002\u0002\u00ad\u00ae\t\u0002\u0002\u0002\u00ae",
    "\u00af\u0007\u000b\u0002\u0002\u00af\u0019\u0003\u0002\u0002\u0002\u00b0",
    "\u00b1\t\u0003\u0002\u0002\u00b1\u001b\u0003\u0002\u0002\u0002\u00b2",
    "\u00b3\t\u0004\u0002\u0002\u00b3\u001d\u0003\u0002\u0002\u0002\u00b4",
    "\u00b8\u0007\u0005\u0002\u0002\u00b5\u00b7\u0007\u0005\u0002\u0002\u00b6",
    "\u00b5\u0003\u0002\u0002\u0002\u00b7\u00ba\u0003\u0002\u0002\u0002\u00b8",
    "\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9",
    "\u00bd\u0003\u0002\u0002\u0002\u00ba\u00b8\u0003\u0002\u0002\u0002\u00bb",
    "\u00bd\u0007\u0002\u0002\u0003\u00bc\u00b4\u0003\u0002\u0002\u0002\u00bc",
    "\u00bb\u0003\u0002\u0002\u0002\u00bd\u001f\u0003\u0002\u0002\u0002\u00be",
    "\u00c0\u0007\u0005\u0002\u0002\u00bf\u00be\u0003\u0002\u0002\u0002\u00c0",
    "\u00c1\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1",
    "\u00c2\u0003\u0002\u0002\u0002\u00c2\u00c5\u0003\u0002\u0002\u0002\u00c3",
    "\u00c5\u0007\u0002\u0002\u0003\u00c4\u00bf\u0003\u0002\u0002\u0002\u00c4",
    "\u00c3\u0003\u0002\u0002\u0002\u00c5!\u0003\u0002\u0002\u0002\u0019",
    "%-8;>COV]ckt|\u0086\u008e\u0095\u009c\u00a6\u00a8\u00b8\u00bc\u00c1",
    "\u00c4"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mcbParser extends antlr4.Parser {

    static grammarFileName = "mcbParser.g4";
    static literalNames = [ null, null, null, null, "'.'", "','", "'('", 
                            "')'", "'['", "']'", "'{'", "'}'", "'..'", "'*'", 
                            "'%'", "'/'", "'+'", "'-'", "':'", "'='", "'*='", 
                            "'%='", "'/='", "'+='", "'-='", "'<'", "'>'", 
                            "'<='", "'>='", "'@'", null, null, null, null, 
                            "'fun'", "'end'", "'if'", "'unless'", "'else'", 
                            "'while'", "'do'" ];
    static symbolicNames = [ null, "Comment", "WS", "NL", "DOT", "COMMA", 
                             "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURL", 
                             "RCURL", "RANGE", "MULT", "MOD", "DIV", "ADD", 
                             "SUB", "COLON", "ASSIGNMENT", "MULT_ASSIGNMENT", 
                             "MOD_ASSIGNMENT", "DIVINE_ASSIGNMENT", "ADD_ASSIGNMENT", 
                             "SUB_ASSIGNMENT", "LANGLE", "RANGLE", "LE", 
                             "GE", "AT_N_WS", "AT_P_WS", "AT_S_WS", "AT_B_WS", 
                             "ENTITY", "FUN", "END", "IF", "UNLESS", "ELSE", 
                             "WHILE", "DO", "RealLiteral", "FloatLiteral", 
                             "DoubleLiteral", "IntegerLiteral", "Identifier", 
                             "QUOTE_OPEN", "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", 
                             "UNICODE_CLASS_LO", "UNICODE_CLASS_LT", "UNICODE_CLASS_LU", 
                             "UNICODE_CLASS_ND", "UNICODE_CLASS_NL", "QUOTE_CLOSE", 
                             "LineStrText", "Inside_Comment", "Inside_WS", 
                             "Inside_NL", "ErrorCharacter" ];
    static ruleNames = [ "script", "statements", "statement", "declaration", 
                         "functionDeclare", "block", "loopStatement", "whileDo", 
                         "doWhile", "assignment", "expression", "scoreboardIdentifier", 
                         "additiveOperator", "multiplicativeOperator", "nl", 
                         "nls" ];

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
    	case 10:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
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
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 32;
	            this.match(mcbParser.NL);
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (mcbParser.FUN - 34)) | (1 << (mcbParser.WHILE - 34)) | (1 << (mcbParser.DO - 34)) | (1 << (mcbParser.Identifier - 34)))) !== 0)) {
	            this.state = 38;
	            this.statement();
	            this.state = 39;
	            this.nl();
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 46;
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



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, mcbParser.RULE_statements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (mcbParser.FUN - 34)) | (1 << (mcbParser.WHILE - 34)) | (1 << (mcbParser.DO - 34)) | (1 << (mcbParser.Identifier - 34)))) !== 0)) {
	            this.state = 48;
	            this.statement();
	            this.state = 54;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 49;
	                    this.nls();
	                    this.state = 50;
	                    this.statement(); 
	                }
	                this.state = 56;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	            }

	        }

	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 59;
	            this.nls();

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
	    this.enterRule(localctx, 4, mcbParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.FUN:
	            this.state = 62;
	            this.declaration();
	            break;
	        case mcbParser.Identifier:
	            this.state = 63;
	            this.assignment();
	            break;
	        case mcbParser.WHILE:
	        case mcbParser.DO:
	            this.state = 64;
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, mcbParser.RULE_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.functionDeclare();
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
	    this.enterRule(localctx, 8, mcbParser.RULE_functionDeclare);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(mcbParser.FUN);
	        this.state = 70;
	        this.match(mcbParser.Identifier);
	        this.state = 71;
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
	    this.enterRule(localctx, 10, mcbParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(mcbParser.COLON);
	        this.state = 77;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 74;
	                this.match(mcbParser.NL); 
	            }
	            this.state = 79;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	        this.state = 80;
	        this.statements();
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 81;
	            this.match(mcbParser.NL);
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 87;
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
	    this.enterRule(localctx, 12, mcbParser.RULE_loopStatement);
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.WHILE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.whileDo();
	            break;
	        case mcbParser.DO:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
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
	    this.enterRule(localctx, 14, mcbParser.RULE_whileDo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(mcbParser.WHILE);
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 94;
	            this.match(mcbParser.NL);
	            this.state = 99;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 100;
	        this.match(mcbParser.LPAREN);
	        this.state = 101;
	        this.match(mcbParser.RPAREN);
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 102;
	            this.match(mcbParser.NL);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 108;
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
	    this.enterRule(localctx, 16, mcbParser.RULE_doWhile);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(mcbParser.DO);
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 111;
	            this.match(mcbParser.NL);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 117;
	        this.match(mcbParser.LPAREN);
	        this.state = 118;
	        this.match(mcbParser.RPAREN);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 119;
	            this.match(mcbParser.NL);
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 125;
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
	    this.enterRule(localctx, 18, mcbParser.RULE_assignment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.scoreboardIdentifier();
	        this.state = 128;
	        this.match(mcbParser.ASSIGNMENT);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.LPAREN || _la===mcbParser.IntegerLiteral || _la===mcbParser.Identifier) {
	            this.state = 129;
	            this.expression(0);
	            this.state = 134;
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, mcbParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.LPAREN:
	            this.state = 136;
	            this.match(mcbParser.LPAREN);
	            this.state = 140;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===mcbParser.NL) {
	                this.state = 137;
	                this.match(mcbParser.NL);
	                this.state = 142;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 143;
	            this.expression(0);
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===mcbParser.NL) {
	                this.state = 144;
	                this.match(mcbParser.NL);
	                this.state = 149;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 150;
	            this.match(mcbParser.RPAREN);
	            break;
	        case mcbParser.IntegerLiteral:
	            this.state = 152;
	            this.match(mcbParser.IntegerLiteral);
	            break;
	        case mcbParser.Identifier:
	            this.state = 153;
	            this.scoreboardIdentifier();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 166;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 164;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expression);
	                    this.state = 156;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 157;
	                    this.multiplicativeOperator();
	                    this.state = 158;
	                    this.expression(5);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, mcbParser.RULE_expression);
	                    this.state = 160;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 161;
	                    this.additiveOperator();
	                    this.state = 162;
	                    this.expression(4);
	                    break;

	                } 
	            }
	            this.state = 168;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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
	    this.enterRule(localctx, 22, mcbParser.RULE_scoreboardIdentifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(mcbParser.Identifier);
	        this.state = 170;
	        this.match(mcbParser.LSQUARE);
	        this.state = 171;
	        _la = this._input.LA(1);
	        if(!(_la===mcbParser.ENTITY || _la===mcbParser.Identifier)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 172;
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
	    this.enterRule(localctx, 24, mcbParser.RULE_additiveOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
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
	    this.enterRule(localctx, 26, mcbParser.RULE_multiplicativeOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 176;
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



	nl() {
	    let localctx = new NlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, mcbParser.RULE_nl);
	    var _la = 0; // Token type
	    try {
	        this.state = 186;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.NL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            this.match(mcbParser.NL);
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===mcbParser.NL) {
	                this.state = 179;
	                this.match(mcbParser.NL);
	                this.state = 184;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case mcbParser.EOF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.match(mcbParser.EOF);
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



	nls() {
	    let localctx = new NlsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, mcbParser.RULE_nls);
	    try {
	        this.state = 194;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.NL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 189; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 188;
	            		this.match(mcbParser.NL);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 191; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,21, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case mcbParser.EOF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 193;
	            this.match(mcbParser.EOF);
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
mcbParser.ENTITY = 33;
mcbParser.FUN = 34;
mcbParser.END = 35;
mcbParser.IF = 36;
mcbParser.UNLESS = 37;
mcbParser.ELSE = 38;
mcbParser.WHILE = 39;
mcbParser.DO = 40;
mcbParser.RealLiteral = 41;
mcbParser.FloatLiteral = 42;
mcbParser.DoubleLiteral = 43;
mcbParser.IntegerLiteral = 44;
mcbParser.Identifier = 45;
mcbParser.QUOTE_OPEN = 46;
mcbParser.UNICODE_CLASS_LL = 47;
mcbParser.UNICODE_CLASS_LM = 48;
mcbParser.UNICODE_CLASS_LO = 49;
mcbParser.UNICODE_CLASS_LT = 50;
mcbParser.UNICODE_CLASS_LU = 51;
mcbParser.UNICODE_CLASS_ND = 52;
mcbParser.UNICODE_CLASS_NL = 53;
mcbParser.QUOTE_CLOSE = 54;
mcbParser.LineStrText = 55;
mcbParser.Inside_Comment = 56;
mcbParser.Inside_WS = 57;
mcbParser.Inside_NL = 58;
mcbParser.ErrorCharacter = 59;

mcbParser.RULE_script = 0;
mcbParser.RULE_statements = 1;
mcbParser.RULE_statement = 2;
mcbParser.RULE_declaration = 3;
mcbParser.RULE_functionDeclare = 4;
mcbParser.RULE_block = 5;
mcbParser.RULE_loopStatement = 6;
mcbParser.RULE_whileDo = 7;
mcbParser.RULE_doWhile = 8;
mcbParser.RULE_assignment = 9;
mcbParser.RULE_expression = 10;
mcbParser.RULE_scoreboardIdentifier = 11;
mcbParser.RULE_additiveOperator = 12;
mcbParser.RULE_multiplicativeOperator = 13;
mcbParser.RULE_nl = 14;
mcbParser.RULE_nls = 15;

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

	nl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlContext);
	    } else {
	        return this.getTypedRuleContext(NlContext,i);
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

	nls = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlsContext);
	    } else {
	        return this.getTypedRuleContext(NlsContext,i);
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

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

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



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_declaration;
    }

	functionDeclare() {
	    return this.getTypedRuleContext(FunctionDeclareContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitDeclaration(this);
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


	IntegerLiteral() {
	    return this.getToken(mcbParser.IntegerLiteral, 0);
	};

	scoreboardIdentifier() {
	    return this.getTypedRuleContext(ScoreboardIdentifierContext,0);
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

	ENTITY() {
	    return this.getToken(mcbParser.ENTITY, 0);
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



class NlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_nl;
    }

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


	EOF() {
	    return this.getToken(mcbParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterNl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitNl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitNl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NlsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_nls;
    }

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


	EOF() {
	    return this.getToken(mcbParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterNls(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitNls(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitNls(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




mcbParser.ScriptContext = ScriptContext; 
mcbParser.StatementsContext = StatementsContext; 
mcbParser.StatementContext = StatementContext; 
mcbParser.DeclarationContext = DeclarationContext; 
mcbParser.FunctionDeclareContext = FunctionDeclareContext; 
mcbParser.BlockContext = BlockContext; 
mcbParser.LoopStatementContext = LoopStatementContext; 
mcbParser.WhileDoContext = WhileDoContext; 
mcbParser.DoWhileContext = DoWhileContext; 
mcbParser.AssignmentContext = AssignmentContext; 
mcbParser.ExpressionContext = ExpressionContext; 
mcbParser.ScoreboardIdentifierContext = ScoreboardIdentifierContext; 
mcbParser.AdditiveOperatorContext = AdditiveOperatorContext; 
mcbParser.MultiplicativeOperatorContext = MultiplicativeOperatorContext; 
mcbParser.NlContext = NlContext; 
mcbParser.NlsContext = NlsContext; 
