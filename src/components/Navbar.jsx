import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li><Link to="/" className='nav-item'>Inicio</Link></li>
        
        <li><Link to="/Servicios" className='nav-item'>Sevicios</Link></li>
        <li><Link to="/AboutUs" className='nav-item'>Sobre Nosotros</Link></li>
        <li><Link to="/Contact" className='nav-item'>Contacto</Link></li>
        <li><Link to="/Login" className='nav-item'>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
