const mysql = require('mysql2');

const mysqlConfigBase = {
    host: '127.0.0.1',
    user: 'root',
    password: 'test123',
    port: 3306
}

const tasksManagerConnection = mysql.createConnection({
    ...mysqlConfigBase,
    database: 'tasks_manager'
});

const codeacademyConnection = mysql.createConnection({
    ...mysqlConfigBase,
    database: 'codeacademy'
});

module.exports = {
    tasksManagerConnection,
    codeacademyConnection
}