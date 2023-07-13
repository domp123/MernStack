const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Pet = require("../models/Pet");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.post("/:id/image", upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { file } = req;

  const filePath = path.join(__dirname, "../", file.path);
  const fileName = `${id}_${file.originalname}`;

  const newFilePath = path.join(__dirname, "../uploads", fileName);
  fs.renameSync(filePath, newFilePath);

  try {
    const pet = await Pet.findById(id);
    if (!pet) {
      return res.status(404).json({ success: false, message: "Pet not found" });
    }

    pet.image = newFilePath;
    await pet.save();

    res
      .status(200)
      .json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error uploading image" });
  }
});

const {
  createPet,
  getPet,
  getPets,
  deletePet,
  updatePet,
} = require("../controllers/petController");

// Require authentication for all routes
const requireAuth = require("../middleware/requireAuth");
router.use(requireAuth);

// Get all pets
router.get("/", getPets);

// Get a single pet
router.use("/images", express.static(path.join(__dirname, "../uploads")));
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await Pet.findById(id);
    if (!pet) {
      return res.status(404).json({ success: false, message: "Pet not found" });
    }

    const imageUrl = `/images/${path.basename(pet.image)}`;
    res.status(200).json({ pet, imageUrl }); // Return pet and imageUrl as JSON data
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error retrieving pet" });
  }
});

// Post a pet
router.post("/", createPet);

// Delete a pet
router.delete("/:id", deletePet);

// Update a pet
router.patch("/:id", updatePet);

module.exports = router;

module.exports = router;
