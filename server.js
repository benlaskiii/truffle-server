const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine","ejs");
const port = 8000;
const truffle_router = require("./routes/truffle_router")
const login_router = require("./routes/login_router")
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

app.use("/",login_router);