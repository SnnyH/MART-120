var ear1X = 110;
var ear1Direction = 1;

var ear2X = 290;
var ear2Direction = 2;

var brow1Y = 170;
var brow1Direction = 1;

var brow2Y = 170;
var brow2Direction = 3;

var noseX = 200;
var noseY = 220;
var noseXDirection = 2;
var noseYDirection = 1;

var size = 22;
var count = 0;
var sizeDirection = 2;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220,200,200);
  //text
  fill(0);
  textAlign(CENTER);
  textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
  text("My Self Portrait", width / 2, 40);
  fill(0);
  textSize(12);
  textAlign(RIGHT);
  text("Sunny Harrison", width - 10, height - 10);
  noStroke();
  //head
  fill(255, 224, 189);
  rect(110, 150, 180, 220);
  //hair
  fill(255,200,0);
  rect(110, 110, 180, 40);
  //brows
  rect(130, brow1Y, 50, 20);
  rect(220, brow2Y, 50, 20);
  brow1Y += brow1Direction;
  if(brow1Y >= 185 || brow1Y <= 155)
  {
    brow1Direction *= -.5;
  }
  brow2Y += brow2Direction;
  if(brow2Y >= 185 || brow2Y <= 155)
  {
    brow2Direction *= -1;
  }
  //eyes
  fill(255);
  ellipse(160, 200, 40, 20);
  ellipse(240, 200, 40, 20);
  fill(0, 150, 200);
  ellipse(160, 200, 10, 10);
  ellipse(240, 200, 10, 10);
  //schnoz
  fill(255, 200, 170);
  triangle(noseX, noseY, noseX - 15, noseY + 40, noseX + 15, noseY + 40);
  noseX += noseXDirection;
  noseY += noseYDirection;
  if (noseX >= 215 || noseX <= 185) {
    noseXDirection *= -.9;
  }
  if (noseY >= 235 || noseY <= 205) {
    noseYDirection *= -1;
  }
  //ears
  fill(255, 224, 189);
  ellipse(ear1X, 220, 30, 50);
  ellipse(ear2X, 220, 30, 50);
  ear1X += ear1Direction;
  if (ear1X >= 130 || ear1X <= 90) {
    ear1Direction *= -1;
  }
  ear2X += ear2Direction;
  if (ear2X >= 310 || ear2X <= 270) {
    ear2Direction *= -.8;
  }
  //shirt
  fill(100, 150, 255);
  triangle(100, 400, 300, 400, 200, 350);
  //beard
  fill(255,200,0);
  rect(100, 280, 200, 90);
  //mouth
  stroke(0);
  line(170, 290, 230, 290);
  //nostrils
  point(192, 255);
  point(208, 255);
}