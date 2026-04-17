import React,{useState} from "react";
import {GoogleMap,DirectionsRenderer} from "@react-google-maps/api";
import {mapContainerStyle,center} from "../utils/mapUtils";

function RouteMap({pickup,drop}){

const [directions,setDirections] = useState(null);

async function calculateRoute(){

const directionsService =
new window.google.maps.DirectionsService();

const results =
await directionsService.route({

origin:pickup,
destination:drop,
travelMode:window.google.maps.TravelMode.DRIVING

});

setDirections(results);

}

if(pickup && drop){
calculateRoute();
}

return(

<GoogleMap
mapContainerStyle={mapContainerStyle}
center={center}
zoom={10}
>

{directions &&

<DirectionsRenderer
directions={directions}
/>

}

</GoogleMap>

)

}

export default RouteMap;