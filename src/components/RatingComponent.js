import React, { useState } from "react";
import axios from "axios";
import "../styles/pages.css";

function RatingComponent({ bookingId }) {

  const [rating, setRating] = useState(5);

  async function submitRating() {
    await axios.post("http://localhost:8080/api/rating", {
      bookingId: bookingId,
      rating: rating
    });
    alert("Thank you for rating");
  }

  return (
    <div className="rating-card">

      <h3>⭐ Rate Your Ride</h3>

      <select
        className="rating-select"
        onChange={(e) => setRating(e.target.value)}
      >
        <option>5 — Excellent</option>
        <option>4 — Good</option>
        <option>3 — Average</option>
        <option>2 — Poor</option>
        <option>1 — Very Poor</option>
      </select>

      <button className="rating-submit-btn" onClick={submitRating}>
        Submit Rating
      </button>

    </div>
  );
}

export default RatingComponent;
