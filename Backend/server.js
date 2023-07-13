require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const petRoutes = require("./routes/petRoutes");
const userRoutes = require("./routes/user");
const playDateRoutes = require("./routes/PlayDateRoutes");
const requireAuth = require("./middleware/requireAuth");

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/pets", petRoutes);
app.use("/api/user", userRoutes);
app.use("/images", express.static(path.join(__dirname, "uploads")));
app.use("/api/playdates", requireAuth, playDateRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to MongoDB, listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
