const express = require('express');
const { codeacademyConnection } = require('../db');

const router = express.Router();

router.get('/assignments', (req, res) => {
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

router.get('/assignments/done', (req, res) => {
    codeacademyConnection.execute('SELECT * FROM assignments WHERE done=1', (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

router.post('/assignments', (req, res) => {
    const { body } = req;

    codeacademyConnection.execute(
        'INSERT INTO assignments (name, done) VALUES (?, ?)',
        [body.name, body.done],
        (err, result) => {
            if (err) {
                res.json(err)
            } else {
                res.json(result);
            }
        }
    )
});

module.exports = router;