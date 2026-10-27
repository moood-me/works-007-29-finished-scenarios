// The old maple at the left of the yard, from its foot (metres): the trunk and the boughs reaching right over the
// yard; its crown three layers swaying apart in the night air.
g.fillStyle = '#4d4036';
g.beginPath();
g.moveTo(-0.3, 0);
g.quadraticCurveTo(-0.22, -1.6, -0.18, -2.7);
g.quadraticCurveTo(0.9, -3.3, 2.6, -3.5);
g.lineTo(2.6, -3.35);
g.quadraticCurveTo(1.0, -3.0, 0.18, -2.4);
g.quadraticCurveTo(0.26, -1.3, 0.34, 0);
g.closePath();
g.fill();
g.lineCap = 'round';
g.strokeStyle = '#4d4036';
g.lineWidth = 0.18;
g.beginPath();
g.moveTo(0, -2.6);
g.quadraticCurveTo(-0.5, -3.8, -0.4, -5.0);
g.stroke();
const crown = (name, cx, cy, rx, ry, n, pivot, s) => {
  e.layer(name, { pivot, wind: { strength: s, gust: 0.5 }, box: [cx - rx - 1, cy - ry - 1, cx + rx + 1, cy + ry + 1] }, c => {
    for (let i = 0; i < n; i++) {
      const a = e.rnd() * Math.PI * 2, r = Math.sqrt(e.rnd());
      c.fillStyle = e.rnd() < 0.5 ? '#3f5a3c' : '#4f6b45';
      c.beginPath();
      c.ellipse(cx + Math.cos(a) * r * rx, cy + Math.sin(a) * r * ry, 0.5 + e.rnd() * 0.45, 0.4 + e.rnd() * 0.35, e.rnd() * 3, 0, Math.PI * 2);
      c.fill();
    }
  });
};
crown('back', -0.4, -4.5, 2.2, 1.6, 60, [-0.2, -2.8], 0.06);
crown('mid', 0.8, -3.9, 2.0, 1.1, 50, [0.1, -2.7], 0.08);
crown('front', 2.0, -3.4, 1.2, 0.7, 30, [1.2, -3.2], 0.11);
