const form = document.querySelector('.task__form');

form.addEventListener('submit', async function (e) {
    // e.preventDefault();

    const taskName = document.querySelector('#taskName').value;
    const taskIsCompleted = document.querySelector('#isCompleted').checked;

    try {
        const href = window.location.href;
        const splittedUrl = href.split('/');
        const id = splittedUrl[splittedUrl.length - 1];
        const url = `/tasks/task/${id}`;

        const task = {
            name: taskName,
            isCompleted: taskIsCompleted
        };

        const response = await fetch(url, {
            method: 'PATCH',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.warn(error);
    } finally {
        // pass
    }
});