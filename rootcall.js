const http = require("http");
const root = require("./root");
const rootsubmit = require("./rootsubmit");

http.createServer((req, resp) => {

    resp.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
        root(req, resp);
    } 
    else if (req.url === "/submit") {
        rootsubmit(req, resp);
    } 
    else {
        resp.write("<h1>404 Page Not Found</h1>");
        resp.end();
    }

}).listen(3553);
