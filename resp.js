const https = require("http");                             
    const age = 29;

https.createServer((req,resp)=>{
    resp.setHeader("Content-text","text/html");//this setHeader is gives the set all text and html

    resp.write(`<html>
        <head>
        <title>this node js code</title>
        </head>
        <body>
            <h1>will play</h1>
            <h3>`+age+`</h3>
                        <h3>`+new Date+`</h3>

        </body>
    </html>`)
    resp.write("<h1>hello this is the resp string</h1>");
    resp.write("<h2>this the h2 string</h2>");
    resp.end("hello");
    process.exit();
}).listen(30);
https.createServer((req,resp)=>{
    resp.setHeader("Content-text","text/html");//this setHeader is gives the set all text and html

    resp.write("<h1>hello this is the resp string</h1>");
    resp.write("<h2>this the h2 string</h2>");
    resp.end("hello");
}).listen(3000);

