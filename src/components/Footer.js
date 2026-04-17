import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      {/* ── MAIN FOOTER GRID ── */}
      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">🚖</span>
            <div>
              <strong>YRD TAXI</strong>
              <small>Trusted Rides</small>
            </div>
          </div>
          <p>
            Tamil Nadu's most trusted taxi service. Safe, comfortable and
            affordable rides for outstation, airport transfers and local commutes.
            Available 24/7 across 25+ cities.
          </p>
          <div className="footer-contact-inline">
            <a href="tel:+918110002300">📞 +91 81100 02300</a>
            <a href="mailto:booking@yrdtaxi.com">✉ booking@yrdtaxi.com</a>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>🚗 Outstation Trips</li>
            <li>✈️ Airport Transfers</li>
            <li>🏙️ Local City Rides</li>
            <li>🔄 Round Trip Packages</li>
            <li>🏢 Corporate Taxi</li>
            <li>🎊 Event & Wedding Cabs</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/tariff">Tariff</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Customer Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

        {/* Contact & Address */}
        <div className="footer-col">
          <h4>Get In Touch</h4>
          <div className="footer-address">
            <p>📍 YRD Taxi Services<br />
               No. 12, Anna Salai,<br />
               Chennai – 600 002,<br />
               Tamil Nadu, India</p>
            <p><a href="tel:+918110002300">📞 +91 81100 02300</a></p>
            <p><a href="mailto:booking@yrdtaxi.com">✉ booking@yrdtaxi.com</a></p>
            <p>🕐 Available 24 hours, 7 days</p>
          </div>
          <div className="footer-social">
            <a href="#facebook" title="Facebook">f</a>
            <a href="#instagram" title="Instagram">in</a>
            <a href="https://wa.me/918110002300" title="WhatsApp">wa</a>
            <a href="#twitter" title="Twitter">tw</a>
          </div>
        </div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer-bottom">
        <p>© 2026 YRD Taxi Service. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <span>|</span>
          <a href="#terms">Terms of Service</a>
          <span>|</span>
          <a href="#refund">Refund Policy</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
