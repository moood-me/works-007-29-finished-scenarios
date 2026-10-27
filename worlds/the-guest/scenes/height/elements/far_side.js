// The valley's far side, beyond Tingit, and the hills going on south-east (here 9 km off, their foot on the valley
// floor): long bare brown-grey slopes, snow still on their tops. Metres;
// the foot at y 0.
const top = x => 700 + 150 * Math.sin(x * 0.0011 + 0.4) + 80 * Math.sin(x * 0.0037 + 1.3) + 25 * Math.sin(x * 0.013);
g.fillStyle = '#9e9d9a';
g.beginPath();
g.moveTo(-9000, 60);
for (let x = -9000; x <= 9000; x += 40) g.lineTo(x, -top(x) * (1 - 0.65 * Math.max(0, Math.min(1, (x - 3000) / 6000))));
g.lineTo(9000, 60);
g.closePath();
g.fill();
// snow on the crest, ragged
g.fillStyle = '#e4e8ee';
g.beginPath();
g.moveTo(-9000, -top(-9000));
for (let x = -9000; x <= 9000; x += 40) {
  const k = 1 - 0.65 * Math.max(0, Math.min(1, (x - 3000) / 6000));
  g.lineTo(x, -top(x) * k);
}
for (let x = 9000; x >= -9000; x -= 40) {
  const k = 1 - 0.65 * Math.max(0, Math.min(1, (x - 3000) / 6000));
  const h = top(x) * k;
  g.lineTo(x, -h + Math.max(0, h - 640) * (0.75 + 0.15 * Math.sin(x * 0.0071 + 1) + 0.1 * Math.sin(x * 0.023)));
}
g.closePath();
g.fill();
// darker bands along the slopes, the ground folding
for (let i = 0; i < 40; i++) {
  const x = -9000 + e.rnd() * 18000;
  const k = 1 - 0.65 * Math.max(0, Math.min(1, (x - 3000) / 6000));
  const h = top(x) * k;
  g.fillStyle = e.rnd() < 0.5 ? '#928f88' : '#a8a59f';
  g.globalAlpha = 0.7;
  g.beginPath();
  g.ellipse(x, -h * (0.25 + e.rnd() * 0.35), 300 + e.rnd() * 700, 20 + e.rnd() * 50, 0, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
