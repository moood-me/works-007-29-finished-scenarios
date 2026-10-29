// What Mark threw down, on the grass round Jack, from above (metres, its middle at distance 5.0, y toward the viewer):
// torn pieces of Laohu — red wrapping paper with gold stars, its folds still creased into them, a leg here, a strip of
// flank with its stripes there; just paper now. There while `scraps` (and not a year on, `sold`). Two of them, lighter,
// lift and settle at an edge in the breeze (layers). The mini-game «Клочки» catches five of them, one by one — the
// points `scraps#s1` … `#s5`; `scraps_left` (5..0) says how many are still on the grass (the first caught first).
if (!e.state.scraps || e.state.sold) return;
const left = e.state.scraps_left ?? 5;
const L = '#e8503f',
  D = '#b02a20',
  GOLD = '#ecc65a',
  CREASE = 'rgba(90,20,15,0.55)';
const piece = (l, x, y, a, pts, stars) => {
  l.save();
  l.translate(x, y);
  l.rotate(a);
  l.fillStyle = L;
  l.beginPath();
  l.moveTo(pts[0][0], pts[0][1]);
  for (const p of pts.slice(1)) l.lineTo(p[0], p[1]);
  l.closePath();
  l.fill();
  l.fillStyle = D;
  l.beginPath();
  l.moveTo(pts[0][0], pts[0][1]);
  l.lineTo(pts[1][0], pts[1][1]);
  l.lineTo((pts[1][0] + pts[2][0]) / 2, (pts[1][1] + pts[2][1]) / 2);
  l.closePath();
  l.fill();
  l.strokeStyle = CREASE;
  l.lineWidth = 0.003;
  l.beginPath();
  l.moveTo(pts[0][0], pts[0][1]);
  l.lineTo(pts[2][0], pts[2][1]);
  l.stroke();
  l.fillStyle = GOLD;
  for (const [sx, sy] of stars) {
    l.beginPath();
    for (let i = 0; i < 10; i++) {
      const t = -Math.PI / 2 + (i * Math.PI) / 5,
        r = i % 2 ? 0.004 : 0.01;
      l.lineTo(sx + Math.cos(t) * r, sy + Math.sin(t) * r);
    }
    l.closePath();
    l.fill();
  }
  l.restore();
};
// the five he catches (in the order caught: s1 first), each where it lies; the ones caught are gone from the grass
const CAUGHT = [
  [-0.62, 0.18, 0.4, [[-0.06, -0.04], [0.07, -0.05], [0.05, 0.05], [-0.04, 0.06]], [[0.0, 0.0]]],
  [0.55, 0.32, -0.8, [[-0.05, -0.03], [0.06, -0.04], [0.04, 0.03]], [[0.01, -0.01]]],
  [-0.2, 0.45, 1.6, [[-0.08, -0.02], [0.08, -0.03], [0.07, 0.02], [-0.07, 0.03]], [[-0.03, 0.0], [0.04, 0.0]]],
  [0.75, -0.15, 2.2, [[-0.04, -0.04], [0.05, -0.03], [0.03, 0.05]], []],
  [0.1, -0.3, -1.2, [[-0.05, -0.04], [0.06, -0.03], [0.04, 0.04], [-0.04, 0.03]], [[0.0, 0.0]]],
];
CAUGHT.forEach(([x, y, a, pts, stars], i) => {
  if (i >= 5 - left) piece(g, x, y, a, pts, stars);
  e.at(x, y, ['s1', 's2', 's3', 's4', 's5'][i]);
});
e.layer('flutter', { pivot: [-0.86, -0.42], wind: { strength: 0.5, gust: 0.8, scale: 0.5 } }, l =>
  piece(l, -0.8, -0.4, 0.9, [[-0.06, -0.03], [0.07, -0.04], [0.06, 0.04], [-0.05, 0.03]], [[0.0, 0.0]]),
);
e.layer('flutter2', { pivot: [0.32, 0.55], wind: { strength: 0.45, gust: 0.8, scale: 0.5 } }, l =>
  piece(l, 0.36, 0.52, -0.3, [[-0.05, -0.02], [0.05, -0.03], [0.04, 0.03]], [[0.0, 0.0]]),
);
e.at(-0.62, 0.18, 'piece');
