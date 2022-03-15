parser grammar mcbParser;
options { tokenVocab = mcbLexer;}

script: NL* EOF;

functionDeclare
    : FUN NL*? Identifier block
    ;

statements
    : (statement (EOF statement)*)? EOF?
    ;

statement
    : ( assignment | loopStatement )
    ;

block
    : COLON NL* statements NL* END
    ;

loopStatement: whileDo | doWhile;

whileDo
    : WHILE NL* LPAREN RPAREN NL* block
    ;

doWhile
    : DO NL* LPAREN RPAREN NL* block 
    ;
    
assignment
    : scoreboardIdentifier ASSIGNMENT expression
    ;

expression
    : expression multiplicativeOperator expression
    | expression additiveOperator expression
    | scoreboardIdentifier
    | IntegerLiteral
    | LPAREN expression RPAREN
    ;

scoreboardIdentifier
    : Identifier LSQUARE Identifier RSQUARE
    ;

additiveOperator
    : ADD
    | SUB
    ;
    
multiplicativeOperator
    : MULT
    | DIV
    | MOD
    ;