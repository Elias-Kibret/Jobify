import mongoose from "mongoose";


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
    unique:true,
},
password:{
    type:String,
    required:[true,'Please provide password'],
    minlength:6,
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

}


})