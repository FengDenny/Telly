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

const updateStripePaymentDays = async (accountId) => {
  const account = await stripe.accounts.update(accountId, {
    settings: {
      payouts: {
        schedule: {
          delay_days: 7,
        },
      },
    },
  });
  return account;
};

exports.getAccountStatus = CatchAsync(async (req, res, next) => {
  // console.log("GET ACCOUNT STATUS");
  const user = await User.findById(req.user._id).exec();
  const account = await stripe.accounts.retrieve(user.stripe_account_id);
  // console.log("User Account Retrieve", account);
  // update delay days
  const updatedAccount = await updateStripePaymentDays(account.id);
  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    { stripe_seller: updatedAccount },
    { new: true }
  )
    .select("-password")
    .exec();

  res.json(updatedUser);
});

exports.getAccountBalance = CatchAsync(async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).exec();
    const balance = await stripe.balance.retrieve({
      stripeAccount: user.stripe_account_id,
    });
    res.json(balance);
  } catch (err) {
    console.log(err);
  }
});

exports.payoutSetting = CatchAsync(async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).exec();
    const loginLink = await stripe.accounts.createLoginLink(
      user.stripe_account_id,
      {
        redirect_url: process.env.STRIPE_SETTING_REDIRECT_URL,
      }
    );
    console.log("LOGIN LINK", loginLink);
    res.json(loginLink);
  } catch (err) {
    return next(new AppError(err, 400));
  }
});
