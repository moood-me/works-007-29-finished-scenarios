// Bunches of herbs hung upside down to dry from a string along the beam: sage, lavender, thyme, a bay sprig.
g.strokeStyle = '#8a7a5c';
g.lineWidth = 0.008;
g.beginPath();
g.moveTo(-0.7, 0);
g.quadraticCurveTo(0, 0.05, 0.7, 0);
g.stroke();
const kinds = [['#7d8d6a', '#9aa585'], ['#7f6f9a', '#a08cc0'], ['#6a7a52', '#89956c'], ['#4f6a3e', '#6d8a52']];
for (let b = 0; b < 5; b++) {
  const x = -0.55 + b * 0.27, [stem, leaf] = kinds[b % kinds.length], len = 0.32 + 0.15 * e.rnd();
  g.fillStyle = '#a58a5a';
  g.fillRect(x - 0.015, 0.02, 0.03, 0.03);
  for (let k = 0; k < 9; k++) {
    const dx = (e.rnd() - 0.5) * 0.14, l = len * (0.7 + 0.3 * e.rnd());
    g.strokeStyle = stem;
    g.lineWidth = 0.008;
    g.beginPath();
    g.moveTo(x, 0.05);
    g.quadraticCurveTo(x + dx * 0.5, 0.05 + l * 0.5, x + dx, 0.05 + l);
    g.stroke();
    g.fillStyle = leaf;
    for (let j = 1; j < 4; j++) {
      g.beginPath();
      g.ellipse(x + dx * (j / 3.5), 0.05 + l * (j / 3.5) + 0.05, 0.016, 0.03, dx, 0, Math.PI * 2);
      g.fill();
    }
  }
}
