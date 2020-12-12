const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // TODO1: Validate the fields

  const userData = await User.findOne({ email });

  if (userData) {
    return res
      .status(400)
      .json({ errors: [{ message: "User already exists!!" }] });
  }

  const salt = await bcrypt.genSalt(10);

  const newPassword = await bcrypt.hash(password, salt);

  const user = new User({
    firstName,
    lastName,
    email,
    password: newPassword,
  });

  await user.save();

  //TODO: Error handling for saving
  res.send("Register Completed.");
};

exports.authLogin = (req, res) => {
  // TODO: Auth.
  // TODO: Login func.
  res.send("Login Completed");
};
