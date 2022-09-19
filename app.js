const express = require("express");
const app = express();
const cors = require("cors");

// middelwar

app.use(express.json());
// app.use(fileUpload());
app.use(express.static("public"));
app.use(cors());

// all router model
const studentRouter = require("./Router/studentRouter");
const teacherRouter = require("./Router/teacherRouter");
const routineRouter = require("./Router/routineRouter");
const noticeRouter = require('./Router/noticeRouter')
// all Route api
app.use("/v1/student", studentRouter);
app.use("/v1/teacher", teacherRouter);
app.use("/v1/routine", routineRouter);
app.use("/v1/notice", noticeRouter);

app.use("/", (req, res) => {
  res.send("hellw world");
});

module.exports = app;
