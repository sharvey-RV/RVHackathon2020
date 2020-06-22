'use strict';
console.log('Loading hello world function');

// Require and initialize outside of your main handler
const mysql = require('serverless-mysql')({
    config: {
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        port: process.env.RDS_PORT,
        database: process.env.RDS_DATABASE
    }
})

// Main handler function
exports.handler = async (event, context) => {
    // Run your query
   let body =  "";
     if (event.body) {
        let body1 = JSON.parse(event.body);
        if (body1.command) 
            body = body1.command;
    }
     
    //  var body = "GetEmployee";
    let results = await mysql.query('SELECT * FROM Slack WHERE Command LIKE ?',[body])

    // Run clean up function
    await mysql.end()
    
    var sqlBodyResult = [results[0].Body,results[0].Type];

    console.log(sqlBodyResult);

   
    let responseCode = 200;
    console.log("request: " + JSON.stringify(event));


    let responseBody = {
        sqlResults: sqlBodyResult,
    //  input:event
    };

    // The output from a Lambda proxy integration must be 
    // in the following JSON object. The 'headers' property 
    // is for custom response headers in addition to standard 
    // ones. The 'body' property  must be a JSON string. For 
    // base64-encoded payload, you must also set the 'isBase64Encoded'
    // property to 'true'.
    let response = {
        statusCode: responseCode,
        headers: {
            "x-custom-header": "my custom header value"
        },
        body: JSON.stringify(responseBody)
    };

    return response;
}