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

  for (let x = -6; x <= 6; x += 0.05) {

    let y = 0.35 * x * x;

    vertex(
      x * 40,
      -y * 35
    );
  }

  endShape();

  /* tendencia izquierda */
  noStroke();

  fill(0,150,255);

  circle(-215, -250, 4);
  circle(-225, -270, 4);
  circle(-235, -290, 4);

  /* tendencia derecha */

  circle(215, -250, 4);
  circle(225, -270, 4);
  circle(235, -290, 4);
}

/* g(x)=-0.5x²+6 */

function drawG() {

  stroke(255, 100, 100);

  strokeWeight(3);

  noFill();

  beginShape();

  for (let x = -6; x <= 6; x += 0.05) {

    let y = -0.18 * x * x + 5;

    vertex(
      x * 40,
      -y * 30
    );
  }

  endShape();

  /* tendencia izquierda */

  noStroke();

  fill(255,100,100);

  circle(-215, 55, 4);
  circle(-225, 70, 4);
  circle(-235, 85, 4);

  /* tendencia derecha */

  circle(215, 55, 4);
  circle(225, 70, 4);
  circle(235, 85, 4);
}
