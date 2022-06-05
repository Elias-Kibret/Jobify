import User from '../models/User.js'
import { BadRequestError} from '../errors/index.js'
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
                res.status(201).json({user:{
                    email:user.email,
                    name:user.lastName,
                    lastName:user.lastName,
                    location:user.location
                },token})
            
}


 const login =async(req,res)=>{
    res.json('log in')
}

 const updateUser =async(req,res)=>{
        res.json('uses has been updated')
      
}

export  {register,login,updateUser}