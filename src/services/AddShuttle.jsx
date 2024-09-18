

async function addShuttle(ShuttleData) {
    try {
        const response = await fetch('http://localhost:3001/Shuttle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ShuttleData)
        });

        if (!response.ok) {
            throw new Error('Error adding shuttle');
        }

        const shuttle = await response.json();
        return shuttle;
    } catch (error) {
        console.error('Error adding shuttle:', error);
        throw error;
    }
}

export default addShuttle;