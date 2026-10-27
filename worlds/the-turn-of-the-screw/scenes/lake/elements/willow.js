// A willow at the water's edge, leaning out over the lake: a rough trunk bent toward the water, its long fronds
// hanging down to it, yellowing (metres: x across from its foot, y up); the fronds sway.
g.fillStyle = '#5c5246';
g.beginPath();
g.moveTo(-0.6, 0);
g.quadraticCurveTo(0.4, -2.5, 2.6, -5.2);
g.lineTo(3.4, -5);
g.quadraticCurveTo(1.0, -2.4, 0.6, 0);
g.closePath();
g.fill();
e.layer('crown', { pivot: [3, -5.2], wind: { strength: 0.2, gust: 0.5 }, box: [-3, -10.5, 9.5, -3.5] }, c => {
  e.lib.crown(c, e.rnd, 'willow', 3.2, -7.2, 5, 2.8, 200, 0.42);
});
e.layer('fronds', { pivot: [3, -6], wind: { strength: 0.45, gust: 0.6 }, box: [-2.5, -7.5, 9, 0] }, c => {
  for (let i = 0; i < 160; i++) {
    const x = -1.4 + e.rnd() * 9.4;
    const top = -6.6 + Math.abs(x - 3.2) * 0.25 + e.rnd() * 0.6;
    const len = 2.8 + e.rnd() * 3.2 - Math.abs(x - 3.2) * 0.25;
    c.strokeStyle = ['#a59b44', '#8c8538', '#bcae50', '#7a7434'][Math.floor(e.rnd() * 4)];
    c.lineWidth = 0.035 + e.rnd() * 0.035;
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(x, top);
    c.quadraticCurveTo(x + 0.15, top + len * 0.5, x + 0.05, Math.min(-0.3, top + len));
    c.stroke();
  }
});
