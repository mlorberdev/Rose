// let v = [];
let cols = 600, rows = 30;
let td = 180 * 15 / cols; // theta density
let rd = 1 / rows; // r density

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  colorMode(HSB);
  angleMode(DEGREES);
  stroke(205, 50, 100);
  strokeWeight(4);
}

function draw() {
  background(230, 50, 15);
  orbitControl(4, 4);
  rotateX(-30);

  for (let r = 0; r <= 1; r += .02) {
    stroke(340, -r * 50 + 100, r * 50 + 50);
    beginShape(POINTS);
    // v.push([])
    for (let theta = -2 * 180; theta <= 180 * 15; theta += 3) {
      let phi = (180/2) * Math.exp(-theta / (8*180));
      let petalcut = 1 - (1/2) * pow((5/4) * pow(1 - ((3.6 * theta % 360) / 180),2)-1/4, 2);
      let hangdown = 2 * pow(r, 2) * pow(1.3 * r - 1, 2) * sin(phi);

      if (0 < petalcut * (r * sin(phi) + hangdown * cos(phi)) ) {
        let pX = 250 * petalcut * (r * sin(phi) + hangdown * cos(phi)) * sin(theta);
        let pY = -250 * petalcut * (r * cos(phi) - hangdown * sin(phi));
        let pZ = 250 * petalcut * (r * sin(phi) + hangdown * cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }

      // let pos = createVector[pX, pY, pZ];
      // v[r].push(pos);
    }

    endShape();
  }
  // v = [];
}