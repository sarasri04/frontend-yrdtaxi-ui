import React from "react";
import "../styles/tariffs.css";

import sedan from "../assets/images/sedan.png";
import suv from "../assets/images/suv.png";
import innova from "../assets/images/innova.png";

function Tariffs() {

  const cars = [
    { name: "Sedan", img: sedan, oneway: 14, round: 13 },
    { name: "Sedan Etios", img: sedan, oneway: 15, round: 13 },
    { name: "SUV", img: suv, oneway: 19, round: 18 },
    { name: "SUV Innova", img: innova, oneway: 20, round: 19 }
  ];

  return (
    <div className="tariffs-section">

      <h2 className="title">Our Tariffs</h2>
      <p className="title-subtitle">Transparent pricing — no hidden charges</p>

      <div className="tariff-grid">

        {cars.map((car, index) => (
          <div className="tariff-card" key={index}>

            <img src={car.img} alt={car.name} className="car-img" />

            <h3>{car.name}</h3>

            <p>🚗 One Way — ₹{car.oneway}/km</p>
            <p>🔄 Round Trip — ₹{car.round}/km</p>

            <button className="tariff-book-btn">Book Now</button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Tariffs;
