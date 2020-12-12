const { check } = require("express-validator");
/**
 * @desc Check whether the password is valid
 */
exports.passwordValidation = check(
  "password",
  "Please enter a password with 6 and more chars"
).isLength({
  min: 6,
});

/**
 * @desc Check whether the email is valid
 */
exports.emailValidation = check(
  "email",
  "Please enter a valid email!"
).isEmail();
