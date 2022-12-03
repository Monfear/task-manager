import express from 'express';

// setup app
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});