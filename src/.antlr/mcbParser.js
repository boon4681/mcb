// Generated from e:\_Project\nodejs\mcb\src\mcbParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mcbParserListener from './mcbParserListener.js';
import mcbParserVisitor from './mcbParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003S\u0201\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004",
    "+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u0004",
    "2\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0003\u0002\u0007",
    "\u0002p\n\u0002\f\u0002\u000e\u0002s\u000b\u0002\u0003\u0002\u0007\u0002",
    "v\n\u0002\f\u0002\u000e\u0002y\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u007f\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004\u0085\n\u0004\f\u0004\u000e\u0004",
    "\u0088\u000b\u0004\u0005\u0004\u008a\n\u0004\u0003\u0004\u0005\u0004",
    "\u008d\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005",
    "\u0005\u0093\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0007\b\u009d\n\b\f\b\u000e",
    "\b\u00a0\u000b\b\u0003\b\u0003\b\u0007\b\u00a4\n\b\f\b\u000e\b\u00a7",
    "\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t\u0007\t\u00ad\n\t\f\t\u000e",
    "\t\u00b0\u000b\t\u0003\t\u0003\t\u0007\t\u00b4\n\t\f\t\u000e\t\u00b7",
    "\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0005\n\u00bd\n\n\u0003\u000b",
    "\u0003\u000b\u0007\u000b\u00c1\n\u000b\f\u000b\u000e\u000b\u00c4\u000b",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00c8\n\u000b\f\u000b\u000e",
    "\u000b\u00cb\u000b\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0007",
    "\f\u00d1\n\f\f\f\u000e\f\u00d4\u000b\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0007\r\u00db\n\r\f\r\u000e\r\u00de\u000b\r\u0003\r\u0003",
    "\r\u0007\r\u00e2\n\r\f\r\u000e\r\u00e5\u000b\r\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0007\u000e\u00eb\n\u000e\f\u000e\u000e\u000e\u00ee",
    "\u000b\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00f2\n\u000e\f\u000e",
    "\u000e\u000e\u00f5\u000b\u000e\u0003\u000e\u0007\u000e\u00f8\n\u000e",
    "\f\u000e\u000e\u000e\u00fb\u000b\u000e\u0003\u000f\u0003\u000f\u0007",
    "\u000f\u00ff\n\u000f\f\u000f\u000e\u000f\u0102\u000b\u000f\u0003\u000f",
    "\u0003\u000f\u0007\u000f\u0106\n\u000f\f\u000f\u000e\u000f\u0109\u000b",
    "\u000f\u0003\u000f\u0007\u000f\u010c\n\u000f\f\u000f\u000e\u000f\u010f",
    "\u000b\u000f\u0003\u0010\u0005\u0010\u0112\n\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u011a",
    "\n\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u0128\n\u0014\u0003\u0014\u0005\u0014\u012b",
    "\n\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u012f\n\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0005\u0015\u0134\n\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0140\n\u0018\u0003\u0019",
    "\u0003\u0019\u0005\u0019\u0144\n\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0005",
    "\u001b\u014e\n\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0005\u001c\u0154\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0005\u001e\u015d\n\u001e",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0163\n",
    "\u001f\u0003 \u0003 \u0003 \u0003 \u0005 \u0169\n \u0003!\u0003!\u0003",
    "!\u0007!\u016e\n!\f!\u000e!\u0171\u000b!\u0003\"\u0003\"\u0003#\u0003",
    "#\u0003#\u0005#\u0178\n#\u0003$\u0003$\u0007$\u017c\n$\f$\u000e$\u017f",
    "\u000b$\u0003$\u0003$\u0007$\u0183\n$\f$\u000e$\u0186\u000b$\u0003$",
    "\u0003$\u0003%\u0003%\u0003%\u0003%\u0007%\u018e\n%\f%\u000e%\u0191",
    "\u000b%\u0003&\u0003&\u0003&\u0003&\u0007&\u0197\n&\f&\u000e&\u019a",
    "\u000b&\u0003\'\u0003\'\u0003\'\u0003\'\u0005\'\u01a0\n\'\u0003\'\u0003",
    "\'\u0003(\u0003(\u0005(\u01a6\n(\u0003)\u0003)\u0003)\u0003*\u0003*",
    "\u0005*\u01ad\n*\u0003+\u0003+\u0003+\u0005+\u01b2\n+\u0003,\u0003,",
    "\u0003-\u0003-\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0007/\u01be",
    "\n/\f/\u000e/\u01c1\u000b/\u0003/\u0003/\u00030\u00030\u00030\u0005",
    "0\u01c8\n0\u00030\u00030\u00031\u00031\u00031\u00031\u00051\u01d0\n",
    "1\u00032\u00032\u00032\u00032\u00032\u00032\u00033\u00033\u00033\u0003",
    "3\u00073\u01dc\n3\f3\u000e3\u01df\u000b3\u00033\u00033\u00034\u0003",
    "4\u00074\u01e5\n4\f4\u000e4\u01e8\u000b4\u00034\u00034\u00035\u0003",
    "5\u00035\u00036\u00036\u00076\u01f1\n6\f6\u000e6\u01f4\u000b6\u0003",
    "6\u00056\u01f7\n6\u00037\u00067\u01fa\n7\r7\u000e7\u01fb\u00037\u0005",
    "7\u01ff\n7\u00037\u0002\u00028\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\^`bdfhjl\u0002\u0007\u0004\u0002\u001c\u001c\"%\u0003\u0002\u001c",
    "!\u0003\u0002\u0015\u0016\u0003\u0002\u0012\u0014\u0003\u0002\'(\u0002",
    "\u020f\u0002q\u0003\u0002\u0002\u0002\u0004|\u0003\u0002\u0002\u0002",
    "\u0006\u0089\u0003\u0002\u0002\u0002\b\u0092\u0003\u0002\u0002\u0002",
    "\n\u0094\u0003\u0002\u0002\u0002\f\u0096\u0003\u0002\u0002\u0002\u000e",
    "\u009a\u0003\u0002\u0002\u0002\u0010\u00aa\u0003\u0002\u0002\u0002\u0012",
    "\u00bc\u0003\u0002\u0002\u0002\u0014\u00be\u0003\u0002\u0002\u0002\u0016",
    "\u00ce\u0003\u0002\u0002\u0002\u0018\u00d8\u0003\u0002\u0002\u0002\u001a",
    "\u00e8\u0003\u0002\u0002\u0002\u001c\u00fc\u0003\u0002\u0002\u0002\u001e",
    "\u0111\u0003\u0002\u0002\u0002 \u0119\u0003\u0002\u0002\u0002\"\u011b",
    "\u0003\u0002\u0002\u0002$\u011f\u0003\u0002\u0002\u0002&\u012e\u0003",
    "\u0002\u0002\u0002(\u0130\u0003\u0002\u0002\u0002*\u0135\u0003\u0002",
    "\u0002\u0002,\u0139\u0003\u0002\u0002\u0002.\u013f\u0003\u0002\u0002",
    "\u00020\u0143\u0003\u0002\u0002\u00022\u0145\u0003\u0002\u0002\u0002",
    "4\u014d\u0003\u0002\u0002\u00026\u0153\u0003\u0002\u0002\u00028\u0155",
    "\u0003\u0002\u0002\u0002:\u015c\u0003\u0002\u0002\u0002<\u0162\u0003",
    "\u0002\u0002\u0002>\u0168\u0003\u0002\u0002\u0002@\u016a\u0003\u0002",
    "\u0002\u0002B\u0172\u0003\u0002\u0002\u0002D\u0177\u0003\u0002\u0002",
    "\u0002F\u0179\u0003\u0002\u0002\u0002H\u0189\u0003\u0002\u0002\u0002",
    "J\u0192\u0003\u0002\u0002\u0002L\u019b\u0003\u0002\u0002\u0002N\u01a5",
    "\u0003\u0002\u0002\u0002P\u01a7\u0003\u0002\u0002\u0002R\u01aa\u0003",
    "\u0002\u0002\u0002T\u01b1\u0003\u0002\u0002\u0002V\u01b3\u0003\u0002",
    "\u0002\u0002X\u01b5\u0003\u0002\u0002\u0002Z\u01b7\u0003\u0002\u0002",
    "\u0002\\\u01b9\u0003\u0002\u0002\u0002^\u01c4\u0003\u0002\u0002\u0002",
    "`\u01cf\u0003\u0002\u0002\u0002b\u01d1\u0003\u0002\u0002\u0002d\u01d7",
    "\u0003\u0002\u0002\u0002f\u01e2\u0003\u0002\u0002\u0002h\u01eb\u0003",
    "\u0002\u0002\u0002j\u01f6\u0003\u0002\u0002\u0002l\u01fe\u0003\u0002",
    "\u0002\u0002np\u0007\u0005\u0002\u0002on\u0003\u0002\u0002\u0002ps\u0003",
    "\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002",
    "rw\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002tv\u0005\u0004\u0003",
    "\u0002ut\u0003\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003\u0002",
    "\u0002\u0002wx\u0003\u0002\u0002\u0002xz\u0003\u0002\u0002\u0002yw\u0003",
    "\u0002\u0002\u0002z{\u0007\u0002\u0002\u0003{\u0003\u0003\u0002\u0002",
    "\u0002|~\u0005\n\u0006\u0002}\u007f\u0005j6\u0002~}\u0003\u0002\u0002",
    "\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0005\u0003\u0002\u0002",
    "\u0002\u0080\u0086\u0005\b\u0005\u0002\u0081\u0082\u0005l7\u0002\u0082",
    "\u0083\u0005\b\u0005\u0002\u0083\u0085\u0003\u0002\u0002\u0002\u0084",
    "\u0081\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086",
    "\u0084\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087",
    "\u008a\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089",
    "\u0080\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a",
    "\u008c\u0003\u0002\u0002\u0002\u008b\u008d\u0005l7\u0002\u008c\u008b",
    "\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u0007",
    "\u0003\u0002\u0002\u0002\u008e\u0093\u0005\n\u0006\u0002\u008f\u0093",
    "\u0005@!\u0002\u0090\u0093\u0005\u0012\n\u0002\u0091\u0093\u0005\u0010",
    "\t\u0002\u0092\u008e\u0003\u0002\u0002\u0002\u0092\u008f\u0003\u0002",
    "\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092\u0091\u0003\u0002",
    "\u0002\u0002\u0093\t\u0003\u0002\u0002\u0002\u0094\u0095\u0005\f\u0007",
    "\u0002\u0095\u000b\u0003\u0002\u0002\u0002\u0096\u0097\u00072\u0002",
    "\u0002\u0097\u0098\u0007E\u0002\u0002\u0098\u0099\u0005\u000e\b\u0002",
    "\u0099\r\u0003\u0002\u0002\u0002\u009a\u009e\u0007\u0017\u0002\u0002",
    "\u009b\u009d\u0007\u0005\u0002\u0002\u009c\u009b\u0003\u0002\u0002\u0002",
    "\u009d\u00a0\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0003\u0002\u0002\u0002\u009f\u00a1\u0003\u0002\u0002\u0002",
    "\u00a0\u009e\u0003\u0002\u0002\u0002\u00a1\u00a5\u0005\u0006\u0004\u0002",
    "\u00a2\u00a4\u0007\u0005\u0002\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002",
    "\u00a4\u00a7\u0003\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a8\u0003\u0002\u0002\u0002",
    "\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a8\u00a9\u00073\u0002\u0002",
    "\u00a9\u000f\u0003\u0002\u0002\u0002\u00aa\u00ae\u00074\u0002\u0002",
    "\u00ab\u00ad\u0007\u0005\u0002\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002",
    "\u00ad\u00b0\u0003\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002",
    "\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b1\u0003\u0002\u0002\u0002",
    "\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b1\u00b5\u0005\u001a\u000e\u0002",
    "\u00b2\u00b4\u0007\u0005\u0002\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002",
    "\u00b4\u00b7\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002",
    "\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b8\u0003\u0002\u0002\u0002",
    "\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b8\u00b9\u0005\u000e\b\u0002",
    "\u00b9\u0011\u0003\u0002\u0002\u0002\u00ba\u00bd\u0005\u0014\u000b\u0002",
    "\u00bb\u00bd\u0005\u0016\f\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002",
    "\u00bc\u00bb\u0003\u0002\u0002\u0002\u00bd\u0013\u0003\u0002\u0002\u0002",
    "\u00be\u00c2\u0007=\u0002\u0002\u00bf\u00c1\u0007\u0005\u0002\u0002",
    "\u00c0\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002",
    "\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002",
    "\u00c3\u00c5\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002",
    "\u00c5\u00c9\u0005\u001a\u000e\u0002\u00c6\u00c8\u0007\u0005\u0002\u0002",
    "\u00c7\u00c6\u0003\u0002\u0002\u0002\u00c8\u00cb\u0003\u0002\u0002\u0002",
    "\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002",
    "\u00ca\u00cc\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002",
    "\u00cc\u00cd\u0005\u000e\b\u0002\u00cd\u0015\u0003\u0002\u0002\u0002",
    "\u00ce\u00d2\u0007>\u0002\u0002\u00cf\u00d1\u0007\u0005\u0002\u0002",
    "\u00d0\u00cf\u0003\u0002\u0002\u0002\u00d1\u00d4\u0003\u0002\u0002\u0002",
    "\u00d2\u00d0\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003\u0002\u0002\u0002",
    "\u00d3\u00d5\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002",
    "\u00d5\u00d6\u0005\u0018\r\u0002\u00d6\u00d7\u0005\u001a\u000e\u0002",
    "\u00d7\u0017\u0003\u0002\u0002\u0002\u00d8\u00dc\u0007\u0017\u0002\u0002",
    "\u00d9\u00db\u0007\u0005\u0002\u0002\u00da\u00d9\u0003\u0002\u0002\u0002",
    "\u00db\u00de\u0003\u0002\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002",
    "\u00dc\u00dd\u0003\u0002\u0002\u0002\u00dd\u00df\u0003\u0002\u0002\u0002",
    "\u00de\u00dc\u0003\u0002\u0002\u0002\u00df\u00e3\u0005\u0006\u0004\u0002",
    "\u00e0\u00e2\u0007\u0005\u0002\u0002\u00e1\u00e0\u0003\u0002\u0002\u0002",
    "\u00e2\u00e5\u0003\u0002\u0002\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002",
    "\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4\u00e6\u0003\u0002\u0002\u0002",
    "\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e6\u00e7\u0007?\u0002\u0002",
    "\u00e7\u0019\u0003\u0002\u0002\u0002\u00e8\u00ec\u0005\u001c\u000f\u0002",
    "\u00e9\u00eb\u0007\u0005\u0002\u0002\u00ea\u00e9\u0003\u0002\u0002\u0002",
    "\u00eb\u00ee\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002",
    "\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00f9\u0003\u0002\u0002\u0002",
    "\u00ee\u00ec\u0003\u0002\u0002\u0002\u00ef\u00f3\u0007\u001b\u0002\u0002",
    "\u00f0\u00f2\u0007\u0005\u0002\u0002\u00f1\u00f0\u0003\u0002\u0002\u0002",
    "\u00f2\u00f5\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002",
    "\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f6\u0003\u0002\u0002\u0002",
    "\u00f5\u00f3\u0003\u0002\u0002\u0002\u00f6\u00f8\u0005\u001c\u000f\u0002",
    "\u00f7\u00ef\u0003\u0002\u0002\u0002\u00f8\u00fb\u0003\u0002\u0002\u0002",
    "\u00f9\u00f7\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002",
    "\u00fa\u001b\u0003\u0002\u0002\u0002\u00fb\u00f9\u0003\u0002\u0002\u0002",
    "\u00fc\u0100\u0005\u001e\u0010\u0002\u00fd\u00ff\u0007\u0005\u0002\u0002",
    "\u00fe\u00fd\u0003\u0002\u0002\u0002\u00ff\u0102\u0003\u0002\u0002\u0002",
    "\u0100\u00fe\u0003\u0002\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002",
    "\u0101\u010d\u0003\u0002\u0002\u0002\u0102\u0100\u0003\u0002\u0002\u0002",
    "\u0103\u0107\u0007\u001a\u0002\u0002\u0104\u0106\u0007\u0005\u0002\u0002",
    "\u0105\u0104\u0003\u0002\u0002\u0002\u0106\u0109\u0003\u0002\u0002\u0002",
    "\u0107\u0105\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002",
    "\u0108\u010a\u0003\u0002\u0002\u0002\u0109\u0107\u0003\u0002\u0002\u0002",
    "\u010a\u010c\u0005\u001e\u0010\u0002\u010b\u0103\u0003\u0002\u0002\u0002",
    "\u010c\u010f\u0003\u0002\u0002\u0002\u010d\u010b\u0003\u0002\u0002\u0002",
    "\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u001d\u0003\u0002\u0002\u0002",
    "\u010f\u010d\u0003\u0002\u0002\u0002\u0110\u0112\u0007\u0019\u0002\u0002",
    "\u0111\u0110\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002",
    "\u0112\u0113\u0003\u0002\u0002\u0002\u0113\u0114\u0005 \u0011\u0002",
    "\u0114\u001f\u0003\u0002\u0002\u0002\u0115\u011a\u0005\"\u0012\u0002",
    "\u0116\u011a\u0005$\u0013\u0002\u0117\u011a\u0005(\u0015\u0002\u0118",
    "\u011a\u0005*\u0016\u0002\u0119\u0115\u0003\u0002\u0002\u0002\u0119",
    "\u0116\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002\u0002\u0002\u0119",
    "\u0118\u0003\u0002\u0002\u0002\u011a!\u0003\u0002\u0002\u0002\u011b",
    "\u011c\u0005L\'\u0002\u011c\u011d\u0005,\u0017\u0002\u011d\u011e\u0005",
    "L\'\u0002\u011e#\u0003\u0002\u0002\u0002\u011f\u0120\u0005L\'\u0002",
    "\u0120\u0121\u00076\u0002\u0002\u0121\u0122\u0005&\u0014\u0002\u0122",
    "%\u0003\u0002\u0002\u0002\u0123\u012f\u0005N(\u0002\u0124\u0125\u0005",
    "N(\u0002\u0125\u0127\u0007\u0010\u0002\u0002\u0126\u0128\u0005N(\u0002",
    "\u0127\u0126\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002",
    "\u0128\u012f\u0003\u0002\u0002\u0002\u0129\u012b\u0005N(\u0002\u012a",
    "\u0129\u0003\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012b",
    "\u012c\u0003\u0002\u0002\u0002\u012c\u012d\u0007\u000f\u0002\u0002\u012d",
    "\u012f\u0005N(\u0002\u012e\u0123\u0003\u0002\u0002\u0002\u012e\u0124",
    "\u0003\u0002\u0002\u0002\u012e\u012a\u0003\u0002\u0002\u0002\u012f\'",
    "\u0003\u0002\u0002\u0002\u0130\u0131\u00078\u0002\u0002\u0131\u0133",
    "\u0005h5\u0002\u0132\u0134\u0005\\/\u0002\u0133\u0132\u0003\u0002\u0002",
    "\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134)\u0003\u0002\u0002",
    "\u0002\u0135\u0136\u00079\u0002\u0002\u0136\u0137\u00050\u0019\u0002",
    "\u0137\u0138\u0005.\u0018\u0002\u0138+\u0003\u0002\u0002\u0002\u0139",
    "\u013a\t\u0002\u0002\u0002\u013a-\u0003\u0002\u0002\u0002\u013b\u0140",
    "\u0007E\u0002\u0002\u013c\u013d\u0007E\u0002\u0002\u013d\u013e\u0007",
    "\u0017\u0002\u0002\u013e\u0140\u0007E\u0002\u0002\u013f\u013b\u0003",
    "\u0002\u0002\u0002\u013f\u013c\u0003\u0002\u0002\u0002\u0140/\u0003",
    "\u0002\u0002\u0002\u0141\u0144\u00052\u001a\u0002\u0142\u0144\u0005",
    "8\u001d\u0002\u0143\u0141\u0003\u0002\u0002\u0002\u0143\u0142\u0003",
    "\u0002\u0002\u0002\u01441\u0003\u0002\u0002\u0002\u0145\u0146\u0005",
    "4\u001b\u0002\u0146\u0147\u00054\u001b\u0002\u0147\u0148\u00054\u001b",
    "\u0002\u01483\u0003\u0002\u0002\u0002\u0149\u014a\u0007-\u0002\u0002",
    "\u014a\u014e\u0005> \u0002\u014b\u014e\u0007-\u0002\u0002\u014c\u014e",
    "\u0005> \u0002\u014d\u0149\u0003\u0002\u0002\u0002\u014d\u014b\u0003",
    "\u0002\u0002\u0002\u014d\u014c\u0003\u0002\u0002\u0002\u014e5\u0003",
    "\u0002\u0002\u0002\u014f\u0150\u0007.\u0002\u0002\u0150\u0154\u0005",
    "> \u0002\u0151\u0154\u0007.\u0002\u0002\u0152\u0154\u0005> \u0002\u0153",
    "\u014f\u0003\u0002\u0002\u0002\u0153\u0151\u0003\u0002\u0002\u0002\u0153",
    "\u0152\u0003\u0002\u0002\u0002\u01547\u0003\u0002\u0002\u0002\u0155",
    "\u0156\u0005:\u001e\u0002\u0156\u0157\u0005<\u001f\u0002\u01579\u0003",
    "\u0002\u0002\u0002\u0158\u0159\u00070\u0002\u0002\u0159\u015d\u0005",
    "> \u0002\u015a\u015d\u00070\u0002\u0002\u015b\u015d\u0005> \u0002\u015c",
    "\u0158\u0003\u0002\u0002\u0002\u015c\u015a\u0003\u0002\u0002\u0002\u015c",
    "\u015b\u0003\u0002\u0002\u0002\u015d;\u0003\u0002\u0002\u0002\u015e",
    "\u015f\u00071\u0002\u0002\u015f\u0163\u0005> \u0002\u0160\u0163\u0007",
    "1\u0002\u0002\u0161\u0163\u0005> \u0002\u0162\u015e\u0003\u0002\u0002",
    "\u0002\u0162\u0160\u0003\u0002\u0002\u0002\u0162\u0161\u0003\u0002\u0002",
    "\u0002\u0163=\u0003\u0002\u0002\u0002\u0164\u0169\u0007A\u0002\u0002",
    "\u0165\u0166\u0007\u0016\u0002\u0002\u0166\u0169\u0007A\u0002\u0002",
    "\u0167\u0169\u0005N(\u0002\u0168\u0164\u0003\u0002\u0002\u0002\u0168",
    "\u0165\u0003\u0002\u0002\u0002\u0168\u0167\u0003\u0002\u0002\u0002\u0169",
    "?\u0003\u0002\u0002\u0002\u016a\u016b\u0005L\'\u0002\u016b\u016f\u0005",
    "V,\u0002\u016c\u016e\u0005B\"\u0002\u016d\u016c\u0003\u0002\u0002\u0002",
    "\u016e\u0171\u0003\u0002\u0002\u0002\u016f\u016d\u0003\u0002\u0002\u0002",
    "\u016f\u0170\u0003\u0002\u0002\u0002\u0170A\u0003\u0002\u0002\u0002",
    "\u0171\u016f\u0003\u0002\u0002\u0002\u0172\u0173\u0005H%\u0002\u0173",
    "C\u0003\u0002\u0002\u0002\u0174\u0178\u0005N(\u0002\u0175\u0178\u0005",
    "L\'\u0002\u0176\u0178\u0005F$\u0002\u0177\u0174\u0003\u0002\u0002\u0002",
    "\u0177\u0175\u0003\u0002\u0002\u0002\u0177\u0176\u0003\u0002\u0002\u0002",
    "\u0178E\u0003\u0002\u0002\u0002\u0179\u017d\u0007\b\u0002\u0002\u017a",
    "\u017c\u0007\u0005\u0002\u0002\u017b\u017a\u0003\u0002\u0002\u0002\u017c",
    "\u017f\u0003\u0002\u0002\u0002\u017d\u017b\u0003\u0002\u0002\u0002\u017d",
    "\u017e\u0003\u0002\u0002\u0002\u017e\u0180\u0003\u0002\u0002\u0002\u017f",
    "\u017d\u0003\u0002\u0002\u0002\u0180\u0184\u0005B\"\u0002\u0181\u0183",
    "\u0007\u0005\u0002\u0002\u0182\u0181\u0003\u0002\u0002\u0002\u0183\u0186",
    "\u0003\u0002\u0002\u0002\u0184\u0182\u0003\u0002\u0002\u0002\u0184\u0185",
    "\u0003\u0002\u0002\u0002\u0185\u0187\u0003\u0002\u0002\u0002\u0186\u0184",
    "\u0003\u0002\u0002\u0002\u0187\u0188\u0007\t\u0002\u0002\u0188G\u0003",
    "\u0002\u0002\u0002\u0189\u018f\u0005J&\u0002\u018a\u018b\u0005X-\u0002",
    "\u018b\u018c\u0005J&\u0002\u018c\u018e\u0003\u0002\u0002\u0002\u018d",
    "\u018a\u0003\u0002\u0002\u0002\u018e\u0191\u0003\u0002\u0002\u0002\u018f",
    "\u018d\u0003\u0002\u0002\u0002\u018f\u0190\u0003\u0002\u0002\u0002\u0190",
    "I\u0003\u0002\u0002\u0002\u0191\u018f\u0003\u0002\u0002\u0002\u0192",
    "\u0198\u0005D#\u0002\u0193\u0194\u0005Z.\u0002\u0194\u0195\u0005D#\u0002",
    "\u0195\u0197\u0003\u0002\u0002\u0002\u0196\u0193\u0003\u0002\u0002\u0002",
    "\u0197\u019a\u0003\u0002\u0002\u0002\u0198\u0196\u0003\u0002\u0002\u0002",
    "\u0198\u0199\u0003\u0002\u0002\u0002\u0199K\u0003\u0002\u0002\u0002",
    "\u019a\u0198\u0003\u0002\u0002\u0002\u019b\u019c\u0007E\u0002\u0002",
    "\u019c\u019f\u0007\n\u0002\u0002\u019d\u01a0\u0007E\u0002\u0002\u019e",
    "\u01a0\u0005R*\u0002\u019f\u019d\u0003\u0002\u0002\u0002\u019f\u019e",
    "\u0003\u0002\u0002\u0002\u01a0\u01a1\u0003\u0002\u0002\u0002\u01a1\u01a2",
    "\u0007\u000b\u0002\u0002\u01a2M\u0003\u0002\u0002\u0002\u01a3\u01a6",
    "\u0007D\u0002\u0002\u01a4\u01a6\u0005P)\u0002\u01a5\u01a3\u0003\u0002",
    "\u0002\u0002\u01a5\u01a4\u0003\u0002\u0002\u0002\u01a6O\u0003\u0002",
    "\u0002\u0002\u01a7\u01a8\u0007\u0016\u0002\u0002\u01a8\u01a9\u0007D",
    "\u0002\u0002\u01a9Q\u0003\u0002\u0002\u0002\u01aa\u01ac\u0005h5\u0002",
    "\u01ab\u01ad\u0005\\/\u0002\u01ac\u01ab\u0003\u0002\u0002\u0002\u01ac",
    "\u01ad\u0003\u0002\u0002\u0002\u01adS\u0003\u0002\u0002\u0002\u01ae",
    "\u01b2\u0007@\u0002\u0002\u01af\u01b2\u0007D\u0002\u0002\u01b0\u01b2",
    "\u0005f4\u0002\u01b1\u01ae\u0003\u0002\u0002\u0002\u01b1\u01af\u0003",
    "\u0002\u0002\u0002\u01b1\u01b0\u0003\u0002\u0002\u0002\u01b2U\u0003",
    "\u0002\u0002\u0002\u01b3\u01b4\t\u0003\u0002\u0002\u01b4W\u0003\u0002",
    "\u0002\u0002\u01b5\u01b6\t\u0004\u0002\u0002\u01b6Y\u0003\u0002\u0002",
    "\u0002\u01b7\u01b8\t\u0005\u0002\u0002\u01b8[\u0003\u0002\u0002\u0002",
    "\u01b9\u01ba\u0007\n\u0002\u0002\u01ba\u01bf\u0005^0\u0002\u01bb\u01bc",
    "\u0007\u0007\u0002\u0002\u01bc\u01be\u0005^0\u0002\u01bd\u01bb\u0003",
    "\u0002\u0002\u0002\u01be\u01c1\u0003\u0002\u0002\u0002\u01bf\u01bd\u0003",
    "\u0002\u0002\u0002\u01bf\u01c0\u0003\u0002\u0002\u0002\u01c0\u01c2\u0003",
    "\u0002\u0002\u0002\u01c1\u01bf\u0003\u0002\u0002\u0002\u01c2\u01c3\u0007",
    "\u000b\u0002\u0002\u01c3]\u0003\u0002\u0002\u0002\u01c4\u01c5\u0007",
    "E\u0002\u0002\u01c5\u01c7\u0007\u001c\u0002\u0002\u01c6\u01c8\u0007",
    "\u0019\u0002\u0002\u01c7\u01c6\u0003\u0002\u0002\u0002\u01c7\u01c8\u0003",
    "\u0002\u0002\u0002\u01c8\u01c9\u0003\u0002\u0002\u0002\u01c9\u01ca\u0005",
    "`1\u0002\u01ca_\u0003\u0002\u0002\u0002\u01cb\u01d0\u0005T+\u0002\u01cc",
    "\u01d0\u0005d3\u0002\u01cd\u01d0\u0007E\u0002\u0002\u01ce\u01d0\u0005",
    "b2\u0002\u01cf\u01cb\u0003\u0002\u0002\u0002\u01cf\u01cc\u0003\u0002",
    "\u0002\u0002\u01cf\u01cd\u0003\u0002\u0002\u0002\u01cf\u01ce\u0003\u0002",
    "\u0002\u0002\u01d0a\u0003\u0002\u0002\u0002\u01d1\u01d2\u0007\f\u0002",
    "\u0002\u01d2\u01d3\u0007E\u0002\u0002\u01d3\u01d4\u0007\u001c\u0002",
    "\u0002\u01d4\u01d5\u0005T+\u0002\u01d5\u01d6\u0007\r\u0002\u0002\u01d6",
    "c\u0003\u0002\u0002\u0002\u01d7\u01d8\u0007\n\u0002\u0002\u01d8\u01dd",
    "\u0005T+\u0002\u01d9\u01da\u0007\u0007\u0002\u0002\u01da\u01dc\u0005",
    "T+\u0002\u01db\u01d9\u0003\u0002\u0002\u0002\u01dc\u01df\u0003\u0002",
    "\u0002\u0002\u01dd\u01db\u0003\u0002\u0002\u0002\u01dd\u01de\u0003\u0002",
    "\u0002\u0002\u01de\u01e0\u0003\u0002\u0002\u0002\u01df\u01dd\u0003\u0002",
    "\u0002\u0002\u01e0\u01e1\u0007\u000b\u0002\u0002\u01e1e\u0003\u0002",
    "\u0002\u0002\u01e2\u01e6\u0007F\u0002\u0002\u01e3\u01e5\u0007O\u0002",
    "\u0002\u01e4\u01e3\u0003\u0002\u0002\u0002\u01e5\u01e8\u0003\u0002\u0002",
    "\u0002\u01e6\u01e4\u0003\u0002\u0002\u0002\u01e6\u01e7\u0003\u0002\u0002",
    "\u0002\u01e7\u01e9\u0003\u0002\u0002\u0002\u01e8\u01e6\u0003\u0002\u0002",
    "\u0002\u01e9\u01ea\u0007N\u0002\u0002\u01eag\u0003\u0002\u0002\u0002",
    "\u01eb\u01ec\t\u0006\u0002\u0002\u01ec\u01ed\u0007+\u0002\u0002\u01ed",
    "i\u0003\u0002\u0002\u0002\u01ee\u01f2\u0007\u0005\u0002\u0002\u01ef",
    "\u01f1\u0007\u0005\u0002\u0002\u01f0\u01ef\u0003\u0002\u0002\u0002\u01f1",
    "\u01f4\u0003\u0002\u0002\u0002\u01f2\u01f0\u0003\u0002\u0002\u0002\u01f2",
    "\u01f3\u0003\u0002\u0002\u0002\u01f3\u01f7\u0003\u0002\u0002\u0002\u01f4",
    "\u01f2\u0003\u0002\u0002\u0002\u01f5\u01f7\u0007\u0002\u0002\u0003\u01f6",
    "\u01ee\u0003\u0002\u0002\u0002\u01f6\u01f5\u0003\u0002\u0002\u0002\u01f7",
    "k\u0003\u0002\u0002\u0002\u01f8\u01fa\u0007\u0005\u0002\u0002\u01f9",
    "\u01f8\u0003\u0002\u0002\u0002\u01fa\u01fb\u0003\u0002\u0002\u0002\u01fb",
    "\u01f9\u0003\u0002\u0002\u0002\u01fb\u01fc\u0003\u0002\u0002\u0002\u01fc",
    "\u01ff\u0003\u0002\u0002\u0002\u01fd\u01ff\u0007\u0002\u0002\u0003\u01fe",
    "\u01f9\u0003\u0002\u0002\u0002\u01fe\u01fd\u0003\u0002\u0002\u0002\u01ff",
    "m\u0003\u0002\u0002\u00029qw~\u0086\u0089\u008c\u0092\u009e\u00a5\u00ae",
    "\u00b5\u00bc\u00c2\u00c9\u00d2\u00dc\u00e3\u00ec\u00f3\u00f9\u0100\u0107",
    "\u010d\u0111\u0119\u0127\u012a\u012e\u0133\u013f\u0143\u014d\u0153\u015c",
    "\u0162\u0168\u016f\u0177\u017d\u0184\u018f\u0198\u019f\u01a5\u01ac\u01b1",
    "\u01bf\u01c7\u01cf\u01dd\u01e6\u01f2\u01f6\u01fb\u01fe"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mcbParser extends antlr4.Parser {

    static grammarFileName = "mcbParser.g4";
    static literalNames = [ null, null, null, null, "'.'", "','", "'('", 
                            "')'", "'['", "']'", "'{'", "'}'", "'..'", null, 
                            null, null, "'*'", "'%'", "'/'", "'+'", "'-'", 
                            "':'", null, "'!'", "'and'", "'or'", "'='", 
                            "'*='", "'%='", "'/='", "'+='", "'-='", "'<'", 
                            "'>'", "'<='", "'>='", "'=!'", "'@'", null, 
                            null, null, null, "'~'", null, null, "'^'", 
                            null, null, "'fun'", "'end'", "'if'", "'unless'", 
                            "'matches'", "'data'", "'entity'", "'block'", 
                            "'storage'", "'predicate'", "'else'", "'while'", 
                            "'repeat'", "'until'" ];
    static symbolicNames = [ null, "Comment", "WS", "NL", "DOT", "COMMA", 
                             "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURL", 
                             "RCURL", "RANGE", "RANGE_P_WS", "RANGE_S_WS", 
                             "RANGE_B_WS", "MULT", "MOD", "DIV", "ADD", 
                             "SUB", "COLON", "NOT_WS", "NOT_NO_WS", "CONJ", 
                             "DISJ", "ASSIGNMENT", "MULT_ASSIGNMENT", "MOD_ASSIGNMENT", 
                             "DIVINE_ASSIGNMENT", "ADD_ASSIGNMENT", "SUB_ASSIGNMENT", 
                             "LANGLE", "RANGLE", "LE", "GE", "MC_NOT_EQ", 
                             "AT_N_WS", "AT_P_WS", "AT_S_WS", "AT_B_WS", 
                             "ENTITY_SUFFIX", "POS", "POS_P_WS", "POS_S_WS", 
                             "ANC", "ANC_P_WS", "ANC_S_WS", "FUN", "END", 
                             "IF", "UNLESS", "K_MATCHES", "K_DATA", "K_ENTITY", 
                             "K_BLOCK", "K_STORAGE", "K_PREDICATE", "ELSE", 
                             "WHILE", "REPEAT", "UNTIL", "RealLiteral", 
                             "FloatNS", "FloatLiteral", "DoubleLiteral", 
                             "IntegerLiteral", "Identifier", "QUOTE_OPEN", 
                             "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", "UNICODE_CLASS_LO", 
                             "UNICODE_CLASS_LT", "UNICODE_CLASS_LU", "UNICODE_CLASS_ND", 
                             "UNICODE_CLASS_NL", "QUOTE_CLOSE", "LineStrText", 
                             "I_Comment", "I_WS", "I_NL", "ErrorCharacter" ];
    static ruleNames = [ "mcb", "topPriorityObject", "statements", "statement", 
                         "declaration", "functionDeclare", "block", "ifStatement", 
                         "loopStatement", "whileDo", "repeatUntil", "repeatUntilBlock", 
                         "disconjuction", "conjuction", "comparison", "asComparison", 
                         "scoreNscoreExpression", "scoreNrangeExpression", 
                         "range", "entityNBTExpression", "blockExpression", 
                         "comparator", "blockTag", "locateStatement", "position", 
                         "posPrefix", "posSuffix", "anchor", "ancPrefix", 
                         "ancSuffix", "locateLiteral", "assignment", "expression", 
                         "asExpression", "parentAssignableExpression", "additiveExpression", 
                         "multiplicativeExpression", "scoreboardIdentifier", 
                         "scoreboardLiteral", "scoreboardUnaryPrefix", "scoreboardTarget", 
                         "literalConstant", "assignmentOperator", "additiveOperator", 
                         "multiplicativeOperator", "nbt", "nbtEquality", 
                         "asNBT", "nbtSet", "nbtArray", "stringLiteral", 
                         "entity", "nl", "nls" ];

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



	mcb() {
	    let localctx = new McbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, mcbParser.RULE_mcb);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 108;
	            this.match(mcbParser.NL);
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.FUN) {
	            this.state = 114;
	            this.topPriorityObject();
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 120;
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



	topPriorityObject() {
	    let localctx = new TopPriorityObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, mcbParser.RULE_topPriorityObject);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.declaration();
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 123;
	            this.nl();

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
	    this.enterRule(localctx, 4, mcbParser.RULE_statements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (mcbParser.FUN - 48)) | (1 << (mcbParser.IF - 48)) | (1 << (mcbParser.WHILE - 48)) | (1 << (mcbParser.REPEAT - 48)) | (1 << (mcbParser.Identifier - 48)))) !== 0)) {
	            this.state = 126;
	            this.statement();
	            this.state = 132;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 127;
	                    this.nls();
	                    this.state = 128;
	                    this.statement(); 
	                }
	                this.state = 134;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	        }

	        this.state = 138;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 137;
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
	    this.enterRule(localctx, 6, mcbParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.FUN:
	            this.state = 140;
	            this.declaration();
	            break;
	        case mcbParser.Identifier:
	            this.state = 141;
	            this.assignment();
	            break;
	        case mcbParser.WHILE:
	        case mcbParser.REPEAT:
	            this.state = 142;
	            this.loopStatement();
	            break;
	        case mcbParser.IF:
	            this.state = 143;
	            this.ifStatement();
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
	    this.enterRule(localctx, 8, mcbParser.RULE_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
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
	    this.enterRule(localctx, 10, mcbParser.RULE_functionDeclare);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(mcbParser.FUN);
	        this.state = 149;
	        this.match(mcbParser.Identifier);
	        this.state = 150;
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
	    this.enterRule(localctx, 12, mcbParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(mcbParser.COLON);
	        this.state = 156;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 153;
	                this.match(mcbParser.NL); 
	            }
	            this.state = 158;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 159;
	        this.statements();
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 160;
	            this.match(mcbParser.NL);
	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 166;
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, mcbParser.RULE_ifStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(mcbParser.IF);
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
	        this.disconjuction();
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



	loopStatement() {
	    let localctx = new LoopStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, mcbParser.RULE_loopStatement);
	    try {
	        this.state = 186;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.WHILE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.whileDo();
	            break;
	        case mcbParser.REPEAT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.repeatUntil();
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
	    this.enterRule(localctx, 18, mcbParser.RULE_whileDo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.match(mcbParser.WHILE);
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 189;
	            this.match(mcbParser.NL);
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 195;
	        this.disconjuction();
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 196;
	            this.match(mcbParser.NL);
	            this.state = 201;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 202;
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



	repeatUntil() {
	    let localctx = new RepeatUntilContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, mcbParser.RULE_repeatUntil);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(mcbParser.REPEAT);
	        this.state = 208;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 205;
	            this.match(mcbParser.NL);
	            this.state = 210;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 211;
	        this.repeatUntilBlock();
	        this.state = 212;
	        this.disconjuction();
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



	repeatUntilBlock() {
	    let localctx = new RepeatUntilBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, mcbParser.RULE_repeatUntilBlock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(mcbParser.COLON);
	        this.state = 218;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 215;
	                this.match(mcbParser.NL); 
	            }
	            this.state = 220;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	        this.state = 221;
	        this.statements();
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 222;
	            this.match(mcbParser.NL);
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 228;
	        this.match(mcbParser.UNTIL);
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



	disconjuction() {
	    let localctx = new DisconjuctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, mcbParser.RULE_disconjuction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.conjuction();
	        this.state = 234;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 231;
	                this.match(mcbParser.NL); 
	            }
	            this.state = 236;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 247;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.DISJ) {
	            this.state = 237;
	            this.match(mcbParser.DISJ);
	            this.state = 241;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===mcbParser.NL) {
	                this.state = 238;
	                this.match(mcbParser.NL);
	                this.state = 243;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 244;
	            this.conjuction();
	            this.state = 249;
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



	conjuction() {
	    let localctx = new ConjuctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, mcbParser.RULE_conjuction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this.comparison();
	        this.state = 254;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 251;
	                this.match(mcbParser.NL); 
	            }
	            this.state = 256;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	        }

	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.CONJ) {
	            this.state = 257;
	            this.match(mcbParser.CONJ);
	            this.state = 261;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===mcbParser.NL) {
	                this.state = 258;
	                this.match(mcbParser.NL);
	                this.state = 263;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 264;
	            this.comparison();
	            this.state = 269;
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



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, mcbParser.RULE_comparison);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mcbParser.NOT_NO_WS) {
	            this.state = 270;
	            this.match(mcbParser.NOT_NO_WS);
	        }

	        this.state = 273;
	        this.asComparison();
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



	asComparison() {
	    let localctx = new AsComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, mcbParser.RULE_asComparison);
	    try {
	        this.state = 279;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 275;
	            this.scoreNscoreExpression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 276;
	            this.scoreNrangeExpression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 277;
	            this.entityNBTExpression();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 278;
	            this.blockExpression();
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



	scoreNscoreExpression() {
	    let localctx = new ScoreNscoreExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, mcbParser.RULE_scoreNscoreExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.scoreboardIdentifier();
	        this.state = 282;
	        this.comparator();
	        this.state = 283;
	        this.scoreboardIdentifier();
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



	scoreNrangeExpression() {
	    let localctx = new ScoreNrangeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, mcbParser.RULE_scoreNrangeExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.scoreboardIdentifier();
	        this.state = 286;
	        this.match(mcbParser.K_MATCHES);
	        this.state = 287;
	        this.range();
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



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, mcbParser.RULE_range);
	    var _la = 0; // Token type
	    try {
	        this.state = 300;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 289;
	            this.scoreboardLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 290;
	            this.scoreboardLiteral();
	            this.state = 291;
	            this.match(mcbParser.RANGE_S_WS);
	            this.state = 293;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===mcbParser.SUB || _la===mcbParser.IntegerLiteral) {
	                this.state = 292;
	                this.scoreboardLiteral();
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 296;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===mcbParser.SUB || _la===mcbParser.IntegerLiteral) {
	                this.state = 295;
	                this.scoreboardLiteral();
	            }

	            this.state = 298;
	            this.match(mcbParser.RANGE_P_WS);
	            this.state = 299;
	            this.scoreboardLiteral();
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



	entityNBTExpression() {
	    let localctx = new EntityNBTExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, mcbParser.RULE_entityNBTExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(mcbParser.K_ENTITY);
	        this.state = 303;
	        this.entity();
	        this.state = 305;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mcbParser.LSQUARE) {
	            this.state = 304;
	            this.nbt();
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



	blockExpression() {
	    let localctx = new BlockExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, mcbParser.RULE_blockExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.match(mcbParser.K_BLOCK);
	        this.state = 308;
	        this.locateStatement();
	        this.state = 309;
	        this.blockTag();
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



	comparator() {
	    let localctx = new ComparatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, mcbParser.RULE_comparator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
	        _la = this._input.LA(1);
	        if(!(((((_la - 26)) & ~0x1f) == 0 && ((1 << (_la - 26)) & ((1 << (mcbParser.ASSIGNMENT - 26)) | (1 << (mcbParser.LANGLE - 26)) | (1 << (mcbParser.RANGLE - 26)) | (1 << (mcbParser.LE - 26)) | (1 << (mcbParser.GE - 26)))) !== 0))) {
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



	blockTag() {
	    let localctx = new BlockTagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, mcbParser.RULE_blockTag);
	    try {
	        this.state = 317;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 313;
	            this.match(mcbParser.Identifier);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 314;
	            this.match(mcbParser.Identifier);
	            this.state = 315;
	            this.match(mcbParser.COLON);
	            this.state = 316;
	            this.match(mcbParser.Identifier);
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



	locateStatement() {
	    let localctx = new LocateStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, mcbParser.RULE_locateStatement);
	    try {
	        this.state = 321;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 319;
	            this.position();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 320;
	            this.anchor();
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
	    this.enterRule(localctx, 48, mcbParser.RULE_position);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this.posPrefix();
	        this.state = 324;
	        this.posPrefix();
	        this.state = 325;
	        this.posPrefix();
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



	posPrefix() {
	    let localctx = new PosPrefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, mcbParser.RULE_posPrefix);
	    try {
	        this.state = 331;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 327;
	            this.match(mcbParser.POS_P_WS);
	            this.state = 328;
	            this.locateLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 329;
	            this.match(mcbParser.POS_P_WS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 330;
	            this.locateLiteral();
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



	posSuffix() {
	    let localctx = new PosSuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, mcbParser.RULE_posSuffix);
	    try {
	        this.state = 337;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 333;
	            this.match(mcbParser.POS_S_WS);
	            this.state = 334;
	            this.locateLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 335;
	            this.match(mcbParser.POS_S_WS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 336;
	            this.locateLiteral();
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
	    this.enterRule(localctx, 54, mcbParser.RULE_anchor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 339;
	        this.ancPrefix();
	        this.state = 340;
	        this.ancSuffix();
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



	ancPrefix() {
	    let localctx = new AncPrefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, mcbParser.RULE_ancPrefix);
	    try {
	        this.state = 346;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 342;
	            this.match(mcbParser.ANC_P_WS);
	            this.state = 343;
	            this.locateLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 344;
	            this.match(mcbParser.ANC_P_WS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 345;
	            this.locateLiteral();
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



	ancSuffix() {
	    let localctx = new AncSuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, mcbParser.RULE_ancSuffix);
	    try {
	        this.state = 352;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 348;
	            this.match(mcbParser.ANC_S_WS);
	            this.state = 349;
	            this.locateLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 350;
	            this.match(mcbParser.ANC_S_WS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 351;
	            this.locateLiteral();
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



	locateLiteral() {
	    let localctx = new LocateLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, mcbParser.RULE_locateLiteral);
	    try {
	        this.state = 358;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 354;
	            this.match(mcbParser.FloatNS);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 355;
	            this.match(mcbParser.SUB);
	            this.state = 356;
	            this.match(mcbParser.FloatNS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 357;
	            this.scoreboardLiteral();
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, mcbParser.RULE_assignment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.scoreboardIdentifier();
	        this.state = 361;
	        this.assignmentOperator();
	        this.state = 365;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.LPAREN || _la===mcbParser.SUB || _la===mcbParser.IntegerLiteral || _la===mcbParser.Identifier) {
	            this.state = 362;
	            this.expression();
	            this.state = 367;
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
	    this.enterRule(localctx, 64, mcbParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 368;
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
	    this.enterRule(localctx, 66, mcbParser.RULE_asExpression);
	    try {
	        this.state = 373;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.SUB:
	        case mcbParser.IntegerLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 370;
	            this.scoreboardLiteral();
	            break;
	        case mcbParser.Identifier:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 371;
	            this.scoreboardIdentifier();
	            break;
	        case mcbParser.LPAREN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 372;
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
	    this.enterRule(localctx, 68, mcbParser.RULE_parentAssignableExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.match(mcbParser.LPAREN);
	        this.state = 379;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 376;
	            this.match(mcbParser.NL);
	            this.state = 381;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 382;
	        this.expression();
	        this.state = 386;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 383;
	            this.match(mcbParser.NL);
	            this.state = 388;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 389;
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
	    this.enterRule(localctx, 70, mcbParser.RULE_additiveExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 391;
	        this.multiplicativeExpression();
	        this.state = 397;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 392;
	                this.additiveOperator();
	                this.state = 393;
	                this.multiplicativeExpression(); 
	            }
	            this.state = 399;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
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
	    this.enterRule(localctx, 72, mcbParser.RULE_multiplicativeExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        this.asExpression();
	        this.state = 406;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.MULT) | (1 << mcbParser.MOD) | (1 << mcbParser.DIV))) !== 0)) {
	            this.state = 401;
	            this.multiplicativeOperator();
	            this.state = 402;
	            this.asExpression();
	            this.state = 408;
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
	    this.enterRule(localctx, 74, mcbParser.RULE_scoreboardIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
	        this.match(mcbParser.Identifier);
	        this.state = 410;
	        this.match(mcbParser.LSQUARE);
	        this.state = 413;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.Identifier:
	            this.state = 411;
	            this.match(mcbParser.Identifier);
	            break;
	        case mcbParser.AT_N_WS:
	        case mcbParser.AT_P_WS:
	            this.state = 412;
	            this.scoreboardTarget();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 415;
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
	    this.enterRule(localctx, 76, mcbParser.RULE_scoreboardLiteral);
	    try {
	        this.state = 419;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.IntegerLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 417;
	            this.match(mcbParser.IntegerLiteral);
	            break;
	        case mcbParser.SUB:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 418;
	            this.scoreboardUnaryPrefix();
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



	scoreboardUnaryPrefix() {
	    let localctx = new ScoreboardUnaryPrefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, mcbParser.RULE_scoreboardUnaryPrefix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
	        this.match(mcbParser.SUB);
	        this.state = 422;
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
	    this.enterRule(localctx, 80, mcbParser.RULE_scoreboardTarget);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 424;
	        this.entity();
	        this.state = 426;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mcbParser.LSQUARE) {
	            this.state = 425;
	            this.nbt();
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



	literalConstant() {
	    let localctx = new LiteralConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, mcbParser.RULE_literalConstant);
	    try {
	        this.state = 431;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.RealLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 428;
	            this.match(mcbParser.RealLiteral);
	            break;
	        case mcbParser.IntegerLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 429;
	            this.match(mcbParser.IntegerLiteral);
	            break;
	        case mcbParser.QUOTE_OPEN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 430;
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



	assignmentOperator() {
	    let localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, mcbParser.RULE_assignmentOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 433;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.ASSIGNMENT) | (1 << mcbParser.MULT_ASSIGNMENT) | (1 << mcbParser.MOD_ASSIGNMENT) | (1 << mcbParser.DIVINE_ASSIGNMENT) | (1 << mcbParser.ADD_ASSIGNMENT) | (1 << mcbParser.SUB_ASSIGNMENT))) !== 0))) {
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



	additiveOperator() {
	    let localctx = new AdditiveOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, mcbParser.RULE_additiveOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
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
	    this.enterRule(localctx, 88, mcbParser.RULE_multiplicativeOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 437;
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
	    this.enterRule(localctx, 90, mcbParser.RULE_nbt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 439;
	        this.match(mcbParser.LSQUARE);
	        this.state = 440;
	        this.nbtEquality();
	        this.state = 445;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.COMMA) {
	            this.state = 441;
	            this.match(mcbParser.COMMA);
	            this.state = 442;
	            this.nbtEquality();
	            this.state = 447;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 448;
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
	    this.enterRule(localctx, 92, mcbParser.RULE_nbtEquality);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 450;
	        this.match(mcbParser.Identifier);
	        this.state = 451;
	        this.match(mcbParser.ASSIGNMENT);
	        this.state = 453;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mcbParser.NOT_NO_WS) {
	            this.state = 452;
	            this.match(mcbParser.NOT_NO_WS);
	        }

	        this.state = 455;
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
	    this.enterRule(localctx, 94, mcbParser.RULE_asNBT);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 461;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.RealLiteral:
	        case mcbParser.IntegerLiteral:
	        case mcbParser.QUOTE_OPEN:
	            this.state = 457;
	            this.literalConstant();
	            break;
	        case mcbParser.LSQUARE:
	            this.state = 458;
	            this.nbtArray();
	            break;
	        case mcbParser.Identifier:
	            this.state = 459;
	            this.match(mcbParser.Identifier);
	            break;
	        case mcbParser.LCURL:
	            this.state = 460;
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
	    this.enterRule(localctx, 96, mcbParser.RULE_nbtSet);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
	        this.match(mcbParser.LCURL);
	        this.state = 464;
	        this.match(mcbParser.Identifier);
	        this.state = 465;
	        this.match(mcbParser.ASSIGNMENT);
	        this.state = 466;
	        this.literalConstant();
	        this.state = 467;
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
	    this.enterRule(localctx, 98, mcbParser.RULE_nbtArray);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 469;
	        this.match(mcbParser.LSQUARE);
	        this.state = 470;
	        this.literalConstant();
	        this.state = 475;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.COMMA) {
	            this.state = 471;
	            this.match(mcbParser.COMMA);
	            this.state = 472;
	            this.literalConstant();
	            this.state = 477;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 478;
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
	    this.enterRule(localctx, 100, mcbParser.RULE_stringLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 480;
	        this.match(mcbParser.QUOTE_OPEN);
	        this.state = 484;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.LineStrText) {
	            this.state = 481;
	            this.match(mcbParser.LineStrText);
	            this.state = 486;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 487;
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



	entity() {
	    let localctx = new EntityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, mcbParser.RULE_entity);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 489;
	        _la = this._input.LA(1);
	        if(!(_la===mcbParser.AT_N_WS || _la===mcbParser.AT_P_WS)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 490;
	        this.match(mcbParser.ENTITY_SUFFIX);
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
	    this.enterRule(localctx, 104, mcbParser.RULE_nl);
	    var _la = 0; // Token type
	    try {
	        this.state = 500;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.NL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 492;
	            this.match(mcbParser.NL);
	            this.state = 496;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===mcbParser.NL) {
	                this.state = 493;
	                this.match(mcbParser.NL);
	                this.state = 498;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case mcbParser.EOF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 499;
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
	    this.enterRule(localctx, 106, mcbParser.RULE_nls);
	    try {
	        this.state = 508;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.NL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 503; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 502;
	            		this.match(mcbParser.NL);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 505; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,53, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case mcbParser.EOF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 507;
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
mcbParser.RANGE_P_WS = 13;
mcbParser.RANGE_S_WS = 14;
mcbParser.RANGE_B_WS = 15;
mcbParser.MULT = 16;
mcbParser.MOD = 17;
mcbParser.DIV = 18;
mcbParser.ADD = 19;
mcbParser.SUB = 20;
mcbParser.COLON = 21;
mcbParser.NOT_WS = 22;
mcbParser.NOT_NO_WS = 23;
mcbParser.CONJ = 24;
mcbParser.DISJ = 25;
mcbParser.ASSIGNMENT = 26;
mcbParser.MULT_ASSIGNMENT = 27;
mcbParser.MOD_ASSIGNMENT = 28;
mcbParser.DIVINE_ASSIGNMENT = 29;
mcbParser.ADD_ASSIGNMENT = 30;
mcbParser.SUB_ASSIGNMENT = 31;
mcbParser.LANGLE = 32;
mcbParser.RANGLE = 33;
mcbParser.LE = 34;
mcbParser.GE = 35;
mcbParser.MC_NOT_EQ = 36;
mcbParser.AT_N_WS = 37;
mcbParser.AT_P_WS = 38;
mcbParser.AT_S_WS = 39;
mcbParser.AT_B_WS = 40;
mcbParser.ENTITY_SUFFIX = 41;
mcbParser.POS = 42;
mcbParser.POS_P_WS = 43;
mcbParser.POS_S_WS = 44;
mcbParser.ANC = 45;
mcbParser.ANC_P_WS = 46;
mcbParser.ANC_S_WS = 47;
mcbParser.FUN = 48;
mcbParser.END = 49;
mcbParser.IF = 50;
mcbParser.UNLESS = 51;
mcbParser.K_MATCHES = 52;
mcbParser.K_DATA = 53;
mcbParser.K_ENTITY = 54;
mcbParser.K_BLOCK = 55;
mcbParser.K_STORAGE = 56;
mcbParser.K_PREDICATE = 57;
mcbParser.ELSE = 58;
mcbParser.WHILE = 59;
mcbParser.REPEAT = 60;
mcbParser.UNTIL = 61;
mcbParser.RealLiteral = 62;
mcbParser.FloatNS = 63;
mcbParser.FloatLiteral = 64;
mcbParser.DoubleLiteral = 65;
mcbParser.IntegerLiteral = 66;
mcbParser.Identifier = 67;
mcbParser.QUOTE_OPEN = 68;
mcbParser.UNICODE_CLASS_LL = 69;
mcbParser.UNICODE_CLASS_LM = 70;
mcbParser.UNICODE_CLASS_LO = 71;
mcbParser.UNICODE_CLASS_LT = 72;
mcbParser.UNICODE_CLASS_LU = 73;
mcbParser.UNICODE_CLASS_ND = 74;
mcbParser.UNICODE_CLASS_NL = 75;
mcbParser.QUOTE_CLOSE = 76;
mcbParser.LineStrText = 77;
mcbParser.I_Comment = 78;
mcbParser.I_WS = 79;
mcbParser.I_NL = 80;
mcbParser.ErrorCharacter = 81;

mcbParser.RULE_mcb = 0;
mcbParser.RULE_topPriorityObject = 1;
mcbParser.RULE_statements = 2;
mcbParser.RULE_statement = 3;
mcbParser.RULE_declaration = 4;
mcbParser.RULE_functionDeclare = 5;
mcbParser.RULE_block = 6;
mcbParser.RULE_ifStatement = 7;
mcbParser.RULE_loopStatement = 8;
mcbParser.RULE_whileDo = 9;
mcbParser.RULE_repeatUntil = 10;
mcbParser.RULE_repeatUntilBlock = 11;
mcbParser.RULE_disconjuction = 12;
mcbParser.RULE_conjuction = 13;
mcbParser.RULE_comparison = 14;
mcbParser.RULE_asComparison = 15;
mcbParser.RULE_scoreNscoreExpression = 16;
mcbParser.RULE_scoreNrangeExpression = 17;
mcbParser.RULE_range = 18;
mcbParser.RULE_entityNBTExpression = 19;
mcbParser.RULE_blockExpression = 20;
mcbParser.RULE_comparator = 21;
mcbParser.RULE_blockTag = 22;
mcbParser.RULE_locateStatement = 23;
mcbParser.RULE_position = 24;
mcbParser.RULE_posPrefix = 25;
mcbParser.RULE_posSuffix = 26;
mcbParser.RULE_anchor = 27;
mcbParser.RULE_ancPrefix = 28;
mcbParser.RULE_ancSuffix = 29;
mcbParser.RULE_locateLiteral = 30;
mcbParser.RULE_assignment = 31;
mcbParser.RULE_expression = 32;
mcbParser.RULE_asExpression = 33;
mcbParser.RULE_parentAssignableExpression = 34;
mcbParser.RULE_additiveExpression = 35;
mcbParser.RULE_multiplicativeExpression = 36;
mcbParser.RULE_scoreboardIdentifier = 37;
mcbParser.RULE_scoreboardLiteral = 38;
mcbParser.RULE_scoreboardUnaryPrefix = 39;
mcbParser.RULE_scoreboardTarget = 40;
mcbParser.RULE_literalConstant = 41;
mcbParser.RULE_assignmentOperator = 42;
mcbParser.RULE_additiveOperator = 43;
mcbParser.RULE_multiplicativeOperator = 44;
mcbParser.RULE_nbt = 45;
mcbParser.RULE_nbtEquality = 46;
mcbParser.RULE_asNBT = 47;
mcbParser.RULE_nbtSet = 48;
mcbParser.RULE_nbtArray = 49;
mcbParser.RULE_stringLiteral = 50;
mcbParser.RULE_entity = 51;
mcbParser.RULE_nl = 52;
mcbParser.RULE_nls = 53;

class McbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_mcb;
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


	topPriorityObject = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TopPriorityObjectContext);
	    } else {
	        return this.getTypedRuleContext(TopPriorityObjectContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterMcb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitMcb(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitMcb(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TopPriorityObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_topPriorityObject;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	nl() {
	    return this.getTypedRuleContext(NlContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterTopPriorityObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitTopPriorityObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitTopPriorityObject(this);
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

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
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



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(mcbParser.IF, 0);
	};

	disconjuction() {
	    return this.getTypedRuleContext(DisconjuctionContext,0);
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
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitIfStatement(this);
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

	repeatUntil() {
	    return this.getTypedRuleContext(RepeatUntilContext,0);
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

	disconjuction() {
	    return this.getTypedRuleContext(DisconjuctionContext,0);
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



class RepeatUntilContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_repeatUntil;
    }

	REPEAT() {
	    return this.getToken(mcbParser.REPEAT, 0);
	};

	repeatUntilBlock() {
	    return this.getTypedRuleContext(RepeatUntilBlockContext,0);
	};

	disconjuction() {
	    return this.getTypedRuleContext(DisconjuctionContext,0);
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
	        listener.enterRepeatUntil(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitRepeatUntil(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitRepeatUntil(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RepeatUntilBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_repeatUntilBlock;
    }

	COLON() {
	    return this.getToken(mcbParser.COLON, 0);
	};

	statements() {
	    return this.getTypedRuleContext(StatementsContext,0);
	};

	UNTIL() {
	    return this.getToken(mcbParser.UNTIL, 0);
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
	        listener.enterRepeatUntilBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitRepeatUntilBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitRepeatUntilBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DisconjuctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_disconjuction;
    }

	conjuction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjuctionContext);
	    } else {
	        return this.getTypedRuleContext(ConjuctionContext,i);
	    }
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


	DISJ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.DISJ);
	    } else {
	        return this.getToken(mcbParser.DISJ, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterDisconjuction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitDisconjuction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitDisconjuction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConjuctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_conjuction;
    }

	comparison = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComparisonContext);
	    } else {
	        return this.getTypedRuleContext(ComparisonContext,i);
	    }
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


	CONJ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(mcbParser.CONJ);
	    } else {
	        return this.getToken(mcbParser.CONJ, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterConjuction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitConjuction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitConjuction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_comparison;
    }

	asComparison() {
	    return this.getTypedRuleContext(AsComparisonContext,0);
	};

	NOT_NO_WS() {
	    return this.getToken(mcbParser.NOT_NO_WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitComparison(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitComparison(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AsComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_asComparison;
    }

	scoreNscoreExpression() {
	    return this.getTypedRuleContext(ScoreNscoreExpressionContext,0);
	};

	scoreNrangeExpression() {
	    return this.getTypedRuleContext(ScoreNrangeExpressionContext,0);
	};

	entityNBTExpression() {
	    return this.getTypedRuleContext(EntityNBTExpressionContext,0);
	};

	blockExpression() {
	    return this.getTypedRuleContext(BlockExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterAsComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitAsComparison(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitAsComparison(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScoreNscoreExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_scoreNscoreExpression;
    }

	scoreboardIdentifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ScoreboardIdentifierContext);
	    } else {
	        return this.getTypedRuleContext(ScoreboardIdentifierContext,i);
	    }
	};

	comparator() {
	    return this.getTypedRuleContext(ComparatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterScoreNscoreExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitScoreNscoreExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitScoreNscoreExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ScoreNrangeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_scoreNrangeExpression;
    }

	scoreboardIdentifier() {
	    return this.getTypedRuleContext(ScoreboardIdentifierContext,0);
	};

	K_MATCHES() {
	    return this.getToken(mcbParser.K_MATCHES, 0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterScoreNrangeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitScoreNrangeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitScoreNrangeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_range;
    }

	scoreboardLiteral = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ScoreboardLiteralContext);
	    } else {
	        return this.getTypedRuleContext(ScoreboardLiteralContext,i);
	    }
	};

	RANGE_S_WS() {
	    return this.getToken(mcbParser.RANGE_S_WS, 0);
	};

	RANGE_P_WS() {
	    return this.getToken(mcbParser.RANGE_P_WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EntityNBTExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_entityNBTExpression;
    }

	K_ENTITY() {
	    return this.getToken(mcbParser.K_ENTITY, 0);
	};

	entity() {
	    return this.getTypedRuleContext(EntityContext,0);
	};

	nbt() {
	    return this.getTypedRuleContext(NbtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterEntityNBTExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitEntityNBTExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitEntityNBTExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_blockExpression;
    }

	K_BLOCK() {
	    return this.getToken(mcbParser.K_BLOCK, 0);
	};

	locateStatement() {
	    return this.getTypedRuleContext(LocateStatementContext,0);
	};

	blockTag() {
	    return this.getTypedRuleContext(BlockTagContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterBlockExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitBlockExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitBlockExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_comparator;
    }

	LANGLE() {
	    return this.getToken(mcbParser.LANGLE, 0);
	};

	RANGLE() {
	    return this.getToken(mcbParser.RANGLE, 0);
	};

	LE() {
	    return this.getToken(mcbParser.LE, 0);
	};

	GE() {
	    return this.getToken(mcbParser.GE, 0);
	};

	ASSIGNMENT() {
	    return this.getToken(mcbParser.ASSIGNMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterComparator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitComparator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitComparator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockTagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_blockTag;
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


	COLON() {
	    return this.getToken(mcbParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterBlockTag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitBlockTag(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitBlockTag(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LocateStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_locateStatement;
    }

	position() {
	    return this.getTypedRuleContext(PositionContext,0);
	};

	anchor() {
	    return this.getTypedRuleContext(AnchorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterLocateStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitLocateStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitLocateStatement(this);
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

	posPrefix = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PosPrefixContext);
	    } else {
	        return this.getTypedRuleContext(PosPrefixContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterPosition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitPosition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitPosition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PosPrefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_posPrefix;
    }

	POS_P_WS() {
	    return this.getToken(mcbParser.POS_P_WS, 0);
	};

	locateLiteral() {
	    return this.getTypedRuleContext(LocateLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterPosPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitPosPrefix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitPosPrefix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PosSuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_posSuffix;
    }

	POS_S_WS() {
	    return this.getToken(mcbParser.POS_S_WS, 0);
	};

	locateLiteral() {
	    return this.getTypedRuleContext(LocateLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterPosSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitPosSuffix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitPosSuffix(this);
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

	ancPrefix() {
	    return this.getTypedRuleContext(AncPrefixContext,0);
	};

	ancSuffix() {
	    return this.getTypedRuleContext(AncSuffixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterAnchor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitAnchor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitAnchor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AncPrefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_ancPrefix;
    }

	ANC_P_WS() {
	    return this.getToken(mcbParser.ANC_P_WS, 0);
	};

	locateLiteral() {
	    return this.getTypedRuleContext(LocateLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterAncPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitAncPrefix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitAncPrefix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AncSuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_ancSuffix;
    }

	ANC_S_WS() {
	    return this.getToken(mcbParser.ANC_S_WS, 0);
	};

	locateLiteral() {
	    return this.getTypedRuleContext(LocateLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterAncSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitAncSuffix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitAncSuffix(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LocateLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_locateLiteral;
    }

	FloatNS() {
	    return this.getToken(mcbParser.FloatNS, 0);
	};

	SUB() {
	    return this.getToken(mcbParser.SUB, 0);
	};

	scoreboardLiteral() {
	    return this.getTypedRuleContext(ScoreboardLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterLocateLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitLocateLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitLocateLiteral(this);
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

	assignmentOperator() {
	    return this.getTypedRuleContext(AssignmentOperatorContext,0);
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

	scoreboardUnaryPrefix() {
	    return this.getTypedRuleContext(ScoreboardUnaryPrefixContext,0);
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



class ScoreboardUnaryPrefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_scoreboardUnaryPrefix;
    }

	SUB() {
	    return this.getToken(mcbParser.SUB, 0);
	};

	IntegerLiteral() {
	    return this.getToken(mcbParser.IntegerLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterScoreboardUnaryPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitScoreboardUnaryPrefix(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitScoreboardUnaryPrefix(this);
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

	entity() {
	    return this.getTypedRuleContext(EntityContext,0);
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



class AssignmentOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_assignmentOperator;
    }

	ASSIGNMENT() {
	    return this.getToken(mcbParser.ASSIGNMENT, 0);
	};

	MULT_ASSIGNMENT() {
	    return this.getToken(mcbParser.MULT_ASSIGNMENT, 0);
	};

	MOD_ASSIGNMENT() {
	    return this.getToken(mcbParser.MOD_ASSIGNMENT, 0);
	};

	DIVINE_ASSIGNMENT() {
	    return this.getToken(mcbParser.DIVINE_ASSIGNMENT, 0);
	};

	ADD_ASSIGNMENT() {
	    return this.getToken(mcbParser.ADD_ASSIGNMENT, 0);
	};

	SUB_ASSIGNMENT() {
	    return this.getToken(mcbParser.SUB_ASSIGNMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterAssignmentOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitAssignmentOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitAssignmentOperator(this);
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

	NOT_NO_WS() {
	    return this.getToken(mcbParser.NOT_NO_WS, 0);
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



class EntityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_entity;
    }

	ENTITY_SUFFIX() {
	    return this.getToken(mcbParser.ENTITY_SUFFIX, 0);
	};

	AT_N_WS() {
	    return this.getToken(mcbParser.AT_N_WS, 0);
	};

	AT_P_WS() {
	    return this.getToken(mcbParser.AT_P_WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterEntity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitEntity(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitEntity(this);
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




mcbParser.McbContext = McbContext; 
mcbParser.TopPriorityObjectContext = TopPriorityObjectContext; 
mcbParser.StatementsContext = StatementsContext; 
mcbParser.StatementContext = StatementContext; 
mcbParser.DeclarationContext = DeclarationContext; 
mcbParser.FunctionDeclareContext = FunctionDeclareContext; 
mcbParser.BlockContext = BlockContext; 
mcbParser.IfStatementContext = IfStatementContext; 
mcbParser.LoopStatementContext = LoopStatementContext; 
mcbParser.WhileDoContext = WhileDoContext; 
mcbParser.RepeatUntilContext = RepeatUntilContext; 
mcbParser.RepeatUntilBlockContext = RepeatUntilBlockContext; 
mcbParser.DisconjuctionContext = DisconjuctionContext; 
mcbParser.ConjuctionContext = ConjuctionContext; 
mcbParser.ComparisonContext = ComparisonContext; 
mcbParser.AsComparisonContext = AsComparisonContext; 
mcbParser.ScoreNscoreExpressionContext = ScoreNscoreExpressionContext; 
mcbParser.ScoreNrangeExpressionContext = ScoreNrangeExpressionContext; 
mcbParser.RangeContext = RangeContext; 
mcbParser.EntityNBTExpressionContext = EntityNBTExpressionContext; 
mcbParser.BlockExpressionContext = BlockExpressionContext; 
mcbParser.ComparatorContext = ComparatorContext; 
mcbParser.BlockTagContext = BlockTagContext; 
mcbParser.LocateStatementContext = LocateStatementContext; 
mcbParser.PositionContext = PositionContext; 
mcbParser.PosPrefixContext = PosPrefixContext; 
mcbParser.PosSuffixContext = PosSuffixContext; 
mcbParser.AnchorContext = AnchorContext; 
mcbParser.AncPrefixContext = AncPrefixContext; 
mcbParser.AncSuffixContext = AncSuffixContext; 
mcbParser.LocateLiteralContext = LocateLiteralContext; 
mcbParser.AssignmentContext = AssignmentContext; 
mcbParser.ExpressionContext = ExpressionContext; 
mcbParser.AsExpressionContext = AsExpressionContext; 
mcbParser.ParentAssignableExpressionContext = ParentAssignableExpressionContext; 
mcbParser.AdditiveExpressionContext = AdditiveExpressionContext; 
mcbParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
mcbParser.ScoreboardIdentifierContext = ScoreboardIdentifierContext; 
mcbParser.ScoreboardLiteralContext = ScoreboardLiteralContext; 
mcbParser.ScoreboardUnaryPrefixContext = ScoreboardUnaryPrefixContext; 
mcbParser.ScoreboardTargetContext = ScoreboardTargetContext; 
mcbParser.LiteralConstantContext = LiteralConstantContext; 
mcbParser.AssignmentOperatorContext = AssignmentOperatorContext; 
mcbParser.AdditiveOperatorContext = AdditiveOperatorContext; 
mcbParser.MultiplicativeOperatorContext = MultiplicativeOperatorContext; 
mcbParser.NbtContext = NbtContext; 
mcbParser.NbtEqualityContext = NbtEqualityContext; 
mcbParser.AsNBTContext = AsNBTContext; 
mcbParser.NbtSetContext = NbtSetContext; 
mcbParser.NbtArrayContext = NbtArrayContext; 
mcbParser.StringLiteralContext = StringLiteralContext; 
mcbParser.EntityContext = EntityContext; 
mcbParser.NlContext = NlContext; 
mcbParser.NlsContext = NlsContext; 
