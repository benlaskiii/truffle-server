var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/testdb',{useNewUrlParser:true});

var Schema = mongoose.Schema;

var mushroom_info_schema = new Schema({
    category:String,
    location:String
});

var mushroom_info = mongoose.model("mushroom_info",mushroom_info_schema);

mushroom_info.create(
    {
        category:"common",
        location:"48"
    }
).catch((error)=>{console.error(error);});