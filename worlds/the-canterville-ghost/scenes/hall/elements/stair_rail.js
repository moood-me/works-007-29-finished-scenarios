// The front of the stair and the landing, at the line of their open side (6.4 m away; x as across): the landing's
// fascia beam on two newel posts (the right one the stair's top newel) and its balustrade; the stair's closed string
// rising from the bottom newel to it, the turned balusters and the handrail over it, and under it the spandrel shut
// with oak panels, a low cupboard door in it. Under the landing it is open: the far wall and the dining-room door are
// seen between the posts.
const L = e.lib;
const top = L.STAIR.top;
const up = x => -L.nosing(x);
// the spandrel: oak panels under the string, a cupboard door
g.save();
g.beginPath();
g.moveTo(1.0, 0.02);
g.lineTo(1.0, up(1.0) + 0.3);
g.lineTo(top, up(top) + 0.3);
g.lineTo(top, 0.02);
g.closePath();
g.clip();
g.fillStyle = L.OAK;
g.fillRect(top, -2.2, 1.0 - top, 2.22);
g.strokeStyle = L.OAK_DARK;
g.lineWidth = 0.04;
for (let x = top + 0.05; x < 1.0; x += 0.52) {
  g.strokeRect(x, -0.9, 0.44, 0.78);
  g.strokeRect(x, -2.0, 0.44, 1.0);
}
g.fillStyle = L.OAK_DARK;
g.fillRect(top, -0.14, 1.0 - top, 0.16);
g.restore();
g.fillStyle = '#44301f';
g.fillRect(-1.96, -1.18, 0.58, 1.18);
g.strokeStyle = L.OAK_DARK;
g.lineWidth = 0.03;
g.strokeRect(-1.9, -1.11, 0.46, 1.06);
g.fillStyle = '#b08a3a';
g.beginPath();
g.arc(-1.48, -0.58, 0.022, 0, Math.PI * 2);
g.fill();
// the string: a broad dark board along the stair's line, a lighter moulding on its top edge
g.fillStyle = L.OAK_DARK;
g.beginPath();
g.moveTo(1.06, up(1.06) - 0.08);
g.lineTo(top, up(top) - 0.08);
g.lineTo(top, up(top) + 0.3);
g.lineTo(1.06, Math.min(0.02, up(1.06) + 0.3));
g.closePath();
g.fill();
g.strokeStyle = L.OAK_LIGHT;
g.lineWidth = 0.035;
g.beginPath();
g.moveTo(1.06, up(1.06) - 0.08);
g.lineTo(top, up(top) - 0.08);
g.stroke();
// a turned baluster from y0 (its foot) up to y1
function baluster(x, y0, y1) {
  const h = y0 - y1;
  g.fillStyle = L.OAK;
  g.fillRect(x - 0.018, y1, 0.036, h);
  g.beginPath();
  g.ellipse(x, y0 - h * 0.32, 0.034, h * 0.16, 0, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = L.OAK_LIGHT;
  g.fillRect(x - 0.03, y1 + h * 0.12, 0.06, 0.02);
}
// the stair's balusters and its handrail, 0.9 m over the nosings
for (let x = top + 0.16; x < 0.92; x += 0.13) baluster(x, up(x) - 0.08, up(x) - 0.9);
g.fillStyle = L.OAK_DARK;
g.beginPath();
g.moveTo(1.06, up(1.06) - 0.88);
g.lineTo(top, up(top) - 0.88);
g.lineTo(top, up(top) - 0.98);
g.lineTo(1.06, up(1.06) - 0.98);
g.closePath();
g.fill();
// the landing: its fascia beam, its balustrade, its handrail
g.fillStyle = L.OAK_DARK;
g.fillRect(-5.62, -2.12, 5.62 + top, 0.24);
g.fillStyle = L.OAK_LIGHT;
g.fillRect(-5.62, -2.14, 5.62 + top, 0.04);
for (let x = -5.38; x < top - 0.1; x += 0.14) baluster(x, -2.12, -2.92);
g.fillStyle = L.OAK_DARK;
g.fillRect(-5.62, -3.0, 5.62 + top, 0.09);
// the newel posts: at the left wall, at the stair's head (to the floor: the landing's corner post), at its foot
function newel(x, y1) {
  g.fillStyle = L.OAK;
  g.fillRect(x - 0.08, y1, 0.16, -y1 + 0.02);
  g.fillStyle = L.OAK_DARK;
  g.fillRect(x - 0.08, y1, 0.16, 0.05);
  g.fillRect(x - 0.06, y1 + 0.25, 0.12, 0.03);
  g.fillStyle = L.OAK_LIGHT;
  g.fillRect(x - 0.1, y1 - 0.04, 0.2, 0.05);
  g.beginPath();
  g.arc(x, y1 - 0.12, 0.08, 0, Math.PI * 2);
  g.fill();
}
newel(-5.52, -3.06);
newel(top + 0.02, -3.06);
newel(1.04, up(1.04) - 1.02);
e.at(-3.5, -2.6, 'landing');
e.at(-0.6, up(-0.6) - 0.5, 'stair');
