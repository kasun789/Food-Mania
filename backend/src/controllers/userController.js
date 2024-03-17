const User = require("../models/user");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
/**
 * register user
 * @param {*} req
 * @param {*} res
 * @returns status
 */
const registerUser = async (req, res) => {
  let {
    firstName,
    lastName,
    address,
    gender,
    city,
    email,
    password,
    confirmPassword,
  } = req.body;

  try {
    if (password != confirmPassword) {
      return res.status(400).json({ message: "Password does not match." });
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    password = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      address,
      gender,
      city,
      email,
      password,
    });
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: "Internal server error" });
  }
};

module.exports = {
  registerUser,
};
