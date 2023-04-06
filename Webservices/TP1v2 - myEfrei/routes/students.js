const express = require("express");
const app = express();

const Student = require("../models/student");
const Class = require("../models/class");

//findAll
app.get("/list", async (req, res) => {
  console.time("Duration of getting students list");
  try {
    const students = await Student.find({})
      .sort({ name: 1 })
      .populate({ path: "class", select: "className" });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err });
  }
  console.timeEnd("Duration of getting students list");
});

//findOneById
app.get("/:id", async (req, res) => {
  console.time("Duration of getting student by id");

  try {
    const { id } = req.params;
    const student = await Student.findById(id).populate({
      path: "class",
      select: "className",
    });

    res.json(student);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
  console.timeEnd("Duration of getting student by id");

});

//newStudent
app.post("/", async (req, res) => {
  console.time("Duration of adding new student");
  try {
    const newStudent = new Student({
      ...req.body,
    });
    const studentAdded = await newStudent.save();

    res.json(studentAdded);
    console.log("Student added !");
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("Error adding new student...");
  }
  console.timeEnd("Duration of adding new student");
});

//findOneAndUpdate
app.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findOneAndUpdate(
      { _id: id },
      { $set: { ...req.body } },
      { new: true }
    ).exec();

    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//deleteOne
app.delete("/:id", async (req, res) => {
  console.time("Duration of deleting student");

  const { id } = req.params;

  try {
    const student = await Student.findById(id);
    await Student.deleteOne({ _id: id }).exec();
    await Class.findOneAndUpdate(
      { _id: student.class },
      { $pull: { students: student._id } }
    );
    res.status(200).json({ success: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
  console.timeEnd("Duration of deleting student");
});

module.exports = app;
