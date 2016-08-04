var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 2000;

console.log(__dirname);

app.listen(port, function(){
    console.log("server started on port: " + port);
});