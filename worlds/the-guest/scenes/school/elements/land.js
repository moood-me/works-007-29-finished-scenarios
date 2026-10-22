// The land seen from above, draped on the relief (metres; x across from across −1000, y toward the viewer from distance
// 2900; the plane spans across −4000…2000, distance −100…5900), in its daylight colours. The plateau under snow, thin
// and wind-scoured where it falls away on the left — grey limestone and dun earth showing in streaks along the slope —
// and the plain far below, dun with patches of snow, a douar's houses by its well; near, stones through the snow and the
// trodden path from the school down the slope to where the horse is left.
const A0 = -1000;
const D0 = 2900;
const X = a => a - A0;
const Y = d => D0 - d;
// where the land begins to fall (t = 0) and how far past that line a point is: t (relief.js)
const edge = (d, c) => -3 - 0.35 * (d - 6) - c;
// the snow
g.fillStyle = '#e4e9ef';
g.fillRect(-3000, -3000, 6000, 6000);
// a band of the land past the lip: from t = c0 to t = c1, as a polygon along its two edge lines
function band(c0, c1, color) {
  g.fillStyle = color;
  g.beginPath();
  g.moveTo(X(edge(-100, c0)), Y(-100));
  g.lineTo(X(edge(5900, c0)), Y(5900));
  g.lineTo(X(edge(5900, c1)), Y(5900));
  g.lineTo(X(edge(-100, c1)), Y(-100));
  g.closePath();
  g.fill();
}
// the slope: snow thinning as it steepens, the plain below dun earth
band(60, 200, '#dcdedf');
band(200, 320, '#cfcabe');
band(320, 6000, '#bfb39b');
// streaks of bare limestone and earth along the slope, following its contours
for (let i = 0; i < 420; i++) {
  const c = 4 + Math.pow(e.rnd(), 1.4) * 300;
  const d = -60 + Math.pow(e.rnd(), 1.6) * 2400;
  const len = 6 + e.rnd() * (12 + c * 0.3);
  const w = 0.6 + e.rnd() * (1.2 + c * 0.03);
  const a = edge(d, c);
  g.strokeStyle = e.rnd() < 0.55 ? '#a7a39a' : '#b4a68a';
  g.globalAlpha = 0.55 + 0.4 * e.rnd();
  g.lineWidth = w;
  g.lineCap = 'round';
  g.beginPath();
  g.moveTo(X(a), Y(d));
  g.lineTo(X(a - 0.35 * len), Y(d + len));
  g.stroke();
}
// snow lying on the plain in patches, and long drifts on the hill behind the school
for (let i = 0; i < 260; i++) {
  const d = 300 + e.rnd() * 5500;
  const a = edge(d, 300 + e.rnd() * 3000);
  if (a < -3990) continue;
  g.fillStyle = e.rnd() < 0.6 ? '#e2e5e8' : '#d6d4cc';
  g.globalAlpha = 0.6 + 0.4 * e.rnd();
  g.beginPath();
  g.ellipse(X(a), Y(d), 20 + e.rnd() * 90, 8 + e.rnd() * 30, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
// a dry riverbed (an oued) winding across the plain, pale gravel with a dark edge
g.lineCap = 'round';
g.lineJoin = 'round';
for (const [w, c] of [[60, '#9d8f78'], [40, '#cbbfa6']]) {
  g.strokeStyle = c;
  g.lineWidth = w;
  g.beginPath();
  g.moveTo(X(-3900), Y(900));
  for (let k = 1; k <= 20; k++) {
    const a = -3900 + k * 160;
    g.lineTo(X(a), Y(900 + 520 * k + 260 * Math.sin(k * 1.3)));
  }
  g.stroke();
}
// dark scrub scattered over the plain
for (let i = 0; i < 300; i++) {
  const d = 400 + e.rnd() * 5400;
  const a = edge(d, 330 + e.rnd() * 3500);
  if (a < -3990) continue;
  g.fillStyle = e.rnd() < 0.5 ? '#8b7f69' : '#7c735f';
  g.globalAlpha = 0.6;
  g.beginPath();
  g.ellipse(X(a), Y(d), 4 + e.rnd() * 14, 3 + e.rnd() * 8, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
// the douar by its well on the plain: low earth houses round a yard, and its fields' stone walls
const douar = [-640, 1450];
for (let i = 0; i < 22; i++) {
  const r = 8 + e.rnd() * 40;
  const an = e.rnd() * Math.PI * 2;
  g.fillStyle = e.rnd() < 0.5 ? '#8f7c63' : '#a08d72';
  g.fillRect(X(douar[0] + Math.cos(an) * r) - 4, Y(douar[1] + Math.sin(an) * r) - 3, 8 + e.rnd() * 8, 6 + e.rnd() * 5);
}
g.strokeStyle = '#9b8d76';
g.lineWidth = 1.5;
for (let i = 0; i < 9; i++) {
  g.beginPath();
  g.moveTo(X(douar[0] - 150 + e.rnd() * 300), Y(douar[1] - 150 + e.rnd() * 300));
  g.lineTo(X(douar[0] - 150 + e.rnd() * 300), Y(douar[1] - 150 + e.rnd() * 300));
  g.stroke();
}
// near: soft drifts of snow, a little bluer or warmer
for (let i = 0; i < 90; i++) {
  const a = -30 + e.rnd() * 60;
  const d = 1 + e.rnd() * 60;
  g.fillStyle = e.rnd() < 0.5 ? '#dde3ea' : '#e9ecef';
  g.globalAlpha = 0.3;
  g.beginPath();
  g.ellipse(X(a), Y(d), 1.5 + e.rnd() * 4, 0.6 + e.rnd() * 1.5, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
// the path: trodden snow and mud from the foot of the terrace down past the lip to the horse, and on down the slope
const path = [[1.8, 4.5], [0.3, 5.6], [-1.2, 6.6], [-3.0, 7.4], [-5.0, 8.4], [-7.4, 9.8], [-10.5, 13], [-14.5, 18], [-19.5, 24], [-25.5, 31],
  [-32, 40], [-39, 50], [-45, 62], [-49, 74], [-55, 88], [-64, 105], [-79, 130], [-99, 165], [-124, 205]];
function trace(width, color) {
  g.strokeStyle = color;
  g.lineWidth = width;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.beginPath();
  g.moveTo(X(path[0][0]), Y(path[0][1]));
  for (let i = 1; i < path.length - 1; i++) {
    const [a, d] = path[i];
    const [a2, d2] = path[i + 1];
    g.quadraticCurveTo(X(a), Y(d), X((a + a2) / 2), Y((d + d2) / 2));
  }
  g.lineTo(X(path[path.length - 1][0]), Y(path[path.length - 1][1]));
  g.stroke();
}
trace(1.1, '#d3d2cd');
trace(0.55, '#a89d8c');
// near stones: limestone coming through the snow, each a grey top and a snow cap's edge
for (let i = 0; i < 160; i++) {
  const a = -28 + e.rnd() * 50;
  const d = 1.5 + Math.pow(e.rnd(), 1.3) * 45;
  if (a > -4 && a < 4.5 && d < 9) continue;
  const r = 0.08 + Math.pow(e.rnd(), 2) * 0.5;
  g.fillStyle = e.rnd() < 0.6 ? '#9f9b92' : '#b2ab9c';
  g.beginPath();
  g.ellipse(X(a), Y(d), r * (1 + e.rnd()), r, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
  g.fillStyle = '#eef1f4';
  g.beginPath();
  g.ellipse(X(a) - r * 0.2, Y(d) - r * 0.25, r * 0.8, r * 0.5, 0, 0, Math.PI * 2);
  g.fill();
}
// under the eaves and round the walls of the school the snow is trodden and grey
g.fillStyle = '#d6d8d8';
g.globalAlpha = 0.5;
g.beginPath();
g.ellipse(X(0.2), Y(6.6), 3.0, 1.5, -0.35, 0, Math.PI * 2);
g.fill();
g.globalAlpha = 1;
