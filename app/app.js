const express = require('express');
const cors = require('cors');

const { tasksManagerConnection, codeacademyConnection } = require('./db');

const app = express();

app.use(cors());

app.get('/tasks', (req, res) => {
    tasksManagerConnection.execute('SELECT * FROM tasks', (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.get('/assignments', (req, res) => {
    const { done } = req.query;

    if (done === '0' || done === '1') {
        codeacademyConnection.execute(
            'SELECT * FROM assignments WHERE done=?',
            [done],
            (err, result) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(result);
                }
            }
        )
    } else {
        codeacademyConnection.execute('SELECT * FROM assignments', (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    }
});

app.get('/assignments/done', (req, res) => {
    codeacademyConnection.execute('SELECT * FROM assignments WHERE done=1', (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});