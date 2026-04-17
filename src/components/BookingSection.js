import React, { useState, useEffect } from "react";
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

  function handleChange(e) {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  }

  function selectCar(type) {
    setBooking({ ...booking, carType: type });
  }

  useEffect(() => {
    if (booking.distance > 0) {
      let dist = booking.distance;
      if (tripType === "ROUND") dist = dist * 2;
      const fare = dist * pricePerKm[booking.carType];
      setBooking(prev => ({ ...prev, estimatedFare: fare }));
    }
  }, [booking.distance, booking.carType, tripType]); // eslint-disable-line

  return (
    <section id="book" className="main-container">

      {/* ── LEFT: Booking Form ── */}
      <div className="left-panel">

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

        <div className="form-card">

          <h3>Book Your Taxi</h3>

          <div className="form-field">
            <label>Pickup Location</label>
            <input name="pickupLocation" placeholder="Enter pickup city or address" onChange={handleChange} />
          </div>

          <div className="form-field">
            <label>Drop Location</label>
            <input name="dropLocation" placeholder="Enter drop city or address" onChange={handleChange} />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Full Name</label>
              <input name="fullname" placeholder="Your name" onChange={handleChange} />
            </div>
            <div className="form-field">
              <label>Mobile</label>
              <input name="mobile" placeholder="10-digit number" onChange={handleChange} />
            </div>
          </div>

          <div className="form-field">
            <label>Email</label>
            <input name="email" type="email" placeholder="your@email.com" onChange={handleChange} />
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Pickup Date</label>
              <input type="date" name="pickupDate" onChange={handleChange} />
            </div>
            <div className="form-field">
              <label>Pickup Time</label>
              <input type="time" name="pickupTime" onChange={handleChange} />
            </div>
          </div>

          <div className="form-field">
            <label>Distance (km)</label>
            <input
              type="number"
              placeholder="Approximate distance"
              onChange={(e) =>
                setBooking({ ...booking, distance: Math.max(parseFloat(e.target.value) || 0, 0) })
              }
            />
          </div>

          <div>
            <label style={{ fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.6px", display: "block", marginBottom: "8px" }}>
              Select Car Type
            </label>
            <div className="cars">
              {["SEDAN", "ETIOS", "SUV", "INNOVA"].map(car => (
                <div
                  key={car}
                  className={booking.carType === car ? "car active-car" : "car"}
                  onClick={() => selectCar(car)}
                >
                  🚗<br />{car}
                </div>
              ))}
            </div>
          </div>

          {booking.estimatedFare > 0 && (
            <div className="fare">Estimated Fare: ₹ {booking.estimatedFare}</div>
          )}

          <button type="button" className="book-btn" onClick={() => setShowSummary(true)}>
            Get Estimation
          </button>

        </div>

        {showSummary && (
          <div className="summary-container">
            <div className="summary-box">
              <h3>Booking Summary</h3>
              <p><b>Trip Type</b><span>{tripType}</span></p>
              <p><b>Car Type</b><span>{booking.carType}</span></p>
              <p><b>Pickup</b><span>{booking.pickupLocation}</span></p>
              <p><b>Drop</b><span>{booking.dropLocation}</span></p>
              <p><b>Date & Time</b><span>{booking.pickupDate} {booking.pickupTime}</span></p>
            </div>
            <div className="payment-box">
              <h3>Payment Details</h3>
              <p><b>Base Fare</b><span>₹ {booking.estimatedFare}</span></p>
              <p><b>Driver Bata</b><span>₹ 300</span></p>
              <h4>Total: ₹ {booking.estimatedFare + 300}</h4>
              <div className="note">Actual bill may differ based on final distance.</div>
              <button className="confirm-btn">Confirm Booking</button>
            </div>
          </div>
        )}

      </div>

      {/* ── RIGHT: Trust Panel ── */}
      <div className="right-panel">
        <div className="right-content">

          <h2>Ride with <span>YRD TAXI</span></h2>
          <p className="tagline">
            Trusted by thousands of passengers across Tamil Nadu for safe, on-time rides.
          </p>

          <div className="trust-list">
            <div className="trust-item">✅ Transparent pricing — no hidden charges</div>
            <div className="trust-item">📍 GPS-tracked rides for your safety</div>
            <div className="trust-item">👨‍✈️ Background-verified, trained drivers</div>
            <div className="trust-item">🚗 Sedan, SUV &amp; Innova options</div>
            <div className="trust-item">📞 24/7 customer support</div>
            <div className="trust-item">🔄 One Way &amp; Round Trip available</div>
          </div>

          <div className="image-box">
            <img src={taxiImg} alt="YRD Taxi" className="taxi-img" />
          </div>

        </div>
      </div>

    </section>
  );
}

export default BookingSection;
