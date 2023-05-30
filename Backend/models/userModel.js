const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  pets: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Pets",
    },
  ],
});

// static signup method
userSchema.statics.signup = async function (
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
  Address,
  postCode,
  pets
) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!firstName || !lastName) {
    throw Error("Please Enter your first name and last name");
  }
  if (!phoneNumber) {
    throw Error("Please Enter your Phone Number");
  }
  if (!Address) {
    throw Error("Please Enter your Address");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    Address,
    postCode,
    pets,

    password: hash,
  });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);
