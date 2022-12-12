import { Router } from 'express';
import { getAllTasks, getSingleTask, updateTask, deleteTask, getCreateTask, createTask } from './../controllers/tasksController.js';

const tasksRouter = Router();

tasksRouter.route('/')
    .get(getAllTasks);

tasksRouter.route('/create')
    .get(getCreateTask)
    .post(createTask);

tasksRouter.route('/task/:id')
    .get(getSingleTask)
    .patch(updateTask)
    .delete(deleteTask);

export default tasksRouter;