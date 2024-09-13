async function PostReservaciones(username,email,password) {
    try {
     
        const userData = { 
            username,
            email,
            password
        };

        const response = await fetch("http://localhost:3001/Reservaciones", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

export default PostReservaciones;