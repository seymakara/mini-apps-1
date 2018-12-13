var mysql = require('mysql')

mysql.exports = {
  connection: mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'checkout'
  })
}
