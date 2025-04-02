import React, { useState } from "react";
import { Link } from "react-router-dom";
import food from "../assets/instamat.png";
import "./Navbar.css";

const Navbar = ({ cartItems = [], setHomeCount, homeCount, search, setSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/Admin">
        <h3 className="admin">Admin :)</h3>
      </Link>
      <Link to="/" className="logo-container">
        <img src={food} alt="JK Instamat Logo" className="logo" />
        <h3>JK Instamat</h3>
      </Link>

      <div className="search-container">
        <Link to="/search">
          <input
            type="text"
            placeholder="Search for food..."
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
            alt="Search Icon"
            className="icon search-icon"
          />
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        &#x22EE; 
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/offers" className="menu-item" onClick={closeMenu}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/726/726496.png"
            alt="Offer Icon"
            className="icon"
          />
          <span>Offers</span>
        </Link>

        <Link to="/signin" className="menu-item" onClick={closeMenu}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
            alt="Sign In Icon"
            className="icon"
          />
          <span>Sign In</span>
        </Link>

        <Link to="/cart" className="menu-item cart-section" onClick={closeMenu}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="Cart Icon"
            className="icon cart-icon"
          />
          <span className="cart-text">Cart:({cartItems.length + homeCount})</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;











