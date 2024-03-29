lexer grammar mcbLexer;

import UnicodeClasses;

tokens {
	COMMANDS
}

@lexer::members {
private commands:any
private ruleType?:number
private stack:number = 0
private isMix:boolean = false
emit(token: any): any;
emit(): any;
emit(token?: any) {
	this.setRuleType(this._type)
	return super.emit()
}

public setCommands(commands:any){
	this.commands = commands
}

private isCOMMAND():boolean{
	const commands = this.commands
	const now = (i:number) => this._input.LA(1+i)
	const m = Object.keys(commands.children).map(a=>{
		for (let i = 0; i < a.length; i++) {
			const n = a.charCodeAt(i);
			const u = now(i)
			if(n!=u) return false
		}
		const u = String.fromCharCode(now(a.length))
		const n = /[\u0020\u0009\u000C]/.test(u)
		if(!n) return false
		return {
			word:a,to:a.length -1
		}
	}).filter(a=>a)[0]
	if(m) {
		this._input.seek(this._input.index + m.to);
		return true
	}
	return false
}
private handleEndMix(){
	const oldMode = this._mode;
	const newMode = this.popMode();
	const isMix = this._modeStack.size > 0
		&& newMode == mcbLexer.MixLanguange
		&& oldMode == newMode;
	if (isMix) {
		this._type = mcbLexer.MIXCONTENT;
	}else{
		this.isMix = false
		this._type = mcbLexer.RCURL;
	}
}
private setRuleType(ruleType:number){
	this.ruleType = ruleType
}
private checkLastRuleType(rule:number){
	return this.ruleType==rule
}
private updateStack(){
	this.stack = this._modeStack.size
}
private PUSHMODE(s:string){
	this.pushMode(this.modeNames.findIndex((a)=>a==s))
}
}

MultiLineComment:
	'/*' (MultiLineComment | .)*? '*/' -> channel(HIDDEN);

Comment: '//' ~[\r\n]* -> channel(HIDDEN);

WS: [\u0020\u0009\u000C] -> channel(HIDDEN);
NL: '\n' | '\r' '\n'?;

fragment Hidden: MultiLineComment | Comment | WS;

// OPERATIONS

DOT: '.';
COMMA: ',';
LPAREN: '(' -> pushMode(Inside);
RPAREN: ')';
LSQUARE: '[' -> pushMode(DEFAULT_MODE);
RSQUARE: ']';
LCURL: '{' {if(!this.isMix) this.PUSHMODE('DEFAULT_MODE')
else this.PUSHMODE('MixLanguange')
};
RCURL: '}';
HASH: '#';

RANGE: (FloatNS | IntegerLiteral) '..' (FloatNS | IntegerLiteral)
	| (FloatNS | IntegerLiteral) '..'
	| '..' (FloatNS | IntegerLiteral);

MULT: '*';
MOD: '%';
DIV: '/';
ADD: '+';
SUB: '-';
COLON: ':';
SEMICOLON: ';';
// COLON: ':'-> pushMode(DEFAULT_MODE);
NOT_WS: '!' Hidden;
NOT_NO_WS: '!';

TYPE: 'int' | 'bool' | 'array' | 'map';
CONJ: 'and';
DISJ: 'or';

ASSIGNMENT: '=';
MULT_ASSIGNMENT: '*=';
MOD_ASSIGNMENT: '%=';
DIVINE_ASSIGNMENT: '/=';
ADD_ASSIGNMENT: '+=';
SUB_ASSIGNMENT: '-=';
LANGLE: '<';
RANGLE: '>';
LE: '<=';
GE: '>=';
MC_NOT_EQ: '=!';

ENTITY: '@' {(()=>{
	const now = (i:number) => this._input.LA(1+i)
	const r = /[asrep]/.test(String.fromCharCode(now(0)))
	if(r) this._input.seek(this._input.index+1)
	return r
})();
}? [asrep];

AT_N_WS: '@';
AT_P_WS: Hidden '@';
AT_S_WS: '@' Hidden;
AT_B_WS: Hidden '@' Hidden;

POS: '~';
POS_P_WS: Hidden '~';
POS_S_WS: '~' Hidden;

ANC: '^';
ANC_P_WS: Hidden '^';
ANC_S_WS: '^' Hidden;

// KEYWORDS
FUN: 'fun';
IF: 'if';
LET: 'let';
TICK: 'tick';
LOAD: 'load';
WITH: 'with';
MIX: 'mix' {this.isMix=true} -> pushMode(MixLanguange);

K_MATCHES: 'matches';
K_DATA: 'data';
K_ENTITY: 'entity';
K_BLOCK: 'block';
K_STORAGE: 'storage';
K_PREDICATE: 'predicate';
K_SCORE: 'score';

ELSE: 'else';

WHILE: 'while';
REPEAT: 'repeat';
UNTIL: 'until';
FOR: 'for';
IN: 'in';

COMMANDS:
	{this.isCOMMAND()}? . -> pushMode(Commands), type(COMMANDS);

// LITERALS

fragment DIGIT: '0' ..'9';
fragment DigitNoZero: '1' ..'9';
fragment DIGITS: DIGIT DIGIT*;
fragment Double: DIGITS? '.' DIGITS;

RealLiteral: FloatLiteral | DoubleLiteral;
FloatNS: Double;
FloatLiteral: Double [fF];
DoubleLiteral: Double [dD];
IntegerLiteral: DigitNoZero DIGIT* | DIGIT;

fragment UnicodeDigit: UNICODE_CLASS_ND;

fragment EscapedIdentifier:
	'\\' ('t' | 'b' | 'r' | 'n' | '\'' | '"' | '\\' | '$');

fragment Letter:
	UNICODE_CLASS_LU
	| UNICODE_CLASS_LL
	| UNICODE_CLASS_LT
	| UNICODE_CLASS_LM
	| UNICODE_CLASS_LO;

Identifier: (Letter | '_' | '#' | '.') (
		Letter
		| '_'
		| '#'
		| '.'
		| '@'
		| UnicodeDigit
	)*;

QUOTE_OPEN: '"' -> pushMode(LineString);

mode LineString;

QUOTE_CLOSE: '"' -> popMode;
StrText: ~('\\' | '"' | '$')+ | '$';
StrEscapedChar: EscapedIdentifier;
StrExpression: '${' -> pushMode(Inside);

mode Commands;

CommandStr:
	~([\n\r])+ {
const isFUNCTION = this.text.endsWith(")")
if(isFUNCTION){
	const v = this.text.lastIndexOf(")")
	const m = v - (this.text.lastIndexOf('run') +3)
	this._input.seek(this.charIndex-m)
	return
}
const text = this.text.endsWith(":")
if(text) this._input.seek(this.charIndex-1)
} -> popMode;

mode MixLanguange;
MIX_LPAREN: {this.checkLastRuleType(mcbLexer.MIX)}? {this.updateStack()} '(' -> pushMode(Inside),type(LPAREN);
NEST: {this._modeStack.size - this.stack>0}? LCURL -> type (MIXCONTENT), pushMode (MixLanguange);

END_MIX
   : RCURL { this.handleEndMix(); }
   ;

UNTERMINATED_MIX
   : EOF -> popMode
   ;

MIXCONTENT: {this._modeStack.size - this.stack>0}? .;
MIX_TO_DEFAULT: . {this._input.seek(this.charIndex-1)} ->channel(HIDDEN), pushMode(DEFAULT_MODE);
mode Inside;

I_RPAREN: RPAREN -> popMode, type(RPAREN);
I_RSQUARE: RSQUARE -> popMode, type(RSQUARE);
I_LPAREN: LPAREN -> pushMode(Inside), type(LPAREN);
I_LSQUARE: LSQUARE -> pushMode(Inside), type(LSQUARE);
I_LCURL: LCURL -> pushMode(DEFAULT_MODE), type(LCURL);
I_RCURL: RCURL -> popMode, type(RCURL);

I_DOT: DOT -> type(DOT);
I_COMMA: COMMA -> type(COMMA);
I_MULT: MULT -> type(MULT);
I_MOD: MOD -> type(MOD);
I_DIV: DIV -> type(DIV);
I_ADD: ADD -> type(ADD);
I_SUB: SUB -> type(SUB);
I_COLON: COLON -> type(COLON);
I_SEMICOLON: SEMICOLON -> type(SEMICOLON);

I_HASH: HASH -> type(HASH);
I_NOT_WS: NOT_WS -> type(NOT_WS);
I_NOT_NO_WS: NOT_NO_WS -> type(NOT_NO_WS);
I_MC_NOT_EQ: MC_NOT_EQ -> type(MC_NOT_EQ);

I_CONJ: CONJ -> type(CONJ);
I_DISJ: DISJ -> type(DISJ);
I_REPEAT: REPEAT -> type(REPEAT);
I_UNTIL: UNTIL -> type(UNTIL);
I_FOR: FOR -> type(FOR);
I_IN: IN -> type(IN);

I_POS: POS -> type(POS);
I_POS_P_WS: POS_P_WS -> type(POS_P_WS);
I_POS_S_WS: POS_S_WS -> type(POS_S_WS);

I_ANC: ANC -> type(ANC);
I_ANC_P_WS: ANC_P_WS -> type(ANC_P_WS);
I_ANC_S_WS: ANC_S_WS -> type(ANC_S_WS);

I_ASSIGNMENT: ASSIGNMENT -> type(ASSIGNMENT);
I_MULT_ASSIGNMENT: MULT_ASSIGNMENT -> type(MULT_ASSIGNMENT);
I_MOD_ASSIGNMENT: MOD_ASSIGNMENT -> type(MOD_ASSIGNMENT);
I_DIVINE_ASSIGNMENT:
	DIVINE_ASSIGNMENT -> type(DIVINE_ASSIGNMENT);
I_ADD_ASSIGNMENT: ADD_ASSIGNMENT -> type(ADD_ASSIGNMENT);
I_SUB_ASSIGNMENT: SUB_ASSIGNMENT -> type(SUB_ASSIGNMENT);

I_RANGE: RANGE -> type(RANGE);

I_ENTITY: ENTITY -> type(ENTITY);

I_AT_N_WS: AT_N_WS -> type(AT_N_WS);
I_AT_P_WS: AT_P_WS -> type(AT_P_WS);
IAT_S_WS: AT_S_WS -> type(AT_S_WS);
I_AT_B_WS: AT_B_WS -> type(AT_B_WS);

I_LANGLE: LANGLE -> type(LANGLE);
I_RANGLE: RANGLE -> type(RANGLE);
I_LE: LE -> type(LE);
I_GE: GE -> type(GE);

I_COMMANDS: COMMANDS -> pushMode(Commands), type(COMMANDS);

I_QUOTE_OPEN:
	QUOTE_OPEN -> pushMode(LineString), type(QUOTE_OPEN);

I_FUN: FUN -> type(FUN);
I_IF: IF -> type(IF);
I_ELSE: ELSE -> type(ELSE);
I_LET: LET -> type(LET);
I_TYPE: TYPE -> type(TYPE);
I_TICK: TICK -> type(TICK);
I_LOAD: LOAD -> type(LOAD);
I_WITH: WITH -> type(WITH);

I_K_MATCHES: K_MATCHES -> type(K_MATCHES);
I_K_DATA: K_DATA -> type(K_DATA);
I_K_ENTITY: K_ENTITY -> type(K_ENTITY);
I_K_BLOCK: K_BLOCK -> type(K_BLOCK);
I_K_STORAGE: K_STORAGE -> type(K_STORAGE);
I_K_PREDICATE: K_PREDICATE -> type(K_PREDICATE);
I_K_SCORE: K_SCORE -> type(K_SCORE);


I_WHILE: WHILE -> type(WHILE);

I_RealLiteral: RealLiteral -> type(RealLiteral);
I_IntegerLiteral: IntegerLiteral -> type(IntegerLiteral);
I_Identifier: Identifier -> type(Identifier);
I_Comment: (Comment | MultiLineComment) -> channel(HIDDEN);
I_WS: WS -> channel(HIDDEN);
I_NL: NL -> channel(HIDDEN);

mode DEFAULT_MODE;

ErrorCharacter: .;