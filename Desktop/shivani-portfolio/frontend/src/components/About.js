import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate final-year B.Tech student in Computer Science and Engineering 
              at Babu Banarsi Das University, with a strong foundation in software development 
              and a keen interest in creating innovative solutions to real-world problems.
            </p>
            
            <h3>My Professional Approach</h3>
            <p>
              My development process involves understanding user needs, designing robust architectures, 
              and implementing clean, efficient code. I believe in continuous learning and staying 
              updated with the latest technologies.
            </p>

            <h3>Core Values</h3>
            <ul className="values-list">
              <li><strong>Innovation:</strong> Creating solutions that make a difference</li>
              <li><strong>Quality:</strong> Delivering clean, maintainable code</li>
              <li><strong>Collaboration:</strong> Working effectively in team environments</li>
              <li><strong>Learning:</strong> Continuously improving my skills</li>
            </ul>

            <div className="skills-highlights">
              <h3>Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <span>React.js, HTML/CSS, JavaScript</span>
                </div>
                <div className="skill-category">
                  <h4>Backend</h4>
                  <span>Node.js, Express.js, REST APIs</span>
                </div>
                <div className="skill-category">
                  <h4>Database</h4>
                  <span>MongoDB, MySQL, Firebase</span>
                </div>
                <div className="skill-category">
                  <h4>Tools</h4>
                  <span>Git, VS Code, Postman, Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;