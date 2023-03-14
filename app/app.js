const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());

const mysqlConfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'test123',
    database: 'tasks_manager',
    port: 3306
}

const mysqlConfig2 = {
    host: '127.0.0.1',
    user: 'root',
    password: 'test123',
    database: 'codeacademy',
    port: 3306
}

const connection = mysql.createConnection(mysqlConfig);
const connection2 = mysql.createConnection(mysqlConfig2);

app.get('/tasks', (req, res) => {
    connection.execute('SELECT * FROM tasks', (err, result) => {
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
        connection2.execute(
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
        connection2.execute('SELECT * FROM assignments', (err, result) => {
            if (err) {
                res.json(err);
            } else {
                res.json(result);
            }
        });
    }
});

app.get('/assignments/done', (req, res) => {
    connection2.execute('SELECT * FROM assignments WHERE done=1', (err, result) => {
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