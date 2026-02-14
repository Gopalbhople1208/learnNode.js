
const http = require('http');

http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<h1>This tag adds more text</h1>");
    resp.write("King is the god of state<br>");
    resp.end("Hello");
}).listen(5003, () => {
    console.log("Server running at http://localhost:5003");
});
const http = require('http');

http.createServer((req, resp) => {
 resp.write("<h1>this tag add the more text</h1>");
 resp.write("king the is god of state");

    //end is import to completed the process
    resp.end("Hello");   // Important to end response
      
}).listen(5003);


http.createServer((req,resp)=>{
    resp.write("one file created the two server");
    resp.end("end");
}).listen(4000);


