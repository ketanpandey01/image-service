import * as jwt from 'jsonwebtoken'
import { memoryCache } from '../utils/cache.js'

export const isAuthenticated = (req, res, next) => {
    const authorizationHeader = req.headers.authorization
    if(authorizationHeader){
        const token = authorizationHeader.replace('Bearer', '')
        jwt.verify(token, process.env.JWT_KEY, (err, decoded)=>{
            if(err){
                next('Invalid Token')
            } else {
                memoryCache.put('tenentId', decoded.tid)
                memoryCache.put('clientId', decoded.oid)
                next()
            }
        })
    } else {
        next('Not Authenticated')
    }
}
