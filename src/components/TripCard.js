import React from "react";

function TripCard({trip}){

return(

<div style={{border:"1px solid #ccc",padding:"10px"}}>

<p>Pickup: {trip.pickup}</p>

<p>Drop: {trip.drop}</p>

<p>Fare: ₹{trip.fare}</p>

</div>

)

}

export default TripCard;