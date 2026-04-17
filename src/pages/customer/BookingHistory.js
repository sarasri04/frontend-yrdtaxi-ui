import React from "react";
import "../../styles/pages.css";

function BookingHistory() {
  return (
    <div className="booking-history-page">

      <h2>My Bookings</h2>

      <div className="empty-state">
        <div className="empty-icon">🚖</div>
        <h3>No Bookings Yet</h3>
        <p>Your booking history will appear here once you take a ride.</p>
      </div>

    </div>
  );
}

export default BookingHistory;
