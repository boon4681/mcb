import chalk from "chalk"

export const critical = (options: {
    name?: string,
    message?: string,
    path?: string,
    source?: string,
    position?: {
        line: number | string,
        column: number | string
    },
    preSpace?: number
}) => {
    const { name, message, path, source, position, preSpace } = options
    const space = new Array(preSpace).fill(" ").join("")
    console.log(
        chalk.bgRed.rgb(255, 255, 255)(" ERROR "),
        chalk.red(`${name || "CriticalError"}`),
        `${chalk.cyan(path)}:${position ? `${chalk.yellow(position.line)}:${chalk.yellow(position.column)}` : ''}\n${source ? `${chalk.red(source)}\n` : ''}` +
        space + (message ? chalk.red('└──', message) : '')
    )
    return () => {
        process.exit(1)
    }
}