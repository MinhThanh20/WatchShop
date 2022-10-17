import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./AuthSlice";
export const loginUser = async(user, dispatch, navigate)=>{
    dispatch(loginStart())
    try {
        const res = await axios.post('http://localhost:8000/auth/login',user)
        dispatch(loginSuccess(res.data))
        navigate("/")

    }catch (err){
        dispatch(loginFailed())
        
        alert("Tài khoản hoặc mật khẩu ko chính xác")
    }
    
}
export const registerUser= async(user, dispatch, navigate)=> {
    dispatch(registerStart())
    try {
        await axios.post('http://localhost:8000/auth/register', user)
        .then(() => alert("Đăng ký tài khoản thành công"));
        dispatch(registerSuccess())
        navigate("/login")
    }
    catch(err){
        dispatch(registerFailed())
    } 
}
// export const logout = async (dispatch, navigate)=> {
//     dispatch(logOutStart())
//     try {
//         await
//     }
// }