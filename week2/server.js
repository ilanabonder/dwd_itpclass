var express = require('express');
var app = express();

app.use(express.static('public'));

var count = 0;

var thesubmissions = [];

var radioValue;
app.get('/formpost', function(req, res) {
  //res.send("You submitted " + req.query.textfield);
  // var radios = document.getElementsByName('radiobutton');
  console.log(req.query.radiobutton);
  radioValue = req.query.radiobutton;
  res.redirect('/display');
  //if loop()

});

app.get('/display', function(req, res) {
  console.log('in display, the value is :' );
  var htmlout = "<html><body><h1>";
  htmlout += radioValue;
  var htmlout = htmlout + "</h1></body></html>";
  res.send(htmlout);
});

app.get('/count', function(req, res) {
  count++;
  res.send("<html><body><h1>"+count+"</h1></body></html>");
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/somethingelse', function(req, res) {
  res.send("heyhey");

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
