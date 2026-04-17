import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{display:"flex",gap:"20px"}}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/tariff">Tariff</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navbar;
