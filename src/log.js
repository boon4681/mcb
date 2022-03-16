import chalk from 'chalk'

const ERR = (...arg) => console.log(chalk.red("error"),...arg)

export {
    ERR
}