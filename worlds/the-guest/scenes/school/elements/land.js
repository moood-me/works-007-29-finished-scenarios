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
const edge = (d, c) => -4.2 - 0.15 * (d - 6) - c;
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
  g.lineTo(X(a - 0.15 * len), Y(d + len));
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
// near: the snow's surface ridged by the wind — faint long ripples along it (the wind from the right)
g.lineCap = 'round';
for (let i = 0; i < 260; i++) {
  const a = -25 + e.rnd() * 45;
  const d = 0.5 + Math.pow(e.rnd(), 1.5) * 30;
  const len = 0.8 + e.rnd() * 2.6;
  g.strokeStyle = e.rnd() < 0.6 ? '#d3dbe4' : '#f2f5f8';
  g.globalAlpha = 0.55;
  g.lineWidth = 0.04 + e.rnd() * 0.06;
  g.beginPath();
  g.moveTo(X(a), Y(d));
  g.quadraticCurveTo(X(a + len / 2), Y(d + 0.15), X(a + len), Y(d + 0.05));
  g.stroke();
}
g.globalAlpha = 1;
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
// the path: up from the slope past the lip to the shed and the terrace's steps — the snow trodden and greyed along it,
// the footprints of the two who came up it (and of the boy who ran down), and lower down the slope, where the snow is
// thin, the mud showing
const path = [[2.0, 4.9], [0.5, 6.4], [-0.8, 7.8], [-2.5, 9.5], [-4.5, 11.5], [-6.5, 14], [-8.5, 17], [-10.5, 21], [-12, 26],
  [-13.8, 31], [-16, 38], [-20, 50], [-26, 65], [-35, 85], [-48, 110], [-65, 140], [-85, 180]];
function trace(width, color, alpha, from) {
  g.strokeStyle = color;
  g.globalAlpha = alpha;
  g.lineWidth = width;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.beginPath();
  g.moveTo(X(path[from][0]), Y(path[from][1]));
  for (let i = from + 1; i < path.length - 1; i++) {
    const [a, d] = path[i];
    const [a2, d2] = path[i + 1];
    g.quadraticCurveTo(X(a), Y(d), X((a + a2) / 2), Y((d + d2) / 2));
  }
  g.lineTo(X(path[path.length - 1][0]), Y(path[path.length - 1][1]));
  g.stroke();
  g.globalAlpha = 1;
}
trace(0.8, '#d9dfe6', 0.7, 0);
trace(0.3, '#b3aa98', 0.55, 6);
// the footprints: three trails along the path, each step a small pressed oval, the snow bluish in it
g.fillStyle = '#c9d1db';
for (let i = 0; i < 12; i++) {
  const [a0, d0] = path[i];
  const [a1, d1] = path[i + 1];
  const len = Math.hypot(a1 - a0, d1 - d0);
  const ux = (a1 - a0) / len;
  const uy = (d1 - d0) / len;
  for (let k = 0; k < 3; k++) {
    const off = (k - 1) * 0.22;
    for (let s = e.rnd() * 0.35; s < len; s += 0.32 + e.rnd() * 0.08) {
      const side = (Math.round(s / 0.34) % 2 ? 1 : -1) * 0.08;
      const a = a0 + ux * s - uy * (off + side);
      const d = d0 + uy * s + ux * (off + side);
      g.globalAlpha = 0.45 + 0.3 * e.rnd();
      g.beginPath();
      g.ellipse(X(a), Y(d), 0.06, 0.14, Math.atan2(ux, uy), 0, Math.PI * 2);
      g.fill();
    }
  }
}
g.globalAlpha = 1;
// stones: limestone coming through the snow
for (let i = 0; i < 90; i++) {
  const a = -28 + e.rnd() * 50;
  const d = 6 + Math.pow(e.rnd(), 1.3) * 45;
  if (a > -4 && a < 4.5 && d < 9) continue;
  const r = 0.08 + Math.pow(e.rnd(), 2) * 0.5;
  g.fillStyle = e.rnd() < 0.6 ? '#b4afa4' : '#bfb8a9';
  g.beginPath();
  g.ellipse(X(a), Y(d), r * (1 + e.rnd()), r, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
