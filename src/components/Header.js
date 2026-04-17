import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {

const [menuOpen, setMenuOpen] = useState(false);

return (

<div className="header">

{/* TOP BAR */}
<div className="topbar">

<a href="tel:+918110002300">📞 +91 81100 02300</a>

<span>|</span>

<a href="#">📱 Download App</a>

<span>|</span>

<a href="mailto:booking@yrdtaxi.com">
✉ booking@yrdtaxi.com
</a>

</div>

{/* NAVBAR */}
<div className="navbar">

<h2 className="logo">🚖 YRD TAXI</h2>

{/* MOBILE MENU BUTTON */}
<div
className="menu-toggle"
onClick={() => setMenuOpen(!menuOpen)}
>

☰

</div>

<ul className={menuOpen ? "menu active" : "menu"}>

<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/tariff">Tariff</Link></li>
<li><Link to="/contact">Contact</Link></li>

<li><Link to="/login">Login</Link></li>

</ul>

<button className="ride-btn">

<Link to="/" style={{color:"#fff",textDecoration:"none"}}>
Book A Ride
</Link>

</button>

</div>

</div>

);

}

export default Header;