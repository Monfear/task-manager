export function checkIfTaskExists(res, task) {
    if (!task) {
        return res.status(404).render('404.ejs', {
            title: 'Error',
            errMsg: 'task with provided id doesn\'t exist'
        });
    }
}