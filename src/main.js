import antlr4 from 'antlr4';
import mcbLexer from './.antlr/mcbLexer.js';
import mcbParser from './.antlr/mcbParser.js';
import mcbListener from './.antlr/mcbListener.js';
import mcbVisitor from './.antlr/mcbVisitor.js';

const input = `
#score x as dummy

x[input] = -30
x[sub] = x[input]*(180-x[input])
x[sine] = 4*x[sub]/(40500-x[sub])
`

const chars = new antlr4.InputStream(input);
const lexer = new mcbLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new mcbParser(tokens);
parser.buildParseTrees = true;
const tree = parser.chunk()
const name = 'mcb.sb.'
const temp = 'mcb.temp'
class Visitor extends mcbVisitor {
    dictScore = {}
    maindef = ''
    target = ''
    text(c, i) {
        if(c.type) return c.data
        if(c.children[i])
        return c.children[i].getText()
        return undefined
    }
    isINT(c){
        return c.type == 'INT'
    }
    getFloat(c){
        return this.text(c) + (this.isINT(c))?this.float:''
    }
    length(c){
        return c.children.length
    }
    visitDef(c) {
        switch(this.text(c,1)){
            case 'score':
                this.dictScore[this.text(c,2)] = {
                    type:'int',
                    autoInc:0
                }
                return `scoreboard objectives add ${this.text(c,2)} ${this.text(c,4)} ${this.text(c,5)?this.text(c,5):''}`
            case 'dict':
                return `data modify ${this.text(c,2)} ${this.text(c,5)} ${this.text(c,3)} set value {}`
            default:
                return `say @a mcb transpiler error ${c.getText()}`
        }
    }
    visitNumberInt(c){
        return {
            'type':'INT',
            'int':c.getText()
        }
    }
    visitExprVariable(c){
        return {
            'type':'VARIABLE',
            'maindef':this.text(c,0),
            'target':this.text(c,2)
        }
    }
    visitMinusNumberInt(c){
        return {
            'type':'INT',
            'int':c.getText()
        }
    }
    visitEquation(c) {
        const variable = this.visit(c.children[0])
        this.maindef = variable.maindef
        this.target = variable.target
        let equation = this.visit(c.children[2])
        console.log(equation)
        if(equation.done){
            if(equation.maindef){
                equation = equation.data
            }else{
                let data = equation.data
                data.push(this.scoreOperationSet(
                    this.target,
                    this.maindef,
                    undefined,
                    name+(this.dictScore[this.maindef].autoInc),
                    this.maindef
                ))
                equation = data
            }
        }else{
            if(this.isINT(equation)){
                equation = this.scoreSet(
                    this.target,
                    this.maindef,
                    equation.int
                )
            }else{
                equation = this.scoreOperationSet(
                    this.target,
                    this.maindef,
                    undefined,
                    equation.target,
                    equation.maindef
                )
            }
        }
        console.log("DONEDONEONDE")
        return equation
    }
    scoreSet(target,maindef,value){
        return `scoreboard players set ${target} ${maindef} ${value}`
    }
    scoreOperationSet(target1,maindef1,operation,target2,maindef2){
        return `scoreboard players operation ${target1} ${maindef1} ${operation||''}= ${target2} ${maindef2}`
    }
    visitExpr(c) {
        if(this.length(c)==3){
            const x = this.visitChildren(c)
            console.log(x)
            if(!x[0] && !x[2]){
                return {
                    done:true,
                    maindef:x[1].maindef,
                    data:x[1].data
                }
            }
            if(!x[0].done && !x[2].done){
                this.dictScore[this.maindef].autoInc+=1
                let data = []
                if(this.isINT(x[0])){
                    data.push(this.scoreSet(
                        name+(this.dictScore[this.maindef].autoInc),
                        this.maindef,
                        x[0].int
                    ))
                }else{
                    data.push(this.scoreOperationSet(
                        name+(this.dictScore[this.maindef].autoInc),
                        this.maindef,
                        undefined,
                        x[0].target,
                        x[0].maindef
                    ))
                }
                if(this.isINT(x[2])){
                    data.push(this.scoreSet(
                        temp,
                        this.maindef,
                        x[2].int
                    ))
                    data.push(this.scoreOperationSet(
                        name+(this.dictScore[this.maindef].autoInc),
                        this.maindef,
                        this.text(c,1),
                        temp,
                        this.maindef
                    ))
                }else{
                    data.push(this.scoreOperationSet(
                        name+(this.dictScore[this.maindef].autoInc),
                        this.maindef,
                        this.text(c,1),
                        x[2].target,
                        x[2].maindef
                    ))
                }
                return {
                    done:true,
                    maindef:false,
                    data
                }
            }
            if(x[0].done && !x[2].done){
                if(x[0].maindef){
                    let data = [...x[0].data]
                    if(this.isINT(x[2])){
                        data.push(this.scoreSet(
                            temp,
                            this.maindef,
                            x[2].int
                        ))
                        data.push(this.scoreOperationSet(
                            this.target,
                            this.maindef,
                            this.text(c,1),
                            temp,
                            this.maindef
                        ))
                    }else{
                        data.push(this.scoreOperationSet(
                            this.target,
                            this.maindef,
                            this.text(c,1),
                            x[2].target,
                            x[2].maindef
                        ))
                    }
                    return {
                        done:true,
                        maindef:true,
                        data
                    }
                }
                if(this.text(c,1).search(/\/|\*\%/)>-1){
                    this.dictScore[this.maindef].autoInc+=1
                    let data = [...x[0].data]
                    data.push(this.scoreOperationSet(
                        name+(this.dictScore[this.maindef].autoInc),
                        this.maindef,
                        undefined,
                        name+(this.dictScore[this.maindef].autoInc-1),
                        this.maindef
                    ))
                    if(this.isINT(x[2])){
                        data.push(this.scoreSet(
                            temp,
                            this.maindef,
                            x[2].int
                        ))
                        data.push(this.scoreOperationSet(
                            name+(this.dictScore[this.maindef].autoInc),
                            this.maindef,
                            this.text(c,1),
                            temp,
                            this.maindef
                        ))
                    }else{
                        data.push(this.scoreOperationSet(
                            name+(this.dictScore[this.maindef].autoInc),
                            this.maindef,
                            this.text(c,1),
                            x[2].target,
                            x[2].maindef
                        ))
                    }
                    return {
                        done:true,
                        maindef:false,
                        data
                    }
                }
                let data = [...x[0].data]
                if(this.isINT(x[2])){
                    data.push(this.scoreSet(
                        temp,
                        this.maindef,
                        x[2].int
                    ))
                    data.push(this.scoreOperationSet(
                        name+(this.dictScore[this.maindef].autoInc),
                        this.maindef,
                        this.text(c,1),
                        temp,
                        this.maindef
                    ))
                }else{
                    data.push(this.scoreOperationSet(
                        name+(this.dictScore[this.maindef].autoInc),
                        this.maindef,
                        this.text(c,1),
                        x[2].target,
                        x[2].maindef
                    ))
                }
                return {
                    done:true,
                    maindef:false,
                    data
                }
            }
            if(!x[0].done && x[2].done){
                if(x[2].maindef){
                    let data = [...x[2].data]
                    if(this.isINT(x[0])){
                        data.push(this.scoreSet(
                            temp,
                            this.maindef,
                            x[0].int
                        ))
                        data.push(this.scoreOperationSet(
                            this.target,
                            this.maindef,
                            this.text(c,1),
                            temp,
                            this.maindef
                        ))
                    }else{
                        data.push(this.scoreOperationSet(
                            this.target,
                            this.maindef,
                            this.text(c,1),
                            x[0].target,
                            x[0].maindef
                        ))
                    }
                    return {
                        done:true,
                        maindef:true,
                        data
                    }
                }
                if(this.text(c,1).search(/\/|\*\%/)>-1){
                    this.dictScore[this.maindef].autoInc+=1
                    let data = [...x[2].data]
                    data.push(this.scoreOperationSet(
                        name+(this.dictScore[this.maindef].autoInc),
                        this.maindef,
                        undefined,
                        name+(this.dictScore[this.maindef].autoInc-1),
                        this.maindef
                    ))
                    if(this.isINT(x[0])){
                        data.push(this.scoreSet(
                            temp,
                            this.maindef,
                            x[0].int
                        ))
                        data.push(this.scoreOperationSet(
                            name+(this.dictScore[this.maindef].autoInc),
                            this.maindef,
                            this.text(c,1),
                            temp,
                            this.maindef
                        ))
                    }else{
                        data.push(this.scoreOperationSet(
                            name+(this.dictScore[this.maindef].autoInc),
                            this.maindef,
                            this.text(c,1),
                            x[0].target,
                            x[0].maindef
                        ))
                    }
                    return {
                        done:true,
                        maindef:false,
                        data
                    }
                }
                if(this.text(c,1).search('-')>-1){
                    this.dictScore[this.maindef].autoInc+=1
                    let data = [...x[2].data]
                    if(this.isINT(x[0])){
                        data.push(this.scoreSet(
                            name+(this.dictScore[this.maindef].autoInc),
                            this.maindef,
                            x[0].int
                        ))
                    }else{
                        data.push(this.scoreOperationSet(
                            name+(this.dictScore[this.maindef].autoInc),
                            this.maindef,
                            undefined,
                            x[0].target,
                            x[0].maindef
                        ))
                    }
                    data.push(this.scoreOperationSet(
                        name+(this.dictScore[this.maindef].autoInc),
                        this.maindef,
                        this.text(c,1),
                        name+(this.dictScore[this.maindef].autoInc-1),
                        this.maindef
                    ))
                    return {
                        done:true,
                        maindef:false,
                        data
                    }
                }
                let data = [...x[2].data]
                if(this.isINT(x[0])){
                    data.push(this.scoreSet(
                        temp,
                        this.maindef,
                        x[0].int
                    ))
                    data.push(this.scoreOperationSet(
                        name+(this.dictScore[this.maindef].autoInc),
                        this.maindef,
                        this.text(c,1),
                        temp,
                        this.maindef
                    ))
                }else{
                    data.push(this.scoreOperationSet(
                        name+(this.dictScore[this.maindef].autoInc),
                        this.maindef,
                        this.text(c,1),
                        x[0].target,
                        x[0].maindef
                    ))
                }
                return {
                    done:true,
                    maindef:false,
                    data
                }
            }
            if(x[0].maindef || x[2].maindef){
                let data = [...x[0].data,...x[2].data]
                data.push(this.scoreOperationSet(
                    this.target,
                    this.maindef,
                    undefined,
                    name+(this.dictScore[this.maindef].autoInc),
                    this.maindef
                ))
                return {
                    done:true,
                    maindef:true,
                    data
                }
            }
            let data = [...x[0].data,...x[2].data]
            data.push(this.scoreOperationSet(
                this.target,
                this.maindef,
                undefined,
                name+(this.dictScore[this.maindef].autoInc-1),
                this.maindef
            ))
            data.push(this.scoreOperationSet(
                this.target,
                this.maindef,
                this.text(c,1),
                name+(this.dictScore[this.maindef].autoInc),
                this.maindef
            ))
            return {
                done:true,
                maindef:true,
                data
            }
        }
        return this.visitChildren(c)[0]
    }
}

//console.log((tree.accept(new Visitor)));
// console.log(JSON.stringify((tree.accept(new Visitor)).flat(Infinity).join('\n')))
console.log((tree.accept(new Visitor)).flat(Infinity).filter(a=>a!=null).join('\n'))
