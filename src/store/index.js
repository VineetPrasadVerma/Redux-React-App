import { userReducer } from "./User/userReducer";
import { themeReducer } from "./Theme/themeReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    user: userReducer,
    theme: themeReducer
})