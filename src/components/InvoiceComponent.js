import React from "react";

function FareEstimate({distance}){

const pricePerKm=14;

const fare=distance*pricePerKm;

return(

<div>

<h3>Estimated Fare</h3>

<p>Distance: {distance} km</p>

<p>Fare: ₹{fare}</p>

</div>

)

}

export default FareEstimate;