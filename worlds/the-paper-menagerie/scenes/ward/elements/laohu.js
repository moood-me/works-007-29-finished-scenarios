// Laohu on the bedside table: the tiger folded from Christmas wrapping paper — red, gold stars — folded again by her
// here, a little crooked, and asleep: paper, not stirring (drawn S times the sizes written). Flat facets, each fold a
// shade lighter or darker, the creases drawn; the head down, the eyes two shut creases; the tail with one fold too
// many near its root, bent askew; on its flank the old tape, yellowed, and over it a strip of fresh tape catching the
// light. laohu_ear: the torn ear gone, its stub taped flat. Its head is its point.
const S = 1.1,
  L = '#e8503f',
  M = '#d23a2e',
  D = '#b02a20',
  CREASE = 'rgba(90,20,15,0.55)',
  GOLD = '#ecc65a';
const poly = (pts, fill) => {
  g.fillStyle = fill;
  g.beginPath();
  g.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
  g.closePath();
  g.fill();
};
const crease = pts => {
  g.strokeStyle = CREASE;
  g.lineWidth = 0.0018;
  g.beginPath();
  g.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
  g.stroke();
};
const star = (x, y, r) => {
  g.fillStyle = GOLD;
  g.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5,
      rr = i % 2 ? r * 0.42 : r;
    g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
  }
  g.closePath();
  g.fill();
};
g.save();
g.scale(S, S);
// the tail: its root, the crooked extra fold, the rest bent off askew
poly([[0.08, -0.1], [0.11, -0.104], [0.112, -0.09], [0.084, -0.088]], M);
poly([[0.11, -0.104], [0.124, -0.098], [0.118, -0.084], [0.112, -0.09]], D);
crease([[0.11, -0.104], [0.112, -0.09]]);
poly([[0.124, -0.098], [0.16, -0.11], [0.166, -0.1], [0.118, -0.084]], M);
poly([[0.16, -0.11], [0.18, -0.104], [0.166, -0.1]], D);
star(0.14, -0.1, 0.005);
// the far legs, then the body: flank, back folded over it, the belly's fold
poly([[-0.07, -0.06], [-0.055, -0.06], [-0.06, 0], [-0.075, 0]], D);
poly([[0.055, -0.06], [0.072, -0.06], [0.068, 0], [0.052, 0]], D);
poly([[-0.085, -0.112], [0.09, -0.108], [0.085, -0.055], [-0.075, -0.052]], L);
poly([[-0.085, -0.112], [0.09, -0.108], [0.07, -0.088], [-0.065, -0.091]], M);
poly([[-0.075, -0.052], [0.085, -0.055], [0.06, -0.045], [-0.055, -0.043]], D);
crease([[-0.065, -0.091], [0.07, -0.088]]);
for (const x of [-0.052, -0.018, 0.016, 0.05]) {
  poly([[x - 0.006, -0.092], [x + 0.008, -0.091], [x + 0.002, -0.06], [x - 0.004, -0.06]], D);
  crease([[x + 0.008, -0.091], [x + 0.002, -0.06]]);
}
// the near legs, the paws turned out
poly([[-0.06, -0.075], [-0.035, -0.075], [-0.042, 0], [-0.062, 0]], M);
poly([[-0.062, 0], [-0.042, 0], [-0.04, -0.008], [-0.07, -0.006]], D);
poly([[0.04, -0.075], [0.075, -0.08], [0.058, 0], [0.038, 0]], M);
poly([[0.038, 0], [0.058, 0], [0.06, -0.008], [0.032, -0.006]], D);
crease([[-0.048, -0.075], [-0.052, 0]]);
crease([[0.056, -0.078], [0.048, 0]]);
for (const [x, y, r] of [
  [-0.04, -0.075, 0.008],
  [0.0, -0.068, 0.007],
  [0.035, -0.095, 0.006],
  [0.06, -0.07, 0.008],
  [-0.052, -0.03, 0.005],
  [0.05, -0.025, 0.005],
])
  star(x, y, r);
// the tape: the old strip, yellowed, across the flank; the fresh one over it, clear, catching the light
poly([[-0.03, -0.1], [0.0, -0.104], [0.012, -0.06], [-0.018, -0.056]], 'rgba(236,214,150,0.55)');
poly([[0.012, -0.098], [0.036, -0.1], [0.044, -0.062], [0.02, -0.06]], 'rgba(244,244,236,0.5)');
g.fillStyle = 'rgba(255,255,255,0.55)';
g.fillRect(0.02, -0.096, 0.004, 0.032);
// the head, lowered, looking ahead and down: the face's diamond, the cheeks folded back, the ears
poly([[-0.112, -0.15], [-0.058, -0.148], [-0.064, -0.09], [-0.1, -0.075], [-0.146, -0.104]], L);
poly([[-0.112, -0.15], [-0.058, -0.148], [-0.08, -0.124]], M);
poly([[-0.146, -0.104], [-0.1, -0.075], [-0.114, -0.1]], D);
if (e.state.laohu_ear) {
  poly([[-0.112, -0.15], [-0.116, -0.158], [-0.1, -0.152]], M);
  g.fillStyle = 'rgba(240,238,226,0.55)';
  g.fillRect(-0.122, -0.162, 0.03, 0.012);
} else {
  poly([[-0.112, -0.15], [-0.124, -0.18], [-0.095, -0.155]], M);
  poly([[-0.118, -0.163], [-0.11, -0.152], [-0.102, -0.156]], '#f0d9b8');
}
poly([[-0.068, -0.148], [-0.058, -0.176], [-0.051, -0.146]], D);
crease([[-0.112, -0.15], [-0.08, -0.124], [-0.058, -0.148]]);
crease([[-0.08, -0.124], [-0.1, -0.075]]);
poly([[-0.114, -0.1], [-0.092, -0.098], [-0.104, -0.08]], '#e2584a');
// the eyes shut — two short creases — and the nose
g.strokeStyle = '#1e1716';
g.lineWidth = 0.0028;
g.beginPath();
g.moveTo(-0.114, -0.122);
g.quadraticCurveTo(-0.108, -0.118, -0.102, -0.122);
g.moveTo(-0.088, -0.124);
g.quadraticCurveTo(-0.082, -0.12, -0.076, -0.124);
g.stroke();
g.fillStyle = '#1e1716';
g.fillRect(-0.104, -0.104, 0.007, 0.004);
star(-0.072, -0.108, 0.005);
for (const [x, y] of [
  [-0.15, -0.098],
  [-0.148, -0.088],
  [-0.066, -0.098],
  [-0.068, -0.088],
])
  crease([[-0.102, -0.094], [x, y]]);
g.restore();
e.at(-0.1 * S, -0.12 * S);
