async function GetShuttle() {
    try {
        const response = await fetch('http://localhost:3001/Shuttle', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching shuttle');
        }

        const shuttle = await response.json();
        return shuttle;
    } catch (error) {
        console.error('Error fetching shuttle:', error);
        throw error;
    }
}

export { GetShuttle };