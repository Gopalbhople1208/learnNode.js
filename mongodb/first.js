import express from 'express'

import {MongoClient} from 'mongodb'

const dbName="studentData";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

let db;
const app = express();
app.use(express.urlencoded({extended:true}))//this extetion use to get data form to this page
app.use(express.json())
app.set("view engine", "ejs");
client.connect().then((connection)=>{
     db = connection.db(dbName);

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
  
})
app.get("/",(req,resp)=>{
    resp.render('add-student');
})

  app.post('/add-student', async (req,res)=>{
   
         const collection = db.collection("students");
         const result =await collection.insertOne(req.body);
         console.log(result);
        // const students = await collection.find().toArray();
        res.send("data is Save successfully!");
    })

    app.post("/add-student-api",async(req,resp)=>{
      //  console.log(req.body);
      const{name,age,email} = req.body;
      if(!name || !age || !email){
        resp.send({message:"operation is failed",success:false})
        return false
      }
      const collection = db.collection("students");//this case add data use of thunder Json file 
      const result = await collection.insertOne(req.body);
        console.log(result);
        resp.send({massage:"Data Stored successfully",success:true,result:result});
    }) //then check thunder name extention from add the some data in body JSON file
//how to req to data add in this screen 


app.listen(2020,()=>{
    console.log("This run correctly in http://localhost:2020");
})


