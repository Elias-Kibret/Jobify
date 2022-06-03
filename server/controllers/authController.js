const register=async(req,res)=>{
        res.json('Register')
    
}
 const login =async(req,res)=>{

    res.json('log in')

}

 const updateUser =async(req,res)=>{

    
        res.json('uses has been updated')
    
}

export  {register,login,updateUser}