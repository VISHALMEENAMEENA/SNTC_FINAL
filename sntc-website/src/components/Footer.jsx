import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>SnTC</h3>
              <p>Science and Technology Council</p>
            </div>
            <p className="footer-description">
              The technical society of IIT Mandi where innovation and excellence come to play! 
              Our dynamic team of tech enthusiasts pushes the boundaries of what's possible.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/sntc_iitmandi/" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://in.linkedin.com/company/science-and-technology-council-iit-mandi" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:sntc@students.iitmandi.ac.in" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/clubs">Clubs</a></li>
              <li><a href="/interiit">Inter IIT</a></li>
              <li><a href="/sysadmins">SysAdmins</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Top Clubs</h4>
            <ul className="footer-links">
              <li><a href="http://pc.iitmandi.co.in/" target="_blank" rel="noopener noreferrer">Programming Club</a></li>
              <li><a href="http://robotronics.iitmandi.co.in/" target="_blank" rel="noopener noreferrer">Robotronics Club</a></li>
              <li><a href="https://ecell.iitmandi.co.in/" target="_blank" rel="noopener noreferrer">E-Cell</a></li>
              <li><a href="http://stac.iitmandi.co.in/" target="_blank" rel="noopener noreferrer">STAC</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> IIT Mandi, Kamand, Himachal Pradesh - 175005</p>
              <p><i className="fas fa-phone"></i> +91-1905-267-000</p>
              <p><i className="fas fa-envelope"></i> sntc@students.iitmandi.ac.in</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 Science and Technology Council, IIT Mandi. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Made with ❤️ by SnTC Development Team</p>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>
    </footer>
  );
};

export default Footer;