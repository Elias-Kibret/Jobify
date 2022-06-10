export const auth=async(req,res,next)=>{
    console.log("authenticated user")
    next()
}