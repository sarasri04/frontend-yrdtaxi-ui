import React,{useEffect,useState} from "react";
import axios from "axios";

function DriverTrips(){

const [trips,setTrips] = useState([]);

useEffect(()=>{

axios
.get("http://localhost:8080/api/driver/trips")
.then(res=>setTrips(res.data));

},[])

return(

<div>

<h2>My Trips</h2>

<table>

<thead>
<tr>
<th>Pickup</th>
<th>Drop</th>
<th>Fare</th>
</tr>
</thead>

<tbody>

{trips.map((t,i)=>(

<tr key={i}>
<td>{t.pickupLocation}</td>
<td>{t.dropLocation}</td>
<td>₹{t.fare}</td>
</tr>

))}

</tbody>

</table>

</div>

)

}

export default DriverTrips;