var jwt = require("jsonwebtoken");

 
const { errorRespond } = require("../middleware/respondHelper");

const authMiddleware = (req, res, next) => {
  //TODO1: get Token
  const token = req.header("token");

  //TODO2: Return error if token doesn't exist
  if (!token) {
    return errorRespond(res, 421, "No Token!");
    //  return res.status(401).json({ msg: "No Token" });
  }

  //TODO3: Verify token
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
    console.log("decodedToken", decodedToken);
    if (err) {
      return errorRespond(res, 422, err);
      // res.status(401).json({ msg: "Invalid Token" });
    } else {
      req.decodedUser = decodedToken.userData;
      next();
    }
  });
};

module.exports = authMiddleware;
