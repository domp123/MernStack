require("dotenv").config();

const express = require("express");
const workoutRoutes = require("./routes/workouts");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//connect to db
mongoose
  .connect(process.env.MONGU_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to Db , listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
