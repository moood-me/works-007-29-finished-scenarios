// Stacks of shoeboxes standing free on the floor, each a part at its own depth (metres from its own foot, y up
// negative): by the back wall to the left of the window, two to the right of it, one nearer on the right, its top
// row ragged where boxes were taken down. The fronts are box ends; a top row of cartons tied with string on one.
const stack = (w, h, ragged) => g2 => {
  e.lib.boxes(g2, e, -w / 2, w / 2, -h, 0);
  if (ragged) {
    g2.save();
    g2.globalCompositeOperation = 'destination-out';
    for (let x = -w / 2; x < w / 2; x += 0.21) if (e.rnd() < 0.4) g2.fillRect(x, -h - 0.01, 0.21, 0.125);
    g2.restore();
  }
  g2.fillStyle = 'rgba(30,22,18,0.35)';
  g2.fillRect(-w / 2, -0.06, w, 0.06);
};
const cartons = (w, h) => g2 => {
  for (let x = -w / 2; x < w / 2 - 0.1; x += 0.62) {
    g2.fillStyle = '#b08f62';
    g2.fillRect(x, -h, 0.6, h);
    g2.fillStyle = 'rgba(70,50,30,0.35)';
    g2.fillRect(x, -h, 0.6, 0.03);
    g2.fillRect(x + 0.29, -h, 0.02, h);
    g2.strokeStyle = '#e2d6b6';
    g2.lineWidth = 0.008;
    g2.beginPath();
    g2.moveTo(x + 0.15, -h);
    g2.lineTo(x + 0.15, 0);
    g2.moveTo(x, -h / 2);
    g2.lineTo(x + 0.6, -h / 2);
    g2.stroke();
  }
};
e.part(-2.45, 0.1, stack(1.6, 1.95, true), [-0.82, -2.1, 0.82, 0.02]);
e.part(-2.45, -0.02, cartons(1.6, 0.42), [-0.82, -0.45, 0.82, 0.02]);
e.part(2.25, 0, stack(1.9, 2.3, true), [-0.97, -2.45, 0.97, 0.02]);
e.part(2.7, -1.6, stack(1.1, 1.38, true), [-0.57, -1.52, 0.57, 0.02]);
