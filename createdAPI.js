const http = require("http");

const userData = [
    {
        name: "jon",
        age: 34,
        email: "jon23@gmail.com"
    },
    {
        name: "don",
        age: 32,
        email: "don@gmail.com"
    },
    {
        name: "king",
        age: 65,
        email: "king@gmail.com"
    }
];

http.createServer((req, resp) => {
    resp.setHeader("Content-Type", "application/json");
    resp.end(JSON.stringify(userData));
}).listen(755, () => {
    console.log("Server running at http://localhost:755");
});
