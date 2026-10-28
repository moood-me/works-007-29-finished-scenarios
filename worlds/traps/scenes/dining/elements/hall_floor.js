// The hall's floor from above: black and white stone tiles laid on the diagonal.
const W = 1.8;
const D = 1.55;
g.fillStyle = '#e7e0d0';
g.fillRect(-W, -D, W * 2, D * 2);
g.save();
g.rotate(Math.PI / 4);
g.fillStyle = '#2f2b29';
g.beginPath();
const s = 0.3;
for (let i = -12; i < 12; i++) {
  for (let j = -12; j < 12; j++) {
    if ((i + j) % 2 === 0) g.rect(i * s, j * s, s, s);
  }
}
g.fill();
g.restore();
