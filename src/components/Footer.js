import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Dynamics 365 Insights</h3>
          <p>Your trusted source for Microsoft Dynamics 365</p>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="copyright">
          © {currentYear} Dynamics 365 Insights. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;