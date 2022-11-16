

let angle = 0;
let slider;

function setup() {
  createCanvas(640, 720);
  noLoop()
  smooth();
}

function draw() {
  background(240)

  angle = 0.6;
  stroke(0);
  strokeWeight(5);
  translate(width * 0.5, height*0.8);
  rotate(-0.2)
  branch(150);
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function branch(len) {
  strokeWeight(len/10);
  lineLength = 0
  line(0, 0, 0, -len)
  translate(0, -len);
  if (len > 8) {
    push();
    rotate(angle*0.5);
    branch((len) * 0.67 * 1.1 * getRandomArbitrary(0.8, 0.9));
    pop();
    push();
    rotate(-angle*1.7);
    branch((len) * 0.67 * getRandomArbitrary(0.8, 1.2));
    pop();
  }

  if (len < 8) {
    push();
    rotate(angle*0.5);
    finalbranch(len);
    pop();
    push();
    rotate(-angle*1.5);
    finalbranch(len);
    pop();
  }
}

function finalbranch(len) {
  stroke('rgb(255,192,203)');
  fill('rgb(255,192,203)');
  strokeWeight(1)
  ellipse(0, 0, 6, 20)
  translate(0, -len*5)
}
