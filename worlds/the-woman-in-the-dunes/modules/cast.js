// The people of «The Woman in the Dunes» as the engine's people (an element with "person"): figures of shapes in this
// world's style `dunes` — the engine's flat geometry, plain colours lit by the scene's own light, as the world is
// painted (flat, quiet, a few warm tones) — with a face of its own (`abe`) that reads at five to eight metres, and what
// they carry. cast.md says who is who. A part's lengths are a man's metres times F.fit.h (the person's height as a share
// of 1.76 m) or F.k (thickness).
const V = () => MooodShapes.V;
const BAMBOO = [0.71, 0.6, 0.4, 1], WIRE = [0.32, 0.31, 0.29, 1], GAUZE = [0.8, 0.8, 0.76, 1];
const TIN = [0.55, 0.56, 0.52, 1], STRAP = [0.4, 0.31, 0.22, 1];
// the world's face's expressions (the engine's names): brows' inner and outer ends raised (+) or lowered, the eye's
// opening, the mouth's half-width, its corners up (+) or down, how open
const MOODS = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.17, corners: 0, open: 0 },
  smile: { inner: 0.01, outer: 0.01, eye: 0.82, wide: 0.2, corners: 0.06, open: 0 },
  laugh: { inner: 0.03, outer: 0.02, eye: 0.5, wide: 0.2, corners: 0.07, open: 0.08 },
  sad: { inner: 0.08, outer: -0.06, eye: 0.85, wide: 0.15, corners: -0.05, open: 0 },
  angry: { inner: -0.09, outer: 0.03, eye: 0.8, wide: 0.14, corners: -0.03, open: 0 },
  surprised: { inner: 0.09, outer: 0.09, eye: 1.35, wide: 0.09, corners: 0, open: 0.09 },
  afraid: { inner: 0.1, outer: 0, eye: 1.35, wide: 0.15, corners: -0.035, open: 0.05 },
  disgusted: { inner: -0.06, outer: -0.01, eye: 0.75, wide: 0.15, corners: -0.04, open: 0 },
  thinking: { inner: -0.05, outer: 0.02, eye: 0.7, wide: 0.13, corners: -0.012, open: 0 },
  tired: { inner: 0.03, outer: -0.06, eye: 0.55, wide: 0.15, corners: -0.025, open: 0 },
};
// toward the person's left, level
function leftOf(F) {
  const { sub, unit } = V(), d = sub(F.P('LeftLeg'), F.P('RightLeg'));
  return unit([d[0], 0, d[2]]);
}
return {
  ...data,
  characters: {
    // the man, 31, a schoolteacher who collects beetles: lean, short dark hair, an off-white shirt, grey trousers,
    // a tin collecting box on a strap at his left hip, his insect net held upright like a staff in the right hand
    man: { kind: 'shapes', style: 'dunes', who: 'man', garment: 'none', hair: 'short', parts: ['net', 'box'],
      body: { height: 1.0, thick: 0.9, shoulders: 1.0 },
      colors: { skin: '#d8ab8b', hair: '#2a221e', top: '#ebe5d7', bottom: '#66655e', shoes: '#4a3b2e' } },
    // the woman, about thirty: small, dark hair in a low knot, an indigo work robe to mid-calf over trousers of the
    // same cloth, a white towel round her neck, barefoot in the sand
    woman: { kind: 'shapes', style: 'dunes', who: 'woman', garment: 'robe_work', hair: 'bun', scarf: true, barefoot: 'both',
      body: { height: 0.91, thick: 0.84, shoulders: 0.86, neck: 1.05 },
      colors: { skin: '#cf9f7d', hair: '#1f1916', top: '#3e4d6b', garment: '#3e4d6b', bottom: '#33405a', accent: '#efebe2' } },
    // the old man of the village co-operative: polite, a cap, a grey work jacket, grey hair under the cap
    elder: { kind: 'shapes', style: 'dunes', who: 'old', garment: 'jacket', hair: 'short', hat: 'cap',
      body: { height: 0.94, thick: 0.95, shoulders: 0.98 },
      colors: { skin: '#b98b6c', hair: '#cdc6bb', top: '#a69e8c', garment: '#5f5b52', bottom: '#4a463f', hat: '#33312d', shoes: '#2a2622' } },
  },
  shapes: {
    // the world's style: the engine's flat geometry with the world's own face, the head a little larger so faces read
    styles: { dunes: { from: 'flat', name: 'Dunes', face: 'abe', head: 1.2, line: 0.9 } },
    // the world's face: eyes (a white with a dark iris), brows, a nose and a mouth of darker lips, bold enough to read
    // at five to eight metres; drawn for each expression the engine knows (`<id>_mood`), the same solids every time
    faces: { abe: { name: 'Dunes', draw: F => {
      const x = MOODS[F.look.expression] ?? MOODS.neutral, { axes, r: rh, on } = F.head, [, hu] = axes;
      const tone = (c, k) => [c[0] * k[0], c[1] * k[1], c[2] * k[2], c[3] ?? 1];
      const iris = [0.12, 0.09, 0.08, 1], white = [0.94, 0.92, 0.88, 1], brow = tone(F.colors.hair, [0.6, 0.6, 0.6]);
      const lips = tone(F.colors.skin, [0.68, 0.48, 0.45]), nose = tone(F.colors.skin, [0.95, 0.93, 0.92]);
      for (const sx of [-1, 1]) {
        F.ball(on([sx * 0.34, 0.07, 0.93], 0.975), axes, [rh * 0.14, rh * 0.1 * x.eye, rh * 0.04], white, 10);
        F.ball(on([sx * 0.33, 0.065, 0.95], 0.99), axes, [rh * 0.082, rh * Math.min(0.088, 0.096 * x.eye), rh * 0.035], iris, 10);
        F.tube([on([sx * 0.14, 0.32 + x.inner, 0.94], 0.995), on([sx * 0.32, 0.35 + (x.inner + x.outer) / 2, 0.9], 1.0), on([sx * 0.5, 0.3 + x.outer, 0.82], 0.995)],
          [[0, rh * 0.06], [1, rh * 0.065], [2, rh * 0.042]], [[0, brow]], 6, hu);
      }
      F.ball(on([0, -0.1, 1], 0.97), axes, [rh * 0.09, rh * 0.13, rh * 0.12], nose, 10);
      const w = x.wide, y = -0.4;
      F.ball(on([0, y - x.open / 2, 0.95], 0.975), axes, [rh * w * 0.75, rh * x.open, rh * 0.03], iris, 10);
      F.tube([on([-w, y + x.corners, 0.93], 0.995), on([0, y, 0.94], 1.0), on([w, y + x.corners, 0.93], 0.995)], [[0, rh * 0.042], [1, rh * 0.05], [2, rh * 0.042]], [[0, lips]], 6, hu);
    } } },
    garments: {
      // a plain work robe from the shoulders to mid-calf, long sleeves; the trousers under it the look's bottom
      robe_work: { name: 'work robe', hang: [{ to: 1.6, from: 'shoulders', flare: 0.2 }], sleeves: 'garment' },
    },
    parts: {
      // an insect net held upright like a staff in the right hand: a bamboo pole from the sand by the right foot up
      // through the hand, a wire hoop at its top, the gauze bag hanging from it (a little late as he moves)
      net: { name: 'insect net', draw: F => {
        const { add, mul, sub, unit, cross } = V(), m = F.fit.h, hand = F.P('RightHand'), foot = F.P('RightFoot');
        const out = mul(leftOf(F), -1), base = add(add(foot, mul(out, 0.1 * m)), [0, -0.05 * m, 0]);
        const dir = unit(sub(hand, base)), top = add(base, mul(dir, 1.95 * m));
        F.bar(base, top, 0.011 * m, 0.009 * m, [[0, BAMBOO]], 6, out);
        const face = unit(cross(dir, out)), c = add(top, mul(dir, 0.17 * m)), hoop = [];
        for (let i = 0; i <= 12; i++) {
          const a = (i / 12) * Math.PI * 2;
          hoop.push(add(c, add(mul(out, Math.cos(a) * 0.17 * m), mul(dir, Math.sin(a) * 0.17 * m))));
        }
        // the hoop in two halves (a tube takes eight points at most)
        F.tube(hoop.slice(0, 7), [[0, 0.006 * m], [6, 0.006 * m]], [[0, WIRE]], 5, face);
        F.tube(hoop.slice(6, 13), [[0, 0.006 * m], [6, 0.006 * m]], [[0, WIRE]], 5, face);
        // the gauze bag: hanging from the hoop's lower half, narrowing to a soft point
        const lip = add(c, mul(dir, -0.08 * m)), end = F.swing('netbag', add(lip, [0, -0.34 * m, 0]), 70);
        F.tube([lip, add(lip, [0, -0.14 * m, 0]), end], [[0, 0.12 * m], [1, 0.09 * m], [2, 0.02 * m]], [[0, GAUZE]], 10, face);
      } },
      // a tin collecting box at the left hip on a leather strap over the right shoulder
      box: { name: 'collecting box', draw: F => {
        const { add, mul, unit, cross } = V(), m = F.fit.h, k = F.k, left = leftOf(F), up = [0, 1, 0], fw = unit(cross(left, up));
        const c = add(add(F.P('LeftLeg'), mul(left, 0.15 * k)), add([0, 0.03 * m, 0], mul(fw, 0.02 * k)));
        F.ball(c, [left, up, fw], [0.045 * k, 0.075 * m, 0.12 * m], TIN, 4, 4);
        const fc = F.fwd('Chest');
        const p0 = add(c, [0, 0.07 * m, 0]);
        const p1 = add(add(F.P('Spine1'), mul(fc, 0.13 * k)), mul(left, 0.06 * k));
        const p2 = add(add(F.P('Chest'), mul(fc, 0.14 * k)), mul(left, -0.05 * k));
        const p3 = add(add(F.P('Neck1'), mul(left, -0.1 * k)), [0, -0.03 * m, 0]);
        F.tube([p0, p1, p2, p3], [[0, 0.014 * m], [3, 0.014 * m]], [[0, STRAP]], 4, fc, 0.3);
      } },
    },
  },
};
