import {
     DISPLAY_ALERT,
     CLEAR_ALERT,
     SETUP_USER_BEGIN,
     SETUP_USER_SUCCESS,
     SETUP_USER_ERROR,
     TOGGLE_SIDEBAR,
     LOGOUT_USER
    
    } from "./actions"
import { initialState } from "./appContext"

const reducer =(state,action)=>{
    if(action.type===DISPLAY_ALERT){
         return {...state,
                  showAlert:true,
                  alertType:'danger',
                  alertText:'Please Provide all values'
        }
    } 
    if(action.type===CLEAR_ALERT){
        return{
            ...state,
            showAlert:false,
            alertText:'',
            alertType:''
        }
    }
        if(action.type===SETUP_USER_BEGIN){
        return {...state,isLoading:true}
    }
    if(action.type===SETUP_USER_SUCCESS){
     return {
         ...state,
         isLoading:false,
         token:action.payload.token,
         user:action.payload.user,
         userLocation:action.payload.location,
         jobLocation:action.payload.location,
         showAlert:true,
         alertType:'success',
         alertText:action.payload.alertText
    
     }
     
    }
    
    if(action.type===SETUP_USER_ERROR){
     return {
         ...state,
         isLoading:false,
         showAlert:true,
         alertType:'danger',
         alertText:action.payload.msg
    
     }
     
    }
    if(action.type===TOGGLE_SIDEBAR){
        return {
            ...state,
            showSideBar:!state.showSideBar 
           
        }
            
       }

       if(action.type===LOGOUT_USER ){
        return {
            ...initialState,
            token:null,
            user:null,
            jobLocation:'',
            userLocation:' '


               
        }
                
       }

throw new Error (`no such actions: ${action.type}`)
}

export default reducer