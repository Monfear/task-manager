import express from 'express';

import tasksRouter from "./routers/tasksRouter.js";
import connectDB from "./db/connection.js";
import showRequestInfo from "./middlewares/showRequestInfo.js";

// setup app
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);

    connectDB();
});

// view engine
app.set('view engine', 'ejs');
app.set('views', 'views/routes');

// middlewares
app.use(express.json());
app.use(express.static('./public'));
app.use(showRequestInfo);

// routes
app.get('/', (req, res) => {
    res.status(200).redirect('/tasks/active');
});

app.use('/tasks', tasksRouter);

app.get('*', (req, res) => {
    res.status(404).render('404.ejs', {
        title: 'Not Found',
        errMsg: "page doesn\'t exist"
    });
});