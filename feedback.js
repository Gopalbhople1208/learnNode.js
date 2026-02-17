const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

http.createServer((req,resp)=>{
    fs.readFile("html/feedback.html","utf-8",(err,data)=>{

     if(err){
            resp.writeHead(500,{"Content-Type":"text/html"});
            resp.write("inter server error");
            resp.end();
            return;
        }
        resp.writeHead(200,{"Content-Type":"text/html"});

        if(req.url === "/"){
            resp.write(data);
        } else if (req.url ==="/submit"){
            let dataGive = [];
            req.on("data",(chunk)=>{
                dataGive.push(chunk);
            })
                req.on("end",()=>{
                    let funData = Buffer.concat(dataGive).toString();
                    let woData = queryString.parse(funData);
                    console.log(woData);
                    let stringData = "i am "+woData.userName+" this my Email id "+woData.Email+" and this my feedback "+woData.FeedBack;
                    console.log(stringData);
                    //synchronus way
                    fs.writeFileSync("text/"+   woData.userName +".txt", stringData);
                    console.log("add file successfully");
                    //Asynchronus way
                    fs.writeFile("text/"+woData.userName+".txt",stringData,"utf-8",(err)=>{
                        if(err){
                        resp.write("internal server error");
                        resp.end();
                        return false;
                        }else{
                            console.log("file is created successfully");
                        }
                    })

                })
            
    
            console.log("Submit successfully");
            resp.write("<h1>FeedBack Submit successfully</h1>");
        }else{
            console.log("404 error page not found")
            resp.write("<h1>The this not undefind</h1>");
        }
         resp.end();

    })



   
}).listen(4040,()=>{
    console.log("server is run correct http://localhost:4040");
});