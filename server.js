//server.js

var express = require("express");
var http = require("http");
var controllers = require("./controllers");
var app = express();


app.set("view engine", "vash");
app.use(express.static(__dirname + "/public"));

controllers.init(app);

var server = http.createServer(app);
var port = 3000;

server.listen(port, function () {
    console.log("server listening at " + port);
});

