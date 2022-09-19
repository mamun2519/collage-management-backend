const express = require("express");
const {
  createSchoolRoutine,
  getAllDeparmentRoutine,
  getDepartmentRoutine,
  getSingleRoutine,
  routineDelete,
  routineUpdate,
} = require("../Controller/routineController");
const router = express.Router();

router.post("/classRoutine", createSchoolRoutine);
router.get("/classRoutine", getAllDeparmentRoutine);
router.get("/department", getDepartmentRoutine);
router.delete("/department/:id", routineDelete);
router.put("/department/:id", routineUpdate);
router.get("/singleRoutine/:id", getSingleRoutine);
module.exports = router;
