// The flight going down from the landing toward the back of the house (from above as it slopes: x −0.6…0.6 across,
// y −1.45 at its foot, far and low … 1.45 at its head by the landing): plain wooden steps, each tread lighter, its nosing
// an ink line
const INK = e.lib.INK, n = 9, step = 2.9 / n;
g.fillStyle = '#7b5a43';
g.fillRect(-0.6, -1.45, 1.2, 2.9);
for (let i = 0; i < n; i++) {
  const y = -1.45 + i * step;
  g.fillStyle = '#a77d5c';
  g.fillRect(-0.6, y, 1.2, step * 0.62);
}
g.beginPath();
for (let i = 0; i <= n; i++) { g.moveTo(-0.6, -1.45 + i * step); g.lineTo(0.6, -1.45 + i * step); }
g.strokeStyle = INK;
g.lineWidth = 0.012;
g.stroke();
g.strokeRect(-0.6, -1.45, 1.2, 2.9);
