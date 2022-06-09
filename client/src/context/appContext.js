import React,{useReducer,useContext } from 'react';
import { 
    CLEAR_ALERT, 
    DISPLAY_ALERT,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_SIDEBAR 

} from "./actions";
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
    jobLocation:User_location || '',
    showSideBar:false
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
      //  SETUP
      const setUpUser=async ({currentUser,endPoint,alertText})=>{
        
        dispatch({type:SETUP_USER_BEGIN})
        try {
            const {data}=await axios.post(`/api/v1/auth/${endPoint}`,currentUser)
            
            const {user,token,location}=data
            dispatch({type:SETUP_USER_SUCCESS,
            payload:{
                user,
                token,
                location,
                alertText
            }})
        addUserToLocalStorage({token,user,User_location})
    
        } catch (error) {
        
            dispatch({
                type:SETUP_USER_ERROR,
                payload:{msg:error.response.data.msg}})
        }
        clearAlert()
    
       }

const toggleSidebar=()=>{
    dispatch({type:TOGGLE_SIDEBAR})
}

return <AppContext.Provider value={{...state,displayAlert,setUpUser,toggleSidebar }}>
    {children}
</AppContext.Provider>
}
const useAppContext=()=>{
    return useContext(AppContext)
}
export {AppProvider,initialState,useAppContext}
