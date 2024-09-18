import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li><Link to="/Inicio" className='nav-item'>Inicio</Link></li>
        <li><Link to="/Principal" className='nav-item'>Principal</Link></li>
        <li><Link to="/Contact" className='nav-item'>Contacto</Link></li>
        <li><Link to="/Login" className='nav-item'>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
