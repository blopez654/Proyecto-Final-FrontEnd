import React, { useEffect, useState } from 'react';
import GetShuttle from '../services/GetShuttle';
import '../styles/FormAdmin.css';

function ListaShuttlesDisponibles() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const shuttles = await GetShuttle();
    setDatos(shuttles);
  };

  // Filtrar los shuttles disponibles
  const shuttlesDisponibles = datos.filter(shutt => shutt.disponible);

  return (
    <div>
      <h1 className='formAdmin__ListaTitulo'>Vehiculos Disponibles</h1>
      <ul className='formAdmin__Lista'>
        {shuttlesDisponibles.map((shutt) => (
          <li key={shutt.id} className='formAdmin__Item'>
            {shutt.Transporte} - {shutt.Descripcion}
            <img src={shutt.img} alt={shutt.Transporte} className='formAdmin__Img' />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaShuttlesDisponibles;
