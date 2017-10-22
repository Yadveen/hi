var ball = {
	x: 50,
	y: 200,
	xspeed: 3,
	yspeed: 2
}

var col = {
	r: 0,
	g: 0,
	b: 0
}

var score = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
	background (0, 0, 0);
	move();
	bounce();
	display();
}

function bounce () {
	if (ball.x > 575 || ball.x < 25) {
		ball.xspeed = -ball.xspeed;
	}
	if (ball.y > 375 || ball.y < 25) {
	    ball.yspeed = -ball.yspeed;
	}
}

function move () {
	ball.x = ball.x + ball.xspeed;
	ball.y = ball.y + ball.yspeed;
}

function display () {
	strokeWeight(2);
	stroke(0);
	fill(230, 0, 0);
	ellipse(ball.x, ball.y, 50);
}

// function mousePressed () {
// 	if (mouseX = ball && mouseY = ball) 
// 	ball.xspeed = ball.xspeed + 1;
// 	ball.yspeed = ball.yspeed + 1;
// 	score = score + 1;
// }