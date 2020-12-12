const express = require("express");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

// base url: /api/profile

/**
 * @route   GET /api/profile
 * @desc    Profile endpoint
 * @access  Private
 */
router.get("/", auth, (req, res) => {
  res.send(req.decodedUser);
});

module.exports = router;
