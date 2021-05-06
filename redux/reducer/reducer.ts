import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import forecastReducer from "./forecastReducer";

export default combineReducers({
  forecastReducer,cityReducer
});
