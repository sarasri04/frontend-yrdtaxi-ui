import React,{useState} from "react";
import {Autocomplete,LoadScript} from "@react-google-maps/api";
import {libraries} from "../utils/mapUtils";

function BookingForm(){

const [pickup,setPickup] = useState("");
const [drop,setDrop] = useState("");

let pickupRef;
let dropRef;

function onPickupLoad(ref){
pickupRef = ref;
}

function onDropLoad(ref){
dropRef = ref;
}

function handlePickup(){
setPickup(pickupRef.getPlace().formatted_address);
}

function handleDrop(){
setDrop(dropRef.getPlace().formatted_address);
}

return(

    

<LoadScript
googleMapsApiKey="YOUR_GOOGLE_MAP_KEY"
libraries={libraries}
>

<div>

<Autocomplete
onLoad={onPickupLoad}
onPlaceChanged={handlePickup}
>
<input placeholder="Pickup Location"/>
</Autocomplete>

<Autocomplete
onLoad={onDropLoad}
onPlaceChanged={handleDrop}
>
<input placeholder="Drop Location"/>
</Autocomplete>

</div>

</LoadScript>

)

}

export default BookingForm;