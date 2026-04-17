import React, { useState } from "react";
import axios from "axios";

function OtpLogin(){

const [mobile,setMobile] = useState("");
const [otp,setOtp] = useState("");

async function sendOtp(){

await axios.post("http://localhost:8080/api/auth/send-otp",{mobile});

alert("OTP Sent");

}

async function verifyOtp(){

await axios.post("http://localhost:8080/api/auth/verify-otp",{mobile,otp});

alert("Login Successful");

}

return(

<div style={{padding:"40px"}}>

<h2>OTP Login</h2>

<input
placeholder="Mobile Number"
onChange={(e)=>setMobile(e.target.value)}
/>

<button onClick={sendOtp}>Send OTP</button>

<input
placeholder="Enter OTP"
onChange={(e)=>setOtp(e.target.value)}
/>

<button onClick={verifyOtp}>Verify OTP</button>

</div>

)

}

export default OtpLogin;