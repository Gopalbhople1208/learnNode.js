import { MongoClient } from "mongodb";

const url = "mongodb+srv://gbhople63_db_user:GoogleTest@cluster0.wj1kadu.mongodb.net/?retryWrites=true&w=majority";
const database = "library";
const collectionName = "books";

const client = new MongoClient(url);

async function dbCollection() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected");

    const db = client.db(database);
    const collection = db.collection(collectionName);

    const result = await collection.find().toArray();

    console.log("📚 Books Data:", result);

  } catch (error) {
    console.log("❌ Error:", error);
  } finally {
    await client.close();
    console.log("🔌 Connection Closed");
  }
}

dbCollection();