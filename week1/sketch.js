  var bgColor = (47,50,193);
	var moonSize = 10;
	var stars = 40;
	var starsMax = 300;
  var gray0, gray1, gray2, gray3, gray4, gray5, gray6, gray7
  var randomStars = [];
  var start;

function setup() {
  createCanvas(390, 550); 
  gray0 = color(24);
  gray1 = color(32);
  gray2 = color(48);
  gray3 = color(80);
  gray4 = color(104);
  gray5 = color(128);
  gray6 = color(188);
  gray7 = color(195);
  start = second();

  
    // stars
  for( var i=0; i<stars; i++) {
    var randomRadius = Math.random() * 5;
    randomStars.push([
      Math.random() * 390,
      Math.random() * starsMax,
      randomRadius,
      randomRadius
    ])
  }
  
}

//as I put no stroke i need to create another functio to create the line
function draw(){ 
  bgColor = map (mouseX,0, 390, 20, 200);
  background(bgColor);
  noStroke();
  
  var timeElapsed = millis() - start;
  //console.log(timeElapsed);
  
  // stars
  for( var i=0; i<stars; i++) {
    noStroke();
    fill(255);
    var change = timeElapsed / 250;
    ellipse(randomStars[i][0], randomStars[i][1], randomStars[i][2], randomStars[i][3]);
  }
  

  
  // sun and empire state line
  fill(244, 194, 13)
  ellipse(mouseX, 60, 55, 55);
  stroke(24);
  line(194, 70, 195, 200); 
  noStroke();
    //empirestatelight
  fill(194,24,7)
  currentTime = second() - start;
  if (currentTime % 2 == 0){
      ellipse(194,70,0,0);
  }
  else {
    ellipse(194,70,5,5);
  }
  
  
//Grayscale for shadowing 0(darker) to 6(lighter)  

  fill(gray1);
  rect(0,130,50,300);
  fill(gray7);
  rect(120,200,20,300);
  fill(gray2);
  rect(20,200,100,300);
  fill(gray7);
  rect(260,150,70,300);
  fill(gray0);
  rect(192,110,6,300);
  fill(gray0);
  rect(192,110,6,300);
  fill(gray0);
  rect(189,120,12,300);
  fill(gray0);
  rect(179,130,32,300);
  fill(gray0);
  rect(176.5,135,37,300);
  fill(gray0);
  rect(172.5,145,45,300);
  fill(gray0);
  rect(165,150,60,300);
  fill(gray0);
  rect(165,150,60,300);
  fill(gray5);
  rect(220,280,35,300);
  fill(gray5);
  rect(220,280,35,300);
  fill(gray6);
  rect(180,280,40,300);
  fill(gray5);
  rect(10,220,50,300);
  fill(gray6);
  rect(60,220,25,300);
  fill(gray6);
  rect(70,260,30,300);
  fill(gray1);
  rect(160,350,30,300);
  fill(gray1);
  rect(100,300,60,300);
  fill(gray2);
  rect(300,230,60,300);
  fill(gray1);
  rect(320,260,60,300);
  fill(gray0);
  rect(355,250,60,300);
  fill(gray0);
  rect(315,350,60,120);
  fill(gray0);
  rect(255,370,60,120);
  fill(gray5);
  rect(265,425,25,120);
  fill(gray5);
  rect(255,435,10,120);
  fill(gray2);
  rect(230,400,25,120);
  fill(gray3);
  rect(200,400,30,120);
  fill(gray1);
  rect(180,440,40,120);
  fill(gray1);
  rect(180,420,20,120);
  fill(gray0);
  rect(120,400,60,120);
  fill(gray2);
  rect(110,400,40,120);
  fill(gray3);
  rect(110,370,60,120);
  fill(gray3);
  rect(110,350,23,130);
  fill(gray5);
  rect(80,350,30,100);
  fill(gray0);
  rect(120,380,60,150);
  fill(gray2);
  rect(0,280,70,400);
  fill(gray2);
  rect(0,280,70,400);
  fill(gray4);
  rect(30,415,70,140);
  fill(gray1);
  rect(60,280,20,400);
  fill(gray1);
  rect(0,350,30,200);
  fill(gray4);
  rect(30,415,70,140);
  fill(gray1);
  rect(0,350, 30,200);
  fill(gray2);
  rect(30,435,15,130);
  fill(gray3);
  rect(45,435,40,130);
  fill(gray2);
  rect(340,440,50,110);
  fill(gray1);
  rect(120,450,250,100);
  fill(gray6);
  rect(75,450,70,100);
  
}

