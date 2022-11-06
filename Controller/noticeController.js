const Notice = require("../Model/noticeModal");

exports.createNotice = async (req, res, next) => {
  try {
    const notice = req.body;
    await Notice.create(notice);
    res.status(200).json({
      success: true,
      message: "Notice Publish SuccessFull",
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getAllNotice = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    console.log(limit);
    const notice = await Notice.find({
      title: { $regex: search, $options: "i" },
    })
      .skip(page * limit)
      .limit(limit);
    const response = {
      page: page + 1,
      limit,
      notice,
    };
    res.json({ success: true, notice: response });
  } catch (e) {
    console.log(e);
  }
};

exports.getDepartmentNotice = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    const { department } = req.query;

    const notice = await Notice.find({
      $and: [
        { classs: department },
        { title: { $regex: search, $options: "i" } },
      ],
    })
      .skip(page * limit)
      .limit(limit);

    if (notice.length == 0) {
      res.status(404).json({
        success: false,
        message: "Please provide valid notice Information",
      });
    } else {
      res.status(200).json({
        success: true,
        notice,
        page: page + 1,
        limit,
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
  try {
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
  } catch (e) {
    console.log(e);
  }
};

exports.updateNotice = async (req, res, next) => {
  try {
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
  } catch (e) {
    console.log(e);
  }
};
