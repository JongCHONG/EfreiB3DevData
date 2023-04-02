const express = require("express");
const app = express();

const Professor = require("../models/professor");
const Course = require("../models/course");
const Class = require("../models/class");

//findAll
app.get("/list", async (req, res) => {
  try {
    const professors = await Professor.find({})
      .sort({ lastName: 1 })
      .populate({ path: "classes", select: "className" });
    res.json(professors);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//findOneById
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const professors = await Professor.findById(id).populate({
      path: "classes",
      select: "className",
    });

    res.json(professors);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

//newProfessor
app.post("/", async (req, res) => {
  console.time("Professor Added !");

  try {
    const { class_id } = req.body;

    const newProfessor = new Professor({
      ...req.body,
    });
    if (class_id) {
      await Class.findOneAndUpdate(
        {
          _id: class_id,
        },
        { $push: { professors: newProfessor._id } }
      );
      newProfessor.classes.push(class_id);
    }

    const professorAdded = await newProfessor.save();

    res.json(professorAdded);
    console.log("Adding new professor..");
  } catch (err) {
    res.status(500).json({ error: err });
  }

  console.timeEnd("Professor Added !");
});

//findOneAndUpdate
app.put("/:id", async (req, res) => {
  const { class_id } = req.body;
  const { id } = req.params;

  try {
    let updateProfessor = await Professor.findOneAndUpdate(
      { _id: id },
      { $set: { ...req.body } },
      { new: true }
    ).exec();

    if (class_id) {
      await Class.findOneAndUpdate(
        {
          _id: class_id,
        },
        { $push: { professors: id } }
      );
      updateProfessor = await Professor.findOneAndUpdate(
        { _id: id },
        { $push: { classes: class_id } },
        { new: true }
      ).exec();
    }

    res.json(updateProfessor);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//deleteOne
app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Professor.deleteOne({ _id: id }).exec();
    await Class.updateMany({ $pull: { professors: id } });
    await Course.updateMany({ $pull: { professors: id } });
    res.status(200).json({ success: "Professor deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = app;
