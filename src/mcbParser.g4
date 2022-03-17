parser grammar mcbParser;
options { tokenVocab = mcbLexer;}

mcb: NL* topPriorityObject* EOF;
topPriorityObject
    : declaration nl?
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

ifStatement
    : IF NL* disconjuction NL* block
    ;

loopStatement
    : whileDo 
    | doWhile
    ;

whileDo
    : WHILE NL* disconjuction NL* block
    ;

doWhile
    : DO NL* disconjuction NL* block
    ;

disconjuction
    : conjuction NL* (DISJ NL* conjuction)*
    ;

conjuction
    : comparison NL* (CONJ NL* comparison)*
    ;

comparison
    : (NOT_NO_WS)? asComparison
    ;

asComparison
    : scoreNscoreExpression
    | scoreNrangeExpression
    | entityNBTExpression
    | blockExpression
    ;

scoreNscoreExpression
    : scoreboardIdentifier comparator scoreboardIdentifier
    ;

scoreNrangeExpression
    : scoreboardIdentifier K_MATCHES range
    ;

range
    : scoreboardLiteral
    | scoreboardLiteral RANGE_S_WS scoreboardLiteral?
    | scoreboardLiteral? RANGE_P_WS scoreboardLiteral
    ;

entityNBTExpression
    : K_ENTITY entity nbt?
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
    : posPrefix posPrefix posPrefix
    ;

posPrefix
    : POS_P_WS locateLiteral
    | POS_P_WS
    | locateLiteral
    ;

posSuffix
    : POS_S_WS locateLiteral
    | POS_S_WS
    | locateLiteral
    ;

anchor
    : ancPrefix ancSuffix
    ;

ancPrefix
    : ANC_P_WS locateLiteral
    | ANC_P_WS
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
    : entity nbt?
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
    : Identifier ASSIGNMENT (NOT_NO_WS)? asNBT
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

entity: (AT_N_WS|AT_P_WS)ENTITY_SUFFIX;

nl
    : NL NL*
    | EOF
    ;

nls
    : NL+
    | EOF
    ;