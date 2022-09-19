const mongoose = require("mongoose");

const teacherShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  educationalQualification: {
    type: String,
    required: true,
  },
  picture: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  collageRole: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    default: "Teacher",
  },
  facebooId: {
    type: String,
    default: "no",
  },
  linkedinId: {
    type: String,
    default: "no",
  },
  joinDate: {
    type: String,
    default: Date.now,
  },
});

const teacherModel = new mongoose.model("Teacher", teacherShema);

module.exports = teacherModel;
