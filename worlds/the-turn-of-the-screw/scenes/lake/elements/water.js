// The lake's still water (seen from above, metres: x across, y toward the viewer): dark and greenish near, paler where
// it lies far toward the other shore; a few fallen leaves floating on it, most near this bank, in the reeds' lee.
const D = 10;
const water = g.createLinearGradient(0, -D, 0, D);
water.addColorStop(0, '#6c7672');
water.addColorStop(0.6, '#4e5a56');
water.addColorStop(1, '#3d4743');
g.fillStyle = water;
g.fillRect(-110, -D, 220, 2 * D);
for (let i = 0; i < 160; i++) {
  const x = -16 + e.rnd() * 30;
  const y = D - Math.pow(e.rnd(), 2.2) * 12;
  g.fillStyle = ['#c08a3c', '#a8662e', '#d6b052', '#8e5a2c'][Math.floor(e.rnd() * 4)];
  g.beginPath();
  g.ellipse(x, y, 0.06 + e.rnd() * 0.05, 0.035 + e.rnd() * 0.03, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
