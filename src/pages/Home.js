import React from "react";
import HeroSection from "../components/HeroSection";
import BookingSection from "../components/BookingSection";
import Features from "../components/Features";
import Tariffs from "../components/Tariffs";

function Home() {
  return (
    <div id="home">

      {/* 1. Hero — big banner with stats */}
      <HeroSection />

      {/* 2. Book Your Taxi — form + trust panel */}
      <BookingSection />

      {/* 3. Why Choose Us — 6 feature cards */}
      <Features />

      {/* 4. Our Fleet & Tariffs */}
      <Tariffs />

    </div>
  );
}

export default Home;
