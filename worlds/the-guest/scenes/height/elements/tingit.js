// Tingit, far down in the valley (2.4 km off, 650 m below): a small town of flat-roofed whitewashed houses on a low rise,
// a few red-tiled roofs of the French quarter, the mosque's square minaret, and on its near side the walled compound of
// the administration and the police with its gate (the point `gate`, where the Arab stares). Poplars along its gardens.
// Metres, from its foot (y 0), seen side-on from the hill; the morning sun from the left.
const WALL = ['#ece6d8', '#e4dccb', '#f0ebe0'];
const SHADE = '#b8b0a2';
// the rise it stands on
g.fillStyle = '#ab9f84';
g.beginPath();
g.moveTo(-420, 12);
g.quadraticCurveTo(-200, -14, 0, -16);
g.quadraticCurveTo(220, -15, 420, 12);
g.closePath();
g.fill();
// the poplars behind and among the houses
function poplar(x, base, h) {
  g.fillStyle = '#5b6447';
  g.beginPath();
  g.ellipse(x, base - h * 0.55, h * 0.13, h * 0.5, 0, 0, Math.PI * 2);
  g.fill();
}
for (let i = 0; i < 24; i++) poplar(-360 + e.rnd() * 720, -6 - e.rnd() * 10, 16 + e.rnd() * 12);
// a house: a block lit on its left face (the sun's side), its right face in shade, flat roof or tiles
function house(x, base, w, h, tiles) {
  const side = w * 0.35;
  g.fillStyle = WALL[Math.floor(e.rnd() * 3)];
  g.fillRect(x, base - h, w, h);
  g.fillStyle = SHADE;
  g.fillRect(x + w, base - h, side, h);
  if (tiles) {
    g.fillStyle = '#a65a43';
    g.beginPath();
    g.moveTo(x - 0.8, base - h);
    g.lineTo(x + (w + side) / 2, base - h - w * 0.3);
    g.lineTo(x + w + side + 0.8, base - h);
    g.closePath();
    g.fill();
  } else {
    g.fillStyle = '#d6cfc0';
    g.fillRect(x - 0.3, base - h - 0.6, w + side + 0.6, 0.8);
  }
  // a dark window or door or two
  g.fillStyle = '#5e5850';
  for (let k = 0; k < 2; k++) if (e.rnd() < 0.7) g.fillRect(x + 1 + e.rnd() * (w - 3), base - h * (0.35 + e.rnd() * 0.4), 1.2, 1.6);
}
// back rows first, up the rise; then the front
for (let row = 0; row < 3; row++) {
  const n = 18 - row * 3;
  for (let i = 0; i < n; i++) {
    const x = -330 + row * 60 + e.rnd() * (560 - row * 120);
    const base = -14 + row * 5;
    house(x, base, 8 + e.rnd() * 12, 5 + e.rnd() * 5, row === 2 && e.rnd() < 0.3);
  }
}
// the minaret: a square tower, its gallery and small dome
g.fillStyle = '#f2ede2';
g.fillRect(40, -42, 6, 32);
g.fillStyle = SHADE;
g.fillRect(46, -42, 2.4, 32);
g.fillStyle = '#e8e1d2';
g.fillRect(38.5, -44.5, 11.5, 2.5);
g.fillStyle = '#d8cfbd';
g.fillRect(41, -50, 5, 5.5);
g.beginPath();
g.arc(43.5, -50, 2.6, Math.PI, 0);
g.fill();
// the administration's compound, nearest, on the left: a long wall, a two-storeyed building with tiles, its gate
g.fillStyle = '#e9e2d2';
g.fillRect(-250, -9, 170, 9);
g.fillStyle = '#cfc7b6';
g.fillRect(-250, -9.6, 170, 0.8);
house(-215, -9, 40, 9, true);
g.fillStyle = '#4a4540';
g.fillRect(-131, -6, 5, 6);
e.at(-128.5, -3, 'gate');
// a flagpole by the gate
g.strokeStyle = '#4a4540';
g.lineWidth = 0.4;
g.beginPath();
g.moveTo(-119, -9);
g.lineTo(-119, -24);
g.stroke();
