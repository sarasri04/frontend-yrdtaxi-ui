import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/booking.css";

import taxiImg from "../assets/images/taxi.png";

function BookingSection() {

  const [tripType, setTripType] = useState("ONEWAY");
  const [showSummary, setShowSummary] = useState(false);

  const [booking, setBooking] = useState({
    pickupLocation: "",
    dropLocation: "",
    fullname: "",
    mobile: "",
    email: "",
    pickupDate: "",
    pickupTime: "",
    carType: "SEDAN",
    distance: 0,
    estimatedFare: 0
  });

  const pricePerKm = {
    SEDAN: 14,
    ETIOS: 15,
    SUV: 19,
    INNOVA: 20
  };

  // Handle input
  function handleChange(e) {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  }

  // Select car
  function selectCar(type) {
    setBooking({ ...booking, carType: type });
  }

  // Auto fare calculation
  useEffect(() => {
    if (booking.distance > 0) {
      let dist = booking.distance;

      if (tripType === "ROUND") {
        dist = dist * 2;
      }

      const fare = dist * pricePerKm[booking.carType];

      setBooking(prev => ({ ...prev, estimatedFare: fare }));
    }
  }, [booking.distance, booking.carType, tripType]);

  return (
    <div className="main-container">

      {/* LEFT PANEL */}
      <div className="left-panel">

        {/* Tabs */}
        <div className="tabs">
          <button
            className={tripType === "ONEWAY" ? "active-tab" : ""}
            onClick={() => setTripType("ONEWAY")}
          >
            One Way
          </button>

          <button
            className={tripType === "ROUND" ? "active-tab" : ""}
            onClick={() => setTripType("ROUND")}
          >
            Round Trip
          </button>
        </div>

        {/* FORM CARD */}
        <div className="form-card">

          <h3>Book Your Taxi</h3>

          <input name="pickupLocation" placeholder="Pickup Location" onChange={handleChange}/>
          <input name="dropLocation" placeholder="Drop Location" onChange={handleChange}/>

          <div className="row">
            <input name="fullname" placeholder="Full Name" onChange={handleChange}/>
            <input name="mobile" placeholder="Mobile Number" onChange={handleChange}/>
          </div>

          <input name="email" placeholder="Email" onChange={handleChange}/>

          <div className="row">
            <input type="date" name="pickupDate" onChange={handleChange}/>
            <input type="time" name="pickupTime" onChange={handleChange}/>
          </div>

          <input
            type="number"
            placeholder="Distance (km)"
            onChange={(e) =>
              setBooking({
                ...booking,
                distance: Math.max(parseFloat(e.target.value) || 0, 0)
              })
            }
          />

          {/* Cars */}
          <div className="cars">
            {["SEDAN", "ETIOS", "SUV", "INNOVA"].map(car => (
              <div
                key={car}
                className={booking.carType === car ? "car active-car" : "car"}
                onClick={() => selectCar(car)}
              >
                🚗 {car}
              </div>
            ))}
          </div>

          {/* Fare */}
          {booking.estimatedFare > 0 && (
            <div className="fare">₹ {booking.estimatedFare}</div>
          )}

          {/* ✅ FIXED BUTTON */}
          <button
            type="button"
            className="book-btn"
            onClick={() => setShowSummary(true)}
          >
            Get Estimation
          </button>

        </div>

        {/* ✅ SUMMARY (CORRECT PLACE) */}
        {showSummary && (
          <div className="summary-container">

            {/* BOOKING SUMMARY */}
            <div className="summary-box">
              <h3>BOOKING SUMMARY</h3>

              <p><b>Book Type:</b> {tripType}</p>
              <p><b>Car Type:</b> {booking.carType}</p>
              <p><b>Pickup:</b> {booking.pickupLocation}</p>
              <p><b>Drop:</b> {booking.dropLocation}</p>
              <p><b>Booked At:</b> {booking.pickupDate} {booking.pickupTime}</p>
            </div>

            {/* PAYMENT DETAILS */}
            <div className="payment-box">
              <h3>PAYMENT DETAILS</h3>

              <p>Base Fare: ₹ {booking.estimatedFare}</p>
              <p>Driver Bata: ₹ 300</p>

              <h4>Total: ₹ {booking.estimatedFare + 300}</h4>

              <div className="note">
                THE ACTUAL BILL AMOUNT MAY DIFFER BASED ON DISTANCE.
              </div>

              <button className="confirm-btn">
                Confirm Booking
              </button>
            </div>

          </div>
        )}

      </div>

      {/* RIGHT PANEL */}
       <div className="right-panel">

  <div className="right-content">

    <h2>
      Ride with <span>YRD TAXI</span>
    </h2>

    <p className="tagline">
      Book your taxi quickly and safely with YRD TAXI service.
    </p>

    <button className="contact-btn">
      Contact Us
    </button>

    {/* ✅ IMAGE HERE */}
    <div className="image-box">
      <img src={taxiImg} alt="taxi" className="taxi-img" />
    </div>

  </div>

</div>

    </div>
  );
}

export default BookingSection;