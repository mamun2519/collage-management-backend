
const express = require('express')
const { studentAdmission, getSingleStundetInfo, getAllStudnt, searchStudentInformation, StudentDelete, studentInfoUpdate, addedStudentResult, getStudentResult } = require('../Controller/studentController')
const router = express.Router()


router.post("/admission" , studentAdmission)
router.get("/result", getStudentResult) 
router.get("/admission/:id" , getSingleStundetInfo)
router.get("/admission" , getAllStudnt)
router.get("/search" , searchStudentInformation)
router.delete("/admission/:id" , StudentDelete)
router.put("/admission/:id" , studentInfoUpdate)
router.post("/admission/result/:id" , addedStudentResult)



module.exports = router