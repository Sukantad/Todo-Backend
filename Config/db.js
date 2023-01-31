const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const url = process.env.DATABASE_URL;
const DataBaseConnecton = async () => {
  try {
    await mongoose.connect(url);
    console.log("Db connected");
  } catch (error) {
    console.log(error)
  }
};

module.exports = DataBaseConnecton;
