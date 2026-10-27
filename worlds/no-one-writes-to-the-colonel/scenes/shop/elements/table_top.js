// A machine table's top from above (metres; its middle, y toward the viewer): old varnished wood worn pale where the
// cloth runs over it, a chalk mark, the slot the belt comes up through.
g.fillStyle = '#7a563a';
g.fillRect(-0.46, -0.25, 0.92, 0.5);
for (let y = -0.25; y < 0.25; y += 0.1) {
  g.fillStyle = 'rgba(60,40,26,0.35)';
  g.fillRect(-0.46, y, 0.92, 0.004);
}
for (let i = 0; i < 10; i++) {
  g.fillStyle = 'rgba(110,80,56,0.4)';
  g.fillRect(-0.44 + e.rnd() * 0.8, -0.23 + e.rnd() * 0.44, 0.1 + e.rnd() * 0.2, 0.004);
}
g.fillStyle = 'rgba(190,160,120,0.35)';
g.beginPath();
g.ellipse(0.12, 0, 0.22, 0.14, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#2a1e16';
g.fillRect(0.33, -0.05, 0.04, 0.12);
