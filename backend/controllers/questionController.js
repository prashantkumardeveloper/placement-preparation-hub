const Question = require("../models/Question");

// ======================
// Get All Questions
// ======================
const getQuestions = async (req, res) => {
  try {
    const filter = {};

    if (req.query.category) {
      filter.category = req.query.category;
    }

    if (req.query.topic) {
      filter.topic = req.query.topic;
    }

    if (req.query.company) {
      filter.company = req.query.company;
    }

    if (req.query.difficulty) {
      filter.difficulty = req.query.difficulty;
    }

    const questions = await Question.find(filter);

    res.status(200).json({
      success: true,
      count: questions.length,
      questions,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================
// Dashboard Stats
// ======================
const getStats = async (req, res) => {
  try {

    const dsa = await Question.countDocuments({
      category: "DSA",
    });

    const aptitude = await Question.countDocuments({
      category: "Aptitude",
    });

    const csFundamentals = await Question.countDocuments({
      category: "CS Fundamentals",
    });

    const companies = await Question.countDocuments({
      company: { $exists: true, $ne: "" },
    });

    res.status(200).json({
      success: true,
      stats: {
        dsa,
        aptitude,
        csFundamentals,
        companies,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================
// Add Question
// ======================
const addQuestion = async (req, res) => {
  try {

    const question = await Question.create(req.body);

    res.status(201).json({
      success: true,
      message: "Question Added Successfully",
      question,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================
// Update Question
// ======================
const updateQuestion = async (req, res) => {
  try {

    const question = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Question Updated Successfully",
      question,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ======================
// Delete Question
// ======================
const deleteQuestion = async (req, res) => {
  try {

    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    await question.deleteOne();

    res.status(200).json({
      success: true,
      message: "Question Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getQuestions,
  getStats,
  addQuestion,
  updateQuestion,
  deleteQuestion,
};