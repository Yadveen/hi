var trcol = {
    r: 0,
    g: 0,
    b: 0
}

var rcol = {
    r: 0,
    g: 0,
    b: 0
}

var col = {
    r: 0,
    g: 0,
    b: 0
}

var pos = {
    x: 0,
    y: 0,
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0
}

var seiz = {
    x: 0,
    y: 0
}

function setup() {
    createCanvas (800, 600);
	background(0);
}

function draw() {
//backgr
    col.r = random(0, 255);
    col.g = random(0, 255);
    col.b = random(0, 255);
    background(col.r, col.g, col.b);
    
//rect
    noStroke();
    rcol.r = random(0, 255);
    rcol.g = random(0, 255);
    rcol.b = random(0, 255);
    fill(rcol.r, rcol.g, rcol.b);
    pos.x = random(0, width);
    pos.y = random(0, height);
    seiz.x = random(1, 50);
    seiz.y = random(1, 50);
    rect(pos.x, pos.y, seiz.x, seiz.y);
	

}
