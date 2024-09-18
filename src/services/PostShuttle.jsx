async function PostShuttle(id,driver,pickup,destination,date,img) {
    try {
     
        const ShuttleData = { 
            id,
            driver,
            pickup,
            destination,
            date,
            img
        
        };

        const response = await fetch("http://localhost:3001/Shuttle", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ShuttleData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting shuttle:', error);
        throw error;
    }
}

export{PostShuttle}