grammar mcb;
chunk: block EOF;
block: stat*;

stat: def
    | statmentIF
    | NEWLINE
    | equation
    | annotation
    ;

statmentIF: 'if' exestat 'then' stat 'endif';

exestat: 'block' position expEqual CHAR;

expEqual: '==';
expGreaterThanEqual: '>=';

annotation: '@' annPosition position;
annPosition:'position';

number:
    INT'.'INT
    | INT
    ;

position:
    number number number
    | 'here'
    ;
    

equation: CHAR '=' expr*;

def: '#' defNamespace
    | '#' 'dict' CHAR CHAR 'at' CHAR
    | '#' 'score' CHAR 'as' CHAR CHAR?
    ;

defNamespace: 'dict'|'score';

expr:
	expr ('*' | '/' | '%') expr
	| expr ('+' | '-') expr
	| INT
	| CHAR
	| '(' expr ')';

NEWLINE: [\r\n]+;
INT: [0-9]+;

CHAR: [a-zA-Z_][a-zA-Z_0-9.]*;

WS: [ \t\u000C\r\n]+ -> skip;