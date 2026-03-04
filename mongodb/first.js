import express from 'express'
import { ObjectId } from "mongodb";
import {MongoClient} from 'mongodb'

const dbName="studentData";
const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

let db;
const app = express();
app.use(express.urlencoded({extended:true}))//this extetion use to get data form to this page
app.use(express.json())//this use get data form json file to the page
app.set("view engine", "ejs");
client.connect().then((connection)=>{
     db = connection.db(dbName);

     //show the data in api form
    app.get("/api", async (req,resp)=>{
        const collection = db.collection("students")
        const students = await collection.find().toArray();
        resp.send(students);
    })
    //show the data in table form
      app.get('/ui', async (req,resp)=>{
        const collection = db.collection("students")
        const students = await collection.find().toArray();
        resp.render('first',{students:students});
    })
  
})
app.get("/",(req,resp)=>{
    resp.render('add-student');
})

//add data use of form 
  app.post('/add-student', async (req,res)=>{
   
         const collection = db.collection("students");
         const result =await collection.insertOne(req.body);
         console.log(result);
        // const students = await collection.find().toArray();
        res.send("data is Save successfully!");
    })

    //add data use of api 
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
        resp.send({message:"Data Stored successfully",success:true,result:result});
    }) //then check thunder name extention from add the some data in body JSON file
//how to req to data add in this screen 


//delete data
app.delete("/delete/:id",async (req,resp)=>{ //delete data by use of thunder /delete/add the id record delete
    
    const collection = db.collection("students");
    const result = await collection.deleteOne({_id:new ObjectId(req.params.id)});
   if(result){
   
    resp.send({message:"Data is Delete Successfully",result:result,success:true});
   }else{
        resp.send({message:"Data is not Delete try again!!",result:result,success:false});

}
})
//delete with the ui function use delete rec
app.get("/delete/:id",async (req,resp)=>{ //delete data by use of ui /delete/add the id record delete
    
    const collection = db.collection("students");
    const result = await collection.deleteOne({_id:new ObjectId(req.params.id)});
   if(result){
   
    resp.send('<h1>Student Record Delete Successfully</h1>');
   }else{
        resp.send('<h1>Student Record not Delete!!</h1>');

}
})

app.listen(2020,()=>{
    console.log("This run correctly in http://localhost:2020");
})


