var on = false;

function setup() {
    createCanvas (600, 400);
}

function draw() {
	background(0);
    rectMode(CENTER);
	if (on) {
		background(200);
	}
	fill(105);
	if (mouseX > 275 && mouseX < 325 && mouseY > 175 && mouseY < 225) {
	fill(205);
    }
	rect(300, 200, 50, 50);
}

function mousePressed() {
	if (mouseX > 275 && mouseX < 325 && mouseY > 175 && mouseY < 225) {
    on = !on;
	}
}	