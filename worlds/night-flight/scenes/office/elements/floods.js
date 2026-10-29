// The floodlights over the field, seen from the office: two steel lattice masts, 13 m, each with a frame of four big
// lamps at its top turned toward the hangar. The lamps' faces are the layer `lit` (shown by `floods` in animate); each
// head's light is `f0`, `f1` (the scene's flood_0, flood_1).
const MASTS = [-22, 22];
for (const x of MASTS) {
  g.strokeStyle = '#4d5158';
  g.lineWidth = 0.16;
  g.beginPath();
  g.moveTo(x - 0.9, 0);
  g.lineTo(x - 0.25, -12.6);
  g.moveTo(x + 0.9, 0);
  g.lineTo(x + 0.25, -12.6);
  g.stroke();
  g.lineWidth = 0.07;
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
  g.fillStyle = '#41454b';
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
e.layer('lit', {}, c => {
  for (const x of MASTS) {
    c.fillStyle = '#f4f7ff';
    for (const dx of [-0.75, -0.25, 0.25, 0.75]) {
      for (const dy of [-13.55, -13.0]) {
        c.beginPath();
        c.arc(x + dx, dy, 0.18, 0, Math.PI * 2);
        c.fill();
      }
    }
  }
});
MASTS.forEach((x, i) => e.light(x, -13.3, 1.2, '#eef2ff', 1, `f${i}`));
