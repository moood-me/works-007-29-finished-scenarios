// The land seen from above, draped on the relief (metres; x across, y toward the viewer from distance 9900; the plane
// spans across −20000…20000, distance −200…20000), in its daylight colours an hour after sunrise: the hilltop's pale
// limestone, pitted, stones everywhere; the path the two came by, across the top from behind on the right and on down
// the spur toward the town; the east slope's scree falling into the valley, the valley's dun floor, its dry riverbed,
// Tingit's gardens round the town; to the south the stony tableland, no road on it, going on to the olive-dun of the
// far pastures.
const D0 = 9900;
const X = a => a;
const Y = d => D0 - d;
// where the east slope begins (relief.js: t = 0), and, past the hilltop, where the valley's side meets the tableland
const edge = d => -3.5 - 270 * Math.min(1, Math.max(0, d - 9.5) / 1200);
function poly(points, color) {
  g.fillStyle = color;
  g.beginPath();
  points.forEach(([a, d], i) => (i ? g.lineTo(X(a), Y(d)) : g.moveTo(X(a), Y(d))));
  g.closePath();
  g.fill();
}
// the tableland, south
g.fillStyle = '#bbb19f';
g.fillRect(-20000, -10100, 40000, 20200);
// the south slope's scree below the hilltop
poly([[edge(9.5), 9.5], [20000, 9.5], [20000, 700], [edge(700), 700]], '#ada697');
// the east side, down from its edge: scree, the lower slope, the valley's floor
const side = (off, color) => {
  const pts = [];
  for (let d = -200; d <= 20000; d += d < 1000 ? 25 : 1000) pts.push([edge(d) - off, d]);
  pts.push([-20000, 20000], [-20000, -200]);
  poly(pts, color);
};
side(0, '#a19b8f');
side(200, '#aa9f88');
side(700, '#b5a886');
// the hilltop: pale limestone
poly([[-3.5, -200], [20000, -200], [20000, 9.5], [-3.5, 9.5]], '#b8b4aa');
// the slopes' grain: streaks of bare rock and scree along the contours
g.lineCap = 'round';
for (let i = 0; i < 260; i++) {
  const d = 9.5 + Math.pow(e.rnd(), 1.6) * 3000;
  const off = Math.pow(e.rnd(), 1.3) * 700;
  const a = edge(d) - off;
  const len = 6 + e.rnd() * (10 + off * 0.4);
  g.strokeStyle = e.rnd() < 0.55 ? '#958e80' : '#b9b09f';
  g.globalAlpha = 0.5 + 0.4 * e.rnd();
  g.lineWidth = 0.6 + e.rnd() * (1 + off * 0.02);
  g.beginPath();
  g.moveTo(X(a), Y(d));
  g.lineTo(X(a - 0.1 * len), Y(d + len));
  g.stroke();
}
for (let i = 0; i < 160; i++) {
  const u = Math.pow(e.rnd(), 1.4) * 700;
  const d = 11 + u;
  const a = edge(d) + 5 + e.rnd() * 3000;
  const len = 5 + e.rnd() * (8 + u * 0.3);
  g.strokeStyle = e.rnd() < 0.5 ? '#9f978a' : '#c4bbab';
  g.globalAlpha = 0.45 + 0.4 * e.rnd();
  g.lineWidth = 0.5 + e.rnd() * (0.8 + u * 0.02);
  g.beginPath();
  g.moveTo(X(a), Y(d));
  g.lineTo(X(a + len), Y(d + 0.1 * len));
  g.stroke();
}
// the far pastures, south: olive-dun stretches, greener in their hollows
for (let i = 0; i < 70; i++) {
  const d = 5500 + e.rnd() * 14000;
  const a = -1000 + e.rnd() * 9000;
  g.fillStyle = e.rnd() < 0.5 ? '#a9a681' : '#b2ac88';
  g.globalAlpha = 0.55 + 0.35 * e.rnd();
  g.beginPath();
  g.ellipse(X(a), Y(d), 300 + e.rnd() * 900, 80 + e.rnd() * 220, (e.rnd() - 0.5) * 0.4, 0, Math.PI * 2);
  g.fill();
}
// the tableland's stones: darker scatter, coarser the farther
for (let i = 0; i < 420; i++) {
  const d = 30 + Math.pow(e.rnd(), 2.2) * 9000;
  const a = edge(d) + 5 + (e.rnd() - 0.25) * (60 + d * 1.2);
  const r = 0.15 + d * 0.004 * (0.5 + e.rnd());
  g.fillStyle = e.rnd() < 0.6 ? '#9d9483' : '#d0c6b2';
  g.globalAlpha = 0.6;
  g.beginPath();
  g.ellipse(X(a), Y(d), r * (1 + e.rnd()), r, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
// the valley: its dry riverbed winding north past the town, pale gravel with a darker edge
for (const [w, c] of [[34, '#9b8e74'], [20, '#cdc2a8']]) {
  g.strokeStyle = c;
  g.lineWidth = w;
  g.lineJoin = 'round';
  g.beginPath();
  g.moveTo(X(-1450), Y(20000));
  for (let k = 1; k <= 26; k++) {
    const d = 20000 - k * 780;
    g.lineTo(X(-1250 - 260 * Math.sin(k * 0.9) - (d < 4000 ? 750 * (1 - d / 4000) : 0)), Y(d));
  }
  g.stroke();
}
// Tingit's gardens and fields round the town: squares of dark earth and green, a few lines of trees
const town = [-900, 2250];
for (let i = 0; i < 70; i++) {
  const a = town[0] - 600 + e.rnd() * 1200;
  const d = town[1] - 450 + e.rnd() * 1000;
  g.fillStyle = ['#8f8a62', '#7f7d58', '#a0916e', '#968e66'][Math.floor(e.rnd() * 4)];
  g.globalAlpha = 0.85;
  g.save();
  g.translate(X(a), Y(d));
  g.rotate(0.12);
  g.fillRect(-25 - e.rnd() * 40, -15 - e.rnd() * 25, 50 + e.rnd() * 80, 30 + e.rnd() * 50);
  g.restore();
}
g.fillStyle = '#4e5a3f';
for (let i = 0; i < 160; i++) {
  const row = Math.floor(e.rnd() * 6);
  const a = town[0] - 500 + row * 190 + (e.rnd() - 0.5) * 30;
  const d = town[1] - 420 + e.rnd() * 900;
  g.beginPath();
  g.arc(X(a), Y(d), 4 + e.rnd() * 4, 0, Math.PI * 2);
  g.fill();
}
g.globalAlpha = 1;
// the limestone's pits and cracks
g.strokeStyle = '#8f887b';
g.lineWidth = 0.018;
for (let i = 0; i < 120; i++) {
  const a = -12 + e.rnd() * 30;
  const d = 0.5 + Math.pow(e.rnd(), 1.3) * 16;
  g.globalAlpha = 0.5;
  g.beginPath();
  g.moveTo(X(a), Y(d));
  g.lineTo(X(a + (e.rnd() - 0.5) * 0.5), Y(d + (e.rnd() - 0.5) * 0.3));
  g.lineTo(X(a + (e.rnd() - 0.5) * 0.7), Y(d + (e.rnd() - 0.5) * 0.5));
  g.stroke();
}
// stones lying everywhere on the top, small and many near
for (let i = 0; i < 700; i++) {
  const a = -15 + e.rnd() * 34;
  const d = 0.4 + Math.pow(e.rnd(), 1.5) * 20;
  const r = 0.02 + Math.pow(e.rnd(), 2.5) * 0.12;
  g.fillStyle = ['#a39c8e', '#cbc4b4', '#958d7f', '#b8ae9c'][Math.floor(e.rnd() * 4)];
  g.globalAlpha = 1;
  g.beginPath();
  g.ellipse(X(a), Y(d), r * (1 + e.rnd() * 0.8), r, e.rnd() * 3, 0, Math.PI * 2);
  g.fill();
}

// the path: from behind on the right across the top, and on down the spur and along the valley to the town —
// trodden earth, its mud wet and dark near, a pale line far down in the valley
const path = [[4.2, -8], [4.2, -1], [2.8, 2.2], [1.4, 4.8], [0, 6.8], [-2.2, 8.8], [-5, 11.2], [-8.5, 15], [-13, 21],
  [-20, 30], [-30, 43], [-44, 60], [-62, 82], [-85, 110], [-115, 150], [-160, 210], [-230, 300], [-330, 430],
  [-470, 640], [-580, 900], [-700, 1300], [-810, 1750], [-880, 2170]];
g.lineCap = 'round';
g.lineJoin = 'round';
for (let i = 0; i < path.length - 1; i++) {
  const [a0, d0] = path[i];
  const [a1, d1] = path[i + 1];
  g.strokeStyle = d1 < 40 ? '#8b7f6c' : '#c9bea6';
  g.globalAlpha = d1 < 40 ? 0.8 : 0.75;
  g.lineWidth = 0.75 + 0.003 * d1;
  g.beginPath();
  g.moveTo(X(a0), Y(d0));
  g.lineTo(X(a1), Y(d1));
  g.stroke();
}
// the two men's footprints in its mud this morning
g.fillStyle = '#6f6556';
for (let i = 0; i < 6; i++) {
  const [a0, d0] = path[i];
  const [a1, d1] = path[i + 1];
  const len = Math.hypot(a1 - a0, d1 - d0);
  const ux = (a1 - a0) / len;
  const uy = (d1 - d0) / len;
  for (let k = 0; k < 2; k++) {
    const off = (k - 0.5) * 0.3;
    for (let s = e.rnd() * 0.35; s < len; s += 0.36 + e.rnd() * 0.1) {
      const sd = (Math.round(s / 0.38) % 2 ? 1 : -1) * 0.07;
      g.globalAlpha = 0.35 + 0.25 * e.rnd();
      g.beginPath();
      g.ellipse(X(a0 + ux * s - uy * (off + sd)), Y(d0 + uy * s + ux * (off + sd)), 0.055, 0.13, Math.atan2(ux, uy), 0, Math.PI * 2);
      g.fill();
    }
  }
}
g.globalAlpha = 1;
