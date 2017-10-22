function setup() {
    createCanvas(600, 600);
    background(255, 255, 255);
}

function draw() {
    
    //pole
    line(200, 0, 200, 600);
    line(400, 0, 400, 600);
    line(0, 200, 600, 200);
    line(0, 400, 600, 400);
    
    //pencil
    fill(0, 0, 0);
    ellipse(mouseX, mouseY, 10, 10);
    
}
function mousePressed () {
    background(255, 255, 255);
}