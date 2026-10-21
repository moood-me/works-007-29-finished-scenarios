// The house's right end, its gable to the right: the log wall to the eaves, above it the gable of upright boards under
// carved white bargeboards, a small round window warm from inside. Painted from the front corner (the anchor, x 0)
// back along the house (x to 5.4).
const L = e.lib, D = 5.4, H = 2.7, R = 4.9;
g.fillStyle = '#8d877c';
g.fillRect(0, -0.32, D, 0.34);
g.save();
g.translate(0, -0.3);
L.logs(g, 71, 0, D, -(H - 0.3), 0.2, 0);
g.restore();
// the gable: upright boards
g.save();
g.beginPath();
g.moveTo(0, -H);
g.lineTo(D / 2, -R);
g.lineTo(D, -H);
g.closePath();
g.clip();
for (let i = 0; i * 0.22 < D; i++) {
  g.fillStyle = ['#b48650', '#a97b47', '#bd9058'][i % 3];
  g.fillRect(i * 0.22, -R, 0.2, R - H + 0.01);
}
g.restore();
// the round window
g.fillStyle = '#efe7d2';
g.beginPath();
g.arc(D / 2, -3.5, 0.28, 0, Math.PI * 2);
g.fill();
g.fillStyle = '#b77a43';
g.beginPath();
g.arc(D / 2, -3.5, 0.2, 0, Math.PI * 2);
g.fill();
// the bargeboards: white, a scalloped lower edge, from the peak down past each eave
g.fillStyle = '#efe7d2';
for (const x1 of [-0.3, D + 0.3]) {
  const x0 = D / 2, y1 = -H + 0.2, n = 9;
  g.beginPath();
  g.moveTo(x0, -R - 0.16);
  g.lineTo(x1, y1 - 0.16);
  g.lineTo(x1, y1 + 0.06);
  for (let i = n; i > 0; i--) {
    const u0 = i / n, u1 = (i - 1) / n;
    const xa = x0 + (x1 - x0) * u0, xb = x0 + (x1 - x0) * u1, ya = -R + (y1 + R) * u0, yb = -R + (y1 + R) * u1;
    g.quadraticCurveTo((xa + xb) / 2, (ya + yb) / 2 + 0.2, xb, yb + 0.06);
  }
  g.closePath();
  g.fill();
}
