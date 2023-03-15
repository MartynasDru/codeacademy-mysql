const express = require('express');
const { tasksManagerConnection } = require('../db');
const { defaultCallback } = require('../utils/dbUtils');

const router = express.Router();

router.get('/tasks', (req, res) => {
    tasksManagerConnection.execute(
        'SELECT * FROM tasks', 
        (err, result) => defaultCallback(err, result, res)
    );
});

module.exports = router;