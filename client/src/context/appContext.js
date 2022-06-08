import React,{useReducer,useContext } from 'react';
import { CLEAR_ALERT, DISPLAY_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_SUCCESS,REGISTER_USER_ERROR } from "./actions";
import axios from "axios"

import reducer from "./reducer";


const token=localStorage.getItem('token')
const user=localStorage.getItem('user')
const User_location=localStorage.getItem('location')

const initialState={
    isLoading:false,
    showAlert:false,
    alertText:"",
    alertType:'',
    user:user?JSON.parse(user):null,
    token:null,
    userLocation:User_location || '',
    jobLocation:User_location || ''
}

const AppContext=React.createContext()

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

   const displayAlert=()=>{
       dispatch({type:DISPLAY_ALERT})
   }
   const clearAlert=()=>{
       setTimeout(()=>{
        dispatch({type:CLEAR_ALERT})
       },3000)
   }
const addUserToLocalStorage=({user,token,location})=>{
    localStorage.setItem('user',JSON.stringify(user))
    localStorage.setItem('token',token)
    localStorage.setItem('location',location)

} 
const removeUserFromLocalStorage=()=>{
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('location')
}

   const registerUser=async(currentUser)=>{
            dispatch({type:REGISTER_USER_BEGIN})
            try {
                const response=await axios.post('/api/v1/auth/register',currentUser)
                console.log(response.data)
                const {user,token,location}=response.data
                dispatch({type:REGISTER_USER_SUCCESS,
                payload:{
                    user,
                    token,
                    location
                }})
            addUserToLocalStorage({token,user,User_location})

            } catch (error) {
                console.log(error.response)
                dispatch({type:REGISTER_USER_ERROR,payload:{msg:error.response.data.msg}})
            }
   }

return <AppContext.Provider value={{...state,displayAlert,registerUser}}>
    {children}
</AppContext.Provider>
}
const useAppContext=()=>{
    return useContext(AppContext)
}
export {AppProvider,initialState,useAppContext}
