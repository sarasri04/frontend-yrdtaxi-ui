import React from "react";
import "./features.css";

function Features() {
  const items = [
    {
      icon: "📱",
      title: "Easy Online Booking",
      desc: "Book your ride in under 2 minutes. Select pickup, drop, car type and confirm — it's that simple."
    },
    {
      icon: "👨‍✈️",
      title: "Verified Drivers",
      desc: "All drivers are background-checked, licensed and trained for safe, courteous service."
    },
    {
      icon: "📍",
      title: "Real-Time Tracking",
      desc: "Track your taxi live on the map. Know exactly when your driver will arrive."
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      desc: "No surge pricing. No hidden charges. What you see is what you pay — always."
    },
    {
      icon: "🚗",
      title: "Multiple Car Options",
      desc: "Choose from Sedan, Etios, SUV or Innova based on your comfort and group size."
    },
    {
      icon: "🕐",
      title: "24 / 7 Support",
      desc: "Our support team is available round the clock to assist you with any queries."
    }
  ];

  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Why Choose <span>YRD TAXI?</span></h2>
        <p>Thousands of happy customers trust us for every journey across Tamil Nadu</p>
      </div>
      <div className="features-grid">
        {items.map((item, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
