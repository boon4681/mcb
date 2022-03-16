// Generated from e:\_Project\nodejs\mcb\src\mcbParser.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import mcbParserListener from './mcbParserListener.js';
import mcbParserVisitor from './mcbParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003N\u01eb\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
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
    "\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t\u0005\t\u00ad\n\t\u0003\n\u0003",
    "\n\u0007\n\u00b1\n\n\f\n\u000e\n\u00b4\u000b\n\u0003\n\u0003\n\u0007",
    "\n\u00b8\n\n\f\n\u000e\n\u00bb\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003",
    "\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00c4\n\f\f\f\u000e\f\u00c7\u000b",
    "\f\u0003\r\u0003\r\u0003\r\u0007\r\u00cc\n\r\f\r\u000e\r\u00cf\u000b",
    "\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00d5",
    "\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0005\u0011\u00e0\n",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00e4\n\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u00e9\n\u0011\u0003\u0011\u0005",
    "\u0011\u00ec\n\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00f0\n\u0011",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00f5\n\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0101\n\u0015",
    "\u0003\u0016\u0003\u0016\u0005\u0016\u0105\n\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0005\u0018\u010f\n\u0018\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0005\u0019\u0115\n\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0005\u001a\u011b\n\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0005\u001c\u0125\n\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0005\u001d\u012b\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0005\u001e\u0131\n\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0005\u001f\u0137\n\u001f\u0003 \u0003 \u0007 \u013b",
    "\n \f \u000e \u013e\u000b \u0003 \u0003 \u0003 \u0007 \u0143\n \f \u000e",
    " \u0146\u000b \u0003 \u0003 \u0003!\u0003!\u0007!\u014c\n!\f!\u000e",
    "!\u014f\u000b!\u0003!\u0003!\u0003!\u0007!\u0154\n!\f!\u000e!\u0157",
    "\u000b!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0007\"\u015e\n\"\f\"",
    "\u000e\"\u0161\u000b\"\u0003#\u0003#\u0003$\u0003$\u0003$\u0005$\u0168",
    "\n$\u0003%\u0003%\u0007%\u016c\n%\f%\u000e%\u016f\u000b%\u0003%\u0003",
    "%\u0007%\u0173\n%\f%\u000e%\u0176\u000b%\u0003%\u0003%\u0003&\u0003",
    "&\u0003&\u0003&\u0007&\u017e\n&\f&\u000e&\u0181\u000b&\u0003\'\u0003",
    "\'\u0003\'\u0003\'\u0007\'\u0187\n\'\f\'\u000e\'\u018a\u000b\'\u0003",
    "(\u0003(\u0003(\u0003(\u0005(\u0190\n(\u0003(\u0003(\u0003)\u0003)\u0005",
    ")\u0196\n)\u0003*\u0003*\u0003*\u0003+\u0003+\u0005+\u019d\n+\u0003",
    ",\u0003,\u0003,\u0005,\u01a2\n,\u0003-\u0003-\u0003.\u0003.\u0003/\u0003",
    "/\u00030\u00030\u00030\u00030\u00070\u01ae\n0\f0\u000e0\u01b1\u000b",
    "0\u00030\u00030\u00031\u00031\u00031\u00031\u00032\u00032\u00032\u0003",
    "2\u00052\u01bd\n2\u00033\u00033\u00033\u00033\u00033\u00033\u00034\u0003",
    "4\u00034\u00034\u00074\u01c9\n4\f4\u000e4\u01cc\u000b4\u00034\u0003",
    "4\u00035\u00035\u00075\u01d2\n5\f5\u000e5\u01d5\u000b5\u00035\u0003",
    "5\u00036\u00036\u00076\u01db\n6\f6\u000e6\u01de\u000b6\u00036\u0005",
    "6\u01e1\n6\u00037\u00067\u01e4\n7\r7\u000e7\u01e5\u00037\u00057\u01e9",
    "\n7\u00037\u0002\u00028\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bd",
    "fhjl\u0002\u0006\u0004\u0002\u0017\u0017\u001d \u0003\u0002\u0017\u001c",
    "\u0003\u0002\u0012\u0013\u0003\u0002\u000f\u0011\u0002\u01f8\u0002q",
    "\u0003\u0002\u0002\u0002\u0004|\u0003\u0002\u0002\u0002\u0006\u0089",
    "\u0003\u0002\u0002\u0002\b\u0092\u0003\u0002\u0002\u0002\n\u0094\u0003",
    "\u0002\u0002\u0002\f\u0096\u0003\u0002\u0002\u0002\u000e\u009a\u0003",
    "\u0002\u0002\u0002\u0010\u00ac\u0003\u0002\u0002\u0002\u0012\u00ae\u0003",
    "\u0002\u0002\u0002\u0014\u00be\u0003\u0002\u0002\u0002\u0016\u00c0\u0003",
    "\u0002\u0002\u0002\u0018\u00c8\u0003\u0002\u0002\u0002\u001a\u00d4\u0003",
    "\u0002\u0002\u0002\u001c\u00d6\u0003\u0002\u0002\u0002\u001e\u00da\u0003",
    "\u0002\u0002\u0002 \u00ef\u0003\u0002\u0002\u0002\"\u00f1\u0003\u0002",
    "\u0002\u0002$\u00f6\u0003\u0002\u0002\u0002&\u00fa\u0003\u0002\u0002",
    "\u0002(\u0100\u0003\u0002\u0002\u0002*\u0104\u0003\u0002\u0002\u0002",
    ",\u0106\u0003\u0002\u0002\u0002.\u010e\u0003\u0002\u0002\u00020\u0114",
    "\u0003\u0002\u0002\u00022\u011a\u0003\u0002\u0002\u00024\u011c\u0003",
    "\u0002\u0002\u00026\u0124\u0003\u0002\u0002\u00028\u012a\u0003\u0002",
    "\u0002\u0002:\u0130\u0003\u0002\u0002\u0002<\u0136\u0003\u0002\u0002",
    "\u0002>\u0138\u0003\u0002\u0002\u0002@\u0149\u0003\u0002\u0002\u0002",
    "B\u015a\u0003\u0002\u0002\u0002D\u0162\u0003\u0002\u0002\u0002F\u0167",
    "\u0003\u0002\u0002\u0002H\u0169\u0003\u0002\u0002\u0002J\u0179\u0003",
    "\u0002\u0002\u0002L\u0182\u0003\u0002\u0002\u0002N\u018b\u0003\u0002",
    "\u0002\u0002P\u0195\u0003\u0002\u0002\u0002R\u0197\u0003\u0002\u0002",
    "\u0002T\u019a\u0003\u0002\u0002\u0002V\u01a1\u0003\u0002\u0002\u0002",
    "X\u01a3\u0003\u0002\u0002\u0002Z\u01a5\u0003\u0002\u0002\u0002\\\u01a7",
    "\u0003\u0002\u0002\u0002^\u01a9\u0003\u0002\u0002\u0002`\u01b4\u0003",
    "\u0002\u0002\u0002b\u01bc\u0003\u0002\u0002\u0002d\u01be\u0003\u0002",
    "\u0002\u0002f\u01c4\u0003\u0002\u0002\u0002h\u01cf\u0003\u0002\u0002",
    "\u0002j\u01e0\u0003\u0002\u0002\u0002l\u01e8\u0003\u0002\u0002\u0002",
    "np\u0007\u0005\u0002\u0002on\u0003\u0002\u0002\u0002ps\u0003\u0002\u0002",
    "\u0002qo\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rw\u0003\u0002",
    "\u0002\u0002sq\u0003\u0002\u0002\u0002tv\u0005\u0004\u0003\u0002ut\u0003",
    "\u0002\u0002\u0002vy\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002",
    "wx\u0003\u0002\u0002\u0002xz\u0003\u0002\u0002\u0002yw\u0003\u0002\u0002",
    "\u0002z{\u0007\u0002\u0002\u0003{\u0003\u0003\u0002\u0002\u0002|~\u0005",
    "\n\u0006\u0002}\u007f\u0005l7\u0002~}\u0003\u0002\u0002\u0002~\u007f",
    "\u0003\u0002\u0002\u0002\u007f\u0005\u0003\u0002\u0002\u0002\u0080\u0086",
    "\u0005\b\u0005\u0002\u0081\u0082\u0005l7\u0002\u0082\u0083\u0005\b\u0005",
    "\u0002\u0083\u0085\u0003\u0002\u0002\u0002\u0084\u0081\u0003\u0002\u0002",
    "\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002",
    "\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u008a\u0003\u0002\u0002",
    "\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089\u0080\u0003\u0002\u0002",
    "\u0002\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008c\u0003\u0002\u0002",
    "\u0002\u008b\u008d\u0005l7\u0002\u008c\u008b\u0003\u0002\u0002\u0002",
    "\u008c\u008d\u0003\u0002\u0002\u0002\u008d\u0007\u0003\u0002\u0002\u0002",
    "\u008e\u0093\u0005\n\u0006\u0002\u008f\u0093\u0005B\"\u0002\u0090\u0093",
    "\u0005\u0010\t\u0002\u0091\u0093\u0005\u0012\n\u0002\u0092\u008e\u0003",
    "\u0002\u0002\u0002\u0092\u008f\u0003\u0002\u0002\u0002\u0092\u0090\u0003",
    "\u0002\u0002\u0002\u0092\u0091\u0003\u0002\u0002\u0002\u0093\t\u0003",
    "\u0002\u0002\u0002\u0094\u0095\u0005\f\u0007\u0002\u0095\u000b\u0003",
    "\u0002\u0002\u0002\u0096\u0097\u0007.\u0002\u0002\u0097\u0098\u0007",
    "@\u0002\u0002\u0098\u0099\u0005\u000e\b\u0002\u0099\r\u0003\u0002\u0002",
    "\u0002\u009a\u009e\u0007\u0014\u0002\u0002\u009b\u009d\u0007\u0005\u0002",
    "\u0002\u009c\u009b\u0003\u0002\u0002\u0002\u009d\u00a0\u0003\u0002\u0002",
    "\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002",
    "\u0002\u009f\u00a1\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002",
    "\u0002\u00a1\u00a5\u0005\u0006\u0004\u0002\u00a2\u00a4\u0007\u0005\u0002",
    "\u0002\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a7\u0003\u0002\u0002",
    "\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002",
    "\u0002\u00a6\u00a8\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0007/\u0002\u0002\u00a9\u000f\u0003\u0002\u0002",
    "\u0002\u00aa\u00ad\u0005> \u0002\u00ab\u00ad\u0005@!\u0002\u00ac\u00aa",
    "\u0003\u0002\u0002\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad\u0011",
    "\u0003\u0002\u0002\u0002\u00ae\u00b2\u00070\u0002\u0002\u00af\u00b1",
    "\u0007\u0005\u0002\u0002\u00b0\u00af\u0003\u0002\u0002\u0002\u00b1\u00b4",
    "\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3",
    "\u0003\u0002\u0002\u0002\u00b3\u00b5\u0003\u0002\u0002\u0002\u00b4\u00b2",
    "\u0003\u0002\u0002\u0002\u00b5\u00b9\u0005\u0014\u000b\u0002\u00b6\u00b8",
    "\u0007\u0005\u0002\u0002\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8\u00bb",
    "\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00b9\u00ba",
    "\u0003\u0002\u0002\u0002\u00ba\u00bc\u0003\u0002\u0002\u0002\u00bb\u00b9",
    "\u0003\u0002\u0002\u0002\u00bc\u00bd\u0005\u000e\b\u0002\u00bd\u0013",
    "\u0003\u0002\u0002\u0002\u00be\u00bf\u0005\u0016\f\u0002\u00bf\u0015",
    "\u0003\u0002\u0002\u0002\u00c0\u00c5\u0005\u0018\r\u0002\u00c1\u00c2",
    "\u0007\u0016\u0002\u0002\u00c2\u00c4\u0005\u0018\r\u0002\u00c3\u00c1",
    "\u0003\u0002\u0002\u0002\u00c4\u00c7\u0003\u0002\u0002\u0002\u00c5\u00c3",
    "\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002\u0002\u00c6\u0017",
    "\u0003\u0002\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8\u00cd",
    "\u0005\u001a\u000e\u0002\u00c9\u00ca\u0007\u0015\u0002\u0002\u00ca\u00cc",
    "\u0005\u001a\u000e\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cc\u00cf",
    "\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00cd\u00ce",
    "\u0003\u0002\u0002\u0002\u00ce\u0019\u0003\u0002\u0002\u0002\u00cf\u00cd",
    "\u0003\u0002\u0002\u0002\u00d0\u00d5\u0005\u001c\u000f\u0002\u00d1\u00d5",
    "\u0005\u001e\u0010\u0002\u00d2\u00d5\u0005\"\u0012\u0002\u00d3\u00d5",
    "\u0005$\u0013\u0002\u00d4\u00d0\u0003\u0002\u0002\u0002\u00d4\u00d1",
    "\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002\u0002\u00d4\u00d3",
    "\u0003\u0002\u0002\u0002\u00d5\u001b\u0003\u0002\u0002\u0002\u00d6\u00d7",
    "\u0005N(\u0002\u00d7\u00d8\u0005&\u0014\u0002\u00d8\u00d9\u0005N(\u0002",
    "\u00d9\u001d\u0003\u0002\u0002\u0002\u00da\u00db\u0005N(\u0002\u00db",
    "\u00dc\u00072\u0002\u0002\u00dc\u00dd\u0005 \u0011\u0002\u00dd\u001f",
    "\u0003\u0002\u0002\u0002\u00de\u00e0\u0005P)\u0002\u00df\u00de\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003",
    "\u0002\u0002\u0002\u00e1\u00e3\u0007\u000e\u0002\u0002\u00e2\u00e4\u0005",
    "P)\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e3\u00e4\u0003\u0002",
    "\u0002\u0002\u00e4\u00f0\u0003\u0002\u0002\u0002\u00e5\u00e6\u0005P",
    ")\u0002\u00e6\u00e8\u0007\u000e\u0002\u0002\u00e7\u00e9\u0005P)\u0002",
    "\u00e8\u00e7\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002",
    "\u00e9\u00f0\u0003\u0002\u0002\u0002\u00ea\u00ec\u0005P)\u0002\u00eb",
    "\u00ea\u0003\u0002\u0002\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec",
    "\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ee\u0007\u000e\u0002\u0002\u00ee",
    "\u00f0\u0005P)\u0002\u00ef\u00df\u0003\u0002\u0002\u0002\u00ef\u00e5",
    "\u0003\u0002\u0002\u0002\u00ef\u00eb\u0003\u0002\u0002\u0002\u00f0!",
    "\u0003\u0002\u0002\u0002\u00f1\u00f2\u00074\u0002\u0002\u00f2\u00f4",
    "\u0007%\u0002\u0002\u00f3\u00f5\u0005^0\u0002\u00f4\u00f3\u0003\u0002",
    "\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5#\u0003\u0002",
    "\u0002\u0002\u00f6\u00f7\u00075\u0002\u0002\u00f7\u00f8\u0005*\u0016",
    "\u0002\u00f8\u00f9\u0005(\u0015\u0002\u00f9%\u0003\u0002\u0002\u0002",
    "\u00fa\u00fb\t\u0002\u0002\u0002\u00fb\'\u0003\u0002\u0002\u0002\u00fc",
    "\u0101\u0007@\u0002\u0002\u00fd\u00fe\u0007@\u0002\u0002\u00fe\u00ff",
    "\u0007\u0014\u0002\u0002\u00ff\u0101\u0007@\u0002\u0002\u0100\u00fc",
    "\u0003\u0002\u0002\u0002\u0100\u00fd\u0003\u0002\u0002\u0002\u0101)",
    "\u0003\u0002\u0002\u0002\u0102\u0105\u0005,\u0017\u0002\u0103\u0105",
    "\u00054\u001b\u0002\u0104\u0102\u0003\u0002\u0002\u0002\u0104\u0103",
    "\u0003\u0002\u0002\u0002\u0105+\u0003\u0002\u0002\u0002\u0106\u0107",
    "\u0005.\u0018\u0002\u0107\u0108\u00050\u0019\u0002\u0108\u0109\u0005",
    "2\u001a\u0002\u0109-\u0003\u0002\u0002\u0002\u010a\u010b\u0007\'\u0002",
    "\u0002\u010b\u010f\u0005<\u001f\u0002\u010c\u010f\u0007\'\u0002\u0002",
    "\u010d\u010f\u0005<\u001f\u0002\u010e\u010a\u0003\u0002\u0002\u0002",
    "\u010e\u010c\u0003\u0002\u0002\u0002\u010e\u010d\u0003\u0002\u0002\u0002",
    "\u010f/\u0003\u0002\u0002\u0002\u0110\u0111\u0007)\u0002\u0002\u0111",
    "\u0115\u0005<\u001f\u0002\u0112\u0115\u0007)\u0002\u0002\u0113\u0115",
    "\u0005<\u001f\u0002\u0114\u0110\u0003\u0002\u0002\u0002\u0114\u0112",
    "\u0003\u0002\u0002\u0002\u0114\u0113\u0003\u0002\u0002\u0002\u01151",
    "\u0003\u0002\u0002\u0002\u0116\u0117\u0007(\u0002\u0002\u0117\u011b",
    "\u0005<\u001f\u0002\u0118\u011b\u0007(\u0002\u0002\u0119\u011b\u0005",
    "<\u001f\u0002\u011a\u0116\u0003\u0002\u0002\u0002\u011a\u0118\u0003",
    "\u0002\u0002\u0002\u011a\u0119\u0003\u0002\u0002\u0002\u011b3\u0003",
    "\u0002\u0002\u0002\u011c\u011d\u00056\u001c\u0002\u011d\u011e\u0005",
    "8\u001d\u0002\u011e\u011f\u0005:\u001e\u0002\u011f5\u0003\u0002\u0002",
    "\u0002\u0120\u0121\u0007+\u0002\u0002\u0121\u0125\u0005<\u001f\u0002",
    "\u0122\u0125\u0007+\u0002\u0002\u0123\u0125\u0005<\u001f\u0002\u0124",
    "\u0120\u0003\u0002\u0002\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0124",
    "\u0123\u0003\u0002\u0002\u0002\u01257\u0003\u0002\u0002\u0002\u0126",
    "\u0127\u0007-\u0002\u0002\u0127\u012b\u0005<\u001f\u0002\u0128\u012b",
    "\u0007-\u0002\u0002\u0129\u012b\u0005<\u001f\u0002\u012a\u0126\u0003",
    "\u0002\u0002\u0002\u012a\u0128\u0003\u0002\u0002\u0002\u012a\u0129\u0003",
    "\u0002\u0002\u0002\u012b9\u0003\u0002\u0002\u0002\u012c\u012d\u0007",
    ",\u0002\u0002\u012d\u0131\u0005<\u001f\u0002\u012e\u0131\u0007,\u0002",
    "\u0002\u012f\u0131\u0005<\u001f\u0002\u0130\u012c\u0003\u0002\u0002",
    "\u0002\u0130\u012e\u0003\u0002\u0002\u0002\u0130\u012f\u0003\u0002\u0002",
    "\u0002\u0131;\u0003\u0002\u0002\u0002\u0132\u0137\u0007<\u0002\u0002",
    "\u0133\u0134\u0007\u0013\u0002\u0002\u0134\u0137\u0007<\u0002\u0002",
    "\u0135\u0137\u0005P)\u0002\u0136\u0132\u0003\u0002\u0002\u0002\u0136",
    "\u0133\u0003\u0002\u0002\u0002\u0136\u0135\u0003\u0002\u0002\u0002\u0137",
    "=\u0003\u0002\u0002\u0002\u0138\u013c\u00079\u0002\u0002\u0139\u013b",
    "\u0007\u0005\u0002\u0002\u013a\u0139\u0003\u0002\u0002\u0002\u013b\u013e",
    "\u0003\u0002\u0002\u0002\u013c\u013a\u0003\u0002\u0002\u0002\u013c\u013d",
    "\u0003\u0002\u0002\u0002\u013d\u013f\u0003\u0002\u0002\u0002\u013e\u013c",
    "\u0003\u0002\u0002\u0002\u013f\u0140\u0007\b\u0002\u0002\u0140\u0144",
    "\u0007\t\u0002\u0002\u0141\u0143\u0007\u0005\u0002\u0002\u0142\u0141",
    "\u0003\u0002\u0002\u0002\u0143\u0146\u0003\u0002\u0002\u0002\u0144\u0142",
    "\u0003\u0002\u0002\u0002\u0144\u0145\u0003\u0002\u0002\u0002\u0145\u0147",
    "\u0003\u0002\u0002\u0002\u0146\u0144\u0003\u0002\u0002\u0002\u0147\u0148",
    "\u0005\u000e\b\u0002\u0148?\u0003\u0002\u0002\u0002\u0149\u014d\u0007",
    ":\u0002\u0002\u014a\u014c\u0007\u0005\u0002\u0002\u014b\u014a\u0003",
    "\u0002\u0002\u0002\u014c\u014f\u0003\u0002\u0002\u0002\u014d\u014b\u0003",
    "\u0002\u0002\u0002\u014d\u014e\u0003\u0002\u0002\u0002\u014e\u0150\u0003",
    "\u0002\u0002\u0002\u014f\u014d\u0003\u0002\u0002\u0002\u0150\u0151\u0007",
    "\b\u0002\u0002\u0151\u0155\u0007\t\u0002\u0002\u0152\u0154\u0007\u0005",
    "\u0002\u0002\u0153\u0152\u0003\u0002\u0002\u0002\u0154\u0157\u0003\u0002",
    "\u0002\u0002\u0155\u0153\u0003\u0002\u0002\u0002\u0155\u0156\u0003\u0002",
    "\u0002\u0002\u0156\u0158\u0003\u0002\u0002\u0002\u0157\u0155\u0003\u0002",
    "\u0002\u0002\u0158\u0159\u0005\u000e\b\u0002\u0159A\u0003\u0002\u0002",
    "\u0002\u015a\u015b\u0005N(\u0002\u015b\u015f\u0005X-\u0002\u015c\u015e",
    "\u0005D#\u0002\u015d\u015c\u0003\u0002\u0002\u0002\u015e\u0161\u0003",
    "\u0002\u0002\u0002\u015f\u015d\u0003\u0002\u0002\u0002\u015f\u0160\u0003",
    "\u0002\u0002\u0002\u0160C\u0003\u0002\u0002\u0002\u0161\u015f\u0003",
    "\u0002\u0002\u0002\u0162\u0163\u0005J&\u0002\u0163E\u0003\u0002\u0002",
    "\u0002\u0164\u0168\u0005P)\u0002\u0165\u0168\u0005N(\u0002\u0166\u0168",
    "\u0005H%\u0002\u0167\u0164\u0003\u0002\u0002\u0002\u0167\u0165\u0003",
    "\u0002\u0002\u0002\u0167\u0166\u0003\u0002\u0002\u0002\u0168G\u0003",
    "\u0002\u0002\u0002\u0169\u016d\u0007\b\u0002\u0002\u016a\u016c\u0007",
    "\u0005\u0002\u0002\u016b\u016a\u0003\u0002\u0002\u0002\u016c\u016f\u0003",
    "\u0002\u0002\u0002\u016d\u016b\u0003\u0002\u0002\u0002\u016d\u016e\u0003",
    "\u0002\u0002\u0002\u016e\u0170\u0003\u0002\u0002\u0002\u016f\u016d\u0003",
    "\u0002\u0002\u0002\u0170\u0174\u0005D#\u0002\u0171\u0173\u0007\u0005",
    "\u0002\u0002\u0172\u0171\u0003\u0002\u0002\u0002\u0173\u0176\u0003\u0002",
    "\u0002\u0002\u0174\u0172\u0003\u0002\u0002\u0002\u0174\u0175\u0003\u0002",
    "\u0002\u0002\u0175\u0177\u0003\u0002\u0002\u0002\u0176\u0174\u0003\u0002",
    "\u0002\u0002\u0177\u0178\u0007\t\u0002\u0002\u0178I\u0003\u0002\u0002",
    "\u0002\u0179\u017f\u0005L\'\u0002\u017a\u017b\u0005Z.\u0002\u017b\u017c",
    "\u0005L\'\u0002\u017c\u017e\u0003\u0002\u0002\u0002\u017d\u017a\u0003",
    "\u0002\u0002\u0002\u017e\u0181\u0003\u0002\u0002\u0002\u017f\u017d\u0003",
    "\u0002\u0002\u0002\u017f\u0180\u0003\u0002\u0002\u0002\u0180K\u0003",
    "\u0002\u0002\u0002\u0181\u017f\u0003\u0002\u0002\u0002\u0182\u0188\u0005",
    "F$\u0002\u0183\u0184\u0005\\/\u0002\u0184\u0185\u0005F$\u0002\u0185",
    "\u0187\u0003\u0002\u0002\u0002\u0186\u0183\u0003\u0002\u0002\u0002\u0187",
    "\u018a\u0003\u0002\u0002\u0002\u0188\u0186\u0003\u0002\u0002\u0002\u0188",
    "\u0189\u0003\u0002\u0002\u0002\u0189M\u0003\u0002\u0002\u0002\u018a",
    "\u0188\u0003\u0002\u0002\u0002\u018b\u018c\u0007@\u0002\u0002\u018c",
    "\u018f\u0007\n\u0002\u0002\u018d\u0190\u0007@\u0002\u0002\u018e\u0190",
    "\u0005T+\u0002\u018f\u018d\u0003\u0002\u0002\u0002\u018f\u018e\u0003",
    "\u0002\u0002\u0002\u0190\u0191\u0003\u0002\u0002\u0002\u0191\u0192\u0007",
    "\u000b\u0002\u0002\u0192O\u0003\u0002\u0002\u0002\u0193\u0196\u0007",
    "?\u0002\u0002\u0194\u0196\u0005R*\u0002\u0195\u0193\u0003\u0002\u0002",
    "\u0002\u0195\u0194\u0003\u0002\u0002\u0002\u0196Q\u0003\u0002\u0002",
    "\u0002\u0197\u0198\u0007\u0013\u0002\u0002\u0198\u0199\u0007?\u0002",
    "\u0002\u0199S\u0003\u0002\u0002\u0002\u019a\u019c\u0007%\u0002\u0002",
    "\u019b\u019d\u0005^0\u0002\u019c\u019b\u0003\u0002\u0002\u0002\u019c",
    "\u019d\u0003\u0002\u0002\u0002\u019dU\u0003\u0002\u0002\u0002\u019e",
    "\u01a2\u0007;\u0002\u0002\u019f\u01a2\u0007?\u0002\u0002\u01a0\u01a2",
    "\u0005h5\u0002\u01a1\u019e\u0003\u0002\u0002\u0002\u01a1\u019f\u0003",
    "\u0002\u0002\u0002\u01a1\u01a0\u0003\u0002\u0002\u0002\u01a2W\u0003",
    "\u0002\u0002\u0002\u01a3\u01a4\t\u0003\u0002\u0002\u01a4Y\u0003\u0002",
    "\u0002\u0002\u01a5\u01a6\t\u0004\u0002\u0002\u01a6[\u0003\u0002\u0002",
    "\u0002\u01a7\u01a8\t\u0005\u0002\u0002\u01a8]\u0003\u0002\u0002\u0002",
    "\u01a9\u01aa\u0007\n\u0002\u0002\u01aa\u01af\u0005`1\u0002\u01ab\u01ac",
    "\u0007\u0007\u0002\u0002\u01ac\u01ae\u0005`1\u0002\u01ad\u01ab\u0003",
    "\u0002\u0002\u0002\u01ae\u01b1\u0003\u0002\u0002\u0002\u01af\u01ad\u0003",
    "\u0002\u0002\u0002\u01af\u01b0\u0003\u0002\u0002\u0002\u01b0\u01b2\u0003",
    "\u0002\u0002\u0002\u01b1\u01af\u0003\u0002\u0002\u0002\u01b2\u01b3\u0007",
    "\u000b\u0002\u0002\u01b3_\u0003\u0002\u0002\u0002\u01b4\u01b5\u0007",
    "@\u0002\u0002\u01b5\u01b6\u0007\u0017\u0002\u0002\u01b6\u01b7\u0005",
    "b2\u0002\u01b7a\u0003\u0002\u0002\u0002\u01b8\u01bd\u0005V,\u0002\u01b9",
    "\u01bd\u0005f4\u0002\u01ba\u01bd\u0007@\u0002\u0002\u01bb\u01bd\u0005",
    "d3\u0002\u01bc\u01b8\u0003\u0002\u0002\u0002\u01bc\u01b9\u0003\u0002",
    "\u0002\u0002\u01bc\u01ba\u0003\u0002\u0002\u0002\u01bc\u01bb\u0003\u0002",
    "\u0002\u0002\u01bdc\u0003\u0002\u0002\u0002\u01be\u01bf\u0007\f\u0002",
    "\u0002\u01bf\u01c0\u0007@\u0002\u0002\u01c0\u01c1\u0007\u0017\u0002",
    "\u0002\u01c1\u01c2\u0005V,\u0002\u01c2\u01c3\u0007\r\u0002\u0002\u01c3",
    "e\u0003\u0002\u0002\u0002\u01c4\u01c5\u0007\n\u0002\u0002\u01c5\u01ca",
    "\u0005V,\u0002\u01c6\u01c7\u0007\u0007\u0002\u0002\u01c7\u01c9\u0005",
    "V,\u0002\u01c8\u01c6\u0003\u0002\u0002\u0002\u01c9\u01cc\u0003\u0002",
    "\u0002\u0002\u01ca\u01c8\u0003\u0002\u0002\u0002\u01ca\u01cb\u0003\u0002",
    "\u0002\u0002\u01cb\u01cd\u0003\u0002\u0002\u0002\u01cc\u01ca\u0003\u0002",
    "\u0002\u0002\u01cd\u01ce\u0007\u000b\u0002\u0002\u01ceg\u0003\u0002",
    "\u0002\u0002\u01cf\u01d3\u0007A\u0002\u0002\u01d0\u01d2\u0007J\u0002",
    "\u0002\u01d1\u01d0\u0003\u0002\u0002\u0002\u01d2\u01d5\u0003\u0002\u0002",
    "\u0002\u01d3\u01d1\u0003\u0002\u0002\u0002\u01d3\u01d4\u0003\u0002\u0002",
    "\u0002\u01d4\u01d6\u0003\u0002\u0002\u0002\u01d5\u01d3\u0003\u0002\u0002",
    "\u0002\u01d6\u01d7\u0007I\u0002\u0002\u01d7i\u0003\u0002\u0002\u0002",
    "\u01d8\u01dc\u0007\u0005\u0002\u0002\u01d9\u01db\u0007\u0005\u0002\u0002",
    "\u01da\u01d9\u0003\u0002\u0002\u0002\u01db\u01de\u0003\u0002\u0002\u0002",
    "\u01dc\u01da\u0003\u0002\u0002\u0002\u01dc\u01dd\u0003\u0002\u0002\u0002",
    "\u01dd\u01e1\u0003\u0002\u0002\u0002\u01de\u01dc\u0003\u0002\u0002\u0002",
    "\u01df\u01e1\u0007\u0002\u0002\u0003\u01e0\u01d8\u0003\u0002\u0002\u0002",
    "\u01e0\u01df\u0003\u0002\u0002\u0002\u01e1k\u0003\u0002\u0002\u0002",
    "\u01e2\u01e4\u0007\u0005\u0002\u0002\u01e3\u01e2\u0003\u0002\u0002\u0002",
    "\u01e4\u01e5\u0003\u0002\u0002\u0002\u01e5\u01e3\u0003\u0002\u0002\u0002",
    "\u01e5\u01e6\u0003\u0002\u0002\u0002\u01e6\u01e9\u0003\u0002\u0002\u0002",
    "\u01e7\u01e9\u0007\u0002\u0002\u0003\u01e8\u01e3\u0003\u0002\u0002\u0002",
    "\u01e8\u01e7\u0003\u0002\u0002\u0002\u01e9m\u0003\u0002\u0002\u0002",
    "6qw~\u0086\u0089\u008c\u0092\u009e\u00a5\u00ac\u00b2\u00b9\u00c5\u00cd",
    "\u00d4\u00df\u00e3\u00e8\u00eb\u00ef\u00f4\u0100\u0104\u010e\u0114\u011a",
    "\u0124\u012a\u0130\u0136\u013c\u0144\u014d\u0155\u015f\u0167\u016d\u0174",
    "\u017f\u0188\u018f\u0195\u019c\u01a1\u01af\u01bc\u01ca\u01d3\u01dc\u01e0",
    "\u01e5\u01e8"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class mcbParser extends antlr4.Parser {

    static grammarFileName = "mcbParser.g4";
    static literalNames = [ null, null, null, null, "'.'", "','", "'('", 
                            "')'", "'['", "']'", "'{'", "'}'", "'..'", "'*'", 
                            "'%'", "'/'", "'+'", "'-'", "':'", "'and'", 
                            "'or'", "'='", "'*='", "'%='", "'/='", "'+='", 
                            "'-='", "'<'", "'>'", "'<='", "'>='", "'@'", 
                            null, null, null, null, "'~'", null, null, null, 
                            "'^'", null, null, null, "'fun'", "'end'", "'if'", 
                            "'unless'", "'matches'", "'data'", "'entity'", 
                            "'block'", "'storage'", "'predicate'", "'else'", 
                            "'while'", "'do'" ];
    static symbolicNames = [ null, "Comment", "WS", "NL", "DOT", "COMMA", 
                             "LPAREN", "RPAREN", "LSQUARE", "RSQUARE", "LCURL", 
                             "RCURL", "RANGE", "MULT", "MOD", "DIV", "ADD", 
                             "SUB", "COLON", "CONJ", "DISJ", "ASSIGNMENT", 
                             "MULT_ASSIGNMENT", "MOD_ASSIGNMENT", "DIVINE_ASSIGNMENT", 
                             "ADD_ASSIGNMENT", "SUB_ASSIGNMENT", "LANGLE", 
                             "RANGLE", "LE", "GE", "AT_N_WS", "AT_P_WS", 
                             "AT_S_WS", "AT_B_WS", "ENTITY", "POS", "POS_P_WS", 
                             "POS_S_WS", "POS_B_WS", "ANC", "ANC_P_WS", 
                             "ANC_S_WS", "ANC_B_WS", "FUN", "END", "IF", 
                             "UNLESS", "K_MATCHES", "K_DATA", "K_ENTITY", 
                             "K_BLOCK", "K_STORAGE", "K_PREDICATE", "ELSE", 
                             "WHILE", "DO", "RealLiteral", "FloatNS", "FloatLiteral", 
                             "DoubleLiteral", "IntegerLiteral", "Identifier", 
                             "QUOTE_OPEN", "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", 
                             "UNICODE_CLASS_LO", "UNICODE_CLASS_LT", "UNICODE_CLASS_LU", 
                             "UNICODE_CLASS_ND", "UNICODE_CLASS_NL", "QUOTE_CLOSE", 
                             "LineStrText", "I_Comment", "I_WS", "I_NL", 
                             "ErrorCharacter" ];
    static ruleNames = [ "mcb", "topPiorityObject", "statements", "statement", 
                         "declaration", "functionDeclare", "block", "loopStatement", 
                         "ifStatement", "ifExpression", "disconjuction", 
                         "conjuction", "comparison", "scoreNscoreExpression", 
                         "scoreNrangeExpression", "range", "entityNBTExpression", 
                         "blockExpression", "comparator", "blockTag", "locateStatement", 
                         "position", "posPrefix", "posInner", "posSuffix", 
                         "anchor", "ancPrefix", "ancInner", "ancSuffix", 
                         "locateLiteral", "whileDo", "doWhile", "assignment", 
                         "expression", "asExpression", "parentAssignableExpression", 
                         "additiveExpression", "multiplicativeExpression", 
                         "scoreboardIdentifier", "scoreboardLiteral", "scoreboardUnaryPrefix", 
                         "scoreboardTarget", "literalConstant", "assignmentOperator", 
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
	            this.topPiorityObject();
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



	topPiorityObject() {
	    let localctx = new TopPiorityObjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, mcbParser.RULE_topPiorityObject);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.declaration();
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 123;
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



	statements() {
	    let localctx = new StatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, mcbParser.RULE_statements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (mcbParser.FUN - 44)) | (1 << (mcbParser.IF - 44)) | (1 << (mcbParser.WHILE - 44)) | (1 << (mcbParser.DO - 44)) | (1 << (mcbParser.Identifier - 44)))) !== 0)) {
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
	        case mcbParser.DO:
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



	loopStatement() {
	    let localctx = new LoopStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, mcbParser.RULE_loopStatement);
	    try {
	        this.state = 170;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.WHILE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 168;
	            this.whileDo();
	            break;
	        case mcbParser.DO:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 169;
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, mcbParser.RULE_ifStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(mcbParser.IF);
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 173;
	            this.match(mcbParser.NL);
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 179;
	        this.ifExpression();
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 180;
	            this.match(mcbParser.NL);
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 186;
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



	ifExpression() {
	    let localctx = new IfExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, mcbParser.RULE_ifExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
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



	disconjuction() {
	    let localctx = new DisconjuctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, mcbParser.RULE_disconjuction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.conjuction();
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.DISJ) {
	            this.state = 191;
	            this.match(mcbParser.DISJ);
	            this.state = 192;
	            this.conjuction();
	            this.state = 197;
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
	    this.enterRule(localctx, 22, mcbParser.RULE_conjuction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.comparison();
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.CONJ) {
	            this.state = 199;
	            this.match(mcbParser.CONJ);
	            this.state = 200;
	            this.comparison();
	            this.state = 205;
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
	    this.enterRule(localctx, 24, mcbParser.RULE_comparison);
	    try {
	        this.state = 210;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 206;
	            this.scoreNscoreExpression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 207;
	            this.scoreNrangeExpression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 208;
	            this.entityNBTExpression();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 209;
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
	    this.enterRule(localctx, 26, mcbParser.RULE_scoreNscoreExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.scoreboardIdentifier();
	        this.state = 213;
	        this.comparator();
	        this.state = 214;
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
	    this.enterRule(localctx, 28, mcbParser.RULE_scoreNrangeExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.scoreboardIdentifier();
	        this.state = 217;
	        this.match(mcbParser.K_MATCHES);
	        this.state = 218;
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
	    this.enterRule(localctx, 30, mcbParser.RULE_range);
	    var _la = 0; // Token type
	    try {
	        this.state = 237;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===mcbParser.SUB || _la===mcbParser.IntegerLiteral) {
	                this.state = 220;
	                this.scoreboardLiteral();
	            }

	            this.state = 223;
	            this.match(mcbParser.RANGE);
	            this.state = 225;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===mcbParser.SUB || _la===mcbParser.IntegerLiteral) {
	                this.state = 224;
	                this.scoreboardLiteral();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 227;
	            this.scoreboardLiteral();
	            this.state = 228;
	            this.match(mcbParser.RANGE);
	            this.state = 230;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===mcbParser.SUB || _la===mcbParser.IntegerLiteral) {
	                this.state = 229;
	                this.scoreboardLiteral();
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 233;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===mcbParser.SUB || _la===mcbParser.IntegerLiteral) {
	                this.state = 232;
	                this.scoreboardLiteral();
	            }

	            this.state = 235;
	            this.match(mcbParser.RANGE);
	            this.state = 236;
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
	    this.enterRule(localctx, 32, mcbParser.RULE_entityNBTExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(mcbParser.K_ENTITY);
	        this.state = 240;
	        this.match(mcbParser.ENTITY);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mcbParser.LSQUARE) {
	            this.state = 241;
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
	    this.enterRule(localctx, 34, mcbParser.RULE_blockExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.match(mcbParser.K_BLOCK);
	        this.state = 245;
	        this.locateStatement();
	        this.state = 246;
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
	    this.enterRule(localctx, 36, mcbParser.RULE_comparator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.ASSIGNMENT) | (1 << mcbParser.LANGLE) | (1 << mcbParser.RANGLE) | (1 << mcbParser.LE) | (1 << mcbParser.GE))) !== 0))) {
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
	    this.enterRule(localctx, 38, mcbParser.RULE_blockTag);
	    try {
	        this.state = 254;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 250;
	            this.match(mcbParser.Identifier);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 251;
	            this.match(mcbParser.Identifier);
	            this.state = 252;
	            this.match(mcbParser.COLON);
	            this.state = 253;
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
	    this.enterRule(localctx, 40, mcbParser.RULE_locateStatement);
	    try {
	        this.state = 258;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 256;
	            this.position();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 257;
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
	    this.enterRule(localctx, 42, mcbParser.RULE_position);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.posPrefix();
	        this.state = 261;
	        this.posInner();
	        this.state = 262;
	        this.posSuffix();
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
	    this.enterRule(localctx, 44, mcbParser.RULE_posPrefix);
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 264;
	            this.match(mcbParser.POS_P_WS);
	            this.state = 265;
	            this.locateLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 266;
	            this.match(mcbParser.POS_P_WS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 267;
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



	posInner() {
	    let localctx = new PosInnerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, mcbParser.RULE_posInner);
	    try {
	        this.state = 274;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 270;
	            this.match(mcbParser.POS_B_WS);
	            this.state = 271;
	            this.locateLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 272;
	            this.match(mcbParser.POS_B_WS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 273;
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
	    this.enterRule(localctx, 48, mcbParser.RULE_posSuffix);
	    try {
	        this.state = 280;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 276;
	            this.match(mcbParser.POS_S_WS);
	            this.state = 277;
	            this.locateLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 278;
	            this.match(mcbParser.POS_S_WS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 279;
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
	    this.enterRule(localctx, 50, mcbParser.RULE_anchor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        this.ancPrefix();
	        this.state = 283;
	        this.ancInner();
	        this.state = 284;
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
	    this.enterRule(localctx, 52, mcbParser.RULE_ancPrefix);
	    try {
	        this.state = 290;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            this.match(mcbParser.ANC_P_WS);
	            this.state = 287;
	            this.locateLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 288;
	            this.match(mcbParser.ANC_P_WS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 289;
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



	ancInner() {
	    let localctx = new AncInnerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, mcbParser.RULE_ancInner);
	    try {
	        this.state = 296;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 292;
	            this.match(mcbParser.ANC_B_WS);
	            this.state = 293;
	            this.locateLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 294;
	            this.match(mcbParser.ANC_B_WS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 295;
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
	    this.enterRule(localctx, 56, mcbParser.RULE_ancSuffix);
	    try {
	        this.state = 302;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 298;
	            this.match(mcbParser.ANC_S_WS);
	            this.state = 299;
	            this.locateLiteral();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 300;
	            this.match(mcbParser.ANC_S_WS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 301;
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
	    this.enterRule(localctx, 58, mcbParser.RULE_locateLiteral);
	    try {
	        this.state = 308;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 304;
	            this.match(mcbParser.FloatNS);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 305;
	            this.match(mcbParser.SUB);
	            this.state = 306;
	            this.match(mcbParser.FloatNS);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 307;
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



	whileDo() {
	    let localctx = new WhileDoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, mcbParser.RULE_whileDo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.match(mcbParser.WHILE);
	        this.state = 314;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 311;
	            this.match(mcbParser.NL);
	            this.state = 316;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 317;
	        this.match(mcbParser.LPAREN);
	        this.state = 318;
	        this.match(mcbParser.RPAREN);
	        this.state = 322;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 319;
	            this.match(mcbParser.NL);
	            this.state = 324;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 325;
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
	    this.enterRule(localctx, 62, mcbParser.RULE_doWhile);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this.match(mcbParser.DO);
	        this.state = 331;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 328;
	            this.match(mcbParser.NL);
	            this.state = 333;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 334;
	        this.match(mcbParser.LPAREN);
	        this.state = 335;
	        this.match(mcbParser.RPAREN);
	        this.state = 339;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 336;
	            this.match(mcbParser.NL);
	            this.state = 341;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 342;
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
	    this.enterRule(localctx, 64, mcbParser.RULE_assignment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.scoreboardIdentifier();
	        this.state = 345;
	        this.assignmentOperator();
	        this.state = 349;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.LPAREN || _la===mcbParser.SUB || _la===mcbParser.IntegerLiteral || _la===mcbParser.Identifier) {
	            this.state = 346;
	            this.expression();
	            this.state = 351;
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
	    this.enterRule(localctx, 66, mcbParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
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
	    this.enterRule(localctx, 68, mcbParser.RULE_asExpression);
	    try {
	        this.state = 357;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.SUB:
	        case mcbParser.IntegerLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 354;
	            this.scoreboardLiteral();
	            break;
	        case mcbParser.Identifier:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 355;
	            this.scoreboardIdentifier();
	            break;
	        case mcbParser.LPAREN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 356;
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
	    this.enterRule(localctx, 70, mcbParser.RULE_parentAssignableExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        this.match(mcbParser.LPAREN);
	        this.state = 363;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 360;
	            this.match(mcbParser.NL);
	            this.state = 365;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 366;
	        this.expression();
	        this.state = 370;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.NL) {
	            this.state = 367;
	            this.match(mcbParser.NL);
	            this.state = 372;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 373;
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
	    this.enterRule(localctx, 72, mcbParser.RULE_additiveExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.multiplicativeExpression();
	        this.state = 381;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 376;
	                this.additiveOperator();
	                this.state = 377;
	                this.multiplicativeExpression(); 
	            }
	            this.state = 383;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
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
	    this.enterRule(localctx, 74, mcbParser.RULE_multiplicativeExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.asExpression();
	        this.state = 390;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mcbParser.MULT) | (1 << mcbParser.MOD) | (1 << mcbParser.DIV))) !== 0)) {
	            this.state = 385;
	            this.multiplicativeOperator();
	            this.state = 386;
	            this.asExpression();
	            this.state = 392;
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
	    this.enterRule(localctx, 76, mcbParser.RULE_scoreboardIdentifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.match(mcbParser.Identifier);
	        this.state = 394;
	        this.match(mcbParser.LSQUARE);
	        this.state = 397;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.Identifier:
	            this.state = 395;
	            this.match(mcbParser.Identifier);
	            break;
	        case mcbParser.ENTITY:
	            this.state = 396;
	            this.scoreboardTarget();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 399;
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
	    this.enterRule(localctx, 78, mcbParser.RULE_scoreboardLiteral);
	    try {
	        this.state = 403;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.IntegerLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 401;
	            this.match(mcbParser.IntegerLiteral);
	            break;
	        case mcbParser.SUB:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 402;
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
	    this.enterRule(localctx, 80, mcbParser.RULE_scoreboardUnaryPrefix);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        this.match(mcbParser.SUB);
	        this.state = 406;
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
	    this.enterRule(localctx, 82, mcbParser.RULE_scoreboardTarget);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408;
	        this.match(mcbParser.ENTITY);
	        this.state = 410;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===mcbParser.LSQUARE) {
	            this.state = 409;
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
	    this.enterRule(localctx, 84, mcbParser.RULE_literalConstant);
	    try {
	        this.state = 415;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.RealLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 412;
	            this.match(mcbParser.RealLiteral);
	            break;
	        case mcbParser.IntegerLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 413;
	            this.match(mcbParser.IntegerLiteral);
	            break;
	        case mcbParser.QUOTE_OPEN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 414;
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
	    this.enterRule(localctx, 86, mcbParser.RULE_assignmentOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 417;
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
	    this.enterRule(localctx, 88, mcbParser.RULE_additiveOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 419;
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
	    this.enterRule(localctx, 90, mcbParser.RULE_multiplicativeOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
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
	    this.enterRule(localctx, 92, mcbParser.RULE_nbt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 423;
	        this.match(mcbParser.LSQUARE);
	        this.state = 424;
	        this.nbtEquality();
	        this.state = 429;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.COMMA) {
	            this.state = 425;
	            this.match(mcbParser.COMMA);
	            this.state = 426;
	            this.nbtEquality();
	            this.state = 431;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 432;
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
	    this.enterRule(localctx, 94, mcbParser.RULE_nbtEquality);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 434;
	        this.match(mcbParser.Identifier);
	        this.state = 435;
	        this.match(mcbParser.ASSIGNMENT);
	        this.state = 436;
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
	    this.enterRule(localctx, 96, mcbParser.RULE_asNBT);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.RealLiteral:
	        case mcbParser.IntegerLiteral:
	        case mcbParser.QUOTE_OPEN:
	            this.state = 438;
	            this.literalConstant();
	            break;
	        case mcbParser.LSQUARE:
	            this.state = 439;
	            this.nbtArray();
	            break;
	        case mcbParser.Identifier:
	            this.state = 440;
	            this.match(mcbParser.Identifier);
	            break;
	        case mcbParser.LCURL:
	            this.state = 441;
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
	    this.enterRule(localctx, 98, mcbParser.RULE_nbtSet);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 444;
	        this.match(mcbParser.LCURL);
	        this.state = 445;
	        this.match(mcbParser.Identifier);
	        this.state = 446;
	        this.match(mcbParser.ASSIGNMENT);
	        this.state = 447;
	        this.literalConstant();
	        this.state = 448;
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
	    this.enterRule(localctx, 100, mcbParser.RULE_nbtArray);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 450;
	        this.match(mcbParser.LSQUARE);
	        this.state = 451;
	        this.literalConstant();
	        this.state = 456;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.COMMA) {
	            this.state = 452;
	            this.match(mcbParser.COMMA);
	            this.state = 453;
	            this.literalConstant();
	            this.state = 458;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 459;
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
	    this.enterRule(localctx, 102, mcbParser.RULE_stringLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 461;
	        this.match(mcbParser.QUOTE_OPEN);
	        this.state = 465;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===mcbParser.LineStrText) {
	            this.state = 462;
	            this.match(mcbParser.LineStrText);
	            this.state = 467;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 468;
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
	    this.enterRule(localctx, 104, mcbParser.RULE_nl);
	    var _la = 0; // Token type
	    try {
	        this.state = 478;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.NL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 470;
	            this.match(mcbParser.NL);
	            this.state = 474;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===mcbParser.NL) {
	                this.state = 471;
	                this.match(mcbParser.NL);
	                this.state = 476;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case mcbParser.EOF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 477;
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
	        this.state = 486;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case mcbParser.NL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 481; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 480;
	            		this.match(mcbParser.NL);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 483; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,50, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case mcbParser.EOF:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 485;
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
mcbParser.CONJ = 19;
mcbParser.DISJ = 20;
mcbParser.ASSIGNMENT = 21;
mcbParser.MULT_ASSIGNMENT = 22;
mcbParser.MOD_ASSIGNMENT = 23;
mcbParser.DIVINE_ASSIGNMENT = 24;
mcbParser.ADD_ASSIGNMENT = 25;
mcbParser.SUB_ASSIGNMENT = 26;
mcbParser.LANGLE = 27;
mcbParser.RANGLE = 28;
mcbParser.LE = 29;
mcbParser.GE = 30;
mcbParser.AT_N_WS = 31;
mcbParser.AT_P_WS = 32;
mcbParser.AT_S_WS = 33;
mcbParser.AT_B_WS = 34;
mcbParser.ENTITY = 35;
mcbParser.POS = 36;
mcbParser.POS_P_WS = 37;
mcbParser.POS_S_WS = 38;
mcbParser.POS_B_WS = 39;
mcbParser.ANC = 40;
mcbParser.ANC_P_WS = 41;
mcbParser.ANC_S_WS = 42;
mcbParser.ANC_B_WS = 43;
mcbParser.FUN = 44;
mcbParser.END = 45;
mcbParser.IF = 46;
mcbParser.UNLESS = 47;
mcbParser.K_MATCHES = 48;
mcbParser.K_DATA = 49;
mcbParser.K_ENTITY = 50;
mcbParser.K_BLOCK = 51;
mcbParser.K_STORAGE = 52;
mcbParser.K_PREDICATE = 53;
mcbParser.ELSE = 54;
mcbParser.WHILE = 55;
mcbParser.DO = 56;
mcbParser.RealLiteral = 57;
mcbParser.FloatNS = 58;
mcbParser.FloatLiteral = 59;
mcbParser.DoubleLiteral = 60;
mcbParser.IntegerLiteral = 61;
mcbParser.Identifier = 62;
mcbParser.QUOTE_OPEN = 63;
mcbParser.UNICODE_CLASS_LL = 64;
mcbParser.UNICODE_CLASS_LM = 65;
mcbParser.UNICODE_CLASS_LO = 66;
mcbParser.UNICODE_CLASS_LT = 67;
mcbParser.UNICODE_CLASS_LU = 68;
mcbParser.UNICODE_CLASS_ND = 69;
mcbParser.UNICODE_CLASS_NL = 70;
mcbParser.QUOTE_CLOSE = 71;
mcbParser.LineStrText = 72;
mcbParser.I_Comment = 73;
mcbParser.I_WS = 74;
mcbParser.I_NL = 75;
mcbParser.ErrorCharacter = 76;

mcbParser.RULE_mcb = 0;
mcbParser.RULE_topPiorityObject = 1;
mcbParser.RULE_statements = 2;
mcbParser.RULE_statement = 3;
mcbParser.RULE_declaration = 4;
mcbParser.RULE_functionDeclare = 5;
mcbParser.RULE_block = 6;
mcbParser.RULE_loopStatement = 7;
mcbParser.RULE_ifStatement = 8;
mcbParser.RULE_ifExpression = 9;
mcbParser.RULE_disconjuction = 10;
mcbParser.RULE_conjuction = 11;
mcbParser.RULE_comparison = 12;
mcbParser.RULE_scoreNscoreExpression = 13;
mcbParser.RULE_scoreNrangeExpression = 14;
mcbParser.RULE_range = 15;
mcbParser.RULE_entityNBTExpression = 16;
mcbParser.RULE_blockExpression = 17;
mcbParser.RULE_comparator = 18;
mcbParser.RULE_blockTag = 19;
mcbParser.RULE_locateStatement = 20;
mcbParser.RULE_position = 21;
mcbParser.RULE_posPrefix = 22;
mcbParser.RULE_posInner = 23;
mcbParser.RULE_posSuffix = 24;
mcbParser.RULE_anchor = 25;
mcbParser.RULE_ancPrefix = 26;
mcbParser.RULE_ancInner = 27;
mcbParser.RULE_ancSuffix = 28;
mcbParser.RULE_locateLiteral = 29;
mcbParser.RULE_whileDo = 30;
mcbParser.RULE_doWhile = 31;
mcbParser.RULE_assignment = 32;
mcbParser.RULE_expression = 33;
mcbParser.RULE_asExpression = 34;
mcbParser.RULE_parentAssignableExpression = 35;
mcbParser.RULE_additiveExpression = 36;
mcbParser.RULE_multiplicativeExpression = 37;
mcbParser.RULE_scoreboardIdentifier = 38;
mcbParser.RULE_scoreboardLiteral = 39;
mcbParser.RULE_scoreboardUnaryPrefix = 40;
mcbParser.RULE_scoreboardTarget = 41;
mcbParser.RULE_literalConstant = 42;
mcbParser.RULE_assignmentOperator = 43;
mcbParser.RULE_additiveOperator = 44;
mcbParser.RULE_multiplicativeOperator = 45;
mcbParser.RULE_nbt = 46;
mcbParser.RULE_nbtEquality = 47;
mcbParser.RULE_asNBT = 48;
mcbParser.RULE_nbtSet = 49;
mcbParser.RULE_nbtArray = 50;
mcbParser.RULE_stringLiteral = 51;
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


	topPiorityObject = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TopPiorityObjectContext);
	    } else {
	        return this.getTypedRuleContext(TopPiorityObjectContext,i);
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



class TopPiorityObjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_topPiorityObject;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	nls() {
	    return this.getTypedRuleContext(NlsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterTopPiorityObject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitTopPiorityObject(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitTopPiorityObject(this);
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

	ifExpression() {
	    return this.getTypedRuleContext(IfExpressionContext,0);
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



class IfExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_ifExpression;
    }

	disconjuction() {
	    return this.getTypedRuleContext(DisconjuctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterIfExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitIfExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitIfExpression(this);
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

	RANGE() {
	    return this.getToken(mcbParser.RANGE, 0);
	};

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

	ENTITY() {
	    return this.getToken(mcbParser.ENTITY, 0);
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

	posPrefix() {
	    return this.getTypedRuleContext(PosPrefixContext,0);
	};

	posInner() {
	    return this.getTypedRuleContext(PosInnerContext,0);
	};

	posSuffix() {
	    return this.getTypedRuleContext(PosSuffixContext,0);
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



class PosInnerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_posInner;
    }

	POS_B_WS() {
	    return this.getToken(mcbParser.POS_B_WS, 0);
	};

	locateLiteral() {
	    return this.getTypedRuleContext(LocateLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterPosInner(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitPosInner(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitPosInner(this);
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

	ancInner() {
	    return this.getTypedRuleContext(AncInnerContext,0);
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



class AncInnerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = mcbParser.RULE_ancInner;
    }

	ANC_B_WS() {
	    return this.getToken(mcbParser.ANC_B_WS, 0);
	};

	locateLiteral() {
	    return this.getTypedRuleContext(LocateLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.enterAncInner(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof mcbParserListener ) {
	        listener.exitAncInner(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof mcbParserVisitor ) {
	        return visitor.visitAncInner(this);
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




mcbParser.McbContext = McbContext; 
mcbParser.TopPiorityObjectContext = TopPiorityObjectContext; 
mcbParser.StatementsContext = StatementsContext; 
mcbParser.StatementContext = StatementContext; 
mcbParser.DeclarationContext = DeclarationContext; 
mcbParser.FunctionDeclareContext = FunctionDeclareContext; 
mcbParser.BlockContext = BlockContext; 
mcbParser.LoopStatementContext = LoopStatementContext; 
mcbParser.IfStatementContext = IfStatementContext; 
mcbParser.IfExpressionContext = IfExpressionContext; 
mcbParser.DisconjuctionContext = DisconjuctionContext; 
mcbParser.ConjuctionContext = ConjuctionContext; 
mcbParser.ComparisonContext = ComparisonContext; 
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
mcbParser.PosInnerContext = PosInnerContext; 
mcbParser.PosSuffixContext = PosSuffixContext; 
mcbParser.AnchorContext = AnchorContext; 
mcbParser.AncPrefixContext = AncPrefixContext; 
mcbParser.AncInnerContext = AncInnerContext; 
mcbParser.AncSuffixContext = AncSuffixContext; 
mcbParser.LocateLiteralContext = LocateLiteralContext; 
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
mcbParser.NlContext = NlContext; 
mcbParser.NlsContext = NlsContext; 
