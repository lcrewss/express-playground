var express = require("express");
var app = express();
var port = 8080

app.get("/math/pi", function(request,response){
  response.send(String(Math.PI))
})

// Calulate with Querystrings


app.get("/math/calculate", function(request, response){
  var operation = request.query.operation
  var x = parseInt(request.query.x)
  var y = parseInt(request.query.y)
  var result = 0
  var string
  if(operation === "add"){
    result = x + y
    string = `${x} + ${y} = ${result}`
  }else if (operation === "subtract"){
    result = x - y
    string = `${x} - ${y} = ${result}`
  }else if (operation === "multiply"){
    result = x * y
    string = `${x} * ${y} = ${result}`
  }else if (operation === "division"){
    result = x / y
    string = `${x} / ${y} = ${result}`
  }
  response.send(string);
})

app.listen(port)
