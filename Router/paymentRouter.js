const express = require("express");

const { sslPaymentGetWay,  paymentGetWay} = require("../Controller/paymentController");
const router = express.Router()

// ssl commerze 
router.post("/" , sslPaymentGetWay)
router.post("/create-payment-intent" , paymentGetWay)

module.exports = router