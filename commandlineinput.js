const http = require("http");
const arg = process.argv;
const port =arg[2];
console.log(arg[2]);
console.log("------",arg[2]);
http.createServer((req,resp)=>{

    resp.write("this code is command line input (cmd) ")
    resp.end();
}).listen(port,()=>{
    console.log("Server is run properly in http://localhost:205" );
});


