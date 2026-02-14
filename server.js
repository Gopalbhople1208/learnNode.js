const http = require('http');

http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "text/html");
    resp.write("<h1>This tag adds more text</h1>");
    resp.write("King is the god of state<br>");
    resp.end("Hello");
}).listen(5003, () => {
    console.log("Server running at http://localhost:5003");
});
