import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <span>📊</span>
          <h1>Dynamics 365 Insights</h1>
        </div>
        <nav className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : ''}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            Products
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;