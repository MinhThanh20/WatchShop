
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Redux/AuthApiRequest";
import './Register.scss'
function Register() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const handleChange=(e)=> {
    //     const name = e.target.name
    //     const value = e.target.value
    //     setData({... data, [name]:value})

    // }
    const Register=(e)=>{
        e.preventDefault()
        // axios.post('http://localhost:8000/auth/register', data)
        const newUser={
            email: email,
            username: username,
            password: password,
        };

        registerUser(newUser, dispatch, navigate)
    }
    
    return (
        <>
            <div class="login-page">
                <div class="form">
                    <form class="login-form" onSubmit={Register}>
                        <input name="email" type="text" placeholder="email address" onChange={(e)=> setEmail(e.target.value)} />
                        <input name="username" type="text" placeholder="username" onChange={(e)=> setUsername(e.target.value)}  />
                        <input name="password" type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
                        <button type="submit">create</button>
                        <p class="message">Already registered?
                            <Link to='/login'>Sign In</Link>
                        </p>
                    </form>

                </div>
            </div>
        </>
    )
}
export default Register