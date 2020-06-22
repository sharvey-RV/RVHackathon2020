const mysql = require('mysql');
const con = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database : process.env.RDS_DATABASE
});

exports.handler = (event, context, callback) => {  
 // allows for using callbacks as finish/error-handlers  
 context.callbackWaitsForEmptyEventLoop = false;  
 
 /*
  I've been using this lambda to reset the table while developing
 */
 
  //const sql = "CREATE TABLE Slack (Command VARCHAR(255), Body VARCHAR(255), Type VARCHAR(255), UNIQUE(Command))";
 const sql = "SELECT * FROM Slack";
 //const sql = "DROP TABLE Slack"
 con.query(sql, (err, res) => { 
    if (err) {   
    throw err   
  }     
  callback(null, res);  
 }) 
};