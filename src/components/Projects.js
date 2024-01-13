
import React from "react";
import { Link } from "react-router-dom";
import proyectos from "../proyectosData";
import '../styles/card.css';

const Projects = () => {
  return (
    <div className="section projects">
      <h1>Mis Proyectos</h1>
      <div className="project-cards">
        {proyectos.map((proyecto) => (
          <div className="project-card" key={proyecto.id}>
            <h2>{proyecto.nombre}</h2>
            <img src={proyecto.imagen} alt={`Imagen de ${proyecto.nombre}`} />
            <p>{proyecto.cortadescripcion}</p>
            <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
              Ver repositorio
            </a>
            <div>
              <Link to={`/projects/${proyecto.id}`}>Conocer más detalles</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
