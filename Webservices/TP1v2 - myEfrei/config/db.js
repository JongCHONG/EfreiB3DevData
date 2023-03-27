const mongoose = require("mongoose");

const dbConnect = () => {
  const DB_NAME = "myEfrei";
  const DB_URL = `mongodb+srv://jochong:jochong@cluster0.6t0buxn.mongodb.net/${DB_NAME}`;

  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(DB_URL);
    console.log(`Connected to ${DB_NAME} database`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  dbConnect,
};
