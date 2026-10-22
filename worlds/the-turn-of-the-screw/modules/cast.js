// The people of «The Turn of the Screw» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, straight-edged flat shapes lit by the scene's own light, a simple face so a face reads
// in a wide shot — and what they move by (the motions in cast.data.json). cast.md says who is who. A part's lengths
// are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const LINEN = [0.95, 0.93, 0.88, 1];
// the face's expressions (a person's <id>_mood; the engine's names): the brows' inner and outer ends up (+) or down,
// the eyes opened (1 at rest) or narrowed, the mouth's half-width, its corners up (+) or down, how open
const MOODS = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.17, corners: 0, open: 0 },
  smile: { inner: 0.01, outer: 0.01, eye: 0.85, wide: 0.2, corners: 0.07, open: 0 },
  laugh: { inner: 0.03, outer: 0.02, eye: 0.5, wide: 0.18, corners: 0.055, open: 0.08 },
  sad: { inner: 0.08, outer: -0.05, eye: 0.85, wide: 0.13, corners: -0.045, open: 0 },
  angry: { inner: -0.09, outer: 0.03, eye: 0.8, wide: 0.12, corners: -0.03, open: 0 },
  surprised: { inner: 0.09, outer: 0.09, eye: 1.3, wide: 0.08, corners: 0, open: 0.09 },
  afraid: { inner: 0.1, outer: 0.01, eye: 1.25, wide: 0.13, corners: -0.03, open: 0.05 },
  disgusted: { inner: -0.05, outer: -0.01, eye: 0.75, wide: 0.13, corners: -0.04, open: 0 },
  thinking: { inner: -0.04, outer: 0.035, eye: 0.85, wide: 0.13, corners: -0.02, open: 0 },
  tired: { inner: 0.02, outer: -0.05, eye: 0.55, wide: 0.13, corners: -0.02, open: 0 },
};
return {
  ...data,
  characters: {
    // the governess: twenty, a country parson's youngest daughter; slight, upright; brown hair in a bun; a plain
    // slate-grey gown to the ground with long sleeves and a narrow white collar
    governess: {
      kind: 'shapes', style: 'bly', who: 'woman', garment: 'gown', hair: 'bun', face: 'bly', parts: ['collar'],
      body: { height: 0.93, shoulders: 0.86, hips: 1.02, thick: 0.84 },
      colors: { skin: '#ecc8a8', hair: '#5a3a26', top: '#4e5262', garment: '#4e5262', bottom: '#4e5262', shoes: '#2a2624' },
    },
    // Flora, eight: fair hair loose to the shoulders, a white frock to the knees with a pale blue sash, white stockings
    flora: {
      kind: 'shapes', style: 'bly', who: 'child', garment: 'frock', hair: 'long', face: 'bly', socks: true, parts: ['sash'],
      body: { height: 0.7, head: 1.12 },
      colors: { skin: '#f0cfb3', hair: '#d3ac62', top: '#d8cdba', garment: '#d8cdba', bottom: '#d8cdba', socks: '#d6cdbd', shoes: '#4a3a30', accent: '#9fb6cf' },
    },
    // Miles, ten: dark chestnut hair cut short, a navy Eton jacket, a wide white collar, grey knee breeches, dark
    // stockings
    miles: {
      kind: 'shapes', style: 'bly', who: 'child', garment: 'eton', hair: 'short', face: 'bly', socks: true, parts: ['collar'],
      body: { height: 0.77, head: 1.08, shoulders: 0.92 },
      colors: { skin: '#efcdb0', hair: '#4a2e1e', top: '#2d3446', garment: '#2d3446', bottom: '#5b5c62', socks: '#2b2b31', shoes: '#231f1d' },
    },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours, the scene's light and shadows —
    // with a simple face (the world's own `bly`: eyes, brows, nose, mouth, drawn bold) so the faces read
    styles: { bly: { from: 'flat', name: 'Bly', line: 0.7, face: 'bly' } },
    faces: {
      // the engine's simple face drawn bolder, to read as far as the lawn's wide shot: large dark eyes, firm brows, a
      // nose, a mouth with a rose lip, a faint flush on the cheeks — the same solids for every expression
      bly: {
        name: 'Bly',
        draw: F => {
          const { axes, r: rh, on } = F.head;
          const [, hu] = axes;
          const x = MOODS[F.look.expression] ?? MOODS.neutral;
          const dark = [0.16, 0.12, 0.11];
          const brow = F.colors.hair.map((v, i) => (i < 3 ? v * 0.6 : v));
          const lips = [0.72, 0.38, 0.38];
          const flush = F.colors.skin.map((v, i) => (i === 0 ? Math.min(1, v * 1.04) : i < 3 ? v * 0.86 : v));
          for (const sx of [-1, 1]) {
            F.ball(on([sx * 0.55, -0.22, 0.81], 0.99), axes, [rh * 0.17, rh * 0.11, rh * 0.03], flush, 10);
            F.ball(on([sx * 0.34, 0.06, 0.94], 0.985), axes, [rh * 0.15, rh * 0.18 * x.eye, rh * 0.06], dark, 12);
            F.tube(
              [on([sx * 0.14, 0.4 + x.inner, 0.93], 0.995), on([sx * 0.33, 0.44 + (x.inner + x.outer) / 2, 0.9], 1.0), on([sx * 0.52, 0.37 + x.outer, 0.82], 0.995)],
              [[0, rh * 0.06], [1, rh * 0.07], [2, rh * 0.045]],
              [[0, brow]],
              6,
              hu,
            );
          }
          F.ball(on([0, -0.1, 1], 0.97), axes, [rh * 0.09, rh * 0.13, rh * 0.13], F.colors.skin.map((v, i) => (i < 3 ? v * 0.93 : v)), 10);
          const w = x.wide;
          const y = -0.4;
          F.ball(on([0, y - x.open / 2, 0.95], 0.975), axes, [rh * w * 0.8, rh * x.open * 1.3, rh * 0.03], dark, 10);
          F.tube([on([-w, y + x.corners, 0.92], 0.995), on([0, y, 0.94], 1.0), on([w, y + x.corners, 0.92], 0.995)], [[0, rh * 0.04], [2, rh * 0.04]], [[0, lips]], 6, hu);
        },
      },
    },
    garments: {
      // a gown: a full skirt from the waist to the ground, long sleeves, the bodice in its colour
      gown: { name: 'gown', hang: [{ to: 2.15, from: 'waist', flare: 0.4, off: 0.96 }], sleeves: 'garment', bare: true, bodice: true },
      // a boy's Eton jacket: short, cut off at the waist, long sleeves
      eton: { name: 'Eton jacket', hang: [{ to: 0.12, from: 'shoulders', flare: 0.04, folds: false }], sleeves: 'garment' },
      // a child's frock: a skirt from the waist to the knees, short sleeves
      frock: { name: 'frock', hang: [{ to: 1.05, from: 'waist', flare: 0.42, off: 0.96 }], short: true, bare: true, bodice: true },
    },
    parts: {
      // a white collar lying round the neck where it meets the shoulders
      collar: {
        name: 'collar',
        draw: F => {
          const { add, mul } = V();
          const uc = F.up('Chest');
          const c = add(F.P('Neck1'), mul(uc, -0.012 * F.fit.h));
          const w = 0.062 * F.k;
          F.ball(c, [F.side('Chest'), uc, F.fwd('Chest')], [w * 1.25, 0.016 * F.fit.h, w * 1.02], LINEN, 16);
        },
      },
      // a sash round the waist in the look's accent colour
      sash: {
        name: 'sash',
        draw: F => {
          const { add, mul } = V();
          const c = add(F.P('Spine1'), mul(F.up('Hips'), -0.01 * F.fit.h));
          F.ball(c, [F.side('Hips'), F.up('Hips'), F.fwd('Hips')], [0.15 * F.k, 0.03 * F.fit.h, 0.115 * F.k], F.colors.accent, 16);
        },
      },
    },
  },
};
