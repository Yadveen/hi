var g = 0;
var b = 0;
function setup() {
    createCanvas (600, 400);
    background(255);
}

function draw() {
    g = map(mouseX, 0, 600, 0, 255);
    b = map(mouseY, 0, 400, 0, 255);
    //circle
    noStroke();
    fill(255, g, b);
    ellipse(300, 200, 200, 200);
}
