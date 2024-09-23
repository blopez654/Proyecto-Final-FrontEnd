import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/FormLogin.css';
import GetUsers from '../services/GetUsers';
import Swal from 'sweetalert2';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const cargaUsuario = (event) => {
        setEmail(event.target.value);
    };

    const cargaContra = (event) => {
        setPassword(event.target.value);
    };

    const cargar = async () => {
        if (!email.trim() || !password.trim()) {
            setError(true);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Complete todos los espacios!',
            });
            return;
        }

        try {
            const users= await GetUsers(); // Obtiene el usuario basado en el email y la contraseña
            const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                localStorage.setItem ('userRole', user.role);
                // Verifica el rol del usuario
                if (user.role === 'Administrador') {
                    localStorage.setItem('userRole', user.role);
                    navigate('/Administracion'); // Redirigir a Administración}
                    
                } else {
                    navigate("/"); // Redirigir a una ruta para usuarios normales
                }
            } else {
                setError(true);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Credenciales incorrectas!',
                });
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error en el servidor!',
            });
        }

        setError(false);
    };
    const Volver = async () => {
        navigate("/AboutUs")
    }

    return (
        <div className='loginformBox'>
            <h2 className='h2_loginform'>Iniciar Sesión</h2>
            <div>
                <label htmlFor="email"> </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={cargaUsuario}
                    required
                />
            </div>
            <div>
                <label htmlFor="password"></label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={cargaContra}
                    required
                />
            </div>
            <button className='btnlogin' onClick={cargar}>Iniciar</button>
            <br />
            <button className='btnloginVolver' onClick={Volver}>Volver</button>
        </div>
    );
}

export default FormLogin;
