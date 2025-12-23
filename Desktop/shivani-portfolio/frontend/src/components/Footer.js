import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Shivani Yadav</h3>
            <p>Final Year B.Tech Student & Aspiring Software Developer</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/certificates">Certificates</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Me</h4>
            <div className="social-links">
              <a href="https://linkedin.com/in/Shivani-yadav-184032290" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                LinkedIn
              </a>
              <a href="https://github.com/Shivaniyad13" target="_blank" rel="noopener noreferrer">
                <FaGithub />
                GitHub
              </a>
              <a href="mailto:shiviyadav1304@gmail.com">
                <FaEnvelope />
                Email
              </a>
              <a href="tel:+918726398174">
                <FaPhone />
                Phone
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Shivani Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;