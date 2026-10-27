// A rag rug before the bed: stripes of faded red, blue and cream, fringed at its ends.
const W = 0.8;
const D = 0.36;
const stripes = ['#a4524a', '#d8ccb0', '#5d6d8a', '#d8ccb0', '#a4524a', '#c49a62', '#5d6d8a'];
const n = 15;
for (let i = 0; i < n; i++) {
  g.fillStyle = stripes[i % stripes.length];
  g.fillRect(-W + (i * W * 2) / n, -D, (W * 2) / n + 0.002, D * 2);
}
g.strokeStyle = '#e2d6bc';
g.lineWidth = 0.006;
g.beginPath();
for (let y = -D; y <= D; y += 0.03) {
  g.moveTo(-W, y);
  g.lineTo(-W - 0.04, y);
  g.moveTo(W, y);
  g.lineTo(W + 0.04, y);
}
g.stroke();
