import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Microsoft Dynamics 365</h4>
          <ul className="footer-links">
            <li><a href="https://dynamics.microsoft.com/">What is Dynamics 365?</a></li>
            <li><a href="https://dynamics.microsoft.com/en-us/solutions/">Solutions</a></li>
            <li><a href="https://dynamics.microsoft.com/en-us/pricing/">Pricing</a></li>
            <li><a href="https://dynamics.microsoft.com/en-us/overview/">Overview</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><a href="https://learn.microsoft.com/en-us/dynamics365/">Documentation</a></li>
            <li><a href="https://community.dynamics.com/">Community</a></li>
            <li><a href="https://dynamics.microsoft.com/en-us/blog/">Blog</a></li>
            <li><a href="https://dynamics.microsoft.com/en-us/events/">Events</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="https://www.microsoft.com/en-us/about/">About Microsoft</a></li>
            <li><a href="https://www.microsoft.com/en-us/corporate-responsibility">Responsibility</a></li>
            <li><a href="https://careers.microsoft.com/">Careers</a></li>
            <li><a href="https://news.microsoft.com/">News</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Developers</h4>
          <ul className="footer-links">
            <li><a href="https://developer.microsoft.com/en-us/dynamics-365">Developer Center</a></li>
            <li><a href="https://docs.microsoft.com/en-us/dynamics365/">API Reference</a></li>
            <li><a href="https://powerusers.microsoft.com/">Power Platform</a></li>
            <li><a href="https://github.com/microsoft">GitHub</a></li>
          </ul>
        </div>
        
        <div className="copyright">
          <div>© {currentYear} All rights reserved.</div>
          <div style={{marginTop: '0.5rem', fontSize: '0.8rem'}}>
            <a href="https://www.microsoft.com/en-us/legal/terms-of-use" style={{color: 'var(--ms-gray-40)', margin: '0 0.5rem'}}>Terms of Use</a>
            <a href="https://privacy.microsoft.com/en-us/privacystatement" style={{color: 'var(--ms-gray-40)', margin: '0 0.5rem'}}>Privacy Policy</a>
            <a href="https://www.microsoft.com/en-us/legal/intellectualproperty/copyright" style={{color: 'var(--ms-gray-40)', margin: '0 0.5rem'}}>Copyright</a>
            <a href="https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks" style={{color: 'var(--ms-gray-40)', margin: '0 0.5rem'}}>Trademarks</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;