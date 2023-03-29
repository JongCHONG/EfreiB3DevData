const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    sex: {
      type: String,
    },
    age: {
      type: Number,
    },
    class: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Class",
    },
  },
  {
    timestamps: true,
  }
);

StudentSchema.post("save", async (student) => {
  await mongoose
    .model("Class")
    .findOneAndUpdate(
      { _id: student.class },
      { $push: { students: student._id } }
    );
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
