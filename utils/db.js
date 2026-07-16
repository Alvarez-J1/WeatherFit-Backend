const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

const connectDB = () =>
  mongoose
    .connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch(console.error);

module.exports = connectDB;
