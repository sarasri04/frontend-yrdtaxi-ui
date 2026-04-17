export function calculateRouteDistance(directions){

const route = directions.routes[0];

const distance =
route.legs[0].distance.value / 1000;

return distance;

}