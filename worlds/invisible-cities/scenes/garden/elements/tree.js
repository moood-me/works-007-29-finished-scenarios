// The garden's tree over the wall, on the right: a dark trunk, a broad crown of three masses of leaves, each a layer
// that sways in the wind on its own
g.fillStyle = '#2b2622';
g.beginPath();
g.moveTo(-0.3, 0);
g.lineTo(-0.18, -3.2);
g.lineTo(-0.9, -4.6);
g.lineTo(-0.75, -4.7);
g.lineTo(0, -3.6);
g.lineTo(0.6, -4.9);
g.lineTo(0.75, -4.8);
g.lineTo(0.2, -3.2);
g.lineTo(0.32, 0);
g.closePath();
g.fill();
const masses = [['left', -1.2, -5.1, 1.6], ['right', 1.1, -5.4, 1.7], ['top', 0, -6.4, 1.5]];
for (const [name, cx, cy, r] of masses) {
  e.layer(name, { pivot: [cx * 0.4, -3.6], wind: { strength: 0.35, gust: 0.4 }, box: [cx - r * 1.4, cy - r * 1.2, cx + r * 1.4, cy + r * 1.1] }, (g) => {
    for (let i = 0; i < 40; i++) {
      const a = e.rnd() * Math.PI * 2;
      const d = Math.sqrt(e.rnd()) * r * 0.75;
      const x = cx + Math.cos(a) * d * 1.15;
      const y = cy + Math.sin(a) * d * 0.8;
      const rr = r * (0.14 + e.rnd() * 0.14);
      g.fillStyle = e.rnd() < 0.5 ? '#2e4238' : '#36503f';
      g.beginPath();
      g.ellipse(x, y, rr * 1.2, rr * 0.9, 0, 0, Math.PI * 2);
      g.fill();
    }
  });
}
