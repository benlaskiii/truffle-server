// This is the entry point for our whole application

var express = require("express");

var app = express();

app.get("/", (req, res) => {
    // MyCoolGame.com was accessed via webrowser, so server up
    // the static content for our WebGL unity application
    res.send("Hello, here is your Unity WebGL game:");

});

app.get("/user/:id", (req, res) => {
    // Return the user's info of wins/losses/etc...
    // The goal, will be to read this from some sort of database.

    var dummyData = {
        "category":"common",
        "location": "48.26276243584686, 11.6689410185278"
    };

    // JSON

    res.json(dummyData);

});

app.listen( 8000, () => {
    console.log("Server has started!");
} );
