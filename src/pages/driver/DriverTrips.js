import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/pages.css";

function DriverTrips() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/driver/trips")
      .then(res => setTrips(res.data));
  }, []);

  return (
    <div className="driver-page">

      <h2>My Trips</h2>

      <div className="trips-table-wrapper">
        <table className="trips-table">

          <thead>
            <tr>
              <th>Pickup</th>
              <th>Drop</th>
              <th>Fare</th>
            </tr>
          </thead>

          <tbody>
            {trips.map((t, i) => (
              <tr key={i}>
                <td>{t.pickupLocation}</td>
                <td>{t.dropLocation}</td>
                <td>₹{t.fare}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
}

export default DriverTrips;
