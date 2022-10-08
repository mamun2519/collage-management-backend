const express = require("express");
const { createEvent, getAllEvent } = require("../Controller/eventControler");
const router = express.Router();

router.post("/" , createEvent)
router.get("/" , getAllEvent)

module.exports = router;