require('dotenv').config();
const express = require('express');
const cors = require('cors');

const tasksRouter = require('./router/tasks');
const assignmentsRouter = require('./router/assignments');
const usersRouter = require('./router/users');
const authenticationRouter = require('./router/authentication');
const productsRouter = require('./router/products');

const app = express();

const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(tasksRouter);
app.use(assignmentsRouter);
app.use(usersRouter);
app.use(authenticationRouter);
app.use(productsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});