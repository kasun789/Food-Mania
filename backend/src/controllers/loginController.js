const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const loginUser = async (req, res) => {
  let { email, password } = req.body;
  try{
    const user = await User.findOne({email});

    if(!user){
      return res.status(401).json({"error" : "Invalid user name or password"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
      return res.status(402).json({"error" : "Invalid user name or password"});
    }

    const secreteKey = crypto.randomBytes(32).toString('hex');

    const token = jwt.sign({userId : user._id},secreteKey, {expiresIn: '15m'});
    res.json({token});
  }
  catch(err){
    console.log(err);
    return res.status(500).json({"error" : "Internal server error"})
  }
};

module.exports = {
  loginUser,
};



