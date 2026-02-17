const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
http.createServer((req,resp)=>{
    fs.readFile("html/login.html","utf-8",(err,data)=>{

        if(err){
            resp.writeHead(500,{"Content-Type":"text/html"})
            resp.write("internal system error")
            resp.end();
            return;
        }
        resp.writeHead(200,{"Content-Type":"text/html"});
        if(req.url === "/"){
           
            resp.write(data);

        }else if(req.url ==="/submit"){
            let dataBody = [];
            req.on("data",(chunk)=>{
                dataBody.push(chunk);
            })
            req.on("end",()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                console.log(readableData);
            })
            console.log("the login page is submit")
            resp.write("<h1>the login page is submit sucessfuly </h1>")
        }else{
            console.log("404 error");
            resp.write("<h1>404 error page is not found</h1>");
        }
        resp.end();

    })


}).listen(4545,()=>{
    console.log("Server is run correctly http://localhost:4545");
});