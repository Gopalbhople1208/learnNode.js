const http = require("http");

http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "text/html");

    console.log(req.headers.host); // localhost:4001
    console.log(req.method);       // GET
    console.log(req.url);          // /home etc

    if (req.url === "/home") {
        console.log("This is /home page");
        resp.write("<h1>Welcome to Home Page</h1>");
    } 
    else if (req.url === "/login") {
        console.log("This is /login page");
        resp.write("<h1>Welcome to Login Page</h1>");
    } 
    else {
        console.log("This is else case");
        resp.write("<h1>Page Not Found</h1>");
    }

    resp.end();
}).listen(4001, () => {
    console.log("Server running at http://localhost:4001");
});
