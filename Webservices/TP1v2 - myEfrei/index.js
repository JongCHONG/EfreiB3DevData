const express = require("express");
const cors = require("cors")

const app = express();
const port = 4000;
const { dbConnect } = require("./config/db");

const studentsRoutes = require("./routes/students");
const classesRoutes = require("./routes/classes");
const coursesRoutes = require("./routes/courses");
const professorsRoutes = require("./routes/professors");

dbConnect();

app.use(express.json());

app.use(cors({
  origin : 'http://localhost:3000',
  credentials : true
}))

app.use("/students", studentsRoutes);
app.use("/classes", classesRoutes);
app.use("/courses", coursesRoutes);
app.use("/professors", professorsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
