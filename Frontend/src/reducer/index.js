import { combineReducers } from "redux";
import authReducer from "./authReducer";
import orderReducer from "./oderReducer";

export const reducers = combineReducers({ authReducer, orderReducer });
