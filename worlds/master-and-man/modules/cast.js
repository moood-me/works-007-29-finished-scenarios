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
const EYE_WHITE = [0.93, 0.92, 0.9];

// the world's face, drawn after a painter's, not a doll's: the eye in its socket (a soft shade round it), its white, the
// iris, and over it the upper lid — skin coming down over the eye, its edge a dark line of lashes —, a fold under it; a
// heavy brow; a nose with its wings; the folds from the nose to the mouth's corners; the lips; the cold's flush wide and
// faint over the cheekbones. Its own for each of them (`o`): how far the lid comes down (lid 0…1 of the eye — a heavy,
// fixed gaze, or an open one), the brows drawn together or lifted (brow, over the expression's), how thick (browW), the
// eye's size (eye), the iris's colour, the folds and the bags of age (folds, bags 0/1). An expression (<id>_mood) moves
// the same solids: there are as many for every one of them.
function faceOf(o) {
  return F => {
    const { axes, r: rh, on } = F.head, [, hu] = axes;
    const x = EXPRESSIONS[F.look.expression] ?? EXPRESSIONS.neutral, skin = F.colors.skin;
    const brow = tint(F.colors.hair, [0.62, 0.6, 0.6]), lips = tint(skin, [0.8, 0.6, 0.6]), shade = tint(skin, [0.84, 0.74, 0.72]);
    const socket = tint(skin, [0.92, 0.84, 0.82]), flush = tint(skin, [1.02, 0.9, 0.88]), lash = [0.2, 0.15, 0.13];
    const eye = x.eye * o.eye, ev = 0.07 * eye, inner = x.inner + o.brow, outer = x.outer;
    // (where the lid's edge comes: from the eye's top down over lid of its height)
    const edge = 0.08 + ev - 2 * ev * o.lid;
    for (const sx of [-1, 1]) {
      // (the cold's flush over the cheekbone: wide, faint, no round spot)
      F.ball(on([sx * 0.44, -0.1, 0.86], 0.97), axes, [rh * 0.24, rh * 0.15, rh * 0.03], flush, 10);
      // (the socket's shade under the brow, round the eye)
      F.ball(on([sx * 0.3, 0.12, 0.92], 0.975), axes, [rh * 0.18, rh * 0.12, rh * 0.03], socket, 10);
      // (the white, the iris)
      F.ball(on([sx * 0.3, 0.08, 0.93], 0.985), axes, [rh * 0.12, rh * ev, rh * 0.035], EYE_WHITE, 10);
      F.ball(on([sx * 0.29, 0.075, 0.95], 0.993), axes, [rh * 0.058, rh * Math.min(ev, 0.062), rh * 0.04], o.iris, 10);
      // (the upper lid: skin down over the eye's top to its edge, and the line of lashes along that edge)
      F.ball(on([sx * 0.3, edge + 0.075, 0.94], 1.0), axes, [rh * 0.135, rh * 0.075, rh * 0.04], skin, 10);
      F.tube([on([sx * 0.18, edge + 0.012, 0.95], 1.004), on([sx * 0.3, edge, 0.95], 1.006), on([sx * 0.42, edge + 0.02, 0.9], 1.004)],
        [[0, rh * 0.012], [1, rh * 0.017], [2, rh * 0.01]], [[0, lash]], 6, hu);
      // (the fold under the eye: a bag, with age)
      F.tube([on([sx * 0.2, 0.0, 0.95], 0.996), on([sx * 0.3, -0.03 - 0.02 * o.bags, 0.94], 0.998), on([sx * 0.41, 0.0, 0.9], 0.996)],
        [[0, rh * 0.008], [1, rh * (0.01 + 0.006 * o.bags)], [2, rh * 0.008]], [[0, shade]], 6, hu);
      // (the brow: heavy, its inner end drawn down and in, or lifted)
      F.tube([on([sx * 0.1, 0.27 + inner, 0.96], 1.0), on([sx * 0.27, 0.31 + (inner + outer) / 2, 0.92], 1.006), on([sx * 0.46, 0.27 + outer, 0.84], 1.0)],
        [[0, rh * 0.034 * o.browW], [1, rh * 0.04 * o.browW], [2, rh * 0.02 * o.browW]], [[0, brow]], 6, hu);
      // (the nose's wing, and the fold from it down to the mouth's corner)
      F.ball(on([sx * 0.1, -0.18, 0.98], 0.985), axes, [rh * 0.06, rh * 0.05, rh * 0.05], shade, 8);
      F.tube([on([sx * 0.15, -0.17, 0.95], 0.995), on([sx * (x.wide + 0.1), -0.32, 0.92], 0.995), on([sx * (x.wide + 0.06), -0.43 + x.corners, 0.9], 0.993)],
        [[0, rh * 0.01 * o.folds], [1, rh * 0.012 * o.folds], [2, rh * 0.006 * o.folds]], [[0, shade]], 6, hu);
    }
    // (the nose: its bridge down from between the eyes, its tip a little redder in the cold)
    F.tube([on([0, 0.12, 0.99], 0.985), on([0, -0.08, 1], 1.03)], [[0, rh * 0.05], [1, rh * 0.075]], [[0, skin]], 8, hu);
    F.ball(on([0, -0.12, 1], 1.0), axes, [rh * 0.09, rh * 0.085, rh * 0.09], tint(skin, [1.02, 0.9, 0.88]), 10);
    // (the mouth: open — a dark oval within it — or closed; the upper lip's line, its corners up or down; the lower
    // lip's fullness under it)
    const w = x.wide, y = -0.36;
    F.ball(on([0, y - x.open / 2, 0.95], 0.975), axes, [rh * w * 0.75, rh * x.open, rh * 0.03], DARK, 10);
    F.tube([on([-w, y + x.corners, 0.93], 0.995), on([0, y, 0.95], 1.0), on([w, y + x.corners, 0.93], 0.995)], [[0, rh * 0.018], [1, rh * 0.024], [2, rh * 0.014]], [[0, lips]], 6, hu);
    F.ball(on([0, y - 0.06 - x.open, 0.95], 0.99), axes, [rh * w * 0.6, rh * 0.03, rh * 0.03], tint(skin, [0.92, 0.76, 0.74]), 8);
  };
}
// the face of anyone else of the world, and each one's own: the master's heavy, half-lidded, reckoning gaze under drawn brows, the age in it; Nikita's open,
// mild, creased eyes; Praskovya's wide eyes, light brows, a young face
const FACE_ANY = { lid: 0.2, brow: 0, browW: 1, eye: 1, iris: [0.3, 0.27, 0.25], folds: 0.5, bags: 0 };
const FACE_VASILY = { lid: 0.48, brow: -0.035, browW: 1.3, eye: 0.95, iris: [0.22, 0.15, 0.11], folds: 1, bags: 1 };
const FACE_NIKITA = { lid: 0.22, brow: 0.025, browW: 1.15, eye: 0.95, iris: [0.36, 0.42, 0.48], folds: 1, bags: 1 };
const FACE_PRASKOVYA = { lid: 0.12, brow: 0.01, browW: 0.75, eye: 1.08, iris: [0.32, 0.3, 0.3], folds: 0.3, bags: 0 };

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

// frost on the beard, the moustache and the brows: white rime caught in the hair (Nikita's, out in the cold all day) —
// thick enough to read from across the yard: the beard's grey goes white with it at its ends, little icicles hang in it
const FROST = [[-0.3, -0.62, 0.78], [0.32, -0.6, 0.78], [0, -0.78, 0.66], [-0.16, -0.72, 0.72], [0.18, -0.74, 0.7], [-0.45, -0.45, 0.78],
  [0.46, -0.44, 0.78], [-0.2, -0.32, 0.93], [0.22, -0.33, 0.93], [0.05, -0.9, 0.5], [-0.08, -0.55, 0.85], [0.1, -0.6, 0.82],
  [-0.38, -0.55, 0.74], [0.4, -0.52, 0.74], [-0.1, -0.29, 0.96], [0.1, -0.3, 0.96], [-0.25, -0.8, 0.6], [0.27, -0.78, 0.6]];
const BROW_FROST = [[-0.36, 0.3, 0.88], [-0.22, 0.32, 0.93], [0.24, 0.32, 0.93], [0.38, 0.3, 0.88]];
const BEARD_FROST = [[-0.2, 0.1], [0.18, 0.04], [0, -0.2], [-0.1, -0.36], [0.14, -0.3], [-0.26, -0.12], [0.26, -0.16], [0.02, 0.0],
  [-0.06, -0.5], [0.08, -0.46]];
function frost(F) {
  const { add, mul } = V(), h = F.head, [, hu, hf] = h.axes, r = h.r * h.out, white = [0.95, 0.97, 1.0];
  for (const d of FROST) F.ball(h.on(d, 1.1), h.axes, [r * 0.1, r * 0.07, r * 0.05], white, 8);
  for (const d of BROW_FROST) F.ball(h.on(d, 1.04), h.axes, [r * 0.06, r * 0.03, r * 0.03], white, 8);
  // (on the long beard's fall, before the chest; and its tip, white, an icicle or two under it)
  const c = add(h.at, add(mul(hu, -r * 1.25), mul(hf, r * 0.38 + r * 0.33)));
  for (const [sx, sy] of BEARD_FROST) {
    F.ball(add(c, add(mul(h.axes[0], r * sx), mul(hu, r * sy))), h.axes, [r * 0.1, r * 0.08, r * 0.05], white, 8);
  }
  for (const sx of [-0.12, 0.1]) {
    const top = add(c, add(mul(h.axes[0], r * sx), mul(hu, -r * 0.5)));
    F.tube([top, add(top, mul(hu, -r * 0.22))], [[0, r * 0.035], [1, r * 0.008]], [[0, white]], 6, hf);
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

// the coat's fur cuffs round the wrists: a narrow band of fur just over the sleeve's end, the hand out of it (its ends kept)
const CUFFS = F => ({ colors: [[0, F.colors.accent]], r: 0.047 * F.k, a: [0, 0, 0], b: [0, 0, 0] });
function cuffs(F) {
  const K = F.keep(CUFFS), hint = F.fwd('Chest');
  for (const s of ['Left', 'Right']) {
    const fa = F.P(`${s}ForeArm`), hd = F.P(`${s}Hand`);
    for (let e = 0; e < 3; e++) { K.a[e] = fa[e] + (hd[e] - fa[e]) * 0.82; K.b[e] = fa[e] + (hd[e] - fa[e]) * 0.97; }
    F.bar(K.a, K.b, K.r, K.r * 1.05, K.colors, 12, hint);
  }
}

return {
  ...data,
  characters: {
    // Vasily Andreich Brekhunov, the master: about fifty, stout and ruddy, a trimmed brown beard and moustache; over his
    // sheepskin the red fox-fur coat to below the knee — a fat roll of lighter fur at the neck, the same fur at its cuffs —,
    // a round dark fur hat, felt boots; his face heavy, half-lidded, reckoning
    vasily: { kind: 'shapes', style: 'tolstoy', who: 'man', garment: 'fox_coat', hair: 'short', hat: 'fur_hat', face: 'tolstoy_vasily',
      parts: ['beard_trim', 'fur_collar', 'fur_cuffs'],
      body: { height: 1.0, thick: 1.1, shoulders: 1.1 },
      colors: { skin: '#e8a184', hair: '#6e4128', top: '#7b6a55', garment: '#c45a22', bottom: '#3c3530', shoes: '#4a4038', hat: '#3a2c24', accent: '#e8b07a' } },
    // Nikita, the workman: about fifty, wiry, a greying beard white with frost; a thin homespun coat worn through at the
    // hem, tied with his red sash; a worn sheepskin hat, grey felt boots
    nikita: { kind: 'shapes', style: 'tolstoy', who: 'man', garment: 'armyak', hair: 'short', hat: 'sheepskin_hat', face: 'tolstoy_nikita',
      parts: ['beard_long', 'beard_frost', 'sash'],
      body: { height: 0.98, thick: 0.9, shoulders: 1.0 },
      colors: { skin: '#d49274', hair: '#b4ada4', top: '#a99d86', garment: '#7f725c', bottom: '#5b5349', shoes: '#6c655d', hat: '#6a5d4c', accent: '#c4262c' } },
    // Praskovya Mikhailovna, his wife: slight, a dark blue dress with long sleeves down to the floor, a light woollen
    // shawl over her head
    praskovya: { kind: 'shapes', style: 'tolstoy', who: 'woman', garment: 'long_dress', hair: 'bun', hat: 'shawl', face: 'tolstoy_praskovya',
      body: { height: 0.93, thick: 0.9, shoulders: 0.9 },
      colors: { skin: '#eec5a8', hair: '#4b3a2e', top: '#4a5876', garment: '#4a5876', shoes: '#2a2624', hat: '#ece4d4' } },
  },
  shapes: {
    // the world's style: a painter's figure, not a toy's — true proportions (the head as a grown man's, the face longer
    // than wide, a neck, legs and arms of their length, a trunk as deep as a body is), rounded, a fine line of a darker
    // shade, hands with fingers, felt boots; painted toned, lit by the scene
    styles: { tolstoy: { from: 'soft', name: 'Tolstoy', head: 1.12, egg: [0.9, 1.08, 0.98], neck: 0.85, legs: 1.04, limb: 0.86,
      trunk: { w: [0.92, 0.96, 0.84, 0.96, 0.98], d: [0.92, 0.94, 0.86, 0.9, 0.82] }, line: 1.3,
      folds: { n: 7, depth: 0.05 }, arms: 'palm', fingers: true, feet: 'boot', face: 'tolstoy' } },
    faces: {
      tolstoy: { name: "the world's face", draw: faceOf(FACE_ANY) },
      tolstoy_vasily: { name: "the master's face", draw: faceOf(FACE_VASILY) },
      tolstoy_nikita: { name: "Nikita's face", draw: faceOf(FACE_NIKITA) },
      tolstoy_praskovya: { name: "Praskovya's face", draw: faceOf(FACE_PRASKOVYA) },
    },
    garments: {
      // the fox-fur coat: from the shoulders to a hand below the knee, a little wider at the hem, the felt boots under it;
      // sleeves of the fur, the cuffs a part of their own (fur_cuffs)
      fox_coat: { name: 'fox-fur coat', hang: [{ to: 1.32, from: 'shoulders', flare: 0.16 }], sleeves: 'garment' },
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
        F.ball(add(at, mul(hu, r * 0.74)), axes, [r * 1.02, r * 0.46, r * 1.02], F.colors.hat, sides);
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
