import { writeFileSync, readFileSync, mkdirSync, existsSync, appendFileSync, rmSync } from 'node:fs'
import * as errors from '../errors/errors'

export const isExist = (f_path:string)=>{
    return existsSync(f_path)
}

export const makeNotExistDir = (f_path:string|string[]) =>{
    try {
        if(typeof f_path == 'object'){
            for (const i of f_path) {
                if (!existsSync(i)) mkdirSync(i, { recursive: true })
            }
            return true
        }
        if (!existsSync(f_path)) mkdirSync(f_path, { recursive: true })
    } catch (error:any) {
        errors.critical(
            {
                message:error
            }
        )
    }
}