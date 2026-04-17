import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function CalculatePage() {

  const location = useLocation();
  const navigate = useNavigate();

  const booking = location.state;

  // ✅ Safety check
  if (!booking) {
    return <h2 style={{ textAlign: "center" }}>No booking data found</h2>;
  }

  // ✅ Format date-time (important for backend)
  const dateTime = booking.pickupDate + "T" + booking.pickupTime;

  const confirmBooking = async () => {
    try {

      const finalBooking = {
        ...booking,
        pickupTime: dateTime
      };

      await axios.post(
        "http://localhost:8080/api/bookings",
        finalBooking
      );

      alert("Booking Confirmed 🚖");

      // 👉 redirect to home after booking
      navigate("/");

    } catch (error) {
      console.error(error);
      alert("Booking Failed ❌");
    }
  };

  return (

    <div style={{
      padding: "30px",
      maxWidth: "600px",
      margin: "auto",
      textAlign: "center"
    }}>

      <h2>Fare Summary</h2>

      <div style={{
        background: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px"
      }}>

        <p><b>Pickup:</b> {booking.pickupLocation}</p>
        <p><b>Drop:</b> {booking.dropLocation}</p>
        <p><b>Distance:</b> {booking.distance.toFixed(2)} km</p>
        <p><b>Car Type:</b> {booking.carType}</p>
        <p><b>Trip Type:</b> {booking.tripType}</p>

        <h3>💰 Fare: ₹{booking.estimatedFare}</h3>

      </div>

      <br />

      <button
        onClick={confirmBooking}
        style={{
          padding: "12px 25px",
          background: "#ff6600",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Confirm Booking
      </button>

    </div>
  );
}

export default CalculatePage;