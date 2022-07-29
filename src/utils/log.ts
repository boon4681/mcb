import chalk from "chalk"


export const log = {
    error: (...args: any) => {
        console.log(chalk.bgRed.rgb(255, 255, 255)(" ERROR "), ...args)
    },
    info: (...args: any) => {
        console.log(chalk.bgBlue.rgb(255, 255, 255)(" INFO "), ...args)
    },
    warn: (...args: any) => {
        console.log(chalk.bgYellow.black(" WARN "), ...args)
    },
    succeed: (...args: any) => {
        console.log(chalk.bgGreen.black(" DONE "), ...args)
    },
    hi: (...args: any) => {
        return (color: chalk.ChalkFunction) => {
            return (a: string) => console.log(color(` ${a} `), ...args)
        }
    }
}