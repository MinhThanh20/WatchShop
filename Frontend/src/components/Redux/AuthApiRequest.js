import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./AuthSlice";
export const loginUser = async(user, dispatch, navigate)=>{
    dispatch(loginStart())
    try {
        const res = axios.post("http://localhost:8000/auth/login",user)
        dispatch(loginSuccess(res.data))
        navigate("/")

    }catch (err){
        dispatch(loginFailed())
    }
}