// The cove's left arm going out to sea: the bank's grass running into a long rocky point, low and dark against the
// water
const r = e.lib.rnd(51);
const top = x => -(30 * Math.min(1, Math.max(0, (60 - x) / 200)) + 4 + 3 * Math.sin(x * 0.05) + 2 * Math.sin(x * 0.13));
g.fillStyle = '#6f6a58';
g.beginPath();
g.moveTo(-320, 3);
for (let x = -320; x <= 150; x += 4) g.lineTo(x, top(x));
g.quadraticCurveTo(170, -3, 185, 3);
g.closePath();
g.fill();
// grass on its top, rock showing below
g.fillStyle = '#7d7d5c';
g.beginPath();
g.moveTo(-320, top(-320));
for (let x = -320; x <= 150; x += 4) g.lineTo(x, top(x));
for (let x = 150; x >= -320; x -= 4) g.lineTo(x, top(x) * 0.62);
g.closePath();
g.fill();
g.fillStyle = '#5f5a4f';
for (let i = 0; i < 40; i++) {
  const x = -300 + r() * 470, y = top(x) * (0.3 + 0.2 * r());
  e.lib.stone(g, x, y, 4 + r() * 8, 1.5 + r() * 2.5, 0, r);
}
