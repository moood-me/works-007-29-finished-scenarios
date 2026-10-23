// The duck pond, seen from above: dark still water under the sky's reflection, a soft muddy rim, a few lily pads.
const w = 11, d = 9;
g.fillStyle = '#6f7a62';
g.beginPath();
g.ellipse(0, 0, w / 2, d / 2, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#3e4d4f';
g.beginPath();
g.ellipse(0, 0, w / 2 - 0.35, d / 2 - 0.3, 0, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#5f7d4c';
for (let k = 0; k < 9; k++) {
  const a = e.rnd() * Math.PI * 2, r = 0.55 + 0.35 * e.rnd();
  const x = Math.cos(a) * (w / 2 - 1) * r, y = Math.sin(a) * (d / 2 - 1) * r;
  g.beginPath();
  g.arc(x, y, 0.18 + 0.1 * e.rnd(), 0.4, Math.PI * 2);
  g.lineTo(x, y);
  g.fill();
}
