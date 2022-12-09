import Task from "./../models/Task.js";

// @ get all
export const showAllTasks = async (req, res) => {
    try {
        const tasks = await Task
            .find()
            .sort({
                createdAt: -1,
            });

        res.status(200).render('index.ejs', {
            title: 'Home',
            tasks: tasks
        });

    } catch (error) {
        res.status(500).render('404.ejs', {
            title: 'fetch failed'
        });
    } finally {
        console.log('showAllTasks has invoken');
    }
};

// @ get single
export const getTask = async (req, res) => {
    try {
        const taskID = req.params.id;

        const task = await Task.findById(taskID);

        if (!task) {
            return res.status(404).json({
                errMsg: 'task with provided id doesn\'t exist'
            });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({
            errMsg: `task fetching failed => ${error.message}`
        });

    } finally {
        console.log('getTask has invoken');
    }
};

// * create
export const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({
            errMsg: `task deletion failed => ${error.message}`
        });
    } finally {
        console.log('createTask has invoken');
    }
};

// ? update
export const updateTask = async (req, res) => {
    try {
        const taskID = req.params.id;
        const data = req.body;

        const task = await Task.findByIdAndUpdate(taskID, data, {
            new: true,
            runValidators: true,
        });

        if (!task) {
            return res.status(404).json({
                errMsg: 'task with provided id doesn\'t exist'
            });
        }

        res.status(200).json({
            infoMsg: `task with id: ${taskID} has edited`,
            updatedData: task,
        });

    } catch (error) {
        res.status(500).json({
            errMsg: `task edition failed => ${error.message}`,
        });

    } finally {
        console.log('updateTask has invoken');
    }
};

// ! delete
export const deleteTask = async (req, res) => {
    try {
        const taskID = req.params.id;

        const task = await Task.findByIdAndDelete(taskID);

        if (!task) {
            return res.status(404).json({
                errMsg: 'task with provided id doesn\'t exist',
            });
        }

        res.status(200).json({
            infoMsg: `task with id: ${taskID} has deleted`,
        });

    } catch (error) {
        res.status(500).json({
            errMsg: `task deletion failed => ${error.message}`,
        });
    } finally {
        console.log('deleteTask has invoken');
    }
};