const express = require("express");
const app = express();

const Course = require("../models/course");
const Class = require("../models/class");

//findAll
app.get("/list", async (req, res) => {
  try {
    const courses = await Course.find({})
      .sort({ name: 1 })
      .populate({ path: "classes", select: "className" });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err });
  }
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
  const { class_id } = req.body;

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

  newCourse.save((err, newCourse) => {
    if (err) {
      res.status(500).json({ error: err });
      return;
    }

    res.json(newCourse);
  });
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
  const { id } = req.params;

  try {
    await Course.deleteOne({ _id: id }).exec();
    await Class.updateMany({ $pull: { courses: id } });
    res.status(200).json({ success: "Course deleted" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = app;
