const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const user_info_schema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  level:Number,
  accquiredXP:Number
});

const user_info = mongoose.model("user_info",user_info_schema);

module.exports = user_info;