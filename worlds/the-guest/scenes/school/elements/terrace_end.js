// The terrace's left end: its riser of rough stones seen from the side (metres, x along it from the wall's foot at
// x −1.2 to the front corner at 1.2, y up to its top at 0.45), the snow on its top edge and drifted deep against it.
g.fillStyle = '#a49c8c';
g.fillRect(-1.2, -0.45, 2.4, 0.45);
g.strokeStyle = '#8a8274';
g.lineWidth = 0.025;
for (let row = 0; row < 3; row++) {
  let x = -1.2 + (row % 2) * 0.15;
  const y = -0.45 + row * 0.15;
  while (x < 1.2) {
    const w = Math.min(0.25 + e.rnd() * 0.3, 1.2 - x);
    g.strokeRect(x, y, w, 0.15);
    x += w;
  }
}
g.fillStyle = '#eef1f4';
g.fillRect(-1.2, -0.5, 2.4, 0.07);
g.beginPath();
g.moveTo(-1.2, 0.02);
g.lineTo(-1.2, -0.38);
g.quadraticCurveTo(-0.6, -0.3, 0, -0.16);
g.quadraticCurveTo(0.7, -0.04, 1.2, -0.08);
g.lineTo(1.2, 0.02);
g.closePath();
g.fill();
