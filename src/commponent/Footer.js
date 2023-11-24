// Footer.js
import React from 'react';
import './Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: pratikmehakare8@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Facebook - BookHaven</p>
          <p>Twitter  - @HavenBook</p>
          <p>Instagram - BookHaven</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 BookHaven. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
