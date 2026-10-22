// The land, seen from above (metres: x across, y toward the viewer; the plane's middle is 140 m ahead, so a point
// `d` metres ahead is at y = 140 − d): the mown lawn in long stripes toward the house, the gravel drive coming up
// the avenue on the right and the forecourt before the porch, the flower border under the front, the tower's foot;
// beyond, the park's meadow and the low Essex fields with their hedgerows; daisies in the grass near.
const Y = d => 140 - d;
g.fillStyle = '#718d46';
g.fillRect(-300, -150, 600, 300);
// the far country: fields in a patchwork, hedgerows between them
const fields = ['#8f9654', '#a19d5f', '#7d8f4d', '#99a062', '#b1a76b', '#85934f'];
for (let fx = -300; fx < 300; fx += 30 + e.rnd() * 30) {
  let fy = -150;
  while (fy < Y(120)) {
    const h = 20 + e.rnd() * 30;
    g.fillStyle = fields[Math.floor(e.rnd() * fields.length)];
    g.fillRect(fx, fy, 62, h);
    fy += h;
  }
}
g.strokeStyle = '#4b5c34';
g.lineWidth = 1.6;
for (let i = 0; i < 26; i++) {
  const x = -300 + e.rnd() * 600;
  const y = -150 + e.rnd() * (Y(125) + 150);
  g.beginPath();
  g.moveTo(x - 40 - e.rnd() * 40, y + (e.rnd() - 0.5) * 8);
  g.lineTo(x + 40 + e.rnd() * 40, y + (e.rnd() - 0.5) * 8);
  g.stroke();
}
// the park's meadow round the lawn, longer grass of a yellower green
g.fillStyle = '#7d904c';
g.fillRect(-300, Y(125), 600, 60);
// soft broad patches of another tone over the grass
for (let i = 0; i < 40; i++) {
  const x = -120 + e.rnd() * 240;
  const y = Y(110) + e.rnd() * 110;
  const r = 6 + e.rnd() * 16;
  const grd = g.createRadialGradient(x, y, 0, x, y, r);
  const c = e.rnd() < 0.5 ? '96,122,58' : '132,150,82';
  grd.addColorStop(0, `rgba(${c},0.35)`);
  grd.addColorStop(1, `rgba(${c},0)`);
  g.fillStyle = grd;
  g.fillRect(x - r, y - r, 2 * r, 2 * r);
}
// the lawn's mown stripes, running toward the house
for (let x = -64, k = 0; x < 64; x += 4.5, k++) {
  g.fillStyle = k % 2 ? 'rgba(138,166,86,0.55)' : 'rgba(92,120,58,0.45)';
  g.fillRect(x, Y(52), 4.5, 52 + 12);
}
// the gravel: the drive up the avenue on the right, curving in to the forecourt before the porch
g.strokeStyle = '#c8b893';
g.lineCap = 'round';
g.lineJoin = 'round';
g.lineWidth = 4.2;
g.beginPath();
g.moveTo(7.5, Y(-10));
g.lineTo(9.3, Y(5));
g.bezierCurveTo(13, Y(18), 20, Y(32), 25, Y(42));
g.bezierCurveTo(27, Y(47), 26, Y(50), 22, Y(52));
g.stroke();
g.fillStyle = '#c8b893';
g.fillRect(-7, Y(55.4), 34, 5.2);
g.beginPath();
g.ellipse(9, Y(52.6), 7, 3.4, 0, 0, Math.PI * 2);
g.fill();
// the gravel's grain and the ruts of the carriage wheels
for (let i = 0; i < 260; i++) {
  const x = -7 + e.rnd() * 34;
  const y = Y(55.4) + e.rnd() * 5.2;
  g.fillStyle = e.rnd() < 0.5 ? 'rgba(160,145,112,0.5)' : 'rgba(222,210,182,0.6)';
  g.fillRect(x, y, 0.12, 0.12);
}
// the flower border under the front, broken by the porch's steps: earth, then roses, pinks, lavender
g.fillStyle = '#5d4b37';
g.fillRect(-9, Y(57.9), 15.3, 1.9);
g.fillRect(11.7, Y(57.9), 15.3, 1.9);
const blooms = ['#d98c9b', '#f0ece4', '#a08cc4', '#e5a7a0', '#c9566a', '#f2d9a8'];
for (let i = 0; i < 520; i++) {
  const left = e.rnd() < 0.5;
  const x = left ? -9 + e.rnd() * 15.3 : 11.7 + e.rnd() * 15.3;
  const y = Y(57.9) + e.rnd() * 1.9;
  g.fillStyle = e.rnd() < 0.45 ? '#4f6a36' : blooms[Math.floor(e.rnd() * blooms.length)];
  g.beginPath();
  g.arc(x, y, 0.08 + e.rnd() * 0.12, 0, Math.PI * 2);
  g.fill();
}
// the tower's foot: a strip of bare earth and nettles at its base
g.fillStyle = '#5f6a3f';
g.fillRect(-15, Y(62), 7.2, 7.2);
// daisies and a few buttercups in the grass near
for (let i = 0; i < 420; i++) {
  const x = -12 + e.rnd() * 24;
  const d = Math.pow(e.rnd(), 1.4) * 16;
  g.fillStyle = e.rnd() < 0.82 ? '#f4f1ea' : '#e9c640';
  g.beginPath();
  g.arc(x, Y(d), 0.025 + e.rnd() * 0.02, 0, Math.PI * 2);
  g.fill();
}
