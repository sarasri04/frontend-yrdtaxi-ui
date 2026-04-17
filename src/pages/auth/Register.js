import React, { useState } from "react";
import { register } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

function Register(){

const [data,setData] = useState({
fullname:"",
email:"",
mobile:"",
password:""
});

const navigate = useNavigate();

function handleChange(e){
setData({...data,[e.target.name]:e.target.value});
}

async function handleRegister(){

try{
await register(data);
alert("Registered Successfully");
navigate("/login");
}catch(err){
alert("Error in Register");
}

}

return(

<div style={{padding:"40px"}}>

<h2>Register</h2>

<input name="fullname" placeholder="Full Name" onChange={handleChange}/>
<input name="email" placeholder="Email" onChange={handleChange}/>
<input name="mobile" placeholder="Mobile" onChange={handleChange}/>
<input type="password" name="password" placeholder="Password" onChange={handleChange}/>

<button onClick={handleRegister}>
Register
</button>

</div>

)

}

export default Register;