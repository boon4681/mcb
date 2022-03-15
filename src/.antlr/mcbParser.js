// Generated from e:\_Project\nodejs\mcb\src\mcbParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mcbParserListener from './mcbParserListener.js';
import mcbParserVisitor from './mcbParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003=\u0124\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0003\u0002\u0007\u0002>\n\u0002\f\u0002\u000e\u0002A\u000b\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0007\u0002F\n\u0002\f\u0002\u000e\u0002",
    "I\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003Q\n\u0003\f\u0003\u000e\u0003T\u000b\u0003",
    "\u0005\u0003V\n\u0003\u0003\u0003\u0005\u0003Y\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004^\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0007",
    "\u0007h\n\u0007\f\u0007\u000e\u0007k\u000b\u0007\u0003\u0007\u0003\u0007",
    "\u0007\u0007o\n\u0007\f\u0007\u000e\u0007r\u000b\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0005\bx\n\b\u0003\t\u0003\t\u0007\t|\n\t\f\t",
    "\u000e\t\u007f\u000b\t\u0003\t\u0003\t\u0003\t\u0007\t\u0084\n\t\f\t",
    "\u000e\t\u0087\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0007\n\u008d",
    "\n\n\f\n\u000e\n\u0090\u000b\n\u0003\n\u0003\n\u0003\n\u0007\n\u0095",
    "\n\n\f\n\u000e\n\u0098\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0007\u000b\u009f\n\u000b\f\u000b\u000e\u000b\u00a2\u000b",
    "\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0005\r\u00a9\n\r\u0003",
    "\u000e\u0003\u000e\u0007\u000e\u00ad\n\u000e\f\u000e\u000e\u000e\u00b0",
    "\u000b\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00b4\n\u000e\f\u000e",
    "\u000e\u000e\u00b7\u000b\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00bf\n\u000f\f\u000f\u000e",
    "\u000f\u00c2\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0007\u0010\u00c8\n\u0010\f\u0010\u000e\u0010\u00cb\u000b\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00d1\n\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00dd\n",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u00e7\n\u0017\f\u0017\u000e",
    "\u0017\u00ea\u000b\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0005\u0019\u00f6\n\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0007\u001b\u0102\n\u001b\f\u001b\u000e\u001b\u0105\u000b\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0007\u001c\u010b\n",
    "\u001c\f\u001c\u000e\u001c\u010e\u000b\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0003\u001d\u0007\u001d\u0114\n\u001d\f\u001d\u000e\u001d",
    "\u0117\u000b\u001d\u0003\u001d\u0005\u001d\u011a\n\u001d\u0003\u001e",
    "\u0006\u001e\u011d\n\u001e\r\u001e\u000e\u001e\u011e\u0003\u001e\u0005",
    "\u001e\u0122\n\u001e\u0003\u001e\u0002\u0002\u001f\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02468:\u0002\u0004\u0003\u0002\u0012\u0013\u0003\u0002\u000f\u0011",
    "\u0002\u0128\u0002?\u0003\u0002\u0002\u0002\u0004U\u0003\u0002\u0002",
    "\u0002\u0006]\u0003\u0002\u0002\u0002\b_\u0003\u0002\u0002\u0002\na",
    "\u0003\u0002\u0002\u0002\fe\u0003\u0002\u0002\u0002\u000ew\u0003\u0002",
    "\u0002\u0002\u0010y\u0003\u0002\u0002\u0002\u0012\u008a\u0003\u0002",
    "\u0002\u0002\u0014\u009b\u0003\u0002\u0002\u0002\u0016\u00a3\u0003\u0002",
    "\u0002\u0002\u0018\u00a8\u0003\u0002\u0002\u0002\u001a\u00aa\u0003\u0002",
    "\u0002\u0002\u001c\u00ba\u0003\u0002\u0002\u0002\u001e\u00c3\u0003\u0002",
    "\u0002\u0002 \u00cc\u0003\u0002\u0002\u0002\"\u00d4\u0003\u0002\u0002",
    "\u0002$\u00d6\u0003\u0002\u0002\u0002&\u00dc\u0003\u0002\u0002\u0002",
    "(\u00de\u0003\u0002\u0002\u0002*\u00e0\u0003\u0002\u0002\u0002,\u00e2",
    "\u0003\u0002\u0002\u0002.\u00ed\u0003\u0002\u0002\u00020\u00f5\u0003",
    "\u0002\u0002\u00022\u00f7\u0003\u0002\u0002\u00024\u00fd\u0003\u0002",
    "\u0002\u00026\u0108\u0003\u0002\u0002\u00028\u0119\u0003\u0002\u0002",
    "\u0002:\u0121\u0003\u0002\u0002\u0002<>\u0007\u0005\u0002\u0002=<\u0003",
    "\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002",
    "?@\u0003\u0002\u0002\u0002@G\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002",
    "\u0002BC\u0005\u0006\u0004\u0002CD\u00058\u001d\u0002DF\u0003\u0002",
    "\u0002\u0002EB\u0003\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003",
    "\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002HJ\u0003\u0002\u0002\u0002",
    "IG\u0003\u0002\u0002\u0002JK\u0007\u0002\u0002\u0003K\u0003\u0003\u0002",
    "\u0002\u0002LR\u0005\u0006\u0004\u0002MN\u0005:\u001e\u0002NO\u0005",
    "\u0006\u0004\u0002OQ\u0003\u0002\u0002\u0002PM\u0003\u0002\u0002\u0002",
    "QT\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002",
    "\u0002SV\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002UL\u0003\u0002",
    "\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u0003\u0002\u0002\u0002WY\u0005",
    ":\u001e\u0002XW\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y\u0005",
    "\u0003\u0002\u0002\u0002Z^\u0005\b\u0005\u0002[^\u0005\u0014\u000b\u0002",
    "\\^\u0005\u000e\b\u0002]Z\u0003\u0002\u0002\u0002][\u0003\u0002\u0002",
    "\u0002]\\\u0003\u0002\u0002\u0002^\u0007\u0003\u0002\u0002\u0002_`\u0005",
    "\n\u0006\u0002`\t\u0003\u0002\u0002\u0002ab\u0007$\u0002\u0002bc\u0007",
    "/\u0002\u0002cd\u0005\f\u0007\u0002d\u000b\u0003\u0002\u0002\u0002e",
    "i\u0007\u0014\u0002\u0002fh\u0007\u0005\u0002\u0002gf\u0003\u0002\u0002",
    "\u0002hk\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002",
    "\u0002\u0002jl\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002lp\u0005",
    "\u0004\u0003\u0002mo\u0007\u0005\u0002\u0002nm\u0003\u0002\u0002\u0002",
    "or\u0003\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002",
    "\u0002qs\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002st\u0007%",
    "\u0002\u0002t\r\u0003\u0002\u0002\u0002ux\u0005\u0010\t\u0002vx\u0005",
    "\u0012\n\u0002wu\u0003\u0002\u0002\u0002wv\u0003\u0002\u0002\u0002x",
    "\u000f\u0003\u0002\u0002\u0002y}\u0007)\u0002\u0002z|\u0007\u0005\u0002",
    "\u0002{z\u0003\u0002\u0002\u0002|\u007f\u0003\u0002\u0002\u0002}{\u0003",
    "\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u0080\u0003\u0002\u0002",
    "\u0002\u007f}\u0003\u0002\u0002\u0002\u0080\u0081\u0007\b\u0002\u0002",
    "\u0081\u0085\u0007\t\u0002\u0002\u0082\u0084\u0007\u0005\u0002\u0002",
    "\u0083\u0082\u0003\u0002\u0002\u0002\u0084\u0087\u0003\u0002\u0002\u0002",
    "\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002",
    "\u0086\u0088\u0003\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0005\f\u0007\u0002\u0089\u0011\u0003\u0002\u0002\u0002",
    "\u008a\u008e\u0007*\u0002\u0002\u008b\u008d\u0007\u0005\u0002\u0002",
    "\u008c\u008b\u0003\u0002\u0002\u0002\u008d\u0090\u0003\u0002\u0002\u0002",
    "\u008e\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002",
    "\u008f\u0091\u0003\u0002\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002",
    "\u0091\u0092\u0007\b\u0002\u0002\u0092\u0096\u0007\t\u0002\u0002\u0093",
    "\u0095\u0007\u0005\u0002\u0002\u0094\u0093\u0003\u0002\u0002\u0002\u0095",
    "\u0098\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002\u0002\u0096",
    "\u0097\u0003\u0002\u0002\u0002\u0097\u0099\u0003\u0002\u0002\u0002\u0098",
    "\u0096\u0003\u0002\u0002\u0002\u0099\u009a\u0005\f\u0007\u0002\u009a",
    "\u0013\u0003\u0002\u0002\u0002\u009b\u009c\u0005 \u0011\u0002\u009c",
    "\u00a0\u0007\u0015\u0002\u0002\u009d\u009f\u0005\u0016\f\u0002\u009e",
    "\u009d\u0003\u0002\u0002\u0002\u009f\u00a2\u0003\u0002\u0002\u0002\u00a0",
    "\u009e\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1",
    "\u0015\u0003\u0002\u0002\u0002\u00a2\u00a0\u0003\u0002\u0002\u0002\u00a3",
    "\u00a4\u0005\u001c\u000f\u0002\u00a4\u0017\u0003\u0002\u0002\u0002\u00a5",
    "\u00a9\u0005\"\u0012\u0002\u00a6\u00a9\u0005 \u0011\u0002\u00a7\u00a9",
    "\u0005\u001a\u000e\u0002\u00a8\u00a5\u0003\u0002\u0002\u0002\u00a8\u00a6",
    "\u0003\u0002\u0002\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a9\u0019",
    "\u0003\u0002\u0002\u0002\u00aa\u00ae\u0007\b\u0002\u0002\u00ab\u00ad",
    "\u0007\u0005\u0002\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad\u00b0",
    "\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00ae\u00af",
    "\u0003\u0002\u0002\u0002\u00af\u00b1\u0003\u0002\u0002\u0002\u00b0\u00ae",
    "\u0003\u0002\u0002\u0002\u00b1\u00b5\u0005\u0016\f\u0002\u00b2\u00b4",
    "\u0007\u0005\u0002\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b4\u00b7",
    "\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5\u00b6",
    "\u0003\u0002\u0002\u0002\u00b6\u00b8\u0003\u0002\u0002\u0002\u00b7\u00b5",
    "\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\t\u0002\u0002\u00b9\u001b",
    "\u0003\u0002\u0002\u0002\u00ba\u00c0\u0005\u001e\u0010\u0002\u00bb\u00bc",
    "\u0005(\u0015\u0002\u00bc\u00bd\u0005\u001e\u0010\u0002\u00bd\u00bf",
    "\u0003\u0002\u0002\u0002\u00be\u00bb\u0003\u0002\u0002\u0002\u00bf\u00c2",
    "\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002\u00c0\u00c1",
    "\u0003\u0002\u0002\u0002\u00c1\u001d\u0003\u0002\u0002\u0002\u00c2\u00c0",
    "\u0003\u0002\u0002\u0002\u00c3\u00c9\u0005\u0018\r\u0002\u00c4\u00c5",
    "\u0005*\u0016\u0002\u00c5\u00c6\u0005\u0018\r\u0002\u00c6\u00c8\u0003",
    "\u0002\u0002\u0002\u00c7\u00c4\u0003\u0002\u0002\u0002\u00c8\u00cb\u0003",
    "\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003",
    "\u0002\u0002\u0002\u00ca\u001f\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\u0007/\u0002\u0002\u00cd\u00d0\u0007",
    "\n\u0002\u0002\u00ce\u00d1\u0007/\u0002\u0002\u00cf\u00d1\u0005$\u0013",
    "\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d0\u00cf\u0003\u0002\u0002",
    "\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007\u000b\u0002",
    "\u0002\u00d3!\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007.\u0002\u0002",
    "\u00d5#\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007#\u0002\u0002\u00d7",
    "\u00d8\u0005,\u0017\u0002\u00d8%\u0003\u0002\u0002\u0002\u00d9\u00dd",
    "\u0007+\u0002\u0002\u00da\u00dd\u0007.\u0002\u0002\u00db\u00dd\u0005",
    "6\u001c\u0002\u00dc\u00d9\u0003\u0002\u0002\u0002\u00dc\u00da\u0003",
    "\u0002\u0002\u0002\u00dc\u00db\u0003\u0002\u0002\u0002\u00dd\'\u0003",
    "\u0002\u0002\u0002\u00de\u00df\t\u0002\u0002\u0002\u00df)\u0003\u0002",
    "\u0002\u0002\u00e0\u00e1\t\u0003\u0002\u0002\u00e1+\u0003\u0002\u0002",
    "\u0002\u00e2\u00e3\u0007\n\u0002\u0002\u00e3\u00e8\u0005.\u0018\u0002",
    "\u00e4\u00e5\u0007\u0007\u0002\u0002\u00e5\u00e7\u0005.\u0018\u0002",
    "\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e7\u00ea\u0003\u0002\u0002\u0002",
    "\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002",
    "\u00e9\u00eb\u0003\u0002\u0002\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002",
    "\u00eb\u00ec\u0007\u000b\u0002\u0002\u00ec-\u0003\u0002\u0002\u0002",
    "\u00ed\u00ee\u0007/\u0002\u0002\u00ee\u00ef\u0007\u0015\u0002\u0002",
    "\u00ef\u00f0\u00050\u0019\u0002\u00f0/\u0003\u0002\u0002\u0002\u00f1",
    "\u00f6\u0005&\u0014\u0002\u00f2\u00f6\u00054\u001b\u0002\u00f3\u00f6",
    "\u0007/\u0002\u0002\u00f4\u00f6\u00052\u001a\u0002\u00f5\u00f1\u0003",
    "\u0002\u0002\u0002\u00f5\u00f2\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003",
    "\u0002\u0002\u0002\u00f5\u00f4\u0003\u0002\u0002\u0002\u00f61\u0003",
    "\u0002\u0002\u0002\u00f7\u00f8\u0007\f\u0002\u0002\u00f8\u00f9\u0007",
    "/\u0002\u0002\u00f9\u00fa\u0007\u0015\u0002\u0002\u00fa\u00fb\u0005",
    "&\u0014\u0002\u00fb\u00fc\u0007\r\u0002\u0002\u00fc3\u0003\u0002\u0002",
    "\u0002\u00fd\u00fe\u0007\n\u0002\u0002\u00fe\u0103\u0005&\u0014\u0002",
    "\u00ff\u0100\u0007\u0007\u0002\u0002\u0100\u0102\u0005&\u0014\u0002",
    "\u0101\u00ff\u0003\u0002\u0002\u0002\u0102\u0105\u0003\u0002\u0002\u0002",
    "\u0103\u0101\u0003\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002",
    "\u0104\u0106\u0003\u0002\u0002\u0002\u0105\u0103\u0003\u0002\u0002\u0002",
    "\u0106\u0107\u0007\u000b\u0002\u0002\u01075\u0003\u0002\u0002\u0002",
    "\u0108\u010c\u00070\u0002\u0002\u0109\u010b\u00079\u0002\u0002\u010a",
    "\u0109\u0003\u0002\u0002\u0002\u010b\u010e\u0003\u0002\u0002\u0002\u010c",
    "\u010a\u0003\u0002\u0002\u0002\u010c\u010d\u0003\u0002\u0002\u0002\u010d",
    "\u010f\u0003\u0002\u0002\u0002\u010e\u010c\u0003\u0002\u0002\u0002\u010f",
    "\u0110\u00078\u0002\u0002\u01107\u0003\u0002\u0002\u0002\u0111\u0115",
    "\u0007\u0005\u0002\u0002\u0112\u0114\u0007\u0005\u0002\u0002\u0113\u0112",
    "\u0003\u0002\u0002\u0002\u0114\u0117\u0003\u0002\u0002\u0002\u0115\u0113",
    "\u0003\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002\u0002\u0116\u011a",
    "\u0003\u0002\u0002\u0002\u0117\u0115\u0003\u0002\u0002\u0002\u0118\u011a",
    "\u0007\u0002\u0002\u0003\u0119\u0111\u0003\u0002\u0002\u0002\u0119\u0118",
    "\u0003\u0002\u0002\u0002\u011a9\u0003\u0002\u0002\u0002\u011b\u011d",
    "\u0007\u0005\u0002\u0002\u011c\u011b\u0003\u0002\u0002\u0002\u011d\u011e",
    "\u0003\u0002\u0002\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011e\u011f",
    "\u0003\u0002\u0002\u0002\u011f\u0122\u0003\u0002\u0002\u0002\u0120\u0122",
    "\u0007\u0002\u0002\u0003\u0121\u011c\u0003\u0002\u0002\u0002\u0121\u0120",
    "\u0003\u0002\u0002\u0002\u0122;\u0003\u0002\u0002\u0002\u001f?GRUX]",
    "ipw}\u0085\u008e\u0096\u00a0\u00a8\u00ae\u00b5\u00c0\u00c9\u00d0\u00dc",
    "\u00e8\u00f5\u0103\u010c\u0115\u0119\u011e\u0121"].join("");


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
                             "LineStrText", "I_Comment", "I_WS", "I_NL", 
                             "ErrorCharacter" ];
    static ruleNames = [ "script", "statements", "statement", "declaration", 
                         "functionDeclare", "block", "loopStatement", "whileDo", 
                         "doWhile", "assignment", "expression", "asExpression", 
                         "parentAssignableExpression", "additiveExpression", 
                         "multiplicativeExpression", "scoreboardIdentifier", 
                         "scoreboardLiteral", "scoreboardTarget", "literalConstant", 
                         "additiveOperator", "multiplicativeOperator", "nbt", 
                         "nbtEquality", "asNBT", "nbtSet", "nbtArray", "stringLiteral", 
                         "nl", "nls" ];

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
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 58;
	            this.match(mcbParser.NL);
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (mcbParser.FUN - 34)) | (1 << (mcbParser.WHILE - 34)) | (1 << (mcbParser.DO - 34)) | (1 << (mcbParser.Identifier - 34)))) !== 0)) {
	            this.state = 64;
	            this.statement();
	            this.state = 65;
	            this.nl();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 72;
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
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (mcbParser.FUN - 34)) | (1 << (mcbParser.WHILE - 34)) | (1 << (mcbParser.DO - 34)) | (1 << (mcbParser.Identifier - 34)))) !== 0)) {
	            this.state = 74;
	            this.statement();
	            this.state = 80;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 75;
	                    this.nls();
	                    this.state = 76;
	                    this.statement(); 
	                }
	                this.state = 82;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	            }

	        }

	        this.state = 86;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 85;
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
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.FUN:
	            this.state = 88;
	            this.declaration();
	            break;
	        case mcbParser.Identifier:
	            this.state = 89;
	            this.assignment();
	            break;
	        case mcbParser.WHILE:
	        case mcbParser.DO:
	            this.state = 90;
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
	        this.state = 93;
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
	        this.state = 95;
	        this.match(mcbParser.FUN);
	        this.state = 96;
	        this.match(mcbParser.Identifier);
	        this.state = 97;
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
	        this.state = 99;
	        this.match(mcbParser.COLON);
	        this.state = 103;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 100;
	                this.match(mcbParser.NL); 
	            }
	            this.state = 105;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	        this.state = 106;
	        this.statements();
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
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.WHILE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.whileDo();
	            break;
	        case mcbParser.DO:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
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
	        this.state = 119;
	        this.match(mcbParser.WHILE);
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 120;
	            this.match(mcbParser.NL);
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 126;
	        this.match(mcbParser.LPAREN);
	        this.state = 127;
	        this.match(mcbParser.RPAREN);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 128;
	            this.match(mcbParser.NL);
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 134;
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
	        this.state = 136;
	        this.match(mcbParser.DO);
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
	        this.match(mcbParser.LPAREN);
	        this.state = 144;
	        this.match(mcbParser.RPAREN);
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 145;
	            this.match(mcbParser.NL);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 151;
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
	        this.state = 153;
	        this.scoreboardIdentifier();
	        this.state = 154;
	        this.match(mcbParser.ASSIGNMENT);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.LPAREN || _la===mcbParser.IntegerLiteral || _la===mcbParser.Identifier) {
	            this.state = 155;
	            this.expression();
	            this.state = 160;
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, mcbParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.additiveExpression();
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



	asExpression() {
	    let localctx = new AsExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, mcbParser.RULE_asExpression);
	    try {
	        this.state = 166;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.IntegerLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 163;
	            this.scoreboardLiteral();
	            break;
	        case mcbParser.Identifier:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            this.scoreboardIdentifier();
	            break;
	        case mcbParser.LPAREN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 165;
	            this.parentAssignableExpression();
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



	parentAssignableExpression() {
	    let localctx = new ParentAssignableExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, mcbParser.RULE_parentAssignableExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(mcbParser.LPAREN);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 169;
	            this.match(mcbParser.NL);
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 175;
	        this.expression();
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 176;
	            this.match(mcbParser.NL);
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 182;
	        this.match(mcbParser.RPAREN);
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



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, mcbParser.RULE_additiveExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.multiplicativeExpression();
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.ADD || _la===mcbParser.SUB) {
	            this.state = 185;
	            this.additiveOperator();
	            this.state = 186;
	            this.multiplicativeExpression();
	            this.state = 192;
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



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, mcbParser.RULE_multiplicativeExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.asExpression();
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.MULT) | (1 << mcbParser.MOD) | (1 << mcbParser.DIV))) !== 0)) {
	            this.state = 194;
	            this.multiplicativeOperator();
	            this.state = 195;
	            this.asExpression();
	            this.state = 201;
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



	scoreboardIdentifier() {
	    let localctx = new ScoreboardIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, mcbParser.RULE_scoreboardIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(mcbParser.Identifier);
	        this.state = 203;
	        this.match(mcbParser.LSQUARE);
	        this.state = 206;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.Identifier:
	            this.state = 204;
	            this.match(mcbParser.Identifier);
	            break;
	        case mcbParser.ENTITY:
	            this.state = 205;
	            this.scoreboardTarget();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 208;
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



	scoreboardLiteral() {
	    let localctx = new ScoreboardLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, mcbParser.RULE_scoreboardLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(mcbParser.IntegerLiteral);
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



	scoreboardTarget() {
	    let localctx = new ScoreboardTargetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, mcbParser.RULE_scoreboardTarget);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(mcbParser.ENTITY);
	        this.state = 213;
	        this.nbt();
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



	literalConstant() {
	    let localctx = new LiteralConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, mcbParser.RULE_literalConstant);
	    try {
	        this.state = 218;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.RealLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 215;
	            this.match(mcbParser.RealLiteral);
	            break;
	        case mcbParser.IntegerLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 216;
	            this.match(mcbParser.IntegerLiteral);
	            break;
	        case mcbParser.QUOTE_OPEN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 217;
	            this.stringLiteral();
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



	additiveOperator() {
	    let localctx = new AdditiveOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, mcbParser.RULE_additiveOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
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
	    this.enterRule(localctx, 40, mcbParser.RULE_multiplicativeOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
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



	nbt() {
	    let localctx = new NbtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, mcbParser.RULE_nbt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.match(mcbParser.LSQUARE);
	        this.state = 225;
	        this.nbtEquality();
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.COMMA) {
	            this.state = 226;
	            this.match(mcbParser.COMMA);
	            this.state = 227;
	            this.nbtEquality();
	            this.state = 232;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 233;
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



	nbtEquality() {
	    let localctx = new NbtEqualityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, mcbParser.RULE_nbtEquality);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.match(mcbParser.Identifier);
	        this.state = 236;
	        this.match(mcbParser.ASSIGNMENT);
	        this.state = 237;
	        this.asNBT();
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



	asNBT() {
	    let localctx = new AsNBTContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, mcbParser.RULE_asNBT);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.RealLiteral:
	        case mcbParser.IntegerLiteral:
	        case mcbParser.QUOTE_OPEN:
	            this.state = 239;
	            this.literalConstant();
	            break;
	        case mcbParser.LSQUARE:
	            this.state = 240;
	            this.nbtArray();
	            break;
	        case mcbParser.Identifier:
	            this.state = 241;
	            this.match(mcbParser.Identifier);
	            break;
	        case mcbParser.LCURL:
	            this.state = 242;
	            this.nbtSet();
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



	nbtSet() {
	    let localctx = new NbtSetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, mcbParser.RULE_nbtSet);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.match(mcbParser.LCURL);
	        this.state = 246;
	        this.match(mcbParser.Identifier);
	        this.state = 247;
	        this.match(mcbParser.ASSIGNMENT);
	        this.state = 248;
	        this.literalConstant();
	        this.state = 249;
	        this.match(mcbParser.RCURL);
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



	nbtArray() {
	    let localctx = new NbtArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, mcbParser.RULE_nbtArray);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 251;
	        this.match(mcbParser.LSQUARE);
	        this.state = 252;
	        this.literalConstant();
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.COMMA) {
	            this.state = 253;
	            this.match(mcbParser.COMMA);
	            this.state = 254;
	            this.literalConstant();
	            this.state = 259;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 260;
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



	stringLiteral() {
	    let localctx = new StringLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, mcbParser.RULE_stringLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.match(mcbParser.QUOTE_OPEN);
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.LineStrText) {
	            this.state = 263;
	            this.match(mcbParser.LineStrText);
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 269;
	        this.match(mcbParser.QUOTE_CLOSE);
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
	    this.enterRule(localctx, 54, mcbParser.RULE_nl);
	    var _la = 0; // Token type
	    try {
	        this.state = 279;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.NL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 271;
	            this.match(mcbParser.NL);
	            this.state = 275;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===mcbParser.NL) {
	                this.state = 272;
	                this.match(mcbParser.NL);
	                this.state = 277;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case mcbParser.EOF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 278;
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
	    this.enterRule(localctx, 56, mcbParser.RULE_nls);
	    try {
	        this.state = 287;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.NL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 282; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 281;
	            		this.match(mcbParser.NL);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 284; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,27, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case mcbParser.EOF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
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
mcbParser.I_Comment = 56;
mcbParser.I_WS = 57;
mcbParser.I_NL = 58;
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
mcbParser.RULE_asExpression = 11;
mcbParser.RULE_parentAssignableExpression = 12;
mcbParser.RULE_additiveExpression = 13;
mcbParser.RULE_multiplicativeExpression = 14;
mcbParser.RULE_scoreboardIdentifier = 15;
mcbParser.RULE_scoreboardLiteral = 16;
mcbParser.RULE_scoreboardTarget = 17;
mcbParser.RULE_literalConstant = 18;
mcbParser.RULE_additiveOperator = 19;
mcbParser.RULE_multiplicativeOperator = 20;
mcbParser.RULE_nbt = 21;
mcbParser.RULE_nbtEquality = 22;
mcbParser.RULE_asNBT = 23;
mcbParser.RULE_nbtSet = 24;
mcbParser.RULE_nbtArray = 25;
mcbParser.RULE_stringLiteral = 26;
mcbParser.RULE_nl = 27;
mcbParser.RULE_nls = 28;

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

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
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



class AsExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_asExpression;
    }

	scoreboardLiteral() {
	    return this.getTypedRuleContext(ScoreboardLiteralContext,0);
	};

	scoreboardIdentifier() {
	    return this.getTypedRuleContext(ScoreboardIdentifierContext,0);
	};

	parentAssignableExpression() {
	    return this.getTypedRuleContext(ParentAssignableExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterAsExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitAsExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitAsExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParentAssignableExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_parentAssignableExpression;
    }

	LPAREN() {
	    return this.getToken(mcbParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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
	        listener.enterParentAssignableExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitParentAssignableExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitParentAssignableExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_additiveExpression;
    }

	multiplicativeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExpressionContext,i);
	    }
	};

	additiveOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveOperatorContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitAdditiveExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplicativeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_multiplicativeExpression;
    }

	asExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AsExpressionContext);
	    } else {
	        return this.getTypedRuleContext(AsExpressionContext,i);
	    }
	};

	multiplicativeOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeOperatorContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitMultiplicativeExpression(this);
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

	scoreboardTarget() {
	    return this.getTypedRuleContext(ScoreboardTargetContext,0);
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



class ScoreboardLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_scoreboardLiteral;
    }

	IntegerLiteral() {
	    return this.getToken(mcbParser.IntegerLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterScoreboardLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitScoreboardLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitScoreboardLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScoreboardTargetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_scoreboardTarget;
    }

	ENTITY() {
	    return this.getToken(mcbParser.ENTITY, 0);
	};

	nbt() {
	    return this.getTypedRuleContext(NbtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterScoreboardTarget(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitScoreboardTarget(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitScoreboardTarget(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_literalConstant;
    }

	RealLiteral() {
	    return this.getToken(mcbParser.RealLiteral, 0);
	};

	IntegerLiteral() {
	    return this.getToken(mcbParser.IntegerLiteral, 0);
	};

	stringLiteral() {
	    return this.getTypedRuleContext(StringLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterLiteralConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitLiteralConstant(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitLiteralConstant(this);
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



class NbtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_nbt;
    }

	LSQUARE() {
	    return this.getToken(mcbParser.LSQUARE, 0);
	};

	nbtEquality = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NbtEqualityContext);
	    } else {
	        return this.getTypedRuleContext(NbtEqualityContext,i);
	    }
	};

	RSQUARE() {
	    return this.getToken(mcbParser.RSQUARE, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.COMMA);
	    } else {
	        return this.getToken(mcbParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterNbt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitNbt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitNbt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NbtEqualityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_nbtEquality;
    }

	Identifier() {
	    return this.getToken(mcbParser.Identifier, 0);
	};

	ASSIGNMENT() {
	    return this.getToken(mcbParser.ASSIGNMENT, 0);
	};

	asNBT() {
	    return this.getTypedRuleContext(AsNBTContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterNbtEquality(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitNbtEquality(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitNbtEquality(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsNBTContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_asNBT;
    }

	literalConstant() {
	    return this.getTypedRuleContext(LiteralConstantContext,0);
	};

	nbtArray() {
	    return this.getTypedRuleContext(NbtArrayContext,0);
	};

	Identifier() {
	    return this.getToken(mcbParser.Identifier, 0);
	};

	nbtSet() {
	    return this.getTypedRuleContext(NbtSetContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterAsNBT(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitAsNBT(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitAsNBT(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NbtSetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_nbtSet;
    }

	LCURL() {
	    return this.getToken(mcbParser.LCURL, 0);
	};

	Identifier() {
	    return this.getToken(mcbParser.Identifier, 0);
	};

	ASSIGNMENT() {
	    return this.getToken(mcbParser.ASSIGNMENT, 0);
	};

	literalConstant() {
	    return this.getTypedRuleContext(LiteralConstantContext,0);
	};

	RCURL() {
	    return this.getToken(mcbParser.RCURL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterNbtSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitNbtSet(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitNbtSet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NbtArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_nbtArray;
    }

	LSQUARE() {
	    return this.getToken(mcbParser.LSQUARE, 0);
	};

	literalConstant = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralConstantContext);
	    } else {
	        return this.getTypedRuleContext(LiteralConstantContext,i);
	    }
	};

	RSQUARE() {
	    return this.getToken(mcbParser.RSQUARE, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.COMMA);
	    } else {
	        return this.getToken(mcbParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterNbtArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitNbtArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitNbtArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_stringLiteral;
    }

	QUOTE_OPEN() {
	    return this.getToken(mcbParser.QUOTE_OPEN, 0);
	};

	QUOTE_CLOSE() {
	    return this.getToken(mcbParser.QUOTE_CLOSE, 0);
	};

	LineStrText = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.LineStrText);
	    } else {
	        return this.getToken(mcbParser.LineStrText, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterStringLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitStringLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitStringLiteral(this);
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
mcbParser.AsExpressionContext = AsExpressionContext; 
mcbParser.ParentAssignableExpressionContext = ParentAssignableExpressionContext; 
mcbParser.AdditiveExpressionContext = AdditiveExpressionContext; 
mcbParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
mcbParser.ScoreboardIdentifierContext = ScoreboardIdentifierContext; 
mcbParser.ScoreboardLiteralContext = ScoreboardLiteralContext; 
mcbParser.ScoreboardTargetContext = ScoreboardTargetContext; 
mcbParser.LiteralConstantContext = LiteralConstantContext; 
mcbParser.AdditiveOperatorContext = AdditiveOperatorContext; 
mcbParser.MultiplicativeOperatorContext = MultiplicativeOperatorContext; 
mcbParser.NbtContext = NbtContext; 
mcbParser.NbtEqualityContext = NbtEqualityContext; 
mcbParser.AsNBTContext = AsNBTContext; 
mcbParser.NbtSetContext = NbtSetContext; 
mcbParser.NbtArrayContext = NbtArrayContext; 
mcbParser.StringLiteralContext = StringLiteralContext; 
mcbParser.NlContext = NlContext; 
mcbParser.NlsContext = NlsContext; 
