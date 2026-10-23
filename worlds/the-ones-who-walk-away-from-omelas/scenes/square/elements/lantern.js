// A paper lantern of the festival hung on the garland cord: a round pale-amber body, ribbed, a dark cap and foot; by
// day it is paper, at evening it glows (its glow dimmed up by `evening` — animate)
e.layer('lamp', { pivot: [0, -0.6], wind: { strength: 0.25, gust: 0.4 } }, g => {
  g.fillStyle = '#3d342c';
  g.fillRect(-0.004, -0.62, 0.008, 0.1);
  g.fillRect(-0.08, -0.52, 0.16, 0.04);
  g.fillStyle = '#f0c986';
  g.beginPath();
  g.ellipse(0, -0.3, 0.2, 0.22, 0, 0, Math.PI * 2);
  g.fill();
  g.strokeStyle = '#d9a964';
  g.lineWidth = 0.012;
  for (const k of [-0.1, 0, 0.1]) {
    g.beginPath();
    g.ellipse(0, -0.3, Math.abs(k) * 1.6 + 0.02, 0.22, 0, 0, Math.PI * 2);
    g.stroke();
  }
  g.fillStyle = '#3d342c';
  g.fillRect(-0.07, -0.1, 0.14, 0.04);
  e.light(0, -0.3, 0.35, '#ffc070', 1, 'glow');
});
