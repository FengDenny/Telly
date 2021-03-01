const expressJWT = require("express-jwt");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
exports.requireSignin = expressJWT({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});
