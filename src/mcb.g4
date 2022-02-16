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
position:
    number number number
    | 'here'
    ;
    

equation: exprVariable '=' expr*;

def: '#' defNamespace
    | '#' 'dict' CHAR CHAR 'at' CHAR
    | '#' 'score' CHAR 'as' CHAR CHAR?
    ;

defNamespace: 'dict'|'score';

expr:
	expr ('*' | '/' | '%') expr
	| expr ('+' | '-') expr
    | minusNumberInt
	| numberInt
	| exprVariable
	| '(' expr ')';

number:
    INT'.'INT
    | INT
    ;
minusNumberInt: '-'numberInt;
numberInt: INT;
exprVariable:CHAR '[' CHAR ']';

NEWLINE: [\r\n]+;
INT: [0-9]+;

CHAR: [a-zA-Z_][a-zA-Z_0-9.]*;

WS: [ \t\u000C\r\n]+ -> skip;