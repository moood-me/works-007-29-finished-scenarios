// An almond tree of the square (metres from its foot): the tropical almond, its trunk grey and wet, its branches
// going out level in tiers like a pagoda, each tier a flat cloud of big leathery leaves, dark green with leaves
// turned red and orange among them. The tiers are a layer the wind stirs.
g.fillStyle = '#5a5048';
g.beginPath();
g.moveTo(-0.22, 0.05);
g.quadraticCurveTo(-0.12, -1.8, -0.14, -3.6);
g.lineTo(0.12, -3.6);
g.quadraticCurveTo(0.14, -1.8, 0.26, 0.05);
g.closePath();
g.fill();
g.fillStyle = 'rgba(40,36,30,0.4)';
g.fillRect(-0.04, -3.4, 0.05, 3.4);
// the tiers' branches, level
g.strokeStyle = '#4e463e';
g.lineCap = 'round';
const tiers = [[-3.4, 3.5], [-4.4, 3.2], [-5.4, 2.6], [-6.3, 1.7], [-7.0, 0.9]];
for (const [y, w] of tiers) {
  g.lineWidth = 0.09;
  g.beginPath();
  g.moveTo(-w * 0.9, y + 0.15);
  g.quadraticCurveTo(0, y - 0.15, w * 0.9, y + 0.1);
  g.stroke();
}
g.lineWidth = 0.12;
g.beginPath();
g.moveTo(0, -3.6);
g.lineTo(0, -7.2);
g.stroke();
e.layer('crown', { pivot: [0, -3.6], wind: { strength: 0.18, gust: 0.4 } }, c => {
  const greens = ['#3e5a30', '#4a6a36', '#557a3e', '#36502a'];
  const reds = ['#b0442c', '#c8702e', '#a85a28'];
  for (const [y, w] of tiers) {
    for (let i = 0; i < 95 * w; i++) {
      const x = (e.rnd() * 2 - 1) * w;
      const yy = y - 0.1 - e.rnd() * 0.85 * (1 - Math.abs(x) / w * 0.6);
      c.fillStyle = e.rnd() < 0.1 ? reds[Math.floor(e.rnd() * 3)] : greens[Math.floor(e.rnd() * 4)];
      c.beginPath();
      c.ellipse(x, yy, 0.16 + e.rnd() * 0.1, 0.08 + e.rnd() * 0.05, (e.rnd() - 0.5) * 0.8, 0, Math.PI * 2);
      c.fill();
    }
    // the tier's underside, in its own shade
    c.fillStyle = 'rgba(30,40,24,0.35)';
    c.beginPath();
    c.ellipse(0, y + 0.02, w * 0.9, 0.12, 0, 0, Math.PI * 2);
    c.fill();
  }
});
