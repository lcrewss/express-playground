var express = require("express");
var app = express();
var port = 8080

app.get("/math/pi", function(request,response){
  response.send(String(Math.PI))
})


app.listen(port)
