const User = require("../models/User");
const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");
const jwt = require("jsonwebtoken");

exports.register = CatchAsync(async (req, res, next) => {
  const { name, email, password } = req.body;
  // validations
  let user = await User.findOne({ email }).exec();
  if (user) {
    return next(new AppError(`${email} is already registered.`, 401));
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

exports.login = CatchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }).select("-__v");

    if (!user) {
      return next(new AppError("Email or password is invalid.", 401));
    }
    // compare password
    user.comparePassword(password, (err, match) => {
      console.log("COMPARE PASSWORD IN LOGIN ERROR", err);
      if (!match || err) {
        return next(new AppError("Email or password is invalid.", 401));
      }
      // GENERATE JWT TOKEN
      let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      const {
        _id,
        name,
        email,
        createdAt,
        updatedAt,
        stripe_account_id,
        stripe_seller,
        stripeSession,
      } = user;
      return res.json({
        status: "success",
        message: `Welcome back, ${name}`,
        token,
        user: {
          _id,
          name,
          email,
          createdAt,
          updatedAt,
          stripe_account_id,
          stripe_seller,
          stripeSession,
        },
      });
    });
  } catch (err) {
    console.log("LOGIN ERROR", err);
    return res.status(400).send("Login failed");
  }
});
