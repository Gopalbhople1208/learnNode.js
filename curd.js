const http = require("http");

http.createServer((req,resp)=>{
fs.writeFileSync("text/curd.txt","this is curd operation");

resp.writeHead(200,{"content-type":"text/html"});
console.log("program is running successfully");
    resp.write("this is curd operation");
    resp.end();
}).listen(2020,()=>{
    console.log("server is running on http://localhost:2020");
});