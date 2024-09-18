import React from 'react';
import Logo from '../img/Logo.png';
import '../styles/Header.css';
import Navbar from './Navbar';

function Header() {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo-container'>
          <img src={Logo} alt="Pura Vida Shuttle Logo" className='logo' />
        </div>
        <div className='navbar-container'>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
