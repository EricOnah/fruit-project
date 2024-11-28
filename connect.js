const { MongoClient } = require("mongodb");

const uri = "mongodb://0.0.0.0:27017/";

connect();
async function connect() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("fruitsDB");

    //Insert document

    const myColl = db.collection("fruits");
    const result = await myColl.insertMany([
      { name: "Orange", score: 5, review: "Great fruit" },
      { name: "Apple", score: 4.5, review: "A good fruit" },
      { name: "Banana", score: 5, review: "Very sweet" },
    ]);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);

    //Insert document end
    console.log(`connected to db ${db}`);
  } catch (err) {
    console.error(`The error is ${err}`);
  } finally {
    client.close();
  }
}
