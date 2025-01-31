import React, { useState } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, like logging the data or triggering a custom alert.
    alert(`Form submitted: ${JSON.stringify(formData)}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2 className="contactTitle">Contact Me</h2>
      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="submitButton">Submit</button>
      </form>
      <div className="contactInfo">
        <div>
          <p>Email: ss7697@srmist.edu.in</p>
          <p>Phone: +91 9555902595</p>
        </div>
        <div className="socialIcons">
          <a href="https://www.linkedin.com/in/srijan-srivastava-ba038a250/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://x.com/Srijan_2107">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/srijan210704">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
