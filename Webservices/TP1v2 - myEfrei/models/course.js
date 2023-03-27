const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      unique: true,
    },
    classes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
      },
    ],
    professors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Professor",
      },
    ],
  },
  {
    timestamps: true,
  }
);

CourseSchema.pre("deleteOne", async function () {
  const courseId = this.getQuery()["_id"];
  await mongoose
    .model("Professor")
    .updateMany({ course_id: courseId }, { $unset: { course_id: "" } });
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
