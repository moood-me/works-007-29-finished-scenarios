// The people of «An Ordinary Miracle» as people in a scene (an element with "person", "cast": "cast"): who they are —
// figures of shapes in this world's style, `tale` (a storybook figure: the head a little large so the faces read, a
// tinted painted edge, plain warm colours lit by the scene's own light, faces with the whites of the eyes, the irises,
// lids, brows, a nose and the lips, each expression bold enough to read at a few metres) — and how they move: the
// motions in cast.data.json. cast.md says who is who. A part's lengths are a man's metres times F.fit.h (the person's
// height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const WHITES = [0.95, 0.92, 0.87, 1], IRIS = [0.22, 0.15, 0.1, 1], LASH = [0.16, 0.11, 0.08, 1], MOUTH = [0.32, 0.12, 0.1, 1];
const GOLD = [0.86, 0.66, 0.26, 1], GEM = [0.2, 0.36, 0.72, 1];
// the faces' expressions (a person's <id>_mood, by the engine's names): the brows' inner and outer ends up (+) or down,
// the eyes' opening (the upper lid: 1 at rest), the mouth's half-width, its corners up (+) or down, how open it is — in
// shares of the head's radius
const MOODS = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.17, corners: 0, open: 0 },
  smile: { inner: 0.03, outer: 0.02, eye: 0.84, wide: 0.21, corners: 0.08, open: 0.015 },
  laugh: { inner: 0.04, outer: 0.03, eye: 0.5, wide: 0.22, corners: 0.075, open: 0.1 },
  sad: { inner: 0.14, outer: -0.07, eye: 1.05, wide: 0.15, corners: -0.045, open: 0.03 },
  angry: { inner: -0.12, outer: 0.04, eye: 0.86, wide: 0.13, corners: -0.04, open: 0 },
  surprised: { inner: 0.1, outer: 0.1, eye: 1.35, wide: 0.1, corners: 0, open: 0.09 },
  afraid: { inner: 0.13, outer: 0, eye: 1.25, wide: 0.13, corners: -0.03, open: 0.03 },
  disgusted: { inner: -0.06, outer: -0.01, eye: 0.75, wide: 0.15, corners: -0.045, open: 0 },
  thinking: { inner: -0.05, outer: 0.02, eye: 0.88, wide: 0.13, corners: -0.01, open: 0 },
  tired: { inner: 0.05, outer: -0.09, eye: 0.62, wide: 0.15, corners: -0.04, open: 0 },
};
// the circlet's ring of points (made once a figure: F.keep)
const CIRCLET = () => ({ pts: new Array(17) });
// (a colour darkened to `k` of it)
const shade = (c, k) => c.map((v, i) => (i < 3 ? v * k : v));
// (a trunk's section moved along its own up by `dy` and widened by `s`: [centre, side, front, half-width, half-depth])
const sectionAt = (sec, up, dy, s) => {
  const { add, mul } = V();
  return [add(sec[0], mul(up, dy)), sec[1], sec[2], sec[3] * s, sec[4] * s];
};
return {
  ...data,
  characters: {
    // the young man who was a bear: twenty-three to look at, big and broad, shaggy chestnut hair, an undyed linen
    // shirt to the hips, a honey-coloured woven belt (the one warm colour on him — honey and amber are his), dark
    // trousers, soft boots
    medved: {
      kind: 'shapes', style: 'tale', who: 'youth', garment: 'tunic', hair: 'spiky', parts: ['sash'],
      body: { height: 1.05, shoulders: 1.12, thick: 1.1, arms: 1.03 },
      colors: { skin: '#e2b48e', hair: '#5b3a20', top: '#ddd1b4', garment: '#ddd1b4', bottom: '#4e4134', shoes: '#3b2b20', accent: '#d39a32' },
    },
    // the Princess: eighteen, slender, long dark-honey hair, a cornflower-blue travelling dress, a thin gold circlet
    princess: {
      kind: 'shapes', style: 'tale', who: 'woman', garment: 'dress', hair: 'long', parts: ['circlet'],
      body: { height: 0.93, thick: 0.84, shoulders: 0.86 },
      colors: { skin: '#f0cdb0', hair: '#6e4424', top: '#4f6fb3', garment: '#4f6fb3', shoes: '#3a2e2c', accent: '#d8a640' },
    },
    // the Master, the wizard: ageless — dark hair without a grey thread in it, a long bottle-green coat over a white
    // shirt, a crimson scarf
    hozyain: {
      kind: 'shapes', style: 'tale', who: 'man', garment: 'coat', hair: 'short', scarf: true,
      body: { height: 1.01, thick: 0.92 },
      colors: { skin: '#e3b796', hair: '#2b211c', top: '#ece6da', garment: '#2f5446', bottom: '#2c2a2a', shoes: '#231c18', accent: '#b2333a' },
    },
  },
  shapes: {
    // the world's style: a storybook figure — made from the engine's `soft` with the head a little large (the faces
    // read), natural shoulders, limbs with cloth on them, working hands, a tinted painted edge, the colours lit by the
    // scene's own light (`lit`), smooth cloth (no facets)
    styles: {
      tale: { from: 'soft', name: 'storybook', sides: 16, head: 1.26, egg: [0.92, 1.05, 0.98], neck: 0.75, legs: 1.0, limb: 1.1, arms: 'hand', feet: 'trouser',
        trunk: { w: [0.94, 0.98, 0.88, 0.97, 0.95], d: [0.88, 0.88, 0.82, 0.86, 0.78] }, paint: 'lit', line: 1.7, tinted: true,
        folds: { n: 6, depth: 0.06 }, face: 'tale', ground: 'paper' },
    },
    // an arm with a working hand (a broad palm, its fingers' ends not pinched); a leg in trousers
    arms: {
      hand: [[0, 0.036], [0.3, 0.043], [0.55, 0.041], [1, 0.034], [1.45, 0.032], [2, 0.025], [2.3, 0.037], [2.75, 0.035], [3, 0.02]],
    },
    legs: {
      trouser: [[0, 0.092], [0.5, 0.082], [1, 0.064], [1.4, 0.062], [2, 0.05], [2.3, 0.058], [2.8, 0.05], [3, 0]],
    },
    faces: {
      // a face that reads at a few metres: the whites of the eyes, the irises, the upper lids' dark line, the shade
      // under the eyes, brows of the hair's colour, the nose and the shade under it, the lips — each expression (MOODS)
      // moving the same solids
      tale: { name: 'storybook face', draw: F => {
        const { axes, r: rh, on } = F.head, hu = axes[1], x = MOODS[F.look.expression] ?? MOODS.neutral, skin = F.colors.skin;
        const under = shade(skin, 0.85), lips = [skin[0] * 0.8, skin[1] * 0.5, skin[2] * 0.46, 1];
        const brow = [0, 1, 2, 3].map(i => (i < 3 ? F.colors.hair[i] * 0.66 + skin[i] * 0.16 : 1));
        const lid = 0.05 + 0.115 * x.eye;
        for (const sx of [-1, 1]) {
          F.ball(on([sx * 0.34, 0.05, 0.94], 0.975), axes, [rh * 0.19, rh * 0.122 * x.eye, rh * 0.045], WHITES, 12);
          F.ball(on([sx * 0.32, 0.04, 0.95], 0.99), axes, [rh * 0.1, rh * 0.106 * Math.min(1, x.eye), rh * 0.038], IRIS, 10);
          F.tube([on([sx * 0.17, lid - 0.03, 0.93], 1.0), on([sx * 0.34, lid + 0.01, 0.95], 1.006), on([sx * 0.52, lid - 0.045, 0.85], 1.0)],
            [[0, rh * 0.032], [1, rh * 0.046], [2, rh * 0.024]], [[0, LASH]], 6, hu);
          F.tube([on([sx * 0.22, -0.09, 0.95], 0.99), on([sx * 0.36, -0.11, 0.95], 0.995), on([sx * 0.48, -0.07, 0.88], 0.99)],
            [[0, rh * 0.016], [2, rh * 0.012]], [[0, under]], 6, hu);
          F.tube([on([sx * 0.15, 0.32 + x.inner, 0.95], 1.0), on([sx * 0.32, 0.37 + (x.inner + x.outer) / 2, 0.92], 1.01), on([sx * 0.5, 0.3 + x.outer, 0.84], 1.0)],
            [[0, rh * 0.044], [1, rh * 0.052], [2, rh * 0.028]], [[0, brow]], 6, hu);
        }
        F.ball(on([0, -0.12, 1], 0.99), axes, [rh * 0.1, rh * 0.16, rh * 0.14], shade(skin, 0.97), 10);
        F.ball(on([0, -0.25, 0.98], 0.98), axes, [rh * 0.1, rh * 0.03, rh * 0.05], under, 8);
        const w = x.wide, y = -0.43;
        F.ball(on([0, y - x.open / 2, 0.93], 0.97), axes, [rh * w * 0.7, rh * x.open, rh * 0.03], MOUTH, 10);
        F.tube([on([-w, y + x.corners, 0.92], 0.995), on([0, y + 0.01, 0.94], 1.0), on([w, y + x.corners, 0.92], 0.995)],
          [[0, rh * 0.02], [1, rh * 0.034], [2, rh * 0.02]], [[0, lips]], 6, hu);
      } },
    },
    parts: {
      // a woven belt round the waist in the look's accent colour, its knot at the left hip and the two ends hanging
      sash: { name: 'woven belt', draw: F => {
        const { add, mul } = V();
        const m = F.fit.h, sq = F.style.square, n = 24, waist = F.trunk(1)[2], upW = F.up('Spine1'), c = F.colors.accent;
        const rings = [
          F.ringOf(sectionAt(waist, upW, -0.03 * m, 1.07), n, sq),
          F.ringOf(sectionAt(waist, upW, -0.03 * m, 1.13), n, sq),
          F.ringOf(sectionAt(waist, upW, 0.03 * m, 1.13), n, sq),
          F.ringOf(sectionAt(waist, upW, 0.03 * m, 1.07), n, sq),
        ];
        F.rings(rings, c, null, null);
        const knot = add(waist[0], add(mul(waist[1], waist[3] * 0.85), mul(waist[2], waist[4] * 0.8)));
        F.ball(knot, [waist[1], upW, waist[2]], [0.03 * m, 0.028 * m, 0.022 * m], shade(c, 0.9), 8);
        const end = F.swing('sash', add(knot, [0, -0.2 * m, 0]), 120);
        F.bar(knot, end, 0.016 * m, 0.012 * m, [[0, c]], 6, waist[2], 0.4);
      } },
      // a thin gold circlet round the brow, a small point at its front with a blue stone
      circlet: { name: 'gold circlet', draw: F => {
        const { axes, r, on } = F.head;
        const K = F.keep(CIRCLET);
        for (let q = 0; q < 17; q++) {
          const a = -Math.PI + (q / 16) * Math.PI * 2;
          K.pts[q] = on([Math.sin(a), 0.4 - 0.12 * Math.cos(a), Math.cos(a)], 1.06);
        }
        F.tube(K.pts, [[0, r * 0.045], [16, r * 0.045]], [[0, GOLD]], 6, axes[1]);
        F.ball(on([0, 0.56, 0.86], 1.08), axes, [r * 0.07, r * 0.11, r * 0.04], GOLD, 8);
        F.ball(on([0, 0.44, 0.92], 1.11), axes, [r * 0.05, r * 0.05, r * 0.03], GEM, 8);
      } },
    },
  },
};
