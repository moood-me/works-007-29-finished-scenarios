// The houses beyond the schoolyard: a row of plain two- and three-storey frame houses (metres from the row's foot,
// x −18…18), clapboard in faded colours, dark roofs with chimneys against the evening sky, a church's steeple and a
// water tower further off. Their lit windows are `house_windows` (the same list, lib.windows): here every window dark.
const walls = ['#8d8a83', '#9a8a76', '#7f8790', '#a39a88', '#8a7d70', '#959489', '#857a6e', '#9a948a'];
// the steeple and the water tower behind the roofs
g.fillStyle = '#4b4a58';
g.fillRect(5.2, -16, 1.6, 9);
g.beginPath();
g.moveTo(5.0, -16);
g.lineTo(6.0, -21);
g.lineTo(7.0, -16);
g.fill();
g.fillRect(-11.4, -13.5, 0.15, 6);
g.fillRect(-9.6, -13.5, 0.15, 6);
g.fillRect(-12.0, -15.6, 3.0, 2.2);
g.beginPath();
g.moveTo(-12.2, -15.6);
g.lineTo(-10.5, -16.6);
g.lineTo(-8.8, -15.6);
g.fill();
for (let h = 0; h < 8; h++) {
  const x0 = -18 + h * 4.5;
  const top = -(2 + (h % 3 === 1 ? 1 : 0)) * 2.8 - 0.6;
  g.fillStyle = walls[h];
  g.fillRect(x0, top, 4.4, -top);
  g.strokeStyle = 'rgba(60,55,50,0.25)';
  g.lineWidth = 0.03;
  g.beginPath();
  for (let y = top + 0.2; y < 0; y += 0.22) {
    g.moveTo(x0, y);
    g.lineTo(x0 + 4.4, y);
  }
  g.stroke();
  // the roof: a gable toward the street or a flat cornice
  g.fillStyle = '#3c3a40';
  if (h % 2) {
    g.beginPath();
    g.moveTo(x0 - 0.25, top);
    g.lineTo(x0 + 2.2, top - 2.2);
    g.lineTo(x0 + 4.65, top);
    g.fill();
  } else {
    g.fillRect(x0 - 0.1, top - 0.35, 4.6, 0.35);
  }
  g.fillRect(x0 + 3.2, top - 2.6, 0.45, 1.6);
  // a porch with its steps
  g.fillStyle = '#5a534c';
  g.fillRect(x0 + 0.4, -2.5, 3.6, 0.18);
  g.fillRect(x0 + 0.5, -2.32, 0.12, 2.32);
  g.fillRect(x0 + 3.78, -2.32, 0.12, 2.32);
  g.fillStyle = '#3a3532';
  g.fillRect(x0 + 1.8, -2.1, 0.8, 2.1);
}
for (const [x, y, w, h] of e.lib.windows) {
  g.fillStyle = '#e6e0d2';
  g.fillRect(x - 0.08, y - 0.08, w + 0.16, h + 0.16);
  g.fillStyle = '#2a2d3a';
  g.fillRect(x, y, w, h);
}
