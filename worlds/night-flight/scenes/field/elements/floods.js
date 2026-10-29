// The floodlights over the field: three steel lattice masts, 13 m, each with a frame of four big lamps at its top
// turned toward the hangar. Each mast's lamp faces are a layer of its own, `lit0`…`lit2` (shown by the keys
// flood_0…flood_2 in animate: the masts come on one by one as `floods` rises — script.js); each head's light is
// `f0`…`f2` (the scene's lights flood_0…2, on those keys).
const MASTS = [-78, -30, -16];
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
MASTS.forEach((x, i) => e.layer(`lit${i}`, { box: [x - 1.3, -14.1, x + 1.3, -12.5] }, c => {
  {
    c.fillStyle = '#f4f7ff';
    for (const dx of [-0.75, -0.25, 0.25, 0.75]) {
      for (const dy of [-13.55, -13.0]) {
        c.beginPath();
        c.arc(x + dx, dy, 0.18, 0, Math.PI * 2);
        c.fill();
      }
    }
  }
}));
MASTS.forEach((x, i) => e.light(x, -13.3, 1.1, '#eef2ff', 1, `f${i}`));
