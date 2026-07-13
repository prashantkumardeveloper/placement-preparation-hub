const express = require("express");

const {
  getQuestions,
  getStats,
  addQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

// ======================
// Public Routes
// ======================

// Get Dashboard Stats
router.get("/stats", getStats);

// Get All Questions
router.get("/", getQuestions);

// ======================
// Admin Routes
// ======================

// Add Question
router.post("/", protect, adminOnly, addQuestion);

// Update Question
router.put("/:id", protect, adminOnly, updateQuestion);

// Delete Question
router.delete("/:id", protect, adminOnly, deleteQuestion);

module.exports = router;