import React from 'react'
import Logo from '../img/Logo.png'
import '../styles/Header.css'
import Navbar from './Navbar'

function Header() {
  return (
     <header className='header'>
        <div>
            <img src={Logo} alt="Logo" className='logo' />
        </div>
        <div className='navbar'>
            <Navbar />
        </div>
     </header>
  )
}

export default Header