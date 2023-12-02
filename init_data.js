const mushroom_info = require("./models/truffle");
const db = require("./db_connection");

const latitude_max = 48.1;
const latitude_min = 48.3;
const longitude_max = 11.7;
const longitude_min = 11.5;

function generate_random_latitude(){
  result_latitude = Math.random()*(latitude_max-latitude_min) + latitude_min;
  result_latitude = result_latitude.toPrecision(7);
  return result_latitude;
}

function generate_random_longitude(){
  result_logitude = Math.random()*(longitude_max-longitude_min) + longitude_min;
  result_logitude = result_logitude.toPrecision(7);
  return result_logitude;
}

function generate_mushroom(){
  for(i=0;i<1000;i++){
    mushroom_info.create({
      latitude:generate_random_latitude(),
      longitude:generate_random_longitude(),
      picked:false,
    });
  }
}


db.once('open' ,() => {
	console.log('successfully connected to db');
  generate_mushroom();
  console.log("successfully generate 1000 mushrooms");
})

db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', function() {
    console.log('connection stopped. please reconnect');
    mongoose.connect(config.url, {server:{auto_reconnect:true}});
});
