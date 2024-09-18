import React, { useState } from 'react';
import Swal from 'sweetalert2';
import  '../styles/FormLogin.css';
import Logo from '../img/Logo.png';
import { useNavigate } from 'react-router-dom';

import Nosara from '../img/Nosara.jpg';


function FormLogin() {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Administrador, setAdministrador] = useState([]);
  

  const navigate = useNavigate();
  
  function cargaEmail(event) {
    setEmail(event.target.value);
  };

  const cargaPassword = (event) => {
    setPassword(event.target.value);
  };

  function inicio () {
     
    console.log('Correo:', email);
    console.log('Contraseña:', password);
    GetAdministrador(email,password);

    if (!Administrador || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "",
        text: "¡No se permiten espacios vacios!",
        footer: ''
      });
      return;
    }
    
      const autentic = Administrador.find(admin =>  email === admin.email && password === admin.password) 
      
        localStorage.setItem('Autenticado','true');

      if (autentic) {
        
         Swal.fire({
          position: "top-end",
          icon: "",
          title:"¡Inicio de sesión exitoso!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/FormAdministracion');
        
      }else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "¡Inicio de sesión fallido!",
          footer: ''
        });
      }
  };


  return (
  <div className='formLogin'>
      <div className='login'>
        <img src={Logo} alt="Logo" className='logo' /> 
      </div>
       <h2 className='textLogin'>Iniciar sesion</h2>
       <div>
         <label htmlFor="email"></label>
         <input 
         className='email'
          type="text" 
           id="email" 
            name="email" 
            placeholder="Correo" 
           value={email}
          onChange={cargaEmail}
         required
        />
      </div>
    <div>
     <label htmlFor="password"></label>
      <input 
       type="password" 
        className='password'
         id="password"  
          name="password" 
          placeholder="Contraseña"
         value={password}
        onChange={cargaPassword}
       required
      />
     </div>
       <button className='inicio' onClick={inicio}>Inicio</button>
       <button className='Volver' onClick={Volver}>Volver</button>

      <img src={Nosara}  />
 </div>

  );
};

export default FormLogin;