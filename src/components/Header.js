import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="navbar">

        {/* ── LEFT: Logo ── */}
        <Link to="/" className="nav-logo">
          <div className="nav-logo-icon">🚖</div>
          <div className="nav-logo-text">
            <strong>YRD TAXI</strong>
            <span>Trusted Rides</span>
          </div>
        </Link>

        {/* ── CENTER: Nav links ── */}
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/tariff" onClick={() => setMenuOpen(false)}>Tariff</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
          <li>
            <Link to="/" className="nav-book-btn-mobile" onClick={() => setMenuOpen(false)}>
              Book A Ride
            </Link>
          </li>
        </ul>

        {/* ── RIGHT: Phone + Download + Book button ── */}
        <div className="nav-actions">
          <div className="nav-contact">
            <a href="tel:+918110002300" className="nav-phone">📞 +91 81100 02300</a>
            <a href="#download" className="nav-download">📱 Download Our App</a>
          </div>
          <Link to="/" className="nav-book-btn">Book A Ride</Link>
        </div>

        {/* ── MOBILE: Hamburger ── */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>
    </div>
  );
}

export default Header;
