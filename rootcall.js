const http = require("http");
const root = require("./root");

http.createServer((req,resp)=>{
    resp.writeHead(200,{"Content-type":"text/html"});
    root(req,resp);

resp.write("this is router program");
resp.end();
}).listen(3553,()=>{
    console.log("add the corrected port number");
});