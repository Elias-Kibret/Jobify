export const errorHandler=(err,req,res,next)=>{
    console.log(err)
    res.status(500).json({mesg:'there was an error'})

}