import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { McbContext, mcbLexer, mcbParser } from './grammar'
import Visitor from './mcb/visitor'
import { genericErrorHandling } from './errors/genericErrorHandling'
import ParserErrorListener from './errors/ParserErrorListener'
import SCBuilder from './mcb/scoreboardBuilder'
import { writeFileSync, readFileSync, mkdirSync, existsSync, appendFileSync, rmSync } from 'node:fs'
import path from 'node:path';
import { makeNotExistDir } from './utils/file'
import { load_commands, load_version } from './minecraft/meta'
import { DebugLogger } from './grammar/debug'
import { ParseTreeWalker } from 'antlr4ts/tree'
import ora from 'ora';
import chalk from 'chalk';
import { log } from './utils/log';

const FnWalker = (input: any, func: Function) => {
    for (const i in input) {
        if (!!input[i] && typeof (input[i]) == "object") {
            if (input[i].value.type) {
                FnWalker(input[i], func);
            } else {
                func(input[i])
            }
        }
    }
}

export class MCB {
    private SCIDRegistry: Record<string, { id: number }> = {}
    private Loads: string[] = []
    private Ticks: string[] = []
    MCB: Set<string> = new Set<string>()
    private output: string = ""
    private commands: any

    private workspace = process.cwd()
    private mcb_module = path.resolve(this.workspace, '.mcb_module')
    private mcb_module_mcb = path.resolve(this.mcb_module, '.mcb')
    private mcb_module_debug = path.resolve(this.mcb_module_mcb, 'debug')

    constructor(private namepace: string, private mcVersion: string, output: string, private debug: boolean) {
        this.output = path.resolve(this.workspace, output)
    }

    async load_resource() {
        let spinner = ora('loading minecraft version').start()
        spinner.color = 'yellow'
        await new Promise((resolve) => setTimeout(resolve, 500))
        const version = await load_version(this.mcVersion, this.workspace)
        if (version == false) {
            spinner.stopAndPersist({ 'prefixText': chalk.red('×'), text: '\b\b' + spinner.text })
        } else {
            spinner.stopAndPersist({ 'prefixText': chalk.green('√'), text: '\b\b' + spinner.text + ' ' + chalk.yellow(version.release_target) })
        }
        spinner = ora('loading minecraft data').start()
        spinner.color = 'yellow'
        await new Promise((resolve) => setTimeout(resolve, 500))
        this.commands = await load_commands(this.mcVersion, this.workspace)
        if (this.commands == false) {
            spinner.stopAndPersist({ 'prefixText': chalk.red('×'), text: '\b\b' + spinner.text })
        } else {
            spinner.stopAndPersist({ 'prefixText': chalk.green('√'), text: '\b\b' + spinner.text })
        }
        if (version == false || this.commands == false) {
            process.exit(1)
        }
        return version
    }

    compile(root: string, dir: string, file_name: string) {
        return new Promise(async (resolve) => {
            const parsed_file_name = path.parse(file_name)
            const output = path.join(dir, parsed_file_name.name)
            const inputStream = this.createInputStream(path.relative(this.workspace, file_name))

            const { tokens } = this.createLexer(inputStream)
            if (this.debug) {
                const inputStream = this.createInputStream(path.relative(this.workspace, file_name))
                const { tokens, lexer } = this.createLexer(inputStream)
                const mcb_debug_file = path.join(this.mcb_module_debug, root, dir)
                const tokenslist = lexer.getAllTokens()
                const debug = tokenslist.map(a => {
                    return `[${a.line}:${a.charPositionInLine}] ${JSON.stringify(a.text)} -> ` + lexer.vocabulary.getSymbolicName(a.type);
                }).join('\n')
                makeNotExistDir([this.mcb_module_debug, mcb_debug_file])
                writeFileSync(path.join(mcb_debug_file, `${parsed_file_name.name}.lexer.log`),
                    "// Lexer-Log\n" +
                    `${debug}\n`
                )
            }

            const parser = this.createParser(tokens, inputStream)
            const error = new genericErrorHandling(inputStream)
            const scoreboardBuilder = new SCBuilder(error);
            const visitor = new Visitor(
                this.namepace,
                output.split(path.sep).filter(a => a).join('/'),
                parsed_file_name.name,
                scoreboardBuilder,
                error,
                this.debug
            )
            log.info(chalk.cyan('> ', path.relative(this.workspace, file_name)))
            visitor.SCIDRegistry = this.SCIDRegistry
            visitor.visitTerminal = () => {
                resolve(null)
            }
            const tree = await parser.mcb()
            const result = tree.accept(visitor)
            this.SCIDRegistry = visitor.SCIDRegistry
            const out_dataFN = path.join(this.output, `data/${this.namepace}/functions`)
            const outFNDir = path.join(out_dataFN, output)
            const outLoops = path.join(outFNDir, 'loops')
            const outIFs = path.join(outFNDir, 'ifs')
            makeNotExistDir(out_dataFN)
            const m = [...result.MCB.values()]
            m.forEach(a => {
                this.MCB.add(a)
            })
            this.Loads.push(...result.Load)
            this.Ticks.push(...result.Tick)

            if (Object.keys(result.Functions).length > 0) {
                makeNotExistDir(outFNDir)
                FnWalker(result.Functions, (e: any) => {
                    writeFileSync(path.join(outFNDir, `${e.name}.mcfunction`), e.value.join('\n'))
                })
            }

            if (Object.keys(result.Loops).length > 0) {
                makeNotExistDir(outLoops)
                for (const e in result.Loops) {
                    for (const m in result.Loops[e]) {
                        writeFileSync(path.join(outLoops, `${m}.mcfunction`), result.Loops[e][m].value.join('\n'))
                    }
                }
            }

            if (Object.keys(result.IFs).length > 0) {
                makeNotExistDir(outIFs)
                for (const e in result.IFs) {
                    for (const m in result.IFs[e]) {
                        writeFileSync(path.join(outIFs, `${m}.mcfunction`), result.IFs[e][m].value.join('\n'))
                    }
                }
            }
            writeFileSync(path.join(out_dataFN, 'load.mcfunction'), [...this.MCB.values(), ...this.Loads].join('\n'))
            writeFileSync(path.join(out_dataFN, 'tick.mcfunction'), this.Ticks.join('\n'))
            makeNotExistDir([this.mcb_module, this.mcb_module_mcb])
            if (this.debug) {
                const mcb_debug_file = path.join(this.mcb_module_debug, root, dir)
                const debug = new DebugLogger(tokens, parser)
                ParseTreeWalker.DEFAULT.walk(debug, tree)
                makeNotExistDir([this.mcb_module, this.mcb_module_mcb, this.mcb_module_debug, mcb_debug_file])
                console.log(mcb_debug_file, parsed_file_name.name)
                writeFileSync(path.join(mcb_debug_file, `${parsed_file_name.name}.log`),
                    "// Parser-Log\n" +
                    `${debug.log}\n` +
                    "// Compiled-Stack\n" +
                    `${JSON.stringify(result, null, 5)}`
                )
            }
        })
    }

    createInputStream(filepath: string) {
        const input = readFileSync(filepath, 'utf-8')
        const stream = new ANTLRInputStream(input)
        stream.name = filepath
        return stream;
    }

    createLexer(inputStream: ANTLRInputStream) {
        const lexer = new mcbLexer(inputStream);
        lexer.setCommands(this.commands)
        const tokens = new CommonTokenStream(lexer);
        return {
            lexer,
            tokens
        }
    }

    createParser(tokens: CommonTokenStream, inputStream: ANTLRInputStream) {
        const parser = new mcbParser(tokens)
        const parserErrorListener = new ParserErrorListener(inputStream)
        parser.removeErrorListeners()
        parser.addErrorListener(parserErrorListener)
        return parser
    }
}

// const compiler = (namespace: string, filepath: string, output: string, root: string, mc_commands: any) => {
//     const parPath = path.parse(path.normalize(filepath))
//     const _root = parPath.dir.replace(root, '')

//     const input = readFileSync(filepath, 'utf-8')
//     const inputStream = new ANTLRInputStream(input);
//     inputStream.name = root

//     const lexer = new mcbLexer(inputStream);
//     lexer.setCommands(mc_commands)
//     const tokenStream = new CommonTokenStream(lexer);
//     const parser = new mcbParser(tokenStream);

//     const error = new genericErrorHandling(inputStream);
//     const parserErrorListener = new ParserErrorListener(inputStream)
//     parser.removeErrorListeners()
//     parser.addErrorListener(parserErrorListener)

//     const tree = parser.mcb();
//     const scBuilder = new SCBuilder("", "", "", error);
//     const visitor = new Visitor(namespace, path.join(_root, parPath.name).split(path.sep).filter(a => a != '').join('/'), scBuilder, error)
//     visitor.SCIDRegistry = SCIDRegistry
//     const str = tree.accept(visitor)
//     SCIDRegistry = visitor.SCIDRegistry
//     const outFNDir = path.join(output, _root, parPath.name)
//     const outLoops = path.join(outFNDir, 'loops')
//     const outIFs = path.join(outFNDir, 'ifs')

//     if (Object.keys(str.Functions).length > 0) {
//         makeNotExistDir(outFNDir)
//         FnWalker(str.Functions, (e: any) => {
//             writeFileSync(path.join(outFNDir, `${ e.name }.mcfunction`), e.value.join('\n'))
//         })
//     }

//     if (Object.keys(str.Loops).length > 0) {
//         makeNotExistDir(outLoops)
//         for (const e in str.Loops) {
//             for (const m in str.Loops[e]) {
//                 writeFileSync(path.join(outLoops, `${ m }.mcfunction`), str.Loops[e][m].value.join('\n'))
//             }
//         }
//     }

//     if (Object.keys(str.IFs).length > 0) {
//         makeNotExistDir(outIFs)
//         for (const e in str.IFs) {
//             for (const m in str.IFs[e]) {
//                 writeFileSync(path.join(outIFs, `${ m }.mcfunction`), str.IFs[e][m].value.join('\n'))
//             }
//         }
//     }
//     Loads.push(...str.Load)
//     Ticks.push(...str.Tick)
//     writeFileSync(path.join(output, 'load.mcfunction'), Loads.join('\n'))
//     writeFileSync(path.join(output, 'tick.mcfunction'), Ticks.join('\n'))
//     const mcb_module = path.resolve(_root, '..', '.mcb_module')
//     const mcb_module_mcb = path.resolve(mcb_module, '.mcb')
//     const mcb_module_debug = path.resolve(mcb_module_mcb, 'debug')
//     const mcb_debug_file = path.join(mcb_module_debug, _root)
//     const debug = new DebugLogger(tokenStream, parser)
//     ParseTreeWalker.DEFAULT.walk(debug,tree)
//     makeNotExistDir([mcb_module, mcb_module_mcb, mcb_module_debug, mcb_debug_file])
//     writeFileSync(path.join(mcb_debug_file, `${ parPath.name }.log`),
// `// Parser-Log
// ${debug.log}
// // Compiled-Stack
// ${JSON.stringify(str,null,5)}
// `)
// }

// const runOption = 'build-test'

// loadmcbpack('./test').then(async ({ config, root }) => {
//     const option = config.compiler[runOption]
//     if (!option) {
//         errors.critical({
//             name: 'MissingOptions',
//             message: `Missing '${runOption}' option in compiler options`,
//             preSpace: 2
//         })()
//     } else {
//         if (existsSync(option.output)) rmSync(path.join(option.output, '/'), { recursive: true })
//         const mcfunction_outDir = path.join(option.output, `data/${config.name}/functions`)
//         const mc_outDir = path.join(option.output, `data/minecraft`)
//         const mcTag_function = path.join(mc_outDir, `tags/functions`);
//         const mc_commands = await load_commands(config.mcVersion, root);
//         [option.root].flat(1).forEach(r => {
//             new Glob('**/*.mcb', {
//                 root: path.join(root, r)
//             }, (er, files) => {
//                 if (!er) {
//                     for (const file of files) {
//                         compiler(config.name, file, mcfunction_outDir, path.join(root, r), mc_commands)
//                     }
//                 }
//             })
//         })
//         if (!existsSync(mcTag_function)) mkdirSync(mcTag_function, { recursive: true })
//         writeFileSync(path.join(option.output, 'pack.mcmeta'), JSON.stringify(
//             {
//                 "pack": {
//                     "pack_format": Number(config.mcVersion[config.mcVersion.length - 1]),
//                     "description": config.description
//                 }
//             }, null, 4))
//         writeFileSync(path.join(mcTag_function, 'load.json'), JSON.stringify({
//             values: [
//                 `${config.name}:load`
//             ]
//         }, null, 4))
//         writeFileSync(path.join(mcTag_function, 'tick.json'), JSON.stringify({
//             values: [
//                 `${config.name}:tick`
//             ]
//         }, null, 4))
//     }
// })