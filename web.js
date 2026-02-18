

const http = require("http");

http.createServer((req, resp) => {

    resp.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    resp.end(JSON.stringify({ message: "hello server" }));

}).listen(4202, () => {
    console.log("Server running at http://localhost:4202");
});
