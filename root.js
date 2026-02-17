function root(req,resp){

console.log("this is root program is function");
resp.write("this is root program is function");
resp.write(`
    <form action="/submit" method ="post">
    <input type="text" name="username" placeholder="Enter your Name" />
    <input type ="text" name ="email" placeholder ="enter your email" />
    <button type="submit">Submit</button>
    `)
resp.end();
}
module.exports = root;

