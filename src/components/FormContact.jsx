import React, { useState } from "react";
import '../styles/FormContact.css'
import Logo from '../img/Logo.png'
 

function FormContact() {
   
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [pasajeros, setPasajeros] = useState('');
  const [fecha, setFecha] = useState('');
  const [mensaje, setMensaje] = useState('');

  function sendNombre(event) {
    setNombre(event.target.value);
  }

  function sendCorreo(event) {
    setCorreo(event.target.value);
  }

  function sendPasajeros(event) {
    setPasajeros(event.target.value);
  }

  function sendFecha(event) {
    setFecha(event.target.value);
  }

  function sendMensaje(event) {
    setMensaje(event.target.value);
  }
     
  const enviar = () => {

  };

    return(
      <div className='Formcontact'>
        <h2 className='contactenos'>Contáctenos</h2>

    
            <div className="nombreycorreo">
                <label htmlFor="Nombre">Name/Nombre</label>
                <input type="text" 
                value={nombre}
                onChange={sendNombre}
                />
                
              <br />
                <label htmlFor="Correo">Email</label>
                <input type="text"
                value={correo}
                onChange={sendCorreo}
                />
             </div>
            
             <div className='PasajerosyFecha'>
                <label htmlFor="Pasajeros">Pasajeros</label>
                <input type="text"
                value={pasajeros}
                onChange={sendPasajeros}
                />
                <br />
               <label htmlFor="Fecha">Fecha</label>
               <input type="date"
               value={fecha}
               onChange={sendFecha}
               />
             </div>
              <div>
                <label htmlFor="Mensaje">Message/Mensaje</label>
                <input type="text"
                value={mensaje}
                onChange={sendMensaje}
               />
               </div>
               <button className='btnEnviar' onClick={enviar}>Enviar</button>
        

      </div>
      
    );
};

export default FormContact;