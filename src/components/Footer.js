import React from "react";
import { Link } from "react-router-dom";
import '../styles/card.css';

function Footer () {
    return (
        <footer>
        <Link to="/contact">Contacto</Link>
        <p>Derechos de autor © 2023. portafolio web Juan Monroy.</p>
      </footer>
    );
}
export default Footer;