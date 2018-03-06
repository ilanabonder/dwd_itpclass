
//store json file
var info = null;
//store keys from the json file
var keys = null;

//preload() runs first, once
function preload() {
  //load json file
  info = loadJSON("./candidatos.json");
}

//setup() runs once, after preload()
function setup() {
  noCanvas();

  //retrieve keys from json
  keys = Object.keys(info)

  //retrieve menu
  var menu = document.getElementById("selectMenu");
  var text = document.getElementById("currentQuery");
  var text = document.getElementById("newsDisplay");

  //iterate through keys
  for (var i = 0; i < keys.length; i++) {
    var option = document.createElement("option");
    //make the text be the key
    option.text = keys[i];
    menu.add(option);
  }
}

// function triggered when an item is selected on the menu
function selectChange(selector) {
  var searchTerm = info[selector];
  $('.news-container').html("");
  $('.newSource').html("");




  getNewNews(searchTerm);
  // lets give it 2 seconds, before we use the data
  setTimeout(function(){
    // here we can do whatever we want with our
    // data in the object articlesBySource
    // do if statement creating divs by source
    //do if statement creating divs for articles


    console.log(articlesBySource);
    // {
    //   globo: [
    //     article,
    //     article
    //   ],
    // }
    let availableSources = Object.keys(articlesBySource);
    // array like:
    // [globo, cartacapital, ...]


    // with this array we can loop over the object like this:
    for(let i = 0; i < availableSources.length; i++){
      let source = availableSources[i];
      let articleArrayOfThisSource = articlesBySource[source];

      var htmlString = '<div class="newSource">';
      htmlString +=	'<h1 class="titleSource">' + source + '</h1>';

      $('.news-container').append(htmlString);


      for(let j = 0; j < articleArrayOfThisSource.length; j++){
      var htmlString2 = '<a href="' + articleArrayOfThisSource[j].newURL + '">'
      htmlString2 += '<div class="articleDiv">';
      htmlString2 += '<div class="articleImg">';
      htmlString2 +=	'<img class="Img" src="' + articleArrayOfThisSource[j].newImgURL + '">';
      htmlString2 += '</div>'
      htmlString2 += '<div class="articleText">';
  		htmlString2 +=	'<h1 class="articleTitle">' + articleArrayOfThisSource[j].newTitle + '</h1>';
      htmlString2 +=	'<p class="articleDesc">' + articleArrayOfThisSource[j].newDesc + '<p>';
  		htmlString2 += '</div>';
      htmlString2 += '</a>';

  		$('.newSource').append(htmlString2);
    }

      console.log("SOURCE IS", source);
      console.log("NUMBER OF ARTICLE IS", articleArrayOfThisSource.length);
      console.log("ARTICLEs", articleArrayOfThisSource);

    }
  }, 2000);



}

function requestNews(searchTerm, page, callback){
  var newsAPIURL = 'https://newsapi.org/v2/everything?q=' + searchTerm +'&sortBy=publishedAt&page='+page+'&apiKey=';
  var newsAPIKey = "3a8163d38cf846d28099503687290b56";
  var newsAPIReqURL = newsAPIURL + newsAPIKey;


  $.ajax({
    url: newsAPIReqURL,
    type: 'GET',
    dataType: 'json',
    error: function(err){
      console.log(err);
    },
    success: function(data){
      callback(data);
    }
  });
}


let articlesBySource = {};



function processData(articles){

  for(let i = 0; i < articles.length; i++){
    // let's package a little news object:
    let newsObject = {
      newTitle: articles[i].title,
      newDesc: articles[i].description,
      newURL: articles[i].url,
      newImgURL: articles[i].urlToImage,
      newSource: articles[i].source.name
    }


    if(!(newsObject.newSource in articlesBySource)){
      // if the source does not yet have an entry in articlesBySource,
      // create and entry and add the newsObject as the first item:
      articlesBySource[newsObject.newSource] = [newsObject];
    }else{
      // if there is already an entry for this source
      // just push the newsObject/add it to the array
      articlesBySource[newsObject.newSource].push(newsObject);
    }


  }

}

let maxResultsWeEverWant = 500;
function getNewNews(searchTerm){
  // get the first batch of results:
  requestNews(searchTerm, 1, function(data){
    // // process this batch:
    processData(data.articles);
    let numTotalResults = data.totalResults;
    let numResultsWeWant = Math.min(maxResultsWeEverWant, numTotalResults);
    let numResultsLeftToDo = numResultsWeWant - data.articles.length;
    let numRequestsLeftToDo = Math.floor(numResultsLeftToDo/20);
    // make the remaining requests:
    for(let i = 0; i < numRequestsLeftToDo; i++){
      requestNews(searchTerm, 2, function(data){
        // // process this batch:
        processData(data.articles);
      });
    }
  })

}

// getting data from Google news API
function getNews(searchTerm, page){
  // console.log("Getting Data");

  var newsAPIURL = 'https://newsapi.org/v2/everything?q=' + searchTerm +'&sortBy=publishedAt&page='+page+'&apiKey=';
  var newsAPIKey = "3a8163d38cf846d28099503687290b56";
  var newsAPIReqURL = newsAPIURL + newsAPIKey;


  $.ajax({
    url: newsAPIReqURL,
    type: 'GET',
    dataType: 'json',
    error: function(err){
      console.log(err);
    },
    success: function(data){
      console.log("Got the data");

      // getting data I want from every article
      for (i=0; i< data.articles.length; i++){
        var newTitle = data.articles[i].title;
        var newDesc = data.articles[i].description;
        var newURL = data.articles[i].url;
        var newImgURL = data.articles[i].urlToImage;
        var newSource = data.articles[i].source.name;

        makeNewsHTML(newTitle,newDesc,newURL,newImgURL,newSource);
      }
    }
  });
}

      // display data in html
  function makeNewsHTML(newTitle,newDesc,newURL,newImgURL,newSource) {
		var htmlString = '<div class="new">';
    htmlString +=	'<img src="' + newImgURL + '">';
		htmlString +=	'<h1>' + newTitle + '</h1>';
    htmlString +=	 '<p><a href='+ newURL +'>' + newSource+ '</a></p>'
    htmlString +=	'<p>' + newDesc + '<p>';
		htmlString += '</div>';
		$('.news-container').append(htmlString);
	}

//draw() runs in a loop, after setup()
function draw() {

}
