parser grammar mcbParser;
options { tokenVocab = mcbLexer;}

mcb: NL* topPiorityObject* EOF;
topPiorityObject
    : declaration nls?
    ;

statements
    : (statement (nls statement)*)? nls?
    ;

statement
    : ( declaration | assignment | loopStatement | ifStatement )
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

loopStatement
    : whileDo 
    | doWhile
    ;

ifStatement
    : IF NL* ifExpression NL* block
    ;

ifExpression
    : disconjuction
    ;

disconjuction
    : conjuction (DISJ conjuction)*
    ;

conjuction
    : comparison (CONJ comparison)*
    ;

comparison
    : scoreNscoreExpression
    | scoreNrangeExpression
    | entityNBTExpression
    | blockExpression
    ;

scoreNscoreExpression
    : scoreboardIdentifier comparator scoreboardIdentifier
    ;

scoreNrangeExpression
    : scoreboardIdentifier K_MATCHES scoreboardLiteral RANGE scoreboardLiteral
    ;

entityNBTExpression
    : K_ENTITY ENTITY nbt?
    ;

blockExpression
    : K_BLOCK locateStatement blockTag
    ;

comparator
    : LANGLE | RANGLE | LE | GE | ASSIGNMENT
    ;

blockTag
    : Identifier
    | Identifier COLON Identifier
    ;

locateStatement
    : position
    | anchor
    ;

position
    : posPrefix posInner posSuffix
    ;

posPrefix
    : POS_P_WS locateLiteral
    | POS_P_WS
    | locateLiteral
    ;

posInner
    : POS_B_WS locateLiteral
    | POS_B_WS
    | locateLiteral
    ;

posSuffix
    : POS_S_WS locateLiteral
    | POS_S_WS
    | locateLiteral
    ;

anchor
    : ancPrefix ancInner ancSuffix
    ;

ancPrefix
    : ANC_P_WS locateLiteral
    | ANC_P_WS
    | locateLiteral
    ;

ancInner
    : ANC_B_WS locateLiteral
    | ANC_B_WS
    | locateLiteral
    ;

ancSuffix
    : ANC_S_WS locateLiteral
    | ANC_S_WS
    | locateLiteral
    ;

locateLiteral
    : FloatNS
    | SUB FloatNS
    | scoreboardLiteral
    ;

whileDo
    : WHILE NL* LPAREN RPAREN NL* block
    ;

doWhile
    : DO NL* LPAREN RPAREN NL* block 
    ;
    
assignment
    : scoreboardIdentifier assignmentOperator expression*
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
    : ENTITY nbt?
    ;

literalConstant
    : RealLiteral
    | IntegerLiteral
    | stringLiteral
    ;

assignmentOperator
    : ASSIGNMENT
    | MULT_ASSIGNMENT
    | MOD_ASSIGNMENT
    | DIVINE_ASSIGNMENT
    | ADD_ASSIGNMENT
    | SUB_ASSIGNMENT
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