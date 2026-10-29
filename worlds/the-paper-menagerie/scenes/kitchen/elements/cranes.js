// The paper cranes and frogs of «the whole house» at the window (its face the window's: the opening x −0.65…0.65,
// from the sill at 0 up 1.1 m), by `menagerie`: "sill" — the morning they are found (3.1), the only things not packed:
// three cranes and two frogs on the bare sill, still; "awake" — the day the house wakes (3.2), the cranes flown up
// onto the curtains and their rod, each a layer that lifts and settles now and then (animate). "none" — nothing.
const m = e.state.menagerie;
if (m !== 'sill' && m !== 'awake') return;
const tri = (l, pts, c) => {
  l.fillStyle = c;
  l.beginPath();
  l.moveTo(pts[0][0], pts[0][1]);
  for (const p of pts.slice(1)) l.lineTo(p[0], p[1]);
  l.closePath();
  l.fill();
};
// a crane standing at x, y (its feet), facing right (s 1) or left (s −1), its paper's colours: a light and a shade
const crane = (l, x, y, s, w, d) => {
  const X = v => x + s * v;
  tri(l, [[X(-0.03), y - 0.035], [X(0.03), y - 0.035], [X(0), y]], d);
  tri(l, [[X(-0.03), y - 0.035], [X(-0.1), y - 0.11], [X(-0.012), y - 0.03]], w);
  tri(l, [[X(0.03), y - 0.035], [X(0.1), y - 0.1], [X(0.012), y - 0.03]], w);
  tri(l, [[X(0.1), y - 0.1], [X(0.118), y - 0.088], [X(0.1), y - 0.09]], w);
  tri(l, [[X(-0.03), y - 0.035], [X(0), y - 0.08], [X(0.03), y - 0.035], [X(0), y - 0.02]], d);
  tri(l, [[X(0), y - 0.08], [X(0.03), y - 0.035], [X(0.06), y - 0.055]], w);
};
const frog = (l, x, y, c, d) => {
  l.fillStyle = c;
  l.beginPath();
  l.ellipse(x, y - 0.025, 0.045, 0.026, 0, 0, Math.PI * 2);
  l.fill();
  tri(l, [[x - 0.045, y], [x - 0.02, y - 0.03], [x - 0.005, y]], d);
  tri(l, [[x + 0.045, y], [x + 0.02, y - 0.03], [x + 0.005, y]], d);
  l.fillStyle = '#2a2624';
  l.fillRect(x - 0.022, y - 0.05, 0.007, 0.007);
  l.fillRect(x + 0.015, y - 0.05, 0.007, 0.007);
};
const PAPERS = [
  ['#f6f4ec', '#dcd8cc'],
  ['#f2d6cf', '#e0b7ae'],
  ['#d7e6f0', '#b7cad8'],
  ['#f4e7b8', '#dfcd8f'],
];
if (m === 'sill') {
  crane(g, -0.45, -0.01, 1, ...PAPERS[0]);
  crane(g, -0.2, -0.01, -1, ...PAPERS[1]);
  crane(g, 0.42, -0.01, 1, ...PAPERS[2]);
  frog(g, 0.1, -0.005, '#86b874', '#6a9a5c');
  frog(g, 0.24, -0.005, '#b8d27a', '#98b25e');
  e.at(-0.2, -0.06, 'cranes');
} else {
  [
    [-0.55, -1.02, 1],
    [0.45, -1.02, -1],
    [-0.5, -0.48, 1],
    [0.52, -0.5, -1],
  ].forEach(([x, y, s], i) => e.layer(`crane${i}`, { pivot: [x, y] }, l => crane(l, x, y, s, ...PAPERS[i])));
  e.at(-0.55, -1.08, 'cranes');
}
