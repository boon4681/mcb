import chalk from "chalk"


export const log = {
    error: (...args: any) => {
        console.log(chalk.bgRed.rgb(255, 255, 255)(" ERROR "), ...args)
    },
    info: (...args: any) => {
        console.log(chalk.bgBlue.rgb(255, 255, 255)(" INFO "), ...args)
    },
    warn: (...args: any) => {
        console.log(chalk.bgYellow.rgb(255, 255, 255)(" WARN "), ...args)
    },
    succeed: (...args: any) => {
        console.log(chalk.bgGreen.rgb(255, 255, 255)(" SUCCESS "), ...args)
    }
}