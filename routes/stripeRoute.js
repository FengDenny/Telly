const express = require("express");
const { createConnectStripe } = require("../controllers/paymentControllers");
// MIDDLEWARE
const { requireSignin } = require("../middlewares/index");

const router = express.Router();

router.post("/create-connect-account", requireSignin, createConnectStripe);

module.exports = router;
