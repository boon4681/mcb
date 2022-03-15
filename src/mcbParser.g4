parser grammar mcbParser;
options { tokenVocab = mcbLexer;}

script: NL* (statement nl)* EOF;

statements
    : (statement (nls statement)*)? nls?
    ;

statement
    : ( declaration | assignment | loopStatement )
    ;

declaration
    : functionDeclare
    ;

functionDeclare
    : FUN Identifier block
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
    : scoreboardIdentifier ASSIGNMENT expression*
    ;

expression
    : LPAREN NL* expression NL* RPAREN
    | expression multiplicativeOperator expression
    | expression additiveOperator expression
    | IntegerLiteral
    | scoreboardIdentifier
    ;

scoreboardIdentifier
    : Identifier LSQUARE (Identifier|ENTITY) RSQUARE
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

nl
    : NL NL*
    | EOF
    ;

nls
    : NL+
    | EOF
    ;