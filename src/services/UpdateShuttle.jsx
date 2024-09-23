async function UpdateShuttle(transporte,descripcion,id) {
    try {
     
        const userData = { 
            transporte,
            descripcion,
            id
        
        };
        const response = await fetch("http://localhost:3001/Shuttle/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update shuttle:', error);
        throw error;
    }
}

export default UpdateShuttle;
