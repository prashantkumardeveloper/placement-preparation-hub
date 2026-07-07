const express = require("express");

const {
  getQuestions,
  addQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Public Route
router.get("/", getQuestions);

// Admin Routes
router.post("/", protect, adminOnly, addQuestion);
router.put("/:id", protect, adminOnly, updateQuestion);
router.delete("/:id", protect, adminOnly, deleteQuestion);

module.exports = router;