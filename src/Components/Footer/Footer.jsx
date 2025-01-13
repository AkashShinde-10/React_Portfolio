import React from "react";
import "./Footer.css";

const Footer = ({theme}) => {
  return (
    <footer>
      <div className="footer-content">

        <div className="social-links">
          <a  className={`footer-link ${theme}`} href="https://github.com/AkashShinde-10" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a  className={`footer-link ${theme}`} href="https://www.linkedin.com/in/akash-shinde-233402233" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        
        </div> 
  
        <div className="footer-bottom">
          <p>&copy; 2025 Akash Shinde. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
