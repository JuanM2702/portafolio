import React from "react";
import '../styles/card.css';

const Skills = () => {
  const skillsData = [
    { category: "Habilidades", skills: [
        { name: "Aprendizaje", percentage: 100 },
        { name: "Retos", percentage: 100 },
        { name: "Proactividad", percentage: 100 },
        { name: "Investigación", percentage: 100 },
        { name: "Mejora de practicas", percentage: 100 },
        { name: "Trabajo en equipo", percentage: 100 },
        { name: "Comunicación", percentage: 100 },
        { name: "Colaboración", percentage: 100 },
        { name: "Resolución de problemas", percentage: 100 },
      ] },
    { category: "Lenguajes", skills: [
      { name: "HTML", percentage: 90 },
      { name: "CSS", percentage: 85 },
      { name: "JavaScript", percentage: 80 },
      { name: "Python", percentage: 90 },
      { name: "Node.js", percentage: 70 },
      { name: "Java", percentage: 90 },
      { name: "Django", percentage: 90 },
      { name: "React", percentage: 95 },
    ] },
    { category: "Bases de Datos SQL", skills: [
      { name: "SQL server", percentage: 90 },
      { name: "PosgreSQL", percentage: 90 },
    ] },
    { category: "Bases de Datos NoSQL", skills: [
      { name: "MongoDB", percentage: 70 },
      { name: "Firebase", percentage: 70 },
    ] },
    { category: "Arquitectura", skills: [
        { name: "Microservicios", percentage: 70 },
        { name: "Patrones MVC", percentage: 60 },
      ] },
    { category: "Control de Versiones", skills: [
      { name: "Git", percentage: 85 },
      { name: "Gitlab", percentage: 70 },
    ] },
    { category: "otros", skills: [
        { name: "Scrum", percentage: 100 },
        { name: "Kanban", percentage: 70 },
        { name: "Documentaciones", percentage: 90 },
      ] },
  ];

  return (
    <div className="card section skills">
      {skillsData.map((category, index) => (
        <div key={index} className="category-card">
          <h1>{category.category}</h1>
          <div className="skills-list">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <p>{skill.name}</p>
                <div className="percentage-bar">
                  <div style={{ width: `${skill.percentage}%` }}></div>
                </div>
                <p>{`${skill.percentage}%`}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
