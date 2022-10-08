const mongoose = require("mongoose");

const studentShema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  // },
  // department: {
  //   type: String,
  //   required: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  // },
  // dateOfBirth: {
  //   type: String,
  //   required: true,
  // },
  // educationLevel: {
  //   type: String,
  //   required: true,
  // },
  // className: {
  //   type: String,
  //   required: true,
  // },
  // session: {
  //   type: String,
  //   required: true,
  // },
  // classRoll: {
  //   type: Number,
  //   required: true,
  // },
  // sscRoll: {
  //   type: Number,
  //   required: true,
  // },
  // board: {
  //   type: String,
  //   required: true,
  // },
  // admissionType: {
  //   type: String,
  //   required: true,
  // },
  // joinDate: {
  //   type: String,
  //   default: Date.now,
  // },
  // picture: {
  //   public_id: {
  //     type: String,
  //     required: true,
  //   },
  //   url: {
  //     type: String,
  //     required: true,
  //   },
  // },
  payment: {
    type: Boolean,
    default: true,
  },
  roll: {
    type: String,
    default: "Pending",
  },
  studentPhoto: {
    public_id: {
      type: String,
      default: "xx",
    },
    url: {
      type: String,
      default: "Xx",
    },
  },
  verifay: {
    type: Boolean,
    default: false,
  },
  email: {
    type: String,
    required: true,
  },

  admissionFee: {
    type: String,
    required: true,
  },
  admissionType: {
    type: String,
    required: true,
  },
  board: {
    type: String,
    required: true,
  },
  classs: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
  },
  passingAcademy: {
    type: String,
    required: true,
  },
  passingYear: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
  subject: [],
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  // email: {
  //   type: String,
  //   required: true,
  // },
  gender: {
    type: String,
    required: true,
  },
  gerdianName: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
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
  joinDate: {
    type: String,
    default: Date.now,
  },
});

const studentModel = new mongoose.model("Student", studentShema);

module.exports = studentModel;
