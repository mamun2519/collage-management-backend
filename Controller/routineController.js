const Routine = require("../Model/routineModal");

// note department reoutine jast one crate so use put
exports.createSchoolRoutine = async (req, res, next) => {
  try {
    const routine = req.body;
    console.log(routine);
    console.log(routine);
    await Routine.create(routine);
    res.status(200).json({
      success: true,
      message: "Routine Publish SuccessFull",
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getAllDeparmentRoutine = async (req, res, next) => {
  try {
    const routine = await Routine.find({});
    res.json({ success: true, routine });
  } catch (e) {
    console.log(e);
  }
};

exports.getDepartmentRoutine = async (req, res, next) => {
  try {
    const { department, classs, session } = req.query;
    const routine = await Routine.findOne({
      $and: [{ classs }, { session }],
    });

    if (!routine) {
      res.status(404).json({
        success: false,
        message: "Please provide valid routine Information",
      });
    } else {
      res.status(200).json({
        success: true,
        routine,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
exports.searchDepartmentRotuine = async (req, res, next) => {
  try {
    const { department } = req.query;
    const departmentOfStudent = await Routine.find({ classs: department });
    if (departmentOfStudent.length == 0) {
      res.json({ success: false, message: "Thare Are No Department Routine" });
    } else {
      res.json({ success: true, student: departmentOfStudent });
    }
  } catch (e) {
    console.log(e);
  }
};

// exports.searchRoutine = async (req , res, next) =>{
//   const {classs , session} = req.query
//   const routine = await Routine.find({ classs:department })
// }

exports.getSingleRoutine = async (req, res, next) => {
  try {
    const id = req.params.id;
    const routine = await Routine.findById(id);
    if (!routine) {
      res.status(404).json({
        success: false,
        message: "Please provide valid routine Information",
      });
    } else {
      res.status(200).json({
        success: true,
        routine,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.routineDelete = async (req, res, next) => {
  try {
    const routine = await Routine.findById(req.params.id);
    if (!routine) {
      res.status(404).json({
        success: false,
        message: "Routine Not Found",
      });
    } else {
      routine.remove();
      res.status(200).json({
        success: true,
        message: "Routine Delete Successfull",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.routineUpdate = async (req, res, next) => {
  try {
    let routine = await Routine.findById(req.params.id);
    if (!routine) {
      res.status(500).json({
        success: false,
        message: "Routine Not Fount",
      });
    } else {
      routine = await Routine.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });

      res.status(200).json({
        success: true,
        message: "Routine Update Successful!",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.createExamRoutine = async (req, res, next) => {
  try {
    const id = req.params.id;
    const routine = await Routine.findById(id);
    console.log(routine);
    if (!routine) {
      res.status(500).json({
        success: false,
        message: "Routine Not found",
      });
    }
    routine.examRoutine.push(req.body);
    await routine.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
      message: "Exam Routine publish successFull",
      routine,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.chackClassRoutine = async (req, res, next) => {
  try {
    const { classs } = req.query;
    console.log(classs);
    const routine = await Routine.findOne({ classs });

    if (!routine) {
      res.status(500).json({
        success: false,
        message: "Routine Not found",
      });
    } else {
      res.json({ success: true, routine });
    }
  } catch (e) {
    console.log(e);
  }
};
