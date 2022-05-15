import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { mcbLexer, mcbParser } from './grammar'
import Visitor from './mcb/Visitor'
import { genericErrorHandling } from './errors/genericErrorHandling'
import ParserErrorListener from './errors/ParserErrorListener'
import SCBuilder from './mcb/SCBuilder'
import { writeFileSync,readFileSync, mkdirSync, existsSync } from 'node:fs'
import path from 'node:path';
import glob from 'glob'
import { loadMCBpack } from './mcb/mcbpack'

const FnWalker = (input:any,func: Function) => {
    for (var i in input) {
        if (!!input[i] && typeof(input[i])=="object") {
            if(input[i].value.type){
                FnWalker(input[i],func);
            }else{
                func(input[i])
            }
        }
    }
}

let SCIDRegistry: Record<string, { id: number }> = {}


const runOption = 'build'

loadMCBpack('./test/mcbpack.json').then(config=>{
    const option = config.compiler[runOption]
    if(!option){

    }
})


const compiler = (filepath:string) =>{
    const parPath = path.parse(filepath)
    const input = readFileSync(filepath,'utf-8')
    const inputStream = new ANTLRInputStream(input);
    inputStream.name = filepath
    const error = new genericErrorHandling(inputStream);
    const parserErrorListener = new ParserErrorListener(inputStream)
    const lexer = new mcbLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new mcbParser(tokenStream);
    parser.removeErrorListeners()
    parser.addErrorListener(parserErrorListener)
    const tree = parser.mcb();
    const scBuilder = new SCBuilder("","","",error);
    const visitor = new Visitor(scBuilder,error)
    visitor.SCIDRegistry = SCIDRegistry
    const str = tree.accept(visitor)
    SCIDRegistry = visitor.SCIDRegistry
    const outputDir = path.join(parPath.dir,parPath.name)
    const outputLoops = path.join(outputDir,'loops')
    const outputIFs = path.join(outputDir,'ifs')
    
    if(Object.keys(str.Functions).length > 0){
        if(!existsSync(outputDir)){
            mkdirSync(outputDir,{recursive:true})
        }
        FnWalker(str.Functions,(e:any)=>{
            writeFileSync(path.join(outputDir,`${e.name}.mcfunction`),e.value.join('\n'))
        })
    }
    
    if(Object.keys(str.Loops).length > 0){
        if(!existsSync(outputLoops)){
            mkdirSync(outputLoops,{recursive:true})
        }
        for (const e in str.Loops){
            for(const m in str.Loops[e]){
                writeFileSync(path.join(outputLoops,`${m}.mcfunction`),str.Loops[e][m].join('\n'))
            }
        }
    }
    
    if(Object.keys(str.IFs).length > 0){
        if(!existsSync(outputIFs)){
            mkdirSync(outputIFs,{recursive:true})
        }
        for (const e in str.IFs){
            for(const m in str.IFs[e]){
                writeFileSync(path.join(outputIFs,`${m}.mcfunction`),str.IFs[e][m].join('\n'))
            }
        }
    }
    writeFileSync(path.join(parPath.dir,`${parPath.name}.json`),JSON.stringify(str,null,5))
}

glob('./test/**/*.mcb', (er, files) => {
    if (!er) {
        for (const file of files) compiler(file)
    }
})