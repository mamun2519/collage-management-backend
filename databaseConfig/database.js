const mongoose = require("mongoose");
const database = () => {
  const uri = `mongodb+srv://mamun:${process.env.DB_PASS}@mamun.jqfhhn5.mongodb.net/?retryWrites=true&w=majority`;

  // cannet to mongoose
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("mongoose was cannect");
    })
    .catch((error) => {
      console.log("this is error", error);
    });
};
module.exports = database;
