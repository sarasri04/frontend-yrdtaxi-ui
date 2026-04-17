import React from "react";
import "../styles/pages.css";

function Contact() {
  return (
    <div className="contact-page">

      <h2>Contact Us</h2>

      <div className="contact-grid">

        <div className="contact-info-card">
          <div className="contact-icon">📞</div>
          <h4>Phone</h4>
          <p><a href="tel:+918110002300">+91 81100 02300</a></p>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">✉</div>
          <h4>Email</h4>
          <p><a href="mailto:booking@yrdtaxi.com">booking@yrdtaxi.com</a></p>
        </div>

        <div className="contact-info-card">
          <div className="contact-icon">🕐</div>
          <h4>Availability</h4>
          <p>24 / 7 Support</p>
        </div>

      </div>

    </div>
  );
}

export default Contact;
