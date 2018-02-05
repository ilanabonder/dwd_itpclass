var express = require('express');
var app = express();

app.use(express.static('public'));

var count = 0;

var thesubmissions = [];

app.get('/formpost', function(req, res) {
  //res.send("You submitted " + req.query.textfield);
  var radios = document.getElementsByName('radiobutton');
  for (var i = 0, length = radios.length; i < length; i++){
    if (radios[i].checked){
  // do whatever you want with the checked radio
    thesubmissions.push(radios[i].value);
  // only one radio can be logically checked, don't check the rest
    break;
 }
}

  thesubmissions.push(req.query.textfield);
  res.redirect('/display');
});

app.get('/display', function(req, res) {
  var htmlout = "<html><body>";
  for (var i = 0; i < thesubmissions.length; i++) {
    htmlout = htmlout + thesubmissions[i] + "<br>";
  }
  var htmlout = htmlout + "</body></html>";
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
  res.send("Goodbye");

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
