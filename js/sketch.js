function setup() {
  let canvas = createCanvas(window.innerWidth, window.innerHeight - 140);
  canvas.parent(document.body);

  // Rectas iniciales
  line1 = [
    { x: -2, y: -2 },
    { x: 2, y: 2 }
  ];

  line2 = [
    { x: -2, y: 2.8 },
    { x: 2, y: -0.8 }
  ];
}
