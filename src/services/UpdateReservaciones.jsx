async function UpdateReservaciones(username,password) {
    try {
     
        const userData = { 
            username, 
            
            password
        
        };
        const response = await fetch("http://localhost:3001/Reservaciones"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}

export default UpdateReservaciones;