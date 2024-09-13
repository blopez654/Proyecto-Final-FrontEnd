import { useEffect, useState } from 'react';
import GetAdministrador from '../services/GetAdministrador';
import GetAdministrador from '../services/GetAdministrador';

function CardAdministrador() {


    const [users, setAdministrador] = useState([]);


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
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
export default CardAdministrador;