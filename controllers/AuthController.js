const User = require("../models/UserModel");

exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // TODO1: Validate the fields
  // TODO2: check already registered
  // TODO3: crpyt password
  // TODO4: save the user to DB

  const user = new User({
    firstName,
    lastName,
    email,
    password, //crypted password
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
