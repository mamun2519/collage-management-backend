const express = require("express");
const {
  createSchoolRoutine,
  getAllDeparmentRoutine,
  getDepartmentRoutine,
  getSingleRoutine,
  routineDelete,
  routineUpdate,
  createExamRoutine,
  searchDepartmentRotuine,
  chackClassRoutine,
} = require("../Controller/routineController");
const router = express.Router();

router.post("/classRoutine", createSchoolRoutine);
router.get("/classRoutine", getAllDeparmentRoutine);
router.get("/department", getDepartmentRoutine);
router.get("/departments", searchDepartmentRotuine);
router.delete("/department/:id", routineDelete);
router.put("/department/:id", routineUpdate);
router.get("/singleRoutine/:id", getSingleRoutine);
router.post("/examRoutine/:id", createExamRoutine);
router.get("/chackRoutine", chackClassRoutine);
module.exports = router;
