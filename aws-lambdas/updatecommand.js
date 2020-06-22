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
 var newBody = event.NewBody;
 var newType = event.NewType;

 var rawSQL = "UPDATE Slack SET Body=?, Type=? WHERE Command = ?";
 var statements = [newBody, newType, command];
 var sql = mysql.format(rawSQL, statements);

 console.log(sql);
 con.query(sql, (err, res) => { 
    if (err) {   
    throw err   
  }     
  callback(null, res);  
 }) 
};