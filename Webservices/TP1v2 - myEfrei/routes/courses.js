const express = require("express");
const app = express();

const Course = require("../models/course");
const Class = require("../models/class");

//findAll
app.get("/list", async (req, res) => {
  console.time("Duration of getting courses list");
  try {
    const courses = await Course.find({})
      .sort({ name: 1 })
      .populate({ path: "classes", select: "className" })
      .populate({ path: "professors", select: "lastName" });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err });
  }
  console.timeEnd("Duration of getting courses list");
});

//findOneById
app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const courses = await Course.findById(id).populate({
      path: "classes",
      select: "className",
    });

    res.json(courses);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

//newCourse
app.post("/", async (req, res) => {
  console.time("Duration of adding new course");

  const { class_id } = req.body;

  try {
    const newCourse = new Course({
      ...req.body,
    });

    if (class_id) {
      await Class.findOneAndUpdate(
        {
          _id: class_id,
        },
        { $push: { courses: newCourse._id } }
      );
      newCourse.classes.push(class_id);
    }

    const courseAdded = await newCourse.save();
    console.log("Course added !");
    res.json(courseAdded);
  } catch (err) {
    res.status(500).json({ error: err });
    console.log("Error adding new course..");
  }
  console.timeEnd("Duration of adding new course");
});

//findOneAndUpdate
app.put("/:id", async (req, res) => {
  const { class_id } = req.body;
  const { id } = req.params;

  try {
    let updateCourse = await Course.findOneAndUpdate(
      { _id: id },
      { $set: { ...req.body } },
      { new: true }
    ).exec();

    if (class_id) {
      await Class.findOneAndUpdate(
        {
          _id: class_id,
        },
        { $push: { courses: id } }
      );
      updateCourse = await Course.findOneAndUpdate(
        { _id: id },
        { $push: { classes: class_id } },
        { new: true }
      ).exec();
    }

    res.json(updateCourse);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//deleteOne
app.delete("/:id", async (req, res) => {
  console.time("Duration of deleting a course");

  const { id } = req.params;

  try {
    await Course.deleteOne({ _id: id }).exec();
    await Class.updateMany({ $pull: { courses: id } });
    res.status(200).json({ success: "Course deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
  console.timeEnd("Duration of deleting a course");
});

module.exports = app;
