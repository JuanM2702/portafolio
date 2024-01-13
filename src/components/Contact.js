import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <p>Email: juanmonroy2702@gmail.com</p>
        </div>
        <div className="contact-item">
          <FaPhone className="icon" />
          <p>Teléfono: +57 3135815234 </p>
        </div>
        <div className="contact-item">
          <FaLinkedin className="icon" />
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/juan-monroy-668017260/" target="_blank" rel="noopener noreferrer">
              Juan Monroy
            </a>
          </p>
        </div>
        <div className="contact-item"> 
          <FaGithub className="icon" />
          <p>
            GitHub:{" "}
            <a href="https://github.com/JuanM2702" target="_blank" rel="noopener noreferrer">
              JuanM2702
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
