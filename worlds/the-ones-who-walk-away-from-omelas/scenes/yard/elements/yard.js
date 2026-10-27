// The yard from above (x across, y toward the viewer; the house at y −4.4): big uneven flagstones, packed earth between
// them with small weeds, a path worn paler from the gate side to the kitchen door (x 1, the far edge), a ring of damp
// where the washing drips
const A = e.anim, W = 9.2, D = 9;
g.fillStyle = '#b9a98b';
g.fillRect(-W / 2, -D / 2, W, D);
const greys = ['#d6ccb8', '#cfc4ae', '#dcd3c0', '#c8bda6', '#d2c6b0'];
for (let row = 0, y = -D / 2; y < D / 2; row++) {
  const h = 0.55 + 0.35 * A.hash(row, 1);
  let x = -W / 2 - 0.4 * A.hash(row, 2);
  for (let k = 0; x < W / 2; k++) {
    const w = 0.6 + 0.6 * A.hash(row * 41 + k, 3), j = A.hash(row * 41 + k, 4);
    g.fillStyle = greys[Math.floor(j * greys.length)];
    g.beginPath();
    g.moveTo(x + 0.05 + 0.04 * A.hash(k, 5), y + 0.04);
    g.lineTo(x + w - 0.04, y + 0.05 + 0.04 * A.hash(k, 6));
    g.lineTo(x + w - 0.05 - 0.04 * A.hash(k, 7), y + h - 0.04);
    g.lineTo(x + 0.04, y + h - 0.05 - 0.03 * A.hash(k, 8));
    g.closePath();
    g.fill();
    x += w;
  }
  y += h;
}
g.fillStyle = '#7d8f4f';
for (let i = 0; i < 70; i++) {
  g.beginPath();
  g.ellipse(-W / 2 + W * A.hash(i, 9), -D / 2 + D * A.hash(i, 10), 0.05, 0.025, A.hash(i, 11) * 3, 0, Math.PI * 2);
  g.fill();
}
const path = g.createLinearGradient(1, -D / 2, 0, D / 2);
path.addColorStop(0, 'rgba(240, 232, 214, 0.5)');
path.addColorStop(1, 'rgba(240, 232, 214, 0)');
g.fillStyle = path;
g.beginPath();
g.moveTo(0.4, -D / 2);
g.lineTo(1.6, -D / 2);
g.lineTo(0.8, D / 2);
g.lineTo(-1.2, D / 2);
g.closePath();
g.fill();
const damp = g.createRadialGradient(3, -3.1, 0.1, 3, -3.1, 1.1);
damp.addColorStop(0, 'rgba(120, 105, 85, 0.35)');
damp.addColorStop(1, 'rgba(120, 105, 85, 0)');
g.fillStyle = damp;
g.fillRect(1.8, -4.3, 2.4, 2.4);
