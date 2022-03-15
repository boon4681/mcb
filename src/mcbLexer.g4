lexer grammar mcbLexer;

import UnicodeClasses;

Comment: '//' ~[\r\n]* -> channel(HIDDEN);

WS: [\u0020\u0009\u000C] -> channel(HIDDEN);
NL: '\n' | '\r' '\n'?;

fragment Hidden:  Comment | WS;


// OPERATIONS

DOT: '.';
COMMA: ',';
LPAREN: '('-> pushMode(Inside);
RPAREN: ')';
LSQUARE: '['-> pushMode(Inside);
RSQUARE: ']';
LCURL: '{'-> pushMode(DEFAULT_MODE);
RCURL: '}'{ if (!_modeStack.isEmpty()) { popMode(); } };
RANGE: '..';
MULT: '*';
MOD: '%';
DIVINE: '/';
ADD: '+';
SUB: '-';
COLON: ':';

ASSIGN: '=';
LANGLE: '<';
RANGLE: '>';
LE: '<=';
GE: '>=';

AT_N_WS: '@';
AT_P_WS: Hidden '@';
AT_S_WS: '@' Hidden;
AT_B_WS: Hidden '@' Hidden;

// KEYWORDS
FUN: 'fun';
END: 'end';
IF:  'if';
UNLESS: 'unless';
ELSE: 'else';

WHILE: 'while';
DO: 'do';

// LITERALS

fragment DIGIT: '0'..'9';
fragment DigitNoZero: '1'..'9';
fragment DIGITS: DIGIT DIGIT*;
fragment Double: DIGITS? '.' DIGITS;

RealLiteral: FloatLiteral | DoubleLiteral | IntegerLiteral;
FloatLiteral: Double [fF];
DoubleLiteral: Double [dD];
IntegerLiteral: DigitNoZero DIGIT*;

fragment UnicodeDigit: UNICODE_CLASS_ND;

fragment Letter
    : UNICODE_CLASS_LU
    | UNICODE_CLASS_LL
    | UNICODE_CLASS_LT
    | UNICODE_CLASS_LM
    | UNICODE_CLASS_LO
    ;
    
Identifier
    : (Letter | '_' | '#') (Letter | '_' | UnicodeDigit)*;

QUOTE_OPEN: '"' -> pushMode(LineString);

mode LineString;

QUOTE_CLOSE
    : '"' -> popMode
    ;
LineStrText
    : ~('"')+
    ;

mode Inside;

Inside_RPAREN: RPAREN -> popMode, type(RPAREN);
Inside_RSQUARE: RSQUARE -> popMode, type(RSQUARE);
Inside_LPAREN: LPAREN -> pushMode(Inside), type(LPAREN);
Inside_LSQUARE: LSQUARE -> pushMode(Inside), type(LSQUARE);
Inside_LCURL: LCURL -> pushMode(DEFAULT_MODE), type(LCURL);
Inside_RCURL: RCURL -> popMode, type(RCURL);


Inside_DOT: DOT -> type(DOT);
Inside_COMMA: COMMA  -> type(COMMA);
Inside_MULT: MULT -> type(MULT);
Inside_MOD: MOD  -> type(MOD);
Inside_DIV: DIVINE -> type(DIVINE);
Inside_ADD: ADD  -> type(ADD);
Inside_SUB: SUB  -> type(SUB);
Inside_COLON: COLON  -> type(COLON);
Inside_ASSIGNMENT: ASSIGN  -> type(ASSIGN);
Inside_RANGE: RANGE  -> type(RANGE);
Inside_AT_N_WS: AT_N_WS  -> type(AT_N_WS);
InsideAT_S_WS: AT_S_WS  -> type(AT_S_WS);
Inside_AT_P_WS: AT_P_WS  -> type(AT_P_WS);
Inside_AT_B_WS: AT_B_WS  -> type(AT_B_WS);
Inside_LANGLE: LANGLE  -> type(LANGLE);
Inside_RANGLE: RANGLE  -> type(RANGLE);
Inside_LE: LE  -> type(LE);
Inside_GE: GE  -> type(GE);
Inside_QUOTE_OPEN: QUOTE_OPEN -> pushMode(LineString), type(QUOTE_OPEN);

Inside_FUN: FUN -> type(FUN);

Inside_IF: IF -> type(IF);
Inside_UNLESS: UNLESS -> type(UNLESS);
Inside_ELSE: ELSE-> type(ELSE);
Inside_END: END -> type(END);

Inside_DO: DO -> type(DO);
Inside_WHILE: WHILE -> type(WHILE);

Inside_RealLiteral: RealLiteral -> type(RealLiteral);

Inside_Identifier: Identifier -> type(Identifier);
Inside_Comment: Comment -> channel(HIDDEN);
Inside_WS: WS -> channel(HIDDEN);
Inside_NL: NL -> channel(HIDDEN);

mode DEFAULT_MODE;

ErrorCharacter: .;