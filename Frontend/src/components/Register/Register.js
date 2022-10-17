import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../action/AuthAction";
import "./Register.scss";
function Register() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(data));
    {
      user && navigate("../login");
    }
  };

  return (
    <>
      <div class="login-page">
        <div class="form">
          <form class="login-form" onSubmit={handleSubmit}>
            <input
              name="email"
              type="text"
              placeholder="email address"
              onChange={handleChange}
              value={data.email}
            />
            <input
              name="username"
              type="text"
              placeholder="username"
              onChange={handleChange}
              value={data.username}
            />
            <input
              name="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
              value={data.password}
            />
            <button type="submit">create</button>
            <p class="message">
              Already registered?
              <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
