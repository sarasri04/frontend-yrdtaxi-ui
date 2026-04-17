import React, { useState } from "react";
import "../../styles/pages.css";

function Profile() {

  const [user] = useState({
    name: "John Doe",
    email: "john@gmail.com",
    mobile: "9876543210"
  });

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-avatar">👤</div>

        <h2>My Profile</h2>

        <div className="profile-field">
          <span className="profile-label">Name</span>
          <span className="profile-value">{user.name}</span>
        </div>

        <div className="profile-field">
          <span className="profile-label">Email</span>
          <span className="profile-value">{user.email}</span>
        </div>

        <div className="profile-field">
          <span className="profile-label">Mobile</span>
          <span className="profile-value">{user.mobile}</span>
        </div>

        <button className="edit-btn">Edit Profile</button>

      </div>

    </div>
  );
}

export default Profile;
