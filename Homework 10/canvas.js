function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220,200,200);
  //text
  fill(0);
  textSize(22);
  textAlign(CENTER);
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
  //eyebrow
  rect(130, 170, 50, 20);
  rect(220, 170, 50, 20);
  //eyes
  fill(255);
  ellipse(160, 200, 40, 20);
  ellipse(240, 200, 40, 20);
  fill(0, 150, 200);
  ellipse(160, 200, 10, 10);
  ellipse(240, 200, 10, 10);
  //schnoz
  fill(255, 200, 170);
  triangle(200, 220, 185, 260, 215, 260);
  //ears
  fill(255, 224, 189);
  ellipse(110, 220, 30, 50);
  ellipse(290, 220, 30, 50);
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