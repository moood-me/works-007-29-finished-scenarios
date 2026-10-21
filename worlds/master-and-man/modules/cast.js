// The people of «Master and Man» as people in a scene (an element with "person"): who they are — figures of shapes in
// this world's style, `tolstoy`: true proportions, rounded forms, a fine tinted line round them, simple faces with
// eyes, brows, a nose and a mouth, mittens and felt boots — a painterly illustration, lit by the scene's own light —
// and how they stand: the motions in cast.data.json (Kimodo's). cast.md says who is who and what each motion is.
// A part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;

// a beard over the jaw and the chin — below the mouth's corners, the nose, the eyes and the cheeks above it bare (a
// profile reads) —, in the colour of the hair; `long` — how far it falls on the chest
function beard(F, long) {
  const { add, mul } = V(), h = F.head, [, hu, hf] = h.axes, r = h.r * h.out;
  F.cap(h.at, h.axes, h.egg.map(e => e * r * 1.03), [0, -0.92, 0.38], 0.78, F.colors.hair, h.sides, h.square);
  F.ball(add(h.at, add(mul(hu, -r * (1.0 + 0.25 * long)), mul(hf, r * 0.38))), h.axes, [r * 0.5, r * (0.36 + 0.3 * long), r * 0.36], F.colors.hair, h.sides);
}

// the fur collar's rings, kept from frame to frame: four rings round the neck (below inside and out, above out and in)
const N = 16;
const COLLAR = () => ({ rings: [0, 1, 2, 3].map(() => Array.from({ length: N }, () => [0, 0, 0])), rs: [null, null, null, null, null] });
// the sash's: its two rings' sections and the rings, the knot's axes and size, an end's points, profile and colour
const SASH = F => ({ sec: [[null, null, null, 0, 0], [null, null, null, 0, 0]], band: [null, null], axes: [null, null, null],
  knot: [0.035 * F.fit.h, 0.03 * F.fit.h, 0.03 * F.fit.h], pts: [null, null, null],
  profile: [[0, 0.022 * F.fit.h], [2, 0.018 * F.fit.h]], colors: [[0, F.colors.accent]] });
// its two ends, hanging from the knot: to which side of it, how long (a man's metres), their springs' names
const SASH_ENDS = [{ s: 1, len: 0.2, a: 'sash1a', b: 'sash1b' }, { s: -1, len: 0.26, a: 'sash2a', b: 'sash2b' }];

return {
  ...data,
  characters: {
    // Vasily Andreich Brekhunov, the master: about fifty, stout and ruddy, a trimmed brown beard; over his sheepskin
    // the long red fox-fur coat with a broad collar of lighter fur, a tall dark fur hat, felt boots
    vasily: { kind: 'shapes', style: 'tolstoy', who: 'man', garment: 'fox_coat', hair: 'short', hat: 'fur_hat', parts: ['beard_trim', 'fur_collar'],
      body: { height: 1.0, thick: 1.32, shoulders: 1.08 },
      colors: { skin: '#e1a48a', hair: '#6e4128', top: '#7b6a55', garment: '#c4642a', bottom: '#3c3530', shoes: '#4a4038', hat: '#3a2f2a', accent: '#dc9a62' } },
    // Nikita, the workman: about fifty, wiry, a greying beard; a thin homespun coat worn through at the hem, tied with
    // his red sash; a worn sheepskin hat, grey felt boots
    nikita: { kind: 'shapes', style: 'tolstoy', who: 'man', garment: 'armyak', hair: 'short', hat: 'sheepskin_hat', parts: ['beard_long', 'sash'],
      body: { height: 0.98, thick: 0.9, shoulders: 1.0 },
      colors: { skin: '#c98f70', hair: '#8f877c', top: '#a99d86', garment: '#7c705d', bottom: '#5b5349', shoes: '#9a958c', hat: '#5f5547', accent: '#b5242a' } },
    // Praskovya Mikhailovna, his wife: slight, a dark dress, a light woollen shawl over her head
    praskovya: { kind: 'shapes', style: 'tolstoy', who: 'woman', garment: 'dress', hair: 'bun', hat: 'shawl',
      body: { height: 0.92, thick: 0.84, shoulders: 0.86 },
      colors: { skin: '#e7c4a8', hair: '#4b3a2e', top: '#3d4558', garment: '#3d4558', shoes: '#2a2624', hat: '#cfc8ba' } },
  },
  shapes: {
    // the world's style: true proportions, rounded, a fine line of a darker shade, simple faces, mittens, felt boots
    styles: { tolstoy: { from: 'soft', name: 'Tolstoy', head: 1.1, neck: 0.6, legs: 0.98, limb: 1.0, line: 1.5,
      folds: { n: 7, depth: 0.05 }, arms: 'mitten', feet: 'boot', face: 'simple' } },
    garments: {
      // the fox-fur coat: from the shoulders to the middle of the shin, wide at the hem, wide sleeves
      fox_coat: { name: 'fox-fur coat', hang: [{ to: 1.6, from: 'shoulders', flare: 0.42 }], sleeves: 'garment', wide: 0.3 },
      // the workman's coat of homespun: to the knee, worn ragged at the hem
      armyak: { name: 'homespun coat', hang: [{ to: 1.12, from: 'shoulders', flare: 0.2, ragged: true }], sleeves: 'garment' },
    },
    hats: {
      // a tall round fur hat: a band of fur over the crown (the brows and the forehead below it), a dome over it
      fur_hat: { name: 'fur hat', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.16), [0, 1, -0.15], 0.32, F.colors.hat, sides, square);
        F.ball(add(at, mul(hu, r * 0.75)), axes, [r * 1.05, r * 0.5, r * 1.05], F.colors.hat, sides);
      } },
      // a worn sheepskin hat, low and round, pushed a little back
      sheepskin_hat: { name: 'sheepskin hat', draw: F => {
        const { add, mul } = V(), { at, axes, egg, r, out, sides, square } = F.head, [, hu, hf] = axes;
        F.cap(at, axes, egg.map(e => e * r * out * 1.12), [0, 1, -0.25], 0.3, F.colors.hat, sides, square);
        F.ball(add(at, add(mul(hu, r * 0.62), mul(hf, -r * 0.1))), axes, [r * 0.98, r * 0.42, r * 0.98], F.colors.hat, sides);
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
      // the fox coat's collar: a thick roll of lighter fur round the neck and over the shoulders
      fur_collar: { name: 'fur collar', draw: F => {
        const K = F.keep(COLLAR), uc = F.up('Chest'), fc = F.fwd('Chest'), sd = F.side('Chest'), nk = F.P('Neck1');
        const m = F.fit.h, k = F.k, hh = 0.055 * m, ro = 0.165 * k, ri = 0.06 * k;
        const c = [nk[0] - uc[0] * 0.03 * m, nk[1] - uc[1] * 0.03 * m, nk[2] - uc[2] * 0.03 * m];
        for (let j = 0; j < 4; j++) {
          const dy = j < 2 ? -hh : hh, w = j === 0 ? ri : j === 1 ? ro : j === 2 ? ro * 0.86 : ri * 1.15, ring = K.rings[j];
          for (let q = 0; q < N; q++) {
            const a = q / N * Math.PI * 2, cs = Math.cos(a), sn = Math.sin(a);
            const x = w * Math.sign(cs) * Math.abs(cs) ** 0.8, z = w * 0.9 * Math.sign(sn) * Math.abs(sn) ** 0.8, p = ring[q];
            for (let e = 0; e < 3; e++) p[e] = c[e] + uc[e] * dy + sd[e] * x + fc[e] * z;
          }
          K.rs[j] = ring;
        }
        K.rs[4] = K.rings[0];
        F.rings(K.rs, F.colors.accent, null, null);
      } },
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
