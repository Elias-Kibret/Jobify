import { useState,useEffect } from "react"
import { NewLogo,Logo,Alert } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"


const initialState={
    name:'',
    email:'',
    password:'',
    isMember:true,
    showAlert:true
}

const Register = () => {
    const [values,setValues]=useState(initialState);
            //  global state and useNavigate
    const handleChange=(e)=>{
        console.log(e.target)
    }      
    
    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(e.target)
    }


    return (
    <Wrapper className="full-page">
        
        <form className="form" onSubmit={onSubmit}>
            <NewLogo/>
            <h3>
                 Login
            </h3>
            {/* name input */}
            <div className="form-row">
                <label htmlFor="name" className="form-label">
                    name
                </label>
                <input type="text" value={values.name} name="name" 
                onChange={handleChange}
                className="form-input"
                />
            </div>
            <button type="submit" className="btn btn-block">Submit</button>
        </form>

    </Wrapper>
  )
}

export default Register