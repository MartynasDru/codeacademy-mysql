const express = require('express');
const { tasksManagerConnection } = require('../db');
const { defaultCallback } = require('../utils/dbUtils');

const router = express.Router();

router.get('/tasks', (req, res) => {
    tasksManagerConnection.execute(
        'SELECT tasks.id, tasks.name, users.name as user_name, users.email FROM tasks LEFT JOIN users ON tasks.user_id = users.id',
        (err, result) => defaultCallback(err, result, res)
    );
});

router.get('/tasks/:id', (req, res) => {
    const { id } = req.params;

    tasksManagerConnection.execute(
        'SELECT tasks.id, tasks.name, users.name as user_name, users.email FROM tasks LEFT JOIN users ON tasks.user_id = users.id WHERE tasks.id=?',
        [id],
        (err, result) => defaultCallback(err, result, res)
    )
});

module.exports = router;