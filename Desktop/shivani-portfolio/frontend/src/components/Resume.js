import React from "react";
import { FaExternalLinkAlt, FaDownload, FaEye } from "react-icons/fa";
import "../styles/Resume.css";

const Resume = () => {
    const resume = {
        title: "Software Developer Resume",
        name: "Shivani Yadav",
        role: "B.Tech CSE | Full Stack Developer",
        description:
            "A comprehensive overview of my education, projects, internships, and technical skills, focused on software development and real-world problem solving.",
        viewLink: "/latest update sde shivani.pdf",
        downloadLink: "/latest update sde shivani.pdf",
    };

    const handleViewResume = () => {
        window.open(resume.viewLink, "_blank");
    };

    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = resume.downloadLink;
        link.download = "Shivani_Yadav_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="resume-section">
            <div className="container">
                <h2 className="section-title">Resume</h2>

                <div className="resume-card">
                    <div className="resume-header">
                        <h3 className="resume-title">{resume.title}</h3>
                        <div className="resume-badge">Updated</div>
                    </div>

                    <p className="resume-name">
                        <strong>Name:</strong> {resume.name}
                    </p>

                    <p className="resume-role">
                        <FaEye className="icon" />
                        {resume.role}
                    </p>

                    <p className="resume-description">{resume.description}</p>

                    <div className="resume-links">
                        <button className="resume-btn view-btn" onClick={handleViewResume}>
                            <FaExternalLinkAlt className="btn-icon" />
                            View Resume
                        </button>

                        <button
                            className="resume-btn download-btn"
                            onClick={handleDownloadResume}
                        >
                            <FaDownload className="btn-icon" />
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
