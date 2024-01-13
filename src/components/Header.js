import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaFolderOpen, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import '../styles/card.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>Portafolio</h1>
      </div>
      <nav>
        <Link to="/" title="Home"><FaHome />Home</Link>
        <Link to="/about" title="About"><FaUser />AboutMe</Link>
        <Link to="/skills" title="Skills"><FaCode />Skills</Link>
        <Link to="/projects" title="Projects"><FaFolderOpen />Projects</Link>
        <Link to="/experience" title="Experience"><FaBriefcase />Experience</Link>
        <Link to="/contact" title="Contact"><FaEnvelope />Contact</Link>
      </nav>
    </header>
  );
}

export default Header;