var balls = [];
var radius = 50;
var g = 0.2;
var score = 0;

function setup() {
  createCanvas(1200, 800);
  Ball(width / 2, height / 2, radius);
}

function Ball(x, y, r) {
  var b_xspeed = random(-1, 5);
  var b_yspeed = random(-1, 10);
  balls.push([x, y, r, b_xspeed, b_yspeed]);
}

function draw() {
  background("black");
  for (var i = 0; i < balls.length; i++) {
    balls[i][4] += g;
    balls[i][0] += balls[i][3];
    balls[i][1] += balls[i][4];
    if (balls[i][1] > height || balls[i][1] < 0) {
      balls[i][4] *= -1;
    }
    if (balls[i][0] > width || balls[i][0] < 0) {
      balls[i][3] *= -1;
    }
    stroke(0);
    fill("yellow");
    ellipse(balls[i][0], balls[i][1], balls[i][2], balls[i][2]);
  }
  fill("white");
  textSize(35);
  text("SCORE: " + score, 150, 50);
}

function mouseClicked() {
  for (var i = 0; i < balls.length; i++) {
    var d = dist(mouseX, mouseY, balls[i][0], balls[i][1]);
    if (d < radius) {
      Ball(mouseX, mouseY, 25);
      Ball(mouseX, mouseY, 25);
      balls.splice(i, 1);
      score++;
      break;
    }
  }
}



