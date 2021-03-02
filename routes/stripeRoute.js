const express = require("express");
const {
  createConnectStripe,
  getAccountStatus,
  getAccountBalance,
  payoutSetting,
} = require("../controllers/paymentControllers");
// MIDDLEWARE
const { requireSignin } = require("../middlewares/index");

const router = express.Router();

router.post("/create-connect-account", requireSignin, createConnectStripe);

router.post("/get-account-status", requireSignin, getAccountStatus);

router.post("/get-account-balance", requireSignin, getAccountBalance);

router.post("/payout-setting", requireSignin, payoutSetting);

module.exports = router;
