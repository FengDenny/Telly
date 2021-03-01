const User = require("../models/User");
const CatchAsync = require("../utility/CatchAsync");
const AppError = require("../utility/AppError");
const queryString = require("query-string");
const Stripe = require("stripe");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const stripe = Stripe(process.env.STRIPE_SECRET);

exports.createConnectStripe = CatchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).exec();
  if (!user.stripe_account_id) {
    const account = await stripe.accounts.create({
      type: "express",
    });
    console.log(account);
    user.stripe_account_id = account.id;
    user.save();
  }
  let accountLink = await stripe.accountLinks.create({
    account: user.stripe_account_id,
    refresh_url: process.env.STRIPE_REDIRECT_URL,
    return_url: process.env.STRIPE_REDIRECT_URL,
    type: "account_onboarding",
  });

  accountLink = Object.assign(accountLink, {
    "stripe_user[email]": user.email || undefined,
  });
  let link = `${accountLink.url}?${queryString.stringify(accountLink)}`;
  console.log(link);
  res.send(link);
});
