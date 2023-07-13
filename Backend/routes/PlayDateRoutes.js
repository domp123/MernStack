// playdate.js (API routes)
const express = require("express");
const router = express.Router();
const PlayDate = require("../models/PlayDate");
const requireAuth = require("../middleware/requireAuth");

// GET all playdates for a user
router.get("/", requireAuth, async (req, res) => {
  try {
    const playdates = await PlayDate.find({
      $or: [{ sender: req.user._id }, { recipient: req.user._id }],
    }).populate("sender recipient", "firstName lastName");

    res.json(playdates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST a new playdate
router.post("/", requireAuth, async (req, res) => {
  try {
    const { recipient, message } = req.body;

    if (!recipient) {
      return res.status(400).json({ message: "Recipient ID is required" });
    }

    const newPlaydate = new PlayDate({
      sender: req.user._id,
      recipient: recipient,
      message: message,
    });

    await newPlaydate.save();

    res.json(newPlaydate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// PATCH an existing playdate (e.g. to accept/reject it)
router.patch("/:id", requireAuth, async (req, res) => {
  try {
    const { status } = req.body;

    const playdate = await PlayDate.findById(req.params.id);

    if (!playdate) {
      return res.status(404).json({ message: "Playdate not found" });
    }

    if (playdate.recipient.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    playdate.status = status; // Set the status to the value from the request body

    const updatedPlaydate = await playdate.save(); // Save the updated playdate

    res.json(updatedPlaydate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
