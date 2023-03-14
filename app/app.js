const express = require('express');
const cors = require('cors');

const tasksRouter = require('./router/tasks');
const assignmentsRouter = require('./router/assignments');

const app = express();

app.use(cors());
app.use(tasksRouter);
app.use(assignmentsRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});