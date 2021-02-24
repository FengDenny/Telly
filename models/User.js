const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
    },
    email: {
      type: String,
      trim: true,
      required: "Email is required",
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },

    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  let user = this;
  //hash password iff user changed password or registering first time
  if (user.isModified("password")) {
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        console.log("BCRYPT HASH ERR", err);
        return next(err);
      }
      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      console.log("COMPARE PASSWORD ERROR", err);
      return next(err, false);
    }
    // no err, get null
    console.log("MATCH PASSWORD", match);
    //true
    return next(null, match);
  });
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
