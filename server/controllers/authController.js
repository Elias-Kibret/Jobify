const register=async(req,res)=>{
        res.send('Register')
    
}
 const login =async(req,res)=>{

    res.send('log in')

}

 const updateUser =async(req,res)=>{

    
        res.send('uses has been updated')
    
}

export  {register,login,updateUser}