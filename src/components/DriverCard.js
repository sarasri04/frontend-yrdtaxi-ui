import React from "react";

function DriverCard({driver}){

return(

<div style={{border:"1px solid #ddd",padding:"10px"}}>

<h4>{driver.name}</h4>

<p>Car: {driver.carType}</p>

<p>Rating: {driver.rating}</p>

</div>

)

}

export default DriverCard;