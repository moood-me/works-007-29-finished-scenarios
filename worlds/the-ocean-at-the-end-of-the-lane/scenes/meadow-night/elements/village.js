// Far off on the left, across the fields (200 m): a long low rise, the village's roofs along it and their lit windows,
// the church's tower; nearer this side of it, the boy's own house, its sister's window lit upstairs (the point
// "village#sister") and the hall below.
g.fillStyle = '#495a66';
g.beginPath();
g.moveTo(-90, 0.5);
for (let x = -90; x <= 90; x += 2) g.lineTo(x, -6 - 7 * Math.exp(-((x + 10) * (x + 10)) / 2400) - 0.6 * e.rnd());
g.lineTo(90, 0.5);
g.closePath();
g.fill();
// the village's roofs along the rise, and its windows
const roofs = [];
for (let k = 0; k < 22; k++) {
  const x = -60 + 95 * e.rnd(), base = -6 - 7 * Math.exp(-((x + 10) * (x + 10)) / 2400), w = 4 + 4 * e.rnd(), h = 3 + 2.5 * e.rnd();
  roofs.push([x, base, w, h]);
}
roofs.sort((a, b) => a[1] - b[1]);
for (const [x, base, w, h] of roofs) {
  g.fillStyle = '#3c4955';
  g.fillRect(x - w / 2, base - h, w, h + 0.5);
  g.beginPath();
  g.moveTo(x - w / 2 - 0.4, base - h);
  g.lineTo(x, base - h - 2.2);
  g.lineTo(x + w / 2 + 0.4, base - h);
  g.fill();
}
// the church tower
g.fillStyle = '#3a4652';
g.fillRect(-16, -27, 3.2, 14);
g.beginPath();
g.moveTo(-16.4, -27);
g.lineTo(-14.4, -33);
g.lineTo(-12.4, -27);
g.fill();
for (let k = 0; k < 16; k++) {
  const [x, base, w, h] = roofs[Math.floor(e.rnd() * roofs.length)];
  e.light(x + (e.rnd() - 0.5) * w * 0.6, base - h * (0.3 + 0.4 * e.rnd()), 0.55, '#ffc27a', 0.6, 'w' + k);
}
// the boy's house, nearer this side of the rise: a plain two-storey house, its roof, its chimney
g.fillStyle = '#3e4a56';
g.fillRect(28, -12, 14, 12.5);
g.beginPath();
g.moveTo(27, -12);
g.lineTo(35, -17);
g.lineTo(43, -12);
g.fill();
g.fillRect(38, -18, 1.4, 4);
e.light(31.5, -8.5, 0.9, '#ffd08a', 0.9, 'sister');
e.light(37, -3, 0.8, '#ffc27a', 0.6, 'hall');
e.at(31.5, -8.5, 'sister');
