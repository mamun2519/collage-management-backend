const express = require("express");
const {
  createNotice,
  getAllNotice,
  getDepartmentNotice,
  getSingaleNotice,
  noticeDelete,
  updateNotice,
} = require("../Controller/noticeController");
const router = express.Router();

router.post("/", createNotice);
router.get("/", getAllNotice);
router.get("/department", getDepartmentNotice);
router.get("/:id", getSingaleNotice);
router.delete("/:id", noticeDelete);
router.put("/:id", updateNotice);

module.exports = router;
