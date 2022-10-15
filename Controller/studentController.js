const Student = require("../Model/studentModal");
const cloudinary = require("cloudinary");

exports.studentAdmission = async (req, res, next) => {
  try {
    const { studentInfo, admissionInfo, email } = req.body;
    console.log(admissionInfo);
    const {
      admissionType,
      board,
      department,
      classs,
      session,
      passingYear,
      passingAcademy,
      admissionFee,
    } = admissionInfo.data;
    const {
      name,
      address,
      birthday,
      country,
      gender,
      gerdianName,
      number,
      village,
      age,
    } = studentInfo;
    console.log(studentInfo);
    // const myCloud = await cloudinary.v2.uploader.upload(images, {
    //   folder: "avatars",
    //   width: 150,
    //   crop: "scale",
    // });
    const admission = {
      admissionType,
      board,
      department,
      classs,
      session,
      passingYear,
      passingAcademy,
      admissionFee,
      subject: admissionInfo.subject,
      name,
      address,
      birthday,
      country,
      gender,
      gerdianName,
      number,
      village,
      age,
      email,
      studentPhoto: {
        public_id: "xxx",
        url: "xxx",
      },
    };

    await Student.create(admission);
    res.status(200).json({
      success: true,
      message: "Admission Successfull",
    });
  } catch (e) {
    console.log(e);
  }
};

exports.chackStudentAdmission = async (req, res, next) => {
  try {
    const email = req.query.email;
    const student = await Student.findOne({ email });
    if (!student) {
      res.json({ success: false, message: "Student Not fount" });
    } else {
      res.json({ success: true, student: student });
    }
  } catch (e) {
    console.log(e);
  }
};
exports.getAllStudnt = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    console.log(limit);
    const student = await Student.find({
      $and: [
        {},
        { verifay: false },
        { name: { $regex: search, $options: "i" } },
      ],
    })
      .skip(page * limit)
      .limit(limit);
    res.json({ success: true, student: student, page: page + 1, limit });
  } catch (e) {
    console.log(e);
  }
};

exports.getSingleStundetInfo = async (req, res, next) => {
  try {
    const id = req.params.id;
    const student = await Student.findById(id);
    if (!student) {
      res.status(404).json({
        success: false,
        message: "Please provide valid student Information",
      });
    } else {
      res.status(200).json({
        success: true,
        student: student,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

// please not font and department case lowarcase set
exports.getDepartmentStudent = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    const { department } = req.query;
    console.log(department);
    const departmentOfStudent = await Student.find({
      $and: [
        { classs: department },
        { name: { $regex: search, $options: "i" } },
      ],
    })
      .sort({ roll: 1 })
      .skip(page * limit)
      .limit(limit);
    // const response = {
    //   page: page + 1,
    //   limit,
    //   notice,
    // };

    if (departmentOfStudent.length == 0) {
      res.json({ success: false, message: "Thare Are No Deparment Student" });
    } else {
      res.json({
        success: true,
        student: departmentOfStudent,
        page: page + 1,
        limit,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.searchStudentInformation = async (req, res, next) => {
  try {
    const { educationLevel, department, className, session, classRoll } =
      req.query;

    const student = await Student.find({
      $and: [
        { educationLevel: educationLevel },
        { department },
        { className },
        { session },
        { classRoll },
      ],
    });

    if (student.length == 0) {
      res.status(404).json({
        success: false,
        message: "Please provide valid student Information",
      });
    } else {
      res.status(200).json({
        success: true,
        message: student,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.StudentDelete = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      res.status(404).json({
        success: false,
        message: "Student Not Found",
      });
    } else {
      student.remove();
      res.status(200).json({
        success: true,
        message: "Student Delete Successfull",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.studentInfoUpdate = async (req, res, next) => {
  try {
    let student = await Student.findById(req.params.id);
    console.log(req.body);
    if (!student) {
      res.status(500).json({
        success: false,
        message: "Student Not Fount",
      });
    } else {
      student = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });

      res.status(200).json({
        success: true,
        student,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.addedStudentResult = async (req, res, next) => {
  try {
    const { resultType, result, Gpa } = req.body;
    console.log(req.body);
    let student = await Student.findById(req.params.id);

    if (!student) {
      res.status(500).json({
        success: false,
        message: "Student Not Fount",
      });
    } else {
      const results = {
        resultType,
        result,
        Gpa,
      };
      student.result.push(results);
      await student.save({ validateBeforeSave: false });
      res.status(200).json({
        success: true,
        message: "Student Result Publish Successfull",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.getStudentResult = async (req, res, next) => {
  try {
    const { classs, session, roll, examName } = req.query;

    let student = await Student.findOne({
      $and: [{ classs }, { session }, { roll }],
    });

    console.log(student);
    if (!student) {
      res.status(404).json({
        success: false,
        message: "Please provide valid student Information",
      });
    } else {
      const studentResult = student.result.filter(
        (exam) => examName == exam.resultType
      );

      console.log(studentResult[0]);
      if (studentResult.length == 0) {
        res.status(404).json({
          success: false,
          message: "Please provide valid student Information",
        });
      } else {
        res.status(200).json({
          success: true,
          // student
          result: studentResult,
          studentInfo: student,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
};

exports.resultUpdate = async (req, res, next) => {
  try {
    const id = req.params.id;
    const {
      educationLevel,
      department,
      className,
      session,
      classRoll,
      examName,
    } = req.query;
    const { subjectCode, subjectName, minMarks, maxMark, grade } = req.body;

    let student = await Student.findOne({
      $and: [
        { educationLevel: educationLevel },
        { department },
        { className },
        { session },
        { classRoll },
      ],
    });

    if (!student) {
      res.status(404).json({
        success: false,
        message: "Please provide valid student Information",
      });
    } else {
      const studentResult = student.result.filter(
        (exam) => examName == exam.examName
      );

      if (studentResult.length == 0) {
        res.status(404).json({
          success: false,
          message: "Please provide valid student Information",
        });
      }
      const s = student.result.filter((exam) => exam._id == id);
      console.log((s[0].minMarks = 5));
      s[0].subjectCode = subjectCode;
      s[0].subjectName = subjectName;
      s[0].minMarks = minMarks;
      s[0].maxMark = maxMark;
      s[0].grade = grade;
      await student.save({ validateBeforeSave: false });

      res.status(200).json({
        success: true,
        // student
        result: studentResult,
        studentInfo: student,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
