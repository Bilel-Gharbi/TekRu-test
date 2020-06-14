import { combineReducers } from "redux";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import usersReducer from "./usersReducer";
import uiReducer from "./uiReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  users: usersReducer,
  ui: uiReducer,
});
