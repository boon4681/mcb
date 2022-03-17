import crypto from 'crypto'

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default () => {
    let id = ''
    crypto.randomFillSync(Buffer.allocUnsafe(12)).map((a)=>{
        id += chars[a & 61]
    })
    return id
}