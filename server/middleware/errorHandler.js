import {StatusCodes} from 'http-status-codes'
export const errorHandler=(err,req,res,next)=>{
    console.log(err)
    const defaultError={
        statusCode:StatusCodes.INTERNAL_SERVER_ERROR,
        msg:'Something wend wrong ,try again later'
    }
     res.status(defaultError.statusCode).json({msg:defaultError})
}