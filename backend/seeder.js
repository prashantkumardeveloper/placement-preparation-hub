require("dotenv").config();

const mongoose = require("mongoose");

const Question = require("./models/Question");
const questions = require("./data/questions");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    // Delete old questions
    await Question.deleteMany();

    // Insert new questions
    console.log(questions);
    await Question.insertMany(questions);
    

    console.log("✅ Questions Imported Successfully");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB().then(importData);