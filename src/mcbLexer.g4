lexer grammar mcbLexer;

import UnicodeClasses;

Comment: '//' ~[\r\n]* -> channel(HIDDEN);

WS: [\u0020\u0009\u000C] -> channel(HIDDEN);
NEWLINE: '\n' | '\r' '\n'?;

fragment Hidden:  Comment | WS;


// OPERATIONS

DOT: '.';
COMMA: ',';
LPAREN: '(';
RPAREN: ')';
LSQUARE: '[';
RSQUARE: ']';
LCURL: '{';
RCURL: '}';
RANGE: '..';
MULT: '*';
MOD: '%';
DIVINE: '/';
ADD: '+';
REMO: '-';
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
THEN: 'then';
ELSE: 'else';

WHILE: 'while';
DO: 'do';

// LITERALS

fragment DIGIT: '0'..'9';

fragment DIGITS: DIGIT*;
fragment Double: DIGITS '.' DIGITS;

RealLiteral: FloatLiteral | DoubleLiteral;
FloatLiteral: Double [fF];
DoubleLiteral: Double [dD];

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