const User = require("../Model/userModal");
const sendToken = require("../utilitis/sendJwtToken");

exports.createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      sendToken(user, 200, res);
    } else {
      //  cover picture uplode
      const addeduser = await User.create({
        name,
        email,
      });

      sendToken(addeduser, 200, res);
    }
  } catch (eror) {
    console.log(eror);
  }
};

exports.getAllUser = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    const user = await User.find({
      $and: [{ role: "user" }, { name: { $regex: search, $options: "i" } }],
    })
      .skip(page * limit)
      .limit(limit);
    res.json({ success: true, user, page: page + 1, limit });
  } catch (e) {
    console.log(e);
  }
};

exports.getAllAdmin = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    const user = await User.find({
      $and: [{ role: "admin" }, { name: { $regex: search, $options: "i" } }],
    })
      .skip(page * limit)
      .limit(limit);
    res.json({ success: true, user, page: page + 1, limit });
  } catch (e) {
    console.log(e);
  }
};

exports.getSinleUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "Please provide valid user Information",
      });
    } else {
      res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
// ,..............
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "user Not Found",
      });
    } else {
      user.remove();
      res.status(200).json({
        success: true,
        message: "User Delete Successfull",
      });
    }
  } catch (e) {
    console.log(e);
  }
};

exports.createAdmin = async (req, res, next) => {
  try {
    const email = req.params.email;
    const adminRequester = req.decoded.email;
    const requestAdmin = await User.findOne({ email: adminRequester });
    if (requestAdmin.role == "admin") {
      const roleAction = req.query.roleAction;
      if (roleAction == "admin") {
        const makeAdmin = await User.updateOne(
          { email },
          {
            $set: { role: "admin" },
          }
        );
        if (makeAdmin.modifiedCount > 0) {
          res.status(200).json({
            success: true,
            message: "Admin Make Succssfull",
          });
        } else {
          res.status(200).json({
            success: true,
            message: "admin request fail",
          });
        }
      } else if (roleAction === "user") {
        const makeUser = await User.updateOne(
          { email },
          {
            $set: { role: "user" },
          }
        );
        if (makeUser.modifiedCount > 0) {
          res.status(200).json({
            success: true,
            message: "Admin Remove Succssfull",
          });
        } else {
          res.status(200).json({
            success: true,
            message: "admin remove request fail",
          });
        }
      }
    } else {
      res.status(403).send({ message: "forbiden Accescc" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.cheackAdmin = async (req, res, next) => {
  try {
    const email = req.params.email;
    console.log(email);
    const user = await User.findOne({ email });
    console.log(email);
    if (!user) {
      res.status(404).json({ message: "User Not Found" });
    } else {
      const isAdmin = user.role === "admin";
      res.status(200).json({
        success: true,
        admin: isAdmin,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
