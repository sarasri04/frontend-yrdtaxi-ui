import React from "react";
import { Bar } from "react-chartjs-2";
import "../../styles/pages.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function RevenueAnalytics() {

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Revenue (₹)",
        data: [2000, 3500, 4200, 3100, 5000],
        backgroundColor: "rgba(255, 102, 0, 0.7)",
        borderColor: "#ff6600",
        borderWidth: 2,
        borderRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(0,0,0,0.05)" }
      },
      x: {
        grid: { display: false }
      }
    }
  };

  return (
    <div className="admin-page">

      <h2>Revenue Analytics</h2>

      <div className="chart-wrapper">
        <h2>Weekly Revenue Overview</h2>
        <Bar data={data} options={options} />
      </div>

    </div>
  );
}

export default RevenueAnalytics;
