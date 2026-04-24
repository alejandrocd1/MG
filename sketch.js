let points = [];
let selected = null;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  // Punto central fijo (0,2)
  points.push({ x: 0, y: 2, fixed: true });

  // Puntos iniciales
  points.push({ x: 1, y: 1 });
  points.push({ x: 2, y: 0.5 });
}

function draw() {
  background(20);

  translate(width / 2, height / 2);
  scale(50, -50);

  drawAxes();
  drawRealFunction();
  drawStudentCurve();
  drawPoints();
}

function drawAxes() {
  stroke(150);
  line(-width, 0, width, 0);
  line(0, -height, 0, height);
}

function drawRealFunction() {
  stroke(0, 150, 255);
  noFill();
  beginShape();
  for (let x = -10; x <= 10; x += 0.1) {
    let y = 2 / (x * x + 1);
    vertex(x, y);
  }
  endShape();
}

function drawStudentCurve() {
  stroke(0, 255, 100);
  noFill();
  beginShape();

  let sorted = points.slice().sort((a, b) => a.x - b.x);

  for (let p of sorted) {
    vertex(p.x, p.y);
  }

  // Simetría automática
  for (let i = sorted.length - 1; i >= 0; i--) {
    let p = sorted[i];
    if (p.x !== 0) vertex(-p.x, p.y);
  }

  endShape();
}

function drawPoints() {
  fill(255);
  noStroke();
  for (let p of points) {
    ellipse(p.x, p.y, 0.15);
    if (p.x !== 0) ellipse(-p.x, p.y, 0.15);
  }
}

function mousePressed() {
  let mx = (mouseX - width / 2) / 50;
  let my = -(mouseY - height / 2) / 50;

  for (let p of points) {
    if (dist(mx, my, p.x, p.y) < 0.3 && !p.fixed) {
      selected = p;
      return;
    }
  }

  // Añadir nuevo punto
  points.push({ x: mx, y: my });
}

function mouseDragged() {
  if (selected) {
    selected.x = (mouseX - width / 2) / 50;
    selected.y = -(mouseY - height / 2) / 50;
  }
}

function mouseReleased() {
  selected = null;
}
