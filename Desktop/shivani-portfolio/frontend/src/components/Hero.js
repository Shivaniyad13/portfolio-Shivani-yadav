import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Comonents/Hero.css';
import Photo from "../assets/images/Photo.jpg"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Shivani Yadav</span>
          </h1>
          <h2 className="hero-subtitle">
            Final Year B.Tech Student & Aspiring Software Developer
          </h2>
          <p className="hero-description">
            Passionate full-stack developer specializing in creating innovative web solutions. 
            Currently pursuing Computer Science Engineering with 8.45 GPA, experienced in 
            React, Node.js, and modern web technologies.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          {/* Add your professional photo here */}
          <div className="image-placeholder">
             <img src={Photo} alt="Shivani Yadav" className="profile-photo" />
            {/* <span>Your Photo</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;