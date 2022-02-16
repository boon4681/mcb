grammar mcb;
chunk: block EOF;
block: func*;

func: 'fun' CHAR ':' stat* 'end';

stat: def
    | statementIF
    | NEWLINE
    | equation
    | annotation
    ;

annotation: '@' annTarget | annotation '@' annTarget;

annTarget:
    'position' position
    ;
statementIF: 'if' exestat 'then' stat 'endif';

exestat: 'block' position expEqual CHAR;

expEqual: '==';
expGreaterThanEqual: '>=';

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

NEWLINE: [\r\n]+ -> skip;
INT: [0-9]+;

CHAR: [a-zA-Z_][a-zA-Z_0-9.]*;

WS: [ \t\u000C\r\n]+ -> skip;