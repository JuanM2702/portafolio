import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import "../styles/card.css"; 

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="left-column">
        <h2>Acerca de</h2>
        <p>gracias por echar un vistazo. ¡Mantengámonos en contacto!</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/juan-monroy-668017260/">
              <FaLinkedin /> Linkdln
            </a>
          </li>
          <li>
            <a href="https://github.com/JuanM2702">
              <FaGithub /> Github
            </a>
          </li>
        </ul>
      </div>
      <div className="right-column">
        <div className="card">
          <h1>Hola, Soy Juan Monroy.</h1>
          <p>
            Soy un apasionado desarrollador de software con base en desarrollo
            Frond-End. Con una sólida formación académica en Ciencias de la
            Computación y un enfoque constante en la mejora continua, me dedico
            a construir soluciones innovadoras que transforman ideas en realidad.
          </p>
        </div>
        <div className="card">
          <h2>Compromiso con la Excelencia</h2>
          <p>
            Mi compromiso con la excelencia se refleja no solo en el código que
            escribo, sino también en mi enfoque hacia el diseño de productos. Mi
            fascinación por la tecnología se extiende a pasatiempos como la
            creación de teclados mecánicos personalizados y la exploración de
            sistemas.
          </p>
        </div>
        <div className="card">
          <h2>Emoción por el Aprendizaje Continuo</h2>
          <p>
            En mi tiempo libre, me gusta estar explorando las últimas tendencias
            en desarrollo, participando en comunidades tecnológicas y disfrutando
            de la resolución creativa de problemas.
            <br />
            Estoy emocionado por el continuo aprendizaje y la oportunidad de
            contribuir al mundo del desarrollo de software, donde cada proyecto
            es una nueva aventura que espero enfrentar con pasión y dedicación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
