import React, { useState } from "react";
import { Link } from "react-router-dom";
import dealImg from "../../assets/deal.png";
import "./index.scss";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setUsername("");
    setPassword("");
  };

  return (
    <div className="register-container">
      <h4>Register</h4>
      <form onSubmit={handleRegister}>
        <label>
          Username <b>*</b>
        </label>
        <input
          type="username"
          placeholder='E.g: "username"'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        ></input>
        <label>
          Email <b>*</b>
        </label>
        <input
          type="email"
          placeholder='E.g: "example@example.example"'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
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
        <button type="submit">Register</button>
      </form>
      <img src={dealImg} alt="" />
      <Link to="/login">
        <h3>Already have an account?</h3>
      </Link>
      <Link to="/">
        <h3>Go to home</h3>
      </Link>
    </div>
  );
};

export default Register;
