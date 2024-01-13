import React from "react";
import { useParams } from "react-router-dom";
import proyectos from "../proyectosData";
import "../styles/card.css";

const DetallesProyecto = () => {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => p.id === parseInt(id, 10));

  if (!proyecto) {
    return <p>Proyecto no encontrado</p>;
  }

  return (
    <div className="detalles-container">
      <h1>{proyecto.nombre}</h1>
      <img src={proyecto.imagen} alt={`Imagen de ${proyecto.nombre}`} />
      <p>{proyecto.descripcion}</p>
      <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
        Ver repositorio
      </a>
    </div>
  );
};

export default DetallesProyecto;
