var express = require('express');
var app = express();

app.get('/', function (req,res) {
  res.send('Hello World!')
});

app.get('/formpost', function(req, res) {
  res.send("You submitted "+ req.query.textfield);
  thesubmissions.push(req.query.textfield);
  //req.query.checkboxname
});

app.get('/display', function(req, res) {
  var htmlout = "<html><body>";
  for (var i =0; i < thesubmissions.length; i++) {
    htmlout = htmlout + thesubmissions[i] + "<br>";
  }
  var htmlout = htmlout "</body></html>";
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
