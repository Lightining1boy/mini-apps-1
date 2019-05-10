const mysql = require('mysql');
const connection = mysql.connection ({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'connect4'
})
connection.connect();
module.exports = connection;