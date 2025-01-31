import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h2 className="aboutTitle">About Me</h2>
      <div className="aboutContent">
        <div className="aboutSection">
          <h3>Education</h3>
          <div className="educationItem">
            <div className="educationTitle">
              <strong>Bachelor of Science in Computer Science with Specialization in Cloud Computing</strong>
              <span className="educationYear">University, Kattankulathur, 2022-2026</span>
            </div>
          </div>
          <div className="educationItem">
            <div className="educationTitle">
              <strong>High and Senior Secondary School</strong>
              <span className="educationYear">Delhi Public School, Jankipuram, Lucknow, 2020-2022</span>
            </div>
          </div>
        </div>
        <div className="aboutSection">
          <h3>Certifications</h3>
          <ul>
            <li>
              <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS74S3335838720399985" className="certificationBtn">
                NPTEL Programming in Java
              </a>
            </li>
            <li>
              <a href="https://www.credly.com/badges/d2fc5227-cbd0-47cf-8a50-7afe98a29638/print" className="certificationBtn">
                AWS Certified Machine Learning
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/certificate/UC-05bec870-7c87-4b91-835a-a1af37c9ab75/" className="certificationBtn">
                Udemy Machine Learning A-Z
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/posts/srijan-srivastava-ba038a250_dbms-scaler-activity-7201818715057778688-Z8LU?utm_source=share&utm_medium=member_desktop" className="certificationBtn">
                Scaler Database Management 
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1aHD_j74xfott27HwNmAFZGurniLfaeQr/view" className="certificationBtn">
                Cloud Computing on Google CLoud
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
