const mongoose = require("mongoose");
const url = "mongodb://localhost/truffle";
mongoose.connect(url);
const db = mongoose.connection;

module.exports = db;