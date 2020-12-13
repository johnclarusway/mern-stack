const express = require("express");


const router = express.Router();

const AuthController = require("../controllers/AuthController");

const AuthValidator = require("../middleware/AuthValidator");
// routes for /api/auth
 
/**
 * @route   POST /api/auth/register
 * @desc    Register endpoint
 * @access  Public
 */
router.post(
  "/register",
  AuthValidator.emailValidation, AuthValidator.passwordValidation,
  AuthController.authRegister
);

/**
 * @route   POST /api/auth/login
 * @desc    Login endpoint
 * @access  Public
 */
router.post(
  "/login",
  AuthValidator.emailValidation, AuthValidator.passwordValidation,
  AuthController.authLogin
);

 

module.exports = router; 