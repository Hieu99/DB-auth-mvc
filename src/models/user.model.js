const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  full_name: String,
  avatar: String,
});

const UserSchema = mongoose.model("accounts", userSchema);

module.exports = UserSchema;
