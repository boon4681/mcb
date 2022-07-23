import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { mcbLexer, mcbParser } from './grammar'
import Visitor from './mcb/Visitor'
import { genericErrorHandling } from './errors/genericErrorHandling'
import ParserErrorListener from './errors/ParserErrorListener'
import SCBuilder from './mcb/SCBuilder'
import { writeFileSync, readFileSync, mkdirSync, existsSync, appendFileSync, rmSync } from 'node:fs'
import path from 'node:path';
import { Glob } from 'glob'
import { loadMCBpack } from './mcb/mcbpack'
import * as errors from './errors/errors'
import { makeNotExistDir } from './utils/file'
import { load_commands } from './minecraft/meta'

const FnWalker = (input: any, func: Function) => {
    for (var i in input) {
        if (!!input[i] && typeof (input[i]) == "object") {
            if (input[i].value.type) {
                FnWalker(input[i], func);
            } else {
                func(input[i])
            }
        }
    }
}

let SCIDRegistry: Record<string, { id: number }> = {}
let Loads: string[] = []
let Ticks: string[] = []

const compiler = (namespace: string, filepath: string, output: string, root: string,mc_commands:any) => {
    const parPath = path.parse(path.normalize(filepath))
    const _root = parPath.dir.replace(root, '')

    const input = readFileSync(filepath, 'utf-8')
    const inputStream = new ANTLRInputStream(input);
    inputStream.name = root

    const lexer = new mcbLexer(inputStream);
    lexer.setCommands(mc_commands)
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new mcbParser(tokenStream);

    const error = new genericErrorHandling(inputStream);
    const parserErrorListener = new ParserErrorListener(inputStream)
    parser.removeErrorListeners()
    parser.addErrorListener(parserErrorListener)

    const tree = parser.mcb();
    const scBuilder = new SCBuilder("", "", "", error);
    const visitor = new Visitor(namespace, path.join(_root,parPath.name).split(path.sep).filter(a=>a!='').join('/'), scBuilder, error)
    visitor.SCIDRegistry = SCIDRegistry
    const str = tree.accept(visitor)
    SCIDRegistry = visitor.SCIDRegistry
    const outFNDir = path.join(output, _root, parPath.name)
    const outLoops = path.join(outFNDir, 'loops')
    const outIFs = path.join(outFNDir, 'ifs')

    if (Object.keys(str.Functions).length > 0) {
        makeNotExistDir(outFNDir)
        FnWalker(str.Functions, (e: any) => {
            writeFileSync(path.join(outFNDir, `${e.name}.mcfunction`), e.value.join('\n'))
        })
    }

    if (Object.keys(str.Loops).length > 0) {
        makeNotExistDir(outLoops)
        for (const e in str.Loops) {
            for (const m in str.Loops[e]) {
                writeFileSync(path.join(outLoops, `${m}.mcfunction`), str.Loops[e][m].value.join('\n'))
            }
        }
    }

    if (Object.keys(str.IFs).length > 0) {
        makeNotExistDir(outIFs)
        for (const e in str.IFs) {
            for (const m in str.IFs[e]) {
                writeFileSync(path.join(outIFs, `${m}.mcfunction`), str.IFs[e][m].value.join('\n'))
            }
        }
    }
    Loads.push(...str.Load)
    Ticks.push(...str.Tick)
    writeFileSync(path.join(output, 'load.mcfunction'), Loads.join('\n'))
    writeFileSync(path.join(output, 'tick.mcfunction'), Ticks.join('\n'))
    const mcb_module = path.resolve(root, '..', '.mcb_module')
    const mcb_module_mcb = path.resolve(mcb_module, '.mcb')
    const mcb_module_debug = path.resolve(mcb_module_mcb, 'debug')
    const mcb_debug_file = path.join(mcb_module_debug, _root)

    makeNotExistDir([mcb_module,mcb_module_mcb,mcb_module_debug,mcb_debug_file])
    writeFileSync(path.join(mcb_debug_file, `${parPath.name}.json`), JSON.stringify(str, null, 5))
}

const runOption = 'build-test'

loadMCBpack('./test').then( async ({ config, root }) => {
    const option = config.compiler[runOption]
    if (!option) {
        errors.critical({
            name: 'MissingOptions',
            message: `Missing '${runOption}' option in compiler options`,
            preSpace: 2
        })()
    } else {
        if (existsSync(option.output)) rmSync(path.join(option.output, '/'), { recursive: true })
        const mcfunction_outDir = path.join(option.output, `data/${config.name}/functions`)
        const mc_outDir = path.join(option.output, `data/minecraft`)
        const mcTag_function = path.join(mc_outDir, `tags/functions`);
        const mc_commands = await load_commands(config.version,root);
        [option.root].flat(1).forEach(r => {
            new Glob('**/*.mcb', {
                root: path.join(root, r)
            }, (er, files) => {
                if (!er) {
                    for (const file of files) {
                        compiler(config.name, file, mcfunction_outDir, path.join(root, r),mc_commands)
                    }
                }
            })
        })
        if (!existsSync(mcTag_function)) mkdirSync(mcTag_function, { recursive: true })
        writeFileSync(path.join(option.output, 'pack.mcmeta'), JSON.stringify(
            {
                "pack": {
                    "pack_format": Number(config.version[config.version.length - 1]),
                    "description": config.description
                }
            }, null, 4))
        writeFileSync(path.join(mcTag_function, 'load.json'), JSON.stringify({
            values: [
                `${config.name}:load`
            ]
        }, null, 4))
        writeFileSync(path.join(mcTag_function, 'tick.json'), JSON.stringify({
            values: [
                `${config.name}:tick`
            ]
        }, null, 4))
    }
})