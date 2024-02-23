// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; BEC Enquiry. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms and Conditions</a>
          <a href="/help">Help and Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
