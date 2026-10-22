// Laohu: a tiger folded from Christmas wrapping paper — red, with gold stars — the size of a kitten, standing on the
// oilcloth with its head turned to the boy. Flat paper facets, each fold a shade lighter or darker, the creases
// drawn; the stars printed across folds as wrapping paper's are. Two layers: `tiger` (all of it but the tail — animate
// swells it with breath) and `tail` (pivoting at its root, ticking from pose to pose). Its head is its point.
const L = '#d8453a', M = '#c4362d', D = '#a2281f', CREASE = 'rgba(90,20,15,0.55)', GOLD = '#ecc65a';
const poly = (l, pts, fill) => {
  l.fillStyle = fill;
  l.beginPath();
  l.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) l.lineTo(pts[i][0], pts[i][1]);
  l.closePath();
  l.fill();
};
const crease = (l, pts) => {
  l.strokeStyle = CREASE;
  l.lineWidth = 0.0018;
  l.beginPath();
  l.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) l.lineTo(pts[i][0], pts[i][1]);
  l.stroke();
};
const star = (l, x, y, r) => {
  l.fillStyle = GOLD;
  l.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r;
    l.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
  }
  l.closePath();
  l.fill();
};
e.layer('tail', { pivot: [0.085, -0.1] }, l => {
  poly(l, [[0.08, -0.1], [0.12, -0.115], [0.135, -0.15], [0.125, -0.152], [0.112, -0.122], [0.082, -0.09]], M);
  poly(l, [[0.135, -0.15], [0.155, -0.175], [0.148, -0.18], [0.125, -0.152]], D);
  crease(l, [[0.082, -0.095], [0.118, -0.118], [0.13, -0.151]]);
  star(l, 0.112, -0.128, 0.006);
});
e.layer('tiger', { pivot: [0, 0] }, l => {
  // the far legs (darker, behind), then the near ones
  poly(l, [[-0.07, -0.06], [-0.055, -0.06], [-0.06, 0], [-0.075, 0]], D);
  poly(l, [[0.055, -0.06], [0.072, -0.06], [0.068, 0], [0.052, 0]], D);
  // the body: the flank (light) and the back folded over it (mid), the belly's fold under
  poly(l, [[-0.085, -0.115], [0.09, -0.108], [0.085, -0.055], [-0.075, -0.052]], L);
  poly(l, [[-0.085, -0.115], [0.09, -0.108], [0.07, -0.088], [-0.065, -0.093]], M);
  poly(l, [[-0.075, -0.052], [0.085, -0.055], [0.06, -0.045], [-0.055, -0.043]], D);
  crease(l, [[-0.065, -0.093], [0.07, -0.088]]);
  // the near legs, each a long triangle folded flat, the paw turned out
  poly(l, [[-0.06, -0.075], [-0.035, -0.075], [-0.042, 0], [-0.062, 0]], M);
  poly(l, [[-0.062, 0], [-0.042, 0], [-0.04, -0.008], [-0.07, -0.006]], D);
  poly(l, [[0.04, -0.075], [0.075, -0.08], [0.058, 0], [0.038, 0]], M);
  poly(l, [[0.038, 0], [0.058, 0], [0.06, -0.008], [0.032, -0.006]], D);
  crease(l, [[-0.048, -0.075], [-0.052, 0]]);
  crease(l, [[0.056, -0.078], [0.048, 0]]);
  // the stars across the body and legs
  for (const [x, y, r] of [[-0.04, -0.075, 0.008], [0.0, -0.068, 0.007], [0.035, -0.095, 0.006], [0.06, -0.07, 0.008], [-0.02, -0.1, 0.005], [-0.052, -0.03, 0.005], [0.05, -0.025, 0.005]]) star(l, x, y, r);
  // the head turned toward us, up and to the left: a broad diamond of a face, the cheeks folded back, the ears
  poly(l, [[-0.105, -0.175], [-0.05, -0.17], [-0.06, -0.11], [-0.1, -0.095], [-0.145, -0.125]], L);
  poly(l, [[-0.105, -0.175], [-0.05, -0.17], [-0.075, -0.145]], M);
  poly(l, [[-0.145, -0.125], [-0.1, -0.095], [-0.112, -0.12]], D);
  poly(l, [[-0.105, -0.175], [-0.118, -0.205], [-0.088, -0.18]], M);
  poly(l, [[-0.062, -0.172], [-0.052, -0.2], [-0.045, -0.168]], D);
  poly(l, [[-0.112, -0.188], [-0.104, -0.176], [-0.096, -0.18]], '#f0d9b8');
  crease(l, [[-0.105, -0.175], [-0.075, -0.145], [-0.05, -0.17]]);
  crease(l, [[-0.075, -0.145], [-0.1, -0.095]]);
  // the muzzle's fold, the eyes, the nose
  poly(l, [[-0.11, -0.12], [-0.088, -0.118], [-0.1, -0.1]], '#e2584a');
  l.fillStyle = '#1e1716';
  l.beginPath();
  l.ellipse(-0.105, -0.142, 0.0045, 0.0035, 0, 0, Math.PI * 2);
  l.ellipse(-0.078, -0.145, 0.0045, 0.0035, 0, 0, Math.PI * 2);
  l.fill();
  l.fillRect(-0.1, -0.124, 0.007, 0.004);
  star(l, -0.07, -0.128, 0.006);
});
e.at(-0.095, -0.14);
