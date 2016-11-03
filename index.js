/**
 * Created by Tarun on 8/17/2016.
 */
var routes = require('./routes');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.end("Welcome to the root url for our Food App");
});

app.get('/testRoute', function (req, res) {
    res.end("Returning some plain text information from the test route for the Food App");
});

app.get("/fruits", routes.fruits);
app.get("/veg", routes.veg);
app.get("/dairy", routes.dairy);
app.get("/meats", routes.meats);
app.get("/grains", routes.grains);

/*
    Route not matching any of the above ones
 */
app.get("*", function (req, res) {
    res.statusCode = 404;
    res.end("Requested Page does not exist!!!");
});

var port = 3000;
app.listen(port, function () {
    console.log("Server running on port on 3000...");
});


