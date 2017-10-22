var ball1;
var score = 0;
var record = 0;

function setup() {
	createCanvas(1200, 700);
	background(0);
	ball1 = new ball();
}

function draw() {
	background(0);
	ball1.show();
	ball1.move();
	fill(255);
	textSize(30);
	text(score, width - 100, height - 100);
	text(record, width - 100, height - 150);
}

function mousePressed() {
	ball1.clicked();
}

class ball {
	constructor() {
		this.r = 75;
		this.a = 5;
		this.x = random(this.r, width - this.r);
		this.y = height + this.r;
	}


  clicked() {
    let d = dist(mouseX, mouseY, this.x, this.y);
	    if (d < this.r) {
	    	score = score + 1;
	    	this.a = this.a + 0.25;
	    	this.r = this.r - 2;
	    	this.x = random(this.r, width - this.r);
			this.y = height + this.r;
	    }
	}

	show() {
		noStroke();
		fill(255, 50, 50);
		ellipse(this.x, this.y, this.r, this.r);
	}

	move() {
		this.y = this.y - this.a;
		if (this.y < -this.r) {
			this.x = random(this.r, width - this.r);
			this.y = height + this.r;
			this.a = 5;
			this.r = 75;
			if (score > record) {
				record = score;
			}
			score = 0;
		}
	}
}