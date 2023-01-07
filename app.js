const express = require("express");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
// middelwar
app.use(express.json());
app.use(fileUpload());
// app.use(express.static("public"));

app.use(cors({
      origin: "*"
}))

// all router model
const studentRouter = require("./Router/studentRouter");
const teacherRouter = require("./Router/teacherRouter");
const routineRouter = require("./Router/routineRouter");
const noticeRouter = require("./Router/noticeRouter");
const paymentRouter = require("./Router/paymentRouter");
const errorHandelling = require("./utilitis/errorHandeling");
const userRouter = require("./Router/userRouter")
const eventRouter = require("./Router/eventRouter")
// all Route ap
app.use("/v1/student", studentRouter);
app.use("/v1/teacher", teacherRouter);
app.use("/v1/routine", routineRouter);
app.use("/v1/notice", noticeRouter);
app.use("/v1/payment", paymentRouter);
app.use("/v1/user", userRouter);
app.use("/v1/event", eventRouter);

// app.use("/", (req, res) => {
//   res.send("hellw worldssssssssssssssss");
// });


app.use(errorHandelling)
module.exports = app;
