//mc location
var characterX = 100;
var characterY = 100;

//wasd
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//obstacles
var shape1X = 50;
var shape1Y = 60;
var shape1XSpeed; 
var shape1YSpeed;
var shape1Size = 30;

var shape2X = 300;
var shape2Y = 200;
var shape2XSpeed;
var shape2YSpeed;
var shape2Size = 50;

//spawn obstacle
var mouseShapeX;
var mouseShapeY;
var mouseShapeSize = 40;

function setup()
{
    createCanvas(500, 600);

    // get random speeds when it first starts
    shape1XSpeed = Math.floor(Math.random() * 5) + 1;
    shape1YSpeed = Math.floor(Math.random() * 5) + 1;
    shape2XSpeed = Math.floor(Math.random() * 5) + 1;
    shape2YSpeed = Math.floor(Math.random() * 5) + 1;

    createCharacter(100, 300);
}

function draw()
{
    background(120,45,78);

    createBorders(10);
    createExit();
    drawCharacter();
    characterMovement();
    createObstacles();
    moveObstacle1();
    moveObstacle2();
    drawMouseObstacle();
    displayWinMessage();
}

//move speed
function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }
}

function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
}

function drawCharacter()
{
    fill(23,40,123);
    triangle(
        characterX, characterY - 20,
        characterX - 20, characterY + 20,
        characterX + 20, characterY + 20
    );
}

function createObstacles()
{
    fill(13,145,14);
    rect(shape1X, shape1Y, shape1Size, shape1Size);

    fill(0, 120, 255);
    rect(shape2X, shape2Y, shape2Size, shape2Size);
}

function moveObstacle1()
{
    shape1X += shape1XSpeed;
    shape1Y += shape1YSpeed;

    if(shape1X > width)
    {
        shape1X = 0;
    }
    else if(shape1X < 0)
    {
        shape1X = width;
    }

    if(shape1Y > height)
    {
        shape1Y = 0;
    }
    else if(shape1Y < 0)
    {
        shape1Y = height;
    }
}

function moveObstacle2()
{
    shape2X += shape2XSpeed;
    shape2Y += shape2YSpeed;

    if(shape2X > width)
    {
        shape2X = 0;
    }
    else if(shape2X < 0)
    {
        shape2X = width;
    }

    if(shape2Y > height)
    {
        shape2Y = 0;
    }
    else if(shape2Y < 0)
    {
        shape2Y = height;
    }
}

function drawMouseObstacle()
{
    if(mouseShapeX != undefined && mouseShapeY != undefined)
    {
        fill(120,130,140);
        rect(mouseShapeX, mouseShapeY, mouseShapeSize, mouseShapeSize);
    }
}

function createBorders(thickness)
{
    fill(0);

    // top border
    rect(0, 0, width, thickness);

    // left border
    rect(0, 0, thickness, height);

    // bottom border
    rect(0, height - thickness, width, thickness);

    // right border with middle exit opening
    rect(width - thickness, 0, thickness, height/2 - 50);
    rect(width - thickness, height/2 + 50, thickness, height/2 - 50);
}

function createExit()
{
    fill(255);
    textSize(16);
    text("EXIT", width - 45, height / 2);
}

function displayWinMessage()
{
    if(characterX > width - 20 && characterY > height/2 - 50 && characterY < height/2 + 50)
    {
        fill(255);
        stroke(5);
        textSize(26);
        text("You Win!", width/2 - 50, height/2 - 50);
    }
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}