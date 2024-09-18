import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../styles/FormAdmin.css';
import { read } from '@popperjs/core';


function FormAdministracion() {

  const [Driver, setDriver ] = useState ('');
  const [Pickup, setPickup ] = useState ('');
  const [Destination, setDestination ] = useState ('');
  const [date, setDate ] = useState ('');
  

  function agregarDriver(event) {
    setDriver(event.target.value)
  }

  function agregarPickup(event) {
    setPickup(event.target.value)
  }
 
  function agregarDestination(event) {
    setDestination(event.target.value)
  }

  function agregarDate(event) {
    setDate(event.target.value)
  }

  const Agregar = () => {
    if (Driver === " " || Pickup === "" || Destination === " " || date === " ") {
      setError(true)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Complete todos los espacios!",
        
      });
      return;
    }; 
    
  

  };


  return (
    <div className=''>
    <h2 className='TituloAd'>Administración</h2>
     <div>
       <input 
        className='Driver'
         type="text" 
           placeholder="Driver" 
          value={Driver}
         onChange={agregarDriver}
        required
       />
     </div>
     
   <div>
     <input 
      type="text" 
       className='Pickup'  
         placeholder="Pickup"
        value={Pickup}
       onChange={agregarPickup}
      required
     />
     <input 
      type="text" 
       className='Destination'
         placeholder="Destination"
        value={Destination}
       onChange={agregarDestination}
      required
     />

     <input 
      type="date" 
       className='date'
         placeholder="Date"
        value={date}
       onChange={agregarDate}
      required
     />

     <input 
      type="file" 
       accept='image/' 
        placeholder="Selecciona una imagen"
       onChange={cargaImagen}
      required
     />
    </div>
    <button className='btnAgregar' onClick={Agregar}>Agregar</button>

    <br />
    <div>
        <h1>lista</h1>
         <ul>
          {Shuttle.map((Shuttle) => (
           <li key={Shuttle.id}>{Shuttle.name} {Shuttle.Articulo} {Shuttle.Descripcion} {Shuttle.Precio} <img   className='Imagenes' src={Shuttle.Imagen} /> 
               <button onClick={(e) => Editar(Shuttle)}>Editar</button>
               <button onClick={(e) => Eliminar(e.target.value) }>Eliminar</button>
           </li>
       
          ))}
         </ul>
      </div>
    </div>
  )

};
export default FormAdministracion;