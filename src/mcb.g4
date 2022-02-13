grammar mcb;
chunk: block EOF;
block: stat*;

stat: def
    | NEWLINE
    | equat
    | statmentIF
    ;

statmentIF: 'if' exestat 'then' stat 'endif';

exestat: 'block' position expEqual CHAR;

expEqual: '==';
expGreaterThanEqual: '>=';

annotation: '@' CHAR position;


number: INT'.'INT
    | INT
    ;

position: number number number
    | 'here'
    ;
    

equat: CHAR '=' expr*;

def: '#'CHAR
    | '#' CHAR CHAR CHAR 'at' CHAR
    | '#' CHAR CHAR 'as' CHAR CHAR?
    ;

expr:
	expr ('*' | '/' | '%') expr
	| expr ('+' | '-') expr
	| INT
	| CHAR
	| '(' expr ')';

NEWLINE: [\r\n]+;
INT: [0-9]+;
CHAR: [a-zA-Z_@][a-zA-Z_0-9.]*;

WS: [ \t\u000C\r\n]+ -> skip;