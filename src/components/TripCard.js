import React from "react";
import "../styles/pages.css";

function TripCard({ trip }) {
  return (
    <div className="trip-card">
      <p><span>Pickup:</span> {trip.pickup}</p>
      <p><span>Drop:</span> {trip.drop}</p>
      <p><span>Fare:</span> ₹{trip.fare}</p>
    </div>
  );
}

export default TripCard;
