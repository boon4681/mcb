import chalk from 'chalk'

const ERR = (...arg) => console.log(chalk.red("Error"),...arg)

export {
    ERR
}