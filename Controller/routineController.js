const Routine = require("../Model/routineModal");

// note department reoutine jast one crate so use put
exports.createSchoolRoutine = async (req, res, next) => {
  const routine = req.body;
  await Routine.create(routine);
  res.status(200).json({
    success: true,
    message: "Routine Publish SuccessFull",
  });
};

exports.getAllDeparmentRoutine = async (req, res, next) => {
  const routine = await Routine.find({});
  res.json({ success: true, routine });
};

exports.getDepartmentRoutine = async (req, res, next) => {
  try {
    const { department, classs, session } = req.query;
    const routine = await Routine.find({
      $and: [{ department }, { classs }, { session }],
    });

    if (routine.length == 0) {
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
};

exports.routineUpdate = async (req, res, next) => {
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
      routine,
    });
  }
};

exports.createExamRoutine = async (req, res, next) => {
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
};
