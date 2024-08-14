const mongoose = require("mongoose");

class MongoDBConnection {
  mongoURL = "";
  constructor() {
    this.mongoURL = "mongodb://localhost:27017/user?authSource=admin";
  }

  _connect() {
    mongoose
      .connect(this.mongoURL)
      .then(() => {
        console.log("mongoDB connected");
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
module.exports = MongoDBConnection;
