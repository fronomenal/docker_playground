const mysql = require("mysql2");

const conn = mysql.createConnection({
    host : process.env.DB_HOST || 'localhost',
    user : 'root',
    password : (process.env.DB_PASS)? process.env.DB_PASS : '',
    database : process.env.DB || 'shoppers' 
});

let poller = setInterval(poll, 3000);
let flag = true;
poll(poller);
setTimeout(() => {
  clearInterval(poller)
  setTimeout(()=>{
    if(flag) throw new Error("Database timeout after 16 seconds"); 
  }, 500);
}, 15500);


function poll(poller){
  let errHandler = (errcon)=> {
    if (!errcon) {
      console.log("MySql Connected");
      flag = false;
      clearInterval(poller);
    }
  }
  conn.connect(errHandler)
}

module.exports = conn;