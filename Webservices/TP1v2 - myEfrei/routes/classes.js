const express = require("express");
const app = express();

const Class = require("../models/class");
const Professor = require("../models/professor");
const Course = require('../models/course')

//findAll
app.get("/list", async (req, res) => {
  try {
    const classes = await Class.find({})
      .sort({ className: 1 })
      .populate({ path: "students", select: "name" })
      .populate({ path: "courses", select: "courseName" });
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//findOneById
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findClass = await Class.findById(id)
      .populate({
        path: "students",
        select: "name",
      })
      .populate({ path: "courses", select: "courseName" });

    res.json(findClass);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

//newClass
app.post("/", async (req, res) => {
  console.time("Class Added !")
  try {
    const newClass = new Class({
      ...req.body,
    });
    const classAdded = await newClass.save();
    
    res.json(classAdded);
    console.log("Adding new class..")
  } catch (err) {
    res.status(500).json({ error: err });

  }
  console.timeEnd("Class Added !")
});

//findOneAndUpdate
app.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updateClass = await Class.findOneAndUpdate(
      { _id: id },
      { $set: { ...req.body } },
      { new: true }
    ).exec();

    res.json(updateClass);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//deleteOne
app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Class.deleteOne({ _id: id }).exec();
    await Professor.updateMany({ $pull: { classes: id } });
    await Course.updateMany({ $pull: { classes: id } });
    res.status(200).json({ success: "Class deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = app;
