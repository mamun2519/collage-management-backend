const Teacher = require("../Model/teacherModal");
const cloudinary = require("cloudinary");
exports.newTeacherAdded = async (req, res, next) => {
  try {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.images, {
      folder: "products",
      width: 150,
      crop: "scale",
    });
    const {
      name,
      classs,
      email,
      number,
      educationalQualification,
      collageRole,
      facebooId,
      linkedinId,
    } = req.body;
    console.log(req.body);
    // const teacher = req.body;
    await Teacher.create({
      name,
      classs,
      email,
      number,
      educationalQualification,
      collageRole,
      facebooId,
      linkedinId,
      picture: { public_id: myCloud.public_id, url: myCloud.secure_url },
    });
    res.status(200).json({
      success: true,
      message: "New Teacher Added Successfull",
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getAllTeacher = async (req, res, next) => {
  try{
    const page = parseInt(req.query.page) - 1 || 0;
  const limit = parseInt(req.query.limit) || 5;
  const search = req.query.search || "";
 
  const teacher = await Teacher.find({ name: { $regex: search, $options: "i" }}).skip(page * limit).limit(limit)
  res.json({ success: true, teacher: teacher , page: page+1 , limit});
  }
  catch(e){
    console.log(e);
  }
  
};

// please note case sensative
exports.getDepartmentTeacher = async (req, res, next) => {
  try{
    const { department } = req.query;
    const departmentOfStudent = await Teacher.find({ classs: department });
    if (departmentOfStudent.length == 0) {
      res.json({ success: false, message: "Thare Are No Deparment Teacher" });
    } else {
      res.json({ success: true, student: departmentOfStudent });
    }
  }
  catch(e){
    console.log(e)
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
  try{
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
  }
  catch(e){
    console.log(e);
  }
  
};
