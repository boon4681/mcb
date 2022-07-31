let __data = {
    console: [],
    emit: []
}

const __log = (...args) => {
    __data.console.push(...args)
}
const __old = process.stdout.write
console.log = __log
Object.freeze(__log, console.log, __old)

__data.emit = [new Function(`function __main(){${process.env.code}}return __main()`)()].flat(1)
process.stdout.write = __old
process.stdout.write(JSON.stringify(__data))