// The apple tree Dad planted: a crooked dark trunk, spreading boughs, and the crown in white-pink blossom — the
// blossom a layer that stirs in the wind; under it, the tin bucket.
g.fillStyle = '#5b463c';
g.beginPath();
g.moveTo(-0.16, 0);
g.bezierCurveTo(-0.12, -0.8, -0.2, -1.4, -0.05, -1.9);
g.lineTo(0.12, -1.9);
g.bezierCurveTo(0.06, -1.3, 0.18, -0.7, 0.16, 0);
g.closePath();
g.fill();
g.strokeStyle = '#5b463c';
g.lineCap = 'round';
const boughs = [
  [0, -1.8, -1.5, -2.8, 0.09],
  [0.05, -1.85, 1.4, -3.0, 0.08],
  [0, -1.9, -0.3, -3.5, 0.08],
  [-0.8, -2.3, -1.9, -2.4, 0.05],
  [0.7, -2.4, 1.9, -2.5, 0.05],
];
for (const [x1, y1, x2, y2, w] of boughs) {
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(x1, y1);
  g.quadraticCurveTo((x1 + x2) / 2, y2 + 0.2, x2, y2);
  g.stroke();
}
// the tin bucket at its foot
g.fillStyle = '#9aa0a4';
g.beginPath();
g.moveTo(0.35, -0.34);
g.lineTo(0.71, -0.34);
g.lineTo(0.66, 0);
g.lineTo(0.4, 0);
g.closePath();
g.fill();
g.fillStyle = '#6f7478';
g.fillRect(0.35, -0.35, 0.36, 0.03);
e.layer('blossom', { pivot: [0, -1.9], wind: { strength: 0.25, gust: 0.4, scale: 3 } }, l => {
  for (let i = 0; i < 70; i++) {
    const a = e.rnd() * Math.PI * 2,
      r = Math.sqrt(e.rnd());
    const x = Math.cos(a) * r * 2.3,
      y = -2.4 + Math.sin(a) * r * 1.05;
    const tone = e.rnd();
    l.fillStyle = tone < 0.4 ? '#f4e6e6' : tone < 0.75 ? '#f0cdd4' : '#e3b3bf';
    l.beginPath();
    l.ellipse(x, y, 0.22 + e.rnd() * 0.35, 0.16 + e.rnd() * 0.22, e.rnd() * 3, 0, Math.PI * 2);
    l.fill();
  }
  l.fillStyle = 'rgba(132,160,108,0.6)';
  for (let i = 0; i < 26; i++) {
    l.beginPath();
    l.ellipse(-2 + e.rnd() * 4, -3.1 + e.rnd() * 1.4, 0.08, 0.04, e.rnd() * 3, 0, Math.PI * 2);
    l.fill();
  }
});
e.at(0, -2.6, 'crown');
