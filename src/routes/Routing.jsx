import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Principal from '../pages/Principal';
import Contact from '../pages/Contact';
import Inicio from '../pages/Inicio';
import Administracion from '../pages/Administracion';

const Routing = () => {
  return (
    
    <Router>
     <Routes>
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Principal" element={<Principal />} />
       <Route path="/Inicio" element={<Inicio />} />
       <Route path="/Administracion" element={<Administracion />} />
     </Routes>
    </Router>
 
   );
};
export default Routing;