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

const connection = mysql.createConnection(mysqlConfig);

app.get('/tasks', (req, res) => {
    connection.execute('SELECT * FROM tasks', (err, result) => {
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