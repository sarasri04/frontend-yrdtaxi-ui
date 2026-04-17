import React from "react";
import "../styles/pages.css";

function Tariff() {
  return (
    <div className="tariff-page">

      <h2>Taxi Tariff</h2>

      <table className="tariff-table">

        <thead>
          <tr>
            <th>Car Type</th>
            <th>One Way</th>
            <th>Round Trip</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Sedan</td>
            <td className="price-tag">₹14/km</td>
            <td className="price-tag">₹13/km</td>
          </tr>
          <tr>
            <td>Sedan Etios</td>
            <td className="price-tag">₹15/km</td>
            <td className="price-tag">₹13/km</td>
          </tr>
          <tr>
            <td>SUV</td>
            <td className="price-tag">₹19/km</td>
            <td className="price-tag">₹18/km</td>
          </tr>
          <tr>
            <td>SUV Innova</td>
            <td className="price-tag">₹20/km</td>
            <td className="price-tag">₹19/km</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default Tariff;
