const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose");

//g t all workouts
const getWorkouts = async (req, res) => {
  const user_id = req.user._id;
  const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

//get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};
//create new workout

const createWorkout = async (req, res) => {
  const { petName, petAge, petType, petBreed } = req.body;

  let emptyFields = [];
  if (!petName) {
    emptyFields.push("Pet Name");
  }
  if (!petAge) {
    emptyFields.push("Pet Age");
  }
  if (!petType) {
    emptyFields.push("Pet Type");
  }
  if (!petBreed) {
    emptyFields.push("Pet Breed");
  }
  if (emptyFields.length > 0) {
    return res
      .status(404)
      .json({ error: "Please Fill in the required fields", emptyFields });
  }
  //add new workout to DB
  try {
    const user_id = req.user._id;
    const workout = await Workout.create({
      petName,
      petAge,
      petType,
      petBreed,
      user_id,
    });
    res.status(200).json(workout);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};
//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(200).json(workout);
  }

  const workout = await Workout.findOneAndDelete({ _id: id });
  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};

//update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }
  res.status(200).json(workout);
};
module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
