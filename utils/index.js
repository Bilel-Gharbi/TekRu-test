const jwt = require("jsonwebtoken");
const { jwtSecretKey, tokenExpDate } = require("../config");

const signNewToken = async (data) => {
  let newToken = await jwt.sign(data, jwtSecretKey, {
    expiresIn: tokenExpDate,
    issuer: "tekru",
  });

  return newToken;
};

const verifyToken = async (token) => {
  try {
    let result = jwt.verify(token, jwtSecretKey);
    return result;
  } catch (err) {
    return err;
  }
};

class CustomError extends Error {
  constructor(name, filed, type, message) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super();

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = name;
    this.filed = filed;
    this.type = type;
    this.message = message;
  }
}
module.exports.signNewToken = signNewToken;
module.exports.verifyToken = verifyToken;
module.exports.CustomError = CustomError;
