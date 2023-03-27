const mongoose = require("mongoose");

const ProfessorSchema = new mongoose.Schema(
  {
    lastName: {
      type: String,
      required: true,
    },
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    email: {
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
  },
  {
    timestamps: true,
  }
);

ProfessorSchema.post("save", async (professor) => {
  await mongoose
    .model("Course")
    .findOneAndUpdate(
      { _id: professor.course_id },
      { $push: { professors: professor._id } }
    );
});

const Professor = mongoose.model("Professor", ProfessorSchema);

module.exports = Professor;
