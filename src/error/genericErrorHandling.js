
import * as log from '../utils/log.js'
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