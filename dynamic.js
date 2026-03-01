import express from "express";

const app = express();

app.get("/", (req, resp) => {   // ✅ arrow function fixed
    const user = ["anil", "gopal", "sumit", "hen"];
    let data = "";

    for (let i = 0; i < user.length; i++) {
        console.log(user[i]);
        data +=`<li><a href = "user/${user[i]}">${user[i]}</a></li>`;
    }

    resp.send(`
        <h1>This is home page</h1>
        ${data}
    `);
});

app.get("/user/:name",(req,resp)=>{
    const userName = (req.params.name);
    
    resp.send(`this is ${userName}'s profile page`);
})

app.listen(3030, () => {
    console.log("Server running on http://localhost:3030");
});
