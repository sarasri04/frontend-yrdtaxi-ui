import React, { useState } from "react";
import { login } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

function Login() {

const [data,setData] = useState({
email:"",
password:""
});

const navigate = useNavigate();

function handleChange(e){
setData({...data,[e.target.name]:e.target.value});
}

async function handleLogin(){

try{
await login(data);
alert("Login Success");
navigate("/");
}catch(err){
alert("Login Failed");
}

}

return(

<div style={{padding:"40px"}}>

<h2>Login</h2>

<input
name="email"
placeholder="Email"
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

)

}

export default Login;