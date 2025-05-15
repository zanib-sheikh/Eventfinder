import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img
            src="https://th.bing.com/th/id/OIP.MNyGTGd8YoRbxaLPVAOP4AHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt="Meetup Logo"
            className="logo-img"
          />
          
        </div>

        <input
          type="search"
          placeholder="Search for events, groups, or topics"
          className="search-input"
        />

        <div className="nav-buttons">
          <button className="nav-btn">Create Event</button>
          <button className="nav-btn">Sign Up</button>
          <button className="nav-btn">Log In</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
