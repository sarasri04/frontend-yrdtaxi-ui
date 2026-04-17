import React, { useState } from "react";
import { register } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import "../../styles/auth.css";

function Register() {

  const [data, setData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleRegister() {
    try {
      await register(data);
      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert("Error in Register");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-logo">🚖</div>
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join YRD Taxi today</p>

        <div className="form-group">
          <label>Full Name</label>
          <input
            className="form-input"
            name="fullname"
            placeholder="Enter your full name"
            onChange={handleChange}
          />
        </div>

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
          <label>Mobile</label>
          <input
            className="form-input"
            name="mobile"
            placeholder="Enter your mobile number"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Create a password"
            onChange={handleChange}
          />
        </div>

        <button className="auth-btn" onClick={handleRegister}>
          Create Account
        </button>

      </div>
    </div>
  );
}

export default Register;
