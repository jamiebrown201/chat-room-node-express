var express = require("express");
var app = express();

app.set("views", "./views");
app.set('view engine', 'jade');

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));

app.get('/' , function(req, res) {
  res.render("index", { title: "Home"});
});

app.get('/admin/rooms', function (req, res) {
    res.render("rooms", { title: "Rooms"});
});

app.listen(3000, function() {
  console.log('Chat app is listening on port 3000');
});
