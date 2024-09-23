import React, { useEffect, useState } from 'react';
import '../styles/FormRegister.css';
import GetUsers from '../services/GetUsers';
import PostUsers from '../services/PostUsers';
import Swal from 'sweetalert2';

function FormRegister() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await GetUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const cargaUsuario = (event) => {
        setUsername(event.target.value);
    };

    const cargaEmail = (event) => {
        setEmail(event.target.value);
    };

    const cargaContra = (event) => {
        setPassword(event.target.value);
    };

    const cargar = async () => {
        if (!username.trim() || !email.trim() || !password.trim()) {
            setError(true);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Llenar los espacios vacios!',
            });
            return;
        }

        try {
            await PostUsers({ username, email, password });
            Swal.fire({
                icon: 'success',
                title: '¡Perfect!',
                text: '¡Agregado Correctamente!',
            });
            setUsername('');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error al registrar:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error al registrar!',
            });
        }

        setError(false);
    };

    return (
        <div className={classes.cont}>
            <h2>Registrar</h2>
            <div className={classes.name}>
                <label htmlFor="username">Nombre</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Nombre"
                    value={username}
                    onChange={cargaUsuario}
                    required
                />
            </div>
            <div>
                <label htmlFor="correo">Correo</label>
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="correo"
                    value={email}
                    onChange={cargaEmail}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
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
            <button onClick={cargar}>Registrar</button>
        </div>
    );
}

export default FormRegister;
