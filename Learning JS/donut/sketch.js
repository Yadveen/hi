function setup() {
   createCanvas (600, 400);
}

function draw() {
   background(250, 54, 67);
	donut(200, 200, 75, 105, 25);
	donut(300, 300, 50, 200, 20);
	donut(450, 100, 100, 95, 30);
}

function donut(x, y, seiz, col, thickness) {
	strokeWeight(0.5);
	stroke(255);
	fill(255, col, 0);
	ellipse(x, y, seiz);
	fill(250, 54, 67);
	ellipse(x, y, thickness);
	noStroke();
	fill(255);
	ellipse(x+seiz/5, y-seiz/4, 5);
	ellipse(x+seiz/7, y-seiz/5, 2);
}