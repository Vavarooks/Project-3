const mysql = require('mysql');
let connection;
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: 'localhost',
       user: 'root',
      password: 'password',
      database: 'Users_DB'
  });
}
 

connection.connect();


module.exports = connection;