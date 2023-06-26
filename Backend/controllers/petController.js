const Pet = require("../models/Pet");

const mongoose = require("mongoose");

//g t all pets
const getPets = async (req, res) => {
  const user_id = req.user._id;
  const pets = await Pet.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(pets);
};

//get a single pet
const getPet = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such pet" });
  }
  const pet = await Pet.findById(id);
  if (!pet) {
    return res.status(404).json({ error: "no such pet" });
  }
  res.status(200).json(pet);
};
//create new pet

const createPet = async (req, res) => {
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
  //add new pet to DB
  try {
    const user_id = req.user._id;
    const pet = await Pet.create({
      petName,
      petAge,
      petType,
      petBreed,
      user_id,
    });
    res.status(200).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//delete a pet
const deletePet = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid pet id" });
  }

  const pet = await Pet.findOneAndDelete({ _id: id });
  if (!pet) {
    return res.status(404).json({ error: "No such pet to delete" });
  }
  res.status(200).json(pet);
};

//update a pet
const updatePet = async (req, res) => {
  const { id } = req.params;
  const { petName, petAge, petBreed, petType, image } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such pet" });
  }

  try {
    let pet = await Pet.findById(id);
    if (!pet) {
      return res.status(404).json({ error: "No such pet" });
    }

    // Update the pet fields
    pet.petName = petName;
    pet.petAge = petAge;
    pet.petBreed = petBreed;
    pet.petType = petType;

    // Update the image field only if it's provided
    if (image) {
      pet.image = image;
    }

    await pet.save();

    res.status(200).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating pet" });
  }
};
module.exports = {
  createPet,
  getPets,
  getPet,
  deletePet,
  updatePet,
};
