import express from 'express'

import {MongoClient} from 'mongodb'

const dbName="studentData";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);


const app = express();

app.set("view engine", "ejs");
client.connect().then((connection)=>{
    const db= connection.db(dbName);

    app.get("/api", async (req,resp)=>{
        const collection = db.collection("students")
        const students = await collection.find().toArray();
        resp.send(students);
    })
      app.get('/ui', async (req,resp)=>{
        const collection = db.collection("students")
        const students = await collection.find().toArray();
        resp.render('first',{students:students});
    })
    app.get('/', async (req,resp)=>{
        const collection = db.collection("students")
        const students = await collection.find().toArray();
        resp.render('first',{students:students});
    })
})

app.listen(2020,()=>{
    console.log("This run correctly in http://localhost:2020");
})


