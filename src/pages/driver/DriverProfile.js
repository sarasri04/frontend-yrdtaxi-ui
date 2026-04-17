import React from "react";
import "../../styles/pages.css";

function DriverProfile() {
  return (
    <div className="driver-page">

      <h2>Driver Profile</h2>

      <div className="driver-profile-card">

        <div className="driver-avatar">🚘</div>

        <div className="driver-detail-row">
          <span className="driver-label">Name</span>
          <span className="driver-value">Driver Name</span>
        </div>

        <div className="driver-detail-row">
          <span className="driver-label">Car Number</span>
          <span className="driver-value">TN45AB1234</span>
        </div>

      </div>

    </div>
  );
}

export default DriverProfile;
