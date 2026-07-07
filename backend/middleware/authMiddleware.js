const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Verify JWT Token
const protect = async (req, res, next) => {
  let token;

  // Check Authorization Header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get User (without password)
      req.user = await User.findById(decoded.id).select("-password");

      next();

    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized",
      });
    }
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No Token Provided",
    });
  }
};

// Check Admin Role
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Admin Access Only",
    });
  }
};

module.exports = {
  protect,
  adminOnly,
};