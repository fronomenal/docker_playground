const mysql = require("mysql2");

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'shoppers' 
});
conn.connect((err) => {
    if (err) {
      throw err;
    }
console.log("MySql Connected");
});

module.exports = conn;