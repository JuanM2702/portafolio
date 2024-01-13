import React from "react";
import '../styles/home.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Logo from '../img/lOGO.png';
import imagen1 from '../img/software1.png';
import imagen2 from '../img/software2.png';
import imagen3 from '../img/software3.png';

const Home = () => {
  return (
    <div className="home-container">

      <div className="left-column">
        <img src={Logo} alt="Logo" className="logo" />
        <h2>Acerca de</h2>
        <p>Gracias por echar un vistazo. ¡Mantengámonos en contacto!</p>
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

      <h1>Bienvenidos a Mi portafolio</h1>
               <p>Es un placer darte la bienvenida a mi portafolio, un espacio donde convergen la pasión por la tecnología y la creatividad sin límites. Permíteme guiarte a través de un viaje por mi mundo digital, donde cada línea de código es una expresión de innovación y cada proyecto es una manifestación de mi compromiso con el desarrollo de software excepcional.</p>

              <h2>Explora la Maravilla de la Tecnología: </h2>

              <p>Desde mi base en desarrolllo, he dedicado mi carrera a explorar las maravillas del desarrollo de software. Mi enfoque va más allá de las líneas de código; se trata de crear experiencias únicas y soluciones que trasciendan las expectativas. En este portafolio, encontrarás proyectos que abarcan desde la optimización de operaciones matriciales hasta la creación de plataformas de compra intuitivas. </p>
              <img src={imagen1} alt="imagen1"/>

            <h2> La Fusión de Creatividad y Tecnología:</h2>

<p>Para mí, el desarrollo de software no es simplemente una tarea técnica, sino una forma de arte. Cada proyecto cuenta una historia única, donde la creatividad y la tecnología se fusionan para dar vida a soluciones innovadoras. Desde interfaces atractivas hasta algoritmos eficientes, cada elemento de mi portafolio refleja mi compromiso con la excelencia y la atención meticulosa a los detalles. </p>

<h2>Pasión por el Aprendizaje y la Exploración: </h2>

<p>En mi tiempo libre, mi curiosidad no tiene límites. Exploro constantemente las últimas tendencias en desarrollo, participo en comunidades tecnológicas y busco nuevas formas de fusionar la tecnología con la creatividad. Esta pasión por el aprendizaje continuo se refleja en cada proyecto que presento.</p>
<img src={imagen2} alt="imagen2"/>

<h2>Descubre la Variedad de Proyectos:</h2>

<p>Te invito a explorar la variedad de proyectos que he abordado, desde el desarrollo robusto en Django y PostgreSQL hasta la creación de experiencias interactivas en React. Cada proyecto es una pieza única en mi rompecabezas digital, mostrando la diversidad de habilidades y la versatilidad que aporto al mundo del desarrollo de software.
</p>

<h2>¡Gracias por Acompañarme en Este Viaje Digital!</h2>

<p>Agradezco sinceramente tu interés y tiempo al explorar mi portafolio. Espero que disfrutes de la experiencia tanto como yo disfruté creando cada proyecto. ¡Bienvenido a un rincón donde la innovación y la creatividad se encuentran para dar forma al futuro del desarrollo de software!</p>
<img src={imagen3} alt="imagen3"/>
      </div>
    </div>
  );
};

export default Home;
