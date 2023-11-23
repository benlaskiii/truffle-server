var mongoose = require("mongoose");
import config from 'config-lite';
import chalk from 'chalk';

var url = "'mongodb://localhost/testdb'"
mongoose.connect(url, {useNewUrlParser:true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open' ,() => {
	console.log(
    chalk.green('successfully connected to db')
  );
})

db.on('error', function(error) {
    console.error(
      chalk.red('Error in MongoDb connection: ' + error)
    );
    mongoose.disconnect();
});

db.on('close', function() {
    console.log(
      chalk.red('connection stopped. please reconnect')
    );
    mongoose.connect(config.url, {server:{auto_reconnect:true}});
});

export default db;



// var Schema = mongoose.Schema;

// var mushroom_info_schema = new Schema({
//     category:String,
//     location:String
// });

// var mushroom_info = mongoose.model("mushroom_info",mushroom_info_schema);

// mushroom_info.create(
//     {
//         category:"common",
//         location:"48"
//     }
// ).catch((error)=>{console.error(error);});