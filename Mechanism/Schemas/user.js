const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
      username: String,
      password: String,
      fname: String,
      lname: String,
      email: String,
});

module.exports = mongoose.model("users", userSchema);
