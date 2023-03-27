const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    className: {
      type: String,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
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

// ClassSchema.pre('deleteOne', async (class) => {
//   await mongoose
//   // .model("Student")
//   // .updateMany({ class: class._id }, { $unset: { class: '' } });
// })

ClassSchema.pre("deleteOne", async function () {
  const classId = this.getQuery()["_id"];
  await mongoose
    .model("Student")
    .updateMany({ class: classId }, { $unset: { class: "" } });
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;
