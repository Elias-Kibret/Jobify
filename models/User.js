import mongoose from "mongoose";
import validator from 'validator'
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken'
const UserSchema=new mongoose.Schema({
name:{
    type:String,
    required:[true,'Please provide name'],
    minlength:3,
    maxlength:20,
    trim:true

},
email:{
    type:String,
    required:[true,'Please provide email'],
    validate:{
        validator:validator.isEmail,
        message:"Please provide valid email"
        },
        unique:true,
    },
    

password:{
    type:String,
    required:[true,'Please provide password'],
    minlength:6,
    select:false 
},
name:{
    type:String,
    required:[true,'Please Provide name'],
    minlength:3,
    maxlength:20,
    trim:true
},
lastName:{
    type:String,
    maxlength:20,
    trim:true,
    default:'lastName'
},
location:{
    type:String,
    maxlength:20,
    trim:true,
    default:'my city'

}


})


UserSchema.pre('save',async function(next){
    const salt=await bcryptjs.genSalt(10)
    this.password=await bcryptjs.hash(this.password,salt)
    console.log(this.password)
    next()
    
    
})
UserSchema.methods.createJWT=function(){
    return jwt.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})  
}

UserSchema.methods.comparePassword=async function(candidatePassword){
  const isMatch=await bcryptjs.compare(candidatePassword, this.password)
  return isMatch
}

export default mongoose.model("User",UserSchema)