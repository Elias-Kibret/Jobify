import User from '../models/User.js'
import { BadRequestError} from '../errors/index.js'
import { UnauthenticatedError } from '../errors/unauthenticated.js'
import { StatusCodes } from 'http-status-codes'
const register=async(req,res,next)=>{
    const {name,email,password}=req.body
    
    if(!name || !email || !password){
        throw new  BadRequestError('please provide all values')
    }
    const userAlreadyExists=await User.findOne({email});
    if(userAlreadyExists){
        throw new BadRequestError('Email already exist')
    }

                const user=await User.create({name,email,password})
                const token= user.createJWT()
                res.status(StatusCodes.CREATED).json({user:{
                    email:user.email,
                    name:user.lastName,
                    lastName:user.lastName,
                    location:user.location
                },token})
            
}


 const login =async(req,res)=>{
     const{email,password}=req.body
    if(!email || !password){
        throw new BadRequestError('Please provide all values')
    }
    const user=await User.findOne({email}).select('+password ')
    // if(user){
    //     User.comparePassword(user.password,password)
    // }
    if(!user){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    console.log(user)
    const isPasswordCorrect=await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token=user.createJWT()
    user.password=undefined;
res.status(StatusCodes.OK ).json({user,token,location:user.location})
}

 const updateUser =async(req,res)=>{
     console.log(req.user)
        res.json('uses has been updated')
      
}

export  {register,login,updateUser}