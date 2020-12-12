const express = require("express");

const router = express.Router();

// base url: /api/profile

/**
 * @route   GET /api/profile
 * @desc    Profile endpoint
 * @access  Private
 */
router.get("/", (req, res) => {
  res.send("PRIVATE PROFILE PAGE");
});


module.exports = router;
