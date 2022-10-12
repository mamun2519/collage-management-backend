const cloudinary = require("cloudinary");
const EventDB = require("../Model/eventModal")

exports.createEvent = async (req , res, next)=>{
      try {
            const myCloud = await cloudinary.v2.uploader.upload(req.body.images, {
              folder: "products",
              width: 150,
              crop: "scale",
            });
            const {
                  evenType,
                  title,
                  description
             
            } = req.body;
           
            await EventDB.create({
                  evenType,
                  title,
                  description,
              picture: { public_id: myCloud.public_id, url: myCloud.secure_url },
            });
            res.status(200).json({
              success: true,
              message: "New Event Added Successfull",
            });
          } catch (e) {
            console.log(e);
          }
}

exports.getAllEvent = async (req , res , next) =>{
      const events= await EventDB.find({});
  res.json({ success: true, events: events });
}

exports.getSingaleEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await EventDB.findById(id);
    if (!event) {
      res.status(404).json({
        success: false,
        message: "Please provide valid Routine Information",
      });
    } else {
      res.status(200).json({
        success: true,
        event,
      });
    }
  } catch (e) {
    console.log(e);
  }
};