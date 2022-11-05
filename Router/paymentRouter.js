const express = require("express");

const {   paymentGetWay} = require("../Controller/paymentController");
const router = express.Router()

// ssl commerze 
// router.post("/" , sslPaymentGetWa)
router.post("/create-payment-intent" , paymentGetWay)

module.exports = router