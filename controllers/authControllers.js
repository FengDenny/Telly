const User = require("../models/User");
const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");

exports.register = CatchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  // validations
  let user = await User.findOne({ email }).exec();
  if (user) {
    return next(
      new AppError(`${email} is already registered. Please login`, 401)
    );
  }
  // register user
  const newUser = new User(req.body);

  try {
    await newUser.save();
    console.log("USER CREATED", newUser);
    return res.json({
      status: "success",
      message: `${email} has signed up successfully! Please login. `,
      user: newUser,
    });
  } catch (err) {
    console.log("REGISTERED FAIL", err);
    return res.status(400).send("Error");
  }
});
