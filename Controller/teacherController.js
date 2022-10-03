const Teacher = require("../Model/teacherModal");

exports.newTeacherAdded = async (req, res, next) => {
  const teacher = req.body;
  await Teacher.create(teacher);
  res.status(200).json({
    success: true,
    message: "New Teacher Added Successfull",
  });
};

exports.getAllTeacher = async (req, res, next) => {
  const teacher = await Teacher.find({});
  res.json({ success: true, teacher: teacher });
};

// please note case sensative
exports.getDepartmentTeacher = async (req, res, next) => {
  const { department } = req.query;
  const departmentOfStudent = await Teacher.find({ classs:department });
  if (departmentOfStudent.length == 0) {
    res.json({ success: false, message: "Thare Are No Deparment Teacher" });
  } else {
    res.json({ success: true, student: departmentOfStudent });
  }
};

exports.getSingleTeacher = async (req, res, next) => {
  try {
    const id = req.params.id;
    const teacher = await Teacher.findById(id);
    if (!teacher) {
      res.status(404).json({
        success: false,
        message: "Please provide valid Teacher Information",
      });
    } else {
      res.status(200).json({
        success: true,
        teacher: teacher,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.teacherInformationUpdate = async (req, res, next) => {
  try {
    let teacher = await Teacher.findById(req.params.id);
    if (!teacher) {
      res.status(500).json({
        success: false,
        message: "Teacher Not Fount",
      });
    } else {
      teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });

      res.status(200).json({
        success: true,
        teacher,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.teacherDelete = async (req, res, next) => {
  const teacher = await Teacher.findById(req.params.id);
  if (!teacher) {
    res.status(404).json({
      success: false,
      message: "Teacher Data Not Found",
    });
  } else {
    teacher.remove();
    res.status(200).json({
      success: true,
      message: "Teacher data Delete Successfull",
    });
  }
};
