const express = require("express");
const {
  createUser,
  getAllUser,
  getSinleUser,
  deleteUser,
  createAdmin,
  cheackAdmin,
} = require("../Controller/userController");
const verifayToken = require("../utilitis/verifayToken");

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getSinleUser);
router.delete("/:id", deleteUser);
router.put("/admin/:email", verifayToken, createAdmin);
router.get("/chackAdmin/:email", verifayToken, cheackAdmin);

module.exports = router;
