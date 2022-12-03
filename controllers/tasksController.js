export const showAllTasks = (req, res) => {
    res.status(200).send('<h1>tasks home</h1>');
};

export const createTask = (req, res) => {
    const task = req.body;
};

export const getTask = (req, res) => {
    res.status(200).json(
        {
            id: req.params.id
        }
    );
};

export const updateTask = (req, res) => {
    res.status(200).send('<h1>update single task</h1>');
};

export const deleteTask = (req, res) => {
    res.status(204).send('<h1>delete single task</h1>');
    // res.status(200).send('<h1>delete single task</h1>');
};