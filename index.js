



const http = require("http");
const fs = require("fs");

http.createServer((req, resp) => {

    fs.readFile("html/index.html", "utf-8", (err, data) => {

        if (err) {
            resp.writeHead(500, { "Content-Type": "text/plain" });
            resp.end("Internal Server Error");
            return;
        }

        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.end(data);   // send file content

    });

}).listen(5555, () => {
    console.log("Server running at http://localhost:5555");
});
