import React from 'react';
import { FaExternalLinkAlt, FaDownload, FaEye } from 'react-icons/fa';
import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    // {
    //   id: 1,
    //   title: "Soft Skill Training Certificate",
    //   issuer: "Learnovate Enterprises",
    //   date: "NOV 2024 - MARCH 2025",
    //   description: "Successfully completed comprehensive soft skills training program",
    //   viewLink: "https://drive.google.com/file/d/1GmV3uUhFfExgAyhKzzdqDdQcz_d9F8fB/view?usp=drive_link", // Replace with actual certificate image URL
    //   downloadLink: "#", // Replace with actual PDF download link
    //   type: "image" // or "pdf"
    // },
    {
      id: 1,
      title: "International Conference Paper Presentation (ICONCEPT 2025)",
      issuer: "IEEE Madras Section | NIT Puducherry, Karaikal",
      date: "December 2025",
      description:
        "Presented a research paper titled 'A Real-Time Web Application for Autonomous Accident Detection and Emergency Response Coordination' at the 2025 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (ICONCEPT).",
      viewLink: "https://drive.google.com/file/d/10n0PCWlftWjuyJqEpYm3Y4n1UHV6-tR6/view?usp=drive_link",
      downloadLink: "#",
      type: "image"
    },
    {
      id: 2,
      title: "Research Paper Competition Participant",
      issuer: "Akhil Jyoti 2025 - BBD University",
      date: "2025",
      description: "Selected participant in prestigious university research competition",
      viewLink: "https://drive.google.com/file/d/15RhngesPuRNruVSg9VY3Xn7e_ssGq6_-/view?usp=sharing",
      downloadLink: "#",
      type: "image"
    },
    {
      id: 3,
      title: "GDG Campus Solution Challenge",
      issuer: "Google Developer Groups",
      date: "2024",
      description: "Participated in campus solution challenge showcasing technical innovation",
      viewLink: "https://drive.google.com/file/d/1kT9GoCJS0ZqlSW9peJa8gS8p_VS-FwHL/view?usp=sharing",
      downloadLink: "#",
      type: "image"
    },
    {
      id: 4,
      title: "Outstanding Project Performance",
      issuer: "Entermellite Company",
      date: "2022",
      description: "Certified for exceptional performance in major and minor projects during internship",
      viewLink: "https://drive.google.com/file/d/18Vtk6I6dFGcDOYHtf0iu3bJ3KE_p84ci/view?usp=sharing",
      downloadLink: "#",
      type: "image"
    },
    {
      id: 5,
      title: "ISRO  Hackathon",
      issuer: "Hack || Skill",
      date: "2024",
      description: "Participated as team leader in prestigious hackathon competition",
      viewLink: "https://drive.google.com/file/d/1H6VT-VPrmOlnPBP20F_nG62aADrORjnm/view?usp=sharing",
      downloadLink: "https://drive.google.com/file/d/1H6VT-VPrmOlnPBP20F_nG62aADrORjnm/view?usp=sharing",
      type: "image"
    },
    {
      id: 6,
      title: "Team Work certificate",
      issuer: "BBD University ",
      date: "2024",
      description: "6 days  of dedicated volunteering service in community development",
      viewLink: "https://drive.google.com/file/d/1GJSSfCTVMfiHlI8sjtxOaRBnbR9LiRE8/view?usp=drive_link",
      downloadLink: "#",
      type: "image"
    },

    {
      id: 2,
      title: "Full Stack Development Summer Training (MERN)",
      issuer: "Learnovate & GRASTech | BBD University, Lucknow",
      date: "June 2025 – July 2025",
      description:
        "Successfully completed a project-based summer training program in Full Stack Development using the MERN stack, focusing on real-world application development and industry practices.",
      viewLink: "https://drive.google.com/file/d/1GmV3uUhFfExgAyhKzzdqDdQcz_d9F8fB/view?usp=drive_link",
      downloadLink: "#",
      type: "image"
    },
    {
      id: 3,
      title: "Web Development & Designing Internship Recommendation",
      issuer: "Oasis Infobyte",
      date: "August 2025",
      description:
        "Received a Letter of Recommendation for excellent performance as a Web Development and Designing Intern, demonstrating strong technical skills, problem-solving ability, and teamwork.",
      viewLink: "https://drive.google.com/file/d/1ce0yntgSmXLe828FWQCMkIdTLmmwHMpZ/view?usp=drive_link",
      downloadLink: "#",
      type: "image"
    },
    {
      id: 4,
      title: "Microsoft Certified: Azure Data Scientist Associate",
      issuer: "Microsoft",
      date: "September 2025",
      description:
        "Earned Microsoft Azure Data Scientist Associate certification by successfully meeting all requirements, validating expertise in data science, machine learning, and Azure-based solutions.",
      viewLink: "https://drive.google.com/file/d/1rbEXKTyE5-mYL3j1X5kZ1UUqvKx9n4un/view?usp=drive_link",
      downloadLink: "#",
      type: "image"
    },
    {
      id: 5,
      title: "Adobe India Hackathon – Round 1 Participation",
      issuer: "Adobe | Unstop",
      date: "2024",
      description:
        "Participated in Round 1 of the Adobe India Hackathon, which included an online MCQ assessment and coding challenge, representing Babu Banarasi Das University as a team member.",
      viewLink: "https://drive.google.com/file/d/1O9yQn1FBTZCBtvy2nNtju_Ro9wtM5ThL/view?usp=drive_link",
      downloadLink: "#",
      type: "image"
    }



  ];

  const handleViewCertificate = (certificate) => {
    if (certificate.type === 'pdf') {
      // Open PDF in new tab
      window.open(certificate.viewLink, '_blank');
    } else {
      // For images, open in modal or new tab
      window.open(certificate.viewLink, '_blank');
    }
  };

  const handleDownloadCertificate = (certificate) => {
    // Create a temporary anchor element for download
    const link = document.createElement('a');
    link.href = certificate.downloadLink;
    link.download = `${certificate.title.replace(/\s+/g, '_')}.${certificate.type === 'pdf' ? 'pdf' : 'jpg'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="certificates">
      <div className="container">
        <h2 className="section-title">Certificates & Achievements</h2>
        <div className="certificates-grid">
          {certificates.map(cert => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-header">
                <h3 className="certificate-title">{cert.title}</h3>
                <div className="certificate-badge">Verified</div>
              </div>

              <p className="certificate-issuer">
                <strong>Issued by:</strong> {cert.issuer}
              </p>

              <p className="certificate-date">
                <FaEye className="icon" />
                {cert.date}
              </p>

              <p className="certificate-description">{cert.description}</p>

              <div className="certificate-links">
                <button
                  className="certificate-btn view-btn"
                  onClick={() => handleViewCertificate(cert)}
                >
                  <FaExternalLinkAlt className="btn-icon" />
                  View Certificate
                </button>

                <button
                  className="certificate-btn download-btn"
                  onClick={() => handleDownloadCertificate(cert)}
                >
                  <FaDownload className="btn-icon" />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal (optional - for better viewing experience) */}
        <div className="certificate-modal" id="certificateModal">
          <div className="modal-content">
            <span className="close-modal">&times;</span>
            <img id="modalImage" src="" alt="Certificate" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;