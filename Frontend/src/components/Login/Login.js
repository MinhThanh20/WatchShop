import React, { useState } from "react";
import './Login.scss'
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/AuthApiRequest";
import {useDispatch} from "react-redux"
function Login() {

   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const dispatch = useDispatch()
   const navigate = useNavigate() 
    const Login =(e)=>{
        e.preventDefault()
        const newUser = {
            username: username,
            password: password,
        }
        loginUser(newUser, dispatch, navigate );
    }
    return (
        <>
            <div class="login-page">
                <div class="form">
                    <form class="login-form" onSubmit={Login}>
                        <input name = "username" type="text" placeholder="username" onChange={(e)=> setUsername(e.target.value)} />
                        <input name = "password" type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
                        <button type="submit">login</button>
                        <p class="message">Not registered?
                            <Link to ='/register'>Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login