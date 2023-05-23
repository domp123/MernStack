const express = require("express");
const Workout = require("../models/WorkoutModel");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
// require auth for all routes
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
router.use(requireAuth);

//Get all workouts
router.get("/", getWorkouts);

//get a single workout
router.get("/:id", getWorkout);

// post a workout
router.post("/", createWorkout);
//delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
