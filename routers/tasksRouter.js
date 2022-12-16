import { Router } from 'express';
import { getAllTasks, getSingleTask, updateTask, deleteTask, createTask } from './../controllers/tasksController.js';

const tasksRouter = Router();

tasksRouter.route('/active')
    .get(getAllTasks)
    .post(createTask);

tasksRouter.route('/completed')
    .get(getAllTasks);

tasksRouter.route('/task/:id')
    .get(getSingleTask)
    .patch(updateTask)
    .delete(deleteTask);

export default tasksRouter;