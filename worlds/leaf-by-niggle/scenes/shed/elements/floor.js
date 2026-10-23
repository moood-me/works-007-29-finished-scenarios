// The shed's floor from above (its middle at distance 3.35, y toward us): broad old boards running back to front, worn
// paler where he walks, spattered with paint under the canvas and the platform.
g.fillStyle = '#5d4d3c';
g.fillRect(-3.25, -2.3, 6.5, 4.6);
const tones = ['#6e5c48', '#685643', '#75624d', '#635240'];
const B = 0.22;
for (let x = -3.25; x < 3.25; x += B) {
  let y = -2.3 - e.rnd() * 1.2;
  while (y < 2.3) {
    const len = 1.4 + e.rnd() * 2.2;
    g.fillStyle = tones[Math.floor(e.rnd() * tones.length)];
    g.fillRect(x + 0.008, y + 0.008, B - 0.016, len - 0.016);
    y += len;
  }
}
g.fillStyle = 'rgba(190,170,140,0.14)';
g.beginPath();
g.ellipse(0.9, 0.2, 0.9, 2.0, 0.25, 0, Math.PI * 2);
g.fill();
// paint spatters: greens, greys, an ochre, a few white
const drops = ['#7d9a62', '#a6ad7c', '#8c8c86', '#c8a058', '#e6e0cf', '#5f7d6a'];
for (let i = 0; i < 140; i++) {
  const x = -2.9 + e.rnd() * 3.6;
  const y = -2.25 + e.rnd() * 1.4;
  g.fillStyle = drops[Math.floor(e.rnd() * drops.length)];
  g.globalAlpha = 0.5 + e.rnd() * 0.4;
  g.beginPath();
  g.ellipse(x, y, 0.008 + e.rnd() * 0.025, 0.006 + e.rnd() * 0.02, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
