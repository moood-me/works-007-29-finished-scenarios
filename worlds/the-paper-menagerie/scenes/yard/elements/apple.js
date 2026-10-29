// The apple tree Dad planted, near us on the right (metres from its foot): a crooked dark trunk leaning a little toward
// the house, its boughs reaching left over the yard, the crown in white-pink blossom with a few new leaves — the
// blossom a layer that stirs in the wind; at its foot the tin bucket, waiting for the evening. Points: `crown`,
// `bucket`, `fire` (over its rim, where the paper burns).
g.fillStyle = '#5b463c';
g.beginPath();
g.moveTo(-0.17, 0);
g.bezierCurveTo(-0.1, -0.9, -0.3, -1.6, -0.2, -2.3);
g.lineTo(0.0, -2.3);
g.bezierCurveTo(-0.05, -1.5, 0.18, -0.8, 0.17, 0);
g.closePath();
g.fill();
g.strokeStyle = '#5b463c';
g.lineCap = 'round';
for (const [x1, y1, cx, cy, x2, y2, w] of [
  [-0.12, -2.2, -1.2, -2.6, -2.6, -3.3, 0.1],
  [-0.1, -2.25, -0.5, -3.2, -1.0, -4.2, 0.09],
  [-0.08, -2.2, 0.6, -2.9, 1.2, -3.6, 0.08],
  [-1.5, -2.85, -2.6, -2.9, -3.6, -3.0, 0.05],
  [-0.7, -3.5, -1.6, -3.9, -2.2, -4.3, 0.05],
])
  ((g.lineWidth = w), g.beginPath(), g.moveTo(x1, y1), g.quadraticCurveTo(cx, cy, x2, y2), g.stroke());
// the tin bucket (a year on, `sold`, gone rusty)
const rusty = !!e.state.sold;
g.fillStyle = rusty ? '#9a7f6a' : '#a3a9ad';
g.beginPath();
g.moveTo(-0.78, -0.34);
g.lineTo(-0.42, -0.34);
g.lineTo(-0.47, 0);
g.lineTo(-0.73, 0);
g.closePath();
g.fill();
g.fillStyle = rusty ? '#7d5a44' : '#7c8286';
g.fillRect(-0.79, -0.36, 0.38, 0.035);
if (rusty) {
  for (let i = 0; i < 14; i++) {
    g.fillStyle = i % 2 ? 'rgba(150,80,44,0.55)' : 'rgba(120,64,40,0.5)';
    g.beginPath();
    g.arc(-0.74 + e.rnd() * 0.28, -0.3 + e.rnd() * 0.27, 0.012 + e.rnd() * 0.02, 0, Math.PI * 2);
    g.fill();
  }
}
g.fillStyle = 'rgba(255,255,255,0.25)';
g.fillRect(-0.7, -0.32, 0.04, 0.3);
g.strokeStyle = '#6f7478';
g.lineWidth = 0.012;
g.beginPath();
g.arc(-0.6, -0.36, 0.17, Math.PI, 0);
g.stroke();
e.layer('blossom', { pivot: [-0.2, -2.3], wind: { strength: 0.22, gust: 0.45, scale: 3 } }, l => {
  // clumps of blossom along the boughs, each clump many small flowers, white and pink, and a few new leaves
  const clumps = [];
  for (let i = 0; i < 46; i++) {
    const a = e.rnd() * Math.PI * 2,
      r = Math.sqrt(e.rnd());
    clumps.push([-1.2 + Math.cos(a) * r * 2.6, -3.5 + Math.sin(a) * r * 1.05, 0.25 + e.rnd() * 0.25]);
  }
  for (const [cx, cy, cr] of clumps) {
    for (let k = 0; k < 16; k++) {
      const t = e.rnd();
      l.fillStyle = t < 0.45 ? '#f7eeec' : t < 0.8 ? '#f0d2d9' : '#e2adbb';
      l.beginPath();
      l.ellipse(cx + (e.rnd() - 0.5) * cr * 2, cy + (e.rnd() - 0.5) * cr * 1.3, 0.05 + e.rnd() * 0.06, 0.04 + e.rnd() * 0.04, e.rnd() * 3, 0, Math.PI * 2);
      l.fill();
    }
    l.fillStyle = 'rgba(126,158,98,0.85)';
    for (let k = 0; k < 4; k++) {
      l.beginPath();
      l.ellipse(cx + (e.rnd() - 0.5) * cr * 2, cy + (e.rnd() - 0.5) * cr, 0.07, 0.03, e.rnd() * 3, 0, Math.PI * 2);
      l.fill();
    }
  }
});
e.at(-1.2, -3.5, 'crown');
e.at(-0.6, -0.3, 'bucket');
e.at(-0.6, -0.4, 'fire');
