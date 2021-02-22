const User = require("../models/User");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  // validations
  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and must be at least 6 characters or more");
  let user = await User.findOne({ email }).exec();
  if (user) return res.status(400).send("Email is taken");
  // register user
  const newUser = new User(req.body);

  try {
    await newUser.save();
    console.log("USER CREATED", newUser);
    return res.json({ status: "success", newUser });
  } catch (err) {
    console.log("REGISTERED FAIL", err);
    return res.status(400).send("Error");
  }
};
