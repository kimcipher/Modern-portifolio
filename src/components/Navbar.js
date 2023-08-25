import React from "react";
import "./navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Testimonials</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
