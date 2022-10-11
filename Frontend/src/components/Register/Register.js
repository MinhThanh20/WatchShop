import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Register.scss'
function Register() {
    const [data, setData] = useState({
        email:"",
        username:"",
        password:"",
    })
    const handleChange=(e)=> {
        const name = e.target.name
        const value = e.target.value
        setData({... data, [name]:value})

    }
    const Register=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/auth/register', data)
    }
    
    return (
        <>
            <div class="login-page">
                <div class="form">
                    <form class="login-form" onSubmit={Register}>
                        <input name="email" type="text" placeholder="email address" onChange={handleChange} value={data.email}/>
                        <input name="username" type="text" placeholder="username" onChange={handleChange} value={data.username} />
                        <input name="password" type="password" placeholder="password" onChange={handleChange} value={data.password}/>
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