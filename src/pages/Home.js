import React from "react";

import HeroSection from "../components/HeroSection";
import BookingSection from "../components/BookingSection";
import LiveDriverMap from "../components/LiveDriverMap";

function Home() {
  return (
    <div id="home">

      <HeroSection />

      <BookingSection />

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Available Drivers Near You
      </h2>

      <LiveDriverMap />

    </div>
  );
}

export default Home;