import express from 'express'

import {MongoClient} from 'mongodb'

const dbName="studentData";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);


const app = express();
app.use(express.urlencoded({extended:true}))
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
  
})
app.get("/",(req,resp)=>{
    resp.send(` <form method ="post" action= "/add-student>
        <input type = text placeholder="Enter you name" name =name></input>
        <br></br>
        <input type ="number" placeholder ="Enter your age"name=age>
            </input>
            <br></br>
        <input type="text" placeholder="Enter the Email" Name="email"></input>
        <br></br>
        
         <br></br>
        <button>Submit</button>
        </form>
   `)
})

  app.post('/add-student', async (req,resp)=>{
    console.log(req.query);
        // const collection = db.collection("students")
        // const students = await collection.find().toArray();
        resp.render("data is Save successfully!");
    })

app.listen(2020,()=>{
    console.log("This run correctly in http://localhost:2020");
})


