//mc location
var characterX = 100;
var characterY = 100;
//wasd
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

//obstacles
var obstacleX = [50, 300, 150, 400, 250];
var obstacleY = [60, 200, 450, 120, 350];
var obstacleXSpeed = [];
var obstacleYSpeed = [];
var obstacleSize = [30, 50, 25, 60, 40];
var obstacleRed = [13, 0, 255, 200, 100];
var obstacleGreen = [145, 120, 50, 20, 200];
var obstacleBlue = [14, 255, 100, 180, 40];

//spawn obstacle
var mouseShapeX;
var mouseShapeY;
var mouseShapeSize = 40;

function setup()
{
    createCanvas(500, 600);

    // get random speeds when it first starts
    for(var i = 0; i < obstacleX.length; i++)
    {
        obstacleXSpeed[i] = Math.floor(Math.random() * 5) + 1;
        obstacleYSpeed[i] = Math.floor(Math.random() * 5) + 1;

        if(Math.random() > 0.5)
        {
            obstacleXSpeed[i] *= -1;
        }

        if(Math.random() > 0.5)
        {
            obstacleYSpeed[i] *= -1;
        }
    }

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
    moveObstacles();
    drawMouseObstacle();
    displayWinMessage();
}
//move speed
function characterMovement()
{
    // handle the keys
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
        console.log("movement: " + characterX);
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
    console.log(characterX);
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
    for(var i = 0; i < obstacleX.length; i++)
    {
        fill(obstacleRed[i], obstacleGreen[i], obstacleBlue[i]);
        rect(obstacleX[i], obstacleY[i], obstacleSize[i], obstacleSize[i]);
    }
}

function moveObstacles()
{
    for(var i = 0; i < obstacleX.length; i++)
    {
        obstacleX[i] += obstacleXSpeed[i];
        obstacleY[i] += obstacleYSpeed[i];

        //wrap obstacles
        if(obstacleX[i] > width)
        {
            obstacleX[i] = 0;
        }
        else if(obstacleX[i] < 0)
        {
            obstacleX[i] = width;
        }

        if(obstacleY[i] > height)
        {
            obstacleY[i] = 0;
        }
        else if(obstacleY[i] < 0)
        {
            obstacleY[i] = height;
        }
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
    // check to see if mc has escaped
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