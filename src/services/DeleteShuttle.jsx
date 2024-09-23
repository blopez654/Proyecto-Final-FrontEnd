async function DeleteShuttle(id) {
    try {
        const response = await fetch(`http://localhost:3001/Shuttle/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting shuttle with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting shuttle:', error);
        throw error;
    }
}

export default DeleteShuttle;