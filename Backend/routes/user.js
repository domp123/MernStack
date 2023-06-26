const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const User = require("../models/userModel"); // Assuming User model is in "../models/User.js"

// controller functions
const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// Get all users
router.get("/all", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
