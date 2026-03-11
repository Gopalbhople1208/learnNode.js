import express from "express";
import path from "path";
import { MongoClient,ObjectId} from "mongodb";

const app = express();
const publicPath = path.resolve("public");

app.use(express.static(publicPath));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const dbName = "node-project";
const collectionName = "todo";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
await client.connect();

const db = client.db(dbName);

app.get("/home", async (req, resp) => {
 

  const collection = db.collection(collectionName);
  const todos = await collection.find().toArray();

  resp.render("home", { todos });
});

app.get("/add", (req, resp) => {
  resp.render("add");
});

app.get("/update", (req, resp) => {
  resp.render("update");
});

app.post("/add", async (req, resp) => {
  const collection = db.collection(collectionName);
  const result = await collection.insertOne(req.body);

  if (result.insertedId) {
    resp.redirect("/home");
  } else {
    resp.redirect("/add");
  }
});




app.get("/delete/:id", async (req, resp) => {
  const collection = db.collection(collectionName);

  const result = await collection.deleteOne({
    _id: new ObjectId(req.params.id)
  });

  if (result.deletedCount === 1) {
    resp.redirect("/home");
  } else {
    resp.send("Task not found or already deleted");
  }
});


//updata data get 
app.get("/update/:id", async (req, resp) => {
  const collection = db.collection(collectionName);

  const result = await collection.findOne({
    _id: new ObjectId(req.params.id)
  });

 
  if (result) {
   
    resp.render("update", { result });
  } else {
    resp.send("Task not found");
  }
});






app.post("/update/:id", async (req, resp) => {
  try {
    const collection = db.collection(collectionName);

    const filter = { _id: new ObjectId(req.params.id) };
    const setData = { $set: { title: req.body.title, description: req.body.description } };

    const result = await collection.updateOne(filter, setData);

    if (result.matchedCount > 0) {
      resp.redirect("/home");
    } else {
      resp.send("Task not found");
    }
  } catch (error) {
    console.error(error);
    resp.status(500).send("Internal Server Error");
  }
});




// app.post("/update", (req, resp) => {
//   resp.redirect("/home");
// });




//multi-delete
app.post("/multi-delete", async (req, resp) => {
 
    const collection = db.collection(collectionName);

   console.log(req.body.selectTask )

   const selectTask = req.body.selectTask.map((id)=> new ObjectId(id))
   
   
   const result = await collection.deleteMany({_id:{$in:selectTask}});

   if (result) {
       resp.redirect("/home");
     } else {
       resp.send("Task not found");
    }

   
 
});




app.listen(3030, () => {
  console.log("server running at http://localhost:3030");
});


// import express from "express";
// import path from "path";
// import { MongoClient } from "mongodb";

// const app = express();
// const publicPath = path.resolve("public");
// app.use(express.static(publicPath));

// app.set("view engine", "ejs");

// const dbName = "node-project";
// const collectionName = "todo";
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// const connection = async () => {
//   const connect = await client.connect();
//   return await connect.db(dbName);
// };

// app.use(express.urlencoded({ extended: false }));

// app.get("/home", (req, resp) => {
//   resp.render("home");
// });
// app.get("/add", (req, resp) => {
//   resp.render("add");
// });
// app.get("/update", (req, resp) => {
//   resp.render("update");
// });

// app.post("/update", (req, resp) => {
//   resp.redirect("/home");
// });
// app.post("/add", async (req, resp) => {
//   const db = await connection();
//   const collection = db.collection(collectionName);
//   const result = await collection.insertOne(req.body);
//   if (result) {
//     resp.redirect("/home");
//   } else {
//     resp.redirect("/add");
//   }
// });

// app.listen(3030, () => {
//   console.log("server is run in http://localhost:3030");
// });
