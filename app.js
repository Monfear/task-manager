import express from 'express';
import tasksRouter from "./routers/tasksRouter.js";

// setup app
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// middlewares
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.status(200).send('<a href="/tasks">move to tasks</a>');
});

app.use('/tasks', tasksRouter);

app.get('*', (req, res) => {
    res.status(404).send('<h1>not found</h1>');
});