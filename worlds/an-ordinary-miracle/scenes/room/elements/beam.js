// A ceiling beam's face across the room (two copies), hewn, darker than the walls; strings of onions and bundles of
// dried herbs, a few garlic heads, hanging from the nearer one (painted on every copy; the far one is mostly hidden by
// it and the ceiling's angle).
const L = e.lib;
g.fillStyle = '#7a5232';
g.fillRect(-4.7, -0.26, 9.4, 0.26);
g.fillStyle = '#946640';
g.fillRect(-4.7, -0.26, 9.4, 0.06);
g.fillStyle = '#5a3a22';
g.fillRect(-4.7, -0.03, 9.4, 0.03);
L.dabs(g, 91, -4.7, -0.24, 9.4, 0.22, ['#a8794c', '#6a4428'], 60, 0.08, 0.3, 0.3);
// what hangs from it: across, length, kind (0 herbs, 1 onions)
for (const [x, len, kind] of [[-3.2, 0.5, 0], [-2.7, 0.62, 1], [-1.5, 0.45, 0], [0.4, 0.4, 0], [2.6, 0.55, 1], [3.3, 0.42, 0]]) {
  g.strokeStyle = '#8a7650';
  g.lineWidth = 0.012;
  g.beginPath();
  g.moveTo(x, 0);
  g.lineTo(x, 0.08);
  g.stroke();
  if (kind === 0) {
    for (let i = 0; i < 9; i++) {
      const a = (i / 8 - 0.5) * 0.6;
      g.strokeStyle = ['#7f8a52', '#a39a5c', '#6f7a48'][i % 3];
      g.lineWidth = 0.016;
      g.beginPath();
      g.moveTo(x, 0.08);
      g.lineTo(x + Math.sin(a) * len, 0.08 + Math.cos(a) * len);
      g.stroke();
    }
    g.fillStyle = '#b5342e';
    g.fillRect(x - 0.03, 0.07, 0.06, 0.04);
  } else {
    for (let i = 0; i < 7; i++) {
      const y = 0.12 + i * (len / 7), s = i % 2 ? 1 : -1;
      g.fillStyle = ['#d49a4a', '#c48236', '#e2b060'][i % 3];
      g.beginPath();
      g.ellipse(x + s * 0.035, y, 0.045, 0.05, 0, 0, Math.PI * 2);
      g.fill();
    }
  }
}
