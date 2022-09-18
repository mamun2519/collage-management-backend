const { addedAcademic } = require("../Controller/academicController")

const express = require('express')
const router = express.Router()


router.get("/" , addedAcademic)


module.exports = router