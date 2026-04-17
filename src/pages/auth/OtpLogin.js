import React, { useState } from "react";
import axios from "axios";
import "../../styles/auth.css";

function OtpLogin() {

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  async function sendOtp() {
    await axios.post("http://localhost:8080/api/auth/send-otp", { mobile });
    alert("OTP Sent");
  }

  async function verifyOtp() {
    await axios.post("http://localhost:8080/api/auth/verify-otp", { mobile, otp });
    alert("Login Successful");
  }

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-logo">📱</div>
        <h2>OTP Login</h2>
        <p className="auth-subtitle">Login with your mobile number</p>

        <div className="form-group">
          <label>Mobile Number</label>
          <div className="otp-row">
            <input
              className="form-input"
              placeholder="Enter mobile number"
              onChange={(e) => setMobile(e.target.value)}
            />
            <button className="send-otp-btn" onClick={sendOtp}>
              Send OTP
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>OTP</label>
          <input
            className="form-input"
            placeholder="Enter 6-digit OTP"
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <button className="auth-btn" onClick={verifyOtp}>
          Verify & Login
        </button>

      </div>
    </div>
  );
}

export default OtpLogin;
