// The hunger birds sitting round the circle, close, waiting (copies of one): not birds, black ragged shadows the
// shape of a hunched rook as tall as a child's waist — a hooked beak, a hood of a head drawn into the shoulders, a
// body of torn rags hanging to the grass, its tatters stirring (the layer in the wind); dark, never black.
const ink = '#25222c', deep = '#1b1920';
g.fillStyle = ink;
g.beginPath();
g.moveTo(-0.08, -0.62);
g.quadraticCurveTo(0.08, -0.7, 0.17, -0.6);
g.lineTo(0.3, -0.56);
g.lineTo(0.17, -0.53);
g.quadraticCurveTo(0.24, -0.4, 0.2, -0.25);
g.lineTo(-0.2, -0.25);
g.quadraticCurveTo(-0.24, -0.5, -0.08, -0.62);
g.fill();
e.layer('rags', { pivot: [0, -0.4], wind: { strength: 0.25, gust: 0.6 }, box: [-0.36, -0.5, 0.32, 0.03] }, g => {
  g.fillStyle = ink;
  g.beginPath();
  g.moveTo(-0.21, -0.42);
  g.quadraticCurveTo(0, -0.47, 0.21, -0.42);
  for (let k = 0; k <= 9; k++) {
    const x = 0.24 - k * 0.055, y = (k % 2 ? -0.02 : 0.01) - 0.06 * e.rnd();
    g.lineTo(x + 0.03, y - 0.08);
    g.lineTo(x, y);
  }
  g.lineTo(-0.34, -0.12);
  g.closePath();
  g.fill();
  g.strokeStyle = deep;
  g.lineWidth = 0.012;
  for (let k = 0; k < 6; k++) {
    const x = -0.18 + 0.07 * k;
    g.beginPath();
    g.moveTo(x, -0.38);
    g.lineTo(x - 0.02, -0.06);
    g.stroke();
  }
});
// a dull eye
g.fillStyle = '#6e6670';
g.beginPath();
g.arc(0.1, -0.6, 0.012, 0, Math.PI * 2);
g.fill();
