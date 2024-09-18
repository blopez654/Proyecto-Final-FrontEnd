async function getAmistrador() {
    try {
        const response = await fetch('http://localhost:3001/Administrador', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching administrador');
        }

        const administrador = await response.json();
        return administrador;
    } catch (error) {
        console.error('Error fetching administrador:', error);
        throw error;
    }
}

export { getAmistrador };