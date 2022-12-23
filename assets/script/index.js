let v = [];
let cols = 450, rows = 25;
let td = 180 * 15 / cols; // theta density
let rd = 1 / rows; // r density

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  colorMode(HSB);
  angleMode(DEGREES);
  noStroke();

  for (let r = 0; r <= rows; r++) {
    v.push([]);
    for (let theta = 0; theta <= cols; theta++) {
      let phi = (180 / 2) * Math.exp(-theta * td / (8 * 180));
      let petalcut = 1 - (1 / 2) * pow((5 / 4) * pow(1 - ((3.6 * theta * td % 360) / 180), 2), 2);
      let hangdown = 2 * pow(r * rd, 2) * pow(1.3 * r * rd - 1, 2) * sin(phi);
      let pX = (250 * petalcut * (r * rd * sin(phi)) * sin(theta * td));
      let pY = (-250 * petalcut * (r * rd * cos(phi) - hangdown * sin(phi)));
      let pZ = (250 * petalcut * (r * rd * sin(phi)) * cos(theta * td));
      let pos = createVector(pX, pY, pZ);
      v[r].push(pos);
    }
  }

}

function draw() {
  background(230, 50, 15);
  orbitControl(4, 4);
  rotateX(-30);



  for (let r = 0; r < v.length; r++) {
    fill(340, 100, -20 + r * rd * 120)
    for (let theta = 0; theta < v[r].length; theta++) {
      if (r < v.length - 1 && theta < v[r].length - 1) {
        beginShape();
        vertex(v[r][theta].x, v[r][theta].y, v[r][theta].z);
        vertex(v[r + 1][theta].x, v[r + 1][theta].y, v[r + 1][theta].z);
        vertex(v[r + 1][theta + 1].x, v[r + 1][theta + 1].y, v[r + 1][theta + 1].z);
        vertex(v[r][theta + 1].x, v[r][theta + 1].y, v[r][theta + 1].z);
        endShape(CLOSE);
      }
    }
  }
}