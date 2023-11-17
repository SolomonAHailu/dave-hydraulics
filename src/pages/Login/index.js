// Import necessary React modules
import React, { useState } from "react";
import "./index.scss";
import walkImg from "../../assets/walk.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h4>Login</h4>
      <form>
        <label>
          Username <b>*</b>
        </label>
        <input
          type="username"
          placeholder='E.g: "Username"'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
        <label>
          Password <b>*</b>
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <button type="submit">Login</button>
      </form>
      <img src={walkImg} alt="" />
    </div>
  );
};

export default Login;
