// The terrace's front: a riser of rough stones (metres, x along it, y up from the ground to its top at 0.45), snow on
// its top edge and drifted against its foot; two steps at its left end (x −4.2…−3.2).
g.fillStyle = '#a49c8c';
g.fillRect(-4.2, -0.45, 8.4, 0.45);
g.strokeStyle = '#8a8274';
g.lineWidth = 0.025;
for (let row = 0; row < 3; row++) {
  let x = -4.2 + (row % 2) * 0.2;
  const y = -0.45 + row * 0.15;
  while (x < 4.2) {
    const w = 0.25 + e.rnd() * 0.3;
    g.strokeRect(x, y, w, 0.15);
    x += w;
  }
}
g.fillStyle = '#eef1f4';
g.fillRect(-4.2, -0.5, 8.4, 0.07);
g.beginPath();
g.moveTo(-4.2, 0.02);
for (let x = -4.2; x <= 4.2; x += 0.3) g.lineTo(x, -0.06 - 0.08 * Math.abs(Math.sin(x * 2.3)));
g.lineTo(4.2, 0.02);
g.closePath();
g.fill();
// the steps
g.fillStyle = '#b3ab9b';
g.fillRect(-4.2, -0.3, 1.0, 0.3);
g.fillStyle = '#eef1f4';
g.fillRect(-4.2, -0.32, 1.0, 0.04);
