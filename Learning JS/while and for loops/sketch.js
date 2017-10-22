function setup() {
    createCanvas(600, 400);
    background(0);
}

function draw() {
	var x = 25;
    while (x < width) {
		fill(255);
		ellipse(x, 200, 50, 50);
		x = x + 50;
	}
	for (var y = 0; y <= height; y+=50) {
		fill(105);
		ellipse(300, y, 50, 50);
	}
	
}
