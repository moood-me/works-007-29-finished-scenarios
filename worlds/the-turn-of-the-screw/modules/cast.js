// The people of «The Turn of the Screw» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, straight-edged flat shapes lit by the scene's own light, a simple face so a face reads
// in a wide shot — and what they move by (the motions in cast.data.json). cast.md says who is who. A part's lengths
// are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const LINEN = [0.95, 0.93, 0.88, 1];
return {
  ...data,
  characters: {
    // the governess: twenty, a country parson's youngest daughter; slight, upright; brown hair in a bun; a plain
    // slate-grey gown to the ground with long sleeves and a narrow white collar
    governess: {
      kind: 'shapes', style: 'bly', who: 'woman', garment: 'gown', hair: 'bun', face: 'simple', parts: ['collar'],
      body: { height: 0.93, shoulders: 0.86, hips: 1.02, thick: 0.84 },
      colors: { skin: '#ecc8a8', hair: '#5a3a26', top: '#4e5262', garment: '#4e5262', bottom: '#4e5262', shoes: '#2a2624' },
    },
    // Flora, eight: fair hair loose to the shoulders, a white frock to the knees with a pale blue sash, white stockings
    flora: {
      kind: 'shapes', style: 'bly', who: 'child', garment: 'frock', hair: 'long', face: 'simple', socks: true, parts: ['sash'],
      body: { height: 0.7, head: 1.12 },
      colors: { skin: '#f3d3b8', hair: '#d8b46e', top: '#f1ece2', garment: '#f1ece2', bottom: '#f1ece2', socks: '#eee9df', shoes: '#4a3a30', accent: '#9fb6cf' },
    },
    // Miles, ten: dark chestnut hair cut short, a navy Eton jacket, a wide white collar, grey knee breeches, dark
    // stockings
    miles: {
      kind: 'shapes', style: 'bly', who: 'child', garment: 'jacket', hair: 'short', face: 'simple', socks: true, parts: ['collar'],
      body: { height: 0.77, head: 1.08, shoulders: 0.92 },
      colors: { skin: '#efcdb0', hair: '#4a2e1e', top: '#2d3446', garment: '#2d3446', bottom: '#5b5c62', socks: '#2b2b31', shoes: '#231f1d' },
    },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours, the scene's light and shadows —
    // with a simple face (eyes, brows, nose, mouth) so the faces read
    styles: { bly: { from: 'flat', name: 'Bly', line: 0.7, face: 'simple' } },
    garments: {
      // a gown: a full skirt from the waist to the ground, long sleeves, the bodice in its colour
      gown: { name: 'gown', hang: [{ to: 2.15, from: 'waist', flare: 0.4, off: 0.96 }], sleeves: 'garment', bare: true, bodice: true },
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
