// Navbar.js

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/navbar.css'; // Impor file CSS untuk Navbar

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Mengaktifkan kelas "active" pada mode responsif
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        Your Logo
      </Link>
      <button className={`navbar-toggler ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navbar-nav ${isOpen ? 'responsive active' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/products' ? 'active' : ''}>
          <Link to="/products">Products</Link>
        </li>
        <li className={location.pathname === '/cart' ? 'active' : ''}>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
