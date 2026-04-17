import React, { useState } from "react";

function Profile(){

const [user,setUser] = useState({
name:"John Doe",
email:"john@gmail.com",
mobile:"9876543210"
});

return(

<div style={{padding:"40px"}}>

<h2>My Profile</h2>

<p>Name: {user.name}</p>
<p>Email: {user.email}</p>
<p>Mobile: {user.mobile}</p>

<button>Edit Profile</button>

</div>

)

}

export default Profile;