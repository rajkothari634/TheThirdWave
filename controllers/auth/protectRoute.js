const { promisify } = require("util");
const envJson = require("dotenv").config();
const jwt = require("jsonwebtoken");
exports.protect = async (req, res, next) => {
  let errorCode = 400;
  try {
    if (req.url == "/login") {
      next();
      return;
    }
    var token;
    //Authorization  header  checking
    if (req.headers.authorization && req.headers.authorization.length > 0) {
      token = req.headers.authorization;
    } else {
      errorCode = 401;
      throw Error("Login is required");
    }
    const decoded = await promisify(jwt.verify)(
      token,
      `${envJson.parsed.JWT_SECRET}`
    );
    req.loggedUserEmail = decoded.email;
    const user = {
        email : "rajkothari634@gmail.com",
    }
    if(req.loggedUserEmail !== user.email){
        next();
        return;
    }
    errorCode = 402;
    throw Error("User Not Permitted");
  } catch (err) {
    res.status(errorCode).json({
      errorMessage: err.message,
    });
  }
};
