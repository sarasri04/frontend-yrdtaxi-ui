import React from "react";
import "../styles/pages.css";

function DriverCard({ driver }) {
  return (
    <div className="driver-card">
      <h4>{driver.name}</h4>
      <p>🚗 {driver.carType}</p>
      <p>⭐ Rating: {driver.rating}</p>
    </div>
  );
}

export default DriverCard;
