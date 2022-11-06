"use strict";
const i = `
let x:score dummy
x[degree] = 55
@mix(js){
    
}
`;
class TokenRange {
    constructor(start, end, size) {
        this.start = start;
        this.end = end;
        this.size = size;
    }
}
class Source {
    constructor(input) {
        this.input = input;
        this.index = 0;
        this.size = this.input.length;
    }
    is_end() {
        return this.size == this.index;
    }
    read(i) {
        return this.input[this.index + i];
    }
    move(i = 0) {
        this.index += i;
    }
    next() {
        this.index++;
        return this.input[this.index];
    }
    back() {
        this.index++;
        return this.input[this.index];
    }
}
class Token {
    constructor(name, value, range) {
        this.name = name;
        this.value = value;
        this.range = range;
    }
}
class TokenReader {
    constructor(name, regex) {
        this.name = name;
        this.regex = regex;
        this.is_fragment = false;
    }
    fragment() {
        this.is_fragment = true;
        return this;
    }
    build() {
        let reg = this.regex.source;
        if (/\\p\{reader\{(\w+)\}\}/.test(reg)) {
            for (const i of reg.matchAll(/\\p\{reader\{(\w+)\}\}/g)) {
                const m = this.parent.reader_stack.filter(a => a.reader.name == i[1] && a.reader.is_fragment);
                if (m.length > 0) {
                    reg = reg.replace(/\\p\{reader\{(\w+)\}\}/, m[0].reader.regex.source);
                }
                else {
                    // Not Found TokenReader Name
                    console.log(`Not Found TokenReader named ${i[1]}`);
                    console.log({
                        name: this.name,
                        regex: this.regex,
                        fragment: this.is_fragment
                    });
                    process.exit(1);
                }
            }
            this.regex = new RegExp(reg);
        }
    }
    test() {
        return this.source.input.slice(this.source.index).search(this.regex) == 0;
    }
    read() {
        const match = this.source.input.slice(this.source.index).match(this.regex);
        if (match && this.test()) {
            const start = this.source.index;
            const end = start + match[0].length;
            const size = end - start;
            this.source.move(size);
            return new Token(this.name, match[0], new TokenRange(start, end, size));
        }
        // Error cannot read ... Token
        console.log("Error cannot read ... Token");
        process.exit(1);
    }
}
class TokenParser {
    constructor(source, name) {
        this.source = source;
        this.name = name;
        this.reader_stack = [];
    }
    add(reader, options = { mode: "normal" }) {
        reader.parent = this;
        reader.source = this.source;
        reader.build();
        this.reader_stack.push({
            reader,
            options
        });
        return this;
    }
    test() {
        for (const node of this.reader_stack) {
            if (node.reader.test() && !node.reader.is_fragment) {
                if (node.options.mode == "push") {
                    this.parent.parser_stack.unshift(node.options.parser);
                }
                if (node.options.mode == "pop") {
                    this.parent.parser_stack.shift();
                }
                return node;
            }
        }
        return undefined;
    }
}
class Tokens {
    constructor(source) {
        this.source = source;
        this.stack = [];
        this.parsers = [];
        this.parser_stack = [];
    }
    add_parser(parser) {
        parser.parent = this;
        this.parsers.push(parser);
        return this;
    }
    read() {
        while (!this.source.is_end()) {
            if (this.parser_stack.length == 0) {
                for (const parser of this.parsers) {
                    const test = parser.test();
                    if (test) {
                        if (test.reader.name === "ErrorCharacter") {
                            console.log("Found unexpected Character", test.reader.read());
                            process.exit(1);
                        }
                    }
                    if (test) {
                        const token = test.reader.read();
                        console.log(token);
                        this.stack.push(token);
                        break;
                    }
                }
            }
            else {
                const test = this.parser_stack[0].test();
                if (test) {
                    if (test.reader.name === "ErrorCharacter") {
                        console.log("Found unexpected Character", test.reader.read());
                        process.exit(1);
                    }
                }
                if (test) {
                    const token = test.reader.read();
                    console.log(token);
                    this.stack.push(token);
                }
            }
        }
    }
}
const source = new Source(i);
const TokenParser_hidden = new TokenParser(source, 'hidden')
    .add(new TokenReader("Comment", /\/\/(?![\r\n]).*/))
    .add(new TokenReader("Whitespace", /[\u0020\u0009\u000C]/))
    .add(new TokenReader("Newline", /\n|\r(\n?)/));
class MixLangTokenReader extends TokenReader {
    constructor() {
        super("MIXCONTENT", /\p{NONE}/);
    }
}
const TokenParser_mixlanguage = new TokenParser(source, "mixlanguage")
    .add(new TokenReader("MIXCONTENT", /[\s\S]/))
    .add(new TokenReader("END_MIX", /\}/), { mode: 'pop' });
const TokenParser_default = new TokenParser(source, "default")
    // Bracket Zone
    .add(new TokenReader("LParent", /\(/))
    .add(new TokenReader("RParent", /\)/))
    .add(new TokenReader("LSQUARE", /\[/))
    .add(new TokenReader("RSQUARE", /\]/))
    .add(new TokenReader("LCurl", /\{/))
    .add(new TokenReader("RCurl", /\}/))
    .add(new TokenReader("HashTag", /#/))
    // Operator
    .add(new TokenReader("MULT", /\*/))
    .add(new TokenReader("MOD", /\%/))
    .add(new TokenReader("DIV", /\//))
    .add(new TokenReader("SUB", /\-/))
    // Random things
    .add(new TokenReader("COLON", /\:/))
    .add(new TokenReader("SEMICOLON", /\;/))
    .add(new TokenReader("NOT_WS", /\!/))
    .add(new TokenReader("AT", /@/))
    // Assignment Zone
    .add(new TokenReader("ASSIGNMENT", /\=/))
    .add(new TokenReader("MULT_ASSIGNMENT", /\*\=/))
    .add(new TokenReader("MOD_ASSIGNMENT", /\%\=/))
    .add(new TokenReader("DIVINE_ASSIGNMENT", /\/\=/))
    .add(new TokenReader("ADD_ASSIGNMENT", /\+\=/))
    .add(new TokenReader("SUB_ASSIGNMENT", /\-\=/))
    // Comparator Zone
    .add(new TokenReader("LE", /\<\=/))
    .add(new TokenReader("GE", /\>\=/))
    .add(new TokenReader("LANGLE", /\</))
    .add(new TokenReader("RANGLE", /\>/))
    .add(new TokenReader("EQUAL", /\=\=/))
    .add(new TokenReader("NOT_EQ", /\=\!/))
    // Keyword Zone
    .add(new TokenReader("Function", /fun/))
    .add(new TokenReader("Mix", /mix/), { mode: 'push', parser: TokenParser_mixlanguage })
    // Letter
    .add(new TokenReader("Digit", /[0-9]/).fragment())
    .add(new TokenReader("DigitNoZero", /[1-9]/).fragment())
    .add(new TokenReader("Digits", /\p{reader{DigitNoZero}}\p{reader{Digit}}*|\p{reader{Digit}}/).fragment())
    .add(new TokenReader("Integer", /\p{reader{Digits}}/))
    .add(new TokenReader("Identifier", /(\p{Letter}|_|#|\.)(\p{Letter}|_|#|\.)*/u));
const CommonTokens = new Tokens(source);
CommonTokens
    .add_parser(TokenParser_hidden)
    .add_parser(TokenParser_default)
    .add_parser(new TokenParser(source, "Error")
    .add(new TokenReader("ErrorCharacter", /./)));
CommonTokens.read();
//# sourceMappingURL=index.js.map