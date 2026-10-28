// Pots along the house's foot: geraniums, basil, a rosemary bush in a big jar, a watering can beside them (their
// leaves in the wind, layer `leaves`)
const pots = [[-1.0, 0.4, 0], [-0.55, 0.3, 1], [-0.05, 0.62, 2], [0.5, 0.34, 0], [0.88, 0.26, 1]];
for (const [x, s, k] of pots) e.lib.potBody(g, x, s, k);
g.fillStyle = '#7d8c90';
g.beginPath();
g.moveTo(1.08, -0.28);
g.lineTo(1.32, -0.28);
g.lineTo(1.3, 0);
g.lineTo(1.1, 0);
g.closePath();
g.fill();
g.strokeStyle = '#7d8c90';
g.lineWidth = 0.03;
g.beginPath();
g.moveTo(1.12, -0.18);
g.lineTo(0.96, -0.36);
g.stroke();
e.layer('leaves', { pivot: [0, -0.3], wind: { strength: 0.05, gust: 0.5 }, box: [-1.3, -1.3, 1.25, -0.15] }, g => {
  pots.forEach(([x, s, k], i) => e.lib.potLeaves(g, x, s, k, 70 + i * 7));
});
