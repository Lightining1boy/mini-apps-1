const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user:'root',
  password: '',
  database: 'profilelist'
});
connection.connect();
module.exports = connection;