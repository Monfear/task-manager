import { Router } from 'express';
import { getAllTasks, getSingleTask, updateTask, deleteTask, createTask } from './../controllers/tasksController.js';

const tasksRouter = Router();

tasksRouter.route('/')
    .get(getAllTasks)
    .post(createTask);

tasksRouter.route('/task/:id')
    .get(getSingleTask)
    .patch(updateTask)
    .delete(deleteTask);

export default tasksRouter;