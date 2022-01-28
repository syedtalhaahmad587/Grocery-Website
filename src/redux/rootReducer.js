import { combineReducers } from "redux";
import userReducer from "../redux/reducer";
import reducer from "../redux/cardRedux";

const rootReducer =  combineReducers({
    user: userReducer,
    reducer,

})


export default rootReducer