import antlr4 from 'antlr4';
import mcbLexer from './.antlr/mcbLexer.js';
import mcbParser from './.antlr/mcbParser.js';
import mcbListener from './.antlr/mcbListener.js';
import mcbVisitor from './.antlr/mcbVisitor.js';

const input = `
#score x as dummy
#score y as dummy
#dict entity item at boon4681

x = 90
y = 4*x*(180-x)/(40500-x*(180-x))
`

const chars = new antlr4.InputStream(input);
const lexer = new mcbLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new mcbParser(tokens);
parser.buildParseTrees = true;
const tree = parser.chunk()
const name = 'mcb.sb.'
class Visitor extends mcbVisitor {
    autoScoreboard = 0
    maindef = ''
    text(c, i) {
        if(c.children[i])
        return c.children[i].getText()
        return undefined
    }

    visitDef(c) {
        switch(this.text(c,1)){
            case 'score':
                return `scoreboard objectives add ${this.text(c,2)} ${this.text(c,4)} ${this.text(c,5)?this.text(c,5):''}`
            case 'dict':
                return `data modify ${this.text(c,2)} ${this.text(c,5)} ${this.text(c,3)} set value {}`
            default:
                return `say @a mcb transpiler error ${c.getText()}`
        }
    }
    visitAnnotation(c){
        console.log(c.getText())
    }
    visitEquat(c) {
        this.maindef = c.children[0]
        let equation = this.visitChildren(c)[2]
        if(equation.expr){
            if(equation.maindef){
                equation = equation.data
            }else{
                equation = [...equation.data,`scoreboard players operation ${this.maindef} = ${name}${this.autoScoreboard}`]
            }
        }else{
            equation = `scoreboard players operation ${this.maindef} = ${equation}`
        }
        // console.log(equation)
        return equation
    }
    visitExpr(c) {
        if(c.children.length == 3){
            const x = this.visitChildren(c)
            console.log(x)
            if(!x[0] && !x[2]){
                return {
                    'expr':true,
                    'maindef':x[1].maindef,
                    'data':[
                        ...x[1].data
                    ]
                }
            }
            if(!x[0].expr && !x[2].expr){
                this.autoScoreboard += 1
                return {
                    'expr':true,
                    'maindef':false,
                    'data':[
                        `scoreboard players operation ${name}${this.autoScoreboard} = ${this.text(c,0)}`,
                        `scoreboard players operation ${name}${this.autoScoreboard} ${this.text(c,1)}= ${this.text(c,2)}`
                    ]
                }
            }else{
                if(x[0].expr && !x[2].expr){
                    if(x[0].maindef){
                        return {
                            'expr':true,
                            'maindef':true,
                            'data':[
                                ...x[0].data,
                                `scoreboard players operation ${this.maindef} ${this.text(c,1)}= ${x[2]}`
                            ]
                        }
                    }
                    if(this.text(c,1).search(/\/|\*\%/)>-1){
                        this.autoScoreboard += 1
                        return {
                            'expr':true,
                            'maindef':false,
                            'data':[
                                ...x[0].data,
                                `scoreboard players operation ${name}${this.autoScoreboard} = ${name}${this.autoScoreboard-1}`,
                                `scoreboard players operation ${name}${this.autoScoreboard} ${this.text(c,1)}= ${x[2]}`,
                            ]
                        }
                    }
                    return {
                        'expr':true,
                        'maindef':false,
                        'data':[
                            ...x[0].data,
                            `scoreboard players operation ${name}${this.autoScoreboard} ${this.text(c,1)}= ${x[2]}`,
                        ]
                    }
                    // return {
                    //     'expr':true,
                    //     'maindef':true,
                    //     'data':[
                    //         ...x[0].data,
                    //         `scoreboard players operation ${this.maindef} = ${x[2]}`,
                    //         `scoreboard players operation ${this.maindef} ${this.text(c,1)}= ${name}${this.autoScoreboard}`
                    //     ]
                    // }
                }
                if(!x[0].expr && x[2].expr){
                    if(x[2].maindef){
                        return {
                            'expr':true,
                            'maindef':true,
                            'data':[
                                ...x[2].data,
                                `scoreboard players operation ${this.maindef} ${this.text(c,1)}= ${x[0]}`
                            ]
                        }
                    }
                    if(this.text(c,1).search(/\/|\*\%/)>-1){
                        this.autoScoreboard += 1
                        return {
                            'expr':true,
                            'maindef':false,
                            'data':[
                                ...x[2].data,
                                `scoreboard players operation ${name}${this.autoScoreboard} = ${name}${this.autoScoreboard-1}`,
                                `scoreboard players operation ${name}${this.autoScoreboard} ${this.text(c,1)}= ${x[0]}`,
                            ]
                        }
                    }
                    if(this.text(c,1)=='-'){
                        this.autoScoreboard += 1
                        return {
                            'expr':true,
                            'maindef':false,
                            'data':[
                                ...x[2].data,
                                `scoreboard players operation ${name}${this.autoScoreboard} = ${x[0]}`,
                                `scoreboard players operation ${name}${this.autoScoreboard} ${this.text(c,1)}= ${name}${this.autoScoreboard-1}`,
                            ]
                        }
                    }
                    return {
                        'expr':true,
                        'maindef':false,
                        'data':[
                            ...x[2].data,
                            `scoreboard players operation ${name}${this.autoScoreboard} ${this.text(c,1)}= ${x[0]}`,
                        ]
                    }
                    // return {
                    //     'expr':true,
                    //     'maindef':true,
                    //     'data':[
                    //         ...x[2].data,
                    //         `scoreboard players operation ${this.maindef} = ${x[0]}`,
                    //         `scoreboard players operation ${this.maindef} ${this.text(c,1)}= ${name}${this.autoScoreboard}`
                    //     ]
                    // }
                }
                if(x[0].maindef || x[2].maindef)
                return {
                    'expr':true,
                    'maindef':true,
                    'data':[
                        ...x[0].data,
                        ...x[2].data,
                        `scoreboard players operation ${this.maindef} ${this.text(c,1)}= ${name}${this.autoScoreboard}`
                    ]
                }
                return {
                    'expr':true,
                    'maindef':true,
                    'data':[
                        ...x[0].data,
                        ...x[2].data,
                        `scoreboard players operation ${this.maindef} = ${name}${this.autoScoreboard-1}`,
                        `scoreboard players operation ${this.maindef} ${this.text(c,1)}= ${name}${this.autoScoreboard}`
                    ]
                }
            }
        }
        return c.getText()
    }
}

//console.log((tree.accept(new Visitor)));
// console.log(JSON.stringify((tree.accept(new Visitor)).flat(Infinity).join('\n')))
console.log((tree.accept(new Visitor)).flat(Infinity).join('\n'))
