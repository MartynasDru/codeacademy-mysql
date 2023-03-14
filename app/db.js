const mysql = require('mysql2');

const mysqlConfigBase = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT
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