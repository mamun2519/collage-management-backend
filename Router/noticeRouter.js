const express = require('express')
const { createNotice } = require('../Controller/noticeController')
const router = express.Router()

router.post("/" , createNotice)

module.exports = router