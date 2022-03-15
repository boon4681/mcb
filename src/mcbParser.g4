parser grammar mcbParser;
options { tokenVocab = mcbLexer;}

script: NL* EOF;

functionDeclare
    : FUN (NL*)? Identifier block
    ;


block
    : COLON NL* statements NL* END
    ;

whileDo
    : WHILE NL* LPAREN RPAREN NL*
    ;


statements
    :
    ;