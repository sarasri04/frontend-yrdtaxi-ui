import React from "react";
import { Routes, Route } from "react-router-dom";

/* MAIN PAGES */
import Home from "./pages/Home";
import About from "./pages/About";
import Tariff from "./pages/Tariff";
import Contact from "./pages/Contact";

/* AUTH */
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import OtpLogin from "./pages/auth/OtpLogin";

/* CUSTOMER */
import BookingHistory from "./pages/customer/BookingHistory";
import InvoicePage from "./pages/customer/InvoicePage";
import Profile from "./pages/customer/Profile";

/* DRIVER */
import DriverDashboard from "./pages/driver/DriverDashboard";
import DriverTrips from "./pages/driver/DriverTrips";
import DriverEarnings from "./pages/driver/DriverEarnings";
import DriverProfile from "./pages/driver/DriverProfile";

/* ADMIN */
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageDrivers from "./pages/admin/ManageDrivers";
import ManageBookings from "./pages/admin/ManageBookings";
import ManageUsers from "./pages/admin/ManageUsers";
import RevenueAnalytics from "./pages/admin/RevenueAnalytics";
import RoutePricing from "./pages/admin/RoutePricing";

function RoutesPage() {
  return (
    <Routes>

      {/* PUBLIC */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tariff" element={<Tariff />} />
      <Route path="/contact" element={<Contact />} />

      {/* AUTH */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-login" element={<OtpLogin />} />

      {/* CUSTOMER */}
      <Route path="/my-bookings" element={<BookingHistory />} />
      <Route path="/invoice" element={<InvoicePage />} />
      <Route path="/profile" element={<Profile />} />

      {/* DRIVER */}
      <Route path="/driver/dashboard" element={<DriverDashboard />} />
      <Route path="/driver/trips" element={<DriverTrips />} />
      <Route path="/driver/earnings" element={<DriverEarnings />} />
      <Route path="/driver/profile" element={<DriverProfile />} />

      {/* ADMIN */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/drivers" element={<ManageDrivers />} />
      <Route path="/admin/bookings" element={<ManageBookings />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/revenue" element={<RevenueAnalytics />} />
      <Route path="/admin/routes" element={<RoutePricing />} />

      {/* 404 */}
      <Route path="*" element={<h2>Page Not Found</h2>} />

    </Routes>
  );
}

export default RoutesPage;