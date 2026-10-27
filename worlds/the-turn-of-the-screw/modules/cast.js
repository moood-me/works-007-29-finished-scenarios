// The people of «The Turn of the Screw» as people in a scene (an element with "person"): who they are — figures of
// shapes in this world's style, straight-edged flat shapes lit by the scene's own light, a simple face so a face reads
// in a wide shot — and what they move by (the motions in cast.data.json). cast.md says who is who. A part's lengths
// are a man's metres times F.fit.h (the person's height as a share of a man's 1.76 m).
const V = () => MooodShapes.V;
const LINEN = [0.95, 0.93, 0.88, 1];
// bracken gone russet in autumn, its stalks darker
const BRACKEN = [0.7, 0.45, 0.2, 1];
const STALK = [0.45, 0.3, 0.16, 1];
// a prayer book's brown calf binding and its gilt edges
const CALF = [0.2, 0.12, 0.1, 1];
const GILT = [0.78, 0.66, 0.4, 1];
// a handful of bracken: each frond's lean aside, forward, its length (a man's metres)
const FRONDS = [[-0.4, 0.3, 0.42], [0.05, 0.4, 0.5], [0.45, 0.25, 0.4], [-0.15, 0.1, 0.36], [0.25, 0.05, 0.33]];
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
    // slate-grey gown to the ground with long sleeves, a narrow white collar
    governess: {
      kind: 'shapes', style: 'bly', who: 'woman', garment: 'gown', hair: 'bun', face: 'bly', parts: ['collar'],
      body: { height: 0.93, head: 1.08, neck: 0.6, shoulders: 0.86, hips: 1.02, thick: 0.8 },
      colors: { skin: '#ecc8a8', hair: '#5a3a26', top: '#4e5262', garment: '#4e5262', bottom: '#4e5262', shoes: '#2a2624' },
    },
    // Flora, eight: fair hair loose to the shoulders, a white frock to the knees with a pale blue sash, white stockings
    flora: {
      kind: 'shapes', style: 'bly', who: 'child', garment: 'frock', hair: 'long', face: 'bly', socks: true, parts: ['sash'],
      body: { height: 0.7, head: 1.1, neck: 0.7 },
      colors: { skin: '#f0cfb3', hair: '#d3ac62', top: '#dedcd6', garment: '#dedcd6', bottom: '#dedcd6', socks: '#d9d6cf', shoes: '#4a3a30', accent: '#9fb6cf' },
    },
    // Miles, ten: dark chestnut hair cut short, a navy Eton jacket, a wide white collar, grey knee breeches, dark
    // stockings
    miles: {
      kind: 'shapes', style: 'bly', who: 'child', garment: 'eton', hair: 'short', face: 'bly', socks: true, parts: ['collar'],
      body: { height: 0.77, head: 1.06, neck: 0.7, shoulders: 0.92 },
      colors: { skin: '#efcdb0', hair: '#4a2e1e', top: '#2d3446', garment: '#2d3446', bottom: '#5b5c62', socks: '#2b2b31', shoes: '#231f1d' },
    },
    // Mrs Grose, the housekeeper: past fifty, short and stout, greying hair under a white mob cap; a plum-brown stuff
    // dress to the ground, long sleeves, a white apron over it
    grose: {
      kind: 'shapes', style: 'bly', who: 'woman', garment: 'housedress', hair: 'bun', hat: 'mobcap', face: 'bly',
      body: { height: 0.88, head: 1.1, neck: 0.75, shoulders: 0.92, hips: 1.16, thick: 1.12 },
      colors: { skin: '#e9c2a2', hair: '#9a948c', top: '#5b3f3a', garment: '#5b3f3a', bottom: '#5b3f3a', shoes: '#2a2624' },
    },
    // Miss Jessel, the governess before: tall, beautiful and worn; pale, her dark hair loose down her back, a black
    // gown to the ground with long sleeves
    jessel: {
      kind: 'shapes', style: 'bly', who: 'woman', garment: 'gown', hair: 'long', face: 'bly',
      body: { height: 1.0, head: 1.04, neck: 0.75, shoulders: 0.86, hips: 0.98, thick: 0.76 },
      colors: { skin: '#e8dcd4', hair: '#231a1a', top: '#1f1d22', garment: '#1f1d22', bottom: '#1f1d22', shoes: '#151315' },
    },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours, the scene's light and shadows —
    // with a simple face (the world's own `bly`: eyes, brows, nose, mouth, drawn bold) so the faces read
    styles: {
      bly: {
        from: 'flat', name: 'Bly', line: 0.7, face: 'bly', head: 1.08, neck: 0.5, rigid: false, straight: false, arms: 'bly', feet: 'bly',
      },
    },
    // limbs that taper as a body's do — the upper arm to the wrist, a small hand; the thigh to the knee, the calf, a
    // slender ankle, a shoe (half-widths along the joints: 0 shoulder/hip, 1 elbow/knee, 2 wrist/ankle, 3 tips)
    arms: { bly: [[0, 0.05], [0.5, 0.044], [1, 0.035], [1.5, 0.033], [2, 0.024], [2.4, 0.032], [2.8, 0.026], [3, 0.012]] },
    legs: { bly: [[0, 0.078], [0.5, 0.064], [1, 0.044], [1.35, 0.05], [2, 0.028], [2.25, 0.038], [2.8, 0.036], [3, 0.02]] },
    faces: {
      // the engine's simple face, a little stronger, to read in the lawn's wide shot and stay quiet close: dark almond
      // eyes, fine brows, a nose, a rose mouth, the least warmth on the cheeks — the same solids for every expression
      bly: {
        name: 'Bly',
        draw: F => {
          const { axes, r: rh, on } = F.head;
          const [, hu] = axes;
          const x = MOODS[F.look.expression] ?? MOODS.neutral;
          const dark = [0.15, 0.11, 0.1];
          const brow = F.colors.hair.map((v, i) => (i < 3 ? v * 0.62 : v));
          const lips = [0.66, 0.4, 0.38];
          const warm = F.colors.skin.map((v, i) => (i === 0 ? v : i < 3 ? v * 0.94 : v));
          for (const sx of [-1, 1]) {
            F.ball(on([sx * 0.5, -0.24, 0.85], 0.99), axes, [rh * 0.14, rh * 0.09, rh * 0.03], warm, 10);
            F.ball(on([sx * 0.32, 0.05, 0.94], 0.985), axes, [rh * 0.11, rh * 0.1 * x.eye, rh * 0.05], dark, 12);
            F.tube(
              [on([sx * 0.13, 0.33 + x.inner, 0.94], 0.995), on([sx * 0.3, 0.37 + (x.inner + x.outer) / 2, 0.91], 1.0), on([sx * 0.47, 0.31 + x.outer, 0.84], 0.995)],
              [[0, rh * 0.04], [1, rh * 0.045], [2, rh * 0.028]],
              [[0, brow]],
              6,
              hu,
            );
          }
          F.ball(on([0, -0.1, 1], 0.97), axes, [rh * 0.08, rh * 0.12, rh * 0.12], F.colors.skin.map((v, i) => (i < 3 ? v * 0.95 : v)), 10);
          const w = x.wide * 0.85;
          const y = -0.39;
          F.ball(on([0, y - x.open / 2, 0.95], 0.975), axes, [rh * w * 0.8, rh * x.open * 1.2, rh * 0.03], dark, 10);
          F.tube([on([-w, y + x.corners, 0.92], 0.995), on([0, y, 0.94], 1.0), on([w, y + x.corners, 0.92], 0.995)], [[0, rh * 0.026], [2, rh * 0.026]], [[0, lips]], 6, hu);
        },
      },
    },
    garments: {
      // a gown: a full skirt from the waist, belled to the ground, long sleeves, the bodice in its colour
      gown: { name: 'gown', hang: [{ to: 2.15, from: 'waist', flare: 0.75, off: 0.96 }], sleeves: 'garment', bare: true, bodice: true },
      // a boy's Eton jacket: short, cut off at the hips, long sleeves
      eton: { name: 'Eton jacket', hang: [{ to: 0.02, from: 'shoulders', flare: 0, folds: false }], sleeves: 'garment' },
      // a child's frock: a skirt from the waist to the knees, long sleeves
      frock: { name: 'frock', hang: [{ to: 1.05, from: 'waist', flare: 0.42, off: 0.96 }], sleeves: 'garment', bare: true, bodice: true },
      // a housekeeper's dress: a skirt from the waist to the ground, fuller than a gown's, long sleeves; and over it a
      // white apron from the waist to the shin, hanging as cloth clear of the skirt before it
      housedress: {
        name: 'dress and apron', hang: [{ to: 2.1, from: 'waist', flare: 0.3, off: 0.96 }], sleeves: 'garment', bare: true, bodice: true,
        draw: F => {
          const { add, mul, mix, dot, sub, level } = V();
          const P = F.P;
          const k = F.k;
          const f = level(F.fwd('Hips'));
          const s = level(F.side('Hips'));
          const hips = P('Hips');
          const waist = P('Spine1')[1];
          const knee = mix(P('LeftShin'), P('RightShin'), 0.5);
          const foot = mix(P('LeftFoot'), P('RightFoot'), 0.5);
          const hem = knee[1] + (foot[1] - knee[1]) * 0.45;
          // the skirt's front at a height — its hips' section (the trunk's, as far off it as the skirt hangs), out by its
          // flare as it goes down to the ground — and the apron lying on it, a little off
          const sec = F.trunk(0.96)[1];
          const d0 = sec[4] + dot(sub(sec[0], hips), f);
          const skirt = y => d0 * (1 + 0.3 * Math.max(0, Math.min(1, (waist - y) / (waist - foot[1])))) * 1.03 + 0.02 * k;
          const rows = [];
          const held = 2;
          const hanging = 6;
          for (let r = 0; r < held + hanging; r++) {
            const y = r < held ? waist + 0.02 * F.fit.h * (1 - r) : waist + ((hem - waist) * (r - held + 1)) / hanging;
            const u = (waist - y) / (waist - hem);
            const front = skirt(y);
            const c = add(hips, add(mul(f, front), [0, y - hips[1], 0]));
            const half = 0.11 * k * F.look.body.hips * (1 + 0.15 * u);
            const row = [];
            for (let q = 0; q < 9; q++) {
              const x = (q / 8) * 2 - 1;
              row.push(add(c, add(mul(s, x * half), mul(f, -0.2 * half * x * x))));
            }
            rows.push(row);
          }
          F.cloth(rows, LINEN, held);
        },
      },
    },
    hats: {
      // a white mob cap: a soft linen crown over the hair, a frill round it at the brow
      mobcap: {
        name: 'mob cap',
        draw: F => {
          const { add, mul } = V();
          const { at, axes, r } = F.head;
          const [, hu, hf] = axes;
          F.ball(add(at, add(mul(hu, r * 0.32), mul(hf, -r * 0.14))), axes, [r * 1.1, r * 0.8, r * 1.12], LINEN, 18);
          F.ball(add(at, add(mul(hu, r * 0.36), mul(hf, r * 0.02))), axes, [r * 1.22, r * 0.1, r * 1.2], LINEN, 18);
        },
      },
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
      // a handful of bracken held in both hands before her, the fronds leaning up and out
      fern: {
        name: 'bracken',
        draw: F => {
          const { add, mul, mix } = V();
          const h = F.fit.h;
          const c = mix(F.P('LeftHand'), F.P('RightHand'), 0.5);
          const up = F.up('Chest');
          const fw = F.fwd('Chest');
          const sd = F.side('Chest');
          for (const [sx, lean, len] of FRONDS) {
            const dir = add(add(up, mul(fw, lean)), mul(sd, sx));
            const p1 = add(c, mul(dir, len * 0.45 * h));
            const p2 = add(add(c, mul(dir, len * h)), mul(fw, 0.05 * h));
            F.tube([add(c, mul(up, -0.04 * h)), p1, p2], [[0, 0.004 * h], [0.4, 0.006 * h], [0.6, 0.03 * h], [1.3, 0.026 * h], [2, 0.002 * h]], [[0, STALK], [0.5, BRACKEN]], 6, sd, 0.2);
          }
        },
      },
      // a small prayer book held in both hands before her at the waist, closed, its gilt edges toward her hands
      prayerbook: {
        name: 'prayer book',
        draw: F => {
          const { add, mul, mix } = V();
          const h = F.fit.h;
          const sd = F.side('Chest');
          const c = add(mix(F.P('LeftHand'), F.P('RightHand'), 0.5), mul(F.fwd('Chest'), 0.02 * h));
          F.tube([add(c, mul(sd, -0.06 * h)), add(c, mul(sd, 0.06 * h))], [[0, 0.045 * h], [1, 0.045 * h]], [[0, CALF]], 4, F.up('Chest'), 0.3, 3, true);
          F.tube([add(c, mul(sd, -0.055 * h)), add(c, mul(sd, 0.055 * h))], [[0, 0.041 * h], [1, 0.041 * h]], [[0, GILT]], 4, F.up('Chest'), 0.42, 3, true);
        },
      },
      // a sash round the waist in the look's accent colour
      sash: {
        name: 'sash',
        draw: F => {
          const { add, mul } = V();
          const c = add(F.P('Spine1'), mul(F.up('Hips'), -0.01 * F.fit.h));
          F.ball(c, [F.side('Hips'), F.up('Hips'), F.fwd('Hips')], [0.19 * F.k, 0.035 * F.fit.h, 0.15 * F.k], F.colors.accent, 16);
        },
      },
    },
  },
};
