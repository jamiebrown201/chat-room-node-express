var express = require('express');
var app = express();

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));


app.get('/' , function(req, res) {

});

app.listen(3000, function() {
  console.log('Chat app is listening on port 3000')
});
