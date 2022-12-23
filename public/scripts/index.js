async function deleteTask(id) {
    try {
        const url = `/tasks/task/${id}`;

        const response = await fetch(url, {
            method: 'DELETE',
        });

        const data = await response.json();

        window.location.reload();

        console.log(response);
        console.log(data);
    } catch (error) {
        console.warn(error);
    }
}