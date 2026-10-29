// Laohu: the tiger folded from Christmas wrapping paper — red, with gold stars — the size of a kitten, standing where
// laohu_a, laohu_d, laohu_e put him (the quilt, the pillow, the shelf, the floor), his head turned to us and up a
// little (drawn S times the sizes written; the kitchen's Laohu). Flat paper facets, each fold a shade lighter or
// darker, the creases drawn; the stripes pleats down the flank; the stars printed across the folds. Two layers: `tiger`
// (all of him but the tail — the animate swells it with breath) and `tail` (pivoting at its root, ticking from pose to
// pose). By his keys: `laohu_out` false — not to be seen (in the box, torn); `laohu_tape` — taped together after Mark
// tore him (a strip of clear tape across the flank, catching the light); `laohu_fold` — folded again by her in hospital
// (the tail's root with one fold too many, crooked; the old tape yellowed under the fresh); `laohu_ear` (the game's
// «Ухо») — the torn ear lost, its stub taped flat; `laohu_asleep` — the eyes two shut creases; `laohu_dust` — dusty
// from the attic; `laohu_seam` (the game's «Шов», in the animate) — he leans, falling to one side. His head is his
// point; `laohu#back` — along his back, where a hand strokes him.
const st = e.state;
if (st.laohu_out) {
  const S = 1.4,
    L = '#e8503f',
    M = '#d23a2e',
    D = '#b02a20',
    CREASE = 'rgba(90,20,15,0.55)',
    GOLD = '#ecc65a';
  const poly = (l, pts, fill) => e.lib.poly(l, pts, fill);
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
      const a = -Math.PI / 2 + (i * Math.PI) / 5,
        rr = i % 2 ? r * 0.42 : r;
      l.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
    }
    l.closePath();
    l.fill();
  };
  e.layer('tail', { pivot: [0.085 * S, -0.1 * S] }, l => {
    l.scale(S, S);
    if (st.laohu_fold) {
      // her extra fold at the root, crooked; the rest bent off askew
      poly(l, [[0.08, -0.1], [0.11, -0.104], [0.112, -0.09], [0.084, -0.088]], M);
      poly(l, [[0.11, -0.104], [0.124, -0.098], [0.118, -0.084], [0.112, -0.09]], D);
      crease(l, [[0.11, -0.104], [0.112, -0.09]]);
      poly(l, [[0.124, -0.098], [0.15, -0.13], [0.16, -0.124], [0.118, -0.084]], M);
      poly(l, [[0.15, -0.13], [0.168, -0.15], [0.16, -0.124]], D);
      star(l, 0.138, -0.11, 0.005);
    } else {
      poly(l, [[0.08, -0.1], [0.12, -0.115], [0.135, -0.15], [0.125, -0.152], [0.112, -0.122], [0.082, -0.09]], M);
      poly(l, [[0.135, -0.15], [0.155, -0.175], [0.148, -0.18], [0.125, -0.152]], D);
      crease(l, [[0.082, -0.095], [0.118, -0.118], [0.13, -0.151]]);
      star(l, 0.112, -0.128, 0.006);
    }
    if (st.laohu_dust) e.lib.dust(l, 0.05, -0.2, 0.15, 0.13);
  });
  e.layer('tiger', { pivot: [0, 0] }, l => {
    l.scale(S, S);
    poly(l, [[-0.07, -0.06], [-0.055, -0.06], [-0.06, 0], [-0.075, 0]], D);
    poly(l, [[0.055, -0.06], [0.072, -0.06], [0.068, 0], [0.052, 0]], D);
    poly(l, [[-0.085, -0.115], [0.09, -0.108], [0.085, -0.055], [-0.075, -0.052]], L);
    poly(l, [[-0.085, -0.115], [0.09, -0.108], [0.07, -0.088], [-0.065, -0.093]], M);
    poly(l, [[-0.075, -0.052], [0.085, -0.055], [0.06, -0.045], [-0.055, -0.043]], D);
    crease(l, [[-0.065, -0.093], [0.07, -0.088]]);
    for (const x of [-0.052, -0.018, 0.016, 0.05]) {
      poly(l, [[x - 0.006, -0.094], [x + 0.008, -0.093], [x + 0.002, -0.06], [x - 0.004, -0.06]], D);
      crease(l, [[x + 0.008, -0.093], [x + 0.002, -0.06]]);
    }
    poly(l, [[-0.06, -0.075], [-0.035, -0.075], [-0.042, 0], [-0.062, 0]], M);
    poly(l, [[-0.062, 0], [-0.042, 0], [-0.04, -0.008], [-0.07, -0.006]], D);
    poly(l, [[0.04, -0.075], [0.075, -0.08], [0.058, 0], [0.038, 0]], M);
    poly(l, [[0.038, 0], [0.058, 0], [0.06, -0.008], [0.032, -0.006]], D);
    crease(l, [[-0.048, -0.075], [-0.052, 0]]);
    crease(l, [[0.056, -0.078], [0.048, 0]]);
    for (const [x, y, r] of [[-0.04, -0.075, 0.008], [0.0, -0.068, 0.007], [0.035, -0.095, 0.006], [0.06, -0.07, 0.008], [-0.02, -0.1, 0.005], [-0.052, -0.03, 0.005], [0.05, -0.025, 0.005]])
      star(l, x, y, r);
    if (st.laohu_tape) {
      // the tape where she joined the halves: on her second folding the old strip yellowed, a fresh one over it
      if (st.laohu_fold) poly(l, [[-0.03, -0.102], [0.0, -0.106], [0.012, -0.06], [-0.018, -0.056]], 'rgba(236,214,150,0.6)');
      poly(l, [[0.008, -0.1], [0.034, -0.103], [0.044, -0.058], [0.018, -0.056]], 'rgba(246,246,238,0.55)');
      l.fillStyle = 'rgba(255,255,255,0.6)';
      l.fillRect(0.02, -0.096, 0.004, 0.034);
    }
    // the head, turned toward us and up: the face's diamond, the cheeks folded back, the ears
    poly(l, [[-0.105, -0.175], [-0.05, -0.17], [-0.06, -0.11], [-0.1, -0.095], [-0.145, -0.125]], L);
    poly(l, [[-0.105, -0.175], [-0.05, -0.17], [-0.075, -0.145]], M);
    poly(l, [[-0.145, -0.125], [-0.1, -0.095], [-0.112, -0.12]], D);
    if (st.laohu_ear) {
      poly(l, [[-0.105, -0.175], [-0.11, -0.184], [-0.094, -0.178]], M);
      l.fillStyle = 'rgba(244,242,232,0.6)';
      l.fillRect(-0.118, -0.188, 0.03, 0.012);
    } else {
      poly(l, [[-0.105, -0.175], [-0.118, -0.205], [-0.088, -0.18]], M);
      poly(l, [[-0.112, -0.188], [-0.104, -0.176], [-0.096, -0.18]], '#f0d9b8');
    }
    poly(l, [[-0.062, -0.172], [-0.052, -0.2], [-0.045, -0.168]], D);
    crease(l, [[-0.105, -0.175], [-0.075, -0.145], [-0.05, -0.17]]);
    crease(l, [[-0.075, -0.145], [-0.1, -0.095]]);
    poly(l, [[-0.11, -0.12], [-0.088, -0.118], [-0.1, -0.1]], '#e2584a');
    l.fillStyle = '#1e1716';
    if (st.laohu_asleep) {
      l.strokeStyle = '#1e1716';
      l.lineWidth = 0.0028;
      l.beginPath();
      l.moveTo(-0.111, -0.142);
      l.quadraticCurveTo(-0.105, -0.138, -0.099, -0.142);
      l.moveTo(-0.084, -0.145);
      l.quadraticCurveTo(-0.078, -0.141, -0.072, -0.145);
      l.stroke();
    } else {
      l.beginPath();
      l.ellipse(-0.105, -0.142, 0.0045, 0.0035, 0, 0, Math.PI * 2);
      l.ellipse(-0.078, -0.145, 0.0045, 0.0035, 0, 0, Math.PI * 2);
      l.fill();
    }
    l.fillRect(-0.1, -0.124, 0.007, 0.004);
    star(l, -0.07, -0.128, 0.006);
    poly(l, [[-0.098, -0.172], [-0.09, -0.171], [-0.092, -0.155]], D);
    poly(l, [[-0.078, -0.17], [-0.07, -0.169], [-0.076, -0.154]], D);
    for (const [x, y] of [[-0.145, -0.118], [-0.143, -0.108], [-0.062, -0.118], [-0.064, -0.108]])
      crease(l, [[-0.098, -0.114], [x, y]]);
    if (st.laohu_dust) e.lib.dust(l, -0.16, -0.22, 0.27, 0.23);
  });
  e.at(-0.095 * S, -0.14 * S);
  e.at(0.0, -0.11 * S, 'back');
}
