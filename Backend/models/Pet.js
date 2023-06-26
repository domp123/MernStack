const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const petSchema = new Schema({
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
  owner: { type: mongoose.Types.ObjectId, red: "user" },
  image: {
    type: String, // or any other suitable field type for storing the file location
  },
});
module.exports = mongoose.model("Pet", petSchema);
