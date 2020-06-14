import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { messageReducer } from "./messages";
import { newpostReducer } from "./newpost";

export default combineReducers({
  auth: authReducer,
  messages: messageReducer,
  newpost: newpostReducer,
});
