import { checkIfTaskExists } from "../utils/utils.js";
import Task from "./../models/Task.js";

// @ get all
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task
            .find()
            .sort({
                createdAt: -1,
            });

        if (req.path === '/active') {
            res.status(200).render('index.ejs', {
                title: 'Home',
                tasks: tasks
            });
        } else if (req.path === '/completed') {
            res.status(200).render('completed.ejs', {
                title: 'Completed',
                tasks: tasks
            });
        }
    } catch (error) {
        res.status(500).render('404.ejs', {
            title: 'Error',
            errMsg: `tasks fetching failed => ${error.message}`
        });
    } finally {
        console.log('showAllTasks has invoken');
    }
};

// @ get single
export const getSingleTask = async (req, res) => {
    try {
        const taskID = req.params.id;

        const task = await Task.findById(taskID);

        checkIfTaskExists(res, task);

        res.status(200).render('task.ejs', {
            title: 'Task',
            task: task
        });
    } catch (error) {
        res.status(500).render('404.ejs', {
            title: 'Error',
            errMsg: `task fetching failed => ${error.message}`
        });

    } finally {
        console.log('getTask has invoken');
    }
};

// * create
export const createTask = async (req, res) => {
    try {
        const task = await Task.create({
            name: req.body.taskName
        });

        res.status(201).redirect(req.originalUrl);
    } catch (error) {
        res.status(500).json({
            errMsg: `task creation failed => ${error.message}`
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

        console.log(req.body);

        const task = await Task.findByIdAndUpdate(taskID, data, {
            new: true,
            runValidators: true,
        });

        checkIfTaskExists(res, task);

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