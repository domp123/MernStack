const mongoose = require("mongoose");

const playDateRequestSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  recipient: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  message: {
    type: String,
    default: "hello",
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PlayDate = mongoose.model("playDate", playDateRequestSchema);

module.exports = PlayDate;
