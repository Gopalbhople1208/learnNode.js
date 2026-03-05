import express from 'express'

const app = express();

app.get('/',(req,resp)=>{

    resp.send({
        name:"hen",
        age:23,
        email:"hen@gamil.com"
    })
})

app.listen(3200,()=>{
    console.log("this run successfully http://localhost:3200");
})