const mysql = require("mysql2");

const conn = mysql.createConnection({
    host : process.env.DB_HOST || 'localhost',
    user : 'root',
    password : (process.env.DB_PASS)? process.env.DB_PASS : '',
    database : process.env.DB || 'monsters_db' 
});

conn.config.namedPlaceholders = true;

// poll mysql server at specific intervals
let poller = setInterval(poll, 3000);

// timeout to cancel poll retries
retryTimeout = setTimeout(() => {
  clearInterval(poller)
<<<<<<< HEAD
  throw new Error("Database timeout after 16 seconds");
=======
  setTimeout(()=>{
    throw new Error("Database timeout after 16 seconds"); 
  }, 500);
>>>>>>> 668cb942d14e4682c19bc1d9f2ab9fa8c1440094
}, 15500);

poll(); // starts polling now

// actual mysql server connection initiator
function poll(){
  let errHandler = (errcon)=> {
    if (!errcon) {
      console.log("MySql Connected");
      clearTimeout(retryTimeout);
      clearInterval(poller);
    }
  }
  conn.connect(errHandler);
}

module.exports = conn;