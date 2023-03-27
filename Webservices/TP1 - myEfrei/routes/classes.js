var express = require("express");
var app = express();
// const { dbConnect } = require("../config/db")
const { MongoClient, ObjectId } = require("mongodb");

const DB_NAME = "myEfrei";
const DB_URL = `mongodb+srv://jochong:jochong@cluster0.6t0buxn.mongodb.net/${DB_NAME}`;
const client = new MongoClient(DB_URL);

// const client = dbConnect()

//findOneById
app.get("/", async (req, res) => {
  try {
    await client.connect();
    const { _id } = req.body;

    const classes = await client
      .db("myEfrei")
      .collection("classes")
      .findOne({ _id: ObjectId(_id) });

    res.json(classes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  } finally {
    await client.close();
  }
});

//insertOne
app.post("/", async (req, res) => {
  try {
    await client.connect();
    const query = req.body;

    const result = await client
      .db("myEfrei")
      .collection("classes")
      .insertOne(query);

    res.json("Insertion done");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  } finally {
    await client.close();
  }
});

module.exports = app;
