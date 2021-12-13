import { createStore } from "redux";
import reducer from "./cardRedux";
// import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";

const store = createStore(reducer);

export default store;