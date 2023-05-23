const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchema = new Schema(
  {
    petName: {
      type: String,
      required: true,
    },
    petAge: {
      type: Number,
      required: true,
    },
      petBreed: { type: String, required: true },
    petType: { type: String, required: true },
    user_id: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workoutSchema);
