import express from 'express'
import path from 'path'

   

const app = express();
const publicPath=path.resolve('public')
app.use(express.static(publicPath));

app.set('view engine','ejs');

app.get("/home",(req,resp)=>{
    resp.render("home")
})
app.get("/add",(req,resp)=>{
    resp.render("add")

})
app.get("/update",(req,resp)=>{
    resp.render("update");
})

app.post("/update",(req,resp)=>{
    resp.redirect("home");
})
app.post("/update",(req,resp)=>{
    resp.redirect("home");
})



app.listen(3030,()=>{
    console.log("server is run in http://localhost:3030");
})