import { useEffect, useState } from 'react';
import GetAdministrador from '../services/GetAdministrador';
import GetAdministrador from '../services/GetAdministrador';

function CardAdministrador() {


    const [Administrador, setAdministrador] = useState([]);


    useEffect(() => {
      const fetchAdministrador = async () => {
        const data = await GetAdministrador();
       
        
        setAdministrador(data);
   
      };
      fetchAdministrador();
    }, []);

    console.log(Administrador)



    return (
      <div>
        <h1>Lista de </h1>
        <ul>
          {users.map((Administrador) => (
            <li key={Administrador.id}>{Administrador.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
export default CardAdministrador;