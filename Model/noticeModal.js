const mongoose = require("mongoose");

const noticeShema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  

});

const noticeModel = new mongoose.model("Notice", noticeShema);

module.exports = noticeModel;