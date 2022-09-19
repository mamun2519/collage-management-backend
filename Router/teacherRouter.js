const express = require("express");
const {
  newTeacherAdded,
  getAllTeacher,
  getDepartmentTeacher,
  getSingleTeacher,
  teacherInformationUpdate,
  teacherDelete,
} = require("../Controller/teacherController");
const router = express.Router();

router.post("/add", newTeacherAdded);
router.get("/all", getAllTeacher);
router.get("/department", getDepartmentTeacher);
router.get("/department/:id", getSingleTeacher);
router.put("/department/:id", teacherInformationUpdate);
router.delete("/department/:id", teacherDelete);

module.exports = router;
