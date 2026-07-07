const express = require("express");
const cors = require("cors");
const questionRoutes = require("./routes/questionRoutes");

require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect Database
connectDB();

app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/questions", questionRoutes);

app.get("/", (req, res) => {
  res.send("🚀 Placement Preparation Hub Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});