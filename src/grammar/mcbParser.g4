parser grammar mcbParser;
options { tokenVocab = mcbLexer;}

mcb: NL* topPriorityObject* EOF;
topPriorityObject
    : (declaration|load) nl?
    ;

load: statement;

statements
    : (statement (nls statement)*)? nls?
    ;

statement
    : ( assignment | loopStatement | ifStatement | commands | scoreboardDeclaration | (functionCalling|functionCalling+))
    ;

commands
    : COMMANDS CommandStr functionCalling?
    ;

declaration
    : functionDeclaration
    ;

variableDeclaration
    : scoreboardDeclaration
    ;

scoreboardDeclaration
    : LET Identifier COLON K_SCORE Identifier Identifier?
    ;

functionCalling
    : Identifier functionInputParameters
    ;

functionDeclaration
    : functionModifiers? FUN Identifier functionParameters block
    ;

functionInputParameters
    : LPAREN (inputparameter (COMMA inputparameter)* COMMA?)? RPAREN
    ;

functionParameters
    : LPAREN (parameter (COMMA parameter)* COMMA?)? RPAREN
    ;

inputparameter
    : literalConstant | scoreboardIdentifier
    ;

parameter
    : Identifier COLON TYPE
    ;

block
    : LCURL NL* statements NL* RCURL
    ;

functionModifiers
    : functionModifier+
    ;

functionModifier
    : TICK
    | LOAD
    ;

ifStatement
    : unstrippedIfStatement
    ;

unstrippedIfStatement
    : IF NL* LPAREN disconjuction RPAREN NL* block elseStatement?
    ;

controlstructBody
    : unstrippedIfStatement | block
    ;

elseStatement
    : NL* ELSE NL* controlstructBody
    ;

loopStatement
    : whileDo
    | repeatUntil
    | forStatement
    ;

loopWith: commands;

forStatement
    : FOR NL* LPAREN scoreboardIdentifier IN range SEMICOLON scoreboardLiteral (SEMICOLON loopWith)? RPAREN NL* block
    ;

whileDo
    : WHILE NL* LPAREN disconjuction RPAREN NL* block
    ;

repeatUntil
    : REPEAT NL* block NL* UNTIL LPAREN disconjuction RPAREN
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
    : expression comparator expression
    ;

scoreNrangeExpression
    : expression K_MATCHES range
    ;

range
    : RANGE
    ;

entityNBTExpression
    : entity nbt?
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
    : QUOTE_OPEN (stringContent|strExpr)* QUOTE_CLOSE
    ;

strExpr: StrExpression NL* scoreboardIdentifier NL* RCURL; // NOT DONE

stringContent
    : StrText
    | StrEscapedChar
    ;

entity: ENTITY;

nl
    : NL NL*
    | EOF
    ;

nls
    : NL+
    | EOF
    ;