
import * as log from '../log.js'
const critical = (expression) => {
    return function(callback,message){
        if(expression){
            callback()
        }else{
            log.ERR(message)
            process.exit(1)
        }
    }
}


export {
    critical
}