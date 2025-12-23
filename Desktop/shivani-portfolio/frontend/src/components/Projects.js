import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real Time Air Quality Monitor",
      description: "Web application for visualizing real-time AQI using satellite and sensor data with predictive modeling",
      tools: "Leaflet.js, Open Street Map, Node.js, Firebase",
      features: [
        "Real-time AQI visualization for cities and villages",
        "24-72 hours AQI forecasting",
        "Health advisory alerts system",
        "Historical AQI trends by geolocation"
      ],
      impact: "Provides actionable air quality insights to help users make informed health decisions",
      github: "https://github.com/Shivaniyad13/AirQuality.git",
      demo: "https://air-quality-ebon.vercel.app/"
    },
    
    {
      id: 3,
      title: "Secure Voting System",
      description: "QR Code-based digital voting system with automated verification",
      tools: "Java, Android Studio, QR Technology",
      features: [
        "Secure automated voter verification",
        "QR Code-based digital voting passes",
        "Streamlined voting process",
        "Enhanced transparency and security"
      ],
      impact: "Increases voting efficiency while maintaining security standards",
      github: "https://github.com/Shivaniyad13/Atomatic-Poll-Booth-verification-using-QR.git",
      demo: "https://voting-process.vercel.app/"
    },
{
  id: 4,
  title: "Youth Mental Wellness Project",
  description: "A web-based platform designed to promote mental health awareness and provide emotional support resources for youth through interactive tools and self-assessment modules.",
  tools: "React.js, Node.js, Express.js, MongoDB, CSS",
  features: [
    "Self-assessment quizzes to evaluate stress and anxiety levels",
    "Chatbot for basic emotional support and guidance",
    "Resource library with curated mental health content",
    "Anonymous community discussion forum"
  ],
  impact: "Encourages mental wellness among youth by offering accessible tools for self-awareness, education, and peer support.",
  github: "https://github.com/Shivaniyad13/Youth-Mental-Wellness-Project.git",
  demo: "https://youth-mental-wellness-project-akx3.vercel.app/"
},

{
  id: 3,
  title: "Wine Quality Prediction System",
  description: "Machine learning-based web application that predicts wine quality scores based on physicochemical properties using data-driven models.",
  tools: "Python, Streamlit, Scikit-learn, Pandas, NumPy",
  features: [
    "Interactive Streamlit web app for real-time wine quality prediction",
    "Data preprocessing and feature analysis for improved accuracy",
    "Multiple ML models trained and compared for best performance",
    "User-friendly interface for uploading custom datasets and viewing results"
  ],
  impact: "Helps wine producers and researchers quickly assess quality standards and optimize production processes through data insights.",
  github: "https://github.com/Shivaniyad13/Data_Analytics-_Wine-_Predict.git",
  demo: " https://calculat-m7yzabhcvmqvqryatujexo.streamlit.app"
}

,
    
    
    {
      id: 2,
      title: "Accidental & Emergency Services",
      description: "Smart web application for real-time emergency detection and management system",
      tools: "Python, Google Cloud, APIs, Web Dashboard",
      features: [
        "Real-time location tracking and mapping",
        "Automated alert generation to hospitals and emergency services",
        "Sensor integration for accident detection",
        "User-friendly emergency reporting interface"
      ],
      impact: "Reduces emergency response time and improves coordination between services",
      github: "https://github.com/ry538663/Hospital.git",
      demo: "https://moonlit-meerkat-7ddefb.netlify.app/"
    },

{
  id: 3,
  title: "Dispatch Optimization System",
  description: "A smart map-based system for optimizing vehicle dispatch, routing, and real-time monitoring for emergency and logistics operations",
  tools: "HTML, CSS, JavaScript, Leaflet.js, OpenStreetMap, APIs",
  features: [
    "Real-time vehicle location tracking on an interactive map",
    "Optimized route generation based on distance and traffic data",
    "Live status updates for dispatched units",
    "Dynamic dashboard for monitoring and managing active dispatches"
  ],
  impact: "Improves response efficiency, reduces travel time, and enhances coordination for emergency and logistics teams",
  github: "https://github.com/ry538663/Accidental-updated.git",
  demo: "https://lovely-pika-cbebb8.netlify.app/"
}



  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tools">
                <strong>Technologies:</strong> {project.tools}
              </div>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-impact">
                <strong>Impact:</strong> {project.impact}
              </div>
              
              <div className="project-links">
                <a href={project.github} className="project-link">GitHub</a>
                <a href={project.demo} className="project-link">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;