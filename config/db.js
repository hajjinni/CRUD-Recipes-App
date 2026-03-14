//import the mongoose library
const mongoose = require("mongoose");
//function to connect the database
const connectDB = async () => {
  try {
    //connecting the mongodb using the  mongodb url
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
//export function
module.exports = connectDB;