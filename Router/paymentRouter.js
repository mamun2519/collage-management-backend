const express = require("express");

const { sslPaymentGetWay} = require("../Controller/paymentController");
const router = express.Router()

// ssl commerze 
router.get("/" , sslPaymentGetWay)

module.exports = router