const express = require("express");
const mongoose = require("mongoose");

const https = require("https");
const http = require("http");
const app = express();
const port = 8000;
const truffle_router = require("./routes/truffle_router")
const db = require("./db_connection");

db.once('open' ,() => {
	console.log('successfully connected to db');
})

db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', function() {
    console.log('connection stopped. please reconnect');
    mongoose.connect(config.url, {server:{auto_reconnect:true}});
});

app.get("/", (req, res) => {
    res.send("Truffle server");

});

app.listen( port, () => {
    console.log("Server has started!");
} );

app.use("/api/mushroom",truffle_router);