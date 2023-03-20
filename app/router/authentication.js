const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { tasksManagerConnection } = require('../db');
const { defaultCallback } = require('../utils/dbUtils');

const router = express.Router();

router.post('/register', (req, res) => {
    const { body } = req;
    const { name, email, password } = body;

    const hashedPassword = bcrypt.hashSync(password, 12);

    tasksManagerConnection.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword],
        (err, result) => defaultCallback(err, result, res)
    );
});

router.post('/login', (req, res) => {
    const { body } = req;
    const { email, password } = body;

    const incorrectCredentialsResponse = () => res.json({
        message: 'Incorrect email or password'
    });

    if (!email || !password) {
        incorrectCredentialsResponse();
        return;
    }

    tasksManagerConnection.execute(
        'SELECT * FROM users WHERE email=?',
        [email],
        (err, result) => {
            if (result.length === 0) {
                incorrectCredentialsResponse();
            } else {
                const user = result[0];
                const isPasswordCorrect = bcrypt.compareSync(password, user.password);

                const { id, email } = user;

                if (isPasswordCorrect) {
                    const token = jwt.sign({ id, email }, 'TEST');
                    res.json({
                        message: 'Successfully logged in!',
                        token
                    });
                } else {
                    incorrectCredentialsResponse();
                }
            }
        }
    )
});

module.exports = router;