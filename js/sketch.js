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

  drawG();
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

/* PARÁBOLA HACIA ARRIBA */

function drawF() {

  stroke(0, 150, 255);

  strokeWeight(3);

  noFill();

  beginShape();

  for (let x = -5; x <= 5; x += 0.05) {

    let y = 0.35 * x * x;

    vertex(
      x * 40,
      -y * 35
    );
  }

  endShape();

  /* puntos infinitos */

  noStroke();

  fill(0,150,255);

  circle(-210, -210, 5);
  circle(-220, -230, 5);
  circle(-230, -250, 5);

  circle(210, -210, 5);
  circle(220, -230, 5);
  circle(230, -250, 5);
}

/* PARÁBOLA HACIA ABAJO */

function drawG() {

  stroke(255, 100, 100);

  strokeWeight(3);

  noFill();

  beginShape();

  for (let x = -5; x <= 5; x += 0.05) {

    let y = -0.18 * x * x + 5;

    vertex(
      x * 40,
      -y * 30
    );
  }

  endShape();

  /* puntos infinitos */

  noStroke();

  fill(255,100,100);

  circle(-210, 40, 5);
  circle(-220, 55, 5);
  circle(-230, 70, 5);

  circle(210, 40, 5);
  circle(220, 55, 5);
  circle(230, 70, 5);
}
