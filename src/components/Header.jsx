import React from "react";
import ReactDOM from "react-dom";

function Header() {
  return (
    <div className="navbar">
      <h4> Election Management System</h4>
      <a href="#home">Home</a>
      <a href="#about">About EMS</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact Us</a>
      <button className="search-button">Search</button>
    </div>
  );
}

export default Header;
