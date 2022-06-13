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
     //receive the login Credentials from req.body


     const{email,password}=req.body
     //check if the is email and password provided 
    if(!email || !password){
        // if the is no email or password or even both
        // this throw error 
        throw new BadRequestError('Please provide all values')
    }
    // Nice Know we have email and password but we have to check weather the user really register or not
    // we can do this using build in method of moongose that is findOne 
    // hence email is unique if the user is already registered we can find him easily 

    const user=await User.findOne({email}).select('+password ')
    // here what does .select('+password') do ...when we create schema , we specify password select:false , which mean when we send res back as json we don't what to return the password  
    // for security reason
    // but we know we need to check password , here we need to return the password for the DB
    // the we have to compare it with the one the user provide 
    
    // if(user){
    //     User.comparePassword(user.password,password)
    // }
    if(!user){
        // if there is no user we throw error that is Invalid credentials 
        throw new UnauthenticatedError('Invalid Credentials')
    }
    console.log(user)
    // we are going to do check the password is correct or not 
    const isPasswordCorrect=await user.comparePassword(password)
    
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token=user.createJWT()
    user.password=undefined;
res.status(StatusCodes.OK ).json({user,token,location:user.location})
}

 const updateUser =async(req,res)=>{
     const {email,name,lastName,location}=req.body
     if(!email  || !lastName || !location){

        throw new BadRequestError('Please provide all values')
    }
      
    const user=await User.findOne({_id:req.user.userId})
    user.email=email
    user.name=name
    user.lastName=lastName
    user.location=location
    const token= user.createJWT()
    res.status(StatusCodes.OK ).json({user,token,location:user.location})


      
}

export  {register,login,updateUser}