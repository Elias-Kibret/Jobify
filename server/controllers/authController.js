import User from '../models/User.js'
import {StatusCodes} from 'http-status-codes'

class CustomAPIError extends Error{
    constructor(message){
        super(message)
        
    }
}
class BadRequestError
 extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode=StatusCodes.BAD_REQUEST
    }
}
class NotFoundError extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode=StatusCodes.NOT_FOUND
    }
}


const register=async(req,res,next)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
        throw new  BadRequestError('please provide all values')
    }
                const user=await User.create({name,email,password})
                res.status(201).json({user})
                res.status(500).json({msg:'there wa na error'})
}
 const login =async(req,res)=>{
    res.json('log in')
}

 const updateUser =async(req,res)=>{
        res.json('uses has been updated')
}

export  {register,login,updateUser}