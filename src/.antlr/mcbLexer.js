// Generated from e:\_Project\nodejs\mcb\src\mcb.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u001d\u00a0\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0019\u0006\u0019\u008a\n\u0019\r\u0019\u000e\u0019\u008b\u0003\u001a",
    "\u0006\u001a\u008f\n\u001a\r\u001a\u000e\u001a\u0090\u0003\u001b\u0003",
    "\u001b\u0007\u001b\u0095\n\u001b\f\u001b\u000e\u001b\u0098\u000b\u001b",
    "\u0003\u001c\u0006\u001c\u009b\n\u001c\r\u001c\u000e\u001c\u009c\u0003",
    "\u001c\u0003\u001c\u0002\u0002\u001d\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r",
    "\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014",
    "\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b5\u001c7\u001d\u0003",
    "\u0002\u0007\u0004\u0002\f\f\u000f\u000f\u0003\u00022;\u0005\u0002C",
    "\\aac|\u0007\u0002002;C\\aac|\u0005\u0002\u000b\f\u000e\u000f\"\"\u0002",
    "\u00a3\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002",
    "\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002",
    "+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002\u0002/\u0003",
    "\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u00023\u0003\u0002",
    "\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003\u0002\u0002",
    "\u0002\u00039\u0003\u0002\u0002\u0002\u0005<\u0003\u0002\u0002\u0002",
    "\u0007A\u0003\u0002\u0002\u0002\tG\u0003\u0002\u0002\u0002\u000bM\u0003",
    "\u0002\u0002\u0002\rP\u0003\u0002\u0002\u0002\u000fS\u0003\u0002\u0002",
    "\u0002\u0011U\u0003\u0002\u0002\u0002\u0013^\u0003\u0002\u0002\u0002",
    "\u0015`\u0003\u0002\u0002\u0002\u0017e\u0003\u0002\u0002\u0002\u0019",
    "g\u0003\u0002\u0002\u0002\u001bi\u0003\u0002\u0002\u0002\u001dl\u0003",
    "\u0002\u0002\u0002\u001fo\u0003\u0002\u0002\u0002!t\u0003\u0002\u0002",
    "\u0002#z\u0003\u0002\u0002\u0002%|\u0003\u0002\u0002\u0002\'~\u0003",
    "\u0002\u0002\u0002)\u0080\u0003\u0002\u0002\u0002+\u0082\u0003\u0002",
    "\u0002\u0002-\u0084\u0003\u0002\u0002\u0002/\u0086\u0003\u0002\u0002",
    "\u00021\u0089\u0003\u0002\u0002\u00023\u008e\u0003\u0002\u0002\u0002",
    "5\u0092\u0003\u0002\u0002\u00027\u009a\u0003\u0002\u0002\u00029:\u0007",
    "k\u0002\u0002:;\u0007h\u0002\u0002;\u0004\u0003\u0002\u0002\u0002<=",
    "\u0007v\u0002\u0002=>\u0007j\u0002\u0002>?\u0007g\u0002\u0002?@\u0007",
    "p\u0002\u0002@\u0006\u0003\u0002\u0002\u0002AB\u0007g\u0002\u0002BC",
    "\u0007p\u0002\u0002CD\u0007f\u0002\u0002DE\u0007k\u0002\u0002EF\u0007",
    "h\u0002\u0002F\b\u0003\u0002\u0002\u0002GH\u0007d\u0002\u0002HI\u0007",
    "n\u0002\u0002IJ\u0007q\u0002\u0002JK\u0007e\u0002\u0002KL\u0007m\u0002",
    "\u0002L\n\u0003\u0002\u0002\u0002MN\u0007?\u0002\u0002NO\u0007?\u0002",
    "\u0002O\f\u0003\u0002\u0002\u0002PQ\u0007@\u0002\u0002QR\u0007?\u0002",
    "\u0002R\u000e\u0003\u0002\u0002\u0002ST\u0007B\u0002\u0002T\u0010\u0003",
    "\u0002\u0002\u0002UV\u0007r\u0002\u0002VW\u0007q\u0002\u0002WX\u0007",
    "u\u0002\u0002XY\u0007k\u0002\u0002YZ\u0007v\u0002\u0002Z[\u0007k\u0002",
    "\u0002[\\\u0007q\u0002\u0002\\]\u0007p\u0002\u0002]\u0012\u0003\u0002",
    "\u0002\u0002^_\u00070\u0002\u0002_\u0014\u0003\u0002\u0002\u0002`a\u0007",
    "j\u0002\u0002ab\u0007g\u0002\u0002bc\u0007t\u0002\u0002cd\u0007g\u0002",
    "\u0002d\u0016\u0003\u0002\u0002\u0002ef\u0007?\u0002\u0002f\u0018\u0003",
    "\u0002\u0002\u0002gh\u0007%\u0002\u0002h\u001a\u0003\u0002\u0002\u0002",
    "ij\u0007c\u0002\u0002jk\u0007v\u0002\u0002k\u001c\u0003\u0002\u0002",
    "\u0002lm\u0007c\u0002\u0002mn\u0007u\u0002\u0002n\u001e\u0003\u0002",
    "\u0002\u0002op\u0007f\u0002\u0002pq\u0007k\u0002\u0002qr\u0007e\u0002",
    "\u0002rs\u0007v\u0002\u0002s \u0003\u0002\u0002\u0002tu\u0007u\u0002",
    "\u0002uv\u0007e\u0002\u0002vw\u0007q\u0002\u0002wx\u0007t\u0002\u0002",
    "xy\u0007g\u0002\u0002y\"\u0003\u0002\u0002\u0002z{\u0007,\u0002\u0002",
    "{$\u0003\u0002\u0002\u0002|}\u00071\u0002\u0002}&\u0003\u0002\u0002",
    "\u0002~\u007f\u0007\'\u0002\u0002\u007f(\u0003\u0002\u0002\u0002\u0080",
    "\u0081\u0007-\u0002\u0002\u0081*\u0003\u0002\u0002\u0002\u0082\u0083",
    "\u0007/\u0002\u0002\u0083,\u0003\u0002\u0002\u0002\u0084\u0085\u0007",
    "*\u0002\u0002\u0085.\u0003\u0002\u0002\u0002\u0086\u0087\u0007+\u0002",
    "\u0002\u00870\u0003\u0002\u0002\u0002\u0088\u008a\t\u0002\u0002\u0002",
    "\u0089\u0088\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002",
    "\u008b\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002",
    "\u008c2\u0003\u0002\u0002\u0002\u008d\u008f\t\u0003\u0002\u0002\u008e",
    "\u008d\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090",
    "\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091",
    "4\u0003\u0002\u0002\u0002\u0092\u0096\t\u0004\u0002\u0002\u0093\u0095",
    "\t\u0005\u0002\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0095\u0098",
    "\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0096\u0097",
    "\u0003\u0002\u0002\u0002\u00976\u0003\u0002\u0002\u0002\u0098\u0096",
    "\u0003\u0002\u0002\u0002\u0099\u009b\t\u0006\u0002\u0002\u009a\u0099",
    "\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009a",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009e",
    "\u0003\u0002\u0002\u0002\u009e\u009f\b\u001c\u0002\u0002\u009f8\u0003",
    "\u0002\u0002\u0002\u0007\u0002\u008b\u0090\u0096\u009c\u0003\b\u0002",
    "\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class mcbLexer extends antlr4.Lexer {

    static grammarFileName = "mcb.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'if'", "'then'", "'endif'", "'block'", "'=='", 
                         "'>='", "'@'", "'position'", "'.'", "'here'", "'='", 
                         "'#'", "'at'", "'as'", "'dict'", "'score'", "'*'", 
                         "'/'", "'%'", "'+'", "'-'", "'('", "')'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          "NEWLINE", "INT", "CHAR", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "T__13", "T__14", "T__15", "T__16", "T__17", "T__18", 
                      "T__19", "T__20", "T__21", "T__22", "NEWLINE", "INT", 
                      "CHAR", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

mcbLexer.EOF = antlr4.Token.EOF;
mcbLexer.T__0 = 1;
mcbLexer.T__1 = 2;
mcbLexer.T__2 = 3;
mcbLexer.T__3 = 4;
mcbLexer.T__4 = 5;
mcbLexer.T__5 = 6;
mcbLexer.T__6 = 7;
mcbLexer.T__7 = 8;
mcbLexer.T__8 = 9;
mcbLexer.T__9 = 10;
mcbLexer.T__10 = 11;
mcbLexer.T__11 = 12;
mcbLexer.T__12 = 13;
mcbLexer.T__13 = 14;
mcbLexer.T__14 = 15;
mcbLexer.T__15 = 16;
mcbLexer.T__16 = 17;
mcbLexer.T__17 = 18;
mcbLexer.T__18 = 19;
mcbLexer.T__19 = 20;
mcbLexer.T__20 = 21;
mcbLexer.T__21 = 22;
mcbLexer.T__22 = 23;
mcbLexer.NEWLINE = 24;
mcbLexer.INT = 25;
mcbLexer.CHAR = 26;
mcbLexer.WS = 27;



