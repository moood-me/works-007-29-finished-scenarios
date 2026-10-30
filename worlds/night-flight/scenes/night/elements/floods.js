// The floodlights over the field (after the field's `floods`): three steel lattice masts, 13 m, each with a frame of
// eight big lamps at its top, lit all night; each head's light is `f0`…`f2` (the scene's lights flood_0…2).
const MASTS = [-55, 5, 70];
for (const x of MASTS) {
  // the lattice: two legs tapering up, cross-braced
  g.strokeStyle = '#5d6168';
  g.lineWidth = 0.14;
  g.beginPath();
  g.moveTo(x - 0.9, 0);
  g.lineTo(x - 0.25, -12.6);
  g.moveTo(x + 0.9, 0);
  g.lineTo(x + 0.25, -12.6);
  g.stroke();
  g.lineWidth = 0.06;
  g.beginPath();
  for (let k = 0; k < 9; k++) {
    const y0 = -k * 1.4;
    const y1 = y0 - 1.4;
    const w0 = 0.9 - 0.65 * (k / 9);
    const w1 = 0.9 - 0.65 * ((k + 1) / 9);
    g.moveTo(x - w0, y0);
    g.lineTo(x + w1, y1);
    g.moveTo(x + w0, y0);
    g.lineTo(x - w1, y1);
  }
  g.stroke();
  // the head: a frame and four lamp housings
  g.fillStyle = '#4c5056';
  g.fillRect(x - 1.1, -13.9, 2.2, 0.12);
  g.fillRect(x - 1.1, -12.7, 2.2, 0.12);
  for (const dx of [-0.75, -0.25, 0.25, 0.75]) {
    for (const dy of [-13.55, -13.0]) {
      g.beginPath();
      g.arc(x + dx, dy, 0.24, 0, Math.PI * 2);
      g.fill();
    }
  }
}
// the lamps' faces, lit
g.fillStyle = '#f4f7ff';
for (const x of MASTS) {
  for (const dx of [-0.75, -0.25, 0.25, 0.75]) {
    for (const dy of [-13.55, -13.0]) {
      g.beginPath();
      g.arc(x + dx, dy, 0.18, 0, Math.PI * 2);
      g.fill();
    }
  }
}
MASTS.forEach((x, i) => e.light(x, -13.3, 1.1, '#eef2ff', 1, `f${i}`));
