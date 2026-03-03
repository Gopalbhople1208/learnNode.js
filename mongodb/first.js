import express from 'express'

import {MongoClient} from 'mongodb'

const dbName="studentData";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);


const app = express();

app.set("view engine " ,"ejs");
app.get('/',async (req,resp)=>{
     await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');

    const result = await collection.find().toArray();
    console.log(result);
    resp.render("first");
})
app.listen(2020,(req,resp)=>{
    console.log("This run correctly in http://localhost:2020");
})


