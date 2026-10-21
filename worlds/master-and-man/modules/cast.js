// The people of «Master and Man» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, `tolstoy`: near-true proportions (the head a little large, so faces read), rounded forms, a fine
// tinted line round them, painted faces — eyes, brows, a nose, a mouth, cheeks reddened by the frost —, bare hands and felt
// boots: a painterly illustration, lit by the scene's own light — and how they stand: the motions in cast.data.json
// (Kimodo's). cast.md says who is who and what each motion is.
// A part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;

// a colour a shade darker, lighter or tinted: its r, g, b times k (an array of three), its fourth kept
const tint = (c, k) => c.map((v, i) => (i < 3 ? Math.min(1, v * k[i]) : v));

// the face's expressions (the engine's table, kept here: the face draws the same solids for each, only moved)
const EXPRESSIONS = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.13, corners: 0, open: 0 },
  smile: { inner: 0.01, outer: 0.01, eye: 0.85, wide: 0.15, corners: 0.045, open: 0 },
  laugh: { inner: 0.03, outer: 0.02, eye: 0.45, wide: 0.16, corners: 0.05, open: 0.07 },
  sad: { inner: 0.07, outer: -0.05, eye: 0.85, wide: 0.12, corners: -0.04, open: 0 },
  angry: { inner: -0.08, outer: 0.03, eye: 0.8, wide: 0.11, corners: -0.025, open: 0 },
  surprised: { inner: 0.08, outer: 0.08, eye: 1.35, wide: 0.07, corners: 0, open: 0.08 },
  afraid: { inner: 0.09, outer: 0.01, eye: 1.3, wide: 0.12, corners: -0.025, open: 0.04 },
  disgusted: { inner: -0.05, outer: -0.01, eye: 0.75, wide: 0.12, corners: -0.035, open: 0 },
  thinking: { inner: -0.03, outer: 0.03, eye: 0.85, wide: 0.08, corners: -0.01, open: 0 },
  tired: { inner: 0.02, outer: -0.05, eye: 0.5, wide: 0.12, corners: -0.015, open: 0 },
};
const DARK = [0.16, 0.12, 0.11];
const EYE_WHITE = [0.95, 0.93, 0.9];

// the world's face: larger eyes and brows than the engine's simple one, a fuller nose, the cheeks reddened by the cold —
// a face that reads from across a yard: whites to the eyes, so where they look and how (meek, smug, anxious) shows
function face(F) {
  const { axes, r: rh, on } = F.head, [, hu] = axes;
  const x = EXPRESSIONS[F.look.expression] ?? EXPRESSIONS.neutral;
  const brow = tint(F.colors.hair, [0.7, 0.7, 0.7]), lips = tint(F.colors.skin, [0.78, 0.6, 0.6]), cheek = tint(F.colors.skin, [1.02, 0.8, 0.78]);
  for (const sx of [-1, 1]) {
    // (the cheek, a soft red patch under the eye; the eye; the brow over it)
    F.ball(on([sx * 0.46, -0.16, 0.85], 0.975), axes, [rh * 0.17, rh * 0.12, rh * 0.05], cheek, 10);
    F.ball(on([sx * 0.31, 0.08, 0.93], 0.985), axes, [rh * 0.15, rh * 0.115 * x.eye, rh * 0.04], EYE_WHITE, 10);
    F.ball(on([sx * 0.3, 0.07, 0.95], 1.0), axes, [rh * 0.08, rh * 0.095 * x.eye, rh * 0.045], DARK, 10);
    F.tube([on([sx * 0.13, 0.33 + x.inner, 0.94], 1.0), on([sx * 0.3, 0.37 + (x.inner + x.outer) / 2, 0.9], 1.005), on([sx * 0.47, 0.31 + x.outer, 0.83], 1.0)],
      [[0, rh * 0.05], [1, rh * 0.054], [2, rh * 0.032]], [[0, brow]], 6, hu);
  }
  // (the nose: fuller, a little redder at its tip)
  F.ball(on([0, -0.08, 1], 0.97), axes, [rh * 0.1, rh * 0.15, rh * 0.13], tint(F.colors.skin, [1.0, 0.9, 0.88]), 10);
  // (the mouth: its corners up or down, open — a dark oval within it — or closed: the same solids for every expression)
  const w = x.wide, y = -0.39;
  F.ball(on([0, y - x.open / 2, 0.95], 0.975), axes, [rh * w * 0.75, rh * x.open, rh * 0.03], DARK, 10);
  F.tube([on([-w, y + x.corners, 0.93], 0.995), on([0, y, 0.94], 1.0), on([w, y + x.corners, 0.93], 0.995)], [[0, rh * 0.022], [2, rh * 0.022]], [[0, lips]], 6, hu);
}

// a beard over the jaw and the chin — below the mouth's corners, the nose, the eyes and the cheeks above it bare (a
// profile reads) —, in the colour of the hair, and a moustache over the mouth; `long` — how far it falls on the chest
function beard(F, long) {
  const { add, mul } = V(), h = F.head, [, hu, hf] = h.axes, r = h.r * h.out;
  F.cap(h.at, h.axes, h.egg.map(e => e * r * 1.03), [0, -0.92, 0.38], 0.78, F.colors.hair, h.sides, h.square);
  F.ball(add(h.at, add(mul(hu, -r * (1.0 + 0.25 * long)), mul(hf, r * 0.38))), h.axes, [r * 0.5, r * (0.32 + 0.22 * long), r * 0.34], F.colors.hair, h.sides);
  // (the moustache: two soft rolls from under the nose down over the mouth's corners)
  for (const sx of [-1, 1]) {
    const a = h.on([sx * 0.06, -0.24, 0.97], 1.03), b = h.on([sx * 0.3, -0.4, 0.86], 1.02);
    F.ball(add(mul(a, 0.5), mul(b, 0.5)), h.axes, [r * 0.17, r * 0.07, r * 0.07], F.colors.hair, 10);
  }
}

// frost on the beard and the moustache: white grains caught in the hair (Nikita's, out in the cold all day)
const FROST = [[-0.3, -0.62, 0.78], [0.32, -0.6, 0.78], [0, -0.78, 0.66], [-0.16, -0.72, 0.72], [0.18, -0.74, 0.7], [-0.45, -0.45, 0.78],
  [0.46, -0.44, 0.78], [-0.2, -0.32, 0.93], [0.22, -0.33, 0.93], [0.05, -0.9, 0.5]];
function frost(F) {
  const { add, mul } = V(), h = F.head, [, hu, hf] = h.axes, r = h.r * h.out, white = [0.94, 0.96, 1.0];
  for (const d of FROST) F.ball(h.on(d, 1.1), h.axes, [r * 0.07, r * 0.05, r * 0.04], white, 8);
  // (on the long beard's fall, before the chest)
  const c = add(h.at, add(mul(hu, -r * 1.25), mul(hf, r * 0.38 + r * 0.33)));
  for (const [sx, sy] of [[-0.2, 0.1], [0.18, 0.04], [0, -0.2], [-0.1, -0.36], [0.14, -0.3]]) {
    F.ball(add(c, add(mul(h.axes[0], r * sx), mul(hu, r * sy))), h.axes, [r * 0.07, r * 0.06, r * 0.04], white, 8);
  }
}

// the fur collar's rings, kept from frame to frame: a fat roll of fur round the neck — eight rings round the roll,
// each of sixteen points round the neck — dipping at the front where the coat's fronts meet
const N = 16;
const RN = 8;
const COLLAR = () => ({ rings: Array.from({ length: RN }, () => Array.from({ length: N }, () => [0, 0, 0])), rs: new Array(RN + 1) });
// the sash's: its two rings' sections and the rings, the knot's axes and size, an end's points, profile and colour
const SASH = F => ({ sec: [[null, null, null, 0, 0], [null, null, null, 0, 0]], band: [null, null], axes: [null, null, null],
  knot: [0.035 * F.fit.h, 0.03 * F.fit.h, 0.03 * F.fit.h], pts: [null, null, null],
  profile: [[0, 0.022 * F.fit.h], [2, 0.018 * F.fit.h]], colors: [[0, F.colors.accent]] });
// its two ends, hanging from the knot: to which side of it, how long (a man's metres), their springs' names
const SASH_ENDS = [{ s: 1, len: 0.2, a: 'sash1a', b: 'sash1b' }, { s: -1, len: 0.26, a: 'sash2a', b: 'sash2b' }];

// the fox coat's front: a band of lighter fur down where its two fronts meet, from the collar to the hem — on the
// trunk down to the waist, then hanging as cloth with the coat (F.cloth: it swings with it, before it). Its rows are
// made once, at rest (F.keep), and the sheet taken from them
function furFrontRows(F) {
  const { add, mul, mix, level } = V(), P = F.P, m = F.fit.h, tk = F.trunk(1.24), rows = [];
  const f = level(F.fwd('Hips')), s2 = level(F.side('Hips')), half = 0.06 * m;
  const knees = mix(P('LeftShin'), P('RightShin'), 0.5), ankles = mix(P('LeftFoot'), P('RightFoot'), 0.5);
  const hemY = knees[1] + (ankles[1] - knees[1]) * 0.74;
  // (held: the shoulders', the chest's and the waist's fronts)
  for (const i of [4, 3, 2]) {
    const [c, sd, fw, , d] = tk[i];
    rows.push([-1, 0, 1].map(x => add(add(c, mul(fw, d * 1.04)), mul(sd, x * half))));
  }
  // (hanging: from the waist down to the hem, before the hips and the legs — the garment pushes it out before itself)
  const waist = tk[2], hips = tk[1];
  for (let r = 1; r <= 6; r++) {
    const u = r / 6, y = waist[0][1] + (hemY - waist[0][1]) * u;
    const c = add(add(P('Hips'), [0, y - P('Hips')[1], 0]), mul(f, hips[4] * (1.15 + 0.35 * u)));
    rows.push([-1, 0, 1].map(x => add(c, mul(s2, x * half * (1 + 0.3 * u)))));
  }
  return rows;
}
function furFront(F) {
  F.cloth(F.keep(furFrontRows), F.colors.accent, 3);
}

// the coat's fur cuffs round the wrists: a short thick bar along the end of each forearm (its ends kept)
const CUFFS = F => ({ colors: [[0, F.colors.accent]], r: 0.068 * F.k, a: [0, 0, 0], b: [0, 0, 0] });
function cuffs(F) {
  const K = F.keep(CUFFS), hint = F.fwd('Chest');
  for (const s of ['Left', 'Right']) {
    const fa = F.P(`${s}ForeArm`), hd = F.P(`${s}Hand`);
    for (let e = 0; e < 3; e++) { K.a[e] = fa[e] + (hd[e] - fa[e]) * 0.74; K.b[e] = fa[e] + (hd[e] - fa[e]) * 0.97; }
    F.bar(K.a, K.b, K.r, K.r * 1.08, K.colors, 12, hint);
  }
}

return {
  ...data,
  characters: {
    // Vasily Andreich Brekhunov, the master: about fifty, stout and ruddy, a trimmed brown beard and moustache; over his
    // sheepskin the long red fox-fur coat — a fat roll of lighter fur at the neck, the same fur at its hem and its
    // cuffs —, a round dark fur hat, felt boots
    vasily: { kind: 'shapes', style: 'tolstoy', who: 'man', garment: 'fox_coat', hair: 'short', hat: 'fur_hat', face: 'tolstoy',
      parts: ['beard_trim', 'fur_collar', 'fur_cuffs'],
      body: { height: 1.0, thick: 1.12, shoulders: 1.16, head: 1.1 },
      colors: { skin: '#e8a184', hair: '#6e4128', top: '#7b6a55', garment: '#c45a22', bottom: '#3c3530', shoes: '#4a4038', hat: '#3a2c24', accent: '#e8b07a' } },
    // Nikita, the workman: about fifty, wiry, a greying beard white with frost; a thin homespun coat worn through at the
    // hem, tied with his red sash; a worn sheepskin hat, grey felt boots
    nikita: { kind: 'shapes', style: 'tolstoy', who: 'man', garment: 'armyak', hair: 'short', hat: 'sheepskin_hat', face: 'tolstoy',
      parts: ['beard_long', 'beard_frost', 'sash'],
      body: { height: 0.98, thick: 0.9, shoulders: 1.0 },
      colors: { skin: '#d49274', hair: '#a59d92', top: '#a99d86', garment: '#7f725c', bottom: '#5b5349', shoes: '#6c655d', hat: '#6a5d4c', accent: '#c4262c' } },
    // Praskovya Mikhailovna, his wife: slight, a dark blue dress with long sleeves down to the floor, a light woollen
    // shawl over her head
    praskovya: { kind: 'shapes', style: 'tolstoy', who: 'woman', garment: 'long_dress', hair: 'bun', hat: 'shawl', face: 'tolstoy',
      body: { height: 0.92, thick: 0.92, shoulders: 0.9, head: 1.04 },
      colors: { skin: '#eec5a8', hair: '#4b3a2e', top: '#4a5876', garment: '#4a5876', shoes: '#2a2624', hat: '#ece4d4' } },
  },
  shapes: {
    // the world's style: near-true proportions with the head a little large (as the engine's soft has it), so a face
    // reads from across a yard; rounded, a fine line of a darker shade, hands with fingers, felt boots
    styles: { tolstoy: { from: 'soft', name: 'Tolstoy', head: 1.4, neck: 0.5, legs: 0.98, limb: 1.0, line: 1.5,
      folds: { n: 7, depth: 0.05 }, arms: 'palm', fingers: true, feet: 'boot', face: 'tolstoy' } },
    faces: { tolstoy: { name: 'Tolstoy face', draw: face } },
    garments: {
      // the fox-fur coat: from the shoulders to below the middle of the shin, wide at the hem, wide sleeves; under its
      // hem a band of lighter fur (an inner layer, a little longer)
      fox_coat: { name: 'fox-fur coat', hang: [{ to: 1.76, from: 'shoulders', flare: 0.1, color: 'accent', folds: false }, { to: 1.6, from: 'shoulders', flare: 0.2 }],
        sleeves: 'garment', wide: 0.14 },
      // the wife's dress: long sleeves, the skirt full from the waist down to the floor
      long_dress: { name: 'long dress', hang: [{ to: 2.02, from: 'waist', flare: 0.5, off: 0.94 }], bodice: true },
      // the workman's coat of homespun: to the knee, worn ragged at the hem
      armyak: { name: 'homespun coat', hang: [{ to: 1.12, from: 'shoulders', flare: 0.2, ragged: true }], sleeves: 'garment' },
    },
    hats: {
      // a tall round fur hat: a band of fur over the crown (the brows and the forehead below it), a tall dome over it
      fur_hat: { name: 'fur hat', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.16), [0, 1, -0.15], 0.32, F.colors.hat, sides, square);
        F.ball(add(at, mul(hu, r * 0.82)), axes, [r * 1.04, r * 0.56, r * 1.04], F.colors.hat, sides);
      } },
      // a worn sheepskin hat, low and round, pushed a little back
      sheepskin_hat: { name: 'sheepskin hat', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.12), [0, 1, -0.25], 0.46, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, r * 0.7), mul(hf, -r * 0.1))), axes, [r * 0.98, r * 0.42, r * 0.98], F.colors.hat, sides);
      } },
      // a woollen shawl over the head, tied under the chin, its corner down the back
      shawl: { name: 'shawl', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.1), [0, 0.62, -0.78], -0.12, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, -r * 0.95), mul(hf, r * 0.35))), axes, [r * 0.2, r * 0.16, r * 0.14], F.colors.hat, 10);
        F.ball(add(at, add(mul(hu, -r * 0.9), mul(hf, -r * 0.9))), axes, [r * 0.75, r * 0.7, r * 0.3], F.colors.hat, sides);
      } },
    },
    parts: {
      // the master's beard: trimmed, rounded
      beard_trim: { name: 'trimmed beard', draw: F => beard(F, 0) },
      // the workman's: longer, falling on the chest
      beard_long: { name: 'long beard', draw: F => beard(F, 1) },
      // the frost in it
      beard_frost: { name: 'frost on the beard', draw: frost },
      // the fox coat's collar: a fat roll of lighter fur round the neck and over the shoulders, lower at the front
      fur_collar: { name: 'fur collar', draw: F => {
        const K = F.keep(COLLAR), uc = F.up('Chest'), fc = F.fwd('Chest'), sd = F.side('Chest'), nk = F.P('Neck1');
        const m = F.fit.h, k = F.k, R0 = 0.13 * k, rt = 0.06 * k, ry = 0.055 * m;
        for (let j = 0; j < RN; j++) {
          const b = j / RN * Math.PI * 2, cb = Math.cos(b), sb = Math.sin(b), ring = K.rings[j];
          for (let q = 0; q < N; q++) {
            const a = q / N * Math.PI * 2, cs = Math.cos(a), sn = Math.sin(a), w = R0 + rt * cb;
            const dip = 0.07 * m * Math.max(0, sn) ** 2, dy = ry * sb - 0.02 * m - dip, p = ring[q];
            for (let e = 0; e < 3; e++) p[e] = nk[e] + uc[e] * dy + sd[e] * w * cs + fc[e] * w * 0.92 * sn;
          }
          K.rs[j] = ring;
        }
        K.rs[RN] = K.rings[0];
        F.rings(K.rs, F.colors.accent, null, null);
      } },
      // the same fur down the coat's front
      fur_front: { name: 'fur front', draw: furFront },
      // and round its wide cuffs
      fur_cuffs: { name: 'fur cuffs', draw: cuffs },
      // the red sash round the waist, over the coat, knotted at the left hip, its two ends hanging and swinging
      sash: { name: 'red sash', draw: F => {
        const { add, mul } = V(), m = F.fit.h, waist = F.trunk(1.2)[2], [c, sd, fw, w, d] = waist, up = F.up('Spine1');
        const K = F.keep(SASH);
        for (let j = 0; j < 2; j++) { K.sec[j][0] = add(c, mul(up, (j * 2 - 1) * 0.035 * m)); K.sec[j][1] = sd; K.sec[j][2] = fw; K.sec[j][3] = w; K.sec[j][4] = d; K.band[j] = F.ringOf(K.sec[j], 24, 2.4); }
        F.rings(K.band, F.colors.accent, null, null);
        const knot = add(add(c, mul(sd, -w * 0.72)), mul(fw, d * 0.62));
        K.axes[0] = sd; K.axes[1] = up; K.axes[2] = fw;
        F.ball(knot, K.axes, K.knot, F.colors.accent, 10);
        for (let j = 0; j < 2; j++) {
          const end = SASH_ENDS[j], a = add(knot, mul(sd, end.s * 0.02 * m)), drop = [0, -end.len * 0.5 * m, 0];
          const b = F.swing(end.a, add(a, drop), 120), e = F.swing(end.b, add(b, drop), 80);
          K.pts[0] = a; K.pts[1] = b; K.pts[2] = e;
          F.tube(K.pts, K.profile, K.colors, 8, sd, 0.35);
        }
      } },
    },
  },
};
