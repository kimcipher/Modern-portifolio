import React, { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <button className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        Menu
      </button>
      <div className={`overlay ${menuOpen ? "active" : ""}`} onClick={closeMenu} />
      <div className={`navbar-drawer ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#testimonials" className="navbar-link">Testimonials</a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
