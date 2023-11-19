var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var mushroom_info_schema = new Schema({
    category:String,
    location:String
});

const mushroom_info = mongoose.model("mushroom_info",mushroom_info_schema);

module.exports = mushroom_info;