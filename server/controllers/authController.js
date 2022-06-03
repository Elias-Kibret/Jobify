import User from '../models/User.js'
import {StatusCodes} from 'http-status-codes'
const register=async(req,res,next)=>{

                const user=await User.create(req.body)
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