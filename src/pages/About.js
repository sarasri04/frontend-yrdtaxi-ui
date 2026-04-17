import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

function About() {
  return (
    <div>

      {/* ── 1. HERO BANNER ── */}
      <section className="about-hero">
        <div className="about-hero-inner">

          <div className="about-breadcrumb">Home &nbsp;/&nbsp; <span>About Us</span></div>

          <h1>Driven by Trust,<br />Powered by <span>Service</span></h1>

          <p>
            Since 2018, YRD Taxi has been the go-to taxi service for thousands of passengers
            across Tamil Nadu. We combine reliability, safety and affordability to make every
            journey a comfortable experience — whether it's a city trip, outstation ride or
            airport transfer.
          </p>

          <div className="about-hero-stats">
            <div className="about-hero-stat">
              <strong>6+</strong>
              <span>Years in Service</span>
            </div>
            <div className="about-hero-stat">
              <strong>5,000+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="about-hero-stat">
              <strong>50+</strong>
              <span>Verified Drivers</span>
            </div>
            <div className="about-hero-stat">
              <strong>25+</strong>
              <span>Cities Covered</span>
            </div>
            <div className="about-hero-stat">
              <strong>4.8 ★</strong>
              <span>Average Rating</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. COMPANY INTRO ── */}
      <section className="about-intro">
        <div className="about-intro-inner">

          <div className="about-intro-text">
            <div className="section-label">Who We Are</div>
            <h2>Tamil Nadu's Most <span>Trusted</span> Taxi Partner</h2>
            <p>
              YRD Taxi was founded with one clear goal — to provide the people of Tamil Nadu
              with a taxi service they can truly rely on. What started as a small fleet of
              cars in Chennai has grown into a trusted transportation network spanning
              25+ cities across the state.
            </p>
            <p>
              We are not just a taxi company. We are a team of passionate professionals
              committed to making your travel safe, punctual and comfortable. Every driver
              in our fleet is verified, trained and dedicated to giving you the best
              experience from pickup to drop.
            </p>
            <p>
              Whether you are heading to the airport, planning an outstation trip, or need
              a reliable cab for a family function — YRD Taxi is always just a call or
              click away.
            </p>

            <ul className="about-intro-highlights">
              <li>Government-registered and fully licensed taxi operator</li>
              <li>All vehicles GPS-tracked for passenger safety</li>
              <li>Transparent fare — no surge pricing, no hidden charges</li>
              <li>24/7 customer support and emergency assistance</li>
              <li>Cashless payment options available</li>
            </ul>
          </div>

          <div className="about-info-panel">
            <h3>Company Details</h3>
            <div className="about-info-row">
              <span className="about-info-label">Company Name</span>
              <span className="about-info-value">YRD Taxi Services</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Founded</span>
              <span className="about-info-value">2018</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Headquarters</span>
              <span className="about-info-value">Chennai, Tamil Nadu</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Service Area</span>
              <span className="about-info-value">25+ Cities in Tamil Nadu</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Fleet Size</span>
              <span className="about-info-value">50+ Vehicles</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Car Types</span>
              <span className="about-info-value">Sedan, Etios, SUV, Innova</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Availability</span>
              <span className="about-info-value highlight">24 / 7 — 365 Days</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Contact</span>
              <span className="about-info-value">+91 81100 02300</span>
            </div>
            <div className="about-info-row">
              <span className="about-info-label">Email</span>
              <span className="about-info-value">booking@yrdtaxi.com</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. MISSION / VISION / VALUES ── */}
      <section className="about-mvv">
        <div className="about-mvv-inner">

          <div className="about-section-header">
            <span className="section-label">Our Foundation</span>
            <h2>What Drives Us Every Day</h2>
          </div>

          <div className="mvv-grid">

            <div className="mvv-card">
              <div className="mvv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide every passenger in Tamil Nadu with a safe, comfortable and
                affordable taxi experience — available anytime, anywhere. We aim to be
                the most reliable transportation partner for both individuals and businesses.
              </p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To become the leading taxi service across South India by building a
                technology-driven platform that connects passengers with trusted drivers
                seamlessly — making travel stress-free for every Tamil Nadu family.
              </p>
            </div>

            <div className="mvv-card">
              <div className="mvv-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Safety first — always. Honesty in pricing. Respect for every passenger.
                Punctuality as a promise. Continuous improvement in driver standards.
                These values are not just words — they are how we operate every single day.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. OUR STORY ── */}
      <section className="about-story">
        <div className="about-story-inner">

          <div className="about-section-header">
            <span className="section-label">Our Journey</span>
            <h2>The YRD Taxi Story</h2>
          </div>

          <div className="story-timeline">

            <div className="story-item">
              <div className="story-dot" />
              <div className="story-year">2018 — The Beginning</div>
              <h3>Started with 5 Cars in Chennai</h3>
              <p>
                YRD Taxi was born out of a personal frustration with unreliable and
                overpriced taxi services. We launched with just 5 cars and a small
                team in Chennai, focused on one thing: showing up on time and treating
                every passenger with respect.
              </p>
            </div>

            <div className="story-item">
              <div className="story-dot" />
              <div className="story-year">2020 — Growing Stronger</div>
              <h3>Expanded to 10 Major Tamil Nadu Cities</h3>
              <p>
                Despite challenging times, our fleet grew to 25 vehicles and we expanded
                operations to Coimbatore, Madurai, Trichy, Salem and Tirunelveli. Our
                commitment to safety and reliability earned us a 4.7-star average rating
                from passengers.
              </p>
            </div>

            <div className="story-item">
              <div className="story-dot" />
              <div className="story-year">2022 — Going Digital</div>
              <h3>Launched Online Booking Platform</h3>
              <p>
                We invested in technology to make booking easier. Passengers could now
                book a taxi online, get instant fare estimates and track their driver
                in real time. This moved us from a phone-only service to a full
                digital-first taxi company.
              </p>
            </div>

            <div className="story-item">
              <div className="story-dot" />
              <div className="story-year">2024 — Milestone Reached</div>
              <h3>5,000+ Customers and 50+ Drivers Across 25 Cities</h3>
              <p>
                Today, YRD Taxi operates across 25+ cities in Tamil Nadu with a fleet
                of 50+ well-maintained vehicles. We have completed over 15,000 trips
                and continue to grow — staying true to our founding promise of safe,
                honest and reliable taxi service.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. SERVICES ── */}
      <section className="about-services">
        <div className="about-services-inner">

          <div className="about-section-header">
            <span className="section-label">What We Offer</span>
            <h2>Our Taxi Services</h2>
          </div>

          <div className="services-grid">

            <div className="service-card">
              <div className="service-card-icon">🛣️</div>
              <div className="service-card-body">
                <h3>Outstation Trips</h3>
                <p>
                  One-way and round-trip outstation cabs at transparent per-km rates.
                  Ideal for family trips, pilgrimage tours and business travel across Tamil Nadu.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-icon">✈️</div>
              <div className="service-card-body">
                <h3>Airport Transfers</h3>
                <p>
                  Punctual pickup and drop for all airports in Tamil Nadu — Chennai,
                  Coimbatore, Madurai and Trichy. Flight tracking ensures no missed rides.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-icon">🏙️</div>
              <div className="service-card-body">
                <h3>Local City Rides</h3>
                <p>
                  Hourly and full-day local cab packages for shopping, hospital visits,
                  meetings and events within the city at affordable flat rates.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-icon">🔄</div>
              <div className="service-card-body">
                <h3>Round Trip Packages</h3>
                <p>
                  Cost-effective round-trip fares for tourists and families visiting
                  multiple destinations. Driver stays with you for the entire duration.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-icon">🏢</div>
              <div className="service-card-body">
                <h3>Corporate Taxi</h3>
                <p>
                  Monthly and contractual cab services for offices and businesses.
                  Dedicated drivers, timely pickups and monthly billing for corporate accounts.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-icon">🎊</div>
              <div className="service-card-body">
                <h3>Wedding &amp; Event Cabs</h3>
                <p>
                  Decorated and regular cabs for weddings, receptions and family events.
                  Fleet booking available for guests and family convoy arrangements.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. COVERAGE ── */}
      <section className="about-coverage">
        <div className="about-coverage-inner">

          <div className="about-section-header">
            <span className="section-label">Where We Operate</span>
            <h2>Serving Across Tamil Nadu</h2>
          </div>

          <div className="coverage-cities">
            {[
              "Chennai", "Coimbatore", "Madurai", "Trichy", "Salem",
              "Tirunelveli", "Vellore", "Erode", "Tiruppur", "Thoothukudi",
              "Nagercoil", "Kanyakumari", "Dindigul", "Thanjavur", "Kumbakonam",
              "Pudukkottai", "Karur", "Namakkal", "Dharmapuri", "Krishnagiri",
              "Hosur", "Ooty", "Kodaikanal", "Yercaud", "Rameswaram"
            ].map((city, i) => (
              <span className="city-badge" key={i}>{city}</span>
            ))}
          </div>

          <p className="coverage-note">
            Don't see your city? Call us — we cover many more locations on request.
          </p>

        </div>
      </section>

      {/* ── 7. CALL TO ACTION ── */}
      <section className="about-cta">
        <h2>Ready to Ride with YRD Taxi?</h2>
        <p>
          Book your taxi today and experience the difference. Safe rides,
          honest prices and drivers you can trust — every single time.
        </p>
        <div className="about-cta-btns">
          <Link to="/" className="cta-btn-white">🚖 Book Your Taxi Now</Link>
          <Link to="/contact" className="cta-btn-outline">Contact Us</Link>
        </div>
      </section>

    </div>
  );
}

export default About;
