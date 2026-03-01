import express from 'express';
import userData from './user.json' with {type:'json'};

const app = express();

app.get('/',(req,resp)=>{
    resp.send(userData);
})

app.get('/user/:id',(req,resp)=>{ //this is call by id method it's use
    const id= req.params.id
    let filterData = userData.filter((user)=>user.id == id)
    console.log(filterData);
    resp.send(filterData);
})



app.get('/username/:name',(req,resp)=>{  //this is call by name method it's use
 
    const name= req.params.name
    let filterData = userData.filter((user)=>user.name.toLowerCase() == name.toLowerCase())
    console.log(filterData);
    resp.send(filterData);
})
app.listen(2323,()=>{
    console.log("this working corrected https:/localhost:2323");
})