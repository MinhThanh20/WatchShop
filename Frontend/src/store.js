import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./components/Redux/AuthSlice"
export default configureStore({
    reducer:{
        auth : authReducer
    }
})