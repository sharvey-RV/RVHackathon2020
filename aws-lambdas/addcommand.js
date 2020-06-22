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
 var command = event.Command;
 var body = event.Body;
 var type = event.Type;
 
 var rawSQL = "INSERT INTO Slack VALUES (?, ?, ?)";
 var statements = [command, body, type, command];
 var sql = mysql.format(rawSQL, statements);
 console.log(sql);
 con.query(sql, (err, res) => { 
    if (err) {   
        throw err   
    }     
  callback(null, res);  
 }) 
};