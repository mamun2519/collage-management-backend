const Student = require("../Model/studentModal");
const cloudinary = require("cloudinary");

exports.studentAdmission = async (req, res, next) => {
  const studentInfo = req.body;
  await Student.create(studentInfo);
  res.status(200).json({
    success: true,
    message: "Admission Successfull",
  });
};

exports.getAllStudnt = async (req, res, next) => {
  const student = await Student.find({});
  res.json({ success: true, message: student });
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
exports.getDepartmentStudent = async (req , res , next) =>{
  const {department} = req.query
  const departmentOfStudent = await Student.find({department})
  console.log(departmentOfStudent , department);
  if(departmentOfStudent.length == 0){
    res.json({success:false , message: "Thare Are No Deparment Student"})

  }
  else{
  res.json({success:true , student: departmentOfStudent})
  }
}

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
};

exports.studentInfoUpdate = async (req, res, next) => {
  try {
    let student = await Student.findById(req.params.id);
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
  const { subjectCode, subjectName, minMarks, maxMark, grade, examName } =
    req.body;
  let student = await Student.findById(req.params.id);

  if (!student) {
    res.status(500).json({
      success: false,
      message: "Student Not Fount",
    });
  } else {
    const result = {
      subjectCode,
      subjectName,
      minMarks,
      maxMark,
      grade,
      examName,
    };
    student.result.push(result);
    await student.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
      message: "Student Result Publish Successfull",
    });
  }
};

exports.getStudentResult = async (req, res, next) => {
  try {
    const {
      educationLevel,
      department,
      className,
      session,
      classRoll,
      examName,
    } = req.query;

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

exports.resultUpdate = async (req , res , next) =>{
  try {
    const id = req.params.id
    const {
      educationLevel,
      department,
      className,
      session,
      classRoll,
      examName,
    } = req.body;

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
      const s = student.result.filter((exam) => exam._id == id)
      console.log(s[0].minMarks = 5);
      const news = s[0].minMarks = 5
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

}
