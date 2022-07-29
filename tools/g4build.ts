import chalk from 'chalk';
import { watch } from 'chokidar'
import glob from 'glob'
import { spawn, execSync } from 'node:child_process';
import * as path from 'node:path'

const root = path.join(__dirname,'..')

const builder = (file: string) => {
    try {
        console.log(chalk.greenBright(`Building ${file}`))
        const child = execSync(`antlr4ts -visitor ${path.join(root,file)} -o ./src/grammar/lib`)
        console.log(child.toString(), "\n")
    } catch (error) {
        
    }
}

const watcher = watch('./src/grammar/*.g4')
watcher
    .on('change', (p) => {
        console.log(chalk.greenBright(`[${new Date().toISOString()}] File change detected.`))
        glob('./src/grammar/*.g4', (er, files) => {
            if (!er) {
                for (const file of files) builder(file)
            }
        })
    })


glob('./src/grammar/*.g4', (er, files) => {
    if (!er) {
        for (const file of files) builder(file)
    }
})