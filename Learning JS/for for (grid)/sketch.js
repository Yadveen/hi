function setup() {
    createCanvas (600, 400);
    background(0);
}

function draw() {
	stroke(255);
	strokeWeight(2);
    for (x = 0; x <= width; x+=50) {
		for (y = 0; y <= height; y+=50){
			fill(random(255), 0, random(255));
			ellipse(x, y, 25, 25);
		}
	}
}
