import React, { useState, useEffect } from 'react';
import GetShuttle from '../services/GetShuttle';
import PostShuttle from '../services/PostShuttle';
import DeleteShuttle from '../services/DeleteShuttle';
import UpdateShuttle from '../services/UpdateShuttle';
import Swal from 'sweetalert2';
import '../styles/FormAdmin.css';

function FormAdministracion() {
  const [formDatos, setFormDatos] = useState({
    Transporte: '',
    Descripcion: '',
    img: ''
  });
  const [datos, setDatos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const shuttles = await GetShuttle();
    setDatos(shuttles);
  };

  const InputForm = (e) => {
    const { name, value } = e.target;
    setFormDatos({ ...formDatos, [name]: value });
  };

  const InputImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormDatos({ ...formDatos, img: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const Editar = (item) => {
    setEditMode(true);
    setEditingId(item.id);
    setFormDatos({
      Transporte: item.Transporte,
      Descripcion: item.Descripcion,
      img: item.img
    });
  };

  const EnviarForm = async (e) => {
    e.preventDefault();
    if (formDatos.Transporte === '' || formDatos.Descripcion === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Complete todos los espacios!',
      });
      return;
    }

    if (editMode) {
      await updateData({ ...formDatos, id: editingId });
    } else {
      await saveData(formDatos);
    }

    resetForm();
  };

  const resetForm = () => {
    setEditMode(false);
    setEditingId(null);
    setFormDatos({ Transporte: '', Descripcion: '', img: '' });
    fetchData();
  };

  const saveData = async (newData) => {
    try {
      const savedData = await PostShuttle(newData);
      setDatos([...datos, savedData]);
      Swal.fire({
        title: '¡Guardado Exitoso!',
        text: 'El dato se ha guardado correctamente.',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrió un error al guardar el dato.',
      });
    }
  };

  const updateData = async (updatedData) => {
    try {
      const updatedShuttle = await UpdateShuttle(updatedData);
      const updatedList = datos.map((item) =>
        item.id === updatedShuttle.id ? updatedShuttle : item
      );
      setDatos(updatedList);
      Swal.fire({
        title: '¡Actualización Exitosa!',
        text: 'El dato se ha actualizado correctamente.',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrió un error al actualizar el dato.',
      });
    }
  };

  const Eliminar = async (id) => {
    try {
      await DeleteShuttle(id);
      const filteredData = datos.filter((item) => item.id !== id);
      setDatos(filteredData);
      Swal.fire({
        title: '¡Eliminado!',
        text: 'El dato ha sido eliminado correctamente.',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrió un error al eliminar el dato.',
      });
    }
  };
   
  const CerrarSesion = () => {
  localStorage.removeItem('Autenticado');
  }

  
  return (
    <div>
      <h2 className='formAdmin__TituloAd'>Administración</h2>
      <form onSubmit={EnviarForm}>
        <div>
          <input
            type="text"
            className='formAdmin__Transporte'
            name='Transporte'
            placeholder="Transporte"
            value={formDatos.Transporte}
            onChange={InputForm}
            required
          />
          <input
            type="text"
            className='formAdmin__Descripcion'
            name='Descripcion'
            placeholder="Descripcion"
            value={formDatos.Descripcion}
            onChange={InputForm}
            required
          />
          <input
            type="file"
            className='formAdmin__ImgInput'
            name='img'
            accept='image/*'
            onChange={InputImg}
            required
          />
        </div>
        <button type="submit" className='formAdmin__btnAgregar'>
          {editMode ? 'Actualizar' : 'Agregar'}
        </button>
      </form>

      <h1 className='formAdmin__ListaTitulo'>Lista de Shuttles</h1>
      <ul className='formAdmin__Lista'>
        {datos.map((shutt) => (
          <li key={shutt.id} className='formAdmin__Item'>
            {shutt.Transporte} - {shutt.Descripcion}
            <img src={shutt.img} alt={shutt.Transporte} className='formAdmin__Img' />
            <button onClick={() => Editar(shutt)} className='formAdmin__btnEditar'>Editar</button>
            <button onClick={() => Eliminar(shutt.id)} className='formAdmin__btnEliminar'>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={CerrarSesion}>Cerrar Sesion</button>
    </div>
  );
}

export default FormAdministracion;
