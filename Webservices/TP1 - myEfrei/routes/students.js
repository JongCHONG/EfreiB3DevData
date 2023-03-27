var express = require("express");
var app = express();
// const { dbConnect } = require("../config/db")
const { MongoClient, ObjectId } = require("mongodb");

const DB_NAME = "myEfrei";
const DB_URL = `mongodb+srv://jochong:jochong@cluster0.6t0buxn.mongodb.net/${DB_NAME}`;
const client = new MongoClient(DB_URL);

// const client = dbConnect()

//findAll
app.get("/list", async (req, res) => {
  try {
    await client.connect();
    const list = [];
    const students = await client.db("myEfrei").collection("students").find();

    await students.forEach((student) => {
      list.push(student);
    });

    res.json(list);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  } finally {
    await client.close();
  }
});

//findOneById
app.get("/", async (req, res) => {
  try {
    await client.connect();
    const { _id } = req.body;

    const student = await client
      .db("myEfrei")
      .collection("students")
      .findOne({ _id: ObjectId(_id) });

    res.json(student);
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
      .collection("students")
      .insertOne(query);

    res.json("Insertion done");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  } finally {
    await client.close();
  }
});

//updateOneById
app.put("/:id", async (req, res) => {
  try {
    await client.connect();
    const query = req.body;
    const { id } = req.params;

    await client
      .db("myEfrei")
      .collection("students")
      .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { ...query } });

    res.json("Updated");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  } finally {
    await client.close();
  }
});

// DeleteOneById
app.delete("/:id", async (req, res) => {
  try {
    await client.connect();
    const { id } = req.params;

    const result = await client
      .db("myEfrei")
      .collection("students")
      .findOneAndDelete({ _id: ObjectId(id) });

    res.json("Deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  } finally {
    await client.close();
  }
});

module.exports = app;
