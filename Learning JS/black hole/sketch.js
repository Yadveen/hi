var blackhole = {
    bh: 1,
    r: 255,
    g: 255,
    b: 255,
    a: 0,
};

function setup() {
    createCanvas (600, 400);
    background(255, 255, 255);
}

function draw() {
    //black hole
    fill(blackhole.r, blackhole.g, blackhole.b, blackhole.a);
    ellipse(300, 200, blackhole.bh, blackhole.bh);
    blackhole.bh = blackhole.bh + 1;
    blackhole.r=blackhole.r-1;
    blackhole.g=blackhole.g-2;
    blackhole.b=blackhole.b-10;
    blackhole.a=blackhole.a+1;
}
