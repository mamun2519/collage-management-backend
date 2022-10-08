const mongoose = require("mongoose");

const teacherShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  classs: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
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
