import { UnauthenticatedError } from "../errors/index.js"
export const auth=async(req,res,next)=>{
const authHeader=req.headers.authorization
console.log(authHeader)
if(!authHeader){
   throw new UnauthenticatedError('Authentication Invalid')       
}
    next()
}