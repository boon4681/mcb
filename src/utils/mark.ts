import chalk from "chalk"


export const mark = () => {
    const x = `┌────┐\n│ MCB│\n└────┘`.split('\n')
    console.log(
        chalk.cyan(
        x.map((a,i) => {
            const n = `\x1b[${3-i}A\x1b[${process.stdout.columns - 10}C${a}`
            const b = `\x1b[${3-i}B\x1b[${process.stdout.columns - 10 + a.length}D`
            return n + b
        }).join(''))
    )
}