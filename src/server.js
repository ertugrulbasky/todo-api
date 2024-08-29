const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB CONNECT SUCCESS");
    })
    .catch((err) => console.log(err));

  mongoose.Promise = global.Promise;
};
