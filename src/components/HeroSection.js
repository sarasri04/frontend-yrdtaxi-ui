import React from "react";
import { Link } from "react-router-dom";
import taxiImg from "../assets/images/taxi.png";
import "../styles/hero.css";

function HeroSection() {
  return (
    <section className="hero-section">

      {/* Background blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="hero-inner">

        {/* LEFT — Content */}
        <div className="hero-left">

          <div className="hero-badge">
            🏆 Tamil Nadu's Most Trusted Taxi Service
          </div>

          <h1 className="hero-title">
            Your Reliable<br />
            <span>Taxi Partner</span><br />
            Across Tamil Nadu
          </h1>

          <p className="hero-subtitle">
            Safe, comfortable and affordable rides for outstation trips,
            airport transfers, and local commutes. Book in minutes — ride in style.
          </p>

          <div className="hero-ctas">
            <a href="#book" className="hero-btn-primary">🚖 Book Your Ride</a>
            <Link to="/tariff" className="hero-btn-secondary">View Tariffs</Link>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>5,000+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>50+</strong>
              <span>Expert Drivers</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>25+</strong>
              <span>Cities Covered</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>24 / 7</strong>
              <span>Available</span>
            </div>
          </div>

        </div>

        {/* RIGHT — Taxi image */}
        <div className="hero-right">
          <div className="hero-img-wrapper">
            <img src={taxiImg} alt="YRD Taxi" className="hero-taxi-img" />
            {/* Floating info cards */}
            <div className="hero-float-card hero-float-top">
              ✅ Verified Drivers
            </div>
            <div className="hero-float-card hero-float-bottom">
              📍 GPS Tracked Rides
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default HeroSection;
