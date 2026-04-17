import React, { useState } from "react";
import { login } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";

function Login() {

  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleLogin() {
    try {
      await login(data);
      alert("Login Success");
      navigate("/");
    } catch (err) {
      alert("Login Failed");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-logo">🚖</div>
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Sign in to your YRD Taxi account</p>

        <div className="form-group">
          <label>Email</label>
          <input
            className="form-input"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>

        <button className="auth-btn" onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;
