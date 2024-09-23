import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Administracion from '../pages/Administracion';
import AboutUs from '../pages/AboutUs';
import Servicios from '../pages/Servicios';
import Inicio from '../pages/Inicio';
import ProtectedRoute from './ProtectedRooutes';


const Routing = () => {
  return (
    
    <Router>
     <Routes>
       <Route path="/Contact" element={<Contact />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Administracion"  element={<ProtectedRoute><Administracion /></ProtectedRoute>} />
       <Route path="/AboutUs" element={<AboutUs />} />
       <Route path="/Servicios" element={<Servicios />} />
       <Route path="/" element={<Inicio />} />
     </Routes>
    </Router>
 
   );
};
export default Routing;