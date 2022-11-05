const express = require("express");

const {   paymentGetWay} = require("../Controller/paymentController");
const router = express.Router()

// ssl co
// router.post("/" , sslPaymentGetWa)
router.post("/create-payment-intent" , paymentGetWay)

module.exports = router