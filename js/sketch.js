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

  drawUpCurve();

  drawDownCurve();
}

/* CUADRÍCULA */

function drawGrid() {

  stroke(50);

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

  line(-width, 0, width, 0);

  line(0, -height, 0, height);
}

/* CURVA HACIA ARRIBA */

function drawUpCurve() {

  stroke(0, 150, 255);

  strokeWeight(3);

  noFill();

  beginShape();

  for (let x = -4; x <= 4; x += 0.05) {

    let y = x * x - 2 ;

    vertex(
      x * 35,
      -y * 8
    );
  }

  endShape();

  /* tendencia izquierda */

  noStroke();

fill(0,150,255);

circle(-120, -90, 4);
circle(-130, -105, 4);
circle(-140, -120, 4);

circle(120, -90, 4);
circle(130, -105, 4);
circle(140, -120, 4);

  /* tendencia derecha */

circle(-120, -90, 4);
circle(-130, -105, 4);
circle(-140, -120, 4);

circle(120, -90, 4);
circle(130, -105, 4);
circle(140, -120, 4);
}

/* CURVA HACIA ABAJO */

function drawDownCurve() {

  stroke(255, 100, 100);

  strokeWeight(3);

  noFill();

  beginShape();

  for (let x = -4; x <= 4; x += 0.05) {

    let y = -x * x + 4;

    vertex(
      x * 35,
      -y * 8
    );
  }

  endShape();

  /* tendencia izquierda */

  noStroke();

fill(255,100,100);
  
circle(-120, -5, 4);
circle(-130, 5, 4);
circle(-140, 15, 4);

circle(120, -5, 4);
circle(130, 5, 4);
circle(140, 15, 4);
  

  /* tendencia derecha */

circle(-120, -5, 4);
circle(-130, 5, 4);
circle(-140, 15, 4);

circle(120, -5, 4);
circle(130, 5, 4);
circle(140, 15, 4);
}
