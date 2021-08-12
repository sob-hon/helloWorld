import { combineReducers } from "redux";
import  registerReducer  from "./Register/reducer";

const rootReducer = combineReducers({
  registerReducer,
});

export default rootReducer;
