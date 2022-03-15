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
    : additiveExpression
    ;

asExpression
    : scoreboardLiteral
    | scoreboardIdentifier
    | parentAssignableExpression
    ;

parentAssignableExpression
    : LPAREN NL* expression NL* RPAREN
    ;

additiveExpression
    : multiplicativeExpression (additiveOperator multiplicativeExpression)*
    ;

multiplicativeExpression
    : asExpression (multiplicativeOperator asExpression)*
    ;

scoreboardIdentifier
    : Identifier LSQUARE (Identifier|scoreboardTarget) RSQUARE
    ;

scoreboardLiteral
    : IntegerLiteral
    | scoreboardUnaryPrefix
    ;

scoreboardUnaryPrefix
    : SUB IntegerLiteral
    ;

scoreboardTarget
    : ENTITY nbt
    ;

literalConstant
    : RealLiteral
    | IntegerLiteral
    | stringLiteral
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

nbt
    : LSQUARE nbtEquality (COMMA nbtEquality)* RSQUARE
    ;

nbtEquality
    : Identifier ASSIGNMENT asNBT
    ;

asNBT
    : (literalConstant | nbtArray | Identifier | nbtSet)
    ;

nbtSet
    : LCURL Identifier ASSIGNMENT literalConstant RCURL
    ;

nbtArray
    : LSQUARE literalConstant (COMMA literalConstant)* RSQUARE
    ;

stringLiteral
    : QUOTE_OPEN LineStrText* QUOTE_CLOSE
    ;

nl
    : NL NL*
    | EOF
    ;

nls
    : NL+
    | EOF
    ;