// The people of «Pride and Prejudice» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, slender Regency figures in soft washes of colour with a fine darker line, as Hugh
// Thomson drew them — and how they move: the engine's stand and walk, and the motions in cast.data.json (Kimodo's).
// cast.md says who is who and what each motion is. A part's lengths are a man's metres times F.fit.h (the person's
// height as a share of a man's 1.76 m), its thicknesses times F.k.
const V = () => MooodShapes.V;
const LINEN = [0.95, 0.94, 0.9, 1];
// (the sash's two rings round the gown, kept from frame to frame)
const SASH = F => ({ rows: [new Array(F.worn[1].length), new Array(F.worn[1].length)] });
return {
  ...data,
  characters: {
    // Elizabeth Bennet, twenty: not tall, light and quick; dark hair up in a knot, curls at the temples, no bonnet
    // (she walks out without one); a pale high-waisted muslin gown with long sleeves, a sage-green sash under the bust
    elizabeth: { kind: 'shapes', style: 'austen', who: 'woman', garment: 'gown', hair: 'bun', parts: ['curls', 'sash'],
      body: { height: 0.92, thick: 0.8, shoulders: 0.84, hips: 1.0, neck: 1.05 },
      colors: { skin: '#e8c6a8', hair: '#4a2f20', top: '#efe9db', garment: '#efe9db', bottom: '#e8e0cf', accent: '#8ea27c', shoes: '#7a6450' } },
    // Fitzwilliam Darcy, twenty-eight: tall, straight, dark-haired; a dark blue coat to mid-thigh, a white cravat
    // high at the throat, fawn breeches, black boots
    darcy: { kind: 'shapes', style: 'austen', who: 'man', garment: 'tailcoat', hair: 'short', parts: ['cravat'],
      body: { height: 1.06, thick: 0.9, shoulders: 1.04 },
      colors: { skin: '#e2bea0', hair: '#2a1e17', top: '#f2efe6', garment: '#29334a', bottom: '#a38f6c', shoes: '#1f1b19' } },
  },
  shapes: {
    // the world's style: slender, long-legged, small-headed figures; colours with their shade (a wash), a fine line a
    // darker shade of what it edges (the pen); faces with eyes, brows and a mouth, as the drawings have them
    styles: {
      austen: { from: 'soft', name: 'Pride and Prejudice', head: 1.15, egg: [0.9, 1.08, 0.96], neck: 0.95, legs: 1.06, limb: 0.78,
        sides: 20, square: 2, trunk: { w: [0.84, 0.88, 0.74, 0.88, 0.98], d: [0.82, 0.84, 0.74, 0.8, 0.72] }, arms: 'palm', feet: 'point',
        paint: 'toned', line: 1.1, tinted: true, folds: { n: 6, depth: 0.05 }, face: 'simple', ground: 'paper', drape: true },
    },
    garments: {
      // a high-waisted gown: hung from the shoulders, falling straight and a little wider to the ankle, long sleeves
      gown: { name: 'high-waisted gown', hang: [{ to: 1.95, from: 'shoulders', flare: 0.3 }], sleeves: 'garment', bodice: true },
      // a gentleman's coat: from the shoulders to mid-thigh, close to the body, long sleeves
      tailcoat: { name: 'coat', hang: [{ to: 0.6, from: 'shoulders', flare: 0.03, off: 1.0 }], sleeves: 'garment' },
    },
    parts: {
      // a sash round the gown just under the bust (the look's accent colour): a band between the gown's chest ring and
      // the top of its skirt, a little off it
      sash: { name: 'sash', draw: F => {
        const on = F.worn;
        if (!on) return;
        const { add, sub, mul, mix, unit, mean } = V(), K = F.keep(SASH), off = 0.006 * F.k, m1 = mean(on[1]), m2 = mean(on[2]);
        for (let r = 0; r < 2; r++) {
          const u = r === 0 ? 0.16 : 0.3, c = mix(m1, m2, u), row = K.rows[r];
          for (let q = 0; q < row.length; q++) {
            const p = mix(on[1][q], on[2][q], u);
            row[q] = add(p, mul(unit(sub(p, c)), off));
          }
        }
        F.rings(K.rows, F.colors.accent, null, null);
      } },
      // curls at the temples, under the knot of hair (the hair's colour)
      curls: { name: 'curls', draw: F => {
        const h = F.head, r = h.r;
        for (const sx of [-1, 1]) {
          F.ball(h.on([sx * 0.86, 0.3, 0.2], 1.02), h.axes, [r * 0.17, r * 0.22, r * 0.15], F.colors.hair, 10);
          F.ball(h.on([sx * 0.9, 0.02, 0.05], 1.01), h.axes, [r * 0.13, r * 0.2, r * 0.13], F.colors.hair, 10);
        }
      } },
      // a white cravat at the throat: its knot before the neck, its folds below it on the chest
      cravat: { name: 'cravat', draw: F => {
        const { add, mul } = V(), k = F.k, m = F.fit.h, axes = [F.side('Chest'), F.up('Chest'), F.fwd('Chest')];
        const knot = add(F.P('Neck1'), add(mul(axes[2], 0.05 * k), mul(axes[1], -0.01 * m)));
        F.ball(knot, axes, [0.06 * k, 0.05 * m, 0.04 * k], LINEN, 12);
        F.ball(add(knot, add(mul(axes[1], -0.06 * m), mul(axes[2], 0.005 * k))), axes, [0.045 * k, 0.05 * m, 0.03 * k], LINEN, 10);
      } },
    },
  },
};
