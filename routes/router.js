const express = require("express");

const router = express.Router();
const AuthRouter = require("./AuthRouter");

// Only /api endpoint

/**
 * @route /api/auth
 * @desc Route for Auth
 */
router.use("/auth", AuthRouter);

module.exports = router;
