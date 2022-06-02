import { Action } from "history";
import React,{ useState,useReducer,useContext } from "react";
import { DISPLAY_ALERT } from "./actions";

import reducer from "./reducer";
const intialState={
    isLoading:false,
    showAlert:false,
    alertText:"",
    alertType:''
}

const AppContext=React.createContext()

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,intialState)

   const displayAlert=()=>{
       dispatch({type:DISPLAY_ALERT})
   }



return <AppContext.Provider value={{...state}}>
    {children}
</AppContext.Provider>
}
const useAppContext=()=>{
    return useContext(AppContext)
}
export {AppProvider,intialState,useAppContext}
