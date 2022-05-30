const mysql = require("mysql2");

const conn = mysql.createConnection({
    host : process.env.DB_HOST || 'localhost',
    user : 'root',
    password : (process.env.DB_PASS)? process.env.DB_PASS : '',
    database : process.env.DB || 'shoppers' 
});
conn.connect((err) => {
    if (err) {
      throw err;
    }
console.log("MySql Connected");
});

module.exports = conn;