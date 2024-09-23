async function PostShuttle(data) {
    try {
     
     

        const response = await fetch("http://localhost:3001/Shuttle", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting shuttle:', error);
        throw error;
    }
}

export default PostShuttle