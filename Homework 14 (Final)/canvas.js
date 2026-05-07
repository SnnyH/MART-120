var lines = [];
var shapes = [];

function setup() {
  createCanvas(800, 400);

  //one shape to start
  shapes.push({
    points: [
      createVector(0, 0),
      createVector(width, 0),
      createVector(width, height),
      createVector(0, height)
    ],
    col: color(random(255), random(255), random(255))
  });
}

function draw() {
  background(220);

  //more shape :D
  noStroke();
  for (var i = 0; i < shapes.length; i++) {
    fill(shapes[i].col);
    beginShape();
    for (var j = 0; j < shapes[i].points.length; j++) {
      vertex(shapes[i].points[j].x, shapes[i].points[j].y);
    }
    endShape(CLOSE);
  }

  //linesss
  stroke(0);
  strokeWeight(2);
  for (var k = 0; k < lines.length; k++) {
    line(lines[k].x1, lines[k].y1, lines[k].x2, lines[k].y2);
  }
}

function mousePressed() {
  var cx = random(width);
  var cy = random(height);
  var angle = random(TWO_PI);

  var dx = cos(angle);
  var dy = sin(angle);

  //line long
  var length = 1000;

  var x1 = cx - dx * length;
  var y1 = cy - dy * length;
  var x2 = cx + dx * length;
  var y2 = cy + dy * length;

  var newLine = {
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  };

  lines.push(newLine);
  splitShapes(newLine);
}
//new shapes :D
function splitShapes(newLine) {
  var newShapes = [];

  for (var i = 0; i < shapes.length; i++) {
    var leftSide = [];
    var rightSide = [];

    var points = shapes[i].points;

    for (var j = 0; j < points.length; j++) {
      var current = points[j];
      var next = points[(j + 1) % points.length];

      var currentSide = sideOfLine(current, newLine);
      var nextSide = sideOfLine(next, newLine);

      if (currentSide >= 0) {
        leftSide.push(current);
      } else {
        rightSide.push(current);
      }

      if ((currentSide >= 0 && nextSide < 0) || (currentSide < 0 && nextSide >= 0)) {
        var intersection = getIntersection(current, next, newLine);

        if (intersection != null) {
          leftSide.push(intersection);
          rightSide.push(intersection);
        }
      }
    }

    if (leftSide.length >= 3 && rightSide.length >= 3) {
      newShapes.push({
        points: leftSide,
        col: color(random(255), random(255), random(255))
      });

      newShapes.push({
        points: rightSide,
        col: color(random(255), random(255), random(255))
      });
    } else {
      newShapes.push(shapes[i]);
    }
  }

  shapes = newShapes;
}

function sideOfLine(point, lineData) {
  return (lineData.x2 - lineData.x1) * (point.y - lineData.y1) - 
         (lineData.y2 - lineData.y1) * (point.x - lineData.x1);
}

function getIntersection(p1, p2, lineData) {
  var x1 = p1.x;
  var y1 = p1.y;
  var x2 = p2.x;
  var y2 = p2.y;

  var x3 = lineData.x1;
  var y3 = lineData.y1;
  var x4 = lineData.x2;
  var y4 = lineData.y2;

  var bottom = (x1 - x2) * (y3 - y4) - 
               (y1 - y2) * (x3 - x4);

  if (bottom == 0) {
    return null;
  }

  var px = ((x1 * y2 - y1 * x2) * (x3 - x4) - 
            (x1 - x2) * (x3 * y4 - y3 * x4)) / bottom;

  var py = ((x1 * y2 - y1 * x2) * (y3 - y4) - 
            (y1 - y2) * (x3 * y4 - y3 * x4)) / bottom;

  return createVector(px, py);
}
//f it new colors
function keyPressed() {
  if (key == 'f' || key == 'F') {
    for (var i = 0; i < shapes.length; i++) {
      shapes[i].col = color(random(255), random(255), random(255));
    }
  }
}