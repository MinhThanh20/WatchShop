import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { loginUser } from "../Redux/AuthApiRequest";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../action/AuthAction";
function Login() {
  const user = useSelector((state) => state.authReducer.authData);
  const error = useSelector((state) => state.authReducer);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
    };
    await dispatch(logIn(formData));
    if (error === false) {
      {
        user && navigate("../");
        return alert('Đăng nhập thành công')
      }
    }
    else {
      return alert('Tài khoản hoặc mật khẩu ko chính xác')
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              name="username"
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">login</button>
            <p className="message">
              Not registered?
              <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
