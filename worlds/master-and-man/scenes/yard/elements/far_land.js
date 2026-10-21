// The land far beyond the fence, 300 m off: the white fields rolling to a long dark line of forest, and the roofs of
// the village's end under snow. Painted solid; the haze makes it pale.
// (x −400…400 m, its foot at 0)
g.fillStyle = "#e3e8ee";
g.fillRect(-400, -2, 800, 2);

// the forest: a dark blue-grey band, its top a ragged line of firs and bare crowns
g.fillStyle = "#4f5b6b";
g.beginPath();
g.moveTo(-400, 0);
let x = -400;
while (x < 400) {
  const fir = e.rnd() < 0.55;
  const h = 9 + e.rnd() * 7;
  const w = fir ? 2 + e.rnd() * 2 : 4 + e.rnd() * 5;
  if (fir) {
    g.lineTo(x, -h * 0.55);
    g.lineTo(x + w / 2, -h);
    g.lineTo(x + w, -h * 0.55);
  } else {
    g.quadraticCurveTo(x + w / 2, -h * 1.05, x + w, -h * 0.7);
  }
  x += w * 0.8;
}
g.lineTo(400, 0);
g.closePath();
g.fill();
// (snow on the forest's edge, the fields lying up to it)
g.fillStyle = "#dfe5ec";
g.beginPath();
g.moveTo(-400, 0);
for (let i = 0; i <= 40; i++) {
  const xx = -400 + i * 20;
  g.lineTo(xx, -1.2 - 1.4 * Math.sin(i * 0.9) * Math.sin(i * 0.37));
}
g.lineTo(400, 0);
g.closePath();
g.fill();

// the village's end, far to the left of the church: a few huts, their roofs heavy with snow
for (let i = 0; i < 7; i++) {
  const hx = -120 + i * 17 + e.rnd() * 6;
  const w = 7 + e.rnd() * 3;
  const wall = 3 + e.rnd();
  g.fillStyle = "#6e6458";
  g.fillRect(hx, -1.5 - wall, w, wall);
  g.fillStyle = "#edf1f5";
  g.beginPath();
  g.moveTo(hx - 0.8, -1.5 - wall);
  g.lineTo(hx + w / 2, -1.5 - wall - 3.6);
  g.lineTo(hx + w + 0.8, -1.5 - wall);
  g.closePath();
  g.fill();
}
