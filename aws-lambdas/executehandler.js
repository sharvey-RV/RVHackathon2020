const querystring = require("querystring");
const fetch = require("node-fetch");

//Testing wont work without proper body and verification token

exports.handler = async (event, context, callback) => {
    
    
    //response declaration to be returned
    const res={
       statusCode:null,
       body:''
   }
   
   const params = querystring.parse(event.body);
   
   
   //Check if API request is comming from a trustworthy app (slack)
  if(process.env.VERIFICATION_TOKEN !== params.token)
  {
      res.statusCode = 401;
      res.body = "Unauthorized";
       
      callback(null,res);
  }
   
   //Command gotten from /jarvis "command"
  var jarvisCommand = params.text.split(" ");
   
  //Check if correct amount of parameters
  if(jarvisCommand.length<1||jarvisCommand.length>1)
  {
      res.statusCode = 200;
      res.body = "Sorry what was that again?";
       
      callback(null,res);
       
  }else
  {
        res.statusCode = 200;
        res.body = jarvisCommand[0];
        
        //Body data sent to look for in the database
        const data1 = { "command":  res.body};

        //search for command in database and get the API url response
        const rawResponse = await fetch('https://h6d3rqs549.execute-api.us-west-1.amazonaws.com/TestProd/arvy-execute-command', {
            method: 'POST',
            headers: {
              'day': 'Thursday',
              'content-type': 'application/json'
            },
            body: JSON.stringify(data1)
          });
  
        //Post Respose
        const content = await rawResponse.json();
        
        if (content.sqlResults == null) {
            const responsee = {
            response_type: "in_channel",
              text: "No Command Found",
            // attachments: [attachment]
             }

            res.body=JSON.stringify(responsee);
            callback(null,res);
        }
        //Save SQL Post response values 
        const sqlBody = content.sqlResults[0];
        const sqlType = content.sqlResults[1];

        var dataRes = "";
        
        //Check if Endpoint or String 
        if(sqlType === "endpoint")
        {
            // fetch the API endpoint got from the database
            const source = await fetch(sqlBody);
            const content1 = await source.json();

            //,null, "\t" beautifies the json  
            dataRes = JSON.stringify(content1,null, "\t");
        }else
        {
            dataRes = sqlBody;
        }
       
        
        //Format how its going to look in slack
        // const attachment= {
        //     fallback: "Required plain-text summary of the attachment.",
        //     color: "#36a64f",
        //     title: jarvisCommand[0],
        //     text: dataRes,
        // };

        //settings for the slack message 
        const responsee = {
            response_type: "in_channel",
              text: dataRes,
            // attachments: [attachment]
        }

        res.body=JSON.stringify(responsee);
        callback(null,res);
      
      
  }
  
  
  
  
};