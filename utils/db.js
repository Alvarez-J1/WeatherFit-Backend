const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

const connectDB = () =>
  mongoose
    .connect(MONGODB_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.error("Failed to connect to DB", err);
    });

module.exports = connectDB;
