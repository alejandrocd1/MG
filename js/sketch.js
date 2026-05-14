function setup() {

  let container =
    document.getElementById("canvasContainer");

  let canvas = createCanvas(
    container.offsetWidth,
    container.offsetHeight
  );

  canvas.parent("canvasContainer");
}

function draw() {

  background(20);

  translate(width / 2, height / 2);

  drawGrid();

  drawAxes();

  drawF();

  drawInfinityDots();
}

/* CUADRÍCULA */

function drawGrid() {

  stroke(60);

  strokeWeight(1);

  for (let x = -width; x < width; x += 25) {
    line(x, -height, x, height);
  }

  for (let y = -height; y < height; y += 25) {
    line(-width, y, width, y);
  }
}

/* EJES */

function drawAxes() {

  stroke(255);

  strokeWeight(2);

  // eje X
  line(-width, 0, width, 0);

  // eje Y
  line(0, -height, 0, height);
}

/* f(x)=x² */

function drawF() {

  stroke(0, 150, 255);

  strokeWeight(3);

  noFill();

  beginShape();

  for (let x = -5; x <= 5; x += 0.1) {

    let y = x * x;

    vertex(
      x * 40,
      -y * 20
    );
  }

  endShape();
}

/* g(x)=-0.5x²+6 */

function drawG() {

  stroke(255, 80, 80);

  strokeWeight(3);

  noFill();

  beginShape();

  for (let x = -5; x <= 5; x += 0.1) {

    let y = -0.5 * x * x + 6;

    vertex(
      x * 40,
      -y * 20
    );
  }

  endShape();
}
function drawInfinityDots() {

  fill(255);

  noStroke();

  textSize(24);

  // arriba izquierda
  text("...", -120, -120);

  // arriba derecha
  text("...", 90, -120);

  // abajo izquierda
  text("...", -140, 140);

  // abajo derecha
  text("...", 110, 140);
}
