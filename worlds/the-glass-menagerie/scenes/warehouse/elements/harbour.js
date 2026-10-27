// Far off past the roofs, hazed: the harbour — warehouses' long roofs along the water, cranes, and a steamer at the
// pier, its black funnel with a red band and its two masts (what Tom looks at). Metres from the card's foot at the
// yards' level (12 m below the storeroom's floor), across from its anchor.
// the water's line and the sheds along it
g.fillStyle = '#8d8f95';
g.fillRect(-60, -2, 120, 2.05);
g.fillStyle = '#7d7a78';
for (const [x, w, h] of [[-58, 22, 9], [-34, 16, 7], [-16, 20, 10], [6, 14, 8], [24, 30, 9]]) {
  g.fillRect(x, -2 - h, w, h);
  g.fillStyle = '#6f6c6c';
  g.beginPath();
  g.moveTo(x - 0.5, -2 - h);
  g.lineTo(x + w / 2, -2 - h - 2.4);
  g.lineTo(x + w + 0.5, -2 - h);
  g.fill();
  g.fillStyle = '#7d7a78';
}
// the cranes: lattice towers, their jibs
g.strokeStyle = '#5e5b5d';
g.lineWidth = 0.35;
for (const [x, h, j] of [[-28, 24, 10], [-9, 28, -9], [30, 22, 8]]) {
  g.beginPath();
  g.moveTo(x - 1, -2);
  g.lineTo(x, -2 - h);
  g.lineTo(x + 1, -2);
  g.moveTo(x, -2 - h);
  g.lineTo(x + j, -2 - h + 3);
  g.moveTo(x, -2 - h + 2);
  g.lineTo(x + j * 0.8, -2 - h + 3);
  g.stroke();
}
// the steamer: hull, white upperworks, the funnel with its band, two masts with a stay between them
const sx = 14;
g.fillStyle = '#3b3a40';
g.beginPath();
g.moveTo(sx - 20, -2.2);
g.lineTo(sx + 19, -2.2);
g.lineTo(sx + 22, -8);
g.lineTo(sx - 22, -8);
g.closePath();
g.fill();
g.fillStyle = '#d6d2c6';
g.fillRect(sx - 9, -12, 16, 4);
g.fillRect(sx - 6, -14.5, 9, 2.5);
g.fillStyle = '#2c2a2e';
g.fillRect(sx - 3.4, -22, 5.2, 8);
g.fillStyle = '#b8462f';
g.fillRect(sx - 3.4, -20.4, 5.2, 1.9);
g.strokeStyle = '#4a4850';
g.lineWidth = 0.4;
g.beginPath();
g.moveTo(sx - 16, -8);
g.lineTo(sx - 16, -27);
g.moveTo(sx + 15, -8);
g.lineTo(sx + 15, -25);
g.moveTo(sx - 16, -27);
g.lineTo(sx + 15, -25);
g.stroke();
e.at(sx - 1, -18, 'ship');
