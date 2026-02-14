
const https = require('http');

https.createServer((req, resp) => {
 resp.write("<h1>this tag add the more text</h1>");
 resp.write("king the is god of state");

    //end is import to completed the process
    resp.end("Hello");   // Important to end response
      
}).listen(5003);

const http = require('http');
http.createServer((req,resp)=>{
resp.end("end");
}).listen(40);

