var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var mushroom_info_schema = new Schema({
    category:String,
    latitude:Schema.Types.Decimal128,
    longitude:Schema.Types.Decimal128,
    altitude:Schema.Types.Decimal128,
    life_cycle:Number,
    date_generated:Date,
    picked:Boolean
});

const mushroom_info = mongoose.model("mushroom_info",mushroom_info_schema);

module.exports = mushroom_info;