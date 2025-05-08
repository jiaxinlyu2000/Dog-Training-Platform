import React, { useState } from "react";
import "../styles/header.css";

function Header({ setCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <header className="site-header">
      
      <div className="logo" onClick={() => setCurrentPage("home")}>
        <img src="/images/logo.png" alt="Logo" className="logo-image" />
        <span>Dog Training Club</span>
      </div>

      
      <div className="hamburger-container">
        <button
          className="hamburger-menu"
          onClick={() => setMenuOpen((prev) => !prev)} 
        >
          ☰
        </button>
        {menuOpen && (
          <div className="menu-dropdown">
            <ul>
              <li onClick={() => { setCurrentPage("home"); setMenuOpen(false); }}>Home</li>
              <li onClick={() => { setCurrentPage("courses"); setMenuOpen(false); }}>Courses</li>
              <li onClick={() => { setCurrentPage("about-us"); setMenuOpen(false); }}>About Us</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
