import { DISPLAY_ALERT } from "./actions"
const reducer =(state,action)=>{
    if(action.type===DISPLAY_ALERT){
         return {...state,
                  showAlert:true,
                  alertType:'danger',
                  alertText:'Please Provide all values'
        }
    }     
throw new Error (`no such actions: ${actions.type}`)
}

export default reducer