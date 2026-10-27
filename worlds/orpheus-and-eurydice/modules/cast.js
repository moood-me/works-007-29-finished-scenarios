// The people of «Orpheus and Eurydice» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, slender and quiet, plain colours with their shade under the scene's own light, no pen
// line (the world is painted in clean flat shapes), faces of a few clear features big enough to read at night — and how
// they move: the engine's stand and walk, and the motions in cast.data.json (Kimodo's). cast.md says who is who. A
// part's lengths are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m), its thicknesses
// times F.k.
const V = () => MooodShapes.V;
// Eurydice's red ribbon — the world's one red: nothing and no one else wears it
const RED = [0.72, 0.09, 0.1, 1];
// the whites of the eyes (a little warm) and the features' dark
const WHITES = [0.94, 0.92, 0.88, 1];
const INK = [0.13, 0.09, 0.08, 1];
// a colour of the look a shade darker or redder, its way of being painted (its fourth) kept
const shade = (c, kr, kg, kb) => [c[0] * kr, c[1] * kg, c[2] * kb, c[3]];
// (a cap of hair's sizes: the head's egg a little out)
const CROWN = F => ({ radii: F.head.egg.map(e => e * F.head.r * F.head.out) });
// (Orpheus's curls round the cap: where on the head, and how big)
const CURLS = [[-0.45, 0.8, 0.42, 0.17], [-0.15, 0.88, 0.45, 0.17], [0.15, 0.88, 0.45, 0.17], [0.45, 0.8, 0.42, 0.17],
  [-0.78, 0.5, 0.3, 0.16], [0.78, 0.5, 0.3, 0.16], [-0.86, 0.2, 0.05, 0.15], [0.86, 0.2, 0.05, 0.15],
  [-0.6, 0.75, -0.3, 0.19], [0, 0.95, -0.1, 0.19], [0.6, 0.75, -0.3, 0.19], [-0.3, 0.55, -0.78, 0.2], [0.3, 0.55, -0.78, 0.2],
  [-0.62, 0.2, -0.7, 0.18], [0.62, 0.2, -0.7, 0.18], [0, 0.1, -0.95, 0.18]];
// (the ribbon's band round the head, its two long ends: points, profiles, colour)
const BAND = 14;
const RIBBON = F => ({
  band: new Array(BAND + 1),
  ends: [new Array(4), new Array(4)],
  profile: [[0, 0.075 * F.head.r], [BAND, 0.075 * F.head.r]],
  end: [[0, 0.09 * F.head.r], [3, 0.07 * F.head.r]],
  colors: [[0, RED]],
});

// Persephone's silver circlet: its band's points, profile, colour
const CIRCLET = F => ({
  band: new Array(BAND + 1),
  profile: [[0, 0.045 * F.head.r], [BAND, 0.045 * F.head.r]],
  colors: [[0, [0.82, 0.83, 0.86, 1]]],
});
// the lantern's dark wood, its iron ring, its paper lit from within (a fourth of 2: it glows, its own colour whatever
// the light)
const WOOD = [0.24, 0.19, 0.15, 1], IRON = [0.16, 0.14, 0.13, 1], GLOW = [1, 0.8, 0.52, 2];

// the face's expressions (the engine's names — a person's <id>_mood): the brows' inner and outer ends up (+) or down,
// the eyes opened (1 at rest) or narrowed, the mouth's half-width, its corners up (+) or down, how open it is
const EXPR = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.14, corners: 0, open: 0 },
  smile: { inner: 0.0, outer: 0.03, eye: 0.88, wide: 0.17, corners: 0.075, open: 0 },
  laugh: { inner: 0.03, outer: 0.03, eye: 0.76, wide: 0.19, corners: 0.09, open: 0.07 },
  sad: { inner: 0.07, outer: -0.05, eye: 0.9, wide: 0.12, corners: -0.04, open: 0 },
  angry: { inner: -0.08, outer: 0.03, eye: 0.86, wide: 0.11, corners: -0.025, open: 0 },
  surprised: { inner: 0.08, outer: 0.08, eye: 1.22, wide: 0.08, corners: 0, open: 0.07 },
  afraid: { inner: 0.09, outer: 0.01, eye: 1.18, wide: 0.12, corners: -0.025, open: 0.04 },
  disgusted: { inner: -0.05, outer: -0.01, eye: 0.82, wide: 0.12, corners: -0.035, open: 0 },
  thinking: { inner: -0.06, outer: 0.02, eye: 0.94, wide: 0.12, corners: -0.012, open: 0 },
  tired: { inner: 0.02, outer: -0.05, eye: 0.64, wide: 0.12, corners: -0.015, open: 0 },
};

// a face of a few clear features, big on the head so it reads at the size people stand in a scene and in the
// lantern's light: almond eyes (warm whites, a dark iris, a dark upper lid), brows a shade darker than the hair, a
// straight nose of the skin's own colour (the light gives its form), lips a shade rosier than the skin over a dark
// line. At rest, or as the person's <id>_mood has it (EXPR), and as the person's own cast of face is (T: lid — a
// heavier lid under 1; brow — heavier brows; browL, browR — one raised; cornerL, cornerR — a mouth's corner its own
// way; sing — the lips parted, as one sings). The same solids for every expression (the engine goes from one to another)
const faceOf = (T = {}) => F => {
  const { axes, r: rh, on } = F.head, [, hu] = axes, x = EXPR[F.look.expression] ?? EXPR.neutral, sk = F.colors.skin;
  const brow = shade(F.colors.hair, 0.6, 0.6, 0.6), lips = shade(sk, 0.82, 0.52, 0.5), bw = T.brow ?? 1;
  const open = x.eye * (T.lid ?? 1), lid = 0.05 * (open - 1), mouthOpen = x.open + (T.sing ?? 0);
  for (const sx of [-1, 1]) {
    const up = sx < 0 ? (T.browL ?? 0) : (T.browR ?? 0);
    F.ball(on([sx * 0.36, 0.07, 0.9], 0.975), axes, [rh * 0.21, rh * 0.12 * open, rh * 0.045], WHITES, 12);
    F.ball(on([sx * 0.35, 0.07, 0.935], 0.995), axes, [rh * 0.1, rh * 0.112 * open, rh * 0.045], INK, 12);
    F.tube([on([sx * 0.12, 0.155 + lid, 0.96], 1.0), on([sx * 0.36, 0.225 + lid * 1.3, 0.93], 1.012), on([sx * 0.61, 0.13 + lid, 0.81], 1.0)],
      [[0, rh * 0.03], [1, rh * 0.055], [2, rh * 0.028]], [[0, INK]], 6, hu);
    F.tube([on([sx * 0.12, 0.39 + x.inner + up * 0.6, 0.93], 0.995), on([sx * 0.35, 0.44 + (x.inner + x.outer) / 2 + up, 0.89], 1.0),
      on([sx * 0.59, 0.36 + x.outer + up * 0.8, 0.79], 0.995)], [[0, rh * 0.064 * bw], [1, rh * 0.062 * bw], [2, rh * 0.034 * bw]], [[0, brow]], 6, hu);
  }
  F.ball(on([0, -0.1, 1], 0.97), axes, [rh * 0.075, rh * 0.16, rh * 0.11], sk, 10);
  const w = x.wide * 1.35, y = -0.42, cl = x.corners * 1.3 + (T.cornerL ?? 0), cr = x.corners * 1.3 + (T.cornerR ?? 0);
  F.ball(on([0, y - mouthOpen / 2, 0.95], 0.975), axes, [rh * w * 0.7, rh * Math.max(mouthOpen, 0.012), rh * 0.03], INK, 10);
  F.ball(on([0, y - 0.07 - mouthOpen * 0.6, 0.95], 0.975), axes, [rh * w * 0.62, rh * 0.065, rh * 0.035], lips, 10);
  F.tube([on([-w, y + cl, 0.92], 0.995), on([0, y + 0.02, 0.95], 1.0), on([w, y + cr, 0.92], 0.995)],
    [[0, rh * 0.03], [1, rh * 0.055], [2, rh * 0.03]], [[0, lips]], 6, hu);
};

return {
  ...data,
  characters: {
    // Orpheus, about thirty: lean, a singer's straight back; dark curling hair and a short dark beard; a long loose
    // tunic of faded blue to the knee over dark trousers, a plain belt; barefoot (he lives by the water)
    orpheus: { kind: 'shapes', style: 'myth', who: 'man', garment: 'tunic', hair: 'curly', face: 'orpheus', parts: ['beard', 'belt'],
      barefoot: 'both',
      body: { height: 1.02, thick: 0.95, shoulders: 1.0, head: 1.0 },
      colors: { skin: '#d6a681', hair: '#2a1c15', top: '#7a8ca6', garment: '#7a8ca6', bottom: '#4a4038', accent: '#5b4330', shoes: '#c79a78' } },
    // Eurydice, twenty and a little more: slight, light on her feet; long dark-brown hair round her face to the jaw and
    // loose down her back, a red ribbon tied round it (the world's one red); a plain long dress of undyed linen girded
    // with a cord, barefoot
    eurydice: { kind: 'shapes', style: 'myth', who: 'woman', garment: 'shift', hair: 'straight', face: 'eurydice', parts: ['ribbon', 'cord'],
      barefoot: 'both',
      body: { height: 0.92, thick: 0.88, shoulders: 0.88, hips: 1.0, neck: 1.04, head: 1.0 },
      colors: { skin: '#ebc4a2', hair: '#3b2418', top: '#ece2cd', garment: '#ece2cd', bottom: '#e4d9c2', accent: '#b8171a', shoes: '#e2b597' } },
    // Persephone, of no age: tall, straight, still; black hair drawn back into a knot at the back of the head, a thin
    // band of silver round it; pale from long years under the earth; a long gown of the deep green of pomegranate
    // leaves, to the floor, long sleeves; barefoot (she works in her garden)
    persephone: { kind: 'shapes', style: 'myth', who: 'woman', garment: 'gown', hair: 'bun', face: 'persephone', parts: ['circlet'],
      barefoot: 'both',
      body: { height: 0.98, thick: 0.86, shoulders: 0.9, hips: 0.98, neck: 1.08, head: 0.98 },
      colors: { skin: '#e6cbb6', hair: '#1f1612', top: '#3f5c4b', garment: '#3f5c4b', bottom: '#34503f', accent: '#d2d4da', shoes: '#ddbfa9' } },
    // Hades, of no age: big, heavy-shouldered, tired; short dark hair going grey, a full beard; a long heavy mantle of
    // ash-grey wool to the floor over dark trousers; dark sandals
    hades: { kind: 'shapes', style: 'myth', who: 'man', garment: 'mantle', hair: 'short', face: 'hades', parts: ['full_beard'],
      body: { height: 1.07, thick: 1.18, shoulders: 1.14, head: 1.04 },
      colors: { skin: '#cfa98c', hair: '#4b4743', top: '#4a4550', garment: '#4a4550', bottom: '#2f2c34', accent: '#3a3029', shoes: '#3a3029' } },
    // the shades on the meadow: people of every age as they were, every colour gone out of them — pale grey-blue skin,
    // hair and clothes, as if seen through water; barefoot
    shade_man: { kind: 'shapes', style: 'myth', who: 'man', garment: 'tunic', hair: 'short', face: 'shade', barefoot: 'both',
      body: { height: 1.0, thick: 0.92 },
      colors: { skin: '#b4b9c8', hair: '#6a6f82', top: '#a0a7bb', garment: '#a0a7bb', bottom: '#7f8599', accent: '#7f8599', shoes: '#b4b9c8' } },
    shade_woman: { kind: 'shapes', style: 'myth', who: 'woman', garment: 'shift', hair: 'long', face: 'shade', barefoot: 'both',
      body: { height: 0.92, thick: 0.86, shoulders: 0.88 },
      colors: { skin: '#bcc0cd', hair: '#5f6476', top: '#aeb3c4', garment: '#aeb3c4', bottom: '#a3a8ba', accent: '#8a8fa2', shoes: '#bcc0cd' } },
    shade_old: { kind: 'shapes', style: 'myth', who: 'man', garment: 'mantle', hair: 'short', face: 'shade', barefoot: 'both',
      body: { height: 0.95, thick: 0.95, shoulders: 0.96 },
      colors: { skin: '#b7bac6', hair: '#c3c6d0', top: '#8d93a6', garment: '#8d93a6', bottom: '#787e92', accent: '#787e92', shoes: '#b7bac6' } },
  },
  shapes: {
    // the world's style: slender, long-limbed figures (from `shadow`), a head a little big on a neck of natural length
    // so a face reads at night; colours with their shade (`toned`), lit by the scene; no pen line — the places are
    // clean flat shapes, the people of the same hand; cloth falling in soft folds
    styles: {
      myth: { from: 'shadow', name: 'Orpheus and Eurydice', head: 1.2, egg: [0.84, 1.06, 0.95], neck: 0.82, legs: 1.04, limb: 0.9,
        sides: 20, square: 2, trunk: { w: [0.8, 0.84, 0.7, 0.84, 0.9], d: [0.8, 0.82, 0.72, 0.78, 0.7] }, arms: 'slim', feet: 'slim',
        fingers: false, paint: 'toned', line: false, tinted: false, folds: { n: 9, depth: 0.08 }, ragged: 0, face: 'eurydice', drape: true },
    },
    arms: { slim: [[0, 0.058], [0.55, 0.053], [1, 0.043], [1.45, 0.041], [2, 0.03], [2.35, 0.037], [2.7, 0.034], [3, 0.019]] },
    legs: { slim: [[0, 0.092], [0.45, 0.075], [1, 0.05], [1.35, 0.057], [2, 0.031], [2.4, 0.034], [2.8, 0.028], [3, 0.015]] },
    faces: {
      // Eurydice's: one corner of the mouth a little higher — she is about to tease him; fine brows
      eurydice: { name: 'Eurydice', draw: faceOf({ cornerR: 0.025, brow: 0.7 }) },
      // Orpheus's: brows a little heavier and straight, the eyes open — he looks at whom he loves
      orpheus: { name: 'Orpheus', draw: faceOf({ brow: 1.2 }) },
      // Orpheus singing: the same face, the lips parted
      orpheus_sing: { name: 'Orpheus, singing', draw: faceOf({ brow: 1.2, sing: 0.06 }) },
      // Persephone's: level brows, the eyes a little lidded — she looks straight and long
      persephone: { name: 'Persephone', draw: faceOf({ brow: 0.95, lid: 0.9 }) },
      // Hades's: heavy straight brows over heavy lids — a tired man who never raises his voice
      hades: { name: 'Hades', draw: faceOf({ brow: 1.4, lid: 0.78 }) },
      // a shade's: quiet, the lids a little low, the brows faint
      shade: { name: 'a shade', draw: faceOf({ brow: 0.75, lid: 0.85 }) },
    },
    garments: {
      // a plain long dress of linen: from the shoulders, falling loose to the ankles, long sleeves
      shift: { name: 'linen dress', hang: [{ to: 1.95, from: 'shoulders', flare: 0.3 }], sleeves: 'garment' },
      // Persephone's gown: from the shoulders to the floor, wider at the hem, long sleeves
      gown: { name: 'gown', hang: [{ to: 2.0, from: 'shoulders', flare: 0.42 }], sleeves: 'garment' },
      // a long heavy mantle of wool from the shoulders to the floor, long sleeves (Hades; the old among the shades)
      mantle: { name: 'mantle', hang: [{ to: 2.05, from: 'shoulders', flare: 0.36 }], sleeves: 'garment' },
    },
    hair: {
      // dark curling hair, short over the ears: a cap off the brow and small curls sunk half into it, close round the
      // crown, the temples and the back — one dark mass, curly at its edge
      curly: { name: 'curling hair', draw: F => {
        const h = F.head, r = h.r, K = F.keep(CROWN);
        F.cap(h.at, h.axes, K.radii, [0, 0.72, -0.69], -0.12, F.colors.hair, h.sides, h.square);
        for (const [x, y, z, s] of CURLS) F.ball(h.on([x, y, z], 0.95), h.axes, [r * s * 1.25, r * s, r * s * 1.25], F.colors.hair, 8);
      } },
    },
    parts: {
      // a short dark beard on the chin, the upper lip and the cheeks clear
      beard: { name: 'short beard', draw: F => {
        const h = F.head, r = h.r;
        F.ball(h.on([0, -0.74, 0.58], 0.96), h.axes, [r * 0.4, r * 0.25, r * 0.26], F.colors.hair, 12);
      } },
      // a full beard over the jaw, the cheeks and the chin, below the nose (the eyes and the nose clear of it) — Hades's
      full_beard: { name: 'full beard', draw: F => {
        const { add, mul } = V(), h = F.head, [, hu, hf] = h.axes, r = h.r * h.out;
        F.cap(h.at, h.axes, h.egg.map(e => e * r * 1.05), [0, -0.85, 0.53], 0.65, F.colors.hair, h.sides, h.square);
        F.ball(add(h.at, add(mul(hu, -r * 0.85), mul(hf, r * 0.45))), h.axes, [r * 0.55, r * 0.42, r * 0.38], F.colors.hair, h.sides);
      } },
      // Persephone's circlet: a thin band of silver round her hair above the brow
      circlet: { name: 'circlet', draw: F => {
        const h = F.head, K = F.keep(CIRCLET), [, hu] = h.axes;
        for (let i = 0; i <= BAND; i++) {
          const a = (i / BAND) * Math.PI * 2;
          K.band[i] = h.on([Math.sin(a), 0.5 + 0.18 * Math.cos(a), Math.cos(a)], 1.07);
        }
        F.tube(K.band, K.profile, K.colors, 6, hu, 0.35);
      } },
      // the lantern Orpheus carries on the meadow: a small square lantern of cream paper in a dark wooden frame,
      // hanging by its ring from his left hand and swinging a little late as the hand moves, a candle burning in it.
      // Its point flame (the scene's light "at": "orpheus#flame")
      lantern: { name: 'lantern', draw: F => {
        const { add, mul, sub, unit } = V(), k = F.fit.h, hand = F.P('LeftHand'), side = F.side('Hips'), fw = F.fwd('Hips');
        const ring = add(hand, [0, -0.04 * k, 0]), body = F.swing('lantern', add(ring, [0, -0.2 * k, 0]), 60);
        const dn = unit(sub(body, ring)), ax = [side, mul(dn, -1), fw];
        F.tube([ring, add(ring, mul(dn, 0.06 * k))], [[0, 0.004 * k], [1, 0.004 * k]], [[0, IRON]], 4, side);
        F.ball(add(ring, mul(dn, 0.075 * k)), ax, [0.075 * k, 0.014 * k, 0.075 * k], WOOD, 4, 3);
        F.ball(add(ring, mul(dn, 0.17 * k)), ax, [0.06 * k, 0.085 * k, 0.06 * k], GLOW, 4, 3);
        F.ball(add(ring, mul(dn, 0.265 * k)), ax, [0.075 * k, 0.014 * k, 0.075 * k], WOOD, 4, 3);
        F.point('flame', add(ring, mul(dn, 0.17 * k)));
      } },
      // a plain belt of dark leather round the tunic at the waist
      belt: { name: 'belt', draw: F => {
        const { mix } = V(), k = F.k, a = F.P('Spine1'), b = F.P('Hips');
        F.ball(mix(a, b, 0.55), [F.side('Hips'), F.up('Hips'), F.fwd('Hips')], [0.15 * k, 0.025 * F.fit.h, 0.115 * k], F.colors.accent, 16);
      } },
      // a thin cord of darker linen round her dress at the waist (so the dress has a front and a back)
      cord: { name: 'cord', draw: F => {
        const { mix } = V(), k = F.k, a = F.P('Spine1'), b = F.P('Hips');
        F.ball(mix(a, b, 0.4), [F.side('Hips'), F.up('Hips'), F.fwd('Hips')], [0.135 * k, 0.012 * F.fit.h, 0.1 * k], shade(F.colors.garment, 0.7, 0.66, 0.6), 16);
      } },
      // Eurydice's red ribbon: a band round her hair above the brow, tied at the back, its two long ends hanging down
      // her hair and swinging a little late as she moves
      ribbon: { name: 'red ribbon', draw: F => {
        const { add, mul } = V(), h = F.head, K = F.keep(RIBBON), [, hu, hf] = h.axes;
        for (let i = 0; i <= BAND; i++) {
          const a = (i / BAND) * Math.PI * 2;
          K.band[i] = h.on([Math.sin(a), 0.48 + 0.2 * Math.cos(a), Math.cos(a)], 1.06);
        }
        F.tube(K.band, K.profile, K.colors, 6, hu, 0.35);
        const knot = h.on([0, 0.3, -1], 1.12);
        F.ball(knot, h.axes, [h.r * 0.2, h.r * 0.14, h.r * 0.12], RED, 10);
        for (let e = 0; e < 2; e++) {
          const p = K.ends[e], s = e === 0 ? -1 : 1;
          p[0] = knot;
          p[1] = F.swing(`ribbon${e}a`, add(knot, add(mul(hu, -0.09 * F.fit.h), add(mul(hf, -0.03 * F.fit.h), mul(h.axes[0], s * 0.025 * F.fit.h)))), 140);
          p[2] = F.swing(`ribbon${e}b`, add(p[1], add(mul(hu, -0.1 * F.fit.h), mul(hf, -0.015 * F.fit.h))), 90);
          p[3] = F.swing(`ribbon${e}c`, add(p[2], mul(hu, -0.1 * F.fit.h)), 60);
          F.tube(p, K.end, K.colors, 6, h.axes[0], 0.3);
        }
      } },
    },
  },
};
