import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../styles/FormLogin.css'

function FormAdmin() {

  const [Viaje, setViaje] = useState('');
  const [Detalles, setDetalles] = useState('');
  const [Precio, setPrecio] = useState('');
  const [viajes, setViajes] = useState([]); // Lista de viajes
  const [isEdit, setIsEdit] = useState(false); // Estado para saber si estamos editando
  const [editIndex, setEditIndex] = useState(null); // indice del viaje que se esta editando

  const cargaViaje = (event) => setViaje(event.target.value);
  const cargaDetalles = (event) => setDetalles(event.target.value);
  const cargaPrecio = (event) => setPrecio(event.target.value);

  // Función para manejar agregar, editar y guardar
  const Enviar = (event) => {
    event.preventDefault();

    if (!Viaje || !Detalles || !Precio) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos antes de continuar.'
      });
      return;
    }

    if (isEdit) {
      // Si estamos editando, actualizamos el viaje
      const updatedViajes = [...viajes];
      updatedViajes[editIndex] = { Viaje, Detalles, Precio };
      setViajes(updatedViajes);
      setIsEdit(false);
      setEditIndex(null);

      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Viaje editado correctamente!'
      });
    } else {
      // Si no estamos editando, agregamos un nuevo viaje
      setViajes([...viajes, { Viaje, Detalles, Precio }]);

      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Viaje agregado correctamente!'
      });
    }

    // Resetear el formulario
    setViaje('');
    setDetalles('');
    setPrecio('');
  };

  // Función para eliminar un viaje
  const Eliminar = (index) => {
    const updatedViajes = viajes.filter((_, i) => i !== index);
    setViajes(updatedViajes);

    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Viaje eliminado correctamente!'
    });
  };

  // Función para editar un viaje
  const Editar = (index) => {
    const viajeToEdit = viajes[index];
    setViaje(viajeToEdit.Viaje);
    setDetalles(viajeToEdit.Detalles);
    setPrecio(viajeToEdit.Precio);
    setIsEdit(true);
    setEditIndex(index);
  };

  return (
    <div className='fondo'>
      <h2 className='textCrudAdmin'>Administración</h2>
      <div>
        <input
          className='imputViaje'
          type="text"
          id="Viaje"
          name="Viaje"
          placeholder="Destino"
          value={Viaje}
          onChange={cargaViaje}
          required
        />
      </div>
      <div>
        <input
          type="text"
          className='imputDetalles'
          id="Detalles"
          name="Detalles"
          placeholder="Detalles"
          value={Detalles}
          onChange={cargaDetalles}
          required
        />
        <input
          type="text"
          className='imputPrecio'
          id="Precio"
          name="Precio"
          placeholder="Precio"
          value={Precio}
          onChange={cargaPrecio}
          required
        />
      </div>
      <button className='btn' onClick={Enviar}>
        {isEditing ? 'Guardar cambios' : 'Cargar'}
      </button>

      {/* Mostrar lista de viajes */}
      <div>
        <h3>Lista de Viajes</h3>
        {viajes.length === 0 ? (
          <p>No hay viajes disponibles</p>
        ) : (
          <ul>
            {viajes.map((viaje, index) => (
              <li key={index}>
                <span>{`Destino: ${viaje.Viaje}, Detalles: ${viaje.Detalles}, Precio: ${viaje.Precio}`}</span>
                <button onClick={() => Editar(index)}>Editar</button>
                <button onClick={() => Eliminar(index)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FormAdmin;

  