// paper — the world's paper things more than one scene shows (paper.md): Laohu, the tiger Mom folded from Christmas
// wrapping paper, painted and moved the same in every scene; the back of the wrapping, her letter, as it is seen close.
// Flat paper facets, each fold a shade lighter or darker, the creases drawn; it moves as paper does — from pose to pose,
// a little angular, never swaying smoothly.
const S = 1.4;
const L = '#e8503f', M = '#d23a2e', D = '#b02a20', CREASE = 'rgba(90,20,15,0.55)', GOLD = '#ecc65a';
const poly = (l, pts, fill) => {
  l.fillStyle = fill;
  l.beginPath();
  l.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) l.lineTo(pts[i][0], pts[i][1]);
  l.closePath();
  l.fill();
};
const crease = (l, pts, w = 0.0018, c = CREASE) => {
  l.strokeStyle = c;
  l.lineWidth = w;
  l.beginPath();
  l.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) l.lineTo(pts[i][0], pts[i][1]);
  l.stroke();
};
const star = (l, x, y, r, c = GOLD) => {
  l.fillStyle = c;
  l.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5, rr = i % 2 ? r * 0.42 : r;
    l.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
  }
  l.closePath();
  l.fill();
};
// years of attic dust over what was just painted (source-atop: only on what is painted)
const dust = (l, x, y, w, h) => {
  l.save();
  l.globalCompositeOperation = 'source-atop';
  l.fillStyle = 'rgba(176,166,150,0.42)';
  l.fillRect(x, y, w, h);
  l.restore();
};
const TAIL_PIVOT = [0.085 * S, -0.1 * S];

// Laohu, painted in an element's code (metres, his feet at y 0, his head to the left, up and toward us): the layers
// `tail` (pivoting at its root) and `tiger` (the rest), `seam` (the tape laid along a torn seam: 0 at the seam's top,
// grown down it by the animate) and `sheet` (the wrapping square he unfolds into, its back to us: the red and the
// stars). o: {tape — taped together after Mark tore him; torn — the tear down his middle, not taped yet (the halves
// held together); fold — her extra fold at the tail, crooked, and the old tape yellowed under fresh; ear — the torn
// ear lost («Ухо»); asleep — the eyes two shut creases; dust — from the attic}. His head is the element's point, `#back`
// along his back (where a hand strokes him), `#paws` at his feet.
function tiger(e, o = {}) {
  e.layer('tail', { pivot: TAIL_PIVOT }, l => {
    l.scale(S, S);
    if (o.fold) {
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
    if (o.dust) dust(l, 0.05, -0.2, 0.15, 0.13);
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
    if (o.torn) {
      // the tear down his middle, jagged: the two halves held together, a sliver of the cream back showing
      const T = [[0.018, -0.116], [0.01, -0.1], [0.022, -0.086], [0.012, -0.07], [0.024, -0.055], [0.016, -0.04]];
      poly(l, [...T, ...T.slice().reverse().map(([x, y]) => [x + 0.006, y])], '#efe2c8');
      crease(l, T, 0.0022, 'rgba(70,15,10,0.8)');
    }
    if (o.tape) {
      if (o.fold) poly(l, [[-0.03, -0.102], [0.0, -0.106], [0.012, -0.06], [-0.018, -0.056]], 'rgba(236,214,150,0.6)');
      poly(l, [[0.008, -0.1], [0.034, -0.103], [0.044, -0.058], [0.018, -0.056]], 'rgba(246,246,238,0.55)');
      l.fillStyle = 'rgba(255,255,255,0.6)';
      l.fillRect(0.02, -0.096, 0.004, 0.034);
    }
    poly(l, [[-0.105, -0.175], [-0.05, -0.17], [-0.06, -0.11], [-0.1, -0.095], [-0.145, -0.125]], L);
    poly(l, [[-0.105, -0.175], [-0.05, -0.17], [-0.075, -0.145]], M);
    poly(l, [[-0.145, -0.125], [-0.1, -0.095], [-0.112, -0.12]], D);
    if (o.ear) {
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
    if (o.asleep) {
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
    for (const [x, y] of [[-0.145, -0.118], [-0.143, -0.108], [-0.062, -0.118], [-0.064, -0.108]]) crease(l, [[-0.098, -0.114], [x, y]]);
    if (o.dust) dust(l, -0.16, -0.22, 0.27, 0.23);
  });
  // the tape she lays along the torn seam (M4): a clear strip from the seam's top down, grown by the animate
  e.layer('seam', { pivot: [0.016 * S, -0.118 * S] }, l => {
    l.scale(S, S);
    poly(l, [[0.006, -0.118], [0.03, -0.118], [0.032, -0.038], [0.008, -0.038]], 'rgba(246,246,238,0.62)');
    l.fillStyle = 'rgba(255,255,255,0.7)';
    l.fillRect(0.016, -0.114, 0.003, 0.07);
  });
  // the square of wrapping he opens into (its outside to us: the red, the stars, the old tape), lying in four folds
  e.layer('sheet', { pivot: [0, -0.02] }, l => {
    const h = 0.17;
    poly(l, [[-h, -0.02 - h * 0.35], [h, -0.02 - h * 0.35], [h, -0.02], [-h, -0.02]], L);
    for (const x of [-h / 2, 0, h / 2]) crease(l, [[x, -0.02 - h * 0.35], [x, -0.02]], 0.0024);
    crease(l, [[-h, -0.02 - h * 0.17], [h, -0.02 - h * 0.17]], 0.0024);
    for (const [x, y] of [[-0.12, -0.06], [-0.05, -0.035], [0.02, -0.07], [0.09, -0.04], [0.14, -0.065]]) star(l, x, y, 0.009);
    poly(l, [[-h, -0.06], [h, -0.064], [h, -0.054], [-h, -0.05]], 'rgba(236,214,150,0.7)');
  });
  e.at(-0.095 * S, -0.14 * S);
  e.at(0.0, -0.11 * S, 'back');
  e.at(0.0, -0.01, 'paws');
}

// a paper hop: from pose to pose — held, then a quick snap (u 0..1 within a step, the share of it that moves)
const tick = (anim, t, seed, share = 0.25) => {
  const step = Math.floor(t);
  const from = anim.hash(step, seed) - 0.5, to = anim.hash(step + 1, seed) - 0.5;
  const u = anim.ease.inOut(anim.clamp((t - step - (1 - share)) / share, 0, 1));
  return from + (to - from) * u;
};
// quantised: v (0..1) in n steps, each a snap — paper opens fold by fold, not smoothly
const steps = (v, n) => Math.min(n, Math.floor(v * n + 1e-6)) / n;

// Laohu's animate: o — {breath 0..1 (0: paper, still; 1: alive, breathing), purr 0..1 (stroked: breathing deep and
// quick, a shiver), seam (the crooked seam: he leans, falling to one side), dir (1 his head to the left, −1 to the
// right: he turns as paper does, at once), held (a point he sits at, e.g. "jack#hands", or null), shake 0..1 (shaking
// himself, as he stands up), tape (0..1: the strip laid along the seam), unfold 0..1 (the tail's fold first, then the
// others one by one: the tiger flattens into the sheet), fold 0..1 (the other way: only the sheet's folds closing —
// the tiger is painted when it is done), rise 0..1 (from lying flat to standing), show (false: nothing)}.
function move(e, o) {
  // (not shown: his painting has painted nothing, so there are no layers to move)
  if (!o.show) return;
  const anim = e.anim, tiger = e.layer('tiger'), tail = e.layer('tail'), seam = e.layer('seam'), sheet = e.layer('sheet');
  const dir = o.dir < 0 ? -1 : 1;
  let x = 0, y = 0;
  if (o.held) {
    const p = e.point(o.held);
    if (p) [x, y] = [p[0], p[1] + 0.01];
  }
  const breath = o.breath ?? 1, purr = o.purr ?? 0;
  const rate = 1.5 + 2.5 * purr;
  const m = e.mem;
  m.ph = (m.ph ?? 0) + e.dt * rate;
  const b = Math.sin(m.ph + 0.6 * anim.noise(e.t * 0.2, 2)) * breath * (1 + purr);
  const shiver = purr * 0.004 * Math.sin(e.t * 47) + (o.shake ?? 0) * 0.012 * Math.sin(e.t * 31);
  const lean = o.seam ? (-0.12 + 0.04 * anim.noise(e.t * 0.3, 7)) * Math.max(breath, 0.3) : 0;
  // unfolding: the tail opens (0…0.25), then the body's folds one by one (0.25…1), the sheet coming as he goes
  const un = o.unfold ?? 0, rise = o.rise ?? 1;
  const tailOpen = steps(anim.clamp(un / 0.25, 0, 1), 2);
  const body = steps(anim.clamp((un - 0.25) / 0.75, 0, 1), 4);
  const flat = Math.max(body, 1 - steps(rise, 4));
  tiger.scaleX = dir * (1 + 0.012 * b + 0.35 * body);
  tiger.scaleY = (1 + 0.03 * b) * (1 - 0.9 * flat);
  tiger.rotate = lean * dir;
  tiger.x = x + shiver;
  tiger.y = y;
  tiger.alpha = 1 - steps(anim.clamp((un - 0.55) / 0.45, 0, 1), 3);
  const t = tick(anim, e.t * 0.5 * (breath > 0.2 ? 1 : 0.0001), 5) * 0.6 * breath;
  tail.scaleX = dir;
  tail.x = x + (dir < 0 ? -2 * TAIL_PIVOT[0] : 0) + shiver;
  tail.y = y;
  tail.rotate = (t + lean + tailOpen * 1.1) * dir;
  tail.scaleY = (1 - 0.9 * flat) * (1 - 0.6 * tailOpen);
  tail.alpha = 1 - tailOpen;
  const tp = o.tape ?? 1;
  seam.alpha = tp > 0.01 && tp < 1.5 && o.torn ? 1 : 0;
  seam.scaleY = Math.max(0.02, tp) * tiger.scaleY;
  seam.scaleX = dir;
  seam.x = x + (dir < 0 ? -2 * 0.016 * S : 0);
  seam.y = y;
  seam.rotate = tiger.rotate;
  const sh = steps(anim.clamp((un - 0.3) / 0.7, 0, 1), 4);
  sheet.alpha = sh > 0 ? 1 : 0;
  sheet.scaleX = 0.35 + 0.65 * sh;
  sheet.scaleY = 0.35 + 0.65 * sh;
  sheet.x = x;
  sheet.y = y;
  e.at(x - 0.095 * S * dir, y - 0.14 * S * tiger.scaleY);
  e.at(x, y - 0.11 * S * tiger.scaleY, 'back');
}

// The back of the wrapping, close (an insert's painting, in stage heights: the sheet's middle at (cx, cy), `h` its
// half-height): cream paper, the red of the outside showing at its torn edge, her columns of ink right to left, the old
// yellow tape across with the lines going round it, the overlapped tear lower down with its clear strip (o.tear:
// 'taped' — the edges overlapped under the strip; 'open' — the strip off, the edges side by side; 'curled' — the strip
// off, one edge curled over), the creases of the tiger's folds, and at the bottom left her 爱 (and his under it: o.hanzi
// 0..1 drawn, o.crooked).
function letter(g, cx, cy, h, o = {}) {
  const w = h;
  g.save();
  g.fillStyle = '#efe4cc';
  g.beginPath();
  g.moveTo(cx - w, cy - h);
  g.lineTo(cx + w, cy - h * 1.01);
  g.lineTo(cx + w * 1.01, cy + h);
  g.lineTo(cx - w * 0.99, cy + h * 0.99);
  g.closePath();
  g.fill();
  // the creases of the tiger's folds: a grid and its diagonals, a shade darker
  g.strokeStyle = 'rgba(150,120,90,0.35)';
  g.lineWidth = h * 0.006;
  g.beginPath();
  for (const k of [-0.5, 0, 0.5]) {
    g.moveTo(cx + k * w, cy - h);
    g.lineTo(cx + k * w, cy + h);
    g.moveTo(cx - w, cy + k * h);
    g.lineTo(cx + w, cy + k * h);
  }
  g.moveTo(cx - w, cy - h);
  g.lineTo(cx + w, cy + h);
  g.moveTo(cx + w, cy - h);
  g.lineTo(cx - w, cy + h);
  g.stroke();
  // her columns, right to left: brush marks of characters, each a cluster of short strokes
  const tapeY = cy - h * 0.38, tearY = cy + h * 0.22;
  g.strokeStyle = '#2b2326';
  g.lineCap = 'round';
  let n = 0;
  for (let c = 0; c < 12; c++) {
    const x = cx + w * 0.86 - c * w * 0.142;
    for (let r = 0; r < 13; r++) {
      const y = cy - h * 0.86 + r * h * 0.13;
      if (c === 11 && r > 2) break;
      if (Math.abs(y - tapeY) < h * 0.07) continue;
      n++;
      const rnd = k => anim.hash(n * 7 + k, 31);
      g.lineWidth = h * (0.008 + 0.004 * rnd(9));
      g.beginPath();
      const s = h * 0.05;
      for (let k = 0; k < 4; k++) {
        const ax = x + (rnd(k) - 0.5) * s, ay = y + (rnd(k + 4) - 0.5) * s;
        const horiz = rnd(k + 12) > 0.5;
        g.moveTo(ax - (horiz ? s * 0.45 : 0), ay - (horiz ? 0 : s * 0.45));
        g.lineTo(ax + (horiz ? s * 0.45 : s * 0.1), ay + (horiz ? s * 0.06 : s * 0.45));
      }
      g.stroke();
    }
  }
  // the old yellow tape across
  g.fillStyle = 'rgba(226,196,120,0.75)';
  g.fillRect(cx - w * 1.02, tapeY - h * 0.055, w * 2.04, h * 0.11);
  // the tear, lower down: a jagged line across three columns, the overlap, the strip
  const T = [];
  for (let i = 0; i <= 8; i++) T.push([cx - w * 0.15 + i * w * 0.06, tearY + (i % 2 ? h * 0.018 : -h * 0.012)]);
  g.strokeStyle = 'rgba(90,60,40,0.85)';
  g.lineWidth = h * 0.006;
  g.beginPath();
  T.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
  g.stroke();
  const tear = o.tear ?? 'taped';
  if (tear === 'taped') {
    g.fillStyle = 'rgba(230,236,240,0.55)';
    g.fillRect(cx - w * 0.2, tearY - h * 0.05, w * 0.6, h * 0.1);
    g.fillStyle = 'rgba(255,255,255,0.5)';
    g.fillRect(cx - w * 0.18, tearY - h * 0.035, w * 0.56, h * 0.012);
  } else if (tear === 'curled') {
    g.fillStyle = '#e2d4b8';
    g.beginPath();
    T.forEach(([x, y], i) => (i ? g.lineTo(x, y - h * 0.03) : g.moveTo(x, y - h * 0.03)));
    g.lineTo(T[8][0], T[8][1]);
    g.lineTo(T[0][0], T[0][1]);
    g.closePath();
    g.fill();
  }
  // her 爱 at the bottom, and his under it
  sign(g, cx - w * 0.62, cy + h * 0.62, h * 0.13, 1, false, '#2b2326');
  if ((o.hanzi ?? 0) > 0) sign(g, cx - w * 0.62, cy + h * 0.88, h * 0.1, o.hanzi, o.crooked, '#2a3a5a');
  g.restore();
}

// 爱, stroke by stroke (each a polyline in a unit square, its middle at 0, 0, y down): 爫 (four), 冖 (two), 友 (four)
const SIGN = [
  [[0.32, -0.9], [-0.4, -0.72]],
  [[-0.5, -0.56], [-0.38, -0.42]],
  [[-0.06, -0.6], [0.0, -0.44]],
  [[0.46, -0.62], [0.3, -0.42]],
  [[-0.78, -0.28], [-0.78, -0.12]],
  [[-0.78, -0.28], [0.8, -0.28], [0.72, -0.12]],
  [[-0.66, 0.06], [0.66, 0.06]],
  [[-0.12, -0.12], [-0.22, 0.4], [-0.62, 0.86]],
  [[-0.32, 0.3], [0.42, 0.3], [0.1, 0.62], [-0.3, 0.9]],
  [[-0.24, 0.48], [0.18, 0.72], [0.74, 0.92]],
];
// drawn at (x, y) with half-size s, `u` of it (0..1, stroke by stroke, the last one partly), crooked or not
function sign(g, x, y, s, u = 1, crooked = false, color = '#2b2326') {
  g.save();
  g.strokeStyle = color;
  g.lineCap = 'round';
  g.lineJoin = 'round';
  g.lineWidth = s * 0.13;
  const all = SIGN.length * Math.max(0, Math.min(1, u));
  for (let i = 0; i < SIGN.length && i < all; i++) {
    const pts = SIGN[i], part = Math.min(1, all - i);
    g.beginPath();
    let len = 0;
    for (let k = 1; k < pts.length; k++) len += Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]);
    let left = len * part;
    const P = ([px, py], k) => {
      const j = crooked ? 0.14 * Math.sin(i * 2.3 + k * 1.7) : 0;
      return [x + (px + j) * s, y + (py + j * 0.8 + (crooked ? px * 0.12 : 0)) * s];
    };
    g.moveTo(...P(pts[0], 0));
    for (let k = 1; k < pts.length && left > 0; k++) {
      const seg = Math.hypot(pts[k][0] - pts[k - 1][0], pts[k][1] - pts[k - 1][1]), f = Math.min(1, left / seg);
      g.lineTo(...P([pts[k - 1][0] + (pts[k][0] - pts[k - 1][0]) * f, pts[k - 1][1] + (pts[k][1] - pts[k - 1][1]) * f], k));
      left -= seg;
    }
    g.stroke();
  }
  g.restore();
}

// a deer folded from gold-brown paper, standing at x0 (feet on y 0), facing right (s 1) or left (−1): long thin legs, a
// narrow body, the neck up, two branched antlers of creased paper, a white scut (as the one on Jack's shelf)
function deer(g, x0, s) {
  const X = x => x0 + s * x, Lt = '#d7a85a', Dk = '#b8863e', C = 'rgba(90,60,20,0.55)';
  for (const [lx, c] of [[-0.04, Dk], [-0.025, Lt], [0.03, Dk], [0.045, Lt]])
    poly(g, [[X(lx - 0.005), -0.085], [X(lx + 0.005), -0.085], [X(lx + 0.002), 0], [X(lx - 0.002), 0]], c);
  poly(g, [[X(-0.058), -0.125], [X(0.055), -0.13], [X(0.06), -0.082], [X(-0.052), -0.08]], Lt);
  poly(g, [[X(-0.058), -0.125], [X(0.055), -0.13], [X(0.03), -0.108], [X(-0.04), -0.106]], Dk);
  crease(g, [[X(-0.058), -0.125], [X(0.055), -0.13]], 0.0025, C);
  poly(g, [[X(-0.06), -0.122], [X(-0.07), -0.13], [X(-0.058), -0.112]], '#f3ead8');
  poly(g, [[X(0.04), -0.128], [X(0.062), -0.19], [X(0.078), -0.186], [X(0.062), -0.122]], Lt);
  poly(g, [[X(0.06), -0.19], [X(0.1), -0.178], [X(0.08), -0.168]], Dk);
  g.strokeStyle = '#8a6430';
  g.lineWidth = 0.004;
  g.lineCap = 'round';
  g.beginPath();
  g.moveTo(X(0.066), -0.192);
  g.lineTo(X(0.058), -0.235);
  g.moveTo(X(0.061), -0.215);
  g.lineTo(X(0.045), -0.228);
  g.moveTo(X(0.074), -0.19);
  g.lineTo(X(0.09), -0.228);
  g.moveTo(X(0.083), -0.21);
  g.lineTo(X(0.1), -0.218);
  g.stroke();
  g.fillStyle = '#2a2624';
  g.fillRect(X(0.079) - 0.002, -0.184, 0.004, 0.004);
}

return { deer, S, poly, crease, star, dust, tiger, move, tick, steps, letter, sign, SIGN };
