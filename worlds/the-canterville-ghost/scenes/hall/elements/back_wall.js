// The hall's far wall (11.2 m, across −5.6…5.6, 8 m away; x as across): oak to the beams. From the left: under the
// landing the door to the dining room; on the landing (2.1 m up) the dark archway to the upper flight and the hidden
// panel (x −4.35…−3.55, 1.85 m high, cut through — its leaf is `panel`, the way behind it `passage`); the wall string
// of the stair rising to it, two old portraits over the stair; the front door in its stone surround with the fanlight
// over it (x 2.1…3.7, cut through: its leaves are `door_l`, `door_r`), the Canterville arms above; the tall window onto
// the pond (x 4.1…5.0, cut through: its bars are `window`). Three sconces: by the clock, right of the window, on the
// landing (their lights back_wall#sconce_l, #sconce_r, #sconce_landing).
const L = e.lib;
L.oak(g, -5.62, 5.62, 5.6);
// the stair's wall string: a dark board along the treads' line against the wall
g.fillStyle = L.OAK_DARK;
g.beginPath();
g.moveTo(1.12, 0.02);
g.lineTo(1.12, -(L.nosing(1.12) + 0.22));
g.lineTo(L.STAIR.top, -(L.nosing(L.STAIR.top) + 0.22));
g.lineTo(L.STAIR.top, 0.02);
g.closePath();
g.fill();
// under the landing: the door to the dining room, shut
g.fillStyle = L.OAK_DARK;
g.fillRect(-4.68, -1.83, 1.16, 1.85);
g.fillStyle = '#4a3020';
g.fillRect(-4.58, -1.75, 0.96, 1.77);
g.strokeStyle = L.OAK_DARK;
g.lineWidth = 0.035;
g.strokeRect(-4.5, -1.65, 0.36, 0.7);
g.strokeRect(-4.06, -1.65, 0.36, 0.7);
g.strokeRect(-4.5, -0.85, 0.36, 0.7);
g.strokeRect(-4.06, -0.85, 0.36, 0.7);
g.fillStyle = '#b08a3a';
g.beginPath();
g.arc(-3.72, -0.95, 0.03, 0, Math.PI * 2);
g.fill();
// on the landing: the archway to the upper flight, dark, three steps going up to the left in it
g.fillStyle = '#7d7468';
g.beginPath();
g.moveTo(-5.55, -2.1);
g.lineTo(-5.55, -3.75);
g.ellipse(-5.1, -3.75, 0.45, 0.42, 0, Math.PI, 0);
g.lineTo(-4.65, -2.1);
g.closePath();
g.fill();
const dark = g.createLinearGradient(-4.75, 0, -5.45, 0);
dark.addColorStop(0, '#2a1e16');
dark.addColorStop(1, '#120c09');
g.fillStyle = dark;
g.beginPath();
g.moveTo(-5.45, -2.1);
g.lineTo(-5.45, -3.75);
g.ellipse(-5.1, -3.75, 0.35, 0.32, 0, Math.PI, 0);
g.lineTo(-4.75, -2.1);
g.closePath();
g.fill();
g.fillStyle = '#3a2a1e';
for (let i = 0; i < 3; i++) g.fillRect(-5.45, -2.1 - (i + 1) * 0.17, 0.7 - i * 0.22, 0.04);
// the hidden panel's frame on the landing: the same oak, a hair's line round it
g.fillStyle = L.OAK_LIGHT;
g.fillRect(-4.41, -4.01, 0.92, 1.93);
// two portraits over the stair: a gentleman in a ruff, a lady above him
L.portrait(g, -0.35, -3.95, 0.55, -2.7, false);
L.portrait(g, -1.8, -4.75, -0.9, -3.45, true);
// the front door's stone surround: jambs and an arch round the fanlight, a keystone
g.fillStyle = '#9a9184';
g.fillRect(1.9, -2.9, 2.0, 2.92);
g.beginPath();
g.arc(2.9, -2.9, 1.0, Math.PI, 0);
g.fill();
g.fillStyle = '#b4ab9c';
g.beginPath();
g.moveTo(2.78, -3.92);
g.lineTo(3.02, -3.92);
g.lineTo(2.98, -3.68);
g.lineTo(2.82, -3.68);
g.closePath();
g.fill();
// the Canterville arms carved over it: a shield, gules, a silver chevron between three gold lions' heads
g.fillStyle = L.OAK_DARK;
g.fillRect(2.45, -4.95, 0.9, 0.9);
g.fillStyle = '#8e2328';
g.beginPath();
g.moveTo(2.6, -4.85);
g.lineTo(3.2, -4.85);
g.lineTo(3.2, -4.5);
g.quadraticCurveTo(3.2, -4.2, 2.9, -4.12);
g.quadraticCurveTo(2.6, -4.2, 2.6, -4.5);
g.closePath();
g.fill();
g.strokeStyle = '#d9d4c4';
g.lineWidth = 0.05;
g.beginPath();
g.moveTo(2.66, -4.33);
g.lineTo(2.9, -4.6);
g.lineTo(3.14, -4.33);
g.stroke();
g.fillStyle = '#d8b24a';
for (const [x, y] of [[2.74, -4.73], [3.06, -4.73], [2.9, -4.25]]) {
  g.beginPath();
  g.arc(x, y, 0.045, 0, Math.PI * 2);
  g.fill();
}
// the window's stone reveal
g.fillStyle = '#9a9184';
g.fillRect(3.98, -3.62, 1.14, 2.99);
g.fillStyle = '#b4ab9c';
g.fillRect(3.94, -0.72, 1.22, 0.08);
// the sconces
L.sconce(g, e, 1.62, -2.75, 'sconce_l');
L.sconce(g, e, 5.36, -2.4, 'sconce_r');
L.sconce(g, e, -2.5, -3.9, 'sconce_landing');
// the openings, cut through: the panel's, the door's and its fanlight, the window's
g.globalCompositeOperation = 'destination-out';
g.fillRect(-4.35, -3.95, 0.8, 1.87);
g.fillRect(2.1, -2.9, 1.6, 2.92);
g.beginPath();
g.arc(2.9, -2.9, 0.8, Math.PI, 0);
g.fill();
g.fillRect(4.1, -3.5, 0.9, 2.75);
g.globalCompositeOperation = 'source-over';
// the fanlight's iron: the bar under it, the spokes, a ring
g.fillStyle = '#2a2622';
g.fillRect(2.1, -2.93, 1.6, 0.06);
g.strokeStyle = '#2a2622';
g.lineWidth = 0.03;
for (let i = 1; i < 6; i++) {
  const a = Math.PI + (i * Math.PI) / 6;
  g.beginPath();
  g.moveTo(2.9, -2.9);
  g.lineTo(2.9 + Math.cos(a) * 0.8, -2.9 + Math.sin(a) * 0.8);
  g.stroke();
}
g.beginPath();
g.arc(2.9, -2.9, 0.42, Math.PI, 0);
g.stroke();
e.at(-3.95, -3.0, 'panel');
e.at(2.9, -1.5, 'door');
e.at(4.55, -2.1, 'window');
