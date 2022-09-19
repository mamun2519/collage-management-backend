const mongoose = require("mongoose");

const studentShema = new mongoose.Schema({
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
  dateOfBirth: {
    type: String,
    required: true,
  },
  educationLevel: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
  classRoll: {
    type: Number,
    required: true,
  },
  sscRoll: {
    type: Number,
    required: true,
  },
  board: {
    type: String,
    required: true,
  },
  admissionType: {
    type: String,
    required: true,
  },
  joinDate: {
    type: String,
    default: Date.now,
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
  result: [
    {
      examName: {
        type: String,
        required: true,
      },
      subjectCode: {
        type: String,
        required: true,
      },
      subjectName: {
        type: String,
        required: true,
      },
      minMarks: {
        type: Number,
        required: true,
      },
      maxMark: {
        type: Number,
        required: true,
      },
      grade: {
        type: String,
        required: true,
      },
    },
  ],
});

const studentModel = new mongoose.model("Student", studentShema);

module.exports = studentModel;
