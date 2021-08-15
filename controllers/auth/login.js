const jwt = require("jsonwebtoken");
const envJson = require("dotenv").config();

exports.login = async (req,res) => {
    // const token = jwt.sign(
    //     {
    //       email: ""
    //     },
    //     `${envJson.parsed.JWT_SECRET}`,
    //     {
    //       expiresIn: `${envJson.parsed.JWT_EXPIRES_IN}`,
    //     }
    //   );
    //   res.send(token);
}
