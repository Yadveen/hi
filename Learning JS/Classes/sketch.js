var bubble1;
var bubble2;

function setup() {
	createCanvas (600, 400);
	background(255);
	bubble1 = new bubble();
	bubble2 = new bubble();
}

function draw() {
	background(255);
	bubble1.show(255, 0, 0);
	bubble1.move();
	bubble2.show(0, 255, 0);
	bubble2.move();
}

class bubble {
	constructor() {
		this.x = random(0, width);
		this.y = random(0, height);
	}
	
	show(r, g, b) {
		noStroke();
		fill (r, g, b);
		ellipse (this.x, this.y, 20, 20);
	}
	
	move() {
		this.x = this.x + random(-3, 3);
		this.y = this.y + random(-3, 3);
	}
}
