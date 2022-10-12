const express = require("express");
const { createEvent, getAllEvent, getSingaleEvent } = require("../Controller/eventControler");
const router = express.Router();

router.post("/" , createEvent)
router.get("/" , getAllEvent)
router.get("/:id" , getSingaleEvent)

module.exports = router;