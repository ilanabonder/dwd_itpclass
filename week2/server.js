var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

// import mongojs code library
var mongojs = require('mongojs');
// connect to MY database that lives on mLab
var db = mongojs("mongodb://ilanabonder:laska123@ds125618.mlab.com:25618/dwd_class_week3", ["moods"]);

//
// var count = 0;
//
// var thesubmissions = [];
//
// var radioValue;
app.get('/formpost', function(req, res) {
  //res.send("You submitted " + req.query.textfield);
  // var radios = document.getElementsByName('radiobutton');
  // console.log(req.query.radiobutton);
  radioValue = req.query.radiobutton;
  console.log(radioValue);
  var data = {mood: radioValue };

  db.moods.save({"mood":radioValue}, function(err, saved) {
    if( err || !saved ) console.log("Not saved");
    else console.log("Saved");
  });

  res.render('display.ejs', data);
  // res.sendFile(path.join(__dirname, 'public', 'display.html'));
  // res.redirect('/display');
  //if loop()

});

app.get('/display', function(req, res) {
  res.send("THANKS");
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
