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
  // each frond a string of narrow leaves hanging from the crown, longest under its middle, tapering toward the water
  for (let i = 0; i < 110; i++) {
    const x = -1.4 + e.rnd() * 9.4;
    const top = -6.6 + Math.abs(x - 3.2) * 0.25 + e.rnd() * 0.6;
    const len = 2.4 + e.rnd() * 3 - Math.abs(x - 3.2) * 0.25;
    const bow = (e.rnd() - 0.5) * 0.3;
    const tone = Math.floor(e.rnd() * 4);
    for (let t = 0; t < 1; t += 0.06) {
      const y = Math.min(-0.3, top + len * t);
      const lx = x + bow * Math.sin(t * Math.PI);
      c.fillStyle = ['#a59b44', '#8c8538', '#bcae50', '#7a7434'][(tone + (e.rnd() < 0.3 ? 1 : 0)) % 4];
      c.beginPath();
      c.ellipse(lx + (e.rnd() - 0.5) * 0.08, y, 0.035 * (1.2 - t * 0.6), 0.11, (e.rnd() - 0.5) * 0.6, 0, Math.PI * 2);
      c.fill();
    }
  }
});
