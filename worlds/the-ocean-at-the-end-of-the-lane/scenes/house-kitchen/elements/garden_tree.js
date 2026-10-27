// An old apple tree on the lawn: a crooked grey trunk, a round dark crown in two layers that stir in the evening air.
g.fillStyle = '#4e4840';
g.beginPath();
g.moveTo(-0.16, 0.02);
g.bezierCurveTo(-0.12, -0.8, -0.3, -1.3, -0.1, -1.9);
g.lineTo(0.08, -1.9);
g.bezierCurveTo(0.0, -1.3, 0.18, -0.8, 0.14, 0.02);
g.closePath();
g.fill();
const crown = (g, shade, dx, dy, s) => {
  g.fillStyle = shade;
  for (let k = 0; k < 14; k++) {
    const a = (k / 14) * Math.PI * 2, r = 0.55 + 0.25 * e.rnd();
    g.beginPath();
    g.arc(dx + Math.cos(a) * r * s, dy + Math.sin(a) * r * 0.75 * s, 0.45 * s, 0, Math.PI * 2);
    g.fill();
  }
  g.beginPath();
  g.ellipse(dx, dy, 0.85 * s, 0.65 * s, 0, 0, Math.PI * 2);
  g.fill();
};
e.layer('back', { pivot: [0, -1.8], wind: 0.15 }, l => crown(l, '#34452f', 0.1, -2.6, 1.05));
e.layer('front', { pivot: [0, -1.8], wind: 0.25 }, l => {
  crown(l, '#425a3a', -0.15, -2.45, 0.85);
  l.fillStyle = '#b8a24c';
  for (let k = 0; k < 10; k++) {
    l.beginPath();
    l.arc(-0.9 + 1.6 * e.rnd(), -3.0 + 1.1 * e.rnd(), 0.05, 0, Math.PI * 2);
    l.fill();
  }
});
