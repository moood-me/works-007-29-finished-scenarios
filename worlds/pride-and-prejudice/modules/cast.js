// The people of «Pride and Prejudice» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, slender Regency figures in soft washes of colour drawn round with a fine sepia pen, as
// Hugh Thomson drew them — and how they move: the engine's stand and walk, and the motions in cast.data.json (Kimodo's).
// cast.md says who is who and what each motion is. A part's lengths are a man's metres times F.fit.h (the person's
// height as a share of a man's 1.76 m), its thicknesses times F.k.
const V = () => MooodShapes.V;
const LINEN = [0.96, 0.95, 0.91, 1];
const SCARLET = [0.74, 0.12, 0.13, 1];
// (the sash's two rings round the gown, kept from frame to frame)
const SASH = F => ({ rows: [new Array(F.worn[1].length), new Array(F.worn[1].length)] });
// (a cap of hair's sizes: the head's egg a little out)
const CROWN = F => ({ radii: F.head.egg.map(e => e * F.head.r * F.head.out) });
// (the ribbon's band round the head and its two ends: their points, profiles, colour)
const BAND = 14;
const RIBBON = F => ({ band: new Array(BAND + 1), ends: [[null, null, null], [null, null, null]],
  profile: [[0, 0.16 * F.head.r], [BAND, 0.16 * F.head.r]], end: [[0, 0.15 * F.head.r], [2, 0.12 * F.head.r]], colors: [[0, SCARLET]] });
// (the waistcoat's sizes)
const VEST = F => ({ radii: [0.042 * F.k, 0.095 * F.fit.h, 0.006 * F.k] });

// the trunk's depth behind (along bk, from the hips) at a height y: its sections', between them
const trunkBack = (F, secs, bk, y) => {
  const { sub, dot, mix } = V(), hips = F.P('Hips');
  for (let i = 0; i + 1 < secs.length; i++) {
    const a = secs[i][0], b = secs[i + 1][0];
    if (y < a[1] || y > b[1]) continue;
    const u = (y - a[1]) / (b[1] - a[1] || 1);
    return dot(sub(mix(a, b, u), hips), bk) + secs[i][4] + (secs[i + 1][4] - secs[i][4]) * u;
  }
  return 0;
};

return {
  ...data,
  characters: {
    // Elizabeth Bennet, twenty: not tall, light and quick; dark hair up in a knot, curls at the temples, no bonnet
    // (she walks out without one); a white high-waisted muslin gown, short puffed sleeves over long ones, a sage sash
    // under the bust
    elizabeth: { kind: 'shapes', style: 'austen', who: 'woman', garment: 'gown', hair: 'bun', parts: ['curls', 'sash', 'puffs'],
      body: { height: 0.92, thick: 0.92, shoulders: 0.9, hips: 1.0, neck: 1.0, head: 1.0 },
      colors: { skin: '#eccaa9', hair: '#4a2c1c', top: '#f4efe2', garment: '#f4efe2', bottom: '#ece4d2', accent: '#7f9a6c', shoes: '#6e5a46' } },
    // Jane Bennet, twenty-two: the beauty of the family, a little taller than Elizabeth, fair hair up, a primrose
    // gown with a dusty-rose sash
    jane: { kind: 'shapes', style: 'austen', who: 'woman', garment: 'gown', hair: 'bun', parts: ['curls', 'sash', 'puffs'],
      body: { height: 0.94, thick: 0.9, shoulders: 0.88, hips: 1.0, neck: 1.06, head: 1.0 },
      colors: { skin: '#f0d2b6', hair: '#b48a52', top: '#f3ebcf', garment: '#f3ebcf', bottom: '#ebe2c8', accent: '#c4948f', shoes: '#8a6c58' } },
    // Lydia Bennet, fifteen: the youngest, round-faced, dark-blonde; a pale pink gown and her scarlet ribbon round her
    // hair (the world's rare scarlet: hers alone)
    lydia: { kind: 'shapes', style: 'austen', who: 'woman', garment: 'gown', hair: 'bun', parts: ['curls', 'ribbon', 'puffs'],
      body: { height: 0.88, thick: 0.95, shoulders: 0.88, hips: 1.0, head: 1.04 },
      colors: { skin: '#f1cfb0', hair: '#8a6238', top: '#f2ddd5', garment: '#f2ddd5', bottom: '#eadbd2', accent: '#c0282d', shoes: '#7a5a4a' } },
    // Fitzwilliam Darcy, twenty-eight: tall, straight, dark-haired, his hair brushed forward; a dark blue tailcoat cut
    // square at the waist with tails to the knee behind, a pale waistcoat, a white cravat high at the throat, buff
    // breeches, black top boots
    darcy: { kind: 'shapes', style: 'austen', who: 'man', garment: 'tailcoat', hair: 'brutus', parts: ['waistcoat', 'cravat', 'tails'], socks: true,
      body: { height: 1.05, thick: 1.0, shoulders: 1.08, head: 0.98 },
      colors: { skin: '#e6c2a2', hair: '#2b1d15', top: '#efe5cc', garment: '#27324a', bottom: '#d3c19a', shoes: '#1d1a18', socks: '#1d1a18' } },
  },
  shapes: {
    // the world's style: slender, long-legged figures with heads big enough for a face to read; colours with their
    // shade (a wash), a fine sepia pen line round them and where their colours meet; faces with eyes, brows and a
    // mouth, as the drawings have them; cloth in soft folds
    styles: {
      austen: { from: 'soft', name: 'Pride and Prejudice', head: 1.16, egg: [0.88, 1.08, 0.96], neck: 1.0, legs: 1.04, limb: 1.0,
        sides: 22, square: 2, trunk: { w: [0.88, 0.92, 0.78, 0.92, 1.0], d: [0.84, 0.86, 0.78, 0.84, 0.74] }, arms: 'regency', feet: 'regency',
        paint: 'toned', line: 1.6, tinted: false, folds: { n: 9, depth: 0.1 }, face: 'simple', ground: 'sepia', drape: true },
    },
    // the pen's colour: a sepia ink, as the scenes' own pen line
    grounds: { sepia: { name: 'sepia ink on paper', bg: '#efe7d6', ink: '#3d2c1f', grid: '#ddd3c0', rim: '#e9b97c' } },
    // arms with a little flesh to them, a slender wrist and a small hand; legs that taper to a slim ankle and a pointed
    // slipper or boot
    arms: { regency: [[0, 0.05], [0.55, 0.045], [1, 0.036], [1.45, 0.034], [2, 0.022], [2.5, 0.026], [3, 0.013]] },
    legs: { regency: [[0, 0.088], [0.45, 0.072], [1, 0.048], [1.35, 0.056], [2, 0.03], [2.4, 0.033], [2.8, 0.027], [3, 0.014]] },
    hair: {
      // a man's hair cut short and brushed forward over the brow (the Brutus of the day): a cap off the brow, locks
      // over the forehead and the temples, side-whiskers down to the ear's lobe
      brutus: { name: 'brushed forward', draw: F => {
        const h = F.head, r = h.r, K = F.keep(CROWN);
        F.cap(h.at, h.axes, K.radii, [0, 0.74, -0.67], -0.08, F.colors.hair, h.sides, h.square);
        for (const [x, y, z, s] of [[-0.42, 0.74, 0.52, 0.24], [0.06, 0.84, 0.5, 0.26], [0.48, 0.72, 0.5, 0.22], [-0.78, 0.5, 0.28, 0.22], [0.8, 0.48, 0.26, 0.21]]) {
          F.ball(h.on([x, y, z], 1.01), h.axes, [r * s, r * s * 0.75, r * s], F.colors.hair, 10);
        }
        for (const sx of [-1, 1]) F.ball(h.on([sx * 0.95, -0.1, 0.12], 0.99), h.axes, [r * 0.09, r * 0.28, r * 0.15], F.colors.hair, 10);
      } },
    },
    garments: {
      // a high-waisted gown: hung from the shoulders, the skirt falling from under the bust in an A-line to the
      // instep, in soft folds; long sleeves (the short puffs over them: the part `puffs`)
      gown: { name: 'high-waisted gown', hang: [{ to: 1.97, from: 'shoulders', flare: 0.55 }], sleeves: 'garment', bodice: true },
      // a gentleman's tailcoat: close over the chest and cut square at the waist in front (its tails behind: the part
      // `tails`), long sleeves
      tailcoat: { name: 'tailcoat', hang: [{ to: 0.02, from: 'shoulders', flare: 0.02, folds: false }], sleeves: 'garment' },
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
      // short puffed sleeves at the shoulders, over the long ones (the gown's colour)
      puffs: { name: 'puffed sleeves', draw: F => {
        const { sub, mix, unit, cross } = V(), k = F.k, m = F.fit.h;
        for (const s of ['Left', 'Right']) {
          const a = F.P(`${s}Arm`), b = F.P(`${s}ForeArm`), u = unit(sub(b, a)), e1 = unit(cross(u, F.fwd('Chest'))), e2 = cross(e1, u);
          F.ball(mix(a, b, 0.17), [e1, u, e2], [0.064 * k, 0.085 * m, 0.064 * k], F.colors.garment, 14);
        }
      } },
      // curls at the temples, under the knot of hair (the hair's colour)
      curls: { name: 'curls', draw: F => {
        const h = F.head, r = h.r;
        for (const sx of [-1, 1]) {
          F.ball(h.on([sx * 0.86, 0.3, 0.2], 1.02), h.axes, [r * 0.17, r * 0.22, r * 0.15], F.colors.hair, 10);
          F.ball(h.on([sx * 0.9, 0.02, 0.05], 1.01), h.axes, [r * 0.13, r * 0.2, r * 0.13], F.colors.hair, 10);
        }
      } },
      // Lydia's scarlet ribbon: a band round her hair above the brow, tied at the left with two short ends that swing
      ribbon: { name: 'scarlet ribbon', draw: F => {
        const { add, mul } = V(), h = F.head, K = F.keep(RIBBON), [, hu, hf] = h.axes;
        for (let i = 0; i <= BAND; i++) {
          const a = (i / BAND) * Math.PI * 2;
          K.band[i] = h.on([Math.sin(a), 0.5 + 0.18 * Math.cos(a), Math.cos(a)], 1.1);
        }
        F.tube(K.band, K.profile, K.colors, 6, hu, 0.35);
        const knot = h.on([-0.9, 0.42, -0.25], 1.13), side = h.axes[0];
        F.ball(knot, h.axes, [h.r * 0.17, h.r * 0.22, h.r * 0.13], SCARLET, 10);
        for (let e = 0; e < 2; e++) {
          const p = K.ends[e], s = e === 0 ? -1 : 1;
          p[0] = knot;
          p[1] = F.swing(`ribbon${e}a`, add(knot, add(mul(hu, -0.07 * F.fit.h), mul(hf, s * 0.02 * F.fit.h))), 140);
          p[2] = F.swing(`ribbon${e}b`, add(p[1], add(mul(hu, -0.07 * F.fit.h), mul(side, -0.01 * F.fit.h))), 80);
          F.tube(p, K.end, K.colors, 6, side, 0.3);
        }
      } },
      // a pale waistcoat showing in a narrow band between the coat's fronts, under the cravat
      waistcoat: { name: 'waistcoat', draw: F => {
        const on = F.worn;
        if (!on) return;
        const { add, sub, mul, dot } = V(), fw = F.fwd('Chest'), o = F.P('Chest'), K = F.keep(VEST);
        let front = on[1][0];
        for (const p of on[1]) if (dot(sub(p, o), fw) > dot(sub(front, o), fw)) front = p;
        const c = add(add(front, mul(fw, 0.002 * F.k)), mul(F.up('Chest'), 0.05 * F.fit.h));
        F.ball(c, [F.side('Chest'), F.up('Chest'), fw], K.radii, F.colors.top, 14);
      } },
      // a white cravat at the throat: its knot before the neck, its folds below it on the chest
      cravat: { name: 'cravat', draw: F => {
        const { add, mul } = V(), k = F.k, m = F.fit.h, axes = [F.side('Chest'), F.up('Chest'), F.fwd('Chest')];
        const knot = add(F.P('Neck1'), add(mul(axes[2], 0.055 * k), mul(axes[1], -0.005 * m)));
        F.ball(knot, axes, [0.055 * k, 0.045 * m, 0.035 * k], LINEN, 12);
        F.ball(add(knot, add(mul(axes[1], -0.055 * m), mul(axes[2], 0.006 * k))), axes, [0.038 * k, 0.045 * m, 0.024 * k], LINEN, 10);
      } },
      // the coat's tails: a sheet from the back of the waist down to the backs of the knees, round the hips a little at
      // its sides, hanging as cloth (it swings as he goes, lies over the chair as he sits)
      tails: { name: 'coat tails', draw: F => {
        const { add, sub, mul, dot, mix, level } = V(), P = F.P, k = F.k, hips = P('Hips');
        const bk = mul(level(F.fwd('Hips')), -1), sd = level(F.side('Hips')), secs = F.trunk(1.14);
        const top = P('Spine1')[1], knees = mix(P('LeftShin'), P('RightShin'), 0.5), bottom = knees[1] + 0.03 * F.fit.h;
        const thigh = 0.088 * k * F.style.limb, n = 9, held = 2, rowsN = 9, rows = [];
        for (let r = 0; r < rowsN; r++) {
          const u = r / (rowsN - 1), y = top + (bottom - top) * u;
          let depth = trunkBack(F, secs, bk, y);
          for (const s of ['Left', 'Right']) for (let w = 0; w <= 1; w += 0.25) {
            const p = mix(P(`${s}Leg`), P(`${s}Shin`), w);
            if (Math.abs(p[1] - y) < 0.08 * F.fit.h) depth = Math.max(depth, dot(sub(p, hips), bk) + thigh);
          }
          depth += 0.012 * k;
          const half = secs[1][3] * (1.02 + 0.08 * u), c = [hips[0], y, hips[2]];
          rows.push(Array.from({ length: n }, (_, q) => {
            const a = ((q / (n - 1)) * 2 - 1) * 1.3;
            return add(c, add(mul(sd, Math.sin(a) * half), mul(bk, Math.cos(a) * depth)));
          }));
        }
        F.cloth(rows, F.colors.garment, held);
      } },
    },
  },
};
