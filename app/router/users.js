const express = require('express');
const { tasksManagerConnection } = require('../db');

const router = express.Router();

router.get('/users', (req, res) => {
    tasksManagerConnection.execute('SELECT * FROM users', (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result);
        }
    });
});

router.post('/users', (req, res) => {
    const { body: { name, email } } = req;

    tasksManagerConnection.execute(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [name, email],
        (err, result) => {
            if (err) {
                res.json(err)
            } else {
                res.json(result);
            }
        }
    )
});

router.put('/users/:id', (req, res) => {
    const { body } = req;
    const { id } = req.params;

    tasksManagerConnection.execute(
        'UPDATE users SET name=?, email=? WHERE id=?',
        [body.name, body.email, id],
        (err, result) => {
            if (err) {
                res.json(err)
            } else {
                res.json(result);
            }
        }
    );
});

router.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    tasksManagerConnection.execute(
        'DELETE FROM users WHERE id=?',
        [id],
        (err, result) => {
            if (err) {
                res.json(err)
            } else {
                res.json(result);
            }
        }
    );
});

module.exports = router;