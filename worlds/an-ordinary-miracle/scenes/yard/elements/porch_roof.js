// The porch's two carved posts and its little gable over the door: white bargeboards with scallops and a painted
// sun in the gable — the house's festive face. Standing on the porch's floor.
const PX = 0.86, TOP = 2.2, PEAK = 2.95;
for (const s of [-1, 1]) {
  const x = s * PX;
  g.fillStyle = '#9c7449';
  g.fillRect(x - 0.06, -TOP, 0.12, TOP);
  g.fillStyle = '#c29a66';
  g.fillRect(x - 0.06, -TOP, 0.04, TOP);
  // the post's carved waist
  g.fillStyle = '#efe7d2';
  for (const y of [-0.9, -1.0, -1.1]) g.fillRect(x - 0.075, y, 0.15, 0.04);
}
// the beam
g.fillStyle = '#8c663f';
g.fillRect(-PX - 0.15, -TOP - 0.12, 2 * PX + 0.3, 0.14);
// the gable: boards, the painted sun, the bargeboards
g.fillStyle = '#b48650';
g.beginPath();
g.moveTo(-PX - 0.15, -TOP - 0.12);
g.lineTo(0, -PEAK);
g.lineTo(PX + 0.15, -TOP - 0.12);
g.closePath();
g.fill();
g.fillStyle = '#e9b44c';
g.beginPath();
g.arc(0, -TOP - 0.32, 0.12, 0, Math.PI * 2);
g.fill();
g.strokeStyle = '#e9b44c';
g.lineWidth = 0.025;
for (let i = 0; i < 9; i++) {
  const a = Math.PI + (i / 8) * Math.PI;
  g.beginPath();
  g.moveTo(Math.cos(a) * 0.16, -TOP - 0.32 + Math.sin(a) * 0.16);
  g.lineTo(Math.cos(a) * 0.26, -TOP - 0.32 + Math.sin(a) * 0.26);
  g.stroke();
}
g.fillStyle = '#efe7d2';
for (const s of [-1, 1]) {
  const x1 = s * (PX + 0.3), y1 = -TOP - 0.02, n = 6;
  g.beginPath();
  g.moveTo(0, -PEAK - 0.12);
  g.lineTo(x1, y1 - 0.16);
  g.lineTo(x1, y1);
  for (let i = n; i > 0; i--) {
    const u0 = i / n, u1 = (i - 1) / n;
    const xa = x1 * u0, xb = x1 * u1, ya = -PEAK + (y1 + PEAK) * u0, yb = -PEAK + (y1 + PEAK) * u1;
    g.quadraticCurveTo((xa + xb) / 2, (ya + yb) / 2 + 0.12, xb, yb + 0.02);
  }
  g.closePath();
  g.fill();
}
