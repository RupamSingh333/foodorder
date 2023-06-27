import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    
    <div><br/>
    <footer className="footer"> 
    
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-heading">Contact Us</h2>
          <p className="footer-info">123 Street, City</p>
          <p className="footer-info">Email: info@example.com</p>
          <p className="footer-info">Phone: +1 234 567 890</p>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Explore</h2>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#" className="footer-link">About</a></li>
            <li><a href="#" className="footer-link">Services</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Follow Us</h2>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-info">&copy; 2023 Doomshell Software. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default Footer;
