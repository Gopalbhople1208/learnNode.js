const http = require("http");
const fs = require("fs");

http.createServer((req,resp)=>{
    fs.readFile("html/form.html",'utf-8',(err,data)=>{

        if(err){
            resp.writeHeader(500,{"Content-Type":"text/plain"})
            resp.write("internal server error ahe");
            return;

            
        } 
        resp.writeHeader(200,{"Content-Type":"text/html"});
         if(req.url == "/"){
        
     resp.write(data);
         }else if(req.url=="/submit"){
       resp.write("the data is submit");
    }
    resp.end();
    })

}).listen(8080,()=>{
    console.log("this server is run correct http://localhost:8080")
});
    // resp.setHeader("Content-Type","text/html");
    // console.log(req.url);
    // if(req.url == "/"){
        
    // resp.write(`
       
    //     <form action = "/submit" method ="post">
    //     <input type ="text" placeholder = "enter name" name =name />
    //             <input type ="text" placeholder = "enter email" email = email />

        
    //     <button>Click me</button>
    //     </form>


    //     `);
//     }else if(req.url=="/submit"){
//         resp.write("the data is submit");

//     }else{
//         resp.write("this last case of else")
//     }
//     resp.end();
// }).listen(3444,()=>{
//     console.log("Server is run corrected http://localhost:3444")
// })