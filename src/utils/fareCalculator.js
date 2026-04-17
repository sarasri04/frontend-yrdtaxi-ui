export const pricePerKm = {

SEDAN:14,
ETIOS:15,
SUV:19,
INNOVA:20

}

export function calculateFare(distance,car){

return Math.round (distance * pricePerKm[car]);

}