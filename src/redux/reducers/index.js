import { combineReducers } from "redux";
import mainPageReducer from "./mainPageReducer";

const rootReducer = combineReducers({
  mainPageReducer,
});

export default rootReducer;
