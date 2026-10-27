// The apple tree Dad planted, near us on the right (metres from its foot): a crooked dark trunk leaning a little toward
// the house, its boughs reaching left over the yard, the crown in white-pink blossom with a few new leaves — the
// blossom a layer that stirs in the wind; at its foot the tin bucket, waiting for the evening.
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
// the tin bucket
g.fillStyle = '#a3a9ad';
g.beginPath();
g.moveTo(-0.78, -0.34);
g.lineTo(-0.42, -0.34);
g.lineTo(-0.47, 0);
g.lineTo(-0.73, 0);
g.closePath();
g.fill();
g.fillStyle = '#7c8286';
g.fillRect(-0.79, -0.36, 0.38, 0.035);
g.fillStyle = 'rgba(255,255,255,0.25)';
g.fillRect(-0.7, -0.32, 0.04, 0.3);
g.strokeStyle = '#6f7478';
g.lineWidth = 0.012;
g.beginPath();
g.arc(-0.6, -0.36, 0.17, Math.PI, 0);
g.stroke();
e.layer('blossom', { pivot: [-0.2, -2.3], wind: { strength: 0.22, gust: 0.45, scale: 3 } }, l => {
  for (let i = 0; i < 110; i++) {
    const a = e.rnd() * Math.PI * 2,
      r = Math.sqrt(e.rnd());
    const x = -1.2 + Math.cos(a) * r * 2.7,
      y = -3.55 + Math.sin(a) * r * 1.15;
    const tone = e.rnd();
    l.fillStyle = tone < 0.4 ? '#f6e9e8' : tone < 0.75 ? '#f1d0d7' : '#e5b8c3';
    l.beginPath();
    l.ellipse(x, y, 0.2 + e.rnd() * 0.3, 0.14 + e.rnd() * 0.2, e.rnd() * 3, 0, Math.PI * 2);
    l.fill();
  }
  for (let i = 0; i < 70; i++) {
    l.fillStyle = i % 3 ? '#f9f3f0' : '#de9fb0';
    l.beginPath();
    l.arc(-3.6 + e.rnd() * 4.8, -4.6 + e.rnd() * 2.2, 0.03, 0, Math.PI * 2);
    l.fill();
  }
  l.fillStyle = 'rgba(128,160,100,0.75)';
  for (let i = 0; i < 40; i++) {
    l.beginPath();
    l.ellipse(-3.6 + e.rnd() * 4.6, -4.4 + e.rnd() * 1.9, 0.08, 0.035, e.rnd() * 3, 0, Math.PI * 2);
    l.fill();
  }
});
e.at(-1.2, -3.5, 'crown');
e.at(-0.6, -0.3, 'bucket');
