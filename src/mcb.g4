grammar mcb;
chunk: block EOF;
block: func*;

func: 'fun' CHAR ':' stat* 'end';

stat: def
    | NEWLINE
    | equation
    ;


expEqual: '==';
expGreaterThanEqual: '>=';

position:
    number number number
    | '~' '~' '~'
    | '~'number '~' '~'
    | '~' '~'number '~'
    | '~' '~' '~'number
    | '~'number '~'number '~'
    | '~' '~'number '~'number
    | '~'number '~' '~'number
    | '~'number '~'number '~'number
    ;

anchor: 
    '^' '^' '^'
    | '^'number '^' '^'
    | '^' '^'number '^'
    | '^' '^' '^'number
    | '^'number '^'number '^'
    | '^' '^'number '^'number
    | '^'number '^' '^'number
    | '^'number '^'number '^'number
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
    INT
    | INT'.'INT
    | '-'INT
    | '-'INT'.'INT
    ;

minusNumberInt: '-'numberInt;
numberInt: INT;
exprVariable:CHAR '[' CHAR ']';

NEWLINE: [\r\n]+ -> skip;
INT: [0-9]+;

CHAR: [a-zA-Z_][a-zA-Z_0-9.]*;
WS: [ \t\u000C\r\n]+ -> skip;