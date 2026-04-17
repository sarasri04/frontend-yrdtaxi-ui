import React, { useEffect, useState } from "react";
import axios from "axios";
import LiveDriverMap from "../../components/LiveDriverMap";
import "../../styles/dashboard.css";

function AdminDashboard() {

  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalDrivers: 0,
    revenue: 0
  });

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  function fetchData() {
    axios.get("http://localhost:8080/api/bookings")
      .then(res => {
        setBookings(res.data);
        setStats({
          totalBookings: res.data.length,
          totalDrivers: 20,
          revenue: res.data.reduce((sum, b) => sum + b.fare, 0)
        });
      });
  }

  return (
    <div className="dashboard-wrapper">

      <h2 className="dashboard-title">🚖 Admin Live Dashboard</h2>

      <div className="dash-cards">

        <div className="dash-card">
          <h3>Total Bookings</h3>
          <p>{stats.totalBookings}</p>
        </div>

        <div className="dash-card">
          <h3>Total Drivers</h3>
          <p>{stats.totalDrivers}</p>
        </div>

        <div className="dash-card">
          <h3>Total Revenue</h3>
          <p>₹{stats.revenue}</p>
        </div>

      </div>

      <div className="dashboard-section">
        <h3>📍 Live Driver Locations</h3>
        <LiveDriverMap />
      </div>

      <div className="dashboard-section">
        <h3>📊 Live Bookings</h3>

        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Pickup</th>
              <th>Drop</th>
              <th>Fare</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.pickupLocation}</td>
                <td>{b.dropLocation}</td>
                <td>₹{b.fare}</td>
                <td>{b.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;
