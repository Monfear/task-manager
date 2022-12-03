import { Router } from 'express';
import { showAllTasks, createTask, getTask, updateTask, deleteTask } from './../controllers/tasksController.js';

const tasksRouter = Router();

tasksRouter.route('/')
    .get(showAllTasks)
    .post(createTask);

tasksRouter.route('/:id')
    .get(getTask)
    .patch(updateTask)
    .delete(deleteTask);

export default tasksRouter;