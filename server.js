


var path = require("path");
var express = require("express");
//var angular = require("angular");
var app = express();

var port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname,"client","views"))

app.use(express.static(path.resolve(__dirname, "client")));
console.log("server started");

app.get("/", function(req, res) {
    console.log("get /");
    res.render("index.ejs");
});
app.get("/home", function(req, res) {
    console.log("get home");
    res.render("index.ejs");
});

app.listen(port, function() {
    console.log("Server RUNNING on port " + port);
    console.log("IP is " + process.env.IP);
})

