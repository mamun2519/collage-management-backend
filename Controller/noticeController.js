const Notice = require("../Model/noticeModal")

exports.createNotice = async (req , res , next) =>{
      const notice = req.body;
      await Notice.create(notice);
      res.status(200).json({
        success: true,
        message: "Notice Publish SuccessFull",
      });
}