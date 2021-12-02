import { combineReducers } from "redux";
import mainPageReducer from "./mainPageReducer";
import checkoutPageReducer from './checkoutPageReducer';

const rootReducer = combineReducers({
  mainPageReducer,
  checkoutPageReducer,
});

export default rootReducer;
