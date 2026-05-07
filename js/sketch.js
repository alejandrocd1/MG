function setup() {
  let container = document.getElementById("canvasContainer");

  let canvas = createCanvas(
    container.offsetWidth,
    container.offsetHeight
  );

  canvas.parent("canvasContainer");
}

function draw() {
  background(20);

  stroke(255);

  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
}
