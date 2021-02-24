// 3. combine multiple reducers
import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
