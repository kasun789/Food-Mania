const User = require("../models/user")
/**
 * register user
 * @param {*} req
 * @param {*} res
 * @returns status
 */
const registerUser = async (req, res) => {
  const {
    firstName,
    lastName,
    address,
    gender,
    city,
    email,
    password,
    conformPassword,
  } = req.body;

  try {
    if (password !== conformPassword) {
      return res.status(400).json({ message: "Password does not match." });
    }
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
