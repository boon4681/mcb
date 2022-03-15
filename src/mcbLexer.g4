lexer grammar mcbLexer;

import UnicodeClasses;

Comment: '//' ~[\r\n]* -> channel(HIDDEN);

WS: [\u0020\u0009\u000C] -> channel(HIDDEN);
NEWLINE: '\n' | '\r' '\n'?;

fragment Hidden:  Comment | WS;

DOT: '.';
COMMA: ',';
LPAREN: '(';
RPAREN: ')';
LSQUARE: '[';
RSQUARE: ']';
LCURL: '{';
RCURL: '}';

// OPERATIONS
MULT: '*';
MOD: '%';
DIVINE: '/';
ADD: '+';
REMO: '-';
COLON: ':';

// ASSIGNMENTS
ASSIGN: '=';

//
