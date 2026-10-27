// The houses across the street: a row of plain three-storey brick houses (metres from the row's foot, x −14…14),
// each a shade of its own, a cornice at the roof, stone sills; on the ground floor shops shut for the night (dark
// shutters, a doorway). Their lit windows are `house_windows` (the same list, lib.windows): here every window dark.
const bricks = ['#6c4a3d', '#74503f', '#5f4639', '#6e5446', '#66463a', '#71503f', '#5c4237'];
for (let h = 0; h < 7; h++) {
  const x0 = -14 + h * 4;
  g.fillStyle = bricks[h];
  g.fillRect(x0, -9.6 + (h % 2) * 0.4, 4.02, 9.6 - (h % 2) * 0.4);
  g.fillStyle = '#4a3a33';
  g.fillRect(x0 - 0.05, -9.75 + (h % 2) * 0.4, 4.1, 0.25);
  // the shop below: a shutter, a doorway, a fascia board
  g.fillStyle = '#3b3e44';
  g.fillRect(x0 + 0.3, -2.7, 2.3, 2.3);
  g.strokeStyle = '#2e3136';
  g.lineWidth = 0.03;
  g.beginPath();
  for (let y = -2.6; y < -0.4; y += 0.12) {
    g.moveTo(x0 + 0.3, y);
    g.lineTo(x0 + 2.6, y);
  }
  g.stroke();
  g.fillStyle = '#2b2622';
  g.fillRect(x0 + 2.9, -2.4, 0.85, 2.4);
  g.fillStyle = '#463830';
  g.fillRect(x0 + 0.2, -3.15, 3.6, 0.4);
}
for (const [x, y, w, h] of e.lib.windows) {
  g.fillStyle = '#d2c3ad';
  g.fillRect(x - 0.06, y + h, w + 0.12, 0.1);
  g.fillStyle = '#23252f';
  g.fillRect(x, y, w, h);
  g.fillStyle = '#4b3a32';
  g.fillRect(x + w / 2 - 0.02, y, 0.04, h);
}
// the sidewalk's edge on that side
g.fillStyle = '#58554f';
g.fillRect(-14.2, -0.15, 28.4, 0.2);
