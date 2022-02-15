// import { types } from "node-sass";
import * as types from "./actionTypes";

const initialState = {
    loading: false,
    currentUser : {} ,
    error: null,

};

const userReducer = ( state = initialState , action ) =>  {
    switch(action.type) {
        case types.REGISTER_START:
            return {
                ...state,
                loading: true
            }
        case types.LOGIN_START: 
        case types.LOGOUT_START:
            
           return {
               ...state,
               loading: true 
           }
           case types.LOGOUT_SUCCESS:
               return {
                   ...state,
                   currentUser: {},
               } 
         case types.REGISTER_SUCCESS:
             return {
                 ...state,
                 loading: false,
                 success: "User successfully registered"
             }
         case types.LOGIN_SUCCESS: 
             return {
                 ...state,
                 loading: false,
                 currentUser : action.payload,
             }  
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
        case types.LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error : action.payload,
            }
        default:
        return state;
    }
}

export default userReducer;