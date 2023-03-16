require('dotenv').config();
const express = require('express');
const cors = require('cors');

const tasksRouter = require('./router/tasks');
const assignmentsRouter = require('./router/assignments');
const usersRouter = require('./router/users');
const authenticationRouter = require('./router/authentication');

const app = express();

app.use(cors());
app.use(express.json());
app.use(tasksRouter);
app.use(assignmentsRouter);
app.use(usersRouter);
app.use(authenticationRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});