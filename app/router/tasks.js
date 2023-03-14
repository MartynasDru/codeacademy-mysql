const express = require('express');
const { tasksManagerConnection } = require('../db');

const router = express.Router();

router.get('/tasks', (req, res) => {
    tasksManagerConnection.execute('SELECT * FROM tasks', (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;