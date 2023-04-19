const app = require("./app");
const database = require("./databaseConfig/database");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const port = process.env.PORT || 5000

// database configaretissssss
database();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.get("/", (req, res) => {
  res.send("hellw worldssssssssssssssss");
});
// surver run
app.listen(port, () => {
  console.log("server is run start", port);
});
