lexer grammar mcbLexer;

import UnicodeClasses;

Comment: '//' ~[\r\n]* -> channel(HIDDEN);

WS: [\u0020\u0009\u000C] -> channel(HIDDEN);
NL: '\n' | '\r' '\n'?;

fragment Hidden: Comment | WS;

// OPERATIONS

DOT: '.';
COMMA: ',';
LPAREN: '(' -> pushMode(Inside);
RPAREN: ')';
LSQUARE: '[' -> pushMode(DEFAULT_MODE);
RSQUARE: ']';
LCURL: '{' -> pushMode(DEFAULT_MODE);
RCURL: '}';

RANGE: '..';
RANGE_P_WS: Hidden '..';
RANGE_S_WS: '..' Hidden;
RANGE_B_WS: Hidden '..' Hidden;

MULT: '*';
MOD: '%';
DIV: '/';
ADD: '+';
SUB: '-';
COLON: ':';
// COLON: ':'-> pushMode(DEFAULT_MODE);
NOT_WS: '!' Hidden;
NOT_NO_WS: '!';

CONJ: 'and';
DISJ: 'or';

ASSIGNMENT: '=';
MULT_ASSIGNMENT: '*=';
MOD_ASSIGNMENT: '%=';
DIVINE_ASSIGNMENT: '/=';
ADD_ASSIGNMENT: '+=';
SUB_ASSIGNMENT: '-=';
LANGLE: '<';
RANGLE: '>';
LE: '<=';
GE: '>=';
MC_NOT_EQ: '=!';

AT_N_WS: '@';
AT_P_WS: Hidden '@';
AT_S_WS: '@' Hidden;
AT_B_WS: Hidden '@' Hidden;

// ENTITY: (AT_N_WS|AT_P_WS)[asrep];
ENTITY_SUFFIX: [asrep];

POS: '~';
POS_P_WS: Hidden '~';
POS_S_WS: '~' Hidden;

ANC: '^';
ANC_P_WS: Hidden '^';
ANC_S_WS: '^' Hidden;

// KEYWORDS
FUN: 'fun';
END: 'end';
IF: 'if';
UNLESS: 'unless';

K_MATCHES: 'matches';
K_DATA: 'data';
K_ENTITY: 'entity';
K_BLOCK: 'block';
K_STORAGE: 'storage';
K_PREDICATE: 'predicate';

ELSE: 'else';

WHILE: 'while';
DO: 'do';

// LITERALS

fragment DIGIT: '0'..'9';
fragment DigitNoZero: '1'..'9';
fragment DIGITS: DIGIT DIGIT*;
fragment Double: DIGITS? '.' DIGITS;

RealLiteral: FloatLiteral | DoubleLiteral;
FloatNS: Double;
FloatLiteral: Double [fF];
DoubleLiteral: Double [dD];
IntegerLiteral: DigitNoZero DIGIT*;

fragment UnicodeDigit: UNICODE_CLASS_ND;

fragment Letter:
	UNICODE_CLASS_LU
	| UNICODE_CLASS_LL
	| UNICODE_CLASS_LT
	| UNICODE_CLASS_LM
	| UNICODE_CLASS_LO;

Identifier: (Letter | '_' | '#' | '.' ) (Letter| '_'| '#'| '.'| '@' | UnicodeDigit)*;

QUOTE_OPEN: '"' -> pushMode(LineString);

mode LineString;

QUOTE_CLOSE: '"' -> popMode;
LineStrText: ~('"')+;

mode Inside;

I_RPAREN: RPAREN -> popMode, type(RPAREN);
I_RSQUARE: RSQUARE -> popMode, type(RSQUARE);
I_LPAREN: LPAREN -> pushMode(Inside), type(LPAREN);
I_LSQUARE: LSQUARE -> pushMode(Inside), type(LSQUARE);
I_LCURL: LCURL -> pushMode(DEFAULT_MODE), type(LCURL);
I_RCURL: RCURL -> popMode, type(RCURL);

I_DOT: DOT -> type(DOT);
I_COMMA: COMMA -> type(COMMA);
I_MULT: MULT -> type(MULT);
I_MOD: MOD -> type(MOD);
I_DIV: DIV -> type(DIV);
I_ADD: ADD -> type(ADD);
I_SUB: SUB -> type(SUB);
I_COLON: COLON -> type(COLON);

I_NOT_WS: NOT_WS -> type(NOT_WS);
I_NOT_NO_WS: NOT_NO_WS -> type(NOT_NO_WS);
I_MC_NOT_EQ: MC_NOT_EQ -> type(MC_NOT_EQ);

I_CONJ: CONJ-> type(CONJ);
I_DISJ: DISJ-> type(DISJ);

I_POS: POS-> type(POS);
I_POS_P_WS: POS_P_WS-> type(POS_P_WS);
I_POS_S_WS: POS_S_WS-> type(POS_S_WS);

I_ANC: ANC-> type(ANC);
I_ANC_P_WS: ANC_P_WS-> type(ANC_P_WS);
I_ANC_S_WS: ANC_S_WS-> type(ANC_S_WS);

I_ASSIGNMENT: ASSIGNMENT -> type(ASSIGNMENT);
I_MULT_ASSIGNMENT: MULT_ASSIGNMENT -> type(MULT_ASSIGNMENT);
I_MOD_ASSIGNMENT: MOD_ASSIGNMENT -> type(MOD_ASSIGNMENT);
I_DIVINE_ASSIGNMENT:
	DIVINE_ASSIGNMENT -> type(DIVINE_ASSIGNMENT);
I_ADD_ASSIGNMENT: ADD_ASSIGNMENT -> type(ADD_ASSIGNMENT);
I_SUB_ASSIGNMENT: SUB_ASSIGNMENT -> type(SUB_ASSIGNMENT);

I_RANGE: RANGE -> type(RANGE);
I_RANGE_P_WS: RANGE_P_WS -> type(RANGE_P_WS);
I_RANGE_S_WS: RANGE_S_WS -> type(RANGE_S_WS);
I_RANGE_B_WS: RANGE_B_WS -> type(RANGE_B_WS);

I_AT_N_WS: AT_N_WS -> type(AT_N_WS);
IAT_S_WS: AT_S_WS -> type(AT_S_WS);
I_AT_P_WS: AT_P_WS -> type(AT_P_WS);
I_AT_B_WS: AT_B_WS -> type(AT_B_WS);
// I_ENTITY: ENTITY -> type(ENTITY);
I_ENTITY_SUFFIX: ENTITY_SUFFIX -> type(ENTITY_SUFFIX);
I_LANGLE: LANGLE -> type(LANGLE);
I_RANGLE: RANGLE -> type(RANGLE);
I_LE: LE -> type(LE);
I_GE: GE -> type(GE);
I_QUOTE_OPEN:
	QUOTE_OPEN -> pushMode(LineString), type(QUOTE_OPEN);

I_FUN: FUN -> type(FUN);

I_IF: IF -> type(IF);
I_UNLESS: UNLESS -> type(UNLESS);
I_ELSE: ELSE -> type(ELSE);

I_K_MATCHES:K_MATCHES -> type(K_MATCHES);
I_K_DATA: K_DATA -> type(K_DATA);
I_K_ENTITY: K_ENTITY -> type(K_ENTITY);
I_K_BLOCK: K_BLOCK -> type(K_BLOCK);
I_K_STORAGE: K_STORAGE -> type(K_STORAGE);
I_K_PREDICATE: K_PREDICATE -> type(K_PREDICATE);

// I_END: END -> popMode, type(END);
I_END: END -> type(END);

I_DO: DO -> type(DO);
I_WHILE: WHILE -> type(WHILE);

I_RealLiteral: RealLiteral -> type(RealLiteral);
I_IntegerLiteral: IntegerLiteral -> type(IntegerLiteral);
I_Identifier: Identifier -> type(Identifier);
I_Comment: Comment -> channel(HIDDEN);
I_WS: WS -> channel(HIDDEN);
I_NL: NL -> channel(HIDDEN);

mode DEFAULT_MODE;

ErrorCharacter: .;