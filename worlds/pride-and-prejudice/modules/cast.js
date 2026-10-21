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
// (the waistcoat's panel: three rows of five points across the chest, kept from frame to frame)
const VEST_ACROSS = [-1, -0.5, 0, 0.5, 1];
const VEST = F => ({ rows: [new Array(5), new Array(5), new Array(5)], low: new Array(F.worn[1].length) });
// (the cravat's stock: four rings round the neck and the first again, and the fall's sizes)
const STOCK_N = 16;
const STOCK = F => ({ rings: [new Array(STOCK_N), new Array(STOCK_N), new Array(STOCK_N), new Array(STOCK_N), null],
  fall: [0.045 * F.k, 0.05 * F.fit.h, 0.022 * F.k] });
// a colour of the look a shade darker or redder, its way of being painted (its fourth) kept
const shade = (c, kr, kg, kb) => [c[0] * kr, c[1] * kg, c[2] * kb, c[3]];
// the face's expressions (the engine's names — a person's <id>_mood): its brows' inner and outer ends up (+) or down,
// its eyes opened (1 at rest) or narrowed, its mouth's half-width, its corners up (+) or down, how open it is. A laugh
// narrows the eyes only a little: they must still read
const EXPR = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.13, corners: 0, open: 0 },
  smile: { inner: 0.01, outer: 0.01, eye: 0.92, wide: 0.15, corners: 0.045, open: 0 },
  laugh: { inner: 0.03, outer: 0.02, eye: 0.74, wide: 0.17, corners: 0.055, open: 0.06 },
  sad: { inner: 0.07, outer: -0.05, eye: 0.88, wide: 0.12, corners: -0.04, open: 0 },
  angry: { inner: -0.08, outer: 0.03, eye: 0.85, wide: 0.11, corners: -0.025, open: 0 },
  surprised: { inner: 0.08, outer: 0.08, eye: 1.25, wide: 0.08, corners: 0, open: 0.07 },
  afraid: { inner: 0.09, outer: 0.01, eye: 1.2, wide: 0.12, corners: -0.025, open: 0.04 },
  disgusted: { inner: -0.05, outer: -0.01, eye: 0.8, wide: 0.12, corners: -0.035, open: 0 },
  thinking: { inner: -0.045, outer: 0.025, eye: 0.92, wide: 0.1, corners: -0.012, open: 0 },
  tired: { inner: 0.02, outer: -0.05, eye: 0.62, wide: 0.12, corners: -0.015, open: 0 },
};
const INK = [0.2, 0.13, 0.09];

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
      colors: { skin: '#f0d2b6', hair: '#b48a52', top: '#f3ebcf', garment: '#f3ebcf', bottom: '#ebe2c8', accent: '#c4948f', shoes: '#e9dcc0' } },
    // Lydia Bennet, fifteen: the youngest, round-faced, dark-blonde; a bright coral-pink gown — the liveliest colour of
    // the sisters, warm, never grey (the grey gown is Charlotte's) — and her scarlet ribbon round her hair (the world's
    // rare scarlet: hers alone)
    lydia: { kind: 'shapes', style: 'austen', who: 'woman', garment: 'gown', hair: 'bun', parts: ['curls', 'ribbon', 'puffs'],
      body: { height: 0.88, thick: 0.95, shoulders: 0.88, hips: 1.0, head: 1.04 },
      colors: { skin: '#f1cfb0', hair: '#8a6238', top: '#f4b9aa', garment: '#f4b9aa', bottom: '#f0c9bd', accent: '#c0282d', shoes: '#efd9c6' } },
    // Fitzwilliam Darcy, twenty-eight: tall, straight, dark-haired, his hair brushed forward; a dark blue tailcoat cut
    // square at the waist with tails to the knee behind, a pale waistcoat, a white cravat high at the throat, buff
    // breeches, black top boots
    darcy: { kind: 'shapes', style: 'austen', who: 'man', garment: 'tailcoat', hair: 'brutus', parts: ['waistcoat', 'cravat', 'tails'], socks: true,
      body: { height: 1.05, thick: 1.0, shoulders: 1.08, head: 0.98 },
      colors: { skin: '#e6c2a2', hair: '#2b1d15', top: '#efe5cc', garment: '#27324a', bottom: '#d3c19a', shoes: '#1d1a18', socks: '#1d1a18' } },
  },
  shapes: {
    // the world's style: slender Regency figures, the neck short and the head big enough for a face to read (eyes with
    // their lids, brows, a nose, lips, a little colour in the cheeks: the face `austen`), arms with flesh to them;
    // colours with their shade (a wash), the sepia pen round them and where their colours meet — a line as strong as the
    // places' own pen, so that people and places are of one hand; cloth in many soft folds, each edged by the pen
    styles: {
      austen: { from: 'soft', name: 'Pride and Prejudice', head: 1.26, egg: [0.88, 1.06, 0.96], neck: 0.5, legs: 1.0, limb: 1.12,
        sides: 22, square: 2, trunk: { w: [0.88, 0.92, 0.78, 0.92, 1.0], d: [0.84, 0.86, 0.78, 0.84, 0.74] }, arms: 'regency', feet: 'regency',
        paint: 'toned', line: 2.3, tinted: false, folds: { n: 11, depth: 0.07 }, face: 'austen', ground: 'sepia', drape: true },
    },
    // the pen's colour: a sepia ink, as the scenes' own pen line
    grounds: { sepia: { name: 'sepia ink on paper', bg: '#efe7d6', ink: '#3d2c1f', grid: '#ddd3c0', rim: '#e9b97c' } },
    // arms with a little flesh to them, a slender wrist and a small hand; legs that taper to a slim ankle and a pointed
    // slipper or boot
    arms: { regency: [[0, 0.058], [0.55, 0.053], [1, 0.043], [1.45, 0.041], [2, 0.028], [2.5, 0.032], [3, 0.016]] },
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
    faces: {
      // a face as the drawings give it: dark almond eyes under a pen-dark upper lid, brows of the hair's colour, a
      // straight nose, lips a shade rosier than the skin — big enough on the head to read
      // at the size people stand in a scene; at rest, or as the person's <id>_mood has it (EXPR). The same solids for
      // every expression (the engine goes from one to another on the GPU)
      austen: { name: 'Regency', draw: F => {
        const { axes, r: rh, on } = F.head, [, hu] = axes, x = EXPR[F.look.expression] ?? EXPR.neutral, sk = F.colors.skin;
        const brow = shade(F.colors.hair, 0.7, 0.7, 0.7), lips = shade(sk, 0.86, 0.6, 0.6), nose = shade(sk, 0.96, 0.94, 0.93);
        const lid = 0.05 * (x.eye - 1);
        for (const sx of [-1, 1]) {
          F.ball(on([sx * 0.33, 0.07, 0.93], 0.985), axes, [rh * 0.1, rh * 0.115 * x.eye, rh * 0.045], INK, 12);
          F.tube([on([sx * 0.18, 0.14 + lid, 0.96], 1.0), on([sx * 0.33, 0.2 + lid * 1.3, 0.94], 1.006), on([sx * 0.5, 0.13 + lid, 0.86], 1.0)],
            [[0, rh * 0.018], [1, rh * 0.028], [2, rh * 0.016]], [[0, INK]], 6, hu);
          F.tube([on([sx * 0.15, 0.36 + x.inner, 0.93], 0.995), on([sx * 0.31, 0.39 + (x.inner + x.outer) / 2, 0.9], 1.0), on([sx * 0.48, 0.33 + x.outer, 0.83], 0.995)],
            [[0, rh * 0.034], [1, rh * 0.036], [2, rh * 0.022]], [[0, brow]], 6, hu);
        }
        F.ball(on([0, -0.08, 1], 0.97), axes, [rh * 0.075, rh * 0.15, rh * 0.11], nose, 10);
        const w = x.wide, y = -0.4;
        F.ball(on([0, y - x.open / 2, 0.95], 0.975), axes, [rh * w * 0.75, rh * x.open, rh * 0.03], INK, 10);
        F.tube([on([-w, y + x.corners, 0.93], 0.995), on([0, y, 0.95], 1.0), on([w, y + x.corners, 0.93], 0.995)], [[0, rh * 0.02], [1, rh * 0.03], [2, rh * 0.02]], [[0, lips]], 6, hu);
      } },
    },
    garments: {
      // a high-waisted gown: hung from the shoulders, the skirt falling from under the bust in an A-line to the
      // instep, in soft folds; long sleeves (the short puffs over them: the part `puffs`)
      gown: { name: 'high-waisted gown', hang: [{ to: 1.97, from: 'shoulders', flare: 0.32 }], sleeves: 'garment', bodice: true },
      // a gentleman's tailcoat: close over the chest and cut square at the waist in front (its tails behind: the part
      // `tails`), long sleeves
      tailcoat: { name: 'tailcoat', hang: [{ to: 0.14, from: 'shoulders', flare: 0.03, folds: false }], sleeves: 'garment' },
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
      // the pale waistcoat seen between the coat's open fronts: a V on the chest, wide under the cravat, closing to a
      // point at the bottom of the breastbone — a panel a little off the coat's rings (the shoulders', the chest's, and
      // a third down toward the waist), at its front
      waistcoat: { name: 'waistcoat', draw: F => {
        const on = F.worn;
        if (!on) return;
        const { add, sub, mul, dot, mix, unit, mean } = V(), fw = F.fwd('Chest'), K = F.keep(VEST), off = 0.007 * F.k;
        // (a ring's point at a fractional index, round)
        const at = (ring, f) => {
          const n = ring.length, i0 = ((Math.floor(f) % n) + n) % n;
          return mix(ring[i0], ring[(i0 + 1) % n], f - Math.floor(f));
        };
        const rowOf = (ring, span, row) => {
          const c = mean(ring);
          let best = 0, most = -Infinity;
          for (let q = 0; q < ring.length; q++) {
            const d = dot(sub(ring[q], c), fw);
            if (d > most) { most = d; best = q; }
          }
          for (let q = 0; q < VEST_ACROSS.length; q++) {
            const p = at(ring, best + VEST_ACROSS[q] * span * ring.length);
            row[q] = add(p, mul(unit(sub(p, c)), off));
          }
        };
        for (let q = 0; q < K.low.length; q++) K.low[q] = mix(on[1][q], on[2][q], 0.45);
        rowOf(on[0], 0.07, K.rows[0]);
        rowOf(on[1], 0.04, K.rows[1]);
        rowOf(K.low, 0.008, K.rows[2]);
        F.rings(K.rows, F.colors.top, null, null);
      } },
      // a white cravat: a high stock wound round the neck where it meets the shoulders, and its fall — the linen
      // folded softly over the top of the chest under the chin, into the waistcoat's V
      cravat: { name: 'cravat', draw: F => {
        const { add, mul } = V(), k = F.k, m = F.fit.h, uc = F.up('Chest'), fc = F.fwd('Chest'), sd = F.side('Chest'), K = F.keep(STOCK);
        const c = add(F.P('Neck1'), mul(uc, 0.035 * m)), hh = 0.032 * m, outer = 0.062 * k, inner = 0.046 * k;
        for (let r = 0; r < 4; r++) {
          const dy = r < 2 ? -hh : hh, w = r === 0 || r === 3 ? inner : outer, ring = K.rings[r];
          for (let q = 0; q < STOCK_N; q++) {
            const a = (q / STOCK_N) * Math.PI * 2;
            ring[q] = add(c, add(mul(uc, dy), add(mul(sd, Math.cos(a) * w), mul(fc, Math.sin(a) * w * 0.95))));
          }
        }
        K.rings[4] = K.rings[0];
        F.rings(K.rings, LINEN, null, null);
        const fall = add(c, add(mul(fc, outer * 0.95), mul(uc, -hh * 2.1)));
        F.ball(fall, [sd, uc, fc], K.fall, LINEN, 12);
      } },
      // the coat's tails: a sheet from the back of the waist down to the backs of the knees, round the hips no further
      // than their back half (they never stand out at the sides), hanging as cloth (it swings as he goes, lies over the chair as he sits)
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
            const a = ((q / (n - 1)) * 2 - 1) * 0.95;
            return add(c, add(mul(sd, Math.sin(a) * half), mul(bk, Math.cos(a) * depth)));
          }));
        }
        F.cloth(rows, F.colors.garment, held);
      } },
    },
  },
};
