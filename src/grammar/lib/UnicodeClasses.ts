// Generated from E:\_Project\nodejs\mcb\src\grammar\UnicodeClasses.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class UnicodeClasses extends Lexer {
	public static readonly UNICODE_CLASS_LL = 1;
	public static readonly UNICODE_CLASS_LM = 2;
	public static readonly UNICODE_CLASS_LO = 3;
	public static readonly UNICODE_CLASS_LT = 4;
	public static readonly UNICODE_CLASS_LU = 5;
	public static readonly UNICODE_CLASS_ND = 6;
	public static readonly UNICODE_CLASS_NL = 7;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"UNICODE_CLASS_LL", "UNICODE_CLASS_LM", "UNICODE_CLASS_LO", "UNICODE_CLASS_LT", 
		"UNICODE_CLASS_LU", "UNICODE_CLASS_ND", "UNICODE_CLASS_NL",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", "UNICODE_CLASS_LO", 
		"UNICODE_CLASS_LT", "UNICODE_CLASS_LU", "UNICODE_CLASS_ND", "UNICODE_CLASS_NL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(UnicodeClasses._LITERAL_NAMES, UnicodeClasses._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return UnicodeClasses.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(UnicodeClasses._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "UnicodeClasses.g4"; }

	// @Override
	public get ruleNames(): string[] { return UnicodeClasses.ruleNames; }

	// @Override
	public get serializedATN(): string { return UnicodeClasses._serializedATN; }

	// @Override
	public get channelNames(): string[] { return UnicodeClasses.channelNames; }

	// @Override
	public get modeNames(): string[] { return UnicodeClasses.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\t\x1F\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x02\x02\x02\t" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
		"\t\x03\x02\t\u0248\x02c|\xB7\xB7\xE1\xF8\xFA\u0101\u0103\u0103\u0105\u0105" +
		"\u0107\u0107\u0109\u0109\u010B\u010B\u010D\u010D\u010F\u010F\u0111\u0111" +
		"\u0113\u0113\u0115\u0115\u0117\u0117\u0119\u0119\u011B\u011B\u011D\u011D" +
		"\u011F\u011F\u0121\u0121\u0123\u0123\u0125\u0125\u0127\u0127\u0129\u0129" +
		"\u012B\u012B\u012D\u012D\u012F\u012F\u0131\u0131\u0133\u0133\u0135\u0135" +
		"\u0137\u0137\u0139\u013A\u013C\u013C\u013E\u013E\u0140\u0140\u0142\u0142" +
		"\u0144\u0144\u0146\u0146\u0148\u0148\u014A\u014B\u014D\u014D\u014F\u014F" +
		"\u0151\u0151\u0153\u0153\u0155\u0155\u0157\u0157\u0159\u0159\u015B\u015B" +
		"\u015D\u015D\u015F\u015F\u0161\u0161\u0163\u0163\u0165\u0165\u0167\u0167" +
		"\u0169\u0169\u016B\u016B\u016D\u016D\u016F\u016F\u0171\u0171\u0173\u0173" +
		"\u0175\u0175\u0177\u0177\u0179\u0179\u017C\u017C\u017E\u017E\u0180\u0182" +
		"\u0185\u0185\u0187\u0187\u018A\u018A\u018E\u018F\u0194\u0194\u0197\u0197" +
		"\u019B\u019D\u01A0\u01A0\u01A3\u01A3\u01A5\u01A5\u01A7\u01A7\u01AA\u01AA" +
		"\u01AC\u01AD\u01AF\u01AF\u01B2\u01B2\u01B6\u01B6\u01B8\u01B8\u01BB\u01BC" +
		"\u01BF\u01C1\u01C8\u01C8\u01CB\u01CB\u01CE\u01CE\u01D0\u01D0\u01D2\u01D2" +
		"\u01D4\u01D4\u01D6\u01D6\u01D8\u01D8\u01DA\u01DA\u01DC\u01DC\u01DE\u01DF" +
		"\u01E1\u01E1\u01E3\u01E3\u01E5\u01E5\u01E7\u01E7\u01E9\u01E9\u01EB\u01EB" +
		"\u01ED\u01ED\u01EF\u01EF\u01F1\u01F2\u01F5\u01F5\u01F7\u01F7\u01FB\u01FB" +
		"\u01FD\u01FD\u01FF\u01FF\u0201\u0201\u0203\u0203\u0205\u0205\u0207\u0207" +
		"\u0209\u0209\u020B\u020B\u020D\u020D\u020F\u020F\u0211\u0211\u0213\u0213" +
		"\u0215\u0215\u0217\u0217\u0219\u0219\u021B\u021B\u021D\u021D\u021F\u021F" +
		"\u0221\u0221\u0223\u0223\u0225\u0225\u0227\u0227\u0229\u0229\u022B\u022B" +
		"\u022D\u022D\u022F\u022F\u0231\u0231\u0233\u0233\u0235\u023B\u023E\u023E" +
		"\u0241\u0242\u0244\u0244\u0249\u0249\u024B\u024B\u024D\u024D\u024F\u024F" +
		"\u0251\u0295\u0297\u02B1\u0373\u0373\u0375\u0375\u0379\u0379\u037D\u037F" +
		"\u0392\u0392\u03AE\u03D0\u03D2\u03D3\u03D7\u03D9\u03DB\u03DB\u03DD\u03DD" +
		"\u03DF\u03DF\u03E1\u03E1\u03E3\u03E3\u03E5\u03E5\u03E7\u03E7\u03E9\u03E9" +
		"\u03EB\u03EB\u03ED\u03ED\u03EF\u03EF\u03F1\u03F5\u03F7\u03F7\u03FA\u03FA" +
		"\u03FD\u03FE\u0432\u0461\u0463\u0463\u0465\u0465\u0467\u0467\u0469\u0469" +
		"\u046B\u046B\u046D\u046D\u046F\u046F\u0471\u0471\u0473\u0473\u0475\u0475" +
		"\u0477\u0477\u0479\u0479\u047B\u047B\u047D\u047D\u047F\u047F\u0481\u0481" +
		"\u0483\u0483\u048D\u048D\u048F\u048F\u0491\u0491\u0493\u0493\u0495\u0495" +
		"\u0497\u0497\u0499\u0499\u049B\u049B\u049D\u049D\u049F\u049F\u04A1\u04A1" +
		"\u04A3\u04A3\u04A5\u04A5\u04A7\u04A7\u04A9\u04A9\u04AB\u04AB\u04AD\u04AD" +
		"\u04AF\u04AF\u04B1\u04B1\u04B3\u04B3\u04B5\u04B5\u04B7\u04B7\u04B9\u04B9" +
		"\u04BB\u04BB\u04BD\u04BD\u04BF\u04BF\u04C1\u04C1\u04C4\u04C4\u04C6\u04C6" +
		"\u04C8\u04C8\u04CA\u04CA\u04CC\u04CC\u04CE\u04CE\u04D0\u04D1\u04D3\u04D3" +
		"\u04D5\u04D5\u04D7\u04D7\u04D9\u04D9\u04DB\u04DB\u04DD\u04DD\u04DF\u04DF" +
		"\u04E1\u04E1\u04E3\u04E3\u04E5\u04E5\u04E7\u04E7\u04E9\u04E9\u04EB\u04EB" +
		"\u04ED\u04ED\u04EF\u04EF\u04F1\u04F1\u04F3\u04F3\u04F5\u04F5\u04F7\u04F7" +
		"\u04F9\u04F9\u04FB\u04FB\u04FD\u04FD\u04FF\u04FF\u0501\u0501\u0503\u0503" +
		"\u0505\u0505\u0507\u0507\u0509\u0509\u050B\u050B\u050D\u050D\u050F\u050F" +
		"\u0511\u0511\u0513\u0513\u0515\u0515\u0517\u0517\u0519\u0519\u051B\u051B" +
		"\u051D\u051D\u051F\u051F\u0521\u0521\u0523\u0523\u0525\u0525\u0527\u0527" +
		"\u0529\u0529\u0563\u0589\u1D02\u1D2D\u1D6D\u1D79\u1D7B\u1D9C\u1E03\u1E03" +
		"\u1E05\u1E05\u1E07\u1E07\u1E09\u1E09\u1E0B\u1E0B\u1E0D\u1E0D\u1E0F\u1E0F" +
		"\u1E11\u1E11\u1E13\u1E13\u1E15\u1E15\u1E17\u1E17\u1E19\u1E19\u1E1B\u1E1B" +
		"\u1E1D\u1E1D\u1E1F\u1E1F\u1E21\u1E21\u1E23\u1E23\u1E25\u1E25\u1E27\u1E27" +
		"\u1E29\u1E29\u1E2B\u1E2B\u1E2D\u1E2D\u1E2F\u1E2F\u1E31\u1E31\u1E33\u1E33" +
		"\u1E35\u1E35\u1E37\u1E37\u1E39\u1E39\u1E3B\u1E3B\u1E3D\u1E3D\u1E3F\u1E3F" +
		"\u1E41\u1E41\u1E43\u1E43\u1E45\u1E45\u1E47\u1E47\u1E49\u1E49\u1E4B\u1E4B" +
		"\u1E4D\u1E4D\u1E4F\u1E4F\u1E51\u1E51\u1E53\u1E53\u1E55\u1E55\u1E57\u1E57" +
		"\u1E59\u1E59\u1E5B\u1E5B\u1E5D\u1E5D\u1E5F\u1E5F\u1E61\u1E61\u1E63\u1E63" +
		"\u1E65\u1E65\u1E67\u1E67\u1E69\u1E69\u1E6B\u1E6B\u1E6D\u1E6D\u1E6F\u1E6F" +
		"\u1E71\u1E71\u1E73\u1E73\u1E75\u1E75\u1E77\u1E77\u1E79\u1E79\u1E7B\u1E7B" +
		"\u1E7D\u1E7D\u1E7F\u1E7F\u1E81\u1E81\u1E83\u1E83\u1E85\u1E85\u1E87\u1E87" +
		"\u1E89\u1E89\u1E8B\u1E8B\u1E8D\u1E8D\u1E8F\u1E8F\u1E91\u1E91\u1E93\u1E93" +
		"\u1E95\u1E95\u1E97\u1E9F\u1EA1\u1EA1\u1EA3\u1EA3\u1EA5\u1EA5\u1EA7\u1EA7" +
		"\u1EA9\u1EA9\u1EAB\u1EAB\u1EAD\u1EAD\u1EAF\u1EAF\u1EB1\u1EB1\u1EB3\u1EB3" +
		"\u1EB5\u1EB5\u1EB7\u1EB7\u1EB9\u1EB9\u1EBB\u1EBB\u1EBD\u1EBD\u1EBF\u1EBF" +
		"\u1EC1\u1EC1\u1EC3\u1EC3\u1EC5\u1EC5\u1EC7\u1EC7\u1EC9\u1EC9\u1ECB\u1ECB" +
		"\u1ECD\u1ECD\u1ECF\u1ECF\u1ED1\u1ED1\u1ED3\u1ED3\u1ED5\u1ED5\u1ED7\u1ED7" +
		"\u1ED9\u1ED9\u1EDB\u1EDB\u1EDD\u1EDD\u1EDF\u1EDF\u1EE1\u1EE1\u1EE3\u1EE3" +
		"\u1EE5\u1EE5\u1EE7\u1EE7\u1EE9\u1EE9\u1EEB\u1EEB\u1EED\u1EED\u1EEF\u1EEF" +
		"\u1EF1\u1EF1\u1EF3\u1EF3\u1EF5\u1EF5\u1EF7\u1EF7\u1EF9\u1EF9\u1EFB\u1EFB" +
		"\u1EFD\u1EFD\u1EFF\u1EFF\u1F01\u1F09\u1F12\u1F17\u1F22\u1F29\u1F32\u1F39" +
		"\u1F42\u1F47\u1F52\u1F59\u1F62\u1F69\u1F72\u1F7F\u1F82\u1F89\u1F92\u1F99" +
		"\u1FA2\u1FA9\u1FB2\u1FB6\u1FB8\u1FB9\u1FC0\u1FC0\u1FC4\u1FC6\u1FC8\u1FC9" +
		"\u1FD2\u1FD5\u1FD8\u1FD9\u1FE2\u1FE9\u1FF4\u1FF6\u1FF8\u1FF9\u210C\u210C" +
		"\u2110\u2111\u2115\u2115\u2131\u2131\u2136\u2136\u213B\u213B\u213E\u213F" +
		"\u2148\u214B\u2150\u2150\u2186\u2186\u2C32\u2C60\u2C63\u2C63\u2C67\u2C68" +
		"\u2C6A\u2C6A\u2C6C\u2C6C\u2C6E\u2C6E\u2C73\u2C73\u2C75\u2C76\u2C78\u2C7D" +
		"\u2C83\u2C83\u2C85\u2C85\u2C87\u2C87\u2C89\u2C89\u2C8B\u2C8B\u2C8D\u2C8D" +
		"\u2C8F\u2C8F\u2C91\u2C91\u2C93\u2C93\u2C95\u2C95\u2C97\u2C97\u2C99\u2C99" +
		"\u2C9B\u2C9B\u2C9D\u2C9D\u2C9F\u2C9F\u2CA1\u2CA1\u2CA3\u2CA3\u2CA5\u2CA5" +
		"\u2CA7\u2CA7\u2CA9\u2CA9\u2CAB\u2CAB\u2CAD\u2CAD\u2CAF\u2CAF\u2CB1\u2CB1" +
		"\u2CB3\u2CB3\u2CB5\u2CB5\u2CB7\u2CB7\u2CB9\u2CB9\u2CBB\u2CBB\u2CBD\u2CBD" +
		"\u2CBF\u2CBF\u2CC1\u2CC1\u2CC3\u2CC3\u2CC5\u2CC5\u2CC7\u2CC7\u2CC9\u2CC9" +
		"\u2CCB\u2CCB\u2CCD\u2CCD\u2CCF\u2CCF\u2CD1\u2CD1\u2CD3\u2CD3\u2CD5\u2CD5" +
		"\u2CD7\u2CD7\u2CD9\u2CD9\u2CDB\u2CDB\u2CDD\u2CDD\u2CDF\u2CDF\u2CE1\u2CE1" +
		"\u2CE3\u2CE3\u2CE5\u2CE6\u2CEE\u2CEE\u2CF0\u2CF0\u2CF5\u2CF5\u2D02\u2D27" +
		"\u2D29\u2D29\u2D2F\u2D2F\uA643\uA643\uA645\uA645\uA647\uA647\uA649\uA649" +
		"\uA64B\uA64B\uA64D\uA64D\uA64F\uA64F\uA651\uA651\uA653\uA653\uA655\uA655" +
		"\uA657\uA657\uA659\uA659\uA65B\uA65B\uA65D\uA65D\uA65F\uA65F\uA661\uA661" +
		"\uA663\uA663\uA665\uA665\uA667\uA667\uA669\uA669\uA66B\uA66B\uA66D\uA66D" +
		"\uA66F\uA66F\uA683\uA683\uA685\uA685\uA687\uA687\uA689\uA689\uA68B\uA68B" +
		"\uA68D\uA68D\uA68F\uA68F\uA691\uA691\uA693\uA693\uA695\uA695\uA697\uA697" +
		"\uA699\uA699\uA725\uA725\uA727\uA727\uA729\uA729\uA72B\uA72B\uA72D\uA72D" +
		"\uA72F\uA72F\uA731\uA733\uA735\uA735\uA737\uA737\uA739\uA739\uA73B\uA73B" +
		"\uA73D\uA73D\uA73F\uA73F\uA741\uA741\uA743\uA743\uA745\uA745\uA747\uA747" +
		"\uA749\uA749\uA74B\uA74B\uA74D\uA74D\uA74F\uA74F\uA751\uA751\uA753\uA753" +
		"\uA755\uA755\uA757\uA757\uA759\uA759\uA75B\uA75B\uA75D\uA75D\uA75F\uA75F" +
		"\uA761\uA761\uA763\uA763\uA765\uA765\uA767\uA767\uA769\uA769\uA76B\uA76B" +
		"\uA76D\uA76D\uA76F\uA76F\uA771\uA771\uA773\uA77A\uA77C\uA77C\uA77E\uA77E" +
		"\uA781\uA781\uA783\uA783\uA785\uA785\uA787\uA787\uA789\uA789\uA78E\uA78E" +
		"\uA790\uA790\uA793\uA793\uA795\uA795\uA7A3\uA7A3\uA7A5\uA7A5\uA7A7\uA7A7" +
		"\uA7A9\uA7A9\uA7AB\uA7AB\uA7FC\uA7FC\uFB02\uFB08\uFB15\uFB19\uFF43\uFF5C" +
		"5\x02\u02B2\u02C3\u02C8\u02D3\u02E2\u02E6\u02EE\u02EE\u02F0\u02F0\u0376" +
		"\u0376\u037C\u037C\u055B\u055B\u0642\u0642\u06E7\u06E8\u07F6\u07F7\u07FC" +
		"\u07FC\u081C\u081C\u0826\u0826\u082A\u082A\u0973\u0973\u0E48\u0E48\u0EC8" +
		"\u0EC8\u10FE\u10FE\u17D9\u17D9\u1845\u1845\u1AA9\u1AA9\u1C7A\u1C7F\u1D2E" +
		"\u1D6C\u1D7A\u1D7A\u1D9D\u1DC1\u2073\u2073\u2081\u2081\u2092\u209E\u2C7E" +
		"\u2C7F\u2D71\u2D71\u2E31\u2E31\u3007\u3007\u3033\u3037\u303D\u303D\u309F" +
		"\u30A0\u30FE\u3100\uA017\uA017\uA4FA\uA4FF\uA60E\uA60E\uA681\uA681\uA719" +
		"\uA721\uA772\uA772\uA78A\uA78A\uA7FA\uA7FB\uA9D1\uA9D1\uAA72\uAA72\uAADF" +
		"\uAADF\uAAF5\uAAF6\uFF72\uFF72\uFFA0\uFFA1\u0123\x02\xAC\xAC\xBC\xBC\u01BD" +
		"\u01BD\u01C2\u01C5\u0296\u0296\u05D2\u05EC\u05F2\u05F4\u0622\u0641\u0643" +
		"\u064C\u0670\u0671\u0673\u06D5\u06D7\u06D7\u06F0\u06F1\u06FC\u06FE\u0701" +
		"\u0701\u0712\u0712\u0714\u0731\u074F\u07A7\u07B3\u07B3\u07CC\u07EC\u0802" +
		"\u0817\u0842\u085A\u08A2\u08A2\u08A4\u08AE\u0906\u093B\u093F\u093F\u0952" +
		"\u0952\u095A\u0963\u0974\u0979\u097B\u0981\u0987\u098E\u0991\u0992\u0995" +
		"\u09AA\u09AC\u09B2\u09B4\u09B4\u09B8\u09BB\u09BF\u09BF\u09D0\u09D0\u09DE" +
		"\u09DF\u09E1\u09E3\u09F2\u09F3\u0A07\u0A0C\u0A11\u0A12\u0A15\u0A2A\u0A2C" +
		"\u0A32\u0A34\u0A35\u0A37\u0A38\u0A3A\u0A3B\u0A5B\u0A5E\u0A60\u0A60\u0A74" +
		"\u0A76\u0A87\u0A8F\u0A91\u0A93\u0A95\u0AAA\u0AAC\u0AB2\u0AB4\u0AB5\u0AB7" +
		"\u0ABB\u0ABF\u0ABF\u0AD2\u0AD2\u0AE2\u0AE3\u0B07\u0B0E\u0B11\u0B12\u0B15" +
		"\u0B2A\u0B2C\u0B32\u0B34\u0B35\u0B37\u0B3B\u0B3F\u0B3F\u0B5E\u0B5F\u0B61" +
		"\u0B63\u0B73\u0B73\u0B85\u0B85\u0B87\u0B8C\u0B90\u0B92\u0B94\u0B97\u0B9B" +
		"\u0B9C\u0B9E\u0B9E\u0BA0\u0BA1\u0BA5\u0BA6\u0BAA\u0BAC\u0BB0\u0BBB\u0BD2" +
		"\u0BD2\u0C07\u0C0E\u0C10\u0C12\u0C14\u0C2A\u0C2C\u0C35\u0C37\u0C3B\u0C3F" +
		"\u0C3F\u0C5A\u0C5B\u0C62\u0C63\u0C87\u0C8E\u0C90\u0C92\u0C94\u0CAA\u0CAC" +
		"\u0CB5\u0CB7\u0CBB\u0CBF\u0CBF\u0CE0\u0CE0\u0CE2\u0CE3\u0CF3\u0CF4\u0D07" +
		"\u0D0E\u0D10\u0D12\u0D14\u0D3C\u0D3F\u0D3F\u0D50\u0D50\u0D62\u0D63\u0D7C" +
		"\u0D81\u0D87\u0D98\u0D9C\u0DB3\u0DB5\u0DBD\u0DBF\u0DBF\u0DC2\u0DC8\u0E03" +
		"\u0E32\u0E34\u0E35\u0E42\u0E47\u0E83\u0E84\u0E86\u0E86\u0E89\u0E8A\u0E8C" +
		"\u0E8C\u0E8F\u0E8F\u0E96\u0E99\u0E9B\u0EA1\u0EA3\u0EA5\u0EA7\u0EA7\u0EA9" +
		"\u0EA9\u0EAC\u0EAD\u0EAF\u0EB2\u0EB4\u0EB5\u0EBF\u0EBF\u0EC2\u0EC6\u0EDE" +
		"\u0EE1\u0F02\u0F02\u0F42\u0F49\u0F4B\u0F6E\u0F8A\u0F8E\u1002\u102C\u1041" +
		"\u1041\u1052\u1057\u105C\u105F\u1063\u1063\u1067\u1068\u1070\u1072\u1077" +
		"\u1083\u1090\u1090\u10D2\u10FC\u10FF\u124A\u124C\u124F\u1252\u1258\u125A" +
		"\u125A\u125C\u125F\u1262\u128A\u128C\u128F\u1292\u12B2\u12B4\u12B7\u12BA" +
		"\u12C0\u12C2\u12C2\u12C4\u12C7\u12CA\u12D8\u12DA\u1312\u1314\u1317\u131A" +
		"\u135C\u1382\u1391\u13A2\u13F6\u1403\u166E\u1671\u1681\u1683\u169C\u16A2" +
		"\u16EC\u1702\u170E\u1710\u1713\u1722\u1733\u1742\u1753\u1762\u176E\u1770" +
		"\u1772\u1782\u17B5\u17DE\u17DE\u1822\u1844\u1846\u1879\u1882\u18AA\u18AC" +
		"\u18AC\u18B2\u18F7\u1902\u191E\u1952\u196F\u1972\u1976\u1982\u19AD\u19C3" +
		"\u19C9\u1A02\u1A18\u1A22\u1A56\u1B07\u1B35\u1B47\u1B4D\u1B85\u1BA2\u1BB0" +
		"\u1BB1\u1BBC\u1BE7\u1C02\u1C25\u1C4F\u1C51\u1C5C\u1C79\u1CEB\u1CEE\u1CF0" +
		"\u1CF3\u1CF7\u1CF8\u2137\u213A\u2D32\u2D69\u2D82\u2D98\u2DA2\u2DA8\u2DAA" +
		"\u2DB0\u2DB2\u2DB8\u2DBA\u2DC0\u2DC2\u2DC8\u2DCA\u2DD0\u2DD2\u2DD8\u2DDA" +
		"\u2DE0\u3008\u3008\u303E\u303E\u3043\u3098\u30A1\u30A1\u30A3\u30FC\u3101" +
		"\u3101\u3107\u312F\u3133\u3190\u31A2\u31BC\u31F2\u3201\u3402\u3402\u4DB7" +
		"\u4DB7\u4E02\u4E02\u9FCE\u9FCE\uA002\uA016\uA018\uA48E\uA4D2\uA4F9\uA502" +
		"\uA60D\uA612\uA621\uA62C\uA62D\uA670\uA670\uA6A2\uA6E7\uA7FD\uA803\uA805" +
		"\uA807\uA809\uA80C\uA80E\uA824\uA842\uA875\uA884\uA8B5\uA8F4\uA8F9\uA8FD" +
		"\uA8FD\uA90C\uA927\uA932\uA948\uA962\uA97E\uA986\uA9B4\uAA02\uAA2A\uAA42" +
		"\uAA44\uAA46\uAA4D\uAA62\uAA71\uAA73\uAA78\uAA7C\uAA7C\uAA82\uAAB1\uAAB3" +
		"\uAAB3\uAAB7\uAAB8\uAABB\uAABF\uAAC2\uAAC2\uAAC4\uAAC4\uAADD\uAADE\uAAE2" +
		"\uAAEC\uAAF4\uAAF4\uAB03\uAB08\uAB0B\uAB10\uAB13\uAB18\uAB22\uAB28\uAB2A" +
		"\uAB30\uABC2\uABE4\uAC02\uAC02\uD7A5\uD7A5\uD7B2\uD7C8\uD7CD\uD7FD\uF902" +
		"\uFA6F\uFA72\uFADB\uFB1F\uFB1F\uFB21\uFB2A\uFB2C\uFB38\uFB3A\uFB3E\uFB40" +
		"\uFB40\uFB42\uFB43\uFB45\uFB46\uFB48\uFBB3\uFBD5\uFD3F\uFD52\uFD91\uFD94" +
		"\uFDC9\uFDF2\uFDFD\uFE72\uFE76\uFE78\uFEFE\uFF68\uFF71\uFF73\uFF9F\uFFA2" +
		"\uFFC0\uFFC4\uFFC9\uFFCC\uFFD1\uFFD4\uFFD9\uFFDC\uFFDE\f\x02\u01C7\u01C7" +
		"\u01CA\u01CA\u01CD\u01CD\u01F4\u01F4\u1F8A\u1F91\u1F9A\u1FA1\u1FAA\u1FB1" +
		"\u1FBE\u1FBE\u1FCE\u1FCE\u1FFE\u1FFE\u0242\x02C\\\xC2\xD8\xDA\xE0\u0102" +
		"\u0102\u0104\u0104\u0106\u0106\u0108\u0108\u010A\u010A\u010C\u010C\u010E" +
		"\u010E\u0110\u0110\u0112\u0112\u0114\u0114\u0116\u0116\u0118\u0118\u011A" +
		"\u011A\u011C\u011C\u011E\u011E\u0120\u0120\u0122\u0122\u0124\u0124\u0126" +
		"\u0126\u0128\u0128\u012A\u012A\u012C\u012C\u012E\u012E\u0130\u0130\u0132" +
		"\u0132\u0134\u0134\u0136\u0136\u0138\u0138\u013B\u013B\u013D\u013D\u013F" +
		"\u013F\u0141\u0141\u0143\u0143\u0145\u0145\u0147\u0147\u0149\u0149\u014C" +
		"\u014C\u014E\u014E\u0150\u0150\u0152\u0152\u0154\u0154\u0156\u0156\u0158" +
		"\u0158\u015A\u015A\u015C\u015C\u015E\u015E\u0160\u0160\u0162\u0162\u0164" +
		"\u0164\u0166\u0166\u0168\u0168\u016A\u016A\u016C\u016C\u016E\u016E\u0170" +
		"\u0170\u0172\u0172\u0174\u0174\u0176\u0176\u0178\u0178\u017A\u017B\u017D" +
		"\u017D\u017F\u017F\u0183\u0184\u0186\u0186\u0188\u0189\u018B\u018D\u0190" +
		"\u0193\u0195\u0196\u0198\u019A\u019E\u019F\u01A1\u01A2\u01A4\u01A4\u01A6" +
		"\u01A6\u01A8\u01A9\u01AB\u01AB\u01AE\u01AE\u01B0\u01B1\u01B3\u01B5\u01B7" +
		"\u01B7\u01B9\u01BA\u01BE\u01BE\u01C6\u01C6\u01C9\u01C9\u01CC\u01CC\u01CF" +
		"\u01CF\u01D1\u01D1\u01D3\u01D3\u01D5\u01D5\u01D7\u01D7\u01D9\u01D9\u01DB" +
		"\u01DB\u01DD\u01DD\u01E0\u01E0\u01E2\u01E2\u01E4\u01E4\u01E6\u01E6\u01E8" +
		"\u01E8\u01EA\u01EA\u01EC\u01EC\u01EE\u01EE\u01F0\u01F0\u01F3\u01F3\u01F6" +
		"\u01F6\u01F8\u01FA\u01FC\u01FC\u01FE\u01FE\u0200\u0200\u0202\u0202\u0204" +
		"\u0204\u0206\u0206\u0208\u0208\u020A\u020A\u020C\u020C\u020E\u020E\u0210" +
		"\u0210\u0212\u0212\u0214\u0214\u0216\u0216\u0218\u0218\u021A\u021A\u021C" +
		"\u021C\u021E\u021E\u0220\u0220\u0222\u0222\u0224\u0224\u0226\u0226\u0228" +
		"\u0228\u022A\u022A\u022C\u022C\u022E\u022E\u0230\u0230\u0232\u0232\u0234" +
		"\u0234\u023C\u023D\u023F\u0240\u0243\u0243\u0245\u0248\u024A\u024A\u024C" +
		"\u024C\u024E\u024E\u0250\u0250\u0372\u0372\u0374\u0374\u0378\u0378\u0388" +
		"\u0388\u038A\u038C\u038E\u038E\u0390\u0391\u0393\u03A3\u03A5\u03AD\u03D1" +
		"\u03D1\u03D4\u03D6\u03DA\u03DA\u03DC\u03DC\u03DE\u03DE\u03E0\u03E0\u03E2" +
		"\u03E2\u03E4\u03E4\u03E6\u03E6\u03E8\u03E8\u03EA\u03EA\u03EC\u03EC\u03EE" +
		"\u03EE\u03F0\u03F0\u03F6\u03F6\u03F9\u03F9\u03FB\u03FC\u03FF\u0431\u0462" +
		"\u0462\u0464\u0464\u0466\u0466\u0468\u0468\u046A\u046A\u046C\u046C\u046E" +
		"\u046E\u0470\u0470\u0472\u0472\u0474\u0474\u0476\u0476\u0478\u0478\u047A" +
		"\u047A\u047C\u047C\u047E\u047E\u0480\u0480\u0482\u0482\u048C\u048C\u048E" +
		"\u048E\u0490\u0490\u0492\u0492\u0494\u0494\u0496\u0496\u0498\u0498\u049A" +
		"\u049A\u049C\u049C\u049E\u049E\u04A0\u04A0\u04A2\u04A2\u04A4\u04A4\u04A6" +
		"\u04A6\u04A8\u04A8\u04AA\u04AA\u04AC\u04AC\u04AE\u04AE\u04B0\u04B0\u04B2" +
		"\u04B2\u04B4\u04B4\u04B6\u04B6\u04B8\u04B8\u04BA\u04BA\u04BC\u04BC\u04BE" +
		"\u04BE\u04C0\u04C0\u04C2\u04C3\u04C5\u04C5\u04C7\u04C7\u04C9\u04C9\u04CB" +
		"\u04CB\u04CD\u04CD\u04CF\u04CF\u04D2\u04D2\u04D4\u04D4\u04D6\u04D6\u04D8" +
		"\u04D8\u04DA\u04DA\u04DC\u04DC\u04DE\u04DE\u04E0\u04E0\u04E2\u04E2\u04E4" +
		"\u04E4\u04E6\u04E6\u04E8\u04E8\u04EA\u04EA\u04EC\u04EC\u04EE\u04EE\u04F0" +
		"\u04F0\u04F2\u04F2\u04F4\u04F4\u04F6\u04F6\u04F8\u04F8\u04FA\u04FA\u04FC" +
		"\u04FC\u04FE\u04FE\u0500\u0500\u0502\u0502\u0504\u0504\u0506\u0506\u0508" +
		"\u0508\u050A\u050A\u050C\u050C\u050E\u050E\u0510\u0510\u0512\u0512\u0514" +
		"\u0514\u0516\u0516\u0518\u0518\u051A\u051A\u051C\u051C\u051E\u051E\u0520" +
		"\u0520\u0522\u0522\u0524\u0524\u0526\u0526\u0528\u0528\u0533\u0558\u10A2" +
		"\u10C7\u10C9\u10C9\u10CF\u10CF\u1E02\u1E02\u1E04\u1E04\u1E06\u1E06\u1E08" +
		"\u1E08\u1E0A\u1E0A\u1E0C\u1E0C\u1E0E\u1E0E\u1E10\u1E10\u1E12\u1E12\u1E14" +
		"\u1E14\u1E16\u1E16\u1E18\u1E18\u1E1A\u1E1A\u1E1C\u1E1C\u1E1E\u1E1E\u1E20" +
		"\u1E20\u1E22\u1E22\u1E24\u1E24\u1E26\u1E26\u1E28\u1E28\u1E2A\u1E2A\u1E2C" +
		"\u1E2C\u1E2E\u1E2E\u1E30\u1E30\u1E32\u1E32\u1E34\u1E34\u1E36\u1E36\u1E38" +
		"\u1E38\u1E3A\u1E3A\u1E3C\u1E3C\u1E3E\u1E3E\u1E40\u1E40\u1E42\u1E42\u1E44" +
		"\u1E44\u1E46\u1E46\u1E48\u1E48\u1E4A\u1E4A\u1E4C\u1E4C\u1E4E\u1E4E\u1E50" +
		"\u1E50\u1E52\u1E52\u1E54\u1E54\u1E56\u1E56\u1E58\u1E58\u1E5A\u1E5A\u1E5C" +
		"\u1E5C\u1E5E\u1E5E\u1E60\u1E60\u1E62\u1E62\u1E64\u1E64\u1E66\u1E66\u1E68" +
		"\u1E68\u1E6A\u1E6A\u1E6C\u1E6C\u1E6E\u1E6E\u1E70\u1E70\u1E72\u1E72\u1E74" +
		"\u1E74\u1E76\u1E76\u1E78\u1E78\u1E7A\u1E7A\u1E7C\u1E7C\u1E7E\u1E7E\u1E80" +
		"\u1E80\u1E82\u1E82\u1E84\u1E84\u1E86\u1E86\u1E88\u1E88\u1E8A\u1E8A\u1E8C" +
		"\u1E8C\u1E8E\u1E8E\u1E90\u1E90\u1E92\u1E92\u1E94\u1E94\u1E96\u1E96\u1EA0" +
		"\u1EA0\u1EA2\u1EA2\u1EA4\u1EA4\u1EA6\u1EA6\u1EA8\u1EA8\u1EAA\u1EAA\u1EAC" +
		"\u1EAC\u1EAE\u1EAE\u1EB0\u1EB0\u1EB2\u1EB2\u1EB4\u1EB4\u1EB6\u1EB6\u1EB8" +
		"\u1EB8\u1EBA\u1EBA\u1EBC\u1EBC\u1EBE\u1EBE\u1EC0\u1EC0\u1EC2\u1EC2\u1EC4" +
		"\u1EC4\u1EC6\u1EC6\u1EC8\u1EC8\u1ECA\u1ECA\u1ECC\u1ECC\u1ECE\u1ECE\u1ED0" +
		"\u1ED0\u1ED2\u1ED2\u1ED4\u1ED4\u1ED6\u1ED6\u1ED8\u1ED8\u1EDA\u1EDA\u1EDC" +
		"\u1EDC\u1EDE\u1EDE\u1EE0\u1EE0\u1EE2\u1EE2\u1EE4\u1EE4\u1EE6\u1EE6\u1EE8" +
		"\u1EE8\u1EEA\u1EEA\u1EEC\u1EEC\u1EEE\u1EEE\u1EF0\u1EF0\u1EF2\u1EF2\u1EF4" +
		"\u1EF4\u1EF6\u1EF6\u1EF8\u1EF8\u1EFA\u1EFA\u1EFC\u1EFC\u1EFE\u1EFE\u1F00" +
		"\u1F00\u1F0A\u1F11\u1F1A\u1F1F\u1F2A\u1F31\u1F3A\u1F41\u1F4A\u1F4F\u1F5B" +
		"\u1F5B\u1F5D\u1F5D\u1F5F\u1F5F\u1F61\u1F61\u1F6A\u1F71\u1FBA\u1FBD\u1FCA" +
		"\u1FCD\u1FDA\u1FDD\u1FEA\u1FEE\u1FFA\u1FFD\u2104\u2104\u2109\u2109\u210D" +
		"\u210F\u2112\u2114\u2117\u2117\u211B\u211F\u2126\u2126\u2128\u2128\u212A" +
		"\u212A\u212C\u212F\u2132\u2135\u2140\u2141\u2147\u2147\u2185\u2185\u2C02" +
		"\u2C30\u2C62\u2C62\u2C64\u2C66\u2C69\u2C69\u2C6B\u2C6B\u2C6D\u2C6D\u2C6F" +
		"\u2C72\u2C74\u2C74\u2C77\u2C77\u2C80\u2C82\u2C84\u2C84\u2C86\u2C86\u2C88" +
		"\u2C88\u2C8A\u2C8A\u2C8C\u2C8C\u2C8E\u2C8E\u2C90\u2C90\u2C92\u2C92\u2C94" +
		"\u2C94\u2C96\u2C96\u2C98\u2C98\u2C9A\u2C9A\u2C9C\u2C9C\u2C9E\u2C9E\u2CA0" +
		"\u2CA0\u2CA2\u2CA2\u2CA4\u2CA4\u2CA6\u2CA6\u2CA8\u2CA8\u2CAA\u2CAA\u2CAC" +
		"\u2CAC\u2CAE\u2CAE\u2CB0\u2CB0\u2CB2\u2CB2\u2CB4\u2CB4\u2CB6\u2CB6\u2CB8" +
		"\u2CB8\u2CBA\u2CBA\u2CBC\u2CBC\u2CBE\u2CBE\u2CC0\u2CC0\u2CC2\u2CC2\u2CC4" +
		"\u2CC4\u2CC6\u2CC6\u2CC8\u2CC8\u2CCA\u2CCA\u2CCC\u2CCC\u2CCE\u2CCE\u2CD0" +
		"\u2CD0\u2CD2\u2CD2\u2CD4\u2CD4\u2CD6\u2CD6\u2CD8\u2CD8\u2CDA\u2CDA\u2CDC" +
		"\u2CDC\u2CDE\u2CDE\u2CE0\u2CE0\u2CE2\u2CE2\u2CE4\u2CE4\u2CED\u2CED\u2CEF" +
		"\u2CEF\u2CF4\u2CF4\uA642\uA642\uA644\uA644\uA646\uA646\uA648\uA648\uA64A" +
		"\uA64A\uA64C\uA64C\uA64E\uA64E\uA650\uA650\uA652\uA652\uA654\uA654\uA656" +
		"\uA656\uA658\uA658\uA65A\uA65A\uA65C\uA65C\uA65E\uA65E\uA660\uA660\uA662" +
		"\uA662\uA664\uA664\uA666\uA666\uA668\uA668\uA66A\uA66A\uA66C\uA66C\uA66E" +
		"\uA66E\uA682\uA682\uA684\uA684\uA686\uA686\uA688\uA688\uA68A\uA68A\uA68C" +
		"\uA68C\uA68E\uA68E\uA690\uA690\uA692\uA692\uA694\uA694\uA696\uA696\uA698" +
		"\uA698\uA724\uA724\uA726\uA726\uA728\uA728\uA72A\uA72A\uA72C\uA72C\uA72E" +
		"\uA72E\uA730\uA730\uA734\uA734\uA736\uA736\uA738\uA738\uA73A\uA73A\uA73C" +
		"\uA73C\uA73E\uA73E\uA740\uA740\uA742\uA742\uA744\uA744\uA746\uA746\uA748" +
		"\uA748\uA74A\uA74A\uA74C\uA74C\uA74E\uA74E\uA750\uA750\uA752\uA752\uA754" +
		"\uA754\uA756\uA756\uA758\uA758\uA75A\uA75A\uA75C\uA75C\uA75E\uA75E\uA760" +
		"\uA760\uA762\uA762\uA764\uA764\uA766\uA766\uA768\uA768\uA76A\uA76A\uA76C" +
		"\uA76C\uA76E\uA76E\uA770\uA770\uA77B\uA77B\uA77D\uA77D\uA77F\uA780\uA782" +
		"\uA782\uA784\uA784\uA786\uA786\uA788\uA788\uA78D\uA78D\uA78F\uA78F\uA792" +
		"\uA792\uA794\uA794\uA7A2\uA7A2\uA7A4\uA7A4\uA7A6\uA7A6\uA7A8\uA7A8\uA7AA" +
		"\uA7AA\uA7AC\uA7AC\uFF23\uFF3C%\x022;\u0662\u066B\u06F2\u06FB\u07C2\u07CB" +
		"\u0968\u0971\u09E8\u09F1\u0A68\u0A71\u0AE8\u0AF1\u0B68\u0B71\u0BE8\u0BF1" +
		"\u0C68\u0C71\u0CE8\u0CF1\u0D68\u0D71\u0E52\u0E5B\u0ED2\u0EDB\u0F22\u0F2B" +
		"\u1042\u104B\u1092\u109B\u17E2\u17EB\u1812\u181B\u1948\u1951\u19D2\u19DB" +
		"\u1A82\u1A8B\u1A92\u1A9B\u1B52\u1B5B\u1BB2\u1BBB\u1C42\u1C4B\u1C52\u1C5B" +
		"\uA622\uA62B\uA8D2\uA8DB\uA902\uA90B\uA9D2\uA9DB\uAA52\uAA5B\uABF2\uABFB" +
		"\uFF12\uFF1B\t\x02\u16F0\u16F2\u2162\u2184\u2187\u218A\u3009\u3009\u3023" +
		"\u302B\u303A\u303C\uA6E8\uA6F1\x02\x1E\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x03\x11\x03" +
		"\x02\x02\x02\x05\x13\x03\x02\x02\x02\x07\x15\x03\x02\x02\x02\t\x17\x03" +
		"\x02\x02\x02\v\x19\x03\x02\x02\x02\r\x1B\x03\x02\x02\x02\x0F\x1D\x03\x02" +
		"\x02\x02\x11\x12\t\x02\x02\x02\x12\x04\x03\x02\x02\x02\x13\x14\t\x03\x02" +
		"\x02\x14\x06\x03\x02\x02\x02\x15\x16\t\x04\x02\x02\x16\b\x03\x02\x02\x02" +
		"\x17\x18\t\x05\x02\x02\x18\n\x03\x02\x02\x02\x19\x1A\t\x06\x02\x02\x1A" +
		"\f\x03\x02\x02\x02\x1B\x1C\t\x07\x02\x02\x1C\x0E\x03\x02\x02\x02\x1D\x1E" +
		"\t\b\x02\x02\x1E\x10\x03\x02\x02\x02\x03\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!UnicodeClasses.__ATN) {
			UnicodeClasses.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(UnicodeClasses._serializedATN));
		}

		return UnicodeClasses.__ATN;
	}

}

