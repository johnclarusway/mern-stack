const express = require("express");
const { check } = require("express-validator");
const AuthController = require("../controllers/AuthController");
const validations = require('../middleware/validationMiddleware');

const router = express.Router();

// routes for /api/auth

/**
 * @route   POST /api/auth/register
 * @desc    Register endpoint
 * @access  Public
 */
router.post("/register", validations.registerValidation, AuthController.authRegister);

/**
 * @route   POST /api/auth/login
 * @desc    Login endpoint
 * @access  Public
 */
router.post("/login", validations.loginValidation, AuthController.authLogin);

module.exports = router; 