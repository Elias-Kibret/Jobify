import { useState,useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import { NewLogo,Alert,FormRow } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"
import { useAppContext } from "../context/appContext"



const initialState={
    name:'',
    email:'',
    password:'',
    isMember:true,
    
}

const Register = () => {
    const [values,setValues]=useState(initialState);
            //  global state and useNavigate
            const navigate=useNavigate()

const {user,isLoading,showAlert,displayAlert,setUpUser}=useAppContext()

    
    const toggleMember=()=>{
        setValues({...values,isMember:!values.isMember})
    }        


    const handleChange=(e)=>{
    setValues({...values,[e.target.name]:e.target.value})
    }      
    
    const onSubmit=(e)=>{
        e.preventDefault()
        const {name,email,password,isMember}=values
        if(!email || !password || (!isMember && !name)){
        displayAlert()
        return

    }
    const currentUser={name,email,password}
    if(isMember){
    setUpUser({currentUser,endPoint:'login',alertText:'User login successful redirecting...'})
    }
    else{
        setUpUser({currentUser,endPoint:'register',alertText:'User Created successfully redirect...'})
    }

    }

useEffect(()=>{
    if(user){
        setTimeout(()=>{
            navigate('/ ')
        },3000)
    }
},[user,navigate])
    return (
    <Wrapper className="full-page">
        
        <form className="form" onSubmit={onSubmit}>
            <NewLogo/>
            <h3>{values.isMember?"Login":"Register"}</h3>
            {showAlert&&<Alert/>}
            {/* name input */}
            {!values.isMember&&(
            <FormRow 
            type="text" 
            name="name"
            value={values.name} 
            handleChange={handleChange}
        />
            )}


            {/* email input */}

            <FormRow 
                type="email" 
                name="email"
                value={values.email} 
                handleChange={handleChange}
            />

            {/* password input */}
            <FormRow 
                type="password" 
                name="password"
                value={values.password} 
                handleChange={handleChange}
            />

            

            <button type="submit" className="btn btn-block" disabled={isLoading}>Submit</button>
            <p>
                {values.isMember?"Not a member yet ?":"Already a member?"}
                <button type="button" onClick={toggleMember} className="member-btn">
                    {values.isMember?"Register":"Login"}
                </button>
            </p>
        </form>

    </Wrapper>
  )
}

export default Register