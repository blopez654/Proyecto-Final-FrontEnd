import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar() {
  return (

     <div className='contNav'>
          <nav>
            <ul className='contenedorNavbar'>
                <Link to="/Principal" className='text'>Principal </Link>
                <Link to="/Login" className='text'>Login</Link>
                <Link to="/Contact" className='text'>Contact</Link>
            </ul>
        </nav>
  </div>
  )
}

export default Navbar