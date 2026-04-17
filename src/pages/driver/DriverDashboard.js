import React from "react";
import "../../styles/dashboard.css";

function DriverDashboard() {
  return (
    <div className="dashboard-wrapper">

      <h2 className="dashboard-title">🚖 Driver Dashboard</h2>

      <div className="driver-stat-cards">

        <div className="driver-stat-card">
          <h3>Today's Trips</h3>
          <p>5</p>
        </div>

        <div className="driver-stat-card">
          <h3>Total Earnings</h3>
          <p>₹3,200</p>
        </div>

        <div className="driver-stat-card">
          <h3>Rating</h3>
          <p>4.8 ⭐</p>
        </div>

      </div>

    </div>
  );
}

export default DriverDashboard;
