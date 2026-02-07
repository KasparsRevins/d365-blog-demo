import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          <div className="logo-icon">D365</div>
          <div className="logo-text">Dynamics <span>365</span> Insights</div>
        </NavLink>
        <nav className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Products
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            About Us
          </NavLink>
          <a href="https://learn.microsoft.com/en-us/dynamics365/" 
             className="cta-button secondary" 
             target="_blank" 
             rel="noopener noreferrer">
            Microsoft Docs
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;