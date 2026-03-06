import { MongoClient } from "mongodb";
const url = "mongodb://cluster0-shard-00-00.wj1kadu.mongodb.net:27017,cluster0-shard-00-01.wj1kadu.mongodb.net:27017,cluster0-shard-00-02.wj1kadu.mongodb.net:27017/?replicaSet=atlas-xyz-shard-0&authSource=admin&retryWrites=true&w=majority";

//const url = "mongodb+srv://gbhople63_db_user:GoogleTest@cluster0.wj1kadu.mongodb.net/library?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("MongoDB Connected");

    const db = client.db("library");
    const books = db.collection("books");

    const result = await books.find().toArray();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

run();