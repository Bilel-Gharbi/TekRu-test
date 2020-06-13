const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { jwtSecretKey } = require("../config");
const { CustomError } = require("../utils");

const verifyToken = async (req, res, next) => {
  if (req.headers["x-auth-token"]) {
    try {
      await promisify(jwt.verify)(req.headers["x-auth-token"], jwtSecretKey);
      let decodedToken = await jwt.decode(req.headers["x-auth-token"]);
      //set user id in the req object
      req.userId = decodedToken.userId;
    } catch (err) {
      res.status(401).json({ status: "fail", err: err.message });
    }
  } else {
    res.status(401).json({
      status: "fail",
      err: new CustomError("token", "", "", "no token"),
    });
  }
  next();
};

module.exports = { verifyToken };
