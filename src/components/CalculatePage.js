import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/pages.css";

function CalculatePage() {

  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state;

  if (!booking) {
    return (
      <div className="calculate-page">
        <h2>No booking data found</h2>
      </div>
    );
  }

  const dateTime = booking.pickupDate + "T" + booking.pickupTime;

  const confirmBooking = async () => {
    try {
      const finalBooking = {
        ...booking,
        pickupTime: dateTime
      };
      await axios.post("http://localhost:8080/api/bookings", finalBooking);
      alert("Booking Confirmed 🚖");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Booking Failed ❌");
    }
  };

  return (
    <div className="calculate-page">

      <h2>Fare Summary</h2>

      <div className="fare-summary-card">

        <div className="fare-detail-row">
          <span>Pickup</span>
          <span>{booking.pickupLocation}</span>
        </div>

        <div className="fare-detail-row">
          <span>Drop</span>
          <span>{booking.dropLocation}</span>
        </div>

        <div className="fare-detail-row">
          <span>Distance</span>
          <span>{booking.distance.toFixed(2)} km</span>
        </div>

        <div className="fare-detail-row">
          <span>Car Type</span>
          <span>{booking.carType}</span>
        </div>

        <div className="fare-detail-row">
          <span>Trip Type</span>
          <span>{booking.tripType}</span>
        </div>

        <div className="fare-total">
          💰 ₹{booking.estimatedFare}
        </div>

      </div>

      <button className="confirm-booking-btn" onClick={confirmBooking}>
        Confirm Booking
      </button>

    </div>
  );
}

export default CalculatePage;
