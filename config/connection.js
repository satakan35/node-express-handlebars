// var mysql = require("mysql");

// //1)create connection object
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "canmert68*",
//     database: "burgers_db"
//   });

  // Set up MySQL connection.
var mysql = require("mysql");
var connection;
//make connection
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "canmert68*",
    database: "burgers_db"
  })
}
  
//2)connect
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
module.exports = connection;
