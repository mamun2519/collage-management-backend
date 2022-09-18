const mongoose = require("mongoose");
const database = () =>{
const uri = "mongodb://localhost:27017/collage-Management"

mongoose.connect(uri , { useNewUrlParser: true, useUnifiedTopology: true })
.then((data) => {
      console.log("mongoose was cannect");
})
.catch((error) =>{
      console.log("this is error",error)
})
}
module.exports = database