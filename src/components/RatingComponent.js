import React,{useState} from "react";
import axios from "axios";

function RatingComponent({bookingId}){

const [rating,setRating]=useState(5);

async function submitRating(){

await axios.post(

"http://localhost:8080/api/rating",

{

bookingId:bookingId,

rating:rating

}

);

alert("Thank you for rating");

}

return(

<div>

<h3>Rate Your Ride</h3>

<select onChange={(e)=>setRating(e.target.value)}>

<option>5</option>
<option>4</option>
<option>3</option>
<option>2</option>
<option>1</option>

</select>

<button onClick={submitRating}>

Submit

</button>

</div>

)

}

export default RatingComponent;