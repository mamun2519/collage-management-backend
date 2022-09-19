const Notice = require("../Model/noticeModal");

exports.createNotice = async (req, res, next) => {
  const notice = req.body;
  await Notice.create(notice);
  res.status(200).json({
    success: true,
    message: "Notice Publish SuccessFull",
  });
};

exports.getAllNotice = async (req, res, next) => {
  const notice = await Notice.find({});
  res.json({ success: true, notice });
};

exports.getDepartmentNotice = async (req, res, next) => {
  try {
    const { department } = req.query;
    console.log(department);
    const notice = await Notice.find({ department });

    if (notice.length == 0) {
      res.status(404).json({
        success: false,
        message: "Please provide valid notice Information",
      });
    } else {
      res.status(200).json({
        success: true,
        notice,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
exports.getSingaleNotice = async (req, res, next) => {
  try {
    const id = req.params.id;
    const notice = await Notice.findById(id);
    if (!notice) {
      res.status(404).json({
        success: false,
        message: "Please provide valid Routine Information",
      });
    } else {
      res.status(200).json({
        success: true,
        notice,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.noticeDelete = async (req, res, next) => {
  const notice = await Notice.findById(req.params.id);
  if (!notice) {
    res.status(404).json({
      success: false,
      message: "Notice Not Found",
    });
  } else {
    notice.remove();
    res.status(200).json({
      success: true,
      message: "Notice Delete Successfull",
    });
  }
};

exports.updateNotice = async (req, res, next) => {
  let notice = await Notice.findById(req.params.id);
  if (!notice) {
    res.status(500).json({
      success: false,
      message: "Notice Not Fount",
    });
  } else {
    notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      notice,
    });
  }
};
