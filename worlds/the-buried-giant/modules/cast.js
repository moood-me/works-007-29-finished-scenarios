// The people of «The Buried Giant» as people in a scene (an element with "person"): figures of shapes in the world's
// style — clean flat shapes in muted colours, lit by the scene's own light, faces simple and readable. cast.md says who
// is who and what each carries. A part's lengths are a man's metres times F.fit.h (the person's height as a share of a
// man's 1.76 m).
const V = () => MooodShapes.V;
const CLOTH = [0.6, 0.55, 0.46, 1], LEATHER = [0.24, 0.18, 0.13, 1], STEEL = [0.66, 0.67, 0.68, 1], BRASS = [0.6, 0.5, 0.3, 1];
// the face's expressions (<id>_mood): brows' inner and outer ends up, the eyes' openness, the mouth's width, its
// corners up or down — as the engine's simple face has them
const MOODS = {
  neutral: { inner: 0, outer: 0, eye: 1, wide: 0.15, corners: 0 },
  smile: { inner: 0.01, outer: 0.01, eye: 0.85, wide: 0.17, corners: 0.05 },
  sad: { inner: 0.07, outer: -0.05, eye: 0.85, wide: 0.14, corners: -0.045 },
  thinking: { inner: -0.03, outer: 0.03, eye: 0.85, wide: 0.1, corners: -0.01 },
  tired: { inner: 0.02, outer: -0.05, eye: 0.55, wide: 0.14, corners: -0.02 },
  afraid: { inner: 0.09, outer: 0.01, eye: 1.3, wide: 0.13, corners: -0.03 },
};
// toward the person's right, level
function rightOf(F) {
  const { sub, unit } = V(), d = sub(F.P('RightLeg'), F.P('LeftLeg'));
  return unit([d[0], 0, d[2]]);
}
return {
  ...data,
  characters: {
    // Axl, past seventy: lean, a little bowed, white hair and a short white beard, a worn brown-grey coat; a bundle
    // in his right hand
    axl: { kind: 'shapes', style: 'giant', who: 'old', garment: 'coat', hair: 'short', parts: ['beard', 'bundle'],
      body: { height: 0.96, thick: 0.9, shoulders: 0.95 },
      colors: { skin: '#cfa587', hair: '#d6d1c8', garment: '#6e6252', top: '#b9ae99', bottom: '#4b443b', shoes: '#2e2924' } },
    // Beatrice, past seventy: small, straight-backed, grey hair in a knot, a long slate-blue dress, the red shawl —
    // the only red in the game
    beatrice: { kind: 'shapes', style: 'giant', who: 'woman', garment: 'shawl_dress', hair: 'bun', scarf: true,
      body: { height: 0.9, thick: 0.86, shoulders: 0.86 },
      colors: { skin: '#dcb398', hair: '#9d9790', garment: '#596572', top: '#596572', accent: '#b0302b', shoes: '#2b2724' } },
    // Wistan, about thirty-five: tall, broad, dark short hair, a long moss-dark coat over a warrior's tunic, a sword
    // at his left hip
    wistan: { kind: 'shapes', style: 'giant', who: 'man', garment: 'coat', hair: 'short', parts: ['sword'],
      body: { height: 1.05, shoulders: 1.1, thick: 1.02 },
      colors: { skin: '#c49474', hair: '#3a2b21', garment: '#414b3d', top: '#7c7462', bottom: '#3b362f', shoes: '#2a241f' } },
  },
  shapes: {
    // the world's style: the engine's flat geometry — straight edges, plain colours lit by the scene, a fine line,
    // a simple face (eyes, brows, nose, mouth) so the faces read
    styles: { giant: { from: 'flat', name: 'The Buried Giant', head: 1.2, line: 0.8, face: 'giant' } },
    faces: {
      // the simple face drawn bolder, so it reads at a few metres: larger dark eyes, thicker brows a shade darker than
      // the hair, a nose, a mouth
      giant: { name: 'bold simple', draw: F => {
        const { axes, r: rh, on } = F.head, [, hu] = axes, dark = [0.15, 0.12, 0.11, 1];
        const brow = [...F.colors.hair.slice(0, 3).map(v => v * 0.6), 1], lips = [...F.colors.skin.slice(0, 3).map(v => v * 0.68), 1];
        const x = MOODS[F.look.expression] ?? MOODS.neutral;
        for (const sx of [-1, 1]) {
          F.ball(on([sx * 0.33, 0.06, 0.94], 0.985), axes, [rh * 0.1, rh * 0.12 * x.eye, rh * 0.05], dark, 10);
          F.tube([on([sx * 0.15, 0.34 + x.inner, 0.93], 0.995), on([sx * 0.3, 0.37 + (x.inner + x.outer) / 2, 0.9], 1.0), on([sx * 0.47, 0.31 + x.outer, 0.84], 0.995)],
            [[0, rh * 0.045], [1, rh * 0.05], [2, rh * 0.032]], [[0, brow]], 6, hu);
        }
        F.ball(on([0, -0.1, 1], 0.97), axes, [rh * 0.1, rh * 0.14, rh * 0.13], [...F.colors.skin.slice(0, 3).map(v => v * 0.93), 1], 10);
        const w = x.wide, y = -0.38;
        F.tube([on([-w, y + x.corners, 0.93], 0.995), on([0, y, 0.94], 1.0), on([w, y + x.corners, 0.93], 0.995)], [[0, rh * 0.028], [2, rh * 0.028]], [[0, lips]], 6, hu);
      } },
    },
    garments: {
      // a long dress with long sleeves, and over the shoulders a short shawl in the accent colour
      shawl_dress: { name: 'dress and shawl', hang: [
        { to: 1.95, from: 'shoulders', flare: 0.32 },
        { to: 0.05, from: 'shoulders', flare: 0.55, off: 1.3, color: 'accent' },
      ], sleeves: 'garment' },
    },
    parts: {
      // a short beard on the chin and under it (the colour of the hair), the mouth above it left clear
      beard: { name: 'beard', draw: F => {
        const { add, mul } = V(), h = F.head, [, hu, hf] = h.axes, r = h.r * h.out;
        F.cap(h.at, h.axes, h.egg.map(e => e * r * 1.04), [0, -0.95, 0.3], 0.68, F.colors.hair, h.sides, h.square);
        F.ball(add(h.at, add(mul(hu, -r * 0.92), mul(hf, r * 0.42))), h.axes, [r * 0.42, r * 0.32, r * 0.3], F.colors.hair, h.sides);
      } },
      // a cloth bundle tied at the top, hanging from the right hand
      bundle: { name: 'bundle', draw: F => {
        const { add } = V(), m = F.fit.h, h = F.P('RightHand');
        const axes = [F.side('Hips'), [0, 1, 0], F.fwd('Hips')];
        F.ball(F.swing('bundle', add(h, [0, -0.15 * m, 0]), 70), axes, [0.13 * m, 0.11 * m, 0.1 * m], CLOTH, 14);
        F.ball(add(h, [0, -0.03 * m, 0]), axes, [0.03 * m, 0.04 * m, 0.03 * m], CLOTH, 10);
      } },
      // a sword in its scabbard at the left hip, the hilt forward, the point down behind the leg
      sword: { name: 'sword', draw: F => {
        const { add, mul, cross, unit } = V(), m = F.fit.h, right = rightOf(F), fwd = cross([0, 1, 0], right);
        const hip = add(F.P('Hips'), add(mul(right, -0.2 * m), [0, 0.02 * m, 0]));
        const guard = add(hip, mul(fwd, 0.06 * m)), tip = add(hip, add(mul(fwd, -0.3 * m), [0, -0.82 * m, 0]));
        const down = unit([tip[0] - guard[0], tip[1] - guard[1], tip[2] - guard[2]]), pommel = add(guard, mul(down, -0.2 * m));
        F.bar(guard, tip, 0.03 * m, 0.022 * m, [[0, LEATHER]], 6, right);
        F.bar(add(guard, mul(right, -0.08 * m)), add(guard, mul(right, 0.08 * m)), 0.012 * m, 0.012 * m, [[0, BRASS]], 5, fwd);
        F.bar(guard, pommel, 0.014 * m, 0.014 * m, [[0, LEATHER]], 5, right);
        F.ball(pommel, [right, down, fwd], [0.025 * m, 0.025 * m, 0.025 * m], STEEL, 8);
      } },
    },
  },
};
